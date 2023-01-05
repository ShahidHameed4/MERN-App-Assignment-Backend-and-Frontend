import logo from './logo.svg';
import './App.css';
import { Input, Button } from '@nextui-org/react';
import { useState } from 'react';
import Axios from 'axios';
import Update from './components/Update.jsx';
function App() {
  const [title, setTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [course, setCourse] = useState('');
  const [points, setPoints] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {

    const assignment = { title, instruction, course, points, dueDate, topic };
    Axios.post('http://localhost:3001/assignment/', assignment)
  }


  return (
    <div className="App">
      <Input onChange={(e)=>{ 
        setTitle(e.target.value);
      } } placeholder="Title" />
      <Input onChange={(e)=>{ 
        setInstruction(e.target.value);
      } } placeholder="Instruction" />
      <Input onChange={(e)=>{ 
        setCourse(e.target.value);
    } } placeholder="Course" />
      <Input onChange={(e)=>{ 
        setPoints(e.target.value);
    } } placeholder="Points" />
      <Input onChange={(e)=>{ 
        setDueDate(e.target.value);
    } } type='date' placeholder="DueDate" />
      <Input onChange={(e)=>{ 
        setTopic(e.target.value);
    } } placeholder="Topic" />

      <Button onClick={handleSubmit}>Submit</Button>  

         <Update />
    </div>
  );
}

export default App;
