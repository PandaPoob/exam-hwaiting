import ProgramNav from "../components/ProgramNav";
import MonProgram from "../components/programs/MonProgram";
import TueProgram from "../components/programs/TueProgram";
import WedProgram from "../components/programs/WedProgram";
import ThuProgram from "../components/programs/ThuProgram";
import FriProgram from "../components/programs/FriProgram";
import SatProgram from "../components/programs/SatProgram";
import SunProgram from "../components/programs/SunProgram";
import Footer from "../components/Footer";
import rainbowImg from "../images/rainbow.svg";

export default function Program(props) {
  //console.log(props.schedule);
  let cleanSchedule = [];
  //fjerner breaks fra schedule
  props.schedule.forEach((e) => {
    if (e.act !== "break") {
      cleanSchedule.push(e);
    }
  });

  return (
    <>
      <main id="program-main">
        <header id="program-header">
          <h1>Program</h1>
          <img id="program-header-img" src={rainbowImg} alt="Rainbow"></img>
        </header>
        <ProgramNav cleanSchedule={cleanSchedule}></ProgramNav>
        <MonProgram cleanSchedule={cleanSchedule}></MonProgram>
        <TueProgram cleanSchedule={cleanSchedule}></TueProgram>
        <WedProgram cleanSchedule={cleanSchedule}></WedProgram>
        <ThuProgram cleanSchedule={cleanSchedule}></ThuProgram>
        <FriProgram cleanSchedule={cleanSchedule}></FriProgram>
        <SatProgram cleanSchedule={cleanSchedule}></SatProgram>
        <SunProgram cleanSchedule={cleanSchedule}></SunProgram>
      </main>
      <Footer></Footer>
    </>
  );
}
