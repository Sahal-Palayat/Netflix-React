import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import { action,orginals,comedy,horror,romance } from "./urls";
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
