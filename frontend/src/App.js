import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';




import SignIn from "./routes/SignIn";
import Movie from "./routes/Movie"

import AdminNavigation from "./components/admin/AdminNavigation";
import AdminMovie from "./routes/admin/AdminMovie";
import AdminSchedule from "./routes/admin/AdminSchedule";
import AdminSeat from "./routes/admin/AdminSeat";
import AdminTicket from "./routes/admin/AdminTicket";
import AdminCustomer from "./routes/admin/AdminCustomer";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const App = () => {
  return (
      <Container>
        <BrowserRouter>
            
            <Route path="/" exact={true} component={Movie} />
            <Route path="/signin" exact={true} component={SignIn} />

            <Route path="/admin">
              <AdminNavigation />
              <Route path="/admin/moviemanagement" exact={true} component={AdminMovie} />
              <Route path="/admin/schedulemanagement" exact={true} component={AdminSchedule} />
              <Route path="/admin/seatmanagement" exact={true} component={AdminSeat} />
              <Route path="/admin/ticketManagement" exact={true} component={AdminTicket} />
              <Route path="/admin/customermanagement" exact={true} component={AdminCustomer} />
            </Route>   
            
        </BrowserRouter>
      </Container>
  )
}

export default App;