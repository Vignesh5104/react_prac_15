// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {ind: 0}

  nextReview = () => {
    const {ind} = this.state
    const {reviewsList} = this.props

    if (ind < reviewsList.length - 1) {
      this.setState(prevState => ({
        ind: prevState.ind + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="reviews">
        <img className="prof-img" src={imgUrl} alt={username} />
        <p className="user">{username}</p>
        <p className="company">{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    )
  }

  prevReview = () => {
    const {ind} = this.state

    if (ind > 0) {
      this.setState(prevState => ({
        ind: prevState.ind - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {ind} = this.state
    const currentReview = reviewsList[ind]

    return (
      <div className="bgcon">
        <div className="card">
          <h1>Reviews</h1>
          <div className="review-con">
            <button onClick={this.nextReview} data-testid="leftArrow" type="button">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderActiveReview(currentReview)}
            <button onClick={this.prevReview} data-testid="rightArrow" type="button">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
