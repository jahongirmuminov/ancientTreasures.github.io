import React, { useContext } from "react";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ModalBodyList from "./ModalBodyList";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StateContext } from "../context/GlobalState";
const ModalComp = ({ closeToggle }) => {

    
	return (
		<div style={{ background: "white" }}>
			<div
				style={{
					backgroundColor: "rgba(32, 32, 32, 0.05)",
					display: "flex",
					backgroundAttachment: "fixed",
					justifyContent: "space-between",
					padding: "24px 0 12px 20px",
					alignItems: "center",
				}}
			>
				<p
					style={{
						color: "rgba(180, 180, 180, 1)",
						fontSize: "13px",
						textTransform: "uppercase",
						lineHeight: "16.32px",
					}}
				>
					cart (8 items)
				</p>
				<CloseRoundedIcon
					onClick={closeToggle}
					htmlColor={"#202020"}
					style={{
						color: "#202020",
						fontWeight: "lighter",
						fontSize: "45px",
						fontWeight: "100",
						cursor: "pointer",
					}}
				/>
			</div>

			<div style={{ maxHeight: "775px", overflowY: "scroll" }}>
				<ModalBodyList />
			</div>

			{/* <ModalBodyList/>
          <ModalBodyList/> */}

			<Container
				style={{
					background: "rgba(32, 32, 32, 0.05)",
					height: "115px",
					backgroundAttachment: "fixed",
					width: "360px",
					left: "0px",
					top: "485px",
					position: "sticky",
					bottom: "0",
                    
				}}
			>
				<div
					style={{
						//styleName: 16px-base/bold;
						bordeRadius: "0px",
						fontFamily: "Mulish",
						fontSize: "24px",
						fontStyle: "normal",
						fontWeight: "700",
						lineHeight: "20px",
						letterSpacing: "0em",
						textAlign: "left",
						display: "flex",
						padding: "20px 0",
						justifyContent: "space-between",
					}}
				>
					<p>Subtitle</p>
					<p>$14454</p>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
                        marginBottom:"50px"
					}}
				>
					<Button
						style={{
							height: "48px",
							width: "119px",
							left: "0px",
							top: "0px",
							borderRadius: "4px",
							padding: "14px 17px,13px,18px",
						}}
						variant="light"
					>
						View cart
					</Button>
					<Button variant="danger">Proceed to checkout</Button>
				</div>
			</Container>
		</div>
	);
};

export default ModalComp;
