import React, { FunctionComponent } from "react";
import Header from "@components/header";
import "./default.css";

const Layout: FunctionComponent = ({ children }) => {
	return (
		<>
			<Header />
			<div>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
