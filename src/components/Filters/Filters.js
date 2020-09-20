import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LAUNCH_YEARS } from '../../constants'
import { fetchLaunchesAction } from '../../redux/actions'
import FilterButton from '../FilterButton/FilterButton'

function Filters({ filters, refreshLaunchData }) {
  const launchYears = LAUNCH_YEARS

  function applyFilters(newFilter) {
    const newFilterObj = { ...filters, ...newFilter }
    Object.keys(newFilter).forEach((key) => {
      if (filters[key] === newFilter[key]) newFilterObj[key] = null
    })
    refreshLaunchData(newFilterObj)
  }

  return (
    <nav>
      <h2>Filters</h2>
      <div className="content">
        <p>Launch year</p>
        <hr />
        <ul>
          {launchYears.map((year) => (
            <FilterButton
              isActive={filters.year === year}
              onClick={() => applyFilters({ year })}
              key={year}
            >
              {year}
            </FilterButton>
          ))}
        </ul>

        <p>Successful Launch</p>
        <hr />
        <ul>
          <FilterButton isActive={filters.launch} onClick={() => applyFilters({ launch: true })}>
            True
          </FilterButton>
          <FilterButton
            isActive={filters.launch === false}
            onClick={() => applyFilters({ launch: false })}
          >
            False
          </FilterButton>
        </ul>

        <p>Successful Landing</p>
        <hr />
        <ul>
          <FilterButton isActive={filters.landing} onClick={() => applyFilters({ landing: true })}>
            True
          </FilterButton>
          <FilterButton
            isActive={filters.landing === false}
            onClick={() => applyFilters({ landing: false })}
          >
            False
          </FilterButton>
        </ul>
      </div>
    </nav>
  )
}

const mapDispatchToProps = (dispatch) => ({
  refreshLaunchData: bindActionCreators(fetchLaunchesAction, dispatch),
})

export default connect(null, mapDispatchToProps)(Filters)
