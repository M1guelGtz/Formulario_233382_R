import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 35%;
    height: 30px;
    border: 1px gray solid;
    border-radius: 5px;
    background-color: #0e718f57 ;
    &:hover {
        background-color: white;
        color: black;
        box-shadow: 5px 5px 7px 0 red;
        -webkit-box-shadow: 5px 5px 7px gray;
        -moz-box-shadow: 5px 5px 7px gray;
    }
`
function Button ({title, onclick}){
    return <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
}

export default Button