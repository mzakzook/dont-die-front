import React, { Component, Fragment } from "react";
import PlantCard from "../components/PlantCard";
import Edit from "../components/modals/Edit"
import "../components/PlantCard.css"
import DeleteConfirm from "../components/modals/DeleteConfirm"




class MyPlants extends Component {

  state = {
    show: false,
    plant: {},
    delete: false,
    alteredPlants: []
  }

  alterPlants = (e) => {
    debugger
    const newArr = this.props.plants.filter(plant => plant.attributes.name.toLowerCase().includes(e.target.value.toLowerCase()) || plant.attributes.species.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      alteredPlants: newArr
    }, () => {
      console.log(newArr[0])
    })
  }

  showEdit = (plant) => {
    this.setState({
      show: true,
      plant
    })
  }

  onClose = () => {
    this.setState({
      show: false,
      delete: false,
      plant: {}
    })
  }

  saveEdit = (e, plant) => {
    e.preventDefault()
    if (plant.plantName.length > 0 && plant.notes.length > 0) {
      let saveBody = { name: plant.plantName, notes: plant.notes }
      this.editMyPlant(saveBody)
    } else if (plant.plantName.length > 0) {
      let saveBody = { name: plant.plantName }
      this.editMyPlant(saveBody)
    } else if (plant.notes.length > 0) {
      let saveBody = { notes: plant.notes }
      this.editMyPlant(saveBody)
    } else {
      this.setState({
        show: false
      })
    }

  }

  editMyPlant = (saveBody) => {
    fetch(`http://localhost:3001/api/v1/plants/${this.state.plant.attributes.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(
        saveBody
      )
    })
      .then(res => res.json())
      .then(plants => {
        this.setState({
          show: false
        })
        this.props.fetchPlants()
      })
  }

  deletePlant = () => {
    this.setState({
      show: false,
      delete: true
    })
  }

  deleteFetch = () => {
    fetch(`http://localhost:3001/api/v1/plants/${this.state.plant.attributes.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      }
    })
      .then(res => {
        this.setState({
          delete: false
        })
        this.props.fetchPlants()
      })
  }



  render() {

    // const { showBotDets, allBots } = this.props
    const { plants } = this.props

    return (
      <Fragment>
        <h2 className="your_plant_greeting" >Your plant family.</h2>
        <br /><br /><br />
        <div className="search-wrapper" >
          <input className="plant_search" onChange={this.alterPlants} placeholder="Search here..." type="text" />
        </div>

        <div className="plant_container">

          {this.state.alteredPlants.length > 0 ? (this.state.alteredPlants.map(plant => <PlantCard plant={plant} key={plant.id} showEdit={this.showEdit} />)) : (plants.map(plant => <PlantCard plant={plant} key={plant.id} showEdit={this.showEdit} />))}

        </div>
        <Edit show={this.state.show} plant={this.state.plant} onClose={this.onClose} saveEdit={this.saveEdit} deletePlant={this.deletePlant} />
        <DeleteConfirm delete={this.state.delete} fetch={this.deleteFetch} plant={this.state.plant} onClose={this.onClose} />


      </Fragment >
    );
  }

};

export default MyPlants;
