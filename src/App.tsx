import React from 'react';
import { makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import Configuration from './components/Configuration';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center"
    },
    container: {
      paddingTop: theme.spacing(2),
      width: "75%"
    },
    paper: {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.grey[200]
    },
    title: {
      width: "100%"
    }
  }
})

const App: React.FC = () => {
  const [numberOfcolumns, setNumberOfColumns] = React.useState(5);
  const [numberOfRows, setNumberOfRows] = React.useState(10);

  const handleNumberOfColumnsChanged = (x: number) => {
    setNumberOfColumns(x)
  }

  const handleNumberOfRowsChanged = (x: number) => {
    setNumberOfRows(x)
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography >Times Tables Test Generator</Typography>
          <Configuration
            columns={numberOfcolumns}
            rows={numberOfRows}
            onNumberOfColumnsChanged={handleNumberOfColumnsChanged}
            onNumberOfRowsChanged={handleNumberOfRowsChanged} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
