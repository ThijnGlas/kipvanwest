import Card from "../components/card/Card";
import Header from "../components/header/Header"
import Navigation from "../components/navigation/Navigation";
import Section from "../components/section/Section";

const HomePage = () => {
    return(
        <>
        <Navigation />
            <Header 
                bigTitle="kip van west" 
                smallTitle="komt u ook bij ons langs" 
                buttonText="bezoek ons"
                />
            <Section headerTitle="Ons assortiment">
                <Card image="gegrildekip.jpg" cardText="koop bij ons de lekkerste gegrilde kip!"/>
                <Card image="huisgemaakt.jpg" cardText="wij maken ook de lekkerste huisgemaakte eten!"/>
                <Card image="huisgemaakt2.0.jpg" cardText="het verste vlees voor de juiste prijs!"/>
                <Card image="vleugels.jpg" cardText="kom ook je kippenvleugeltjes bij ons halen!"/>  
            </Section>
        </>
    )
}

export default HomePage;