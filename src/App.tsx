import Login from "./components/Login/molecules/Login";
import Nav from "./components/Navigation/molecules/Nav";
import SignUp from "./components/SignUp/molecules/SignUp";
import "./sass/globals.scss";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <SignUp />
    </div>
  );
};

export default App;
