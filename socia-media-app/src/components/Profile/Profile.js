import React from 'react';
import './Profile.css'

const Profile = ({ profile, onEdit }) => {
  return (
    <div className="profile">
      <button className="back-button">&larr;</button>
      <div className="profile-header">
        <img src={profile.avatar} alt="Avatar" className="profile-avatar" />
        <button className="edit-button" onClick={onEdit}>Edit Profile</button>
      </div>
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-bio">{profile.bio}</p>
      <h3>My Posts</h3>
      <div className="posts-grid">
        {profile.posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-details">
              <p>{post.title}</p>
              <span>{post.likes} ❤️</span>
            </div>
          </div>
        ))}
      </div>
      <button className="add-post-button">+</button>
    </div>
  );
};

export default Profile;
