import React from 'react';

const Comment = React.createClass({
  renderComment(comment, i){
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button onClick={this.handleRemove.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },

  handleRemove(postId, index){
    this.props.removeComment(postId, index);
  },

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  render() {
    let { postComment } = this.props;
    return (
      <div className="comment">
        {postComment.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
})

export default Comment;