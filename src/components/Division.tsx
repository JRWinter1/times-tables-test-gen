import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import { QuestionVaraibles } from "../question-generator/model";
import AnswerBox from "./AnswerBox";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      padding: theme.spacing(2),
      height: 26,
    },
    indent: {
      marginLeft: "0.25em",
    },
  };
});

interface Props {
  readonly variables: QuestionVaraibles;
  readonly isFlipped?: boolean;
  readonly showAnswers: boolean;
}

const TimesTable: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  const valueToHide = props.showAnswers ? 10000 : Math.floor(Math.random() * 3);

  const renderAnswer = () => {
    return valueToHide === 0 ? (
      <AnswerBox className={clsx(!props.isFlipped && classes.indent)} />
    ) : (
      <Typography className={clsx(!props.isFlipped && classes.indent)}>
        {props.variables.y}
      </Typography>
    );
  };

  const renderVariables = () => {
    return (
      <>
        {valueToHide === 1 ? (
          <AnswerBox className={clsx(props.isFlipped && classes.indent)} />
        ) : (
          <Typography className={clsx(props.isFlipped && classes.indent)}>
            {props.variables.y * props.variables.x}
          </Typography>
        )}
        <Typography className={classes.indent}> ÷ </Typography>
        {valueToHide === 2 ? (
          <AnswerBox className={classes.indent} />
        ) : (
          <Typography className={classes.indent}>
            {props.variables.x}
          </Typography>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      {props.isFlipped ? renderAnswer() : renderVariables()}
      <Typography className={classes.indent}>=</Typography>
      {props.isFlipped ? renderVariables() : renderAnswer()}
    </div>
  );
};

export default TimesTable;
