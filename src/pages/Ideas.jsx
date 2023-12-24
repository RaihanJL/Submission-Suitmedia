import React, { useEffect, useState } from 'react';
import HeaderIdeas from '../components/HeaderIdeas';
import Filter from '../components/Filter';
import CardList from '../components/CardList';
import axios from 'axios';
import { customFetchData } from '../utils/axios';
import { useGlobalContext } from '../context/useGlobalContext';
import Pagination from '../components/Pagination';

const Ideas = () => {
  const { data } = useGlobalContext();

  return (
    <section>
      <HeaderIdeas />

      <Filter />

      <CardList data={data} />

      <Pagination />
    </section>
  );
};

export default Ideas;
