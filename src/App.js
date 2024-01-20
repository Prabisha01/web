import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Landingpage from './pages/Landing';
import AdminDashboard from './pages/Admin/Dashboard';
import UserRoutes from './protected/UserRoute';
import AdminRoute from './protected/AdminRoute';
import AdminContact from './pages/Admin/AdminContact';
import AdminUser from './pages/Admin/AdminUser';
import AdminBlog from './pages/Admin/AdminBlog';
import AdminEditBlog from './pages/Admin/AdminBlog';
import Blog from './pages/Blog';
import AdminProductDashboard from './pages/Admin/AdminProduct';
import AdminEditProduct from './pages/Admin/AdminEditProduct';
import Product from './pages/Product';
import AdminEdiBlog from './pages/Admin/AdminEditBlogs';
import Profile from './pages/Profile';
import AddBlogPage from './pages/Admin/AddBlogPage';
import AddProduct from './pages/Admin/AddProduct';
function App() {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
       <Route path='/home' element={<Homepage/>}/> 
       <Route path='/login' element={<Login/>}/> 
       <Route path='/signup' element={<Register/>}/> 
       <Route path ='/contact' element ={<Contact/>}/>
       <Route path ='/about' element ={<About/>}/>
       <Route path = '/products' element ={<Product/>} />
       <Route path ='/land' element ={<Landingpage/>}/>
       <Route path = '/blog' element ={<Blog/>} />
       
       <Route path = '/profile/edit/:id' element ={<Profile/>} />
       {/* <Route path = '/profile' element ={<Profile/>} /> */}
       <Route element ={<UserRoutes/>}>\ 
       {/* <Route path = '/profile/:id' element ={<Profile/>} /> */}
       </Route>
       <Route path = '/admin/addBlog' element ={<AddBlogPage/>} />
       <Route path = '/admin/addProduct' element ={<AddProduct/>} />
       <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
       <Route path ='/admin/contact' element ={<AdminContact/>} />
       <Route path ='/admin/user' element ={<AdminUser/>} />
       <Route path ='/admin/blog' element ={<AdminBlog/>} />
       <Route path ='/admin/product' element ={<AdminProductDashboard/>} />
       <Route path = '/admin/up/:id' element ={<AdminEdiBlog/>} />
       <Route path = '/admin/edi/:id' element ={<AdminEditProduct/>} />
       <Route element={<AdminRoute/>}>
       
      
        {/* </Route> */}
         </Route>
      </Routes>
    </Router>
  );
}

export default App;