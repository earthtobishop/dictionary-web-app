import Search from '@/components/search/search'
import Word from '@/components/word/word'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [searchText, setSearchText] = useState('')
  const [word, setWord] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
        )
        setWord(data[0])
        setNotFound(false)
      } catch (error) {
        setNotFound(true)
      }
    }

    if (!searchText) {
      return
    }
    searchProduct()
  }, [searchText])

  return (
    <>
      <Head>
        <title>Dictionary Web App</title>
        <meta name='description' content='Search the dictionary' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Search searchText={searchText} setSearchText={setSearchText} />
        {word && <Word word={word} />}
        {notFound && <p>Not Found</p>}
      </main>
    </>
  )
}
