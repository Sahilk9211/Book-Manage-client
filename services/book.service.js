import api from "./api";

export const createBook = async (payload) => {
  const { data } = await api.post("/books", payload);

  return data.data;
};

export const getBooks = async (params = {}) => {
  const { data } = await api.get("/books", {
    params,
  });

  return data.data;
};

export const updateBook = async (id, payload) => {
  const { data } = await api.patch(`/books/${id}`, payload);

  return data.data;
};

export const deleteBook = async (id) => {
  const { data } = await api.delete(`/books/${id}`);

  return data.data;
};

export const updateBookStatus = async (id, status) => {
  const { data } = await api.patch(`/books/${id}/status`, {
    status,
  });

  return data.data;
};
