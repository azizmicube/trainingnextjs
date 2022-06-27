import React from 'react'
import styles from '@/styles/Home.module.css'


const SsrMeals = (props) => {

  
  const {meals} = props.data;
  console.log(meals[0])

  return (
    <div>
        <div className={styles.container}>
            <main className={styles.main}>
              <div className="alert alert-info" role="alert">
                  Page data load with <strong>SSR Dynamic Route</strong>
              </div>
              <h5>{meals[0].strArea}</h5>
              <h5>{meals[0].strCategory}</h5>
              <h5>{meals[0].strInstructions}</h5>
            </main>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
    const idMeal = context.params.id

    const res = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const data = await res.json();

    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }

export default SsrMeals