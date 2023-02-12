import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Home, Login, SignUp, TestReducer } from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='app' element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path='test_reducer' element={<TestReducer />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
