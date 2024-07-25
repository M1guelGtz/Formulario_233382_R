import styled from "styled-components";

const InputStyled = styled.input`
    width: 90%;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
`
function Input (props){
    const handlerOnChange =(event=>{
        props.fnVal(event.target.value)
    })
    return(
        <InputStyled type={props.type} placeholder={props.placeHolder} onChange={handlerOnChange}></InputStyled>
    )
}
export default Input