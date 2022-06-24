import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'

const Blogdetail = () => {
    const router = useRouter();
    const {query} = router;
    // const photoUrl = query.photoUrl;
    // console.log(query.photoUrl)

  return (
    <div className={styles.main}>
        <Head>
            <title>Blog Detail</title>
        </Head>

        <div className="cardwrapper">
            { query.photoUrl && (
                <Image 
                    className="imgRounded"
                    width={300}
                    height={300}
                    src={query.photoUrl}
                    alt={query.name}
                    placeholder="blur"
                    blurDataURL={query.photoUrl}
                />
            )}
        <div className="cardList">
            <label>Name : </label> <span>{query.name}</span>
        </div>
        <div className="cardList">
            <label>Gender : </label> <span>{query.gender}</span>
        </div>
        <div className="cardList">
            <label>Profession : </label> <span>{query.profession}</span>
        </div>
        <div className="cardList">
            <label>Position : </label> <span>{query.position}</span>
        </div>
        </div>
        
        <style jsx>{`   
            .cardwrapper {
                text-align: center;
                border: solid blue 1px;
                background-color: #2196f3;
            }
            .cardList {
                padding:15px;
                border: solid blue 1px;
                color : aliceblue;
            }
        `}</style>

    </div>
  )
}

export default Blogdetail