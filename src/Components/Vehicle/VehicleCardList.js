import React from 'react';
import VehicleCard from'./VehicleCard';


const VehicleCardList=({vehicles})=>{
     
	return(
     <div>
     {
     vehicles.map((vehicle,i)=>{
     	return(
     <VehicleCard key={i} 
     name={vehicles[i].name}
     model={vehicles[i].model}
     manufacturer={vehicles[i].manufacturer}
     cost_in_credits={vehicles[i].cost_in_credits}
     length={vehicles[i].length}
     max_atmosphering_speed={vehicles[i].max_atmosphering_speed}
     passengers={vehicles[i].passengers}
     vehicle_class={vehicles[i].vehicle_class}
           />
           );
       })
     } 
     </div>
		);
}

export default VehicleCardList;


