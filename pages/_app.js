import "@/styles/globals.css";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core'
import Header from '../components/Header'
import Footer from "@/components/Footer";
import Promises from "@/components/Promises";
import { useEffect, useState } from "react";

const theme = {
  colors: {

  },
  fontFamily: 'Arial, sans-serif',
};


export default function App({ Component, pageProps }) {


  let [mounted,setMounted]=useState(false)


  useEffect(()=>
  {
    setMounted(true)
  },[])

  if(!mounted)
  {
    return null
  }

  return ( 
     <>
        <MantineProvider>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </MantineProvider>
     </>
  );
}
