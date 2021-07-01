import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      borderStyle: "solid",
      borderWidth: "1px",
      width: "2em",
      height: "1.5em",
    },
  };
});

interface Props {
  className?: string;
}

const TestGrid: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return <div className={clsx(classes.root, props.className)}></div>;
};

export default TestGrid;
