"use client";

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import UseAnimations from "react-useanimations";
import home from "react-useanimations/lib/home";
import folder from "react-useanimations/lib/folder";
import activity from "react-useanimations/lib/activity";
import settings from "react-useanimations/lib/settings";
import searchToX from "react-useanimations/lib/searchToX";
import plusToX from "react-useanimations/lib/plusToX";
import menu from "react-useanimations/lib/menu";
import loading from "react-useanimations/lib/loading";
import { BellIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ isCollapsed, onToggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const menuItems = [
    {
      name: 'Dashboard',
      animation: home,
      href: '/dashboard'
    },
    {
      name: 'Documents',
      animation: folder,
      href: '/documents'
    },
    {
      name: 'Folders',
      animation: folder,
      href: '/folders'
    },
    {
      name: 'Team',
      animation: menu,
      href: '/team'
    },
    {
      name: 'Analytics',
      animation: activity,
      href: '/analytics'
    },
    {
      name: 'Notifications',
      animation: null,
      href: '/notifications'
    },
    {
      name: 'Messages',
      animation: null,
      href: '/messages'
    }
  ];

  const bottomMenuItems = [
    {
      name: 'Settings',
      animation: settings,
      href: '/settings'
    }
  ];

  const isActive = (href) => {
    if (href === '/dashboard') {
      return pathname === '/' || pathname === '/dashboard';
    }
    return pathname === href;
  };

  const handleSignOut = () => {
    setIsSigningOut(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300`}>
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <UseAnimations animation={folder} size={20} strokeColor="#ffffff" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-gray-900">LegalEyz</h1>
              <p className="text-xs text-gray-500">Document Management</p>
            </div>
          )}
        </div>
        {/* Collapse Toggle Button */}
        <button
          onClick={onToggle}
          className="absolute top-6 right-4 p-1 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <UseAnimations animation={menu} size={20} strokeColor="#6b7280" />
        </button>
      </div>


      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                active
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? item.name : ''}
            >
              {item.animation ? (
                <UseAnimations 
                  animation={item.animation} 
                  size={20} 
                  strokeColor={active ? '#2563eb' : '#9ca3af'} 
                />
              ) : item.name === 'Notifications' ? (
                <div className="relative">
                  <BellIcon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                  {!isCollapsed && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                      3
                    </span>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <EnvelopeIcon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
                  {!isCollapsed && (
                    <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium">
                      5
                    </span>
                  )}
                </div>
              )}
              {!isCollapsed && (
                <div className="flex items-center gap-2 flex-1">
                  {item.name}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Upload Document */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              multiple
              accept=".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"
            />
            <label
              htmlFor="file-upload"
              className="w-full flex flex-col items-center gap-3 px-4 py-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-xl text-center hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <UseAnimations animation={plusToX} size={24} strokeColor="#ffffff" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Upload Documents</p>
                <p className="text-xs text-gray-600">Drag & drop or click to browse</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-blue-600">
                <span>PDF, DOC, XLS, PPT</span>
              </div>
            </label>
          </div>
        </div>
      )}

      {/* Upload Button for Collapsed State */}
      {isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="relative">
            <input
              type="file"
              id="file-upload-collapsed"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              multiple
              accept=".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx"
            />
            <label
              htmlFor="file-upload-collapsed"
              className="w-full flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300 rounded-lg hover:from-blue-100 hover:to-indigo-100 hover:border-blue-400 transition-all duration-200 cursor-pointer group"
              title="Upload Documents"
            >
              <UseAnimations animation={plusToX} size={20} strokeColor="#3b82f6" />
            </label>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-200">
        {bottomMenuItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                active
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              } ${isCollapsed ? 'justify-center' : ''}`}
              title={isCollapsed ? item.name : ''}
            >
              <UseAnimations 
                animation={item.animation} 
                size={20} 
                strokeColor={active ? '#2563eb' : '#9ca3af'} 
              />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className={`flex items-center gap-3 mb-3 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@company.com</p>
            </div>
          )}
        </div>
        
        {/* Sign Out Button */}
        <button 
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 group ${
            isSigningOut 
              ? 'text-gray-500 bg-gray-100 cursor-not-allowed' 
              : 'text-red-600 hover:bg-red-50'
          } ${isCollapsed ? 'justify-center' : ''}`}
          onClick={handleSignOut}
          disabled={isSigningOut}
          title={isCollapsed ? 'Sign Out' : ''}
        >
          {isSigningOut ? (
            <UseAnimations animation={loading} size={20} strokeColor="#6b7280" />
          ) : (
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          )}
          {!isCollapsed && (isSigningOut ? 'Signing Out...' : 'Sign Out')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
