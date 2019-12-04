import React from 'react'
import './Discover.css'
import 'typeface-roboto'     


class SpeciesCard extends React.Component {
    render() {
        const {name,description} = this.props.species.attributes
        return(
            <div class="item">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*" alt="plant"></img>
                <button class="btn">Add</button>
            </div>
        )
    }
}

export default SpeciesCard

// "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*"


