import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import 'intersection-observer'
import CommonHead from '../components/CommonHead';

export default function Home() {
  return (
    <div>
      <CommonHead title = "ALayman Gihub-Repo-Finder"
                  url = 'https://next-github-repo-finder.netlify.app/'
                  description = 'Project for searching repositories with keywords. There is only one page with a single searching function.'
                  keywords = 'next, redux, github, nefify'>
      </CommonHead>
      <Dashboard/>
    </div>
  )
}
