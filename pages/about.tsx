import * as React  from 'react';
import { useEffect }  from 'react';
import { useRouter } from 'next/router';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter()
  console.log('About query: ', router.query)

  useEffect(() => {
    //Check query available

  }, [])

  return <div>About Page</div>
}

export async function getServerSideProps() {
  return {
    props: {}
  }
}
