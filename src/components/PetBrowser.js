import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

  	var petCards = this.props.pets.map(pet=>{
  		return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false}/>
  	})
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp; 
        {petCards}
      </div>
    );
  }
}

export default PetBrowser;