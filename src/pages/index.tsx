import React, { FunctionComponent } from "react";
import Layout from "@layout/layout.base";
import SEO from "@components/seo";
import Img from "@components/image";

const IndexPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Home" />
		<section className="spacer">
			<h3>👋 Hello Everyone!!</h3>
			<p>
				I am Ajit Singh Kamal, a UI developer based in India. <br />I started
				working in the field of front-end development in the year 2017. Since
				then, I've worked as a freelancer, honed my skills in a fast-paced young
				startup, and improved my understanding of usability and scale, working
				with some established organizations.
			</p>
		</section>
		<section className="spacer">
			<h3>My Experiences</h3>
			<div>
				<p>Upgrad</p>
				<p>
					<Img />
				</p>
			</div>
			<div>
				<p>Cyware Labs</p>
				<p>
					<Img />
				</p>
			</div>
			<div>
				<p>HDFC Red</p>
				<p>
					<Img />
				</p>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
