import { useCallback, useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (...args) => {
      setLoading(true);

      try {
        const response = await apiFunc(...args);

        if (!response?.ok) {
          setError(true);
          return response;
        }

        setError(false);
        setData(response.data);
        return response;
      } catch (error) {
        setError(true);
        return { ok: false, problem: "NETWORK_ERROR", error };
      } finally {
        setLoading(false);
      }
    },
    [apiFunc],
  );

  return { data, loading, error, request };
};

export default useApi;
