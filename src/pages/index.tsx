import { ApiData, Character } from '@/@types/Api'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Props {
  res: ApiData
}

interface CurrentInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
  current: string
}

const API_URL = 'https://rickandmortyapi.com/api/character'

export default function Home(props: Props) {
  const { info, results = [] } = props.res

  const [characters, setCharacters] = useState<Character[]>(results)
  const [currentInfo, setCurrentInfo] = useState<CurrentInfo>({
    ...info,
    current: API_URL,
  })

  const { current } = currentInfo
  const disablePrevButton = currentInfo.prev === null
  const disableNextButton = currentInfo.next === null

  const handleNextPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.next ? prevInfo.next : current }
    })
  }

  const handlePrevPage = () => {
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: prevInfo.prev ? prevInfo.prev : current }
    })
  }

  useEffect(() => {
    if (current === API_URL) return

    async function changePage() {
      const changePage = await axios.get<ApiData>(current).then(({ data }) => {
        return data
      })

      setCurrentInfo({
        ...changePage.info,
        current,
      })

      setCharacters([...changePage.results])
    }

    changePage()
  }, [current])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {characters.map((character) => (
          <div key={character.id}>
            <Image
              loader={() => character.image}
              src={character.image}
              width={300}
              height={300}
              alt="character"
            />
            <p>{character.name}</p>
          </div>
        ))}
        <button onClick={handlePrevPage} disabled={disablePrevButton}>
          Anterior
        </button>
        <button onClick={handleNextPage} disabled={disableNextButton}>
          Proximo
        </button>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get<ApiData>(API_URL).then(({ data }) => {
    return data
  })

  return {
    props: {
      res,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
