import React from 'react';

import ImageCard from '../../components/ImageCard';

import useFetchData from '../../Hooks/useFetchData';

import ImageGrid from './styles';

const Home = () => {
  const { data, loading } = useFetchData('https://picsum.photos/v2/list?page=1');
  console.log(loading, data);
  const images = data.map((image) => {
    const randomHeight = Math.floor(Math.random() * (450 - 120) + 120);
    return <ImageCard key={image.id} image={{ ...image, height: randomHeight }} />;
  });

  return (
    <ImageGrid>
      {images}
    </ImageGrid>
  );
};

export default Home;
