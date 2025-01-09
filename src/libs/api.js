import axios from 'axios';

const baseUrl = import.meta.env.VITE_SERVER_URL;

export async function apiGet(endpoint, params = {}, additionalHeaders = {}) {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;
  }
}

export async function apiPost(endpoint, body, isFormData = false, additionalHeaders = {}) {
  try {
    const headers = {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      ...additionalHeaders,
    };

    const response = await axios.post(`${baseUrl}${endpoint}`, isFormData ? body : JSON.stringify(body), { headers });
    return response.data;
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
}

export async function apiPut(endpoint, body, additionalHeaders = {}) {
  try {
    const response = await axios.put(`${baseUrl}${endpoint}`, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      },
    });
    return response.data;
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error;
  }
}

export async function apiDelete(endpoint, body, additionalHeaders = {}) {
  try {
    const response = await axios.delete(`${baseUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      },
      data: JSON.stringify(body),
    });
    return { success: true };
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error;
  }
}

export async function apiPatch(endpoint, body, isFormData = false, additionalHeaders = {}) {
  try {
    const headers = {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      ...additionalHeaders,
    };

    const response = await axios.patch(`${baseUrl}${endpoint}`, isFormData ? body : JSON.stringify(body), { headers });
    return response.data;
  } catch (error) {
    console.error('API PATCH Error:', error);
    throw error;
  }
}