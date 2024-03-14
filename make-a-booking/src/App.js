import { MdDateRange } from "react-icons/md";
import ProjectList from "./components/ProjectList";
import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="mx-5 mt-5 font-thin">
      <HashRouter>
        <Link to="/">
          <h1 className="text-5xl">
            <MdDateRange className="inline-block align-top" /> Make a booking...
          </h1>
        </Link>
        <Routes>
          <Route exact path="/" element={<ProjectList />} />
          <Route exact path="/movies" element={<Movies />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
