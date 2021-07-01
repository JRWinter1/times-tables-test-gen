import React from "react";
import { makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import Configuration from "./components/Configuration";
import { questionVaraiblesGenerator } from "./question-generator/questionGenerator";
import { defaultNumberExcludes, numberOptions } from "./model";
import { QuestionVaraibles } from "./question-generator/model";
import TestGrid from "./components/TestGrid";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "block",
      justifyContent: "center",
    },
    container: {
      paddingTop: theme.spacing(2),
      width: "75%",
    },
    paper: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    title: {
      width: "100%",
    },
    [`@media print`]: {
      paper: {
        display: "none",
      },
    },
  };
});

const App: React.FC = () => {
  const [numberOfcolumns, setNumberOfColumns] = React.useState(5);
  const [numberOfRows, setNumberOfRows] = React.useState(10);
  const [selectedNumbers, setSelectedNumbers] = React.useState<
    ReadonlyArray<number>
  >(numberOptions.filter((x) => defaultNumberExcludes.indexOf(x) === -1));
  const [questionVariables, setQuestionVariables] = React.useState<
    ReadonlyArray<QuestionVaraibles>
  >([]);

  const handleNumberOfColumnsChanged = (x: number) => {
    setNumberOfColumns(x);
    const varaibles = questionVaraiblesGenerator(
      selectedNumbers,
      x * numberOfRows
    );
    setQuestionVariables(varaibles);
  };

  const handleNumberOfRowsChanged = (x: number) => {
    setNumberOfRows(x);
    const varaibles = questionVaraiblesGenerator(
      selectedNumbers,
      numberOfcolumns * x
    );
    setQuestionVariables(varaibles);
  };

  const handleSelectedNumbersChanged = (numbers: ReadonlyArray<number>) => {
    setSelectedNumbers(numbers);
    const varaibles = questionVaraiblesGenerator(
      numbers,
      numberOfcolumns * numberOfRows
    );
    setQuestionVariables(varaibles);
  };

  const handleGenerate = () => {
    const varaibles = questionVaraiblesGenerator(
      selectedNumbers,
      numberOfcolumns * numberOfRows
    );
    setQuestionVariables(varaibles);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography>Times Tables Test Generator</Typography>
          <Configuration
            onGenerate={handleGenerate}
            selectedNumbers={selectedNumbers}
            columns={numberOfcolumns}
            rows={numberOfRows}
            onSelectedNumbersChanged={handleSelectedNumbersChanged}
            onNumberOfColumnsChanged={handleNumberOfColumnsChanged}
            onNumberOfRowsChanged={handleNumberOfRowsChanged}
          />
        </Paper>
        <TestGrid
          showAnswers={false}
          variables={questionVariables}
          numberOfColumns={numberOfcolumns}
          numberOfRows={numberOfRows}
        />
      </div>
    </div>
  );
};

export default App;
