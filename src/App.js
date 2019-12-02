import React, { Component } from "react";
import './App.css';
import Header from "./Header";
import Routes from "./Routes";
class App extends Component {

  render() {
    return (
      <div className="AppContainer">
        <footer className="headerApp">
          <Header />
        </footer>

        <Routes />
        
        <footer className="footerApp">
          SuperRoute Derechos reservados &copy; 2C-2019
        </footer>
      </div>
    );
  }

}

export default App;
