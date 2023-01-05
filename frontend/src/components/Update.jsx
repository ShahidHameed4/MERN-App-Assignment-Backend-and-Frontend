
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import Axios from 'axios';
function App() {
    const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [course, setCourse] = useState('');
  const [points, setPoints] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
   
    const assignment = { title, instruction, course, points, dueDate, topic };
    Axios.put(`http://localhost:3001/assignment/${id}`, assignment)
  }
  //get data
    const handleSearch = () => {
       
        Axios.get(`http://localhost:3001/assignment/${id}`)
        .then((response) => {
            setTitle(response.data.title);
            setInstruction(response.data.instruction);
            setCourse(response.data.course);
            setPoints(response.data.points);
            setDueDate(response.data.dueDate);
            setTopic(response.data.topic);
        })
    }




  return (
    <div className="App">
        
        <h1>Update Assignment</h1>
        <Input value={id} onChange={(event)=>{
            setId(event.target.value);
        }} placeholder="Id" />
        <Button onClick={handleSearch}>Search</Button>
      
        

      <Input value={title} onChange={(e)=>{ 
        setTitle(e.target.value);
      } } placeholder="Title" />
      <Input value={instruction} onChange={(e)=>{ 
        setInstruction(e.target.value);
      } } placeholder="Instruction" />
      <Input value={course} onChange={(e)=>{ 
        setCourse(e.target.value);
    } } placeholder="Course" />
      <Input value={points} onChange={(e)=>{ 
        setPoints(e.target.value);
    } } placeholder="Points" />
      <Input onChange={(e)=>{ 
        setDueDate(e.target.value);
    } } type='date' placeholder="DueDate" />
      <Input value={topic} onChange={(e)=>{ 
        setTopic(e.target.value);
    } } placeholder="Topic" />

      <Button onClick={handleSubmit}>Update</Button>     
    </div>
  );
}

export default App;
