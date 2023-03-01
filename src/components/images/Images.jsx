import React, { useContext } from 'react';
import { ImageContext } from '../../App';
import Image from './Image';
import Skeleton from './Skeleton';
import "./style.scss";

const Images = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
        <h1 className="searchTitle">Results for {searchImage || "Cars"}</h1> 
        <div className="imageContent">
            {isLoading ? <Skeleton item={10} /> : response.map((data, key) => <Image key={key} data={data} />)}
        </div>
    </>
  )
}

export default Images
