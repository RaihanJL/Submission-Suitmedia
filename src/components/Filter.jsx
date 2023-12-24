import React from 'react';
import { useGlobalContext } from '../context/useGlobalContext';

const Filter = () => {
  const { handleChangeReqData, totalPages, showing } = useGlobalContext();

  return (
    <div className="pages flex justify-between items-center flex-col gap-5 md:flex-row">
      <div>
        Showing {showing.from}-{showing.to} of {totalPages}
      </div>
      <form className="flex gap-5 items-center">
        {/* Per page */}
        <div>
          <label htmlFor="perPage">Show per page: </label>
          <select name="page" id="perPage" className="px-3 w-32 py-2 rounded-full border-gray-300 border round" onChange={handleChangeReqData}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        {/* Sort by */}
        <div>
          <label htmlFor="sortBy">Sort by: </label>
          <select name="sort" id="sortBy" className="px-3 w-32 py-2 rounded-full border-gray-300 border" onChange={handleChangeReqData}>
            <option value="-published_at">Newest</option>
            <option value="published_at">Latest</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
