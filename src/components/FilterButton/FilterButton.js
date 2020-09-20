import React from 'react'

function FilterButton({ children, isActive, ...props }) {
  return (
    <li {...props}>
      <button type="button" className={isActive ? 'filter-button-active' : 'filter-button'}>
        {children}
      </button>
    </li>
  )
}

export default FilterButton
