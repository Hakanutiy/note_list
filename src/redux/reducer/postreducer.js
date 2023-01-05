const ADD_POST = 'ADD-POST'
const   CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialstate = {
    noteData: [
        {id: 1, message: 'Программист — что это значит? Это сильный человекНад программой не заплачет, а работать будет век, пусть же разные программы быстро пишутся, легко! пусть своим умом вы самиДобиваетесь всего!'},
    ],
    newPostText: 'Опубликовать'
}

function PostReducer(state = initialstate, action) {
    if(action.type === ADD_POST){
        let newnote ={
            id:2,
            message: state.newPostText
        }
        state.noteData.push(newnote)
        state.newPostText = '';
    }
    else if(action.type === CHANGE_NEW_POST_TEXT){
        state.newPostText = action.newText;
    }
    return state;

}
export const addPostActionCreation = () => ({type: ADD_POST})
export const onPostChangeActionCreation = (text) => ({ type: CHANGE_NEW_POST_TEXT, newText: text})
export default PostReducer