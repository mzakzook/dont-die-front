import React from "react";
import "./modal.css";
import deleteButton from '../../Delete-icon.png'
export default class Edit extends React.Component {

  state = {
    plantName: "",
    notes: ""
  }

  handleChange = (e) => {
    if (e.target.name === "plantName" && e.target.value.length < 21) {
      this.setState({
        plantName: e.target.value
      })
    } else if (e.target.name === "notes" && e.target.value.length < 51) {
      this.setState({
        notes: e.target.value
      })
    } else {
      alert('Exceeded character limit')
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return <div id="myModal" class="modal">
      <div className="modal-content">
        <form onSubmit={(event) => {
          this.props.saveEdit(event, this.state)
        }}>
          <label htmlFor="plantName">Plant Name    </label>
          <input
            type="text"
            name="plantName"
            placeholder={this.props.plant.attributes.name + ' (max 20 characters)'}
            onChange={this.handleChange}
          />
          <br />

          <label htmlFor="notes">Notes    </label>

          <input
            type="text"
            name="notes"
            placeholder={this.props.plant.attributes.notes + ' (max 50 characters)'}
            onChange={this.handleChange}
          />

          <button
            type="submit"
            className="btn btn-primary" >Save
          </button>
        </form>
        <button className="delete-button" onClick={() => {
          this.props.deletePlant()
        }}>
          delete
          </button>
          



        <button
          onClick={() => {
            this.props.onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  }
}