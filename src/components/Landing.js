import React,{useEffect} from 'react'
import { Quote } from './Quote'
import { MoreButton } from './MoreButton'
import { useQuotes,useUpdateQuotes } from './QuotesContext'
import useFetchQuotes from './useFetchQuotes'

export const Landing = () => {


   
    const updateQuotes = useUpdateQuotes();
    //TO-BE-FIXED :warning: Cannot update a component (`QuotesProvider`) while rendering a different component (`Landing`).
    //To-fix this: updating the Quotes has to be on component mount or in a useEffect with empty dependecy array( the useFetchQuotes won't work in useEffect since custom hooks can't be called in callback functions)
    updateQuotes(useFetchQuotes('/random')); 
   
    
  const quotes = useQuotes();
    return (
      
        <div className="col-container">
            {quotes.data&&
                <div>
                    <Quote text={quotes.data[0].quoteText}/>
                    <MoreButton author={quotes.data[0].quoteAuthor} genre={quotes.data[0].quoteGenre}/> 
                </div>
                
            }

            {quotes.error &&
                <h1>Error on fetch... </h1>
            }

            {quotes.isLoading &&
                <h1>Loading data... </h1>
            }
               
           
        </div>
    )
}
