import React, { useRef, useEffect, useState } from 'react';
import { usePalette } from 'react-palette';

import useNearScreen from '../../Hooks/useNearScreen';

import Image from './styles';

const ImageCard = ({ image }) => {
  const [show, element] = useNearScreen();
  const marginBottom = 20;
  const IMAGE_URL = `https://picsum.photos/id/${image.id}/250/${image.height + marginBottom}?`;

  const { data, loading, error } = usePalette(IMAGE_URL);

  return (
    <Image ref={element} style={{ gridRowEnd: `span ${Math.ceil(image.height / 10)}`, background: data.vibrant }}>
      {/* {console.log(element)} */}
      {show && <img src={IMAGE_URL} alt={image.author} />}
    </Image>
  );
};

export default ImageCard;
