import React from 'react';
import './note.css'
import NotePost from './notepost'
import {addPostActionCreation, onPostChangeActionCreation} from '../../redux/reducer/postreducer.js'
import {connect} from 'react-redux'

function Noteaddpost(props){
let postElement = props.noteData.map(listen =><NotePost message = {listen.message} />)
let newaddpost = React.createRef()
  return(<Noteaddpost />)
}


function mapStateToProps(state){
  return{
    Postpage: state.Postpage
  }
}

function mapDispatchToProps(dispatch){
  return{

    addpost: () => dispatch(addPostActionCreation()),
    updatenewMessageBody: (text) =>  onPostChangeActionCreation(text)
  }
}

export default connect(mapStateToProps , mapDispathToProps)(NoteaddpostContainer);