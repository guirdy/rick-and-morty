// Next
import Head from 'next/head'

// React
import { useEffect, useState } from 'react'

// Libs
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { IoSearch, IoCloseSharp } from 'react-icons/io5'
import { SubmitHandler } from 'react-hook-form/dist/types'

// Components
import { CharCard } from '../components/CharCard'

// Types
import { ApiData, Character } from '../@types/Api'

// Styles
import * as S from '../styles/pages/home'

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

interface Inputs {
  query: string
}

export const API_URL = 'https://rickandmortyapi.com/api/character'

export default function Home(props: Props) {
  const { info, results = [] } = props.res

  // Hooks
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const [filteredBy, setFilteredBy] = useState<string>('')
  const [characters, setCharacters] = useState<Character[]>(results)
  const [currentInfo, setCurrentInfo] = useState<CurrentInfo>({
    ...info,
    current: API_URL,
  })

  // Constants
  const { current } = currentInfo
  const disablePrevButton = currentInfo.prev === null
  const disableNextButton = currentInfo.next === null
  const currentPageNumber = current.includes('page=')
    ? Number(new URL(current).searchParams.get('page'))
    : 1

  // Functions
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

  const handleClearFilter = () => {
    const resetPage = `${API_URL}/?page=1`

    setFilteredBy('')
    setCurrentInfo((prevInfo: CurrentInfo) => {
      return { ...prevInfo, current: resetPage }
    })
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const filteredQuery = `${API_URL}/?page=1&name=${data.query}`
    reset()
    setFilteredBy(data.query)
    setCurrentInfo({ ...currentInfo, current: filteredQuery })
  }

  useEffect(() => {
    if (current === API_URL) return

    async function changePage() {
      const changePage = await axios
        .get<ApiData>(current)
        .then(({ data }) => {
          return data
        })
        .catch(() => {
          toast.error('Personagem não encontrado!')
        })

      if (changePage) {
        setCurrentInfo({
          ...changePage.info,
          current,
        })

        setCharacters([...changePage.results])
      }
    }

    changePage()
  }, [current])

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <S.FilterForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              {...register('query', { required: true })}
              placeholder="Filter by name"
            />
            {errors.query && <span>Fill in the field above.</span>}
          </div>
          <button type="submit">
            <IoSearch />
          </button>
        </S.FilterForm>

        {!!filteredBy.length && (
          <S.FilteredContainer>
            <span>
              Filtered by:{' '}
              <S.FilterSpan>
                {filteredBy}{' '}
                <S.ClearButton type="button" onClick={handleClearFilter}>
                  <IoCloseSharp />
                </S.ClearButton>
              </S.FilterSpan>
            </span>
          </S.FilteredContainer>
        )}

        <S.CharContainer>
          {characters.map((character) => (
            <CharCard key={character.id} character={character} />
          ))}
        </S.CharContainer>

        <S.PaginationContainer>
          <S.BackButton onClick={handlePrevPage} disabled={disablePrevButton}>
            Prev
          </S.BackButton>
          <S.PageCount
            type="text"
            disabled
            value={`${currentPageNumber} / ${currentInfo.pages}`}
          />
          <S.NextButton onClick={handleNextPage} disabled={disableNextButton}>
            Next
          </S.NextButton>
        </S.PaginationContainer>
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
