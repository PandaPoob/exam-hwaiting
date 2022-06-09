import heroImg from "../images/splash_img.svg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Footer from "../components/Footer";

export default function Home() {
  const landingHeadingRef = useRef();
  const landingButtonsRef = useRef();
  const artistButtonRef = useRef();
  const programButtonRef = useRef();
  useEffect(() => {
    let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });
    const heading = landingHeadingRef.current;
    const buttons = landingButtonsRef.current;
    const aButton = artistButtonRef.current;
    const pButton = programButtonRef.current;
    tl.to(heading, { duration: 0.1, opacity: 0 });
    tl.to(heading, { duration: 0.5, opacity: 1 });
    tl.to(heading, { duration: 0.5, textShadow: "0px 0px 22px #5affff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 0px #5affff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 22px #5affff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 0px #5affff" });
    tl.to(heading, { duration: 0.1, textShadow: "0px 0px 22px #5affff" });
    tl.to(buttons, { duration: 0.1, opacity: 0, delay: 0.2 });
    tl.to(buttons, { duration: 0.6, opacity: 1 });
    tl.to(aButton, {
      duration: 0.2,
      boxShadow: "0px 0px 8px #5affff",
    });
    tl.to(
      pButton,
      {
        duration: 0.2,
        boxShadow: "0px 0px 8px #fc61ff",
      },
      "<"
    );
  });

  return (
    <>
      <main id="main-landing">
        <header
          id="header-landing"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <h1 className="invis" ref={landingHeadingRef}>
            HWAITING PROGRAM
          </h1>
          ;{/*      <img src={heroImg} alt="BigCo Inc. logo" /> */}
          <div ref={landingButtonsRef} className="invis" id="landing-buttons">
            <Link
              ref={artistButtonRef}
              id="artist-button"
              className="landing-button"
              to="/artists"
            >
              See Artists
            </Link>
            <Link
              ref={programButtonRef}
              id="program-button"
              className="landing-button"
              to="/program"
            >
              See Program
            </Link>
          </div>
        </header>
      </main>
      <Footer style={{ marginTop: "10rem" }}></Footer>
    </>
  );
}
