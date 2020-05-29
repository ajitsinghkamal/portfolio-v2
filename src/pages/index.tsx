import React, { FunctionComponent } from "react";
import Layout from "@layout/base-layout";
import SEO from "@components/seo";

const IndexPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Home" />
		<p>hello everyone!!</p>
	</Layout>
);

export default IndexPage;
