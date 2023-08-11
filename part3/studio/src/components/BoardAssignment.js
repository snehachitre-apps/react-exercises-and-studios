import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "dessert",
         value: "dessert"
      },
      {
         label: "recipe",
         value: "recipe"
      },
      {
         label: "inspiration",
         value: "inspiration"
      }
   ];
   const [boardName, setBoardName] = useState("no boards yet!");

   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((board, id) => (
            <option value={board.value}>{board.label}</option>
         ))}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}