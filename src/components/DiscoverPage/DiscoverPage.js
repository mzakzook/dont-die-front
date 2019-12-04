import React from 'react'
import SpeciesCard from './SpeciesCard'
import './Discover.scss'

class DiscoverPage extends React.Component {
    state = {
        species: [],
        addSpecies: null
    }

    showConfirmation = () => {
        console.log('hello')
    }
    

    handleClickAddButton = (event) => {
        console.log(event.target)
        this.setState({
            addSpecies: this.showConfirmation()
        })
    }

    getAllSpecies = () => {
        fetch('http://localhost:3001/api/v1/species')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    species: data.data
                })
            })
    }

    componentDidMount = () => {
        this.getAllSpecies()
    }


    render() {
        return (
            <div className="discover-container">
                {this.state.species.map(s => {
                    return <SpeciesCard key={s.id} species={s} add={this.handleClickAddButton} />
                })
                }
            </div>
        )
    }

}

export default DiscoverPage 