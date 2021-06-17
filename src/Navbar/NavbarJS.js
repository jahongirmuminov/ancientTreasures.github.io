import React from "react";
import {
	Nav,
	Form,
	FormControl,
	NavDropdown,
	Container,
	Row,
	Col,
	NavLink,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ModalComp from "../components/ModalComp";
import { IconButton } from "@material-ui/core";

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles({
	list: {
		width: 360,
	},
	fullList: {
		width: "auto",
	},
});
const NavbarJS = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === "top" || anchor === "bottom",
			})}
			role="option"
			// onClick={toggleDrawer(anchor, false)}
			style={{ overflow: "hidden" }}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<ModalComp closeToggle={toggleDrawer(anchor, false)} />
		</div>
	);
	return (
		<>
			<Navbar expand="lg" variant="light">
				<div className="container">
					<Navbar.Brand href="#">
						<img
							src="/images/image.png"
							style={{ marginTop: "25px" }}
							alt="none"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="navbarRight"
							// navbarScroll
						>
							<ul className="navbarItem" type="none">
								<li className="listItem">
									<Link className="navLinkItem" to="/vikings">
										Vikings
									</Link>
								</li>
								<li className="listItem">
									<Link className="navLinkItem" to="/egypt">
										Ancient Egypt
									</Link>
								</li>
								<li className="listItem">
									<Link className="navLinkItem " to="/celtics">
										Celtics
									</Link>
								</li>
								<li className="listItem">
									<Link
										className="navLinkItem active"
										style={{ textTransform: "uppercase" }}
										to="/"
									>
										Sale
									</Link>
								</li>
								<li className="listItem">
									<Link className="navLinkItem " to="/celtics">
										<SearchOutlinedIcon
											style={{ height: "24px" }}
											fontSize={"default"}
										/>
									</Link>
									<Link className="navLinkItem" to="/">
										{["right"].map((anchor) => (
											<React.Fragment key={anchor}>
												<Button onClick={toggleDrawer(anchor, true)}>
												  <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                              <ShoppingCartIcon />
                            </StyledBadge>
                            </IconButton>
												</Button>
												<Drawer
													anchor={anchor}
													open={state[anchor]}
													onClose={toggleDrawer(anchor, false)}
												>
													{list(anchor)}
												</Drawer>
											</React.Fragment>
										))}
									</Link>
								</li>
							</ul>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</>
	);
};

export default NavbarJS;
