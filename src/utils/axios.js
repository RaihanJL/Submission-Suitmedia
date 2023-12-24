import axios from 'axios';

export const customFetch = axios.create({
  baseURL: `https://api.airtable.com/v0/appg1uV7o7JKfjODV/Magang`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_KEY}`,
  },
});

export const customFetchData = axios.create({
  baseURL: `https://suitmedia-backend.suitdev.com/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
