import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Context, ContextProvider } from "./context/Context";
import { useContext } from "react";

function App() {
  const user = useContext(Context);
  return (
    <>
      <Router>
        <ContextProvider>
          <TopBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">{user ? <Register /> : <Home />}</Route>
            <Route path="/login">{user ? <Login /> : <Home />}</Route>
            <Route path="/write">{user ? <Write /> : <Register />}</Route>
            <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
            <Route path="/post/:postId">
              <Single />
            </Route>
          </Switch>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
