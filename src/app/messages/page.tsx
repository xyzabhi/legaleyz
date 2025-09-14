"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import plusToX from "react-useanimations/lib/plusToX";
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const messages = [
    {
        id: 1,
        sender: "John Smith",
        subject: "Contract Review Request",
        preview: "Hi, I need you to review the new vendor agreement before we sign it. Please let me know your thoughts.",
        time: "2025-01-15T10:30:00Z",
        unread: true,
        priority: "high"
    },
    {
        id: 2,
        sender: "Sarah Johnson",
        subject: "Meeting Notes - Legal Team",
        preview: "Here are the notes from yesterday's legal team meeting. Please review and add any additional points.",
        time: "2025-01-15T09:15:00Z",
        unread: true,
        priority: "medium"
    },
    {
        id: 3,
        sender: "Mike Wilson",
        subject: "Compliance Update",
        preview: "The new compliance regulations are now in effect. Please ensure all documents are updated accordingly.",
        time: "2025-01-14T16:45:00Z",
        unread: false,
        priority: "high"
    },
    {
        id: 4,
        sender: "Lisa Brown",
        subject: "Document Approval",
        preview: "The HR policy document has been approved. You can now proceed with the implementation.",
        time: "2025-01-14T14:20:00Z",
        unread: false,
        priority: "low"
    },
    {
        id: 5,
        sender: "David Lee",
        subject: "Legal Consultation",
        preview: "I need your legal opinion on the new partnership agreement. Can we schedule a call this week?",
        time: "2025-01-13T11:30:00Z",
        unread: true,
        priority: "medium"
    }
];

const formatDateAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

const getPriorityColor = (priority) => {
    switch (priority) {
        case 'high': return 'bg-red-100 text-red-800 border-red-200';
        case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'low': return 'bg-green-100 text-green-800 border-green-200';
        default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export default function Messages() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("all");

    const allPriorities = ["all", "high", "medium", "low"];

    const filteredMessages = messages.filter(message => {
        const matchesSearch = message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             message.preview.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPriority = selectedPriority === "all" || message.priority === selectedPriority;
        return matchesSearch && matchesPriority;
    });

    const unreadCount = messages.filter(m => m.unread).length;

    return (
        <div className="h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
                            <p className="text-sm text-gray-600">Communicate with your team and manage conversations</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <PaperAirplaneIcon className="w-4 h-4" />
                                New Message
                            </button>
                            <UseAnimations animation={settings} />
                        </div>
                    </div>
                </div>

            
                {/* Messages List */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mx-6 mb-6">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Messages ({filteredMessages.length})
                            </h2>
                        </div>
                        
                        <div className="divide-y divide-gray-200">
                            {filteredMessages.map((message) => (
                                <div key={message.id} className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${message.unread ? 'bg-blue-50' : ''}`}>
                                    <div className="flex items-start gap-4">
                                        {/* Avatar */}
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                            {message.sender.charAt(0)}
                                        </div>
                                        
                                        {/* Message Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="text-sm font-semibold text-gray-900">
                                                        {message.sender}
                                                    </h3>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(message.priority)}`}>
                                                        {message.priority}
                                                    </span>
                                                    {message.unread && (
                                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                    )}
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    {formatDateAgo(message.time)}
                                                </span>
                                            </div>
                                            
                                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                                                {message.subject}
                                            </h4>
                                            
                                            <p className="text-sm text-gray-600 line-clamp-2">
                                                {message.preview}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {filteredMessages.length === 0 && (
                                <div className="text-center py-12">
                                    <EnvelopeIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">No messages found</h3>
                                    <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
