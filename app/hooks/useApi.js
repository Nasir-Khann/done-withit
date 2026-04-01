import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setError(false);
    setData(response.data);
  };

  return { data, loading, error, request };
};

export default useApi;