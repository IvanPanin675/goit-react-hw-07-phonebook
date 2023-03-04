import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://640214ff3779a8626264c5df.mockapi.io/contacts',
});

export const getAllContacts = async () => {
  const { data } = await instance.get('/');
  console.log("ALL -- ",data);
  return data;
};

export const addContact = async id => {
    const { data } = await instance.post('/', id);
      console.log("POST -- ",data);
  return data;
};

export const deleteContact = async id => {
    const { data } = await instance.delete(`/${id}`);
      console.log("DELETE -- ",data);
  return data;
};
