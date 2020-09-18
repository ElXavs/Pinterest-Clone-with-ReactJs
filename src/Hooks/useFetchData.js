import { useState, useEffect } from 'react';

const useFetchData = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.fetch(api)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, []);
  return { data, loading };
};

export default useFetchData;
