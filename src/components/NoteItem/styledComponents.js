// Style your elements here
import styled from 'styled-components'

export const NotesLi = styled.li`
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  border: 1px solid #d8d8d8;
  font-family: 'Roboto';
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 250px;
    margin-right: 10px;
  }
`
export const LiHeading = styled.h3`
  color: #1e293b;
`
export const LiNote = styled.p`
  color: #334155;
`
