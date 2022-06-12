import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useQuery = ({ url }) => {
  const [statusCode, setStatusCode] = useState();
  const [apiData, setApiData] = useState();
  
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(({ code, status, ...apiData }) => {
        setStatusCode(code)
        setApiData(apiData);
      });
  }, [url]);
  
  return { data: apiData, statusCode }
}