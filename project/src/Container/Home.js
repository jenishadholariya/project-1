import React from 'react';

function Home({data}) {
    return (
        data.map((d,i)=>{
            return(
                <div>
                    <h2>{d.id}</h2>
                    <h4>{d.name}</h4>
                </div>
            )
        })
    )
}

export default Home;