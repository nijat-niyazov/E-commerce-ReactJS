import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async url2 => {
      const res = await fetch(url2);
      const dataRes = await res.json();
      dataRes !== null ? setData(dataRes) : alert('somethign went wrong');
    };
    fetchData(url);
  }, [url]);

  return { data };
};

export default useFetch;
