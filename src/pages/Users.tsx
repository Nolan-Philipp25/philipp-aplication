import React, {useState} from 'react';
import UserTable from '../components/UserTable';
import Modal from '../components/Modal'
import { IUser } from '../constant';
import { useMyContext } from '../context';
import { useNavigate } from 'react-router-dom';

function Users() {
  const { data } = useMyContext();
  const [isShow, setIsShow] = useState(false)
  const users: IUser[] = data.users;
  const [user, setUser] = useState({})

  const navigate = useNavigate();
  const clickHandler = (id: string) => navigate(`/user/${id}`);
  const modalHandler = (id?: string) => {
    setUser(users.filter(item => item.id === id)?.[0])
    setIsShow(!isShow)
  };

  return (<>
        {<Modal
          user={user}
          isShow={isShow}
          onClose={modalHandler}
        />}
        <UserTable users={users} clickHandler={clickHandler} modalHandler={modalHandler} />
      </>);
}

export default Users;