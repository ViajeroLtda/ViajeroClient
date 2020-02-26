// deploy configs
import { useState, useEffect, useContext } from 'react';

export const BASE_URL = process.env.NODE_ENV === "production" ? "insert-prod-url-here" : "http://localhost:3000/";

export const useClient = () => {
  const [idToken, setIdtoken] = useState("");
  
  useEffect(() => {
    
    setIdtoken('token-coming-from-login');
  }, [])

}