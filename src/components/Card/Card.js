import React from 'react'
import cloudinaryUrl from '../../helpers/cloudinary.helper'

function Card({ missionName, missionImage, missionIds, launchYear, launchSuccess, landSuccess }) {
  return (
    <article>
      <div className="card">
        <img
          loading="lazy"
          src={cloudinaryUrl(missionImage, 200)}
          alt={missionName}
          height="400"
          width="400"
        />
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
