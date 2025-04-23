import axios from 'axios';

const API_URL = process.env.NODE_ENV === 'production' 
    ? '/api/books'  // When deployed, use relative path
    : 'http://localhost:5000/api/books';  // For local development

export const getAllBooks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const addBook = async (bookData) => {
    try {
        const response = await axios.post(API_URL, bookData);
        return response.data;
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

export const updateBook = async (id, bookData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
}; 