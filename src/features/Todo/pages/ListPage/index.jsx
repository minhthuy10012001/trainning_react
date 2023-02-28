import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

// ListPage.propTypes = {

// };

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eating",
            status: 'new'
        },
        {
            id: 2,
            title: 'Drinking',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Sleeping',
            status: 'new'
        }
    ];
    const location = useLocation();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilterdStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(params);
        return params.status || 'all';
    });


    const handleTodoClick = (todo, idx) => {
        //clone current array to the new one
        const newTodoList = [...todoList];
        console.log(todo, idx);
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',

        };
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilterdStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterdStatus('completed')
    }
        
    const handleShowNewClick = () => {
        setFilterdStatus('new');
    }
    const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    // console.log(renderTodoList);

    const handleTodoFormSubmit = (value) => {
        console.log('Form Submit: ', value);
    }
    return (
        <div>
            <h3>Todo Form</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;