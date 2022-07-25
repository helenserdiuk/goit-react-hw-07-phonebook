import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62d89dd8908831393592b703.mockapi.io/contacts/contacts',
});

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};
