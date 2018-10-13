import React from 'react';

const SpaceShipCard=(props)=>{
const {name,model,manufacturer,starship_class,cargo_capacity,crew,
        max_atmosphering_speed,cost_in_credits,passengers,MGLT}=props;
	return(
      <div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
        <h3>Starship Name:{name} </h3>
        <p>model:{model}</p>
        <p>manufacturerlength:{manufacturer}</p>
        <p>starship_class:{starship_class}</p>
        <p>cargo_capacity:{cargo_capacity}</p>
        <p>crew:{crew}</p>
        <p>max_atmosphering_speed:{max_atmosphering_speed}</p>
        <p>cost_in_credits:{cost_in_credits}</p>
        <p>passengers:{passengers}</p>
        <p>MGLT:{MGLT}</p>
        </div>
      </div>
    );
}

export default SpaceShipCard;