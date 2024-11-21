const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
})

const nextConfig = {
	basePath: '/tutorial-nextra-docs',
	output: 'export',
	images: {
	  unoptimized: true
	}
}

module.exports = withNextra(nextConfig)
