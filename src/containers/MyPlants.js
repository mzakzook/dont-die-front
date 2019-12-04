import React, {Component, Fragment} from "react";
import PlantCard from "../components/PlantCard";
import Edit from "../components/modals/Edit"


class MyPlants extends Component {
  
  state = {
    show: false,
    plant: {}
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
      plant: {}
    })
  }

  saveEdit = (e) => {
    
    if (e.plantName.length > 0 && e.notes.length > 0) {
      let saveBody = {name: e.plantName, notes: e.notes}
      this.editMyPlant(saveBody)
    } else if (e.plantName.length > 0) {
      let saveBody = {name: e.plantName}
      this.editMyPlant(saveBody)
    } else if (e.notes.length > 0) {
      let saveBody = {notes: e.notes}
      this.editMyPlant(saveBody)
    } else {
      return
    }
    
  }

  deletePlant = () => {
    fetch(`http://localhost:3001/api/v1/plants/${this.state.plant.attributes.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      }
    })
    .then(res => {
      this.setState({
        show: false
      })
      this.props.fetchPlants()
    })
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

  render(){
	
	// const { showBotDets, allBots } = this.props
	const { plants } = this.props

	return (
			<Fragment>
  	  <div className="ui four column grid">
    
        {plants.map(plant => <PlantCard plant={plant} key={plant.id} showEdit={this.showEdit} />)}
      
  	  </div>
      <Edit show={this.state.show} plant={this.state.plant} onClose={this.onClose} saveEdit={this.saveEdit} deletePlant={this.deletePlant} />

  
			</Fragment>
  	);
  }

};

export default MyPlants;
