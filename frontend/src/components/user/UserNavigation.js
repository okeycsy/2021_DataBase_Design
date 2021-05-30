import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { useEffectOnce } from "react-use";

import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

import LogoIcon from "../icon/LogoIcon";
import HomeIcon from "../icon/HomeIcon";
import MovieIcon from "../icon/MovieIcon";
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
          style={{"textAlign": "center", marginTop:"10px", paddingBottom:"10px"}}
        >
          <Link to="/"><LogoIcon size={collapsed ? 72 : 128}/></Link>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<HomeIcon />}>
              <Link to="/">Home</Link>
            </MenuItem>

            <MenuItem icon={<MovieIcon />}>
              <Link to="/movie">Movie</Link>
            </MenuItem>

            <MenuItem icon={<TicketIcon />}>
              <Link to="/ticket">Ticket</Link>
            </MenuItem>

            <MenuItem icon={<CustomerIcon />}>
              <Link to="/myinfo">My Info</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      }
    </Container>
  )
}

export default UserNavigation;