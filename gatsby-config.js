module.exports = {
	siteMetadata: {
		title: `Ajit's Dev Blog`,
		description: `Ajit Singh Kamal is a UI/UX engineer based in India. With more than 4 years of experience in working with frontend technologies, he excels in UI development and creating aesthetically pleasing and intutive user experiences for the web.`,
		author: `@AjitsinghKamal`,
	},
	siteData: {
		githubLink: `https://github.com/AjitsinghKamal/portfolio-v2`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
					"@layout": `src/layout/`,
					"@pages": `src/pages/`,
				},
			},
		},
		`gatsby-plugin-scss-typescript`,
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
