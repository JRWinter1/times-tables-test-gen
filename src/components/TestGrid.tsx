import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { QuestionVaraibles } from "../question-generator/model";
import TimesTable from "./TimesTable";
import Division from "./Division";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      display: "grid",
      gridTemplateColumns: (props: Props) =>
        `repeat(${props.numberOfColumns}, 1fr)`,
      gridTemplateRows: (props: Props) => `repeat(${props.numberOfRows}, 1fr)`,
    },
    item: {
      borderStyle: "dotted",
      borderWidth: "2px",
      margin: "1px",
      borderColor: theme.palette.grey[300],
    },
  };
});

interface Props {
  readonly numberOfColumns: number;
  readonly numberOfRows: number;
  readonly variables: ReadonlyArray<QuestionVaraibles>;
  readonly showAnswers: boolean;
  readonly fontSize: number;
}

const TestGrid: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      {props.variables.map((v, i) => {
        return (
          <div className={classes.item} key={i}>
            {Math.random() > 0.5 ? (
              <TimesTable
                showAnswers={props.showAnswers}
                isFlipped={Math.random() > 0.5}
                key={i}
                variables={v}
                fontSize={props.fontSize}
              />
            ) : (
              <Division
                showAnswers={props.showAnswers}
                isFlipped={Math.random() > 0.5}
                key={i}
                variables={v}
                fontSize={props.fontSize}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TestGrid;
