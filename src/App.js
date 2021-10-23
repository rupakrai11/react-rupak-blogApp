import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";

function App() {
  return (
    <>
      <div className="App">
        <TopBar />
        <Settings />
      </div>
    </>
  );
}

export default App;
