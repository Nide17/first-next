import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title>Learning Next.js</title>
        <meta name="keywords" content="I am learning next from TraversyMedia" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}


// Fetch data
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}