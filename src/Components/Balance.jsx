import React from 'react'
import { Typography, makeStyles, Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
const useStyle = makeStyles({
    balance: {
        fontSize: 25,
        marginBottom: 20
    }
})

const Balance = ({ transactions }) => {
    const [balance, setBalance] = useState(0);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    const classes = useStyle();
    return (
        <Box>
            <Typography className={classes.balance}>Balance: ${total}</Typography>
        </Box>
    )
}

export default Balance
