class Post {
  constructor(
    name,
    username,
    content,
    comment,
    retweet,
    likes,
    profile,
    postimage
  ) {
    this.name = name;
    this.username = username;
    this.content = content;
    this.comment = comment;
    this.retweet = retweet;
    this.likes = likes;
    this.profile = profile;
    this.postimage = postimage;
  }
  getName() {
    return this.name;
  }

  getUsername() {
    return this.username;
  }

  getContent() {
    return this.content;
  }

  getLikes() {
    return this.likes;
  }

  getRetweet() {
    return this.retweet;
  }

  getLiked() {
    return this.liked;
  }

  getProfile() {
    return this.profile;
  }

  getComment() {
    return this.comment;
  }

  getPostImage() {
    return this.postimage;
  }
}

export default Post;
