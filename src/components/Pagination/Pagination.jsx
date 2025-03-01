import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
function Pagination({
  total,
  onPageChange,
  nextPage,
  prevPage,
  filterParams,
  mutate
}) {
  const pageToShow = 5;
  console.log('pagination', filterParams?.page)
  const [currentPage, setCurrentPage] = useState(filterParams?.page);
  //   const pages = Array.from({ length: total }).map((_, index) => index + 1);
  const pages = [];
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === total;
  // const startPage = Math.max(1, currentPage - Math.floor(pageToShow / 2));

  for (let i = 1; i <= total; i++) {
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
    console.log("handle page", pageNum);
    setCurrentPage(pageNum);
    onPageChange(pageNum);
  }

  console.log("current page", currentPage);

  function handlePrevClick() {
    if (prevPage !== undefined) {
      setCurrentPage(prevPage);
      onPageChange(prevPage);
    }
    return;
  }

  function handleNextClick() {
    if (nextPage !== undefined) {
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
        <li
          className={`page-item opacity-60 transition-all duration-200 hover:opacity-100 ${
            isFirstPage ? "hidden" : null
          }`}
        >
          <a className="page-link" href="#" onClick={passToStart}>
            <MdKeyboardDoubleArrowLeft />
          </a>
        </li>
        <li
          className={`page-item opacity-60 transition-all duration-200 hover:opacity-100 ${
            isFirstPage ? "hidden" : null
          }`}
        >
          <a className="page-link" href="#" onClick={handlePrevClick}>
            <IoIosArrowBack />
          </a>
        </li>
        {pages?.map((value, index) => {
          {
            console.log("valuesss", value);
          }
          return (
            <li
              key={index}
              className={`page-item transition-all duration-200 hover:bg-[#eaeaea] hover:text-wBlue hover:border-transparent ${
                value === "..."
                  ? " tracking-[0.28rem] border-none pointer-events-none"
                  : null
              } cursor-pointer border px-3 py-1 rounded-lg ${
                filterParams?.page === Number(value) ? "border-green-400" : 'border-wSecBlue'
              }`}
              onClick={() => handlePage(value)}
            >
              <a className="page-link" href={`#${value}`}>
                {value}
              </a>
            </li>
          );
        })}
        <li
          className={`page-item opacity-60 transition-all duration-200 hover:opacity-100 ${
            isLastPage ? "hidden" : null
          }`}
          onClick={handleNextClick}
        >
          <a className="page-link" href="#">
            <IoIosArrowForward />
          </a>
        </li>
        <li
          className={`page-item opacity-60 transition-all duration-200 hover:opacity-100 ${
            isLastPage ? "hidden" : null
          }`}
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
