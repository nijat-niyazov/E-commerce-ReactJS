import React, { useState, useEffect } from 'react';

const useFetch = url => {
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async url2 => {
      const res = await fetch(`http://localhost:8000/${url2}`);
      const data = await res.json();
      if (data) {
        setData2(data);
      } else {
        alert('somethign went wrong');
      }
    };
    fetchData(url);
  }, [url]);

  return { data2 };
};

export default useFetch;
