import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and links */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Brand
            </Link>
            <div className="hidden md:flex space-x-4 ml-10">
              <Link
                to="/"
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center"
              >
                <HomeIcon className="mr-1" />
                Home
              </Link>
              <Link
                to="/profile"
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center"
              >
                <PersonIcon className="mr-1" />
                Profile
              </Link>
            </div>
          </div>

          {/* Right side - Settings and logout */}
          <div className="hidden md:flex items-center">
            <IconButton onClick={handleMenuClick} className="text-gray-700 hover:text-indigo-600">
              <SettingsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/settings" className="flex items-center">
                  <SettingsIcon className="mr-2" />
                  Settings
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/logout" className="flex items-center">
                  <LogoutIcon className="mr-2" />
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <IconButton onClick={toggleMobileMenu}>
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
        </div>
      </div>

      {/* Mobile menu items */}
      {mobileOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <HomeIcon className="mr-1" />
            Home
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <PersonIcon className="mr-1" />
            Profile
          </Link>
          <Link
            to="/settings"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <SettingsIcon className="mr-1" />
            Settings
          </Link>
          <Link
            to="/logout"
            className="text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <LogoutIcon className="mr-1" />
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
