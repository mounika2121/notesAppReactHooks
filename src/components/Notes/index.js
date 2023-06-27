// Write your code
import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  Heading,
  FormContainer,
  InputName,
  InputNotes,
  Button,
  NoNotesContainer,
  NoNotesImg,
  NoNotesHeading,
  NoNotesPara,
  NotesListUl,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  const onAddNewNotes = event => {
    event.preventDefault()

    const newNote = {
      id: v4(),
      title,
      note,
    }
    setNotesList(prevList => [...prevList, newNote])
    setTitle('')
    setNote('')
  }

  const noNotes = notesList.length === 0

  return (
    <AppContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onAddNewNotes}>
        <InputName
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <InputNotes
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {noNotes ? (
        <NoNotesContainer>
          <NoNotesImg
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesPara>Notes you add will appear here</NoNotesPara>
        </NoNotesContainer>
      ) : (
        <NotesListUl>
          {notesList.map(eachNote => (
            <NoteItem noteDetails={eachNote} key={eachNote.id} />
          ))}
        </NotesListUl>
      )}
    </AppContainer>
  )
}

export default Notes
