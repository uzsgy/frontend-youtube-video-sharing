import classNames from 'classnames';
import React from 'react';

type Props = {
  currenPage: number;
  totalPages: number;
  step: number;
  className?: string;
  handleOnChangePage: (page: number | string | null) => void;
};

const Pagination: React.FC<Props> = ({
  currenPage,
  totalPages,
  step = 2,
  className,
  handleOnChangePage,
}) => {
  const showingNumbers = step * 2 + 1;
  let startNumber = 2;
  let startArrayNumber = step;

  let needStartDots = false;
  let needEndDots = false;

  if (currenPage > step) {
    startArrayNumber = currenPage - step;
    needStartDots = currenPage > step + startNumber ? true : false;
  }

  if (totalPages > showingNumbers) {
    {
      needEndDots = totalPages > currenPage + step + 1 ? true : false;

      if (totalPages < currenPage + step + 1) {
        startArrayNumber = totalPages - showingNumbers;
      }
    }
  }

  let contentNumber;

  return (
    <ul
      className={classNames(
        'flex items-center justify-center gap-2',
        className
      )}
    >
      {currenPage > 1 ? (
        <li
          className="border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-lg pb-1 items-center text-gray-900 hover:scale-105"
          onClick={() => handleOnChangePage(currenPage - 1)}
        >
          &#x2039;
        </li>
      ) : (
        <li className="border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-default rounded text-lg pb-1 items-center text-gray-900 opacity-50 disabled">
          &#x2039;
        </li>
      )}
      {totalPages > showingNumbers + startNumber ? (
        <React.Fragment>
          <li
            onClick={(e) => handleOnChangePage(e.currentTarget.textContent)}
            className={classNames(
              `border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-sm items-center text-gray-900 hover:scale-105`,
              { 'bg-gray-800/20': currenPage === 1 }
            )}
          >
            1
          </li>

          {needStartDots && <span>...</span>}
          {Array.from(Array(showingNumbers).keys()).map((page) => {
            const contentNumber = needStartDots
              ? startArrayNumber
              : startNumber;
            startNumber++;
            startArrayNumber++;
            return (
              <li
                key={page++}
                className={classNames(
                  `border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-sm items-center text-gray-900 hover:scale-105`,
                  { 'bg-gray-800/20': currenPage === contentNumber }
                )}
                onClick={(e) => handleOnChangePage(e.currentTarget.textContent)}
              >
                {contentNumber}
              </li>
            );
          })}
          {needEndDots && <span>...</span>}
          <li
            className={classNames(
              `border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-sm items-center text-gray-900 hover:scale-105`,
              { 'bg-gray-800/20': currenPage === totalPages }
            )}
            onClick={(e) =>
              handleOnChangePage(
                parseInt(e.currentTarget.textContent || totalPages.toString())
              )
            }
          >
            {totalPages}
          </li>
        </React.Fragment>
      ) : (
        ((startArrayNumber = 1),
        Array.from(Array(totalPages).keys()).map((page) => {
          return (
            <li
              key={page++}
              className={classNames(
                `border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-sm items-center text-gray-900 hover:scale-105`,
                { 'bg-gray-800/20': currenPage === startArrayNumber }
              )}
              onClick={(e) => handleOnChangePage(e.currentTarget.textContent)}
            >
              {startArrayNumber++}
            </li>
          );
        }))
      )}
      {currenPage < totalPages ? (
        <li
          className="border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-pointer rounded text-sm items-center text-gray-900 hover:scale-105 next arrow-icon"
          onClick={() => handleOnChangePage(currenPage + 1)}
        >
          &#8250;
        </li>
      ) : (
        <li className="border border-gray-300 bg-gray-900/5 w-7 h-7 flex justify-center cursor-default rounded text-sm items-center text-gray-900 opacity-50 next arrow-icon disabled">
          &#8250;
        </li>
      )}
    </ul>
  );
};

export default Pagination;
