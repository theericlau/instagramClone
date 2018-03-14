import React from 'react';

const Comment = React.createClass({
  renderComment(comment, i){
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },

  render() {
    let { postComment } = this.props;
    return (
      <div className="comment">
        {postComment.map(this.renderComment)}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
})

export default Comment;