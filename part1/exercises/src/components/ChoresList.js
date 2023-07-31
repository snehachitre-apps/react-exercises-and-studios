import classes from './ChoresList.module.css';

function ChoresList () {
   let listOfChores = ["sweep floor", "do laundry", "make bed","meal prep","yard work"]
   return (
      <div className={classes.background}>
         <h3 className = {classes.choresHeading}> Chores today</h3>
      
         <ol>
           
            <li className={classes.choresText}>{listOfChores[0]}</li>
            <li className={classes.choresText}>{listOfChores[1]}</li>
            <li className={classes.choresText}>{listOfChores[2]}</li>
            <li className={classes.choresText}>{listOfChores[3]}</li>
            <li className={classes.choresText}>{listOfChores[4]}</li>
         </ol>
      </div>
      );
}

export default ChoresList;