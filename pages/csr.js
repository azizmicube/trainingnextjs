import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import blogStyles from '@/styles/Blog.module.css'


const Csr = () => {
    const [meals, setMeals] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
        setLoading(true)
        fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setMeals(data.meals)
                setLoading(false)
            })
    }, [])

    if (isLoading) return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Loading....</h2>
            </main>
        </div>
    )
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>CSR</h2>

        <ul>
            {
                meals && meals.map(meal => (
                   <li key={meal.idMeal}>
                    <Link href={`/ssr-meals/${meal.idMeal}`}><a>{meal.strMeal}</a></Link>
                   </li> 
                ))
            }
        </ul>
      </main>
    </div>
  )
}

export default Csr