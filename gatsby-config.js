module.exports = {
	siteMetadata: {
		title: `Ajit's Dev Blog`,
		description: `Ajit Singh Kamal is a UI/UX engineer based in India. With more than 4 years of experience in working with frontend technologies, he excels in UI development and creating aesthetically pleasing and intutive user experiences for the web.`,
		author: `@AjitsinghKamal`,
		greeting: "Hello World",
		social: {
			repo: {
				url: `https://github.com/AjitsinghKamal/portfolio-v2`,
				label: `Repo`,
			},
			linkedin: {
				url: `https://linkedin.com/in/ajitsinghkamal/`,
				label: `LinkedIn`,
			},
			mail: {
				url: `mailto:ajitskamal@gmail.com`,
				label: `Email`,
			},
			git: {
				url: `github.com/AjitsinghKamal/`,
				label: `Github`,
			},
			codepen: {
				url: `https://codepen.io/AjitsinghKamal/`,
				label: `Codepen`,
			},
			stackoverflow: {
				url: `https://stackoverflow.com/users/6517778/`,
				label: `Stackoverflow`,
			},
		},
		work: [
			{
				from: `2019`,
				name: `UpGrad`,
			},
			{
				from: `gif`,
				name: `threejs-codepen`,
			},
			{
				from: `2018`,
				to: `2019`,
				name: `Cyware`,
			},
			{
				from: `ww-codepen`,
				name: `ww-codepen`,
			},
			{
				from: `2018`,
				to: `2018`,
				name: `Sudeep Gandhi's Portfolio`,
			},
			{
				from: `2017`,
				to: `2018`,
				name: `HDFC Red`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-emotion`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-remark-images`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve(
						`./src/layouts/site-layout/index.tsx`
					),
				},
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 750,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-alias-imports`,
			options: {
				aliases: {
					"@components": `src/components`,
					"@layouts": `src/layouts/`,
					"@pages": `src/pages/`,
					"@utils": `src/utils/`,
					"@templates": `src/templates/`,
					"@assets": `src/assets/`,
					"@src": `src/`,
					"@styles": `src/styles`,
				},
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
	],
};
