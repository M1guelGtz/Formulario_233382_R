import Input from "../Atoms/Input";
import Label from "../Atoms/Label";
import './Field.css';
function Field (props) {
    return (
        <div id="cardLabel">
            <Label text = {props.text}></Label>
            <Input type = {props.type} placeHolder={props.placeHolder} val={props.val} fnVal={props.fnVal}></Input>
        </div>
    )
}
export default Field