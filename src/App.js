import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Start from './component/start.js'
import Global from './component/global/Global.js'
import Note from './component/note/note.js'
import { Provider } from 'react-redux';
import store from './redux/store-react'

function App(props) {

  let date = new Date()

  return (
    <Provider store ={store}>
    <BrowserRouter>
    
    <div className={(date.getHours()<=17&&date.getHours()>=6) ? 'App_wrapper' : 'App_wrappernight'}>
    
    <Routes>
    
    <Route exact path='/' element ={<Start />}/>

    <Route exact path='/global' element ={<Global />}/>

    <Route exact path='/Note' element ={<Note Postpage ={props.state.Postpage} dispatch = {props.dispatch} />}/>
    
    </Routes>
    
      
    </div>
    
    </BrowserRouter>
    </Provider>
  );
}

export default App;
