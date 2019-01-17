import React from 'react';
import {Columns, Column} from 'bloomer';
import {Link} from '@reach/router';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import plus from '../plus-solid.png';
import Heap from './Heap.jsx';

const GET_HEAPS = gql`
{
	getHeaps {
		id
		name
	}
}
`;

export default class HeapContainer extends React.Component {
	render() {
		return (
			<Columns isMultiline isGrid>
				<Query query={GET_HEAPS}>
					{({loading, error, data}) => {
						if (loading) {
							return 'Loading...';
						}
						if (error) {
							console.log(error);
							return null;
						}
						console.log(data);
						return data.getHeaps.map(heap => {
							return (
								<Column key={heap.id} isSize="1/4">
									<Heap id={heap.id} thumbnail={heap.thumbnail} name={heap.id}/>
								</Column>
							);
						});
					}}
				</Query>
				<Column isSize="1/4">
					<Link to="createheap">
						<Heap noLink thumbnail={plus} name="Create new..."/>
					</Link>
				</Column>

			</Columns>
		);
	}
}
