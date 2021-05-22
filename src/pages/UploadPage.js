import React from "react";
import DetailForm from '../components/upload/DetailForm';


const UploadPage = () => {

    const getUserData = async (inputs) => {
        console.log(inputs)
        // alert("done")
    };

    return <DetailForm getUserData={getUserData}/>;
};

export default UploadPage;