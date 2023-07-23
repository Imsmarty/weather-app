'use client';

import searchIcon from '../app/images/icons8-search-50.png';
import Image from 'next/image';
import styles from './search-box.module.css';
import { useState } from 'react';


export default function SearchBox( { onSearchClick }: { onSearchClick : Function } ) {
    const [inputValue, setInputValue ] = useState('San Diego');

    function onClick() {
        alert('Search button clicked');
        onSearchClick(inputValue);
    }

    return (
        <div className={styles.searchBoxContainer}>
            <input type="text" className={styles.searchInput} value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <Image src={searchIcon} width={30} height={30} alt="" onClick={onClick} className={styles.searchIcon}/>
        </div>
    );
}