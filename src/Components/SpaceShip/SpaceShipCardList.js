import React from 'react';
import SpaceShipCard from'./SpaceShipCard';


const SpaceShipCardList=({spaceShips})=>{
     
	return(
     <div>
     {
     spaceShips.map((spaceShip,i)=>{
     	return(
     <SpaceShipCard key={i} 
          name={spaceShips[i].name}
          model={spaceShips[i].model}
          manufacturer={spaceShips[i].manufacturer}
          length={spaceShips[i].length}
          starship_class={spaceShips[i].starship_class}
          cargo_capacity={spaceShips[i].cargo_capacity}
          crew={spaceShips[i].crew}
          max_atmosphering_speed={spaceShips[i].max_atmosphering_speed}
          cost_in_credits={spaceShips[i].cost_in_credits}
          passengers={spaceShips[i].passengers}
          MGLT={spaceShips[i].MGLT}
           />
           );
       })
     } 
     </div>
		);
}

export default SpaceShipCardList;