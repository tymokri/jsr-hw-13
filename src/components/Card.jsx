import React from "react";
import Body from "./Body";

class Card extends React.Component {

    render() {
        return <div className="card">{this.props.children}</div>
    }
}

Card.Body = Body;

export default Card;