import React from "react";
import Title from "./Title";
import Text from "./Text";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="card-body">
                <Title />
                <Text />
            </div>
        )
    }
}

export default Body;