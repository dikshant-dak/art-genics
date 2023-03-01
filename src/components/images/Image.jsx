import React, { useState } from 'react';
import { format } from 'date-fns';
import "./image.scss";

const Image = ({ data }) => {

    // const [instaValue, setInstaValue] = useState("");
    // const { fetchData, setSearchImage } = useContext(ImageContext);

    // const handleInstaProfile = () => {
    //     fetchData(`search/photos?page=1&query=${searchValue}&client_id=ivaIgztV8crikZK3w1mvxQgxMJMsF9ZxJOfrbPlG_Hk`)
    //     setInstaValue("");
    //     setSearchImage(searchValue);
    // }


    return (
        <div className="article">
            <div className="articleInfo">
                <a href={data.urls.regular} target="_blank" rel="noreferrer" className="imageData">
                    <img src={data?.urls?.small} alt={data?.alt_description} />
                </a>

                <div className="extra">
                    <div className="profile">
                        <img
                            src={data?.user?.profile_image?.medium}
                            alt={data?.user?.name}
                            className="profileImg"
                        />

                        <ul className="listHeader">
                            <li className="username">{data?.user?.name}</li>
                            <li className="date">{format(new Date(data?.created_at), "dd, MMMM yyyy")}</li>
                        </ul>

                        <div className="pLink">
                            <ul className="listHeader2">
                            <a href={`https://instagram.com/${data?.urls?.instagram_username}`} target="_blank"        
                                rel="noreferrer" >
                                <li className="id">Instagram</li>
                            </a>
                                
                                <li className="likes">{data?.likes} likes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image
