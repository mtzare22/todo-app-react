import Note from '../components/Note'

const Notes = ({notes , doDelete , dbClick }) => {
    return (
        <>
            {
                notes.map((note) => (
                    <Note key={note.id} note={note} doDelete={doDelete} dbClick={dbClick} />
                  ))
            }
        </>
    )
}

export default Notes
