import React from 'react'
import SpeciesCard from './SpeciesCard'
import './Discover.css'

class DiscoverPage extends React.Component {
    state = {
       species:  []
    }

    handleClickAddButton = () => {

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
            <div class="container">
                {this.state.species.map(s => {
                  return <SpeciesCard key={s.id} species={s} /> }) 
                }
            </div>
        )
    }
        
}

export default DiscoverPage 