import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photos';
function App() {
  return (
    <div className="App" className="recipePhotoBlock">
      <RecipePhoto/>
      <div className="recipePhotoBlock">
        <RecipeDescription/>
        <RecipeIngredients/>
      </div>
    </div>
  );
}

export default App;
