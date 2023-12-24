import React from 'react';
import { changeDate } from '../utils/function';
import { useGlobalContext } from '../context/useGlobalContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const CardList = ({ data }) => {
  const item = useGlobalContext();

  return (
    <ul className="pages grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {data?.map((item) => {
        return (
          <Link key={item?.id} className="max-w-sm  rounded-lg shadow-custom">
            <div>
              <LazyLoadImage src={item.medium_image[0]?.url} placeholdersrc={item.small_image[0]?.url} className="rounded-t-lg w-full h-40" alt={item?.slug} />
            </div>
            <div className="p-5">
              <p className=" font-normal text-gray-400 ">{changeDate(item?.published_at)}</p>
              <p className="mb-3 font-medium text-lg max-w-2xl  text-gray-700 line-clamp-3 tracking-normal">{item?.title}</p>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default CardList;
