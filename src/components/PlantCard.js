import React from "react";

const PlantCard = props => {
  const { plant } = props;

  //  = plant.attributes.dob.strftime("%m/%d/%Y")
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
   const plantDob = new Date(plant.attributes.dob).toLocaleDateString('en-US', options)
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={plant.id}
        
      >
        <div className="image">
          {/* <img alt="oh no!" src={plant.species.img_url} /> */}
          <img alt="my plant!" src="https://www.westelm.com/weimgs/ab/images/wcm/products/201940/0331/faux-fiddle-leaf-fig-plant-c.jpg" />
        </div>
        <div className="content">
          {plant.attributes.name} {plantDob} {plant.attributes.notes} {plant.attributes.species.name}
        </div>
        <div className="extra content">
          <button onClick={e => {
              props.showEdit(plant);
         }}>Edit</button>
        </div>
      </div>
    </div>
  );

};

export default PlantCard;
