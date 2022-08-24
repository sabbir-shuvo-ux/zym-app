export const exerciseOption = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
};

export const youtubeVideoOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2645f01264mshbd62fc0fc2db37bp1bce64jsn14466cdbd5a7',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const featchData = async (url,option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}