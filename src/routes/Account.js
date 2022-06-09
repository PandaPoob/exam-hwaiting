import MyAccount from "../components/MyAccount";
import LogInAccount from "../components/LogInAccount";

export default function Account({
  fakeUsers,
  setIsLoggedIn,
  isLoggedIn,
  fav,
  setFav,
}) {
  return (
    <div>
      {isLoggedIn ? (
        <MyAccount fav={fav} setFav={setFav}></MyAccount>
      ) : (
        <LogInAccount
          fakeUsers={fakeUsers}
          setIsLoggedIn={setIsLoggedIn}
        ></LogInAccount>
      )}
    </div>
  );
}
