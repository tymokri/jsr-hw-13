import React from "react";
import Body from "./Body";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="card">
                <Body />
            </div>
        )
    }
}

export default Card;