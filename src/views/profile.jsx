import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button variant="contained" color="primary">Edit Profile</Button>
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
    </div>
  );
};

export default ProfilePage;
