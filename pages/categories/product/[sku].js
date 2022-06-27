import React, {useState} from 'react'
import ReactHtmlParser from 'react-html-parser'
import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import { GET_PRODUCT_BY_SKU, SUBSCRIBE } from '../schema'
import styles from '@/styles/Home.module.css'


const DetailProduct = () => {
    const [email, setEmail] = useState('');
    const [mutationResponse, setMutationResponse] = useState(null);

    const router = useRouter();
    const sku = router.query.sku;

    const {loading, error, data} = useQuery(GET_PRODUCT_BY_SKU, {
        variables : {
            sku
        }
    })

    const [subscribe] = useMutation(SUBSCRIBE, {
        onCompleted: (data) => {
            console.log('Subcribe Response ', data) // the response
            setMutationResponse(data)
        },
    });

    if (error) return `Error! ${error.message}`;
    if (loading) return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h5>Loading....</h5>
            </main>
        </div>
    )

    console.log(data);
    // return null;
    
    function handleSubscribe(event) {
        event.preventDefault();
        // the mutate function also doesn't return a promise
        subscribe({ variables: { email } });
      }

  return (
    <div>
        <br></br>
            <h5><strong>Product Name : </strong> {data.products.items[0].name}</h5>
            <h5><strong>Price Range : </strong> Rp. {data.products.items[0].price_range.minimum_price.final_price.value} - Rp. {data.products.items[0].price_range.maximum_price.final_price.value}</h5>
            <h5><strong>Description : </strong> { ReactHtmlParser (data.products.items[0].description.html)}</h5>
        <br></br>

        <form onSubmit={handleSubscribe} >
            <input className="form-control" onChange={(event) => setEmail(event.target.value)} />
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
        {
            mutationResponse && (<>{mutationResponse.subscribe.status.message}</>)
        }
    </div>
  )
}

export default DetailProduct