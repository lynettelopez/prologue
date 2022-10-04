import Head from 'next/head';

import styles from '../styles/index.module.scss';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prologue - Writing modernized</title>
        <meta name="description" content="Minimalist writing platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Prologue.</h1>
      </main>

      <footer>Made with &hearts; by Lynette.</footer>
    </div>
  );
}
