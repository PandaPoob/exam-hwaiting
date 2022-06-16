import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Artists from "./routes/Artists";
import Program from "./routes/Program";
import SingleArtist from "./routes/SingleArtist";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Account from "./routes/Account";

//import Footer from "./components/Footer";

function App() {
  const [schedule, setSchedule] = useState([]);
  const [artists, setArtists] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fav, setFav] = useState([]);
  //fake users
  const fakeUsers = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getSchedule() {
        const resS = await fetch("https://hwaiting.herokuapp.com/schedule");
        const scheduleData = await resS.json();

        const flatArray = [];

        for (const stage in scheduleData) {
          //console.log(`${stage}: ${scheduleData[stage]}`);
          //mit array af stages:
          let stageName = stage;

          //stageData: 3 objekter(stages) med hver 7 objekter som hver har et array med acts
          const stageData = scheduleData[stageName];

          for (let day in stageData) {
            //objDay: arrays med acts i (objekter)
            const dayData = stageData[day];

            for (const obj in dayData) {
              //bandAct: alle mine bandact objekter
              const bandAct = dayData[obj];
              flatArray.push({ ...bandAct, day, stage });
            }
          }
        }

        setSchedule(flatArray);
      }
      getSchedule();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );

  useEffect(
    () => {
      //use effect gør at den kun kalder en enkelt gang, ellers ville den loope, da man ville kalde funktionen getproducts data(array) ville ændre sig og derved kalde setproducts igen
      async function getArtists() {
        const res = await fetch("https://hwaiting.herokuapp.com/bands");
        const data = await res.json();
        setArtists(data);
      }
      getArtists();
    },
    [
      //tomt array hvor man kan putte variables ind som hvis ændrede sig ville køre funktionen igen
    ]
  );
  //console.log(artists);
  return (
    <div className="App">
      <ScrollToTop />
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setFav={setFav}
      ></Header>
      <div id="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/account"
            element={
              <Account
                fav={fav}
                setFav={setFav}
                isLoggedIn={isLoggedIn}
                fakeUsers={fakeUsers}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="artists"
            element={<Artists artists={artists} schedule={schedule} />}
          />
          <Route path="program" element={<Program schedule={schedule} />} />
          <Route
            path="artists/:bandName"
            element={
              <SingleArtist
                isLoggedIn={isLoggedIn}
                setFav={setFav}
                fav={fav}
                schedule={schedule}
                artists={artists}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
