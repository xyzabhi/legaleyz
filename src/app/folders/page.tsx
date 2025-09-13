"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import plusToX from "react-useanimations/lib/plusToX";
import folder from "react-useanimations/lib/folder";

const folders = [
    {
        id: 1,
        name: "Legal Contracts",
        description: "All legal contracts and agreements",
        documentCount: 24,
        lastModified: "2025-09-14T12:30:00Z",
        color: "bg-blue-100 text-blue-800",
        icon: "📄",
        tags: ["contracts", "legal", "agreements"]
    },
    {
        id: 2,
        name: "NDAs & Confidentiality",
        description: "Non-disclosure agreements and confidentiality documents",
        documentCount: 18,
        lastModified: "2025-09-10T09:15:00Z",
        color: "bg-green-100 text-green-800",
        icon: "🔒",
        tags: ["nda", "confidentiality", "privacy"]
    },
    {
        id: 3,
        name: "HR Documents",
        description: "Human resources policies and employee documents",
        documentCount: 31,
        lastModified: "2025-09-01T17:45:00Z",
        color: "bg-purple-100 text-purple-800",
        icon: "👥",
        tags: ["hr", "policies", "employee"]
    },
    {
        id: 4,
        name: "Vendor Agreements",
        description: "Contracts with vendors and suppliers",
        documentCount: 15,
        lastModified: "2025-08-28T14:20:00Z",
        color: "bg-yellow-100 text-yellow-800",
        icon: "🏢",
        tags: ["vendor", "supply", "contracts"]
    },
    {
        id: 5,
        name: "Compliance",
        description: "Regulatory compliance and audit documents",
        documentCount: 22,
        lastModified: "2025-08-20T11:10:00Z",
        color: "bg-red-100 text-red-800",
        icon: "✅",
        tags: ["compliance", "regulatory", "audit"]
    },
    {
        id: 6,
        name: "Investment & Funding",
        description: "Investment agreements and funding documents",
        documentCount: 8,
        lastModified: "2025-08-15T16:30:00Z",
        color: "bg-indigo-100 text-indigo-800",
        icon: "💰",
        tags: ["investment", "funding", "finance"]
    },
    {
        id: 7,
        name: "Property & Real Estate",
        description: "Lease agreements and property documents",
        documentCount: 12,
        lastModified: "2025-08-10T13:45:00Z",
        color: "bg-teal-100 text-teal-800",
        icon: "🏠",
        tags: ["property", "lease", "real-estate"]
    },
    {
        id: 8,
        name: "Policies & Procedures",
        description: "Company policies and standard operating procedures",
        documentCount: 19,
        lastModified: "2025-08-05T10:15:00Z",
        color: "bg-pink-100 text-pink-800",
        icon: "📋",
        tags: ["policies", "procedures", "sop"]
    }
];

const formatDateAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
};

export default function Folders() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");

    const allTags = ["all", ...new Set(folders.flatMap(folder => folder.tags))];

    const filteredFolders = folders.filter(folder => {
        const matchesSearch = folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             folder.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === "all" || folder.tags.includes(selectedTag);
        return matchesSearch && matchesTag;
    });

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {/* Top Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Folders</h1>
                            <p className="text-sm text-gray-600">Organize your documents into folders for better management</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <UseAnimations animation={folder} size={16} strokeColor="#9ca3af" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search folders..."
                                    className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <UseAnimations animation={plusToX} size={16} strokeColor="#ffffff" />
                                New Folder
                            </button>
                            <UseAnimations animation={settings} />
                        </div>
                    </div>
                </div>

            

                {/* Folders Grid - Folder Structure Style */}
                <div className="flex-1 flex flex-col">
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mx-6 mb-6">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Folders ({filteredFolders.length})
                            </h2>
                        </div>
                        
                        <div className="p-6">
                            <div className="space-y-2">
                                {filteredFolders.map((folder) => (
                                    <div key={folder.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group cursor-pointer border border-gray-100">
                                        {/* Folder Icon */}
                                        <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-lg shadow-sm flex-shrink-0">
                                            <UseAnimations animation={folder} size={32} strokeColor="#92400e" />
                                        </div>
                                        
                                        {/* Folder Info */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium text-gray-900 truncate">
                                                {folder.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 truncate">
                                                {folder.description}
                                            </p>
                                        </div>
                                        
                                        {/* Document Count */}
                                        <div className="text-xs text-gray-500 flex-shrink-0">
                                            {folder.documentCount} docs
                                        </div>
                                        
                                        {/* Last Modified */}
                                        <div className="text-xs text-gray-500 flex-shrink-0">
                                            {formatDateAgo(folder.lastModified)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {filteredFolders.length === 0 && (
                                <div className="text-center py-12">
                                    <UseAnimations animation={folder} size={48} strokeColor="#9ca3af" />
                                    <h3 className="mt-4 text-lg font-medium text-gray-900">No folders found</h3>
                                    <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}