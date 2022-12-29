import { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async url2 => {
      const res = await fetch(`http://localhost:8000/${url2}`);
      const dataRes = await res.json();
      if (dataRes) {
        setData2(dataRes);
      } else {
        alert('somethign went wrong');
      }
    };
    fetchData(url);
  }, [url]);

  return { data };
};

export default useFetch;
