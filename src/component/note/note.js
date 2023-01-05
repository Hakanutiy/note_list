import React from 'react';
import './note.css'
import Noteaddpost from './noteaddpost'


function Note(props) {
 return <Noteaddpost noteData ={props.Postpage.noteData}  newPostText ={props.Postpage.newPostText} dispatch = {props.dispatch}/>
}
export default Note