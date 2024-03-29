// Write your code here
import './index.css'

const {formatDistanceToNow} = require('date-fns')

const CommentItem = props => {
  const {details, colorsList, isLikedFnc, onDeleteFnc} = props
  const {name, comment, id, isLiked} = details
  const time = formatDistanceToNow(new Date())
  const randomColor = Math.floor(Math.random() * 7)
  const onLike = () => {
    isLikedFnc(id)
  }
  const onDelete = () => {
    onDeleteFnc(id)
  }
  const isLikedUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  return (
    <li className="list-container">
      <div className="content-comment">
        <div className={`profile ${colorsList[randomColor]}`}>
          <span className="profile-text">{name[0]}</span>
        </div>
        <div className="comment-text-container">
          <h1 className="comment-user-name">
            {name} <span className="time">{time}</span>
          </h1>
          <p className="comment-text">{comment}</p>
        </div>
      </div>
      <div className="comment-like-and-delete-container">
        <div className="like-container">
          <button className="like-btn" type="button" onClick={onLike}>
            <img src={isLikedUrl} alt="like" className="like-image" />
          </button>
          <p className="like-text">Like</p>
        </div>
        <div>
          <button
            className="delete-btn"
            type="button"
            data-testid="delete"
            onClick={onDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="comment-delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
