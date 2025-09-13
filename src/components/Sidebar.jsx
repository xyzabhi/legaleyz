"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import UseAnimations from "react-useanimations";
import home from "react-useanimations/lib/home";
import folder from "react-useanimations/lib/folder";
import activity from "react-useanimations/lib/activity";
import settings from "react-useanimations/lib/settings";
import searchToX from "react-useanimations/lib/searchToX";
import plusToX from "react-useanimations/lib/plusToX";
import menu from "react-useanimations/lib/menu";
import { BellIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const pathname = usePathname();

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

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <UseAnimations animation={folder} size={20} strokeColor="#ffffff" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">LegalEyz</h1>
            <p className="text-xs text-gray-500">Document Management</p>
          </div>
        </div>
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
              }`}
            >
              {item.animation ? (
                <UseAnimations 
                  animation={item.animation} 
                  size={20} 
                  strokeColor={active ? '#2563eb' : '#9ca3af'} 
                />
              ) : item.name === 'Notifications' ? (
                <BellIcon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
              ) : (
                <EnvelopeIcon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-gray-400'}`} />
              )}
              <div className="flex items-center gap-2 flex-1">
                {item.name}
                {item.name === 'Notifications' && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    3
                  </span>
                )}
                {item.name === 'Messages' && (
                  <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    5
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-150">
          <UseAnimations animation={plusToX} size={20} strokeColor="#ffffff" />
          New Document
        </button>
      </div>

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
              }`}
            >
              <UseAnimations 
                animation={item.animation} 
                size={20} 
                strokeColor={active ? '#2563eb' : '#9ca3af'} 
              />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
            <p className="text-xs text-gray-500 truncate">john@company.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
