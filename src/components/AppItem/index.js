// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails, appId} = this.props
    // eslint-disable-next-line no-unused-vars
    const {appName, imageUrl, category} = appDetails
    return (
      <div className="single-app-con">
        <li className="no-dot">
          <img src={imageUrl} className="icon" alt={appName} />
          <p className="app-name">{appName}</p>
        </li>
      </div>
    )
  }
}

export default AppItem
