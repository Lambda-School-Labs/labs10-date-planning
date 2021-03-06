import React, { useState } from 'react';
import Link from 'next/link';
import NProgress from 'nprogress';
import { Mutation } from 'react-apollo';
import InputRange from 'react-input-range';
import { UPDATE_USER_MUTATION } from '../Mutations/updateUser';
import { withStyles } from '@material-ui/core';
import Button from '../../styledComponents/CustomButtons/Button';
import { Favorite, Event, ChatBubble, Receipt } from '@material-ui/icons';
import GridContainer from '../../styledComponents/Grid/GridContainer';
import GridItem from '../../styledComponents/Grid/GridItem';
import styles from '../../static/jss/Welcome/welcomeStyles';

const Pro = ({ classes }) => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				color: 'white',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'rgb(0,0,0,.6)',
					padding: '40px',
					//   border: '2px solid #ff101f',
					borderRadius: '6px',
					zIndex: '1',
				}}
			>
				<h2>Our awesome pro features</h2>
				<GridContainer>
					<GridItem
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						sm={4}
						md={3}
						lg={3}
					>
						<Favorite
							className={classes.favorite}
							style={{ width: '100px', height: '100px' }}
						/>
						<p>See who has liked you</p>
					</GridItem>
					<GridItem
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						sm={4}
						md={3}
						lg={3}
					>
						<Event
							className={classes.event}
							style={{ width: '100px', height: '100px' }}
						/>
						<p>Express interest in an unlimited number of events</p>
					</GridItem>
					<GridItem
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						sm={4}
						md={3}
						lg={3}
					>
						<ChatBubble
							className={classes.chat}
							style={{ width: '100px', height: '100px' }}
						/>
						<p>Send an unlimited number of messages</p>
					</GridItem>
					<GridItem
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						sm={4}
						md={3}
						lg={3}
					>
						<Receipt
							className={classes.receipt}
							style={{ width: '100px', height: '100px' }}
						/>
						<p>View read receipts</p>
					</GridItem>
				</GridContainer>
				<Link href='/profile?slug=billing' as='/profile/billing'>
					<Button
						className={classes.proButton}
						color='danger'
						size='lg'
						style={{ zIndex: 1 }}
					>
						Go Pro!
					</Button>
				</Link>
				<Link href='/home'>
					<Button style={{ zIndex: 1 }}>Skip</Button>
				</Link>
			</div>
		</div>
	);
};

export default withStyles(styles)(Pro);
