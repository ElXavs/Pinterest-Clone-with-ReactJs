import React, { useState, useEffect } from 'react';

import ImageCard from '../../components/ImageCard';

import useFetchData from '../../Hooks/useFetchData';

import ImageGrid from './styles';

const Home = () => {
  const [page, setPage] = useState(1);
  const api = `https://picsum.photos/v2/list?page=${page}&limit=30`;
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const dataWithHeight = [];

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  function fetchMoreListItems() {
    setPage(page + 1);
    // setNewData(useFetchData(api));
    // console.log(data, newData);
    // setData((prevState) => ([...prevState, ...prevState]));
    setIsFetching(false);
  }
  console.log(page);

  useEffect(() => {
    console.log(api);
    window.fetch(api)
      .then((res) => res.json())
      .then((response) => {
        setData((prevState) => ([...prevState, ...response]));
      });
  }, [page]);

  useEffect(() => {
    data === false && FetchData(api);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const images = data.length !== 0 && data.map((image) => {
    const randomHeight = Math.floor(Math.random() * (450 - 120) + 120);
    if (!image.randomHeight) {
      image.randomHeight = randomHeight;
    }
    console.log(image);
    // dataWithHeight.push({ ...data, height: randomHeight });

    return <ImageCard key={image.id} image={{ ...image }} />;
  });

  return (
    <ImageGrid>
      {images}
    </ImageGrid>
  );
};

export default Home;
