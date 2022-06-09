import { useState } from "react";

export default function LogInAccount({ fakeUsers, setIsLoggedIn }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setNameError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);

  // preventdefault makes sure it does not refresh the page when submitting
  const userChanged = (e) => {
    setUserName(e.target.value);
  };

  const passwordChanged = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    setUserPasswordError(false);
    setNameError(false);

    // Prevent page reload
    event.preventDefault();

    let { username, password } = document.forms[0];

    // Find user login info
    const userData = fakeUsers.find((user) => user.username === username.value);

    // Compare user info
    //non boolean in boolean context it gives truthy or falsy
    //if userinput not falsy then check password
    //else userinput falsy then nameError
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setUserPasswordError(true);
      } else {
        setIsLoggedIn(true);
      }
    } else {
      setNameError(true);
    }
  };

  return (
    <div id="form-information">
      <form onSubmit={handleSubmit}>
        <section id="Login">
          <h2>Login</h2>
          <div id="form-wrapper">
            <div id="user" className="form-part">
              <label htmlFor="user">Username</label>
              <input
                style={
                  userNameError
                    ? { border: "1px solid red" }
                    : { border: "1px solid #7a7688" }
                }
                type="text"
                id="username"
                name="username"
                required
                onChange={userChanged}
                value={username}
              ></input>
              {userNameError ? (
                <p className="error-msg">Username not found</p>
              ) : null}
            </div>

            <div id="password" className="form-part">
              <label htmlFor="password">Password</label>
              <input
                style={
                  userPasswordError
                    ? { border: "1px solid red" }
                    : { border: "1px solid #7a7688" }
                }
                type="password"
                id="password"
                name="password"
                required
                onChange={passwordChanged}
                value={password}
              ></input>{" "}
              {userPasswordError ? (
                <p className="error-msg">Invalid Password</p>
              ) : null}
            </div>
            <button type="submit" id="login-submit">
              Login
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
