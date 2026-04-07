import html from './assets/hero.png'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Course(props) {

    const [purchased, setPurchased] = useState(false)

    function BuyCourse(discount, e) {
        console.log(props.name, "purchased", discount, "% discount");
        setPurchased(true)
        console.log(e);
    }

    return (
        props.name &&
        <div className="card">

            <img src={props.image} alt={props.name} />

            <h3>{props.name}</h3>

            <p>{props.prize}</p>

            <button
                onClick={(event) => BuyCourse(20, event)}
            >
                Buy Now
            </button>

            <p>
                {purchased ? "Already purchased" : "Get it now"}
            </p>

        </div>
    );
}

/*Course.defaultProps = {
    name: "Aadhish Course",
    prize: "1 like and 1 comment",
    image: html
}*/


Course.propTypes = {
    name: PropTypes.string,
    rating: PropTypes.number,
    show: PropTypes.bool
}

export default Course;


