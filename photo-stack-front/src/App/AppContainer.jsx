import {DH_UNABLE_TO_CHECK_GENERATOR} from 'constants';
import React from 'react';
import FileDrop from 'react-file-drop';
import {Mutation, Query} from 'react-apollo';
import gql from 'graphql-tag';
import Header from '../Header';
import PhotoContainer from '../Photo';
import App from './App.jsx';

const UPLOAD_FILE = gql`
  mutation uploadPhoto($file: Upload!) {
    uploadPhoto(file: $file) {
      mimetype
      encoding
      filename
    }
  }
`;

const GET_USER = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      firstName
    }
  }
`;

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "5c195cb83548db0006e1ebaf",
        firstName: "Username"
      }
    };
  }

  uploadAction = (fileList, test) => {
    console.log("up action", fileList, test);
    var data = new FormData();
    for (let i = 0; i < fileList.length; i++)
      data.append("photos", fileList[i]);

    fetch("http://localhost:4000/upload", {
      mode: "no-cors",
      method: "POST",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   Accept: "application/json",
      //   type: "formData"
      // },
      body: data
    }).then(
      function(res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status == 401) {
          alert("Oops! ");
        }
      },
      function(e) {
        alert("Error submitting form!");
      }
    );
  };

 
	render() {
		const {
			user
		} = this.state;
		return (
					<FileDrop
						onDrop={this.uploadAction}
					>
						<Query query={GET_USER} variables={{id: user.id}}>
							{({loading, error, data}) => {
								if (loading) {
									return 'Loading...';
								}
								if (error) {
									console.log(error);
									return null;
								}
								return (
									<Header
										type="search"
										userName={data.getUserById.firstName}
										onSearch={this.handleSearch}
										onPreferences={this.togglePreferences}
									/>
								);
							}}
						</Query>
						{this.props.children}
						{/*
						<PhotoContainer
							isOpen={selectedPhotoIsOpen}
							photoId={selectedPhotoId}
							onClose={this.handlePhotoClose}
						/> */}
					</FileDrop>
				);}
}