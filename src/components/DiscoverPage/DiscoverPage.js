import React from 'react'
import SpeciesCard from './SpeciesCard'
import Add from './modal/Add'
import './modal/Modal.scss'
import './Discover.scss'


class DiscoverPage extends React.Component {
    state = {
        species: [],
        speci: {},
        show: false
    }

    showAdd = (speci) => {
        this.setState({
            show: true,
            speci
        })
    }

    saveNew = (e, plant) => {
        e.preventDefault()
        if (plant.name.length > 0) {
            let postBody = {
                ...plant, user_id: parseInt(this.props.currentUser.id), species_id: parseInt(this.state.speci.id)
            }
            fetch('http://localhost:3001/api/v1/plants', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify(
                    postBody
                )
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        show: false
                    })
                    
                    this.props.addPlant(data.data)
                    this.props.history.push('/my-plants')
                })
        }
        console.log(e)
        console.log(plant)
    }

    onClose = () => {
        this.setState({
            show: false
        })
    }


    // showConfirmation = () => {
    //     console.log('hello')

    // }


    // handleClickAddButton = (event) => {
    //     console.log(event.target)
    //     this.setState({
    //         addSpecies: this.showConfirmation()
    //     })
    // }

    handleSubmit = (event) => {
        if (event.target.value === "Add Plant") {
            this.setState({
                addPlant: 'plant added'
            })
        }
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
            <div>
                <Add show={this.state.show} speci={this.state.speci} curentUser={this.props.currentUser} saveNew={this.saveNew} onClose={this.onClose} />
                <div className="discover-container">
                    <div className="Find-your-match">
                        Find your match.
                        <hr size="1" align="center"></hr>
                    </div>
                    {/* <div className="Browse-all-houseplants">Browse all Houseplants</div> */}
                    <div className="cards-container">
                        {this.state.species.map(s => {
                            return <SpeciesCard key={s.id} species={s} add={this.showAdd}  />
                        })
                        }
                   </div>
                </div>
            </div>
        )
    }

}

export default DiscoverPage 