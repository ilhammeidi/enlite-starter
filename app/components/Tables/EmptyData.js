import React from 'react';
import TableIcon from '@mui/icons-material/Apps';
import useStyles from 'enl-components/Tables/tableStyle-jss';

function EmptyData() {
  const { classes } = useStyles();
  return (
    <div className={classes.nodata}>
      <TableIcon />
      No Data
    </div>
  );
}

export default EmptyData;
