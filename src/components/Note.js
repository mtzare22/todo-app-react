import { FaTimes } from 'react-icons/fa'
import '../assets/css/note.css'
const Note = ({note , doDelete , dbClick}) => {
    return (
        <div className={`note ${note.done ? "noteDone" : ""}`}  
        onDoubleClick={() => dbClick(note.id)} >
            <FaTimes className="close" 
            onClick={() => doDelete(note.id)} />
            <div className="noteTitle">{note.title}</div>
            <div className="noteDate">{note.date}</div>
        </div>
    )
}

export default Note
