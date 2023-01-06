import React from 'react';
import './note.css'
import NotePost from './notepost'
import { useState } from 'react';

function Noteaddpost(props){
  
  

  function addpost(){
  props.addpost()
  
    }

  const[newPostText, setNewPostText] = useState('Опубликовать') 

const onPostChange = (e) => {
   setNewPostText(e.target.value)
  }
 
  return(
  
      <div className="note__list">
        
        <div className='note_addpost'>
          <textarea className='note__textarea' onChange={onPostChange} value ={newPostText}></textarea>
          <button className='note__buttonpost' onClick={addpost}>Добавить пост</button>
        </div>
        
        <div className='posts'>
          {props.noteData?.map(listen =>  <NotePost key = {listen.id} message = {listen.message}  />)}
                    
                </div>

      </div>
  )
  
}
  export default Noteaddpost;