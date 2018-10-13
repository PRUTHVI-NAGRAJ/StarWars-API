import React from 'react';

const SearchBox=({searchField,searchChange})=>{
	return(
		<div className='pa2'>
           <input className='pa3 ba b--dark-blue w-50'
           type='search' placeholder='Search' 
           onChange={searchChange}
           />               
         </div>
		);
}

export default SearchBox;
