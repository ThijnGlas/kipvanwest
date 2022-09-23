import "./Section.css"

const Section = (props) => {
    return (
        <section class="section">
            <header class="section__header">
                <h2 class="section__h2">{props.headerTitle ||"placeholder title"}</h2>
            </header>
            <div class="section__wrapper">
                {props.children} 
            </div>
            
        </section>
    )
}

export default Section;

