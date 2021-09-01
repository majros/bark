import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.text.disabled,
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(key, position, shipType, dwt, salary, duration, joinDate, additionalInfo) {
    return { key, position, shipType, dwt, salary, duration, joinDate, additionalInfo};
}

const rows = [
    createData('1', '2nd Engineer', 'Reefer', 12900, 7350, 5, '09/Aug/2021', 'Engine Type: MAN B&W HITACHI ZOSEN 8S50MC-C, ' +
        '12622 KW Reefer 390 TEU (including 185 REF C). 2 cranes X 40T SWL. 2 cranes X 12T SWL. Mixed crew. US visa is mandatory.'),
    createData('2', '3nd Engineer', 'Car carrier', 6000, 8000, 2, '10/Aug/2021', 'Engine Type: 2 X MAN B&W 9L 40/45 4 STROKE 9 CYLINDER, 12960KW' +
        'Roll on/roll off, car carrier. 15224 GRT. Wage in Euro. Contract duration 8 weeks on / 8 weeks off. Car Carrier experience required. US visa is mandatory.'),
    createData('3', '3rd Officer', 'Oil chemical tanker', 17462, 4000, 5, '16/Aug/2021', 'Engine Type: MAN B&W 6s35MC MK7' +
        'We are looking for experienced full crew for two chemical tankers, trading Chem Products. Similar previous experience is a MUST' +
        'Russian speaking crew'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>POSITION</StyledTableCell>
                        <StyledTableCell>SHIP TYPE</StyledTableCell>
                        <StyledTableCell>DWT</StyledTableCell>
                        <StyledTableCell>SALARY (USD)</StyledTableCell>
                        <StyledTableCell>DURATION (MONTHS)</StyledTableCell>
                        <StyledTableCell>JOIN DATE</StyledTableCell>
                        <StyledTableCell align='center' className={classes.table}>ADDITIONAL INFO</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.key}>
                            <StyledTableCell  component="th" scope="row">{row.position}</StyledTableCell >
                            <StyledTableCell  align="center">{row.shipType}</StyledTableCell>
                            <StyledTableCell  align="center">{row.dwt}</StyledTableCell>
                            <StyledTableCell  align="center">{row.salary}</StyledTableCell>
                            <StyledTableCell  align="center">{row.duration}</StyledTableCell>
                            <StyledTableCell  align="center">{row.joinDate}</StyledTableCell>
                            <StyledTableCell  align="left">{row.additionalInfo}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
