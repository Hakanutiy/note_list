import './Global.css'
import {NavLink} from 'react-router-dom';
function Global() {
    return(
<div className="Global">
          <div className='global__title'>
            <h1>Боишься забыть или потерять?</h1>
          </div>
              <div className='global__text'>
                   <p>У тебя есть бесплатные заметки в которых ты можешь все написать. </p>
                   <p>Чтобы начать пользоваться заметками нажми "Добавить заметку"</p>
              </div>

                  <div className='global__image'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRApUyla99a8C2qDuA52prnRaL_SoJyT3Iw&usqp=CAU'></img>  
              
                   </div>

                 <div>
                 <NavLink to ="/note"  className="Startlink" ><button>Создать </button></NavLink>
          
                 </div>
</div>
    )
}
export default Global