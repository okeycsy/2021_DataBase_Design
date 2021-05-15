import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';


import NotFound from "./routes/NotFound";

import ErrorBoundary from "./routes/ErrorBoundary";
import ErrorBoundaryTest from "./routes/ErrorBoundaryTest";

import SignIn from "./routes/SignIn";

import AdminNavigation from "./components/admin/AdminNavigation";
import AdminMovie from "./routes/admin/AdminMovie";
import AdminSchedule from "./routes/admin/AdminSchedule";
import AdminSeat from "./routes/admin/AdminSeat";
import AdminTicket from "./routes/admin/AdminTicket";
import AdminCustomer from "./routes/admin/AdminCustomer";

import UserNavigation from "./components/user/UserNavigation";
import Home from "./routes/user/Home"
import Movie from "./routes/Movie"
import Ticket from "./routes/user/Ticket";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const AdminHome = () => {
  return (
    <div><p>AdminHome</p></div>
  )
}

const App = () => {
  return (
      <Container>
  
        <BrowserRouter>
          <ErrorBoundary>
            <Switch>
              <Route path="/admin">
                <AdminNavigation />
                <Switch>
                  <Route path="/admin" exact={true} component={AdminHome} />
                  <Route path="/admin/moviemanagement" exact={true} component={AdminMovie} />
                  <Route path="/admin/schedulemanagement" exact={true} component={AdminSchedule} />
                  <Route path="/admin/seatmanagement" exact={true} component={AdminSeat} />
                  <Route path="/admin/ticketManagement" exact={true} component={AdminTicket} />
                  <Route path="/admin/customermanagement" exact={true} component={AdminCustomer} />
                  <Route component={NotFound} />
                </Switch>
              </Route>

              <Route path="/">
                <UserNavigation />
                <Switch>
                  <Route path="/" exact={true} component={Home} />
                  <Route path="/signin" exact={true} component={SignIn} />
                  <Route path="/movie" exact={true} component={Movie} />
                  <Route path="/ticket" exact={true} component={Ticket} />
                  <Route path="/errorboundarytest" exact={true} component={ErrorBoundaryTest} />
                  <Route component={NotFound} />
                </Switch>
              </Route>
            </Switch>
          </ErrorBoundary>
        </BrowserRouter>
        
      </Container>
  )
}

export default App;