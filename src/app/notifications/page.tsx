"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import plusToX from "react-useanimations/lib/plusToX";
import { BellIcon } from '@heroicons/react/24/outline';

const notifications = [
  {
    id: 1,
    type: "document_analyzed",
    title: "Document Analysis Complete",
    message: "Employment_Contract.pdf has been successfully analyzed and is ready for review.",
    timestamp: "2 minutes ago",
    read: false,
    priority: "high",
    user: "Ravi Kumar",
    document: "Employment_Contract.pdf"
  },
  {
    id: 2,
    type: "document_shared",
    title: "Document Shared",
    message: "Priya Iyer shared NDA_Client_X.docx with you for review.",
    timestamp: "15 minutes ago",
    read: false,
    priority: "medium",
    user: "Priya Iyer",
    document: "NDA_Client_X.docx"
  },
  {
    id: 3,
    type: "review_required",
    title: "Review Required",
    message: "Lease_Agreement.pdf is pending your review and approval.",
    timestamp: "1 hour ago",
    read: true,
    priority: "high",
    user: "System",
    document: "Lease_Agreement.pdf"
  },
  {
    id: 4,
    type: "team_activity",
    title: "Team Activity",
    message: "Siddharth Mehta completed analysis of Vendor_Contract.docx",
    timestamp: "2 hours ago",
    read: true,
    priority: "low",
    user: "Siddharth Mehta",
    document: "Vendor_Contract.docx"
  },
  {
    id: 5,
    type: "document_uploaded",
    title: "New Document Uploaded",
    message: "Service_Agreement.pdf has been uploaded and is ready for analysis.",
    timestamp: "3 hours ago",
    read: true,
    priority: "medium",
    user: "Manoj Gupta",
    document: "Service_Agreement.pdf"
  },
  {
    id: 6,
    type: "system_update",
    title: "System Update",
    message: "New features have been added to the document analysis system. Check out the latest improvements!",
    timestamp: "1 day ago",
    read: true,
    priority: "low",
    user: "System",
    document: null
  },
  {
    id: 7,
    type: "document_analyzed",
    title: "Document Analysis Complete",
    message: "Partnership_Deal.docx analysis is complete with 95% confidence score.",
    timestamp: "1 day ago",
    read: true,
    priority: "medium",
    user: "System",
    document: "Partnership_Deal.docx"
  },
  {
    id: 8,
    type: "collaboration",
    title: "Collaboration Invite",
    message: "Neha Reddy invited you to collaborate on Privacy_Policy.pdf",
    timestamp: "2 days ago",
    read: true,
    priority: "medium",
    user: "Neha Reddy",
    document: "Privacy_Policy.pdf"
  }
];

const notificationTypes = [
  { value: "all", label: "All Notifications", count: notifications.length },
  { value: "unread", label: "Unread", count: notifications.filter(n => !n.read).length },
  { value: "high", label: "High Priority", count: notifications.filter(n => n.priority === "high").length },
  { value: "document", label: "Document Related", count: notifications.filter(n => n.type.includes("document")).length }
];

export default function Notifications() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedNotifications, setSelectedNotifications] = useState(new Set());

  const filteredNotifications = notifications.filter(notification => {
    switch (selectedFilter) {
      case "unread":
        return !notification.read;
      case "high":
        return notification.priority === "high";
      case "document":
        return notification.type.includes("document");
      default:
        return true;
    }
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "border-l-red-500";
      case "medium": return "border-l-yellow-500";
      case "low": return "border-l-blue-500";
      default: return "border-l-gray-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "document_analyzed":
        return "✅";
      case "document_shared":
        return "📤";
      case "review_required":
        return "👀";
      case "team_activity":
        return "👥";
      case "document_uploaded":
        return "📄";
      case "system_update":
        return "🔧";
      case "collaboration":
        return "🤝";
      default:
        return "🔔";
    }
  };

  const markAsRead = (id) => {
    // In a real app, this would make an API call
    console.log(`Marking notification ${id} as read`);
  };

  const markAllAsRead = () => {
    // In a real app, this would make an API call
    console.log("Marking all notifications as read");
  };

  const deleteNotification = (id) => {
    // In a real app, this would make an API call
    console.log(`Deleting notification ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
              <p className="text-sm text-gray-600">
                {notifications.filter(n => !n.read).length} unread notifications
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <UseAnimations animation={settings} size={16} strokeColor="#9ca3af" />
                </div>
                <input
                  type="text"
                  placeholder="Search notifications..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={markAllAsRead}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Mark All Read
              </button>
              <UseAnimations animation={settings} />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex gap-2">
            {notificationTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedFilter(type.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === type.value
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label} ({type.count})
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 px-6 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                {selectedFilter === "all" ? "All" : notificationTypes.find(t => t.value === selectedFilter)?.label} Notifications
              </h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 hover:bg-gray-50 transition-colors border-l-4 ${getPriorityColor(notification.priority)} ${
                    !notification.read ? 'bg-blue-50/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{notification.message}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>By {notification.user}</span>
                            {notification.document && (
                              <span>• {notification.document}</span>
                            )}
                            <span>• {notification.timestamp}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 ml-4">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                            >
                              Mark Read
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <UseAnimations animation={plusToX} size={16} strokeColor="currentColor" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredNotifications.length === 0 && (
              <div className="text-center py-12">
                <BellIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications found</h3>
                <p className="text-gray-600">
                  {selectedFilter === "unread" 
                    ? "You're all caught up! No unread notifications."
                    : "No notifications match your current filter."
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
