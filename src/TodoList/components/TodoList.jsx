import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos } from 'TodoList/redux/reducer';
import '../css/index.scss';

const mapStateProps = (state) => {
    return {
        todo: state,
    }
}

const mapDispatchProps = (dispatch) =>
{
    return{
        addTodos: (obj) => dispatch(addTodos (obj)),
        removeTodos: (id) => dispatch(removeTodos(id)),
        updateTodos: (obj) => dispatch(updateTodos(obj))
    }
}

function TodoList(props) {

    const [todo, setTodo] = useState(" ");
    const inputref = useRef(true)

    const changeFocus = () => {
        inputref.current.disabled = false;
        inputref.current.focus();
    }

    const update = (id, value, e) => {
        if(e.which === 13){
            props.updateTodos({id, item:value});
            inputref.current.disabled = true;
        }
    }
    const handleAdd = (e) => {
        setTodo(e.target.value);
    }
    const add = () => {
        props.addTodos({
            id: Math.floor(Math.random() * 1000),
            item: todo,
            // completed: false,
        })
        setTodo("");
    }
    // console.log(todo);
    // console.log(props);
    return (
        <div className='Todo'>
            <div className='addTodo'>
            <input className='todo_input' 
                type="text"
                value={todo}
                onChange={(e) => handleAdd(e)}/>
            <button className='button_add' 
                onClick={() => add()}>+</button>
            </div>
                <div className='list'>
                    <ul>
                        {props.todo.map((item) => {
                            return (
                            <li key = {item.id}>
                                <textarea ref={inputref} disabled={inputref} defaultValue={item.item}
                                onKeyPress = {(e) => update(item.id, inputref.current.value, e)} />
                                
                                <button className='button_update' onClick={changeFocus}><i className="fa-solid fa-pencil"></i></button>
                                <button className='button_delete' 
                                    onClick={() => props.removeTodos(item.id)
                                }><i className="fa-solid fa-trash-can"></i></button>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                
        </div>
    );
}

export default connect(mapStateProps,mapDispatchProps)(TodoList);