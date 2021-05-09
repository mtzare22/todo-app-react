import { useState } from 'react'
const AddNote = ({onAdd}) => {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [done,setDone] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault();
        if(!title) {
            alert('لطفا یادداشت را وارد نمائید.');
            return false;
        }else {
            onAdd({title,date,done})
            setTitle('')
            setDate('')
            setDone(false)
        }
    }
    return (
        <div className='addBox'>
            <form>
                <div className='form-control'>
                    <label>عنوان یادداشت:</label>
                    <input type="text" value={title} 
                    onChange={(e) => setTitle(e.target.value) }
                    />
                </div>
                <div className='form-control'>
                    <label>تاریخ:</label>
                    <input type="date" value={date} 
                     onChange={(e) => setDate(e.target.value) }
                    />
                </div>
                <div className='form-control checkbox'>
                    <label>وضعیت (انجام شده/نشده):</label>
                    <input type="checkbox" checked={done} 
                     onChange={(e) => setDone(e.currentTarget.checked) }
                    />
                </div>
                <div className='form-control'>
                    <button className='btn' onClick={onSubmit}>ایجاد یادداشت جدید</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
