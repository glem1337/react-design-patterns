import axios from 'axios';
import { useEffect, useState } from 'react';

const useFacadeUserAPI = () => {
  const [users, setUsers] = useState([]);
  const [actionExecuting, setActionExecuting] = useState(false);

  async function getUsers() {
    setActionExecuting(true);
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(resp.data);
    } catch (err) {
      console.log('getUsers error', err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function createUser(user) {
    setActionExecuting(true);
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, user]);
    } catch (err) {
      console.log('createUser error', err);
    } finally {
      setActionExecuting(false);
    }
  }

  async function deleteUser(id) {
    setActionExecuting(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.log('deleteUser error', err);
    } finally {
      setActionExecuting(false);
    }
  }

  return {
    users,
    actionExecuting,
    getUsers,
    createUser,
    deleteUser,
  };
};

export const UserTable = (props) => {
  console.log('UserTable', props.users, props.onDelete);
  return <></>;
};

export const UserCreateModal = (props) => {
  console.log('UserCreateModal', props.onCreate);
  return <></>;
};

export default function Facade() {
  const { createUser, deleteUser, getUsers, users } = useFacadeUserAPI();

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <UserTable users={users} onDelete={deleteUser} />
      <UserCreateModal onCreate={createUser} />
    </>
  );
}
