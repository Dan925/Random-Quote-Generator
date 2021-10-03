import React from 'react'
import { Quote } from './Quote'
import useFetchQuotes from './useFetchQuotes'
import { useQuotes } from './QuotesContext'
export const QuoteList = () => {

    const currentQuotes = useQuotes();
    const author= currentQuotes.data[0].quoteAuthor;
    
    const {data,error,isLoading} = useFetchQuotes(`?author=${author}`)
    
    return (
        <div>
            {data&&
            
                <div className="author-box"><h3>By {data[0].quoteAuthor}:</h3></div>
            }

            <div className="row-wrap-container">
                {data &&
                    data.map((quote,index)=>{
                        return (
                            <Quote key={index} text={quote.quoteText}/>
                        )
                    })
                }
                {error &&
                    <h1>Error on fetch... </h1>
                }

                {isLoading &&
                    <h1>Loading data... </h1>
                }
            
            </div>
        </div>
    )
}
