import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { HeaderLanding, Footer } from 'enl-components';
import useStyles from './appStyles-jss';

function Corporate(props) {
  const { children } = props;
  const { classes } = useStyles();
  const [transform, setTransform] = useState(0);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    setTransform(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={classes.appFrameLanding} id="mainContent">
      <HeaderLanding turnDarker={transform > 30} />
      {children}
      <Footer />
    </div>
  );
}

Corporate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Corporate;
