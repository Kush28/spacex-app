import React from 'react'

function FilterButton({ children, onClick, isActive, ...props }) {
  return (
    <li {...props}>
      <button
        type="button"
        onClick={onClick}
        className={isActive ? 'filter-button-active' : 'filter-button'}
      >
        {children}
      </button>
    </li>
  )
}

export default FilterButton
