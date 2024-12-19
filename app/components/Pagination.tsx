import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
  page: number;
  changePage: (a: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, changePage }) => (
  <div className={styles.main}>
    <button className={styles.btn} onClick={() => changePage(Math.max(page - 1, 1))} disabled={page === 1}>
      Previous
    </button>
    <span className={styles.span} >Page {page}</span>
    <button className={styles.btn} onClick={() => changePage(page + 1)}>Next</button>
  </div>
);


export default Pagination