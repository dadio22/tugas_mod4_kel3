import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./component/usestate/LoginForm";
import InfoKelompok from "./component/useeffect/InfoKelompok";
import GantiFont from "./component/usecontext/GantiFont";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link className="text" to="/">
            Login
          </Link>
          <Link className="text navtext2" to="/useeffect">
            Info Kelompok
          </Link>
          <Link className="text" to="/usecontext">
            Ganti Font
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={LoginForm} />
        <Route path="/useeffect" component={InfoKelompok} />
        <Route path="/usecontext" component={GantiFont} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
