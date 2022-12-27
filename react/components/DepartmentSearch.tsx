import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
import QUERY_VALUE from '../graphql/getDeparmentGroup.graphql'
import DepartmentGroup from './DepartmentGroup'
import {SearchBar} from 'vtex.store-components'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'


const DeparmentSearch = () => {
  const CSS_HANDLES = ['departmentSearch-container']
  const handles = useCssHandles(CSS_HANDLES)
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  console.log(slug)
  return (
    loading ?
      <div>Cargando departamentos...</div>
    :
      <div className={`${handles['departmentSearch-container']} flex`}>
        <DepartmentGroup departments={data?.categories[0]?.children} handleSetSlug={setSlug} />
        <SearchBar customSearchPageUrl={slug} placeholder="" displayMode="search-button" />
      </div>
  )
}

export default DeparmentSearch
