import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar expand='lg' collapseOnSelect style={{backgroundColor:"red",height:"12vh",width:"100%",justifyItems:"center"}}>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BookStore</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>
                </Nav.Link>
              </LinkContainer>
              { userInfo && userInfo.isAdmin && (
                  <NavDropdown title={userInfo.name} id='adminmenu'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              {userInfo && !userInfo.isAdmin && (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )} 
              {!userInfo && (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand='sm' collapseOnSelect style={{backgroundColor:"#404040",height:"5vh",width:"100%",justifyItems:"center"}}>
        <Container>
          <LinkContainer to='/top_sellers'>
            <Navbar.Brand>Top Sellers</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/latest_books'>
            <Navbar.Brand>Latest Books</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/best_books'>
            <Navbar.Brand>Best Books</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/fiction_books'>
            <Navbar.Brand>Fiction</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/educational_books'>
            <Navbar.Brand>Educational</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to='/romantic_books'>
            <Navbar.Brand>Romantic</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
