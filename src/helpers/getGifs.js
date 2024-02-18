export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0S4zE5HTMl2ktDlsuJsq5G4sxM3YYbHi&q=${category}&limit=20`;
    const response = await fetch(url);

  
    const { data } = await response.json();
    

    const gifs = data.map((img) => ({
      id : img.id,
      title : img.title,
      url : img.images.downsized_medium.url,
    }));
    return gifs;
}