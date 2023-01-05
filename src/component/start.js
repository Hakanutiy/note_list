import './start.css'
import {NavLink} from 'react-router-dom';
function Start() {
    return(
        <div className="Startweb">
          <div className='start__title'>
            <h1>Добро пожаловать в мир заметок!</h1>

            
          </div>

            <div className='start__text'>
                <p>здесь ты можешь оставить какое-либо напоминание</p>
                
                </div>

          
            <div>
          <NavLink to ="/global"  className="Startlink" ><button>Запуск </button></NavLink>
          </div>
        </div>
    )
}
export default Start