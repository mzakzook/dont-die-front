import React from 'react'
import './Modal.scss'

class Add extends React.Component {
    state = {
        name: '',
        dob: '',
        notes: ''
    }

    handleChange = (e) => {
        if (e.target.name === "plantName" && e.target.value.length < 21) {
            this.setState({
                name: e.target.value
            })
        } else if (e.target.name === "notes" && e.target.value.length < 51) {
            this.setState({
                notes: e.target.value
            })
        } else if (e.target.name === "dob") {
            this.setState({
                dob: e.target.value
            })
        } else {
            alert('Exceeded character limit')
        }
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div id="myModal" className="add-modal">
                <div className="add-modal-content">
                    <form onSubmit={(event) => {
                        this.props.saveNew(event, this.state)
                    }}>
                        <label htmlFor="plantName">Plant Name</label>
                        <input
                            type="text"
                            name="plantName"
                            // placeholder={this.props.plant.attributes.name}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="notes">Notes</label>
                        <input
                            type="text"
                            name="notes"
                            // placeholder={this.props.plant.attributes.notes}
                            onChange={this.handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary" >Save
                        </button>
                        <span id="close" onClick={this.props.onClose}>X</span>
                    </form>
                </div>
            </div>
        )
    }
}

export default Add