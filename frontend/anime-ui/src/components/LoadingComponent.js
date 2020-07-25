import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';

const LoadingIndicator = props =>{
    const { promiseInProgress } = usePromiseTracker();
    return(
        promiseInProgress &&
        <div
           style={{
             width: "100%",
             height: "100",
             display: "flex",
             justifyContent: "center",
             alignItems: "center"
           }}
         >
           <Loader type="ThreeDots" color="rgba(255,115,115,1)" height="100" width="100" />
         </div>
    );
}

export default LoadingIndicator;