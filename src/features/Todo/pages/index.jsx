import React from 'react';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import NotFound from '../../../components/NotFound/index'
// TodoFeature.propTypes = {

// };

function TodoFeature(props) {

    return (
        <div> 
            <ListPage/>
            <DetailPage/>
            <NotFound/>
        </div>
    
    );
}

export default TodoFeature;


