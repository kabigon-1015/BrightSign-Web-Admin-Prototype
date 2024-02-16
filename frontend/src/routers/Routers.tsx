import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { MediaRegister } from "./MediaRegister";

export const Routers = () => {
  return (
    <div className="mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media-register" element={<MediaRegister />}></Route>
      </Routes>
    </div>
  );
};
