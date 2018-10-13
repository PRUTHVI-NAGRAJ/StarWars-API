import React, {Component} from 'react';
import SearchBox from '../Components/SearchBox';
import PlanetCardList from '../Components/Planet/PlanetCardList';
import SpaceShipCardList from '../Components/SpaceShip/SpaceShipCardList';
import VehicleCardList from '../Components/Vehicle/VehicleCardList';
import PeopleCardList from '../Components/People/PeopleCardList';
import Buttons from '../Components/Buttons';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state= {
			planets:[],
			spaceShips:[],
      vehicles:[],
      people:[],
      searchField:'',
      planetButton:'',
      vehicleButton:'',
      peopleButton:''
        }
	}


	onSearchChange=(event)=>{
		this.setState({searchField:event.target.value})
		}
	

	onPlanetButtonClick=(event)=>{

	    const urls=  ['https://swapi.co/api/planets/?page=1',
                      'https://swapi.co/api/planets/?page=2',
                      'https://swapi.co/api/planets/?page=3',
                      'https://swapi.co/api/planets/?page=4',
                      'https://swapi.co/api/planets/?page=5',
                      'https://swapi.co/api/planets/?page=6',
                      'https://swapi.co/api/planets/?page=7',
		            ]
        Promise.all(urls.map(url=>{
       	               return fetch(url)
       	               .then(response=>response.json())}))
                       .then(planetArray=>[planetArray[0].results,
       	                                      planetArray[1].results,
       	                                      planetArray[2].results,
                                              planetArray[3].results,
                                              planetArray[4].results,
                                              planetArray[5].results,
                                              planetArray[6].results])
                       .then(array=>array[0].concat(array[1],array[2],
                       	            array[3],array[4],array[5],array[6]))
                       .then(array=> {this.setState({spaceShips:[],
                                                     vehicles:[],
                                                     people:[],
                                                     planets:array
                                                     })});
		
	}

	onSpaceshipButtonClick=(event)=>{

		const urls=['https://swapi.co/api/starships/?page=1',
		            'https://swapi.co/api/starships/?page=2',
		            'https://swapi.co/api/starships/?page=3',
		            'https://swapi.co/api/starships/?page=4'
                   ]
        Promise.all(urls.map(url=>{
       	               return fetch(url)
       	               .then(response=>response.json())}))
                       .then(array=>[array[0],array[1],array[2],array[3]])
                       .then(array=>(array[0].results).concat(array[1].results,array[2].results,array[3].results))
                       .then(array=> {this.setState({planets:[],
                                                     vehicles:[],
                                                     people:[],
                                                     spaceShips:array                                                    
                                                     })});
	}

  onVehicleButtonClick=(event)=>{
    const urls=['https://swapi.co/api/vehicles/?page=1',
                'https://swapi.co/api/vehicles/?page=2',
                'https://swapi.co/api/vehicles/?page=3',
                'https://swapi.co/api/vehicles/?page=4'
                   ]
          Promise.all(urls.map(url=>{
                       return fetch(url)
                       .then(response=>response.json())}))
                       .then(array=>[array[0],array[1],array[2],array[3]])
        .then(array=>(array[0].results).concat(array[1].results,array[2].results,array[3].results))
        .then(array=> {this.setState({planets:[],
                                      people:[],
                                      spaceShips:[],
                                      vehicles:array})});
  }

  onPeopleButtonClick=(event)=>{
    const urls=['https://swapi.co/api/people/?page=1',
                'https://swapi.co/api/people/?page=2',
                'https://swapi.co/api/people/?page=3',
                'https://swapi.co/api/people/?page=4',
                'https://swapi.co/api/people/?page=5',
                'https://swapi.co/api/people/?page=6',
                'https://swapi.co/api/people/?page=7',
                'https://swapi.co/api/people/?page=8',
                'https://swapi.co/api/people/?page=9'
                   ]
          Promise.all(urls.map(url=>{
                       return fetch(url)
                .then(response=>response.json())}))
  .then(array=>[array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8]])
  .then(array=>(array[0].results).concat(array[1].results,array[2].results,array[3].results,array[4].results,array[5].results,array[6].results,array[7].results,array[8].results))
   .then(array=> {this.setState({planets:[],
                                 vehicles:[],
                                 spaceShips:[],
                                 people:array})});
  }


	render(){
    const {planets,spaceShips,vehicles,people,searchField}=this.state;

		 const filterPlanets = planets.filter(planet=>{
      return planet.name.toLowerCase().includes(searchField.toLowerCase())
    })
	const filterSpaceShips = spaceShips.filter(spaceShip=>{
      return spaceShip.name.toLowerCase().includes(searchField.toLowerCase())
    })
  const filterVehicles = vehicles.filter(vehicle=>{
      return vehicle.name.toLowerCase().includes(searchField.toLowerCase())
    })
  const filterPeople = people.filter(person=>{
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    })

      
	return(
		  <div className='tc'>
		  <h1 className='f1'> Star Wars</h1>
		  <SearchBox searchChange={this.onSearchChange} />
      <Buttons
		  onPlanetButtonClick={this.onPlanetButtonClick}
		  onSpaceshipButtonClick={this.onSpaceshipButtonClick} 
      onVehicleButtonClick={this.onVehicleButtonClick}
      onPeopleButtonClick={this.onPeopleButtonClick} 
      />
      <PlanetCardList planets={filterPlanets}/>
      <SpaceShipCardList spaceShips={filterSpaceShips}/>
      <VehicleCardList vehicles={filterVehicles}/>
      <PeopleCardList people={filterPeople}/>
          </div>
         );
     }
  }

export default App;



 