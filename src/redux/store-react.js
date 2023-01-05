import {combineReducers, legacy_createStore as createStore} from "redux"; 
import PostReducer from './reducer/postreducer.js'

let reducerpath = combineReducers({
    Postpage: PostReducer
})
let store =  createStore(reducerpath)
export default store;