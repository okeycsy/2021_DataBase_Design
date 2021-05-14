import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { useEffectOnce } from "react-use";

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import HomeIcon from "../icon/HomeIcon";
import SeatIcon from "../icon/SeatIcon";
import MovieIcon from "../icon/MovieIcon";
import ShowIcon from "../icon/ShowIcon";
import CustomerIcon from "../icon/CustomerIcon";
import TicketIcon from "../icon/TicketIcon";

const Container = styled.div`
  height: 100vh;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`

const UserNavigation = () => {
  const [isLoading, setIsLoding] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const handleResize = () => {
    if(window.innerWidth <= 1366 || window.innerHeight <= 439) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }

  useEffectOnce(() => {
    handleResize();
    setIsLoding(false);
  })
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
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

            <MenuItem icon={<MovieIcon />}>
              <Link to="/movie">Movie</Link>
            </MenuItem>

            <MenuItem icon={<ShowIcon />}>
              <Link to="/temp">Schedule</Link>
            </MenuItem>

            <MenuItem icon={<SeatIcon />}>
              <Link to="/temp">Seat</Link>
            </MenuItem>

            <MenuItem icon={<TicketIcon />}>
              <Link to="/temp">Ticket</Link>
            </MenuItem>

            <MenuItem icon={<CustomerIcon />}>
              <Link to="/temp">Customer</Link>
            </MenuItem>
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

export default UserNavigation;