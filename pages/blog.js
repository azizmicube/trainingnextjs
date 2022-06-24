import { useEffect, useState } from 'react';
import Link from 'next/dist/client/link';
import styles from '@/styles/Home.module.css'
import blogStyles from '@/styles/Blog.module.css'
// import {blogs} from '../blog'

const blog = () => {

    const [DataList, setDataList] = useState(null);

    const getData = async () => {
        const data = await fetch('/api/blog');
        const result = await data.json();
        console.log(result);
        setDataList(List(result));
    }

    const handleClick = () => {
        getData();
    };

    const List = (DataList) => {
        return <ul className={blogStyles.listContainer}>
            {
                DataList.map(blog => (
                    <li className={blogStyles.listItem}>
                        <Link href={{pathname:"/blogdetail", query:{
                            name: blog.name,
                            profession: blog.profession,
                            gender: blog.gender,
                            position: blog.position,
                            photoUrl: blog.photoUrl,
                        }}}><a><h3>{blog.name}</h3></a></Link>
                    </li>
                ))
            }
        </ul>
    };

  return (
    <div className={styles.main}>
            <button className="btn btn-primary" onClick={handleClick}>
                Show Avatar
            </button>

            {DataList}
    </div>
  )
}

export default blog