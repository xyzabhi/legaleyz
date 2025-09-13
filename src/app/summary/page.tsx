"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import folder from "react-useanimations/lib/folder";
import { 
  DocumentIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  BookmarkIcon,
  ShareIcon,
  PrinterIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const documentData = {
  id: 1,
  name: "Employment_Contract.pdf",
  type: "Employment Agreement",
  status: "Under Review",
  lastModified: "2025-01-15T10:30:00Z",
  totalPages: 12,
  analyzedPages: [1, 2, 5, 7, 9, 11],
  size: "2.4 MB",
  version: "v2.1"
};

const clauses = [
  {
    id: 1,
    title: "Employment Terms",
    type: "Standard",
    risk: "Low",
    page: 2,
    summary: "Defines the basic employment relationship, start date, and probationary period.",
    keyPoints: [
      "3-month probationary period",
      "Full-time employment",
      "Start date: March 1, 2025"
    ],
    highlighted: true
  },
  {
    id: 2,
    title: "Compensation Package",
    type: "Financial",
    risk: "Medium",
    page: 4,
    summary: "Details salary, benefits, and compensation structure including bonuses and equity.",
    keyPoints: [
      "Base salary: $120,000 annually",
      "Performance bonus up to 20%",
      "Health insurance coverage",
      "401k matching up to 6%"
    ],
    highlighted: false
  },
  {
    id: 3,
    title: "Non-Compete Clause",
    type: "Restrictive",
    risk: "High",
    page: 7,
    summary: "Restricts employee from working with competitors for 12 months after termination.",
    keyPoints: [
      "12-month non-compete period",
      "Geographic restriction: 50 miles",
      "Applies to direct competitors",
      "Severance required for enforcement"
    ],
    highlighted: true
  },
  {
    id: 4,
    title: "Intellectual Property",
    type: "Legal",
    risk: "Medium",
    page: 9,
    summary: "Defines ownership of work products, inventions, and intellectual property created during employment.",
    keyPoints: [
      "Company owns all work products",
      "Employee assignment of inventions",
      "Confidentiality obligations",
      "Return of materials on termination"
    ],
    highlighted: false
  },
  {
    id: 5,
    title: "Termination Conditions",
    type: "Standard",
    risk: "Low",
    page: 11,
    summary: "Outlines conditions for termination by either party and notice requirements.",
    keyPoints: [
      "30-day notice for voluntary resignation",
      "Immediate termination for cause",
      "Severance package details",
      "COBRA continuation rights"
    ],
    highlighted: false
  }
];

const people = [
  {
    id: 1,
    name: "John Smith",
    role: "Legal Counsel",
    department: "Legal",
    involvement: "Primary Reviewer",
    lastActive: "2 hours ago",
    status: "online"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "HR Director",
    department: "Human Resources",
    involvement: "Stakeholder",
    lastActive: "1 day ago",
    status: "offline"
  },
  {
    id: 3,
    name: "Mike Wilson",
    role: "Senior Attorney",
    department: "Legal",
    involvement: "Secondary Reviewer",
    lastActive: "3 hours ago",
    status: "online"
  },
  {
    id: 4,
    name: "Lisa Brown",
    role: "Compliance Officer",
    department: "Compliance",
    involvement: "Approver",
    lastActive: "4 hours ago",
    status: "away"
  }
];

const costs = [
  {
    id: 1,
    category: "Legal Review",
    amount: 2500,
    currency: "USD",
    description: "Initial contract review and analysis",
    status: "Approved",
    date: "2025-01-10"
  },
  {
    id: 2,
    category: "Compliance Check",
    amount: 800,
    currency: "USD",
    description: "Regulatory compliance verification",
    status: "Pending",
    date: "2025-01-12"
  },
  {
    id: 3,
    category: "Risk Assessment",
    amount: 1200,
    currency: "USD",
    description: "Legal risk evaluation and mitigation",
    status: "Approved",
    date: "2025-01-14"
  }
];

const importantPoints = [
  {
    id: 1,
    type: "Risk",
    priority: "High",
    title: "Non-compete clause may be unenforceable",
    description: "The 12-month non-compete period exceeds state law limits in some jurisdictions.",
    action: "Review state-specific requirements",
    status: "Open"
  },
  {
    id: 2,
    type: "Cost",
    priority: "Medium",
    title: "Severance package requires board approval",
    description: "The proposed severance exceeds standard policy and needs board approval.",
    action: "Schedule board review meeting",
    status: "In Progress"
  },
  {
    id: 3,
    type: "Compliance",
    priority: "High",
    title: "Missing diversity clause",
    description: "Contract lacks required diversity and inclusion language per company policy.",
    action: "Add standard diversity clause",
    status: "Open"
  }
];

const getRiskColor = (risk) => {
  switch (risk) {
    case 'High': return 'text-red-600 bg-red-50 border-red-200';
    case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Low': return 'text-green-600 bg-green-50 border-green-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High': return 'text-red-600 bg-red-50';
    case 'Medium': return 'text-yellow-600 bg-yellow-50';
    case 'Low': return 'text-green-600 bg-green-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 'online': return 'bg-green-500';
    case 'away': return 'bg-yellow-500';
    case 'offline': return 'bg-gray-400';
    default: return 'bg-gray-400';
  }
};

const chatMessages = [
  {
    id: 1,
    type: "user",
    message: "What are the key risks in this contract?",
    timestamp: "2025-01-15T10:30:00Z",
    sender: "John Smith"
  },
  {
    id: 2,
    type: "ai",
    message: "Based on my analysis, the main risks are:\n\n1. **Non-compete clause** - The 12-month period may be unenforceable in some states\n2. **Severance package** - Exceeds standard policy and requires board approval\n3. **Missing diversity clause** - Required per company policy\n\nWould you like me to elaborate on any of these?",
    timestamp: "2025-01-15T10:31:00Z",
    sender: "AI Assistant"
  },
  {
    id: 3,
    type: "user",
    message: "Can you explain the compensation structure?",
    timestamp: "2025-01-15T10:35:00Z",
    sender: "John Smith"
  },
  {
    id: 4,
    type: "ai",
    message: "The compensation structure includes:\n\n• **Base Salary**: $120,000 annually\n• **Performance Bonus**: Up to 20% based on annual review\n• **Health Insurance**: Full coverage for employee and family\n• **401k Matching**: Up to 6% of salary\n• **Equity**: Stock options vesting over 4 years\n\nThis is competitive for the role and industry standards.",
    timestamp: "2025-01-15T10:36:00Z",
    sender: "AI Assistant"
  }
];

export default function DocumentSummary() {
  const [selectedClause, setSelectedClause] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI assistant for this document. I can help you understand clauses, find specific information, or answer questions about the Employment Agreement. What would you like to know?",
      timestamp: new Date()
    }
  ]);

  const filteredClauses = clauses.filter(clause =>
    clause.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    clause.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: chatInput,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setChatInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: "I'm analyzing your question about the document. Let me provide you with relevant information based on the contract clauses and data I have access to.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex h-full">
        {/* Document Viewer - Left Side */}
        <div className="flex-1 bg-white border-r border-gray-200 flex flex-col h-full">
          {/* Document Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <DocumentIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">{documentData.name}</h1>
                  <p className="text-sm text-gray-600">{documentData.type} • {documentData.totalPages} pages • {documentData.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <MagnifyingGlassIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <BookmarkIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <ShareIcon className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                  <PrinterIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Document Content Area */}
          <div className="flex-1 bg-gray-100 flex items-center justify-center overflow-y-auto">
            <div className="text-center p-6">
              <DocumentIcon className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Document Preview</h3>
              <p className="text-gray-600 mb-4">Click on a clause in the sidebar to view details</p>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 max-w-md">
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>Pages Analyzed:</strong> {documentData.analyzedPages.join(', ')}</p>
                  <p><strong>Status:</strong> {documentData.status}</p>
                  <p><strong>Version:</strong> {documentData.version}</p>
                  <p><strong>Last Modified:</strong> {new Date(documentData.lastModified).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Sidebar - Right Side */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="border-b border-gray-200 px-4 py-4 flex-shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Document Summary</h2>
              <UseAnimations animation={settings} size={20} strokeColor="#6b7280" />
            </div>
            
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search clauses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Clauses Section */}
            <div className="px-4 py-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <TagIcon className="w-4 h-4" />
                Key Clauses ({filteredClauses.length})
              </h3>
              <div className="space-y-3">
                {filteredClauses.map((clause) => (
                  <div
                    key={clause.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedClause?.id === clause.id
                        ? 'border-blue-300 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedClause(clause)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{clause.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskColor(clause.risk)}`}>
                          {clause.risk}
                        </span>
                        {clause.highlighted && (
                          <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{clause.summary}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Page {clause.page}</span>
                      <span className="capitalize">{clause.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* People Section */}
            <div className="px-4 py-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <UserGroupIcon className="w-4 h-4" />
                People Involved ({people.length})
              </h3>
              <div className="space-y-3">
                {people.map((person) => (
                  <div key={person.id} className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                        {person.name.charAt(0)}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(person.status)}`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{person.name}</p>
                      <p className="text-xs text-gray-600">{person.role} • {person.involvement}</p>
                      <p className="text-xs text-gray-500">Active {person.lastActive}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Costs Section */}
            <div className="px-4 py-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CurrencyDollarIcon className="w-4 h-4" />
                Associated Costs
              </h3>
              <div className="space-y-3">
                {costs.map((cost) => (
                  <div key={cost.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{cost.category}</p>
                      <p className="text-xs text-gray-600">{cost.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-900">${cost.amount.toLocaleString()}</p>
                      <p className={`text-xs px-2 py-1 rounded-full ${
                        cost.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {cost.status}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">Total</span>
                    <span className="text-sm font-bold text-gray-900">
                      ${costs.reduce((sum, cost) => sum + cost.amount, 0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Points Section */}
            <div className="px-4 py-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <ExclamationTriangleIcon className="w-4 h-4" />
                Important Points ({importantPoints.length})
              </h3>
              <div className="space-y-3">
                {importantPoints.map((point) => (
                  <div key={point.id} className="p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900">{point.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(point.priority)}`}>
                        {point.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{point.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600">{point.action}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        point.status === 'Open' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {point.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ChatGPT-like Chat Interface */}
      <div className={`fixed bottom-0 right-0 w-96 bg-white border-l border-t border-gray-200 shadow-2xl transition-transform duration-300 h-[500px] ${
        isChatOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">AI Document Assistant</h3>
              <p className="text-xs text-gray-600">Ask questions about this document</p>
            </div>
          </div>
          <button
            onClick={() => setIsChatOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.type === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-md' 
                  : 'bg-white text-gray-900 border border-gray-200 rounded-bl-md'
              }`}>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content || message.message}
                </div>
                <div className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about the document..."
              className="flex-1 px-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center z-50"
        >
          <ChatBubbleLeftRightIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}