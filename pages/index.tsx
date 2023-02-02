import Search from '@/components/search/search'
import Word from '@/components/word/word'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFont } from '@/context/FontContext'

export default function Home() {
  const [searchText, setSearchText] = useState('')
  const [word, setWord] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const { font, setFont } = useFont()

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`
        )
        setWord(data[0])
        setNotFound(false)
      } catch (error) {
        setWord(null)
        setNotFound(true)
      }
    }

    if (!searchText) {
      return
    }
    searchProduct()
  }, [searchText])

  let selectedFont

  if (font === 'Sans Serif') {
    selectedFont = 'font-sans'
  } else if (font === 'Serif') {
    selectedFont = 'font-serif'
  } else if (font === 'Mono') {
    selectedFont = 'font-mono'
  }

  return (
    <>
      <Head>
        <title>Dictionary Web App</title>
        <meta name='description' content='Search the dictionary' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${selectedFont}`}>
        <Search searchText={searchText} setSearchText={setSearchText} />
        {word && <Word word={word} />}
        {notFound && (
          <div className='flex items-center justify-center mt-[10%]'>
            <p>😥</p>
          </div>
        )}
      </main>
    </>
  )
}
