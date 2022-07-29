import {useState, useEffect} from "react";

const UseFetch = () => {

  const [data, setData] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    
    if(url === undefined) {
      return null
    }
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    
  }, [url]);

  return{ data,  setUrl }
};

export default UseFetch