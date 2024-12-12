import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';

import './MainPage.css';

function MainPage() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Sakshi Agarwal',
    bio: 'Just someone who loves designing, sketching, and finding beauty in the little things 💕',
    avatar: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1734003819/1bc60f4364d82c6a06c4a77468ec75cf_bel4fs.png',
    posts: [
      { id: 1, title: 'Design meet',  image: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1734003819/Group_9_yhhhj1.png' },
      { id: 2, title: 'Working on a B2B...',  image: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1734003819/6fec81e34bad0669ee66f27f627a1bb5_suguij.png' },
      { id: 3, title: 'Parachute',  image: 'https://res.cloudinary.com/dlfwqynh5/image/upload/v1734003818/Group_10_jmjref.png' },
    ],
  });

  const handleEdit = () => setEditing(true);
  const handleSave = (updatedProfile) => {
    setProfile(updatedProfile);
    setEditing(false);
  };

  return (
    <div className="App">
      {editing ? (
        <EditProfile profile={profile} onSave={handleSave} onCancel={() => setEditing(false)} />
      ) : (
        <Profile profile={profile} onEdit={handleEdit} />
      )}
    </div>
  );
}

export default MainPage;