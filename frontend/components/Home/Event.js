import React, { useState, useEffect } from 'react';
import moment from 'moment';
import NProgress from 'nprogress';
//MUI

import { Bookmark, Add } from '@material-ui/icons';
import withStyles from '@material-ui/core/styles/withStyles';

//Components
import EventModal from './EventModal';
//Styled components
import Card from '../../styledComponents/Card/Card';
import CardHeader from '../../styledComponents/Card/CardHeader';
import CardFooter from '../../styledComponents/Card/CardFooter';
import CardBody from '../../styledComponents/Card/CardBody';
//styles
import CardStyles from '../../static/jss/material-kit-pro-react/views/componentsSections/sectionCards';

import '../../styles/Home/Event.scss';

const Event = ({ event, classes, user }) => {
	const [ modal, showModal ] = useState(false);
	let isSaved = user.events.find(e => e.eventfulID === event.id);

	event.times = event.times.sort((a, b) => {
		let dateA = new Date(a);
		let dateB = new Date(b);
		return dateA - dateB;
	});

	return (
		<Card blog onClick={() => showModal(true)}>
			{event.image_url && (
				<CardHeader image>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						<img src={event.image_url} alt='...' />
					</a>
					<div
						className={classes.coloredShadow}
						style={{
							backgroundImage: `url(${event.image_url})`,
							opacity: '1',
						}}
					/>
				</CardHeader>
			)}
			<CardBody className={classes.cardBodyRotate}>
				{/* <h6 style={{border: '2px solid #b2ddf7', borderRadius: '6px', padding: '10px'}}className={classes.cardCategory}>{event.location.venue}</h6> */}
				<h6
					style={{
						// backgroundColor: '#b2ddf7',
						backgroundImage:
							'linear-gradient(to top, #8ad2ff, #94d5fd, #9fd8fb, #a8daf9, #b2ddf7)',
						color: '#fafafa',
						borderRadius: '6px',
						padding: '10px',
					}}
					className={classes.cardCategory}
				>
					{event.location.venue}
				</h6>
				<h4 className={classes.cardTitle}>
					<a href='#pablo' onClick={e => e.preventDefault()}>
						{event.title}
					</a>
				</h4>
			</CardBody>
			<CardFooter>
				{isSaved && <Bookmark className='Event__bookmark' />}
				<div className={`${classes.stats} ${classes.mlAuto}`} style={{ display: 'block' }}>
					{event.times.length > 2 ? (
						<div>
							{moment(event.times[0]).calendar()} -{' '}
							{moment(event.times[event.times.length - 1]).calendar()}
						</div>
					) : (
						event.times.map((time, i) => <div key={i}>{moment(time).calendar()}</div>)
					)}
				</div>
			</CardFooter>
			<EventModal modal={modal} showModal={showModal} event={event} />
		</Card>
	);
};

export default withStyles(CardStyles)(Event);
