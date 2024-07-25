import Title from "../Components/Atoms/Title";
import Section from "../Components/Organisms/SectionForm";
import './Home.css';
function Home () {

    return (
        <>
        <div id = 'home_section'>
            <Title title='Registro de Proveedores'></Title>
            <Section title='Nombre de la Empresa' placeHolder='Nombre, por ejemplo: Asus'></Section>
        </div>
        </>
    )  
}
export default Home