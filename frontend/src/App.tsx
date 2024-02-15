import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/layout/Header";
import { Routers } from "./routers/Routers";

function App() {
  return (
    <>
      <Header></Header>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
