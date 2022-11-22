// Write your code here.
import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <>
          <hr className="break" />
          <p className="answer">{answerText}</p>
        </>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderIsActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggleActive}>
        <img src={image} className="image" alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderIsActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
