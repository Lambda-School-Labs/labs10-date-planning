import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Main from './Main';
import Gender from './Gender';
import GenderPrefs from './GenderPrefs';
import Age from './Age';
import AgePrefs from './AgePrefs';
import Location from './Location';
import Images from './Images';
import Bio from './Bio';
import Pro from './ProFeatures';

import style from '../../static/jss/Welcome/welcomeStyles';

function getSteps() {
	return [
		'Welcome',
		'Gender',
		'Gender Preference',
		'Age',
		'Age Preference',
		'Location',
		'Images',
		'Bio',
		'Go Pro',
	];
}

function getStepContent(stepIndex, user) {
	switch (stepIndex) {
		case 0:
			return <Main user={user} />;
		case 1:
			return <Gender />;
		case 2:
			return <GenderPrefs />;
		case 3:
			return <Age />;
		case 4:
			return <AgePrefs />;
		case 5:
			return <Location />;
		case 6:
			return <Images user={user} />;
		case 7:
			return <Bio />;
		case 8:
			return <Pro />;
		default:
			return 'Unknown stepIndex';
	}
}

function getImage(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "../../static/img/triangle1.svg";
    case 1:
      return "../../static/img/triangle2.svg";
    case 2:
      return "../../static/img/triangle3.svg";
    case 3:
      return "../../static/img/triangle4.svg";
    case 4:
      return "../../static/img/triangle5.svg";
    case 5:
      return "../../static/img/triangle6.svg";
    case 6:
      return "../../static/img/triangle7.svg";
    case 7:
      return "../../static/img/triangle8.svg";
    case 8:
      return "../../static/img/triangle1.svg";
    default:
      return null;
  }
}

const Welcome = ({ classes, user, router: { query } }) => {
	const steps = getSteps();

	return (
		<div
			className={classes.pageHeader}
			style={{
				backgroundImage: `url(${getImage(parseInt(query.slug))})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top center',
			}}
		>
			<div
				style={{
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}
				className={classes.container}
			>
				{getStepContent(parseInt(query.slug), user)}
				<Stepper
					classes={{ root: classes.stepper, alternativeLabel: classes.step }}
					activeStep={parseInt(query.slug)}
					alternativeLabel
				>
					{steps.map(label => (
						<Step key={label}>
							<StepLabel StepIconProps={{ styles: { color: '#fafafa' } }}>
								{label}
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
		</div>
	);
};

export default withRouter(withStyles(style)(Welcome));
