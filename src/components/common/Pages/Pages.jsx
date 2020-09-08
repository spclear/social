import React from 'react';
import styles from './pages.module.css';

const Pages = (props) => {
  let items = [];
  let firstPage;

  const pagesToShow = props.pagesToShow || 10;
  const pagesTotal = Math.ceil(props.usersTotal / props.shownUsersNumber);
  
  if (props.currentPage < pagesToShow) {
    firstPage = 1;
  } else if (props.currentPage > pagesTotal - pagesToShow) {
    firstPage = pagesTotal - pagesToShow;
  } else {
    firstPage = props.currentPage - (pagesToShow / 2);
  }
  
  const isPicked = number => {
    return (props.currentPage === number) ? ' ' + styles.picked : '';
  }

  for (let i = firstPage; i <= firstPage + pagesToShow; i++) {
    items.push(i);
  }
  
  return (
    <div className={styles.pagesBar}>
      <button
        className={styles.button}
        onClick={() => props.switchPage(1)}
        disabled={firstPage === 1}
      >
        First
      </button>

      <div className={styles.pages}>
        {items.map(item => {
          return (
            <span
              key={item}
              className={`${styles.pageNumber}${isPicked(item)}`}
              onClick={() => props.switchPage(item)}
            > 
              {item}
            </span>
          )
        })}
      </div>
      
      <button
        className={styles.button}
        onClick={() => props.switchPage(pagesTotal)}
        disabled={props.currentPage > pagesTotal - pagesToShow}
      >
        Last
      </button>
    </div>
  )
}

export default Pages;