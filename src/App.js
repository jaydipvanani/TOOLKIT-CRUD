import { Route, Routes } from "react-router-dom";
import Add from "./componant/Add";
import Filter from "./componant/Filter";
import UserNavbar from "./navbar/UserNavbar";
import Show from "./componant/Show";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchdata } from "./toolkit/slices/UserSlice";


function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch])

  return (
    <>
      <UserNavbar />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/show" element={<Show />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </>
  );
}

export default App;
