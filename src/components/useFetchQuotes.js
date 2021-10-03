
import { useEffect,useState } from "react"
import axios from "axios";


const useFetchQuotes =  (option)=>{
    const [data,setData] = useState(null)
   const [error,setError] = useState(null);
   const [isLoading,setIsLoading] = useState(true);

   
    useEffect( ()=>{
        
           const fetchData= async () =>{
                const url = "https://quote-garden.herokuapp.com/api/v3/quotes"+option;

                console.log(url);
                const res = await axios.get(url);
  
                if (res.status===200) 
                    setData(res.data.data);
                else{
                    
                    setError(true)
                }
                 
                setIsLoading(false)
            }
            fetchData();
        
    },[option]);

    

    return {data,error,isLoading};
}

export default useFetchQuotes;