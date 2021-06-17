import React from "react";
import bg from './bg.png';
import { StateContext } from '../context/GlobalState'
import { useContext } from "react";
const Sale = () => {
    const {product}=useContext(StateContext)
    console.log(product);
    
	return (
		<div
			style={{
				height: "520px",
				display: "flex",
				justifyContent: "center",
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
                    paddingTop:"150px"
				}}
			>
				<div className="h1Tag flexItems">
					<h2>Fenrir The Monster Wolf of Norse Mythology Necklace</h2>
					<p
						className="text-white"
						style={{
							fontSize: "18px",
							lineHeight: "20px",
							fontWeight: "700",
							margin: "25px 0",
						}}
					>
						$19.95 <s style={{ color: "#ccc" }}>$29.95</s>
					</p>
					<button className="btnShop mt-3">Start Shopping</button>
				</div>
			</div>
            
		</div>
	);
};

export default Sale;
