import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'ReactNative'
    },
    {
        id: 3,
        name: 'JavaScript'
    },
]
function ChatApp(props) {
    const [lessonId, setLessonId] = useState(1);
    useEffect(() => {
        const handleComments = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComments)
        return () => {
         window.removeEventListener(`lesson-${lessonId}`, handleComments)

        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key = {lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                            'red' :
                            '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    );
 }

export default ChatApp;