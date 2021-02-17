import Head from 'next/head';
import ReduxTester from '../components/ReduxTester';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Dashboard/>
    </div>
  )
}
