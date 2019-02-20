import React from 'react';

import User from '../Queries/User';
import Stripe from './Stripe';
import { CURRENT_USER_QUERY } from '../Queries/User';
import CardHeader from '../../styledComponents/Card/CardHeader';

import classNames from 'classnames';
// core components
import GridContainer from '../../styledComponents/Grid/GridContainer.jsx';
import GridItem from '../../styledComponents/Grid/GridItem.jsx';
import Card from '../../styledComponents/Card/Card.jsx';
import CardBody from '../../styledComponents/Card/CardBody.jsx';
import Button from '../../styledComponents/CustomButtons/Button.jsx';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Weekend from '@material-ui/icons/Weekend';
import Done from '@material-ui/icons/Done';
import DoneAll from '@material-ui/icons/DoneAll';
import DoneOutline from '@material-ui/icons/DoneOutline';
import Code from '@material-ui/icons/Code';
import img from '../../static/img/billingImage.jpg';

import pricingStyle from '../../static/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.jsx';

import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const CANCEL_SUBSCRIPTION = gql`
  mutation cancelSubscription {
    cancelSubscription {
      message
    }
  }
`;

const Billing = ({ classes, currentUser, client }) => {
	const currentSubs = currentUser.permissions[0];

	const cancelSubscription = async() => {
		let { data, loading } = await client.mutate({
			mutation: CANCEL_SUBSCRIPTION
		});
		let currentUser = await client.query({
			query: CURRENT_USER_QUERY
		})
		console.log(data);
	}

	return (
		<div
			className={`${classes.pricing} ${classes.pricing1} ${classes.section}`}
			style={{ backgroundImage: `url(${img})` }}
		>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={6}
						md={6}
						className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
					>
						<h2 className={classes.title}>Pick the best plan for you</h2>
						{/* <h5 className={classes.description}>
							You have Free Unlimited Updates and Premium Support on each package.
						</h5> */}
						<div className={classes.sectionSpace} />
					</GridItem>
				</GridContainer>
				<GridContainer>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'FREE'}
							plain={currentSubs !== 'FREE'}
						>
							<CardBody pricing plain={currentSubs !== 'FREE'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Basic
								</h6>
								<div className={classes.icon}>
									<Done
										className={
											currentSubs === 'FREE' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'FREE'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									FREE
								</h3>
								<p
									className={
										currentSubs === 'FREE' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									This plan allows you save a maximum of 5 events to your account.
								</p>
								<Button
									round
									color={currentSubs === 'FREE' ? 'rose' : 'white'}
									disabled={currentSubs === 'FREE'}
								>
									{currentSubs === 'FREE' ? 'Current Plan' : 'Choose Plan'}
								</Button>
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'MONTHLY'}
							plain={currentSubs !== 'MONTHLY'}
						>
							<CardBody pricing plain={currentSubs !== 'MONTHLY'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Month to Month
								</h6>
								<div className={classes.icon}>
									<DoneAll
										className={
											currentSubs === 'MONTHLY' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'MONTHLY'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									<small>$</small> 9.99 <small>/month</small>
								</h3>
								<p
									className={
										currentSubs === 'MONTHLY' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									This plan allows you save unlimited dates to your account!
								</p>
								{
									currentSubs === 'MONTHLY' ?
									<Button onClick={() => {
										cancelSubscription();
									}}>
										Cancel
									</Button> :
									<Stripe subsType='MONTHLY' user={currentUser}>
										<Button
											round
											color={currentSubs === 'MONTHLY' ? 'rose' : 'white'}
											disabled={currentSubs === 'MONTHLY'}
										>
											{currentSubs === 'MONTHLY' ? 'Current Plan' : 'Choose Plan'}
										</Button>
									</Stripe>
								}
							</CardBody>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6} lg={4}>
						<Card
							pricing
							raised={currentSubs === 'YEARLY'}
							plain={currentSubs !== 'YEARLY'}
						>
							<CardBody pricing plain={currentSubs !== 'YEARLY'}>
								<h6 className={`${classes.cardCategory} ${classes.marginBottom20}`}>
									Yearly
								</h6>
								<div className={classes.icon}>
									<DoneOutline
										className={
											currentSubs === 'YEARLY' ? (
												classes.iconRose
											) : (
												classes.iconWhite
											)
										}
									/>
								</div>
								<h3
									className={`${currentSubs === 'YEARLY'
										? classes.cardTitle
										: classes.cardTitleWhite} ${classes.marginTop30}`}
								>
									<small>$</small> 29.99 <small>/year</small>
								</h3>
								<p
									className={
										currentSubs === 'YEARLY' ? (
											classes.cardDescription
										) : (
											classes.cardCategory
										)
									}
								>
									Discounted price when purchasing annual subscription.
								</p>
								{
									currentSubs === 'YEARLY' ?
									<Button onClick={() => {
										console.log('cliked')
										cancelSubscription();
									}}>
										Cancel
									</Button> :
									<Stripe subsType='YEARLY' user={currentUser}>
										<Button
											round
											color={currentSubs === 'YEARLY' ? 'rose' : 'white'}
											disabled={currentSubs === 'YEARLY'}
										>
											{currentSubs === 'YEARLY' ? 'Current Plan' : 'Choose Plan'}
										</Button>
									</Stripe>
								}
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
};

export default withApollo(withStyles(pricingStyle)(Billing));
