import '@/styles/globals.css';
import { NavBar,Footer, Title } from '../../components/iComponentsIndex';


//internal import

 const MyApp =({ Component, pageProps }) => ( 
    <div>
     
    <NavBar/>
    <Component {...pageProps} />
    <Footer/></div>
    );
    

export default MyApp;