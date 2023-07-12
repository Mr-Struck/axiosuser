import { AxiosUser } from "./components/AxiosUser";
import "./App.css";
import { AxiosTodo } from "./components/AxiosTodo";
import { Routes, Route } from "react-router-dom";
import { AxiosPost } from "./components/AxiosPost";
import { AxiosComment } from "./components/AxiosComment";
import { AxiosPhoto } from "./components/AxiosPhoto";
import { Nav, NavMenu, NavLink } from "./components/NavbarElements";
import { AxiosStore } from "./components/AxiosStore";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/todo" activeStyle>
            Todos
          </NavLink>
          <NavLink to="/post" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/comment" activeStyle>
            Comments
          </NavLink>
          <NavLink to="/photo" activeStyle>
            Photos
          </NavLink>
          <NavLink to="/store" activeStyle>
            Store
          </NavLink>
        </NavMenu>
      </Nav>
      <div>
        <Routes>
          <Route path="/" element={<AxiosUser />}></Route>
          <Route path="/todo" element={<AxiosTodo />} />
          <Route path="/post" element={<AxiosPost />} />
          <Route path="/comment" element={<AxiosComment />} />
          <Route path="/photo" element={<AxiosPhoto />} />
          <Route path="/store" element={<AxiosStore />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
