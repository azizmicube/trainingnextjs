import Head from "next/head"
import Footer from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = ({children, title='Aziz Blog'}) => {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
            {children}
        <Footer/>
    </div>
  )
}
