import React from 'react';
import "./skeleton.scss";

const Skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="skeletonMain">
        <div className="skeletonSubmain"></div>
    </div>
  ))
}

export default Skeleton;
