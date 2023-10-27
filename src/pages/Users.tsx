import React from 'react';
import UserTable from '../components/UserTable';
import { IUser } from '../constant';
import { useMyContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Users() {
  const { data } = useMyContext();
  const users: IUser[] = data.users;
  const navigate = useNavigate();
  const clickHandler = (id: string) => navigate(`/user/${id}`);

  return (<UserTable users={users} clickHandler={clickHandler} />);
}

export default Users;