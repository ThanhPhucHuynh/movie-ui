import React from 'react';
import { RouterNavigation } from "./router"
// import { Link } from "react-router-dom";
// import config from './config';
require('dotenv').config()
function App() {
  return (
    <div className="App">
        {/* <Link to="/home">home {config.Host}</Link>
        <p />
        <Link to="/notfound">notfound</Link> */}
        <RouterNavigation />
    </div>
  );
}

export default App;
