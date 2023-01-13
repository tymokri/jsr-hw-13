import React from "react";
import Body from "./Body";
import Title from "./Title";
import Text from "./Text";

class Card extends React.Component {

    render() {
        return <div className="card">{this.props.children}</div>
    }
}

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;