import React from "react";
import "./SupermarketDetail.css"
import { ListGroup } from 'react-bootstrap'
import { Route, Redirect } from 'react-router-dom';
const Supermarkets = "Supermercados"

class Supermarket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            supermarkets: [{ "name": "hallways" }, { "name": "hallwaysSuperX" }]
        };
    }

    handleClick(name) {
        console.log(name);
        return (<Redirect to={{ pathname: '/supermarkets/' + name }} />)
    }

    render() {


        const listItems = this.state.supermarkets.map((supermarket) => <li key={supermarket.name}>{supermarket.name}</li>);
        return (
            <div className="home-page">

                <div className="supermarketBar">
                    <h2 className="titleUserBar">{Supermarkets}</h2>
                </div>

                <div className="SupermarketView">
                    <ListGroup>
                        <ListGroup.Item href={'/supermarkets/' + this.state.supermarkets[0].name} action variant="light">
                            {this.state.supermarkets[0].name}
                        </ListGroup.Item>
                        <ListGroup.Item href={'/supermarkets/' + this.state.supermarkets[1].name} action variant="light">
                            {this.state.supermarkets[1].name}
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        );
    }
}

export default (Supermarket);
