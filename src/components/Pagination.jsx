import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/useGlobalContext';

const Pagination = () => {
  const { totalPages, reqData, currentPages, setCurrentPages } = useGlobalContext();

  const [totalNumber, setTotalNumber] = useState(0);

  const [page, setPage] = useState({ start: 0, end: 0 });

  useEffect(() => {
    setTotalNumber(Math.ceil(+totalPages / +reqData.page));
  }, [reqData, totalPages]);

  useEffect(() => {
    setPage({
      end: Math.min(totalNumber - 1, page.start + 4),
      start: Math.max(0, currentPages - 2),
    });
  }, [currentPages, totalNumber]);
  return (
    <div className="pages flex">
      <nav className=" mx-auto">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <button className={`${currentPages === 1 && 'text-gray-400'} flex items-center justify-center px-4 h-10 leading-tight`} onClick={() => setCurrentPages(1)} disabled={currentPages === 1}>
              <span className="sr-only">First</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <g transform="rotate(180 12 12)">
                  <path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" />
                  <path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" />
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button className={`${currentPages === 1 && 'text-gray-400'} flex items-center justify-center px-4 h-10 leading-tight`} disabled={currentPages === 1} onClick={() => setCurrentPages((current) => current - 1)}>
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          <div className="flex gap-2">
            {Array.from({ length: Math.min(5, totalNumber) }).map((_, index) => {
              const pageNumber = page.start + index + 1;
              return (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPages(Math.min(totalNumber, pageNumber))}
                    className={`${currentPages === pageNumber ? 'bg-orangePrimary text-white ' : 'text-black hover:bg-orangePrimary/80'} flex items-center justify-center px-1 w-9 h-10 leading-tight rounded-xl`}
                  >
                    {pageNumber}
                  </button>
                </li>
              );
            })}
          </div>

          {/* Next Button */}

          <li>
            <button className={`${currentPages === totalNumber && 'text-gray-400'} flex items-center justify-center px-4 h-10 leading-tight`} disabled={currentPages === totalNumber} onClick={() => setCurrentPages((current) => current + 1)}>
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
              </svg>
            </button>
          </li>

          {/* Last Button */}
          <li>
            <button
              type="button"
              onClick={() => setCurrentPages(totalNumber)}
              className={`${currentPages === totalNumber && 'text-gray-400'} flex items-center justify-center px-4 h-10 leading-tight`}
              disabled={currentPages === totalNumber}
            >
              <span className="sr-only">Last</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M15.5 5H11l5 7l-5 7h4.5l5-7z" />
                <path fill="currentColor" d="M8.5 5H4l5 7l-5 7h4.5l5-7z" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
