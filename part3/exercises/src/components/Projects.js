import './styles.css';
import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let projectsList=data.projects;

    let projectItem=projectsList[index];
    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
     

    return (
        <div>            
            <button onClick={handleClick}>Next</button>
            <ul className="projectItemList">
                <li>{projectItem.description}</li>
                <li>{projectItem.place}</li>
                <img src={projectItem.photoUrl} alt={projectItem.alt} className = "img"/>
                

            </ul>
            </div>

    
    );

}
