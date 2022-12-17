// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="app-container">
        <div className="fruits-container">
          <h1 className="title">
            Bob ate <span className="color">{mangoes}</span> mangoes{' '}
            <span className="color">{bananas}</span> bananas
          </h1>
          <div className="container">
            <div className="one">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-img"
                alt="mango"
              />
              <button
                type="button"
                className="button"
                onClick={this.onEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="two">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-img"
                alt="banana"
              />
              <button
                type="button"
                className="button"
                onClick={this.onEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
