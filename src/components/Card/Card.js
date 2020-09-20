import React from 'react'

function Card({ missionName, missionImage, missionIds, launchYear, launchSuccess, landSuccess }) {
  return (
    <article>
      <div className="card">
        <img loading="lazy" src={missionImage} alt={missionName} width="100%" />
        <h3>{missionName}</h3>
        <table>
          <tbody>
            <tr>
              <td>Mission Ids:</td>
              <td>
                <ul>
                  {missionIds.map((id) => (
                    <li key={id}>{id}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <td>Launch year:</td>
              <td>{launchYear}</td>
            </tr>
            <tr>
              <td>Successful launch:</td>
              <td>{launchSuccess}</td>
            </tr>
            <tr>
              <td>Successful landing:</td>
              <td>{landSuccess}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Card
