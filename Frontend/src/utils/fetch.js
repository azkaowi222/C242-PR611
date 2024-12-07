const fetchApi = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();
  return data;
};

export default fetchApi;
