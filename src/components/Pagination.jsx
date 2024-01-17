import React, { useState } from "react";

function Pagination({ total, perPage, onPageChange, nextPage, prevPage }) {
  const pageToShow = 5;
  const [currentPage, setCurrentPage] = useState(1);
  //   const pages = Array.from({ length: total }).map((_, index) => index + 1);
  const pages = [];
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === total;
  const startPage = Math.max(1, currentPage - Math.floor(pageToShow / 2));

  for (let i = startPage; i < total && i < startPage + pageToShow; i++) {
    const isCurrent = i === currentPage;
    const isWithinRange =
      i <= pageToShow ||
      i > total - pageToShow ||
      (i >= currentPage - Math.floor(pageToShow / 2) &&
        i < currentPage + Math.floor(pageToShow / 2));

    if (i > startPage) {
      pages.push(i);
      console.log("range", pages);
    } else if (typeof pages[pages.length - 1] !== "string") {
      pages.push("...");
    }
  }

  function handlePage(pageNum) {
    setCurrentPage(pageNum);
    onPageChange(pageNum);
  }

  function handlePrevClick() {
    if (prevPage) {
      setCurrentPage(prevPage);
      onPageChange(prevPage);
    }
    return;
  }

  function handleNextClick() {
    if (nextPage) {
      setCurrentPage(nextPage);
      onPageChange(nextPage);
    }
    return;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination flex gap-2">
        <li className={`page-item ${isFirstPage ? "disabled" : null}`}>
          <a className="page-link" href="#" onClick={handlePrevClick}>
            Previous
          </a>
        </li>
        {pages.map((value, index) => {
          return (
            <li
              key={index}
              className={`page-item ${currentPage === value ? "active" : null}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => {
                  handlePage(value);
                }}
              >
                {value}
              </a>
            </li>
          );
        })}
        <li className={`page-item`}>
          <a className="page-link" href="#" onClick={handleNextClick}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
