import Title from "./Title";
import Text from "./Text";

const Body = (props) => {
    return <div className="card-body">{props.children}</div>
}

Body.Title = Title;
Body.Text = Text;

export default Body;