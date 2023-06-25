import {Component} from 'react'

import './index.css'

const HeadImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HeadImage,
    headCount: 0,
    tailsCount: 0,
  }

  onChangeImage = () => {
    const {headCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let addHeadCount = headCount
    let addTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HeadImage
      addHeadCount += 1
    } else {
      tossImage = TailImage
      addTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headCount: addHeadCount,
      tailsCount: addTailsCount,
    })
  }

  render() {
    const {tossResultImage, headCount, tailsCount} = this.state
    const totalCount = headCount + tailsCount
    return (
      <div className="bg-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss">Heads (or) Tails</p>
          <img src={tossResultImage} className="coin" alt="toss result" />
          <button type="button" className="btn" onClick={this.onChangeImage}>
            Toss Coin
          </button>
          <div className="container">
            <p className="counts">Total: {totalCount}</p>
            <p className="counts">Heads: {headCount}</p>
            <p className="counts">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
