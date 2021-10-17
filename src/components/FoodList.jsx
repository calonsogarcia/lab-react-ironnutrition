import React, { Component } from 'react'
import FoodBox from './FoodBox';
import foods from '../foods.json'
import AddFoodForm from './AddFoodForm';


class FoodList extends Component {

    state = {
        foddList:foods,
      }

    
      render(){
        return (
          <div>
            <h1>Diary food list</h1>

            <AddFoodForm /> 

            {this.state.foddList.map(eachFood => {
              return(
                <FoodBox eachFood={eachFood} />
              )
            })}
          </div>
        );
    }
}

export default FoodList
