import React,{useState} from 'react'
import RefreshIcon from '../assets/refresh_icon.svg';
import { useUpdateQuotes } from './QuotesContext';
import axios from 'axios';
export const Nav = () => {
    const [data,setData] = useState(null)
    const [error,setError] = useState(false);
    const [isLoading,setIsLoading] = useState(true);

    const updateQuotes = useUpdateQuotes();
   
    const handleClick = async ()=>{
       const res = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes/random");
       if (res.status === 200)
            setData(res.data.data);
       else    
            setError(true);
        
        setIsLoading(false);
        const newState = {data,error,isLoading};
        updateQuotes(newState);
    }   

    
    return (
        <div className="row-container fixed-top">
            <h1>Random Quote Generator</h1>
            
            <span className="nav-group left-align">
                <a href="/" onClick={handleClick} >
                    <p>random</p>
                    <img src={RefreshIcon} alt="new random quote"  />                   
                </a>
            </span>
        </div>
    )
}
