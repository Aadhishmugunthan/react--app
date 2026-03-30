import html from './assets/hero.png'

function Course(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.prize}</p>
            <span>{props.rating}</span>
        </div>
    );
}

Course.defaultProps = {
    name: "Aadhish Course",
    prize: "1 like and 1 comment",
    image: html
}

export default Course;