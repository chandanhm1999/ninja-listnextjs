import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>In the world of content marketing, video and image-based content continues to rise in popularity—but nothing has dethroned written content as the foundation of any brand’s digital marketing strategy. There are many different types of written content, from the standard blog to social posts and much more.</p>
        <p className={styles.text}>In the world of content marketing, video and image-based content continues to rise in popularity—but nothing has dethroned written content as the foundation of any brand’s digital marketing strategy. There are many different types of written content, from the standard blog to social posts and much more.</p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
