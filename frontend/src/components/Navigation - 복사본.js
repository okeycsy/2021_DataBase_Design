import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import HomeIcon from "./icon/HomeIcon";
import SeatIcon from "./icon/SeatIcon";
import MovieIcon from "./icon/MovieIcon";
import ShowIcon from "./icon/ShowIcon";
import CustomerIcon from "./icon/CustomerIcon";
import TicketIcon from "./icon/TicketIcon";

const Container = styled.div`
  height: 100vh
`

const Navigation = () => {
  const [isLoading, setIsLoding] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const handleResize = () => {
    if(window.innerWidth <= 958) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }

  useEffect(() => {
    handleResize(); //
    window.addEventListener('resize', handleResize);
    /*
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
    */
    setIsLoding(false)
  }, []);

  return (
    
    <Container>
      {isLoading ? <></> : 
      <ProSidebar
        toggled="true"
        collapsed={collapsed}
      >
        <SidebarHeader
          style={{"textAlign": "center"}}
        >
          <p>Header</p>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<HomeIcon />}>
              <Link to="/">Home</Link>
            </MenuItem>

            <SubMenu title="Movie" icon={<MovieIcon />}>
              <MenuItem><Link to="/features">Component 1</Link></MenuItem>
              <MenuItem><Link to="/pricing">Component 2</Link></MenuItem>
            </SubMenu>

            <SubMenu title="Show" icon={<ShowIcon />}>
              <MenuItem><Link to="/features">Component 1</Link></MenuItem>
              <MenuItem><Link to="/pricing">Component 2</Link></MenuItem>
            </SubMenu>

            <SubMenu title="Seat" icon={<SeatIcon />}>
              <MenuItem><Link to="/features">Component 1</Link></MenuItem>
              <MenuItem><Link to="/pricing">Component 2</Link></MenuItem>
            </SubMenu>

            <SubMenu title="Ticket" icon={<TicketIcon />}>
              <MenuItem><Link to="/features">Component 1</Link></MenuItem>
              <MenuItem><Link to="/pricing">Component 2</Link></MenuItem>
            </SubMenu>

            <SubMenu title="Customer" icon={<CustomerIcon />}>
              <MenuItem>Component 1</MenuItem>

            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter
          style={{"textAlign": "center"}}
        >
          <p>Footer</p>
        </SidebarFooter>
      </ProSidebar>
      }
    </Container>
  )
}

export default Navigation;