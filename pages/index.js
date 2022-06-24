import React, {useState} from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic';

const HelloComponents = dynamic(() => import("../components/hello"), {
  loading : () => <b>Loading...</b>
});

// const DynamicSSRTrue = dynamic(() => import("../components/DynamicSsr"), {
//   ssr : true
// });

// const DynamicSSRFalse = dynamic(() => import("../components/DynamicSsr"), {
//   ssr : false
// });

const Home = () => {
  const [showDynammic, setShowDynammic] = useState(false);

  const handleClick = () => {
    setShowDynammic(!showDynammic)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Icube Training <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {/* <Link href={{pathname:"/blog"}}><a>Next Link</a></Link> */}
        
        {/* <br></br>
          <DynamicSSRTrue/>
        <br></br>
          <DynamicSSRFalse/>
        <br></br> */}

        <button className="btn btn-primary" onClick={handleClick}>Show Hide Dynamic Import</button>
        <br></br>
        <br></br>
        <br></br>

        {
           showDynammic && (<HelloComponents/>)
        }
        
      </main>
    </div>
  )
}

export default Home
