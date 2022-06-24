import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

const Custom404 = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push('/')
    },5000);

  return (
    <main className={styles.main}>
        <h3>
            What do you looking for? Page not found
        </h3>
    </main>
  )
}

export default Custom404