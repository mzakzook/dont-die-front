import React from "react";
import "./modal.css";
export default class DeleteConfirm extends React.Component {


  render() {
    if (!this.props.delete) {
      return null;
    }
    return <div id="myModal" class="modal">
      <div className="modal-content">
        <p>Are you sure you'd like to delete {this.props.plant.attributes.name}?</p>
        <button onClick={() => {
          this.props.fetch()
        }}>
          Yes
          </button>



        <button
          onClick={() => {
            this.props.onClose();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  }
}