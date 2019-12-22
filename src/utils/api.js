import axios from 'axios';

export const getUser = async searchKey => {
  const url = `https://api.github.com/users/${searchKey}`;

  const response = await axios.get(url);

  return response;
};

export const getRepos = async userName => {
  const url = `https://api.github.com/users/${userName}/repos`;

  const response = await axios.get(url);

  return response;
};
