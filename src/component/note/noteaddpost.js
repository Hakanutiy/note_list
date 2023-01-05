import React from 'react';
import './note.css'
import NotePost from './notepost'
import {addPostActionCreation, onPostChangeActionCreation} from '../../redux/reducer/postreducer.js'

function Noteaddpost(props){
let postElement = props.noteData.map(listen =><NotePost message = {listen.message} />)
let newaddpost = React.createRef()

function addpost(){
    props.dispatch(addPostActionCreation())
  
}

let onPostChange = () => {
    let text = newaddpost.current.value
        props.dispatch(onPostChangeActionCreation(text))
        
}


  return(
      <div className="note__list">
        <div className='note_addpost'>
          <textarea className='note__textarea' onChange={onPostChange} ref={newaddpost} value ={props.newPostText}></textarea>
          <button className='note__buttonpost' onClick={addpost}>Добавить пост</button>
        </div>
        
        <div className='posts'>
                    {postElement}
                    
                </div>

      </div>
  )
}
  export default Noteaddpost