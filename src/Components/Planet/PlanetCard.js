import React from 'react';

const PlanetCard=(props)=>{
const {name,terrain,population,rotation_period,orbital_period,diameter,climate,gravity,surface_water}=props;
	return(
      <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
        <h3>Planet name:{name}</h3>
        <p>Terrain: {terrain}</p>
        <p>Population: {population}</p>
        <p>rotation_period:{rotation_period}</p>
        <p>orbital_period:{orbital_period}</p>
        <p>diameter:{diameter}</p>
        <p>climate:{climate}</p>
        <p>gravity:{gravity}</p>
        <p>surface_water:{surface_water}</p>
        </div>
      </div>
    );
}

export default PlanetCard;