import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentList: [], count: 0}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onAddName = event => {
    this.setState({name: event.target.value})
  }

  onAddCommentText = event => {
    this.setState({comment: event.target.value})
  }

  isLikedFnc = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDeleteFnc = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(each => id !== each.id),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, commentList, count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="sub-content-container">
            <form
              className="comment-input-container"
              onSubmit={this.onAddComment}
            >
              <h1 className="comment-heading">Comments</h1>
              <p className="comment-para">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-field-input"
                onChange={this.onAddName}
                value={name}
              />
              <textarea
                placeholder="Your Comment"
                rows="5"
                cols="30"
                className="comment-field-input"
                onChange={this.onAddCommentText}
                value={comment}
              />
              <button type="submit" className="add-comment-button">
                Add Comment
              </button>
            </form>
            <div className="comment-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-image"
              />
            </div>
          </div>
          <hr />
          <div className="add-comments-container">
            <p className="comments-count-para">
              <span className="comments-count">{count}</span> Comments
            </p>
            <ul className="comments-list-container">
              {commentList.map(each => (
                <CommentItem
                  details={each}
                  colorsList={initialContainerBackgroundClassNames}
                  isLikedFnc={this.isLikedFnc}
                  onDeleteFnc={this.onDeleteFnc}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
