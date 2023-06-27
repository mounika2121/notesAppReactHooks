// Write your code here
import {NotesLi, LiHeading, LiNote} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails

  return (
    <NotesLi>
      <LiHeading>{title}</LiHeading>
      <LiNote>{note}</LiNote>
    </NotesLi>
  )
}

export default NoteItem
