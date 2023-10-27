import React from 'react';
import Table from 'react-bootstrap/Table';
import { ITimeEntry, IUser } from '../constant';

function TimeSheetsTable(props: { timeSheet: ITimeEntry[], user: IUser }) {
    const { timeSheet, user } = props;

    const timeSheetList = timeSheet?.map((i) => {
        return <tr>
            <td>{user?.firstName}</td>
            <td>{user?.lastName}</td>
            <td>{user?.email}</td>
            <td>{i?.assessment}</td>
            <td>{i?.breakMinutes}</td>
            <td>{i?.minutes}</td>
            <td>{i?.note ? i?.note : '---'}</td>
            <td style={{color: i?.status === 'approved' ? 'green' : 'gray'}}>{i?.status}</td>
            <td>{i?.locationChecked ? 'yes' : 'no'}</td>
            <td>{i?.month}</td>
        </tr>
    })
    
    return (
        <Table responsive="sm" className='container mx-auto'>
          <thead>
            <tr>
              <td>F.Name</td>
              <td>L.Name</td>
              <td>email</td>
              <td>Assessment</td>
              <td>BreakMinutes</td>
              <td>Minutes</td>
              <td>Note</td>
              <td>Status</td>
              <td>LocationChecked</td>
              <td>Month</td>
            </tr>
          </thead>
          <tbody>
              {timeSheetList}
          </tbody>
        </Table>
  );
}

export default TimeSheetsTable;