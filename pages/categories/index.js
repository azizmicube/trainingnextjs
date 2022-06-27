import React from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from './schema'
import styles from '@/styles/Home.module.css'


const Index = () => {
    const {loading, error, data} = useQuery(GET_CATEGORIES)


    if (error) return `Error! ${error.message}`;
    if (loading) return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Loading....</h2>
            </main>
        </div>
    )

    console.log(data);

  return (
    <div>
        <h2>Category List</h2>
        <ul>
            {
                data.categories.items.map (category => (
                    <li key={category.id}>
                        <Link href={`/categories/${category.id}`}><a>{category.name}</a></Link>
                    </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default Index