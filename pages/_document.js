import { Html, Head, Main, NextScript } from "next/document";
import Header from '../components/Header'
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="antialiased" style={{backgroundColor:"black",height:"auto",width:"100vw"}}>
        <Header/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
