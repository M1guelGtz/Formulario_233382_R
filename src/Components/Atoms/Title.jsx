import styled from "styled-components";

const TitleStyled = styled.h3`
    width: 51%;
    text-align: center;
    background-color: #000000e4;
    color: white;
    padding: 5px;
    border-radius: 10px;    
    box-shadow: 50px 50px 70px 0 gray;
    -webkit-box-shadow: 5px 10px 10px gray;
    -moz-box-shadow: 50px 50px 70px gray;
    display: inline-block;
`
function Title (props) {
    return (
        <TitleStyled>{props.title} </TitleStyled>
    )
}

export default Title