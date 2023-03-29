import { Character } from '@/@types/Api'
import { API_URL } from '@/pages'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

import * as S from '../../styles/pages/character'

interface Props {
  character: Character
}

export default function CharacterPage({ character }: Props) {
  return (
    <>
      <S.CharacterContainer>
        <S.GoBack href="/">
          <MdOutlineArrowBackIosNew /> Back
        </S.GoBack>
        <Image
          loader={() => character.image}
          src={character.image}
          unoptimized
          width={300}
          height={300}
          alt={character.name}
        />
        <S.Name>{character.name}</S.Name>

        {character.type && (
          <S.Details>
            <strong>Tipo</strong>
            <span>{character.type}</span>
          </S.Details>
        )}

        {character.origin.name && (
          <S.Details>
            <strong>Origin</strong>
            <span>{character.origin.name}</span>
          </S.Details>
        )}

        {character.gender && (
          <S.Details>
            <strong>Gender</strong>
            <span>{character.gender}</span>
          </S.Details>
        )}

        {character.status && (
          <S.Details>
            <strong>Status</strong>
            <span>{character.status}</span>
          </S.Details>
        )}

        {character.species && (
          <S.Details>
            <strong>Specie</strong>
            <span>{character.species}</span>
          </S.Details>
        )}
      </S.CharacterContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const characterId = params?.id

  const character = await axios
    .get<Character>(`${API_URL}/${characterId}`)
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      return null
    })

  if (!character) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      character,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  }
}
