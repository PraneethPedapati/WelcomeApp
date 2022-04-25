import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribe = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      return 'Subscribed'
    }
    return 'Subscribe'
  }

  changeStatus = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thankyou! Happy Learning</p>
        <button className="button" onClick={this.changeStatus}>
          {this.subscribe()}
        </button>
      </div>
    )
  }
}

export default Welcome
