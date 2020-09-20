import React from 'react'
import { connect } from 'react-redux'
import { getQueryString } from '../helpers/query.helper'
import { fetchLaunchData } from '../api/spacex'
import Card from '../components/Card/Card'
import Filters from '../components/Filters/Filters'
import Layout from '../components/Layout/Layout'

function App({ isFetching, launches, filters }) {
  const totallaunches = launches.length

  return (
    <Layout>
      <Filters filters={filters} />
      <div className="card-wrapper">
        {isFetching && <h3 className="info">Loading...</h3>}
        {!isFetching && totallaunches === 0 && <h3 className="info">No Data available.</h3>}
        {!isFetching &&
          totallaunches !== 0 &&
          launches.map((launchData) => <Card key={launchData.missionName} {...launchData} />)}
      </div>
    </Layout>
  )
}

App.getProps = async ({ query }) => {
  const data = await fetchLaunchData(getQueryString(query))
  return { data }
}

const mapStateToProps = ({ isFetching, launches, filters }) => ({
  isFetching,
  launches,
  filters,
})

export default connect(mapStateToProps)(App)
