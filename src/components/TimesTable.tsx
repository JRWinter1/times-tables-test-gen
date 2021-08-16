import React from "react";
import { makeStyles, Theme, Typography } from "@material-ui/core";
import { QuestionVaraibles } from "../question-generator/model";
import AnswerBox from "./AnswerBox";
import clsx from "clsx";

const useStyles = (props: Props) =>
  makeStyles((theme: Theme) => {
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
      typography: {
        fontSize: props.fontSize,
      },
    };
  });

interface Props {
  readonly variables: QuestionVaraibles;
  readonly isFlipped?: boolean;
  readonly showAnswers: boolean;
  readonly fontSize: number;
}

const TimesTable: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props)();

  console.log(props.fontSize);

  const valueToHide = props.showAnswers ? 10000 : Math.floor(Math.random() * 3);

  TimesTable.defaultProps = {
    isFlipped: false,
  };

  const renderAnswer = () => {
    return valueToHide === 0 ? (
      <AnswerBox
        className={clsx(classes.typography, !props.isFlipped && classes.indent)}
      />
    ) : (
      <Typography
        className={clsx(classes.typography, !props.isFlipped && classes.indent)}
      >
        {props.variables.y * props.variables.x}
      </Typography>
    );
  };

  const renderVariables = () => {
    return (
      <>
        {valueToHide === 1 ? (
          <AnswerBox
            className={clsx(
              classes.typography,
              props.isFlipped && classes.indent
            )}
          />
        ) : (
          <Typography
            className={clsx(
              classes.typography,
              props.isFlipped && classes.indent
            )}
          >
            {props.variables.x}
          </Typography>
        )}
        <Typography className={clsx(classes.typography, classes.indent)}>
          {" "}
          x{" "}
        </Typography>
        {valueToHide === 2 ? (
          <AnswerBox className={clsx(classes.typography, classes.indent)} />
        ) : (
          <Typography className={clsx(classes.typography, classes.indent)}>
            {props.variables.y}
          </Typography>
        )}
      </>
    );
  };

  return (
    <div className={classes.root}>
      {props.isFlipped ? renderAnswer() : renderVariables()}
      <Typography className={clsx(classes.typography, classes.indent)}>
        =
      </Typography>
      {props.isFlipped ? renderVariables() : renderAnswer()}
    </div>
  );
};

export default TimesTable;
