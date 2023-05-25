import Head from "next/head"
import { store } from "./store"
import App from "./App"
import { Provider } from "react-redux"
import Link from "next/link"
import styles from "./index.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Simple React App</title>
        <Link rel='icon' href='/favicon.ico' />
        <Link rel='preconnect' href='https://fonts.googleapis.com' />
        <Link rel='preconnect' href='https://fonts.gstatic.com' />
        <Link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Provider store={store}>
        <App />
      </Provider>
    </div>
  )
}
