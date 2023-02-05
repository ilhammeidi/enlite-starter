import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react18-swipeable-views';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import guideData from 'enl-api/dummy/guideData';
import useStyles from './guide-jss';

const maxStepsSwipe = guideData.length;

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

function GuideSlider(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const {
    openGuide,
    closeGuide
  } = props;
  const [activeStepSwipe, setActiveStepSwipe] = useState(0);

  const handleNextSwipe = () => {
    setActiveStepSwipe(activeStepSwipe + 1);
  };

  const handleBackSwipe = () => {
    setActiveStepSwipe(activeStepSwipe - 1);
  };

  const handleStepChangeSwipe = newActiveStepSwipe => {
    setActiveStepSwipe(newActiveStepSwipe);
  };

  const handleClose = () => {
    setActiveStepSwipe(0);
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      open={openGuide}
      onClose={closeGuide}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className={classes.root}
    >
      <DialogContent className={classes.rootContent}>
        <SwipeableViews
          className={classes.slider}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStepSwipe}
          onChangeIndex={handleStepChangeSwipe}
          enableMouseEvents
        >
          {guideData.map((step, index) => (
            <div className={classes.figure} key={index.toString()}>
              <img key={step.label} className={classes.img} src={step.imgPath} alt={step.title} />
            </div>
          ))}
        </SwipeableViews>
        <article className={classes.text}>
          <Typography variant="h6">{guideData[activeStepSwipe].title}</Typography>
          <Typography>{guideData[activeStepSwipe].label}</Typography>
        </article>
        <MobileStepper
          variant="progress"
          steps={maxStepsSwipe}
          position="static"
          activeStep={activeStepSwipe}
          className={classes.mobileStepper}
          nextButton={
            activeStepSwipe === maxStepsSwipe - 1 ? (
              <Button size="small" color="primary" onClick={handleClose}>
                Done
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            ) : (
              <Button size="small" onClick={handleNextSwipe}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )
          }
          backButton={(
            <Button size="small" onClick={handleBackSwipe} disabled={activeStepSwipe === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          )}
        />
      </DialogContent>
    </Dialog>
  );
}

GuideSlider.propTypes = {
  openGuide: PropTypes.bool.isRequired,
  closeGuide: PropTypes.func.isRequired,
};

export default GuideSlider;
