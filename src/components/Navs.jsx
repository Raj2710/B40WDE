import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom'

function Navs() {
    let navigate = useNavigate()
    return <>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) =>navigate(selectedKey)}
        >
          <Nav.Item>
                <Nav.Link eventKey="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
                <Nav.Link eventKey="/add-user">Add user</Nav.Link>
          </Nav.Item>
        </Nav>
        </>
}

export default Navs