import React from 'react'
import { Link } from 'react-router-dom'

export const MoreButton = ({author,genre}) => {
    return (
            <Link  to="/list">
                <div className="row-container btn-container">
                    <div className="btn-group">
                        <h3>{author}</h3>
                        <p>{genre}</p>
                    </div>
            
                    <span className="left-align">
                        <svg className="svg-light"   xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" ><path d="M0 0h24v24H0z" fill="none"/><path d="M22 12l-4-4v3H3v2h15v3z"/></svg>  
                    </span>
                    
                    

                    
                </div>
            </Link>
    )
}
