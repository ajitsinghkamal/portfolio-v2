import React, { FunctionComponent } from "react";
import Layout from "@layout/layout.base";
import SEO from "@components/seo";
import Work from "@components/work/work.base";
import IconWave from "../assets/wave.svg";
import IconWork from "../assets/work.svg";
import UpgradImg from "@components/image/upgrad.image";
import CywareImg from "@components/image/cyware.image";
import RedImg from "@components/image/red.image";

const IndexPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Home" />
		<section className="spacer">
			<h3>
				<IconWave className="icon" />
				Hello Everyone!!
			</h3>
			<p>
				I am Ajit Singh Kamal, a UI developer based in India. <br />I started
				working in the field of front-end development in the year 2017. Since
				then, I've worked as a freelancer, honed my skills in a fast-paced young
				startup, and improved my understanding of usability and scale, working
				with some established organizations.
			</p>
		</section>
		<section className="spacer">
			<h3>
				<IconWork className="icon" />
				My Experiences
			</h3>
			<Work company="UpGrad" from="2019" to="Current" image={<UpgradImg />}>
				Currently working with India's largest higher education startup and
				building an online classroom platform, ensuring education for the
				quarantined world.
			</Work>
			<Work company="Cyware Labs" from="2018" to="2019" image={<CywareImg />}>
				Build, optimise and refactor. Worked on multiple products while working
				with this young startup operating in the field of cyber threat
				intelligence.
			</Work>
			<Work company="HDFC Red" from="2017" to="2018" image={<RedImg />}>
				My gateway to UI development. A startup working towards increasing the
				reach of real-estate marketplace to the public.
			</Work>
		</section>
	</Layout>
);

export default IndexPage;
