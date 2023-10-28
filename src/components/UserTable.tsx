import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from './Button';
import { IUser } from '../constant';

function ResponsiveTable(props: { users: IUser[], clickHandler: Function, modalHandler: Function }) {
    const { users, clickHandler, modalHandler } = props;

    const usersList = users?.map((u) => {
        return <tr>
            <td><Image src={u?.avatar?.link || ''} style={{width: '3rem', height: '3rem', objectFit: 'cover'}} roundedCircle /></td>
            <td>{u?.firstName}</td>
            <td>{u?.lastName}</td>
            <td>{u?.email}</td>
            <td>{u?.position}</td>
            <td>{u?.phone}</td>
            <td>{u?.roleId}</td>
            <td>{u?.address}</td>
            <td>{u?.postalCode}</td>
            <td>{u?.city}</td>
            <td>{u?.country}</td>
            <td>{u?.subDepartment?.title}</td>
            <td>{u?.department?.title}</td>
            <td>{u?.division?.title}</td>
            <td>{<Button onClick={() => modalHandler(u?.id)} variant='dark' content='view' />}</td>
            <td>{<Button onClick={() => clickHandler(u?.id)} variant='dark' content='Click' />}</td>
        </tr>
    })

  return (
      <Table responsive="sm" className='container mx-auto'>
        <thead>
          <tr>
            <th></th>
            <th>F.Name</th>
            <th>L.Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Address</th>
            <th>Postal</th>
            <th>City</th>
            <th>Country</th>
            <th>Subdepartment</th>
            <th>Department</th>
            <th>Division</th>
            <th>Manager</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
            {usersList}
        </tbody>
      </Table>
  );
}

export default ResponsiveTable;