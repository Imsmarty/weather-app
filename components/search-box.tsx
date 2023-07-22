'use client';

import searchIcon from '../app/images/icons8-search-50.png';
import Image from 'next/image';
import styles from './search-box.module.css';

function onClick() {
    alert('Search button clicked');
}

export default function SearchBox() {
    return (
        <div className={styles.container}>
            <input type="text" />
            <Image src={searchIcon} alt="" onClick={onClick} className={styles.searchIcon}/>
        </div>
    );
}