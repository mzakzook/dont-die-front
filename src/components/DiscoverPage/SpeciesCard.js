import React from 'react'
import 'typeface-roboto'


class SpeciesCard extends React.Component {
    render() {
        const { name, description } = this.props.species.attributes
        return (
            <div className="card">
                <div className="info">
                    <h2>{name}</h2>
                    <p className="blocktext">{description}</p>
                </div>
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*" alt="plant"></img>
                <button className="btn" onClick={e => {
                    this.props.add(this.props.species)
                }}>+</button>
            </div>
        )
    }
}

export default SpeciesCard

// "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557258847-chinese-evergreen-houseplant-1557258690.jpg?crop=0.883xw:0.887xh;0.0849xw,0.0821xh&resize=480:*"


