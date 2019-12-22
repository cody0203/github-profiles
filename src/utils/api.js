import axios from 'axios';

export const getUser = async searchKey => {
  const url = `https://api.github.com/users/${searchKey}`;

  const response = await axios.get(url);
  const data = await response.data;
  return data;
};

export const getRepos = async userName => {
  const url = `https://api.github.com/users/${userName}/repos`;

  const response = await axios.get(url);
  const data = response.data;

  return data;
};
