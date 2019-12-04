import React from "react";
import "./modal.css";
export default class Edit extends React.Component {

  state = {
    plantName: "",
    notes: ""
  }

  handleChange = (e) => {
    if (e.target.name === "plantName") {
      this.setState({
        plantName: e.target.value
      })
    } else {
      this.setState({
        notes: e.target.value
      })
    }
  }

  render() {
    if(!this.props.show){
        return null;
    }
    return <div>

<form>
         <label htmlFor="plantName">Plant Name</label>
         <input
           type="text"
           name="plantName"
           placeholder={this.props.plant.attributes.name}
           onChange={this.handleChange}
         />

         <label htmlFor="notes">Notes</label>
         <input
           type="text"
           name="notes"
           placeholder={this.props.plant.attributes.notes}
           onChange={this.handleChange}
         />
          <button 
      
     className="btn btn-primary" onClick={(event) => {
      
      this.props.saveEdit(this.state)
     }}>Save
 </button>
       </form>
       <button onClick={() => {
         this.props.deletePlant()
       }}>
        Delete
       </button>

      
    
    <button
      onClick={() => {
        this.props.onClose();
      }}
    >
      Close
    </button>
  </div>;
  }
}