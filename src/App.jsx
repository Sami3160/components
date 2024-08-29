import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';

const ProfilePage = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const handleOpenSettings = () => setOpenSettings(true);
  const handleCloseSettings = () => setOpenSettings(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <div>
          <Button variant="outlined" color="primary" onClick={handleOpenSettings}>
            Settings
          </Button>
          <Button variant="contained" color="primary" className="ml-2">
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center p-6">
        <Avatar
          alt="User Profile"
          src="https://via.placeholder.com/150"
          sx={{ width: 150, height: 150 }}
        />
        <Typography variant="h5" className="mt-4">
          John Doe
        </Typography>
        <Typography variant="body1" color="textSecondary">
          @johndoe
        </Typography>
        <Typography variant="body2" className="mt-2 text-center">
          Web Developer | Tech Enthusiast | Blogger
        </Typography>

        {/* Stats */}
        <div className="flex mt-4 space-x-6">
          <div className="text-center">
            <Typography variant="h6">102</Typography>
            <Typography variant="body2" color="textSecondary">Posts</Typography>
          </div>
          <div className="text-center">
            <Typography variant="h6">2.5K</Typography>
            <Typography variant="body2" color="textSecondary">Followers</Typography>
          </div>
          <div className="text-center">
            <Typography variant="h6">350</Typography>
            <Typography variant="body2" color="textSecondary">Following</Typography>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((post) => (
          <Card key={post} className="shadow-md">
            <CardMedia
              component="img"
              alt="Post Image"
              height="140"
              image="https://via.placeholder.com/300"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Post Title {post}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is a short description of the post.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Settings Modal */}
      <Modal
        open={openSettings}
        onClose={handleCloseSettings}
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 id="settings-modal-title" className="text-xl font-bold mb-4">Settings</h2>
          {/* Account Settings */}
          <div className="mb-4">
            <Typography variant="h6">Account Information</Typography>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              className="mt-2"
              defaultValue="johndoe@example.com"
            />
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              className="mt-4"
              defaultValue="johndoe"
            />
          </div>

          {/* Privacy Settings */}
          <div className="mb-4">
            <Typography variant="h6">Privacy</Typography>
            <div className="flex items-center justify-between mt-2">
              <Typography variant="body1">Make profile public</Typography>
              <Switch defaultChecked />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="mb-4">
            <Typography variant="h6">Notifications</Typography>
            <div className="flex items-center justify-between mt-2">
              <Typography variant="body1">Email Notifications</Typography>
              <Switch />
            </div>
            <div className="flex items-center justify-between mt-2">
              <Typography variant="body1">Push Notifications</Typography>
              <Switch defaultChecked />
            </div>
          </div>

          {/* Close Button */}
          <Button variant="contained" color="primary" onClick={handleCloseSettings}>
            Save Changes
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
