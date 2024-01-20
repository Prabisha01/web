import React , { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { deleteUserApi, getAllUserApi } from "../../apis/Api"; // Import your API functions
import AdminDash from '../../components/AdminDash';

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    getAllUserApi()
      .then((res) => {
        setUsers(res.data.users); // Assuming the users are returned in the 'users' field of the response
      })
      .catch((error) => {
        toast.error('Failed to fetch users.');
        console.error(error);
      });
  }, []);

  //delete user Function
  const handleDelete = (id) => {
    const confirmDialog = window.confirm('Are you sure you want to delete the User?');
    if (!confirmDialog) {
      return;
    } else {
      //make API call to delete user
      deleteUserApi(id)
        .then((res) => {
          if (res.data.success === true) {
            toast.success(res.data.message);
            window.location.reload();
          } else {
            toast.error(res.data.message);
          }
        })
        .catch((error) => {
          toast.error('Failed to delete user.');
          console.error(error);
        });
    }
  };

  return (
    <>
      <div>
        <AdminDash />
      </div>
      <div className="m-4">
        <table className="table mt-2 table-bordered ">
          <thead className="table-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <img src={user.userImageUrl} width="40" height="40" alt="" />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUser;
