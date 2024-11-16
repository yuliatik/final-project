
import './App.css';
import MyList from './MyList';
import MyMealsAndIngredients from './MyMealsAndIngredients';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function App() {

  const[mealPlans, setMealPlans] = useState([]);
  const[selectedDay, setSelectedDay] = useState(false); 
  // false для того чтобы наша заметка изначально не была выбрана.

  const addMeal = () => {
    // console.log("it works - ADDING")
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForADay:""
    }
    setMealPlans([newMeal, ...mealPlans])
    // console.log(newMeal)
  }

  const deleteDay = (mealId) => {
  setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  // уберет определенный момент из массива

 
  const updatedDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) =>{
      if(mealPlan.id === myUpdatedMeal.id){
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals);
  }

  return (
    <div className="App">
      <MyList mealPlans={mealPlans} 
      addMeal={addMeal} 
      deleteDay={deleteDay}
      selectedDay={selectedDay}
      setSelectedDay={setSelectedDay}/>
      
      <MyMealsAndIngredients selectedDay = {selectedDay} updatedDay={updatedDay}/>
      
    </div>
  );
}}

export default App;
