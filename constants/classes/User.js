class User {
  constructor(name, username, profile, isFollowing, isFollowers, isSwappers) {
    this.name = name;
    this.username = username;
    this.profile = profile;
    this.isFollowing = isFollowing;
    this.isFollowers = isFollowers;
    this.isSwappers = isSwappers;
  }
  getName() {
    return this.name;
  }
  getUsername() {
    return this.username;
  }
  getProfile() {
    return this.profile;
  }
  getIsFollowing() {
    return this.isFollowing;
  }
  getIsFollowers() {
    return this.isFollowers;
  }
  getIsSwappers() {
    return this.isSwappers;
  }
}

export default User;
