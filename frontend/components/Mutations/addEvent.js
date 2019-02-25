import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const ADD_EVENT_MUTATION = gql`
	mutation ADD_EVENT_MUTATION(
		$title: String!
		$venue: String!
		$image_url: String
		$times: [String]
		$url: String
		$address: String
		$city: String
		$lat: String
		$long: String
		$description: String
	) {
		addEvent(
			event: {
				title: $title
				venue: $venue
				image_url: $image_url
				times: $times
				url: $url
				address: $address
				city: $city
				lat: $lat
				long: $long
				description: $description
			}
		) {
			message
		}
	}
`;
