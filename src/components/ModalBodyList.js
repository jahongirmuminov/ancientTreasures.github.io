import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Image, Row } from "react-bootstrap";
import { StateContext } from "../context/GlobalState";
const ModalBodyList = ({item}) => {
	
	const {increaseCount,cartItems,products}=useContext(StateContext)
	// console.log(products)
	const {productId} = useParams()
		return (
		    
			<div>
				{products.map((product)=>{
					console.log(product.quantity,"njnlihkbjjhjhkhkmhk");
					return(
						<div>
							<Container style={{ marginTop: "18px" }}>
					<Row>
						<Col md={3}>
							{" "}
							<Image
								style={{ width: "64px", height: "64px", borderRadius: "160px" }}
								src={product.url}
								alt=""
							/>
						</Col>
						<Col md={9}>
							<p
								style={{
									fontSize: "16px",
									color: "#202020",
									fontWeight: "700",
									lineHeight: "20px",
								}}
							>
								 {product.description}
							</p>
							<span
								style={{
									color: "red",
									fontSize: "16px",
									lineHeight: "20px",
								}}
							>
								{" "}
								${product.price}{" "}
								<s style={{ color: "#ccc", marginLeft: "5px" }}>$29.95</s>
							</span>

							<div style={{ margin: "16px 0" }}>
								<button className="btnPlusAndMunis">-</button>
								<button className="changingBtn">1</button>
								<button className="btnPlusAndMunis" onClick={()=>increaseCount(product.id)}>+</button>
							</div>
						</Col>
					</Row>
				</Container>
				<hr style={{ border: "1px solid rgba(32, 32, 32, 0.05)" }} />
						</div>
					)
				})}
				
			</div>
		);
	 
};

export default ModalBodyList;
