import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac lofi chill chill',
            thumbnailUrl: 'https://img.meta.com.vn/Data/image/2021/01/08/nhac-lofi-la-gi-1.jpg'
        },
        {
            id: 2,
            name: 'Nhac edm giat dum dum',
            thumbnailUrl: 'https://i1.sndcdn.com/artworks-000374911500-6cres8-t500x500.jpg'
        },
        {
            id: 3,
            name: 'Nhac vang cho no hoai niem',
            thumbnailUrl: 'https://gdb.voanews.com/90C23BE0-E0BF-4A9A-87F1-16DF5472EFED_cx9_cy14_cw70_w408_r1_s.png'
        }
    ]
    return (
        <div>
            <h2>Do you like?</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;