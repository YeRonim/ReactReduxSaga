import './App.css';
import { petIncrement, petDecrement, petFavorite } from './Redux/Actions';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  //console.log("store in app: ");

  const petCounter = useSelector((state) => state.petCounter);
  const favoritePet = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();

 
  return (
    <div className="App">
      <h1>Welcome to React Redux Crash Course 2021</h1>
      <button onClick = { () => dispatch(petIncrement(2))}>Add Pet</button>
      <button onClick = { () => dispatch(petDecrement())}>Remove Pet</button>
      <button onClick = { () => dispatch(petFavorite())}>Favorite Pet</button>

      <div>Pet Counter = {petCounter}</div>
      <div>Favorite Pets  = {favoritePet}</div>
    </div>
  );
}

export default App;