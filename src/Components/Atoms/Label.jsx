import styled from "styled-components";

const LabelStyle = styled.label`
    font-size: 16px;
    width: 90%;
`
function Label (props){
    return (
        <LabelStyle>{props.text}</LabelStyle>
    )
}
export default Label