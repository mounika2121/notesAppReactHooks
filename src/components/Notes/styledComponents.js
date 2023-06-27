// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 75%;
  padding: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`
export const Heading = styled.h1`
  text-align: center;
  color: #4c63b6;
  font-family: 'Bree Serif';
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
`
export const InputName = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 100%;
  height: 15px;
  border: none;
  margin-bottom: 20px;
  outline: none;
`
export const InputNotes = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 100%;
  height: 40px;
  border: none;
  margin-bottom: 20px;
  outline: none;
`
export const Button = styled.button`
  background-color: #4c63b6;
  color: white;
  border: none;
  align-self: flex-end;
  height: 30px;
  width: 60px;
  font-size: 13px;
  border-radius: 6px;
`
export const NoNotesContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`
export const NoNotesImg = styled.img`
  height: 100px;
`
export const NoNotesHeading = styled.h2`
  color: #475569;
`
export const NoNotesPara = styled.p`
  color: #475569;
`
export const NotesListUl = styled.ul`
  padding-left: 0px;
  list-style-type: none;
`
