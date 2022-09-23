import "./Card.css";

const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt="" />
    if(props.image === undefined){
        cardImage = <img src={"/img/pexels-alison-burrell-205481.jpg"} alt="gegrilde kip" />;
    }

    return (
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.cardText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque perspiciatis recusandae libero, distinctio dolores suscipit. Reprehenderit animi ab ullam quisquam, maiores facilis qui incidunt tenetur quos porro doloribus tempora saepe."}</p>
            </section>
        </article>
    )
}

export default Card;
