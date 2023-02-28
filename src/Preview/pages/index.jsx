import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';


function Content(props) {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        e.target.value = null;
    }
    return (
        <div>
            <input
            type = "file"
            onChange={handlePreviewAvatar}>

            </input>
            {avatar && (
                <img src={avatar.preview} alt = "" width="80%"/>
            )}
        </div>
    );
}

export default Content;