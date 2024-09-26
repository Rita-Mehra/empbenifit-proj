import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { Add, RemoveCircle } from '@mui/icons-material';
import Note from '../../components/note';
import './form2.scss';

const DataTable = ({ item }) => {
  return (
    <>
   
    <div className='member mt4'>
        <div className='question mb2 mt3'><b>{item?.num}</b>{item?.question}</div>
       <div className='table mb4'>
       <TableContainer className='w-100'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='w-100'>
            <TableHead>
            <TableRow>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>
                <TableCell alight="center" colSpan={2}> GTL</TableCell>
                <TableCell alight="center" colSpan={2}> GAP</TableCell>
                <TableCell alight="center" colSpan={2}> GCI</TableCell>
            </TableRow>
            <TableRow>
                <TableCell >PERIOD OF COVERAGE FROM</TableCell>
                <TableCell >PERIOD OF COVERAGE TO</TableCell>
                <TableCell > # OF INSURED</TableCell>
                <TableCell > CLAIM DATE</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
                <TableCell > # OF CLAIMS</TableCell>
                <TableCell > AMOUNT (S$)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>  Data </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell>  Data  </TableCell>
                <TableCell className='border-btm-0'> 
                <RemoveCircle color="error"/>
                </TableCell>
            
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
        <Button className="btn-add" variant="contained" startIcon={<Add />}>
        Add Claims
      </Button>
       </div>
    </div>
    <Note text={item?.note} />
    </>
  )
}

export default DataTable