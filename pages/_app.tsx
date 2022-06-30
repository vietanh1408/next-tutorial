import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/index';
import createEmotionCache from '@/utils/create-emotion-cache';
import theme from '@/utils/theme';
import { CacheProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import axiosClient from '@/axios/axios-client';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SWRConfig
					value={{
						fetcher: (url) => axiosClient.get(url),
						shouldRetryOnError: false,
					}}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
