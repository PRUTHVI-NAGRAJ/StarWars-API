import React from 'react';


const Buttons=({onPlanetButtonClick,onSpaceshipButtonClick,onVehicleButtonClick,onPeopleButtonClick})=>{
	return(
		<div>
           <button className='f4 grow br-pill ph5 pv3 mb2 dib light-blue bg-black' onClick={onPlanetButtonClick} type="button">Planets</button>
           <button className='f4 grow br-pill ph5 pv3 mb2 dib light-blue bg-black' onClick={onSpaceshipButtonClick} type="button">Spaceships</button>
           <button className='f4 grow br-pill ph5 pv3 mb2 dib light-blue bg-black' onClick={onVehicleButtonClick} type="button">Vehicles</button>           
           <button className='f4 grow br-pill ph5 pv3 mb2 dib light-blue bg-black' onClick={onPeopleButtonClick} type="button">People</button> 
        </div>
           );     
}  

export default Buttons; 