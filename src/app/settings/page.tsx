"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import plusToX from "react-useanimations/lib/plusToX";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    profile: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@company.com",
      role: "Legal Counsel",
      department: "Legal",
      phone: "+1 (555) 123-4567",
      timezone: "UTC-5 (Eastern Time)"
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      documentAnalysis: true,
      teamActivity: true,
      systemUpdates: false,
      weeklyDigest: true
    },
    preferences: {
      theme: "light",
      language: "en",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
      itemsPerPage: 10,
      autoSave: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90,
      loginAlerts: true
    }
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "billing", label: "Billing", icon: "💳" },
    { id: "integrations", label: "Integrations", icon: "🔗" }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSave = (section) => {
    // In a real app, this would make an API call
    console.log(`Saving ${section} settings:`, formData[section]);
    alert(`${section.charAt(0).toUpperCase() + section.slice(1)} settings saved!`);
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              value={formData.profile.firstName}
              onChange={(e) => handleInputChange("profile", "firstName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              value={formData.profile.lastName}
              onChange={(e) => handleInputChange("profile", "lastName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.profile.email}
              onChange={(e) => handleInputChange("profile", "email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={formData.profile.phone}
              onChange={(e) => handleInputChange("profile", "phone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <input
              type="text"
              value={formData.profile.role}
              onChange={(e) => handleInputChange("profile", "role", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select
              value={formData.profile.department}
              onChange={(e) => handleInputChange("profile", "department", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Legal">Legal</option>
              <option value="Compliance">Compliance</option>
              <option value="Operations">Operations</option>
              <option value="HR">HR</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              value={formData.profile.timezone}
              onChange={(e) => handleInputChange("profile", "timezone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
              <option value="UTC-6 (Central Time)">UTC-6 (Central Time)</option>
              <option value="UTC-7 (Mountain Time)">UTC-7 (Mountain Time)</option>
              <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("profile")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Profile
        </button>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h3>
        <div className="space-y-4">
          {Object.entries(formData.notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
                <p className="text-sm text-gray-600">
                  {key === "emailNotifications" && "Receive notifications via email"}
                  {key === "pushNotifications" && "Receive push notifications in browser"}
                  {key === "documentAnalysis" && "Get notified when document analysis completes"}
                  {key === "teamActivity" && "Get notified about team member activities"}
                  {key === "systemUpdates" && "Get notified about system updates and maintenance"}
                  {key === "weeklyDigest" && "Receive weekly summary of activities"}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => handleInputChange("notifications", key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("notifications")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Notifications
        </button>
      </div>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Appearance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
            <select
              value={formData.preferences.theme}
              onChange={(e) => handleInputChange("preferences", "theme", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
            <select
              value={formData.preferences.language}
              onChange={(e) => handleInputChange("preferences", "language", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Data & Formatting</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
            <select
              value={formData.preferences.dateFormat}
              onChange={(e) => handleInputChange("preferences", "dateFormat", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
            <select
              value={formData.preferences.timeFormat}
              onChange={(e) => handleInputChange("preferences", "timeFormat", e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="12h">12-hour (AM/PM)</option>
              <option value="24h">24-hour</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Items Per Page</label>
            <select
              value={formData.preferences.itemsPerPage}
              onChange={(e) => handleInputChange("preferences", "itemsPerPage", parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.preferences.autoSave}
                onChange={(e) => handleInputChange("preferences", "autoSave", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">Auto-save changes</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("preferences")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-900">Two-Factor Authentication</label>
              <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={formData.security.twoFactorAuth}
                onChange={(e) => handleInputChange("security", "twoFactorAuth", e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
            <select
              value={formData.security.sessionTimeout}
              onChange={(e) => handleInputChange("security", "sessionTimeout", parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
            <select
              value={formData.security.passwordExpiry}
              onChange={(e) => handleInputChange("security", "passwordExpiry", parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={30}>30 days</option>
              <option value={60}>60 days</option>
              <option value={90}>90 days</option>
              <option value={180}>180 days</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Password</h3>
        <div className="space-y-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Change Password
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handleSave("security")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Save Security Settings
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileTab();
      case "notifications":
        return renderNotificationsTab();
      case "preferences":
        return renderPreferencesTab();
      case "security":
        return renderSecurityTab();
      case "billing":
        return (
          <div className="text-center py-12">
            <UseAnimations animation={settings} size={48} strokeColor="#9ca3af" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Billing Settings</h3>
            <p className="mt-2 text-gray-600">Billing management coming soon.</p>
          </div>
        );
      case "integrations":
        return (
          <div className="text-center py-12">
            <UseAnimations animation={settings} size={48} strokeColor="#9ca3af" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Integrations</h3>
            <p className="mt-2 text-gray-600">Third-party integrations coming soon.</p>
          </div>
        );
      default:
        return renderProfileTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
              <p className="text-sm text-gray-600">Manage your account and application preferences</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <UseAnimations animation={settings} size={16} strokeColor="#9ca3af" />
                </div>
                <input
                  type="text"
                  placeholder="Search settings..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <UseAnimations animation={settings} />
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 flex">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-white border-r border-gray-200 p-6">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
