"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import plusToX from "react-useanimations/lib/plusToX";
import menu from "react-useanimations/lib/menu";

const teamMembers = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Senior Legal Counsel",
    email: "ravi.kumar@company.com",
    avatar: "RK",
    status: "online",
    lastActive: "2 minutes ago",
    documents: 24,
    department: "Legal"
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Legal Analyst",
    email: "anjali.sharma@company.com",
    avatar: "AS",
    status: "away",
    lastActive: "15 minutes ago",
    documents: 18,
    department: "Legal"
  },
  {
    id: 3,
    name: "Siddharth Mehta",
    role: "Compliance Officer",
    email: "siddharth.mehta@company.com",
    avatar: "SM",
    status: "online",
    lastActive: "1 minute ago",
    documents: 31,
    department: "Compliance"
  },
  {
    id: 4,
    name: "Arjun Verma",
    role: "Legal Associate",
    email: "arjun.verma@company.com",
    avatar: "AV",
    status: "offline",
    lastActive: "2 hours ago",
    documents: 12,
    department: "Legal"
  },
  {
    id: 5,
    name: "Priya Iyer",
    role: "Document Specialist",
    email: "priya.iyer@company.com",
    avatar: "PI",
    status: "online",
    lastActive: "5 minutes ago",
    documents: 45,
    department: "Operations"
  },
  {
    id: 6,
    name: "Manoj Gupta",
    role: "Legal Manager",
    email: "manoj.gupta@company.com",
    avatar: "MG",
    status: "away",
    lastActive: "30 minutes ago",
    documents: 28,
    department: "Legal"
  },
  {
    id: 7,
    name: "Neha Reddy",
    role: "Contract Specialist",
    email: "neha.reddy@company.com",
    avatar: "NR",
    status: "online",
    lastActive: "3 minutes ago",
    documents: 22,
    department: "Legal"
  },
  {
    id: 8,
    name: "Vikram Malhotra",
    role: "Legal Assistant",
    email: "vikram.malhotra@company.com",
    avatar: "VM",
    status: "offline",
    lastActive: "1 day ago",
    documents: 8,
    department: "Legal"
  }
];

const departments = ["All", "Legal", "Compliance", "Operations"];

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === "All" || member.department === selectedDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getPastelColor = (name) => {
    const colors = [
      "bg-pink-200 text-pink-800",
      "bg-blue-200 text-blue-800",
      "bg-green-200 text-green-800",
      "bg-yellow-200 text-yellow-800",
      "bg-purple-200 text-purple-800",
      "bg-indigo-200 text-indigo-800",
      "bg-red-200 text-red-800",
      "bg-teal-200 text-teal-800"
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Team</h1>
              <p className="text-sm text-gray-600">Manage your team members and collaboration</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <UseAnimations animation={plusToX} size={16} strokeColor="#ffffff" />
                Add Member
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <UseAnimations 
                  animation={menu} 
                  size={20} 
                  strokeColor="#9ca3af" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />
                <input
                  type="text"
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedDepartment === dept
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-gray-900">{teamMembers.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={menu} size={24} strokeColor="#3b82f6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Online Now</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teamMembers.filter(m => m.status === "online").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Today</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teamMembers.filter(m => m.status !== "offline").length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={menu} size={24} strokeColor="#f59e0b" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {teamMembers.reduce((sum, member) => sum + member.documents, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={menu} size={24} strokeColor="#8b5cf6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Team Members ({filteredMembers.length})
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${getPastelColor(member.name)}`}>
                          {member.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(member.status)}`}></div>
                        <span className="text-xs text-gray-500 capitalize">{member.status}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm text-gray-600">{member.email}</p>
                      <p className="text-sm text-gray-500">Last active: {member.lastActive}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Department:</span>
                        <span className="text-sm font-medium text-gray-900">{member.department}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Documents:</span>
                        <span className="text-sm font-medium text-gray-900">{member.documents}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                        Message
                      </button>
                      <button className="flex-1 px-3 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                  <UseAnimations animation={menu} size={48} strokeColor="#9ca3af" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No team members found</h3>
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
