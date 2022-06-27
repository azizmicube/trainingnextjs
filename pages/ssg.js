import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import blogStyles from '@/styles/Blog.module.css'


const Ssg = (props) => {
    console.log(props);
    const {meals} = props.data;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>SSG</h2>

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

export async function getStaticProps(context) {
    const res = await fetch(`https://themealdb.com/api/json/v1/1/random.php`)
    const data = await res.json();

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}

export default Ssg