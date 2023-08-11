const RecipeAuthor = () => {
   let authorLink = "https://thesuburbansoapbox.com/about/";;
   let authorPhoto = "https://thesuburbansoapbox.com/wp-content/uploads/2021/02/nFMviV_w-e1614300721197-scaled-340x485.jpeg";;
   let authorName = "Kellie";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["heavy cream", "vanilla beans", "sugar", "egg yolks", "superfine sugar"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
         <h1>The Best Creme Brûlée</h1>
         <p>This Vanilla Creme Brûlée recipe is easy to make with cream, eggs, sugar and vanilla….and the burnt sugar topping is so fun to make. </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thesuburbansoapbox.com/wp-content/uploads/2022/11/Creme-Brulee-6.jpg" alt="photo of creme brulée" className="imageUpdates"/>
      );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}