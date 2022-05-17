import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Drink</TableCell>
                        <TableCell align="right">Price &nbsp;($)</TableCell>
                        <TableCell align="right">Quantity &nbsp;(ml)</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itemData.map((item) => (
                        <TableRow
                            key={item.title}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {item.title}
                            </TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                            <TableCell align="right">{item.quantity}</TableCell>
                            <TableCell align="right">{item.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const itemData = [

    {
        title: 'Espresso',
        price: '2.05$',
        quantity: '30ml',
        description: 'Is a concentrated form of coffee served in small, strong shots and is the base for many coffee drinks.'
    },
    {
        title: 'Long espresso',
        price: '3.15$',
        quantity: '130ml',
        description: 'Is an espresso made with more water.'
    },
    {
        title: 'Americano',
        price: '2.55$',
        quantity: '140ml',
        description: 'Is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee.'
    },
    {
        title: 'Iced Coffee',
        price: '2.65$',
        quantity: '470ml',
        description: 'Is a coffee beverage served cold. It may be prepared either by brewing coffee normally and then serving it over ice or in cold milk, or by brewing the coffee cold.'
    },
    {
        title: 'Frappuccino',
        price: '3.95$',
        quantity: '470ml',
        description: 'It consists of coffee or crème base, blended with ice and ingredients such as flavored syrups and usually topped with whipped cream and or spices.'
    },
    {
        title: 'Iced Espresso',
        price: '2.25$',
        quantity: '44ml',
        description: 'Espresso served over ice, often with milk'
    },
    {
        title: 'Cappuccino',
        price: '4.36$',
        quantity: '150ml',
        description: 'Iis the perfect balance of espresso, steamed milk and foam.'
    },
    {
        title: 'Latte',
        price: '2.95$',
        quantity: '250ml',
        description: 'Is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.'
    },
    {
        title: 'Coffee mocha',
        price: '4.01$',
        quantity: '300ml',
        description: 'Is essentially a chocolate flavored variant of a cafe latte, or even a hot chocolate with shots of espresso in it'
    },
];