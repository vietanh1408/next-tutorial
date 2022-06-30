import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true; // removes the `xs` breakpoint
		sm: true;
		md: true;
		lg: true;
		xl: true;
		mobile: true; // adds the `mobile` breakpoint
		tablet: true;
		laptop: true;
		desktop: true;
	}
}

// Create a theme instance.
const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1280,
		},
		keys: ['xs', 'sm', 'md', 'lg', 'xl'],
	},

	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},

	components: {
		MuiContainer: {
			styleOverrides: {
				// maxWidthSm: {
				// 	maxWidth: '680px',
				// 	'@media (min-width: 600px)': { maxWidth: '680px' },
				// },
				// maxWidthMd: {
				// 	maxWidth: '860px',
				// 	'@media (min-width: 900px)': { maxWidth: '860px' },
				// },
				// maxWidthLg: {
				// 	maxWidth: '1024px',
				// 	'@media (min-width: 1200px)': { maxWidth: '1024px' },
				// },
			},
			defaultProps: {
				maxWidth: 'md',
			},
			variants: [],
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#556cd6',
					},
				},
			},
		},
	},

	typography: {
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

export default theme;
