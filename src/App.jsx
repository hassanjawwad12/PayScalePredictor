

import Landing from "./Components/Landing";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Predict from "./Prediction/Predict";
import Output from "./Prediction/Output";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={Landing()} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="predict" element={<Predict />} />
            <Route path="output" element={<Output />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
 

