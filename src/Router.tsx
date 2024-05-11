import { BrowserRouter, Route, Switch } from "react-router-dom";
import Apts from "./routes/Apts";
//import Coin from "./routes/Coin";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
            
               <Route path="/">
                   <Apts/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;