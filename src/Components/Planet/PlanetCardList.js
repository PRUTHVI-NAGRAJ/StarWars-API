import React from 'react';
import PlanetCard from'./PlanetCard';


const PlanetCardList=({planets})=>{
     
	return(
     <div>
     {
     planets.map((planet,i)=>{
     	return(
     <PlanetCard key={i} 
           name={planets[i].name} 
           terrain={planets[i].terrain} 
           population={planets[i].population}
           rotation_period={planets[i].rotation_period}
           orbital_period={planets[i].orbital_period}
           diameter={planets[i].diameter}
           climate={planets[i].climate}
           gravity={planets[i].gravity}
           surface_water={planets[i].surface_water}
           />
           );
       })
     } 
     </div>
		);
}

export default PlanetCardList;