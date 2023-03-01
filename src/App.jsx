import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Images from './components/images/Images';
import useAxios from './hooks/useAxios';


// Create Context
export const ImageContext = createContext();

function App() {
    const [searchImage, setSearchImage] = useState("");

    const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cars&client_id=ivaIgztV8crikZK3w1mvxQgxMJMsF9ZxJOfrbPlG_Hk`);

    // console.log(response);

    const value = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }


    return (
        <BrowserRouter>
            <ImageContext.Provider value={value}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Images />
            </ImageContext.Provider>
        </BrowserRouter>
    )
}

export default App;
