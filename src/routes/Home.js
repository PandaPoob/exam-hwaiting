import heroImg from "../images/splash1.webp";
import kHeart from "../images/k_heart.svg";
import stick from "../images/c.svg";
import arrow from "../images/arrow_right.svg";
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
    tl.to(heading, { duration: 0.5, textShadow: "0px 0px 22px #fc61ff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 0px #fc61ff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 22px #fc61ff" });
    tl.to(heading, { duration: 0.15, textShadow: "0px 0px 0px #fc61ff" });
    tl.to(heading, { duration: 0.1, textShadow: "0px 0px 22px #fc61ff" });
    tl.to(buttons, { duration: 0.1, opacity: 0, delay: 0.2 });
    tl.to(buttons, { duration: 0.6, opacity: 1 });
    tl.to(aButton, {
      duration: 0.2,
      boxShadow: "0px 0px 8px #fc61ff",
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
            HWAITING FESTIVAL
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
        <section id="landing-first-sec">
          <div id="landing-first-txt">
            <h3>Scandinavia's biggest K-pop festival!</h3>
            <p>
              Hwaiting festival's goal is to bring wonderful live performances
              of K-pop to the North! Ever been sad about K-pop tours forgetting
              about Scandinavia? Or maybe you are just curious about this new
              music and artform? Whichever it is we promise to bring you an
              amazing experince where we have gathered all the biggests K-pop
              artists in one week in Denmark for you to experience. The festival
              comes with outdoor camping and full access to all stages and
              performances!
            </p>
          </div>
          <div>
            <img id="landing-heart-img" src={kHeart} alt="K-heart"></img>
          </div>
        </section>
        <section id="landing-second-sec">
          <h3>Become a volunteer</h3>
          <p>
            Do you wanna help and take part in Scandinavia's biggest k-pop
            festival? Then join the volunteer program! Here you will join a
            unique group of amazing people whose goal is to make Hwaiting
            Festival the best there is. In Exchange for your hard work and you
            will receive free access to the festival as long as you fulfill all
            your duties and show up to all your shifts.
          </p>
          <button>Read More</button>
        </section>
        <section id="landing-third-sec">
          <div id="landing-third-txt">
            <h3>The Camping experience!</h3>
            <p>
              Hwaiting festival is an outdoor festival. This means that your
              ticket includes a camping spot. It is not mandatory for you to
              occupy this spot, but it is part of the festival and the
              experience! So be sure to check the weather forecast and pack
              accordingly. With our camping experience, you will however, be
              able to be on site for a whole week so you won't have to bother
              with transport back and fourth every day since every concert is
              walking distance!
            </p>
            <div id="fake-link">
              {" "}
              <p>More practical info</p>
              <img className="fav-link-img" src={arrow} alt="artist img" />
            </div>
          </div>
          <div>
            <img id="landing-stick-img" src={stick} alt="lightstick"></img>
          </div>
        </section>
      </main>
      <Footer style={{ marginTop: "10rem" }}></Footer>
    </>
  );
}
