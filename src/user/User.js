import React from 'react';

const User = (prop)=>{
    console.log(prop.data.name)
    return(
        <h1>{prop.data.name}</h1>
    )
}

export default User;