

export const getBasicAuthHeader = () => {
    const username = process.env.REACT_APP_API_USERNAME;
  const password = process.env.REACT_APP_API_PASSWORD;
  const token = `${username}:${password}`;
  const encodedToken = btoa(token);
  return `Basic ${encodedToken}`;
  };