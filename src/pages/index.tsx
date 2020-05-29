import React, { FunctionComponent } from "react";
import Layout from "@layout/base-layout";
import SEO from "@components/seo";

const IndexPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Hi people</h1>
	</Layout>
);

export default IndexPage;
