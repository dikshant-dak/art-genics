import React, { useContext, useState } from 'react';
import { ImageContext } from '../../../App';
import "./style.scss";

const HeroBanner = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=ivaIgztV8crikZK3w1mvxQgxMJMsF9ZxJOfrbPlG_Hk`)
        setSearchValue("");
        setSearchImage(searchValue);
    }

    const handleEnterSearch = e => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=ivaIgztV8crikZK3w1mvxQgxMJMsF9ZxJOfrbPlG_Hk`)
            setSearchValue("");
            setSearchImage(searchValue);
        }
    }

  return (
    <div className="herobanner">
        <div className="heroBannerContent">
            <span className="heading">Welcome.</span>
            <span className="subHeading">Millions of images to discover. Explore now.</span>

            <div className="searchInput">
                <input 
                    type="text"
                    placeholder="Search for any image of choice..."
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterSearch}
                />
                <button 
                    onClick={handleButtonSearch}
                >
                    Search
                </button>
            </div> 
        </div>
    </div>
  )
}

export default HeroBanner
