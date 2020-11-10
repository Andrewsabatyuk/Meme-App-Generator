import React from 'react';
import styles from './styles.module.css';
import { useHistory, useLocation } from 'react-router-dom';

export const MemeGenerated = () =>{

    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');

    return (
        <div className={styles.container}>
            <button onClick={() => history.push('/')} className={styles.home}>
                Make more Memes
            </button> 

            {url && <img src={url} /> }
        </div>
    );
};