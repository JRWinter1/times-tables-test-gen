import React from 'react';
import { makeStyles, Theme, FormControl, InputLabel, Select, Input, MenuItem, Checkbox, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            display: "flex",

        },
        formControl: {
            margin: theme.spacing(1),
            width: 250,
        },
        columnsAndRowsFormControl: {
            margin: theme.spacing(1),
            width: 150
        },
        noPadding: {
            paddingTop: 0,
            paddingBottom: 0
        }
    }
})

const numberOptions = Array.from(Array(15).keys()).map(number => { return number + 1 });

const columnOptions = Array.from(Array(8).keys()).map(number => { return number + 1 });

const rowOptions = Array.from(Array(10).keys()).map(number => { return number + 1 });

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * numberOptions.length + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const defaultExcludes = [1, 2, 5, 10, 13, 14, 15];

interface Props {
    readonly columns: number;
    readonly rows: number;
    readonly onNumberOfColumnsChanged: (x: number) => void;
    readonly onNumberOfRowsChanged: (x: number) => void;
}

const Configuration: React.FC<Props> = (props: Props) => {
    const [selectedNumbers, setSelectedNumbers] = React.useState<ReadonlyArray<number>>(numberOptions.filter(x => defaultExcludes.indexOf(x) === -1));


    const handleSelectedNumbersChanged = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedNumbers(event.target.value as number[]);
    };

    const handleRowsChanged = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.onNumberOfRowsChanged(event.target.value as number);
    };

    const handleColumnsChanged = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.onNumberOfColumnsChanged(event.target.value as number);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <FormControl className={classes.formControl}>
                <InputLabel>
                    Numbers To Include
                </InputLabel>
                <Select
                    multiple={true}
                    value={selectedNumbers}
                    onChange={handleSelectedNumbersChanged}
                    input={<Input />}
                    renderValue={(selected) => (selected as number[]).sort((one, two) => one < two ? -1 : 1).join(', ')}
                    MenuProps={MenuProps}
                >
                    {numberOptions.map((x) => {
                        return (
                            <MenuItem className={classes.noPadding} key={x} value={x}>
                                <Checkbox size="small" checked={selectedNumbers.indexOf(x) > -1} />
                                <ListItemText primary={x} />
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.columnsAndRowsFormControl} >
                <InputLabel>
                    No. of Columns
                </InputLabel>
                <Select
                    value={props.columns}
                    onChange={handleColumnsChanged}
                    MenuProps={MenuProps}
                    input={<Input />}
                    renderValue={selected => selected as string}
                >
                    {columnOptions.map((x) => {
                        return (
                            <MenuItem className={classes.noPadding} key={x} value={x}>
                                <ListItemText primary={x} />
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <FormControl className={classes.columnsAndRowsFormControl}>
                <InputLabel>
                    No. of Rows
                </InputLabel>
                <Select
                    value={props.rows}
                    onChange={handleRowsChanged}
                    MenuProps={MenuProps}
                    input={<Input />}
                    renderValue={(selected) => (selected as string)}
                    className={classes.noPadding}
                >
                    {rowOptions.map((x) => {
                        return (
                            <MenuItem className={classes.noPadding} key={x} value={x}>
                                <ListItemText primary={x} />
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </div>
    );
}

export default Configuration;
