import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';

// the items from the tabel
const rows = [
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
];

// the headCells after which it will be possible to sort the elements in the table
const headCells = [
  {
    id: 'price',
    numeric: true,
    label: 'Price ($)',
  },
  {
    id: 'quantity',
    numeric: true,
    label: 'Quantity (ml)',
  },
];

// function that compares two items
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// a function that calls the 'descendingComparator' based on the valuea of the 
// 'order'
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// fucntion used to sort the elements
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// function to display the table head 
function CoffeeTableHead(props) {
  const {  order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{backgroundColor: '#800000'}}>
        <TableCell sx={styleTableHeadCell}> Drinks </TableCell>

        {/* the user can sort the items from the tabel based on price and quantity */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={styleSortingTableHeadCell}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell sx={styleTableHeadCell}>Description</TableCell>
      </TableRow>
    </TableHead>
  );
}

CoffeeTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function CoffeTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // function to change the page
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // function to change the number of the rows displayed in the table
  // there can be dispalyed 5 or 10 rows at once in the  table
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer sx={{borderRadius: '5px'}}>
          <Table>
            <CoffeeTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  
                  return (
                    <TableRow hover>
                      <TableCell sx={{ textAlign: 'center'}}> {row.title} </TableCell>
                      <TableCell sx={{ textAlign: 'center'}}> {row.price}</TableCell>
                      <TableCell sx={{ textAlign: 'center'}}> {row.quantity}</TableCell>
                      <TableCell sx={{ textAlign: 'center'}}> {row.description}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

const styleTableHeadCell = {
  fontWeight: 'bolder', 
  color: '#90b1c8', 
  textAlign: 'center'
};

const styleSortingTableHeadCell = {
  fontWeight: 'bolder', 
  color: '#90b1c8', 
  textAlign: 'center',
  width: '115px'
};