import axios from "axios";
import React, { useEffect } from "react";
const Competency = () => {
    useEffect(() => {
        const apiToken = sessionStorage.getItem("api_token");
    
        axios
          .get(`http://3.109.144.250/phase3/api/v1/competency/list`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${apiToken}`,
            },
          })
          .then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        });
      }, []);
    return ( 
    <>Competency
    </> );
}
 
export default Competency;

