/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ByCategoryPage from "./Pages/ByCategoryPage";
import DetailsPage from "./Pages/DetailsPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<HomePage />}></Route>
                <Route path="/bycategory/:categoryID" element = {<ByCategoryPage />}></Route>
                <Route path="/details/:postID" element = {<DetailsPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;