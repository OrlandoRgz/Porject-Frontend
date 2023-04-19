import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateButton from './UpdateButton';
import StoreButton from './StoreButton';
import DestroyButton from './DestroyButton';
import UpdateStudentModal from './UpdateStudentModal';


export default function StudentCRUD(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <UpdateStudentModal setOpen={setOpen} open={open}></UpdateStudentModal>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">serial number</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">surname</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.students.map((row) => (
            <TableRow
              >
              <TableCell align="right">{row.serial_number}</TableCell>
              <TableCell align="right">{row.general_data.name}</TableCell>
              <TableCell align="right">{row.general_data.surname}</TableCell>
              <TableCell align="right">
                <UpdateButton handleClickOpen={handleClickOpen} open={open} ></UpdateButton>
              <DestroyButton setStudent={props.setStudent} serial_number={row.serial_number}></DestroyButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}