import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});
const Home = () => {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log("useEffect called");
    sendDetailsToServer();
  }, [page]);
  
  const sendDetailsToServer = () => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((responseData) => {
      console.log(responseData.data);
      setResults(responseData.data.data);
      setLoading(false);
    });
  };
 
  console.log(results);
  console.log(page);
  return (
    <div>
        
      {!loading && results.length !==0 ? results.map(o=>(
            <ul>
            <li>{o.first_name}</li>
            </ul>
        )):<h1>No Data Available</h1>}
        <button onClick={()=>{setPage(page-1)}}>Privious page</button>
        <button onClick={()=>{setPage(page+1)}}>Next page</button>
    </div>
  );
};

export default Home;
