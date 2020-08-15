import React from 'react';
import styles from './pages.module.css';

const Pages = (props) => {
  const items = [];
  let firstPage;

  const isPicked = number => {
    return (props.currentPage == number) ? ' ' + styles.picked : '';
  }

  if (props.currentPage <= 9) {
    firstPage = 1;
  } else {
    firstPage = props.currentPage - 5;
  }

  for (let i = firstPage; i < firstPage + 11; i++){
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