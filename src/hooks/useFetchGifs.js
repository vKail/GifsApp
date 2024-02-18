import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

 
 export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(true);
  };

  useEffect(() => {
    getImages();
  },[])

  return {
    images,
    loading
   }
 }
 
 