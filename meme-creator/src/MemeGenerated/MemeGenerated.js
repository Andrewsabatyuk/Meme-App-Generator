import React, { useState } from 'react';
import styles from './styles.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

export const MemeGenerated = () =>{

    const [copied, setCopied] = useState(false);

    const clipboard = useClipboard();
    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');


    const copyLink = () =>{
        clipboard.copy(url);
        setCopied(true);
    };
    return (
        <div className={styles.container}>
            <button onClick={() => history.push('/')} className={styles.home}>
                Make more Memes
            </button> 

            <button onClick={copyLink} className={styles.copy}>
                {copied ? 'Link copied' : 'Copy Link'}
            </button>
            {url && <img alt='meme' src={url} /> }
        </div>
    );
};