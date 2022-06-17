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
import splashImg from "../images/subsplash.svg";
import arrow from "../images/arrow_up.svg";
import { Link } from "react-scroll";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Program(props) {
  const proButtonRef = useRef();
  const proHeaderRef = useRef();

  useEffect(() => {
    const proBtn = proButtonRef.current;
    const proHeader = proHeaderRef.current;

    gsap.to(proHeader, {
      duration: 1,
      opacity: 1,
      ease: "none",
    });

    gsap.to(proBtn, {
      delay: 4,
      duration: 0.5,
      opacity: 1,
      ease: "none",
    });
  });

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
        <header
          id="program-header"
          style={{ backgroundImage: `url(${splashImg})` }}
        >
          <div ref={proHeaderRef} id="program-header-content">
            <h1>Program</h1>
            <img id="program-header-img" src={rainbowImg} alt="Rainbow"></img>
          </div>
        </header>
        <ProgramNav cleanSchedule={cleanSchedule}></ProgramNav>
        <MonProgram cleanSchedule={cleanSchedule}></MonProgram>
        <div ref={proButtonRef} id="pro-btn-container">
          <Link
            to="program-main"
            id="pro-top-button"
            spy={true}
            smooth={true}
            offset={-100}
            duration={300}
          >
            <img id="pro-arrow-up-img" src={arrow} alt="arrow up"></img>
          </Link>
        </div>

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
