import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

function TotalRecallAPi() {

  const useQuery = ({ url }) => {
    const [statusCode, setStatusCode] = useState();
    const [responseData, setResponseData] = useState();
    
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
  





}

