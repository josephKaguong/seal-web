import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Step2sm from "./step2sm";
import Step3sm from "./step3sm";

const Toggle = () => {
    return ( 
        <div className="toggle">
            <Router>
                <Switch>
                    <Route to="/step2"><Step2sm/></Route>
                    <Route to="/step3"><Step3sm/></Route>
                </Switch>
            </Router>
        </div>
     );
}
 
export default Toggle;