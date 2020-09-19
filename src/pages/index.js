import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLaunchData } from '../api/spacex'
import Filters from '../components/Filters/Filters'
import { fetchLaunchesAction } from '../redux/actions'

function App({ isFetching, launches, refreshLaunchData }) {
  const totallaunches = launches.length

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('This is a test client ', launches)
  }, [])

  return (
    <>
      <h1>SpaceX Launch Programs</h1>
      <p>
        <button type="button" onClick={refreshLaunchData}>
          Refresh Data
        </button>
      </p>

      {isFetching && <h2>Loading...</h2>}
      {!isFetching && totallaunches === 0 && <h2>Empty.</h2>}
      {!isFetching && totallaunches !== 0 && <h2>Got data in console</h2>}

      <Filters />
    </>
  )
}

App.getProps = async () => {
  const { data } = await fetchLaunchData()
  return { data }
}

const mapDispatchToProps = (dispatch) => ({
  refreshLaunchData: bindActionCreators(fetchLaunchesAction, dispatch),
})

const mapStateToProps = ({ isFetching, launches }) => ({
  isFetching,
  launches,
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
