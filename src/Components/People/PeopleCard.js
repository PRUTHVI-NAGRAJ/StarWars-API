import React from 'react';

const PeopleCard=(props)=>{
const {name,height,gender,skin_color}=props;
	return(
      <div className='bg-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
        <h3>name:{name}</h3>
        <p>height:{height}</p>
        <p>gender:{gender}</p>
        <p>skin_color:{skin_color}</p>
        </div>
      </div>
    );
}

export default PeopleCard;