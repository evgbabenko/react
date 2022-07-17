import React from 'react';
import Main from '../main';



//CSS impirt
import './app.css'

const AppTitle = 'TODO List';
const BottomText = 'Список на сегодня';
const TaskArr = [];  

const App = () => {
    
    return (
        <div className='main'>
            <Main AppTitle={AppTitle} BottomText={BottomText} TaskArr={TaskArr}/>
        </div>
    )
}

export default App;