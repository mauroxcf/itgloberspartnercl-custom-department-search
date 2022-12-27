import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import PropTypes from 'prop-types';
import './styles.css'

type Props = {
  departments: [Category]
  handleSetSlug: any
}

type Category = {
  id: number,
  name: string,
  slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug }:Props) => {
  const CSS_HANDLES = ['departmentGroup-selection', 'departmentGroup-options']
  const handles = useCssHandles(CSS_HANDLES)
  const onHandleSetSlug = (event: any) => {
    handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Category) => {
    return (
      <option className={`${handles['departmentGroup-options']} white`} value={department.slug} key={department.id}>
        {department.name}
      </option>
    )
  })

  return (
    <select className={`${handles['departmentGroup-selection']} bg-transparent white`} onChange={onHandleSetSlug} defaultValue="value0">
      <option className={`${handles['departmentGroup-options']} white`} disabled value="value0">Seleccione una opción</option>
      {departmentOptions}
    </select>
  )
}

DepartmentGroup.propTypes = {
  departments: PropTypes.array,
  handleSetSlug: PropTypes.func,
}

DepartmentGroup.defaultProps = {
  departments: [
    {
      id: 1,
      name: "vacío",
      slug: ""
    }
  ],
}

export default DepartmentGroup