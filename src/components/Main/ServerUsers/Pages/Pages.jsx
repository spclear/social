import React from 'react';
import styles from './pages.module.css';

const Pages = (props) => {
  const items = [];
  const pagesAmount = Math.ceil(props.usersTotal / props.usersShownNumber);
  const pagesToShow = (pagesAmount < 10) ? pagesAmount : 10;
  const firstPage = (props.currentPage < 10) ? 1 : props.currentPage - 5;
  
  const isPicked = number => {
    return (props.currentPage == number) ? ' ' + styles.picked : '';
  }

  for (let i = firstPage; i < firstPage + pagesToShow; i++) {
    items.push(i);
  }
  
  return (
    <div className={styles.pagesBar}>
      {items.map(item => {
        return (
          <span
            className={`${styles.pageNumber}${isPicked(item)}`}
            onClick={() => props.switchPage(item)}
          >
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default Pages;