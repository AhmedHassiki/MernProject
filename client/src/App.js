import React, { useEffect } from 'react'
import Home from './screen/Home';
import Add from './screen/Add';
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFalse } from './JS Redux/actions/edit'
import QuiSommesNous from './screen/QuiSommesNous';
import Footer from './screen/Footer';
import Mention from './screen/Mention';
import PrivateRoute from './Components/PrivateRoute';
import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';
import { getAuthUser, logout } from './JS Redux/actions/authActions';

function App() {
const navigate = useNavigate();
const dispatch = useDispatch()
const editFalse = () => dispatch(toggleFalse())
const userAuth = useSelector((state)=>state.authReducer.user)
const auth = useSelector((state)=>state.authReducer.isAuth)

const logOut = () => {
  dispatch(logout());
  navigate('/')
}

const getUser = async() =>{
  await dispatch(getAuthUser());
}
useEffect(()=>{
  getUser();
},[])

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">AuthentiKey</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
              <Link to="/"><Button>Home</Button></Link>
              <Link to="/add"><Button onClick={editFalse}>Add</Button></Link>
          </Nav>
          <Nav>
          { auth ? <Button variant="dark" style={{marginRight:"3rem"}} onClick={logOut}>
        Logout
      </Button> : (
      <>
        <FormLogin /> 
        <FormRegister /> 
      </>
        )
      }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <Link to="/"><Button>Home</Button></Link> */}
      {/* <Link to="/add" onClick={editFalse}><Button>Add</Button></Link> */}
      {/* {(isAuth && user.role==="admin") ? <Link to="/add" onClick={editFalse}><Button>Add</Button></Link> : <></>} */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<PrivateRoute><Add /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><Add /></PrivateRoute>} />
        <Route path="/quisommesnous" element={<QuiSommesNous />} />
        <Route path="/mention" element={<Mention />} />        
      </Routes>
      <Footer />

    </div>
  )
}

export default App; 