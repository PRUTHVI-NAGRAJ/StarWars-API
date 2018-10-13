import React from 'react';
import PeopleCard from'./PeopleCard';


const PeopleCardList=({people})=>{
     
	return(
     <div>
     {
     people.map((person,i)=>{
     	return(
     <PeopleCard key={i} 
     name={people[i].name}
     height={people[i].height}
     gender={people[i].gender}
     skin_color={people[i].skin_color}
     />
           );
       })
     } 
     </div>
		);
}

export default PeopleCardList;


