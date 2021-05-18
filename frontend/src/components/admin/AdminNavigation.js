import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { useEffectOnce } from "react-use";

import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import LogoIcon from "../icon/LogoIcon";
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

const AdminNavigation = () => {
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
          style={{"textAlign": "center", marginTop:"10px", paddingBottom:"10px"}}
        >
          <LogoIcon size={collapsed ? 72 : 128}/>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<HomeIcon />}>
              <Link to="/admin">Home</Link>
            </MenuItem>

            <MenuItem icon={<MovieIcon />}>
              <Link to="/admin/moviemanagement">Movie</Link>
            </MenuItem>

            <MenuItem icon={<ShowIcon />}>
              <Link to="/admin/schedulemanagement">Schedule</Link>
            </MenuItem>

            <MenuItem icon={<SeatIcon />}>
              <Link to="/admin/seatmanagement">Seat</Link>
            </MenuItem>

            <MenuItem icon={<TicketIcon />}>
              <Link to="/admin/ticketmanagement">Ticket</Link>
            </MenuItem>

            <MenuItem icon={<CustomerIcon />}>
              <Link to="/admin/customermanagement">Customer</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      }
    </Container>
  )
}

export default AdminNavigation;