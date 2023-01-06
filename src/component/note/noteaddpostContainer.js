import React from 'react';
import './note.css'

import {addPostActionCreation, onPostChangeActionCreation} from '../../redux/reducer/postreducer.js'
import {useSelector, useDispatch} from 'react-redux'
import Noteaddpost from './noteaddpost.js'

function NoteaddpostContainer(props){
  const state = props.Postpage;

  const postElement = useSelector(state => state.Postpage.noteData)
  const dispatch = useDispatch() 
  const addpost = () => dispatch(addPostActionCreation())
  const updateNewPostText = (text) => dispatch(onPostChangeActionCreation(text))
  return(<Noteaddpost noteData={postElement}  addpost ={addpost} updateNewPostText ={updateNewPostText} />)

}


function mapStateToProps(state) {
  return{
      PostPage: state.PostPage
  }
  }
  
  function mapDispathToProps(dispatch) {
  return{
      
      addpost: () => dispatch(addPostActionCreation()),
      updateNewPostText: (text) => dispatch(onPostChangeActionCreation(text))
  }
  }

export default NoteaddpostContainer;