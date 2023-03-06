import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/provider";
// import { CacheProvider } from "@chakra-ui/next-js";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/common/Layout";
import theme from "@/assets/theme";
import { Toast } from "@chakra-ui/toast";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // refetchOnWindowFocus: false,
            // retry: 0,
            // staleTime: 1000 * 60 * 60 * 24, // 24 hours
            // refetchOnReconnect: false,
        }
    }
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        // <CacheProvider>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QueryClientProvider>
        </ChakraProvider>
        // </CacheProvider>
    )
}
