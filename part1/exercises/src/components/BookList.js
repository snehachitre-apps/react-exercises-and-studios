import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books That Made a Difference.";
   let book1 = "https://images.thenile.io/r1000/9781626860605.jpg";
   let book2 = "https://cdn.kobo.com/book-images/b81ff4cf-415b-4d08-82a0-4a97baa85c27/1200/1200/False/tuesdays-with-morrie-1.jpg";
   let book3 = "https://images-na.ssl-images-amazon.com/images/I/81s5gr8znaL.jpg";

   return (
      <div className={classes.display}>
         <h3></h3>
         <h3 className = {classes.booksHeading}>{pageTitle}</h3>
         <img src={book1} alt="The Art of War" height="300px" />
         <img src={book2} alt="Tuesdays With Morrie" height="300px"/>
         <img src={book3} alt="The Alchemist" height="300px"/>
      </div>      
   );
}