import React, { Fragment } from "react";
import "./PlantCard.css"
import editButton from '../Edit_icon.png'

const PlantCard = props => {
  const { plant } = props;

  // if (plant.attributes.dob) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const plantDob = new Date(plant.attributes.dob).toLocaleDateString('en-US', options)
  
  return (
    <Fragment>
      <p className="Line-2" ></p>
      <div className="plant_card">
        <div className="plant_image">
          {/* <img alt="oh no!" src={plant.species.img_url} /> */}
          <img alt="my plant!" src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_zz-plant_hover_terracotta_1024x1024.jpg?v=1575095122" />
        </div>
        <div className="plant_content">
          <div className="plant_info">
            <p className="plant_name">{plant.attributes.name}</p> 
            <p className="other_plant_info" >Species: {plant.attributes.species.name} </p><p className="other_plant_info" >
            Birth/Adoption Date: {plant.attributes.dob ? plantDob : ""}</p>
            <p className="plant_notes">Notes: {plant.attributes.notes}</p>
          </div>
          <div className="plant_edit">
            <img className="edit-img" src={editButton} alt="edit button" onClick={e => {
              props.showEdit(plant);
            }} />
          </div>
        </div>

      </div>
    </Fragment>
  );

};

export default PlantCard;
