import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Nav } from "./components/Nav";
import { Landing } from "./components/Landing";
import { QuoteList } from "./components/QuoteList";


import {QuotesProvider } from "./components/QuotesContext";



function App() {

  
  
  return (

    <BrowserRouter>
      <div className="container">
       
      <QuotesProvider>

          <Nav/>
          <Switch>
            <Route path="/list" component={QuoteList}/>
            <Route path="/" component={Landing} />
          </Switch>

      </QuotesProvider>

     

        

      </div>
    </BrowserRouter>
    
  );
}

export default App;
