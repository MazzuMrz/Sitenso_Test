import React from 'react'
import avalible from "../assets/images/logo/avalible.png"
import avalible2 from "../assets/images/logo/avalible2.png"


const Avalible = () => {
    return (
        <div className="d-flex jsutify-content-center text-center d-block d-sm-none">
            <div className="banner bg-warning ">
                <div>
                <h1>Seguis en la web?</h1>
                <h2>Buscanos en tu Store favorita!</h2>
                <img src={avalible} alt="Search in PLAYSTORE" srcset="" className="img" />
                <img src={avalible2} alt="Search in APPLESTORE" srcset="" className="img2" />
             </div>
             

            </div>
        </div>
    )
}

export default Avalible
