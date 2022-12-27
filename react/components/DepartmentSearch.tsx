import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDeparmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import {SearchBar} from 'vtex.store-components'


const DeparmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log(slug)
  return (
    loading ?
      <div>Loading...</div>
    :
      <div className='flex'>
        <DepartmentGroup departments={data?.categories[0]?.children} handleSetSlug={setSlug} />
        <SearchBar customSearchPageUrl={slug} placeholder="" displayMode="search-and-clear-buttons" />
      </div>
  )
}

export default DeparmentSearch
