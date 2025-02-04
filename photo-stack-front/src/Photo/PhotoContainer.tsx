import React from "react";
import Photo from "./Photo.jsx";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Redirect } from "@reach/router";

import "../stylesheets/photo.scss";

const GET_PHOTO = gql`
  query getPhoto($id: ID!) {
    getPhoto(id: $id) {
      objectId
      thumbnail
    }
  }
`;

export default class PhotoContainer extends React.Component {
  render() {
    const { isOpen, onClose, photoId } = this.props;
    return (
      <Query query={GET_PHOTO} variables={{ id: photoId }}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading...";
          }
          if (data) {
            const display = [
              {
                original:
                  document.location.origin + "/image/" + data.getPhoto.objectId,
                thumbnail:
                  document.location.origin + "/image/" + data.getPhoto.thumbnail
              }
            ];
            return (
              <Photo isOpen={isOpen} photoList={display} onClose={onClose} />
            );
          }
          console.log(JSON.stringify(error));
          return <Redirect to="/" />;
        }}
      </Query>
    );
  }
}
