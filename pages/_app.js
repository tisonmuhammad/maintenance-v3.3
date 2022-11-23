import '../styles/globals.css'
import '../styles/fmsystem.css'
import '../styles/maintenance.css'
// import '../components/layout.module.css';
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
