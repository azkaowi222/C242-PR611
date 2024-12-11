const backendUrl = "http://localhost:8080";
const fetchApi = async (path, config) => {
  const response = await fetch(`${backendUrl}/${path}`, config);
  const data = await response.json();
  return data;
};

export default fetchApi;
