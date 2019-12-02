import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import Axios from 'axios';

const SupermarketDetailConst = "Detalle de supermercado"

class SupermarketDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);
        this.state = {
            supermarkeys: [{ "key": "hallways", "name": "Supermercado Suerte" }, { "key": "hallwaysSuperX", "name": "Supermercado Lluvia" }],
            supermarketKey: this.props.match.params.id,
            imageURL: "http://localhost:5000/hallwaysSuper/" + this.props.match.params.id,
            hallwaysDataURL: "http://localhost:5000/hallwaysData/" + this.props.match.params.id,
            hallwayData: null,
        }
    }

    componentWillMount() {
        this.hallwayData();
    }

    hallwayData() {
        var config = {
            headers: { 'Authorization': "bla" , 'Access-Control-Allow-Origin': '*'}
        };
        let currentComponent = this;
        Axios
            .get(this.state.hallwaysDataURL, config)
            .then(function (response) {
                console.log(response)
                currentComponent.setState({
                    hallwayData: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {


        const listHallways = this.state.hallwayData ? this.state.hallwayData.map((hallway) => <li key={hallway.id}>{hallway.id}: {hallway.names.join(', ')}</li>) : "";
        const superMarketName = this.state.supermarkeys.find(sup => sup.key == this.state.supermarketKey).name;
        return (
            <div className="supermarketDetail">
                <div className="supermarketDetailBar">
                    <h2 className="titleSupermarketDetailBar">{SupermarketDetailConst}</h2>
                </div>
                <div className="supermarketDetailImages">
                    <MDBRow className="product">
                        <div className="product--image">
                            <MDBCardImage cascade className="img-fluid" src={this.state.imageURL} />
                        </div>
                        <div className="product--detail">
                            <MDBCardTitle className="text-center">{superMarketName}</MDBCardTitle>
                            <MDBCardText>{listHallways}</MDBCardText>
                        </div>


                    </MDBRow>
                </div>
            </div>)

    }
}

export default (SupermarketDetail);
