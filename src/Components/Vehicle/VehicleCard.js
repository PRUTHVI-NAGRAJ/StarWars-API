import React from 'react';

const VehicleCard=(props)=>{
const {name,model,manufacturer,cost_in_credits,length,max_atmosphering_speed,passengers,vehicle_class}=props;
	return(
      <div className='bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
        <h3>name:{name}</h3>
        <p>model:{model}</p>
        <p>manufacturer:{manufacturer}</p>
        <p>cost_in_credits:{cost_in_credits}</p>
        <p>length:{length}</p>
        <p>max_atmosphering_speed:{max_atmosphering_speed}</p>
        <p>passengers:{passengers}</p>
        <p>vehicle_class:{vehicle_class}</p>
        </div>
      </div>
    );
}

export default VehicleCard;