import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowTicket from "../../components/user/ShowTicket";

const MyInfo = () => {
  const [hasTicket, setHasTicket] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [cinema, setCinema] = useState("");
  const [runningTime, setRunningTime] = useState(0);
  const [src, setSrc] = useState("");
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("db_design_user_id");
    
    if (id === null) {
      window.location.href = "/signin";
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("db_design_user_ticket_title") !== null) setHasTicket(true); 

    setTitle(localStorage.getItem("db_design_user_ticket_title"));
    setTime(localStorage.getItem("db_design_user_ticket_time"));
    setRunningTime(localStorage.getItem("db_design_user_ticket_runningTime"));
    setCinema(localStorage.getItem("db_design_user_ticket_cinema"));
    setSrc(localStorage.getItem("db_design_user_ticket_src"));
    setSeats(JSON.parse(localStorage.getItem("db_design_user_ticket_seats")));
  }, []);

  return (
    <Container style={{marginTop:"70px"}}>
      <p style={{fontWeight: "1000", fontSize: "x-large"}}>
        {localStorage.getItem("db_design_user_id")}님의 개인공간
      </p>

      <p style={{fontSize: "x-large"}}>
        티켓 현황
      </p>

      {hasTicket ? 
        <ShowTicket
          title={title}
          time={time}
          runningTime={runningTime}
          cinema={cinema}
          src={src}
          seats={seats}
        />
      : <></>}
    </Container>
  );
}

export default MyInfo;
