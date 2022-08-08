export const getGifs = async(category) => {

    let url = `https://api.giphy.com/v1/gifs/search?api_key=n1tu1gX18sLp04jHsehB2cI5XLBKfYMW&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

    return gifs
};