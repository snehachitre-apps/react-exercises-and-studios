import classes from './HobbyLinks.module.css';

export default function HobbyLinks () {
   let hobbyLinks = ["https://www.webmd.com/fitness-exercise/what-to-know-about-taekwondo", "https://askc.org/index.php/observatories/powell-observatory", "https://www.thesprucecrafts.com/acrylic-painting-tips-for-beginners-2578746"]
   return (
      <div className={classes.display}>s
         <h3 className = {classes.hobbiesHeading}> Some of my hobbies.</h3>
      
         <ul>
               <li className={classes.hobbiesText}><a href = {hobbyLinks[0]}>About Taekwondo</a></li> 
               <li className={classes.hobbiesText}> <a href = {hobbyLinks[1]}>About Astronomy-Powell Observatory, KS.</a></li> 
               <li className={classes.hobbiesText}>  <a href = {hobbyLinks[2]}>About Acrylic Painting</a></li> 
               
              
         </ul>
      </div>
      );
}

