import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
function Pagination({ total, onPageChange, nextPage, prevPage }) {
  const pageToShow = 5;
  const [currentPage, setCurrentPage] = useState(1);
  //   const pages = Array.from({ length: total }).map((_, index) => index + 1);
  const pages = [];
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === total;
  const startPage = Math.max(1, currentPage - Math.floor(pageToShow / 2));

  for (let i = startPage; i <= total; i++) {
    const isCurrent = i === currentPage;
    const isWithinRange =
      i <= pageToShow ||
      i > total - pageToShow ||
      (i >= currentPage - Math.floor(pageToShow / 2) &&
        i < currentPage + Math.floor(pageToShow / 2));

    if (isWithinRange) {
      pages.push(i);
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

  const passToStart = () => {
    setCurrentPage(1);
    onPageChange(1);
  };

  const passToEnd = () => {
    setCurrentPage(total);
    onPageChange(total);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination flex gap-2 justify-center items-center">
        <li className={`page-item ${isFirstPage ? "hidden" : null}`}>
          <a className="page-link" href="#" onClick={passToStart}>
            <MdKeyboardDoubleArrowLeft />
          </a>
        </li>
        <li className={`page-item ${isFirstPage ? "hidden" : null}`}>
          <a className="page-link" href="#" onClick={handlePrevClick}>
            <IoIosArrowBack />
          </a>
        </li>
        {pages.map((value, index) => {
          return (
            <li
              key={index}
              className={`page-item ${
                value === "..." ? "border-none" : null
              } cursor-pointer border border-wSecBlue px-3 py-1 rounded-lg ${
                currentPage === value ? "border-green-400" : null
              }`}
              onClick={() => {
                handlePage(value);
              }}
            >
              <a className="page-link" href="#">
                {value}
              </a>
            </li>
          );
        })}
        <li
          className={`page-item ${isLastPage ? "hidden" : null}`}
          onClick={handleNextClick}
        >
          <a className="page-link" href="#">
            <IoIosArrowForward />
          </a>
        </li>
        <li
          className={`page-item ${isLastPage ? "hidden" : null}`}
          onClick={passToEnd}
        >
          <a className="page-link" href="#">
            <MdKeyboardDoubleArrowRight />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
