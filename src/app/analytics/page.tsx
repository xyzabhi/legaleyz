"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import activity from "react-useanimations/lib/activity";

const analyticsData = {
  overview: {
    totalDocuments: 156,
    analyzedThisMonth: 23,
    pendingReview: 7,
    teamMembers: 12
  },
  documentTypes: [
    { type: "Contract", count: 45, percentage: 28.8, color: "bg-blue-500" },
    { type: "NDA", count: 32, percentage: 20.5, color: "bg-green-500" },
    { type: "Lease Agreement", count: 28, percentage: 17.9, color: "bg-yellow-500" },
    { type: "Vendor Contract", count: 22, percentage: 14.1, color: "bg-purple-500" },
    { type: "SLA", count: 15, percentage: 9.6, color: "bg-red-500" },
    { type: "Other", count: 14, percentage: 9.0, color: "bg-gray-500" }
  ],
  monthlyTrend: [
    { month: "Jan", documents: 12, analyzed: 8 },
    { month: "Feb", documents: 18, analyzed: 15 },
    { month: "Mar", documents: 25, analyzed: 22 },
    { month: "Apr", documents: 22, analyzed: 18 },
    { month: "May", documents: 28, analyzed: 25 },
    { month: "Jun", documents: 31, analyzed: 28 },
    { month: "Jul", documents: 35, analyzed: 32 },
    { month: "Aug", documents: 29, analyzed: 26 },
    { month: "Sep", documents: 23, analyzed: 20 }
  ],
  topPerformers: [
    { name: "Ravi Kumar", documents: 24, efficiency: 95 },
    { name: "Priya Iyer", documents: 45, efficiency: 92 },
    { name: "Siddharth Mehta", documents: 31, efficiency: 88 },
    { name: "Manoj Gupta", documents: 28, efficiency: 85 },
    { name: "Neha Reddy", documents: 22, efficiency: 82 }
  ],
  recentActivity: [
    { action: "Document analyzed", user: "Ravi Kumar", document: "Employment_Contract.pdf", time: "2 minutes ago" },
    { action: "New document uploaded", user: "Priya Iyer", document: "Vendor_Agreement.docx", time: "15 minutes ago" },
    { action: "Review completed", user: "Siddharth Mehta", document: "NDA_Client_Y.pdf", time: "1 hour ago" },
    { action: "Document shared", user: "Manoj Gupta", document: "Lease_Agreement.pdf", time: "2 hours ago" },
    { action: "Analysis started", user: "Neha Reddy", document: "Service_Contract.docx", time: "3 hours ago" }
  ]
};

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const periods = [
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
    { value: "1y", label: "Last year" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-sm text-gray-600">Insights and performance metrics for your documents</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.totalDocuments}</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={activity} size={24} strokeColor="#3b82f6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Analyzed This Month</p>
                  <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.analyzedThisMonth}</p>
                  <p className="text-sm text-green-600">+8% from last month</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={activity} size={24} strokeColor="#10b981" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.pendingReview}</p>
                  <p className="text-sm text-yellow-600">-3 from last week</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={activity} size={24} strokeColor="#f59e0b" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Team Members</p>
                  <p className="text-3xl font-bold text-gray-900">{analyticsData.overview.teamMembers}</p>
                  <p className="text-sm text-gray-600">Active users</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={activity} size={24} strokeColor="#8b5cf6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Data */}
        <div className="flex-1 px-6 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Document Types Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Document Types Distribution</h3>
              <div className="space-y-4">
                {analyticsData.documentTypes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded ${item.color}`}></div>
                      <span className="text-sm font-medium text-gray-900">{item.type}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Trend */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Document Activity</h3>
              <div className="space-y-4">
                {analyticsData.monthlyTrend.slice(-6).map((month, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 w-12">{month.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${(month.documents / 35) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(month.analyzed / 35) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{month.documents} docs</div>
                      <div className="text-sm text-gray-500">{month.analyzed} analyzed</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Performers and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
              <div className="space-y-4">
                {analyticsData.topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold text-blue-800">
                        {performer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{performer.name}</p>
                        <p className="text-sm text-gray-600">{performer.documents} documents</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{performer.efficiency}%</p>
                      <p className="text-xs text-gray-600">efficiency</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {analyticsData.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-600 truncate">{activity.document}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
