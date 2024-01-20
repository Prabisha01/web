import axios from "axios";

const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers :{
        "Content-Type" : "multipart/form-data",
    }
})

// make separate header for authorization
const config = {
    headers:{ 
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}


export const testApi = () => Api.get("/test")
// http://localhost:5000/test

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data, config)

// Login user Api
export const loginUserApi = (data) =>  Api.post('/api/user/login', data)

//contact Api
export const contactApi = (data) =>  Api.post('/api/contact/sendMessage', data)

// Create contact API
export const createContactApi = (data) => Api.post('/api/contact/create_contact', data, config)

//get all contact
export const getAllContactApi = () => Api.get('/api/contact/get_contact')

//get single contact API
export const getSingleContactApi = (id) => Api.get(`/api/contact/get_single_contact/${id}`)

//delete contact API
export const deleteContactApi = (id ) => Api.delete(`/api/contact/delete_contact/${id}`)

//get all user
export const getAllUserApi = () => Api.get('/api/user/get_user' )

//get single contact API
export const getSingleUserApi = (id) => Api.get(`/api/user/get_single_user/${id}`)


// create blog api
export const createBlogApi = (data) => Api.post('/api/blog/create_blog', data, config)

//delete product API
export const deleteUserApi = (id ) => Api.delete(`/api/user/delete_user/${id}`)

//get single blog API
export const getSingleBlogApi = (id) => Api.get(`/api/blog/get_blog/${id}`)

// create blog api
export const deleteBlogApi = (id) => Api.delete(`/api/blog/delete_blog/${id}`)
//update blog API with ID
export const updateBlogApi =(id, formData) => Api.put(`/api/blog/update_product/${id}`, formData, config)

//update user API with ID
export const updateUserApi =(id, formData) => Api.put(`/api/user/update_user/${id}`, formData, config)
//get all user
export const getAllBlogsApi = () => Api.get('/api/blog/get_blog' )

// Create product API
export const createProductApi = (data) => Api.post('/api/product/create_product', data, config )

//get all products
export const getAllProductApi = () => Api.get('/api/product/get_products')

//get single product API
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`)

//update product API with ID
export const updateProductApi =(id, formData) => Api.put(`/api/product/update_product/${id}`, formData, config)

export const deleteProductApi = (id ) => Api.delete(`/api/product/delete_product/${id}`)

