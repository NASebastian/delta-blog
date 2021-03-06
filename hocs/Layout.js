import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({children, title = '' }) => {
  const [current_location, setCurrent_location] = useState('');

  useEffect(() => {
    const lower_cap = title.toLowerCase();
    setCurrent_location(lower_cap);
  }, [title]);

  return (
    <div>
      <Head>
        <title>Delta Blog { !title ? '' : `| ${title}`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Titillium+Web:wght@400;600;800&display=swap" rel="stylesheet"></link>
        <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
      </Head>

      <Navbar current_location={current_location}/>

      <div className="wrapper mb-10">
        { children }
      </div>

      <Footer />
    </div>
  );
}
 
export default Layout;

