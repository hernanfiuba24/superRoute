import React, { Component } from "react";
import "./Home.css";
import Banner from "./Banner";

const name = "Hernán"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Banner />
                <form>
                    <h3 className="HomeLoggedIn">
                        Bienvenido {name}
                    </h3>
                </form>
            </div>
        )
    }
}

export default Home;
