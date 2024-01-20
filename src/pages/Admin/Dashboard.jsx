import React from 'react'
import { Link } from 'react-router-dom';
import AdminDash from '../../components/AdminDash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComments, faBox, faBlog } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard = () => {
  const totalUsers = 100;
    const totalMessages = 50;
    const totalProducts = 200;
    const totalBlogs = 75;

    return (
        <>
            <div>
                <AdminDash />
            </div>
            <div className="container mt-4">
                <div className="row">
                    {/* User Card */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 bg-primary text-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faUser} className="me-2" />
                                    Users
                                </h5>
                                <p className="card-text">Total Users: {totalUsers}</p>
                                {/* Add link or button to navigate to user management page */}
                            </div>
                        </div>
                    </div>

                    {/* Product Card */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 bg-secondary text-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faBox} className="me-2" />
                                    Products
                                </h5>
                                <p className="card-text">Total Products: {totalProducts}</p>
                                {/* Add link or button to navigate to product management page */}
                            </div>
                        </div>
                    </div>

                    {/* Blog Card */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 bg-danger text-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faBlog} className="me-2" />
                                    Blogs
                                </h5>
                                <p className="card-text">Total Blogs: {totalBlogs}</p>
                                {/* Add link or button to navigate to blog management page */}
                            </div>
                        </div>
                    </div>

                    {/* Message Card */}
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 bg-info text-white">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faComments} className="me-2" />
                                    Messages
                                </h5>
                                <p className="card-text">Total Messages: {totalMessages}</p>
                                {/* Add link or button to navigate to message management page */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;