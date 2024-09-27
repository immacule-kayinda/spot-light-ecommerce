import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-8/12 m-auto">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
