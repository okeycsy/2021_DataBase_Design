import React, { useContext } from "react";
import { ScheduleManagementContext } from "../routes/ScheduleManagement";

const SelectCinema = () => {
  const {schedule, setSchedule} = useContext(ScheduleManagementContext);
  return (
    
    <div>
      <button onClick={() => setSchedule({...schedule, "cinema": "A"})}>set cinema "A"</button>
      <button onClick={() => setSchedule({...schedule, "cinema": "B"})}>set cinema "B"</button>
    </div>
    
  )
};

const SelectTheater = () => {
  return (
    <p>selectTheater</p>
  )
};

const SelectMovie = () => {
  return (
    <p>selectMovie</p>
  )
};

const SelectStartTime = () => {
  return (
    <p>selectStartTime</p>
  )
};

const CheckResult = () => {
  return (
    <p>checkResult</p>
  )
};

export { SelectCinema, SelectTheater, SelectMovie, SelectStartTime, CheckResult }