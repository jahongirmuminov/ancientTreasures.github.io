import React from 'react'

const Sale = () => {
    return (
        <div  style={{
            background: ` linear-gradient(to left, rgba(1,0,1,0.4), rgba(0,15,0,0.2589) 100%,
            rgba(255,255,255,0) 70%, rgba(255,255,255,0.7)),linear-gradient(90deg, rgba(0,0,0,1) 26%,  rgba(0,0,0,0.7) 26%, rgba(30,35,46,1) 26%, rgba(75,80,94,1) 26%, rgba(155,159,168,1) 26%, rgba(47,48,51,1) 26%, rgba(155,159,168,0.03405112044817926) 26%, rgba(0,0,0,0.2) 73%, rgba(190,193,201,1) 73%, rgba(114,118,128,1) 73%, rgba(2,2,3,1) 73%, rgba(19,24,36,1) 100%), url("../images/Background.png") center  no-repeat`,
            height:"520px",
        }}>
            <div className="container">
                <div className="h1Tag flexItems">
                <h2>
                    Fenrir The Monster Wolf of Norse Mythology Necklace
                </h2>
                <p className="text-white" style={{fontSize:"18px",lineHeight:"20px",fontWeight:"700",margin:"25px 0"}}>$19.95 <s
                  style={{color:"#ccc"}}
                 >$29.95</s></p>
                  <button className="btnShop mt-3"
                  >Start Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Sale

