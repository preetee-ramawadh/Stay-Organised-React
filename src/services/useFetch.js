import { useState, useEffect } from "react";

//const baseUrl = process.env.REACT_APP_API_BASE_URL;
const baseUrl = "http://localhost:8083/";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]); //url is a dependency array here, as useEffect is outside

  return { data, error, loading };
}
