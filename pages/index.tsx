import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import User, { DetailTypes } from '../libs/user'
import axios from 'axios'
import CardCustom from '../components/CardCustom'
import { Button, Container, Grid } from '@material-ui/core'

interface State {
  loading: boolean;
  userData: DetailTypes | boolean;
}

const Home: NextPage = ({ news }) => {
  const [state, setstate] = useState<State>({
    loading: true,
    userData: false
  });

  useEffect(() => {
    let authRaw = localStorage.getItem("auth");
    console.log('authRaw', authRaw);
    
    if (!authRaw) {
      Router.push("/login");
    }
    // let auth: DetailTypes = JSON.parse(authRaw || "");
    if (state.loading == true && !state.userData) {
      setstate({ ...state, loading: false, userData: JSON.parse(authRaw) });
    }
  });

  if (state.loading) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Skill test Indolima | Riko Logwirno</title>
          <meta name="description" content="Skill test Indolima | Riko Logwirno" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="">
      <Head>
        <title>Skill test Indolima | Riko Logwirno</title>
        <meta name="description" content="Skill test Indolima | Riko Logwirno" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div>
          <h1 className={styles.title}>
            {`Welcome ${state.userData?.name}`}
          </h1>

          <p style={{ fontSize: "14px", textAlign: 'center', margin: "1rem 2rem" }}>
            This is skill test for Indonesia 5 using NextJS and MockAPI. There is a lot of thing to be perfected, I hope this is enough for the test specification
          </p>
          
          <p className={styles.description}>
            Meanwhile these are the latest news
          </p>
        </div>

        <Container>
          <Grid xs={12} container spacing={2} justifyContent="center" className={styles.grid}>
            {
              news.map((v, k) => (
                <Grid item key={k} xs={4}>
                  <CardCustom datas={v} />
                </Grid>
              ))
            }

            {/* <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a> */}
          </Grid>
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
        <Button
          onClick={() => {
            localStorage.removeItem("auth");
            Router.push("/login");
          }}
          color="secondary"
          variant="contained"
        >
          Logout
        </Button>
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  let response = await axios.get(`${User.base_url}/example-news`);
  let news = response.data;
  return {
    props: {
      news
    }
  }
}