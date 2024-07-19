import Cart from "./components/cart/cart"
import Step2 from "./components/cart/step2"
import Catalog from "./components/catalog"
import Client from "./components/clients"
import Header from "./components/home/header"
import Login from "./components/login/login"
import Order from "./components/order"
import Register from "./components/register/register"
import Search from "./components/search/search"
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom"
function App() {
  

  return (
   <div className="app">
    <Router>
      <Switch>
          <Route exact path="/"><Header/></Route>
          <Route path="/search"> <Search/></Route>
          <Route path="/product"><Catalog/></Route>
          <Route path="/client"><Client/></Route>
          <Route path="/login"><Login/></Route>
          <Route path="/register"><Register/></Route>
          <Route path="/order"><Order/></Route>  
          <Route path="/2"><Step2/></Route>
          <Route path="/cart"><Cart/></Route>      
         
     </Switch>
    </Router>
   </div>
  )
}

export default App
