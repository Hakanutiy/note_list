import './note.css'

function NotePost(props){
    
    return(
        <div className='note'>
            <div className='note__item'>
                <div className='note__burder'></div>
                <div className='note__name'>
                    
                    <p>Заметка</p>
                </div>
                <div className='note__text'>
                {props.message}
                </div>
            </div>

        </div>

    )
}

export default NotePost;