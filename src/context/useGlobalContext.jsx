import { createContext, useContext, useEffect, useState } from 'react';
import { customFetch, customFetchData } from '../utils/axios';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [imagesBg, setImagesBg] = useState(null);
  const [currentPages, setCurrentPages] = useState(1);
  const [showing, setShowing] = useState({ from: 1, to: 10 });
  const [totalPages, setTotalPages] = useState(0);
  const [reqData, setReqData] = useState({
    page: 10,
    sort: '-published_at',
  });

  const fetchImages = async () => {
    try {
      const {
        data: { records },
      } = await customFetch();
      const images = records[0].fields.Images[0].url;

      setImagesBg(images);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeReqData = (e) => {
    const { name, value } = e.target;

    setReqData({ ...reqData, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await customFetchData.get(`/ideas?page[number]=${currentPages}&page[size]=${reqData.page}&append[]=small_image&append[]=medium_image&sort=${reqData.sort}`);

      setShowing({ ...showing, from: response.data.meta.from, to: response.data.meta.to });

      setTotalPages(response.data.meta.total);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchImages();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [reqData, currentPages]);

  return <GlobalContext.Provider value={{ data, reqData, currentPages, totalPages, showing, imagesBg, handleChangeReqData, setCurrentPages }}>{children}</GlobalContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
