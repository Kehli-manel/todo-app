import react, { useState } from 'react'
import '../App.css'
import myImage from './add.png'
import image from './delet.png'
import done from './done.png'

function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [color, setColor] = useState('#D8B9C3');
    function Add() {
        if (inputValue !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }
    function HandleInputChange(e) {
        setInputValue(e.target.value);
    }
    function Remove(index) {
        const newList = todos.filter((_, i) => i !== index);
        setTodos(newList);


    }
    return (
        <div>
            <div className='todo-container'>
                <input
                    placeholder='write your note here'
                    type='text'
                    value={inputValue}
                    onChange={HandleInputChange} />
                <button className='add-btn' onClick={Add}><img src={myImage} /></button>
            </div>
            <div className='list' >
                <ul className='todo-list'>
                    {todos.map(
                        (todo, index) => (
                            <li key={index}>
                                <div style={{backgroundColor: color}} >{todo}</div>
                                <button className='done-btn' onClick={()=> setColor('green')} ><img src={done} /></button>
                                <button className='delet-btn' onClick={() => Remove(index)}><img src={image} /></button>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );

}
export default Todo;