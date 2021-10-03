import React,{useState,useContext} from "react";



const QuotesContext = React.createContext();
const UpdateQuotesContext = React.createContext();

const QuotesProvider = ({children})=>{
    const [data,setData] = useState(null)
   const [error,setError] = useState(null);
   const [isLoading,setIsLoading] = useState(true);


   const updateQuotes = (newState)=>{
       //console.log("Trying to update state",newState);
       setData(newState.data);
       setError(newState.error);
       setIsLoading(newState.isLoading);
   }

 
   const quotes = {data,error,isLoading};
    return(
        <QuotesContext.Provider value={quotes}>
            <UpdateQuotesContext.Provider value={updateQuotes}>
                {children}
            </UpdateQuotesContext.Provider>
        </QuotesContext.Provider>
    )
}

// Custom hooks
const useQuotes = ()=>{
    return useContext(QuotesContext);
}

const useUpdateQuotes = ()=>{

    return useContext(UpdateQuotesContext)

    
}
 

export { QuotesProvider, useQuotes,useUpdateQuotes};


