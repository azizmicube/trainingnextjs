import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_CATEGORY_BY_ID } from './schema'
import styles from '@/styles/Home.module.css'


const ProductListByCategory = () => {
    const router = useRouter();
    const id = router.query.id;

    const {loading, error, data} = useQuery(GET_CATEGORY_BY_ID, {
        variables : {
            id
        }
    })


    if (error) return `Error! ${error.message}`;
    if (loading) return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Loading....</h2>
            </main>
        </div>
    )

    console.log(data);
    // return null;

  return (
    <div>
        <Link href={`/categories`}><a className="btn btn-primary">Back to Categories</a></Link>
        <br></br>
        <h2>Product List of {data.category.name}</h2>
        <ul>
            {
                data.category.products.items.map (product => (
                    <li key={product.sku}>
                        <Link href={`/categories/product/${product.sku}`}><a>{product.name}</a></Link>
                    </li> 
                ))
            }
        </ul>
    </div>
  )
}

export default ProductListByCategory