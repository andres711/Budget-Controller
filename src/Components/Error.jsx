import React from "react";

function Error({error}) {
    return ( 
        <div className="error alert alert-danger">
            <p>{error}</p>
        </div>
     );
}

export default Error;