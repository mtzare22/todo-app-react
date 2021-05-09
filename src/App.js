import './assets/css/style.css'
import { useState } from 'react'
import Notes from './components/Notes'
import AddNote from './components/AddNote'

function App() {
  const [notes , setNotes] =  useState([
    {
      id: 1,
      title: 'مطالعه روزانه یک کتاب',
      date: '2020-05-27',
      done: true
    },
    {
      id: 2,
      title: 'انجام پروژه برنامه نویسی',
      date: '2020-05-27',
      done: false
    },
    {
      id: 3,
      title: 'ورزش هوازی و استقامتی',
      date: '2020-05-27',
      done: true
    }
  ]);

  // Add Note
  const addNote = (note) => {
    console.log(note);
    const id = Math.floor(Math.random() * 10000) + 1;
    const newNote = {id , ...note}
    setNotes([...notes , newNote]);
  }

  // On Delete
  const doDelete = (id) => {
    let res = window.confirm("آیا مطمئنی ؟");
    if (res){
       setNotes(notes.filter((note) => note.id !== id))
    }

  }

  //On Toggle or DbClick on Note
const dbClick = (id) => {
  setNotes(notes.map((note) => note.id === id ? 
  {...note,done : !note.done} : note))
}



  return (
    <div className="App">
        <AddNote onAdd={addNote} />
      <div className='container'>
        <p>نرم افزار یادداشت کارها</p>   
        {notes.length > 0 ? (     
          <Notes notes={notes} doDelete={doDelete} dbClick={dbClick} />
        ):(<span>هیچ یادداشتی وجود ندارد.</span>)}
          </div>
    </div>
  );
}

export default App;
