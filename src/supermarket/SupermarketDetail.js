import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const SupermarketDetailConst = "Detalle de supermercado"

class SupermarketDetail extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params.id);

        this.state = {
            image: "http://localhost:5000/hallwaysSuper/" + this.props.match.params.id,
        };
    }

    render() {
        console.log("SupermarkeDet");
        return (
            <div className="supermarketDetail">
                <div className="supermarketDetailBar">
                    <h2 className="titleSupermarketDetailBar">{SupermarketDetailConst}</h2>
                </div>
                <div className="supermarketDetailImages">
                    <MDBContainer className="mt-5">
                        <MDBRow className="mb-4">
                            <MDBCol md="10">
                                <img src={this.state.image} className="img-fluid" alt="" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>

            </div>)

    }
}

export default (SupermarketDetail);
