"use client";

import { useState } from "react";
import DocumentListItem from "@/components/DocumentListItem";
import Sidebar from "@/components/Sidebar";
import Pagination from "@/components/Pagination";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";

const documents = [
  {
    name: "Employment_Contract.pdf",
    description: "Contract for full-time software engineer role.",
    documentType: "Contract",
    format: "PDF",
    tags: ["employment", "contract"],
    totalPages: 12,
    pagesAnalyzed: [1, 2, 5, 7],
    analyzedOn: "2025-09-14T12:30:00Z",
    people: ["Ravi Kumar", "Anjali Sharma", "Siddharth Mehta"]
  },
  {
    name: "NDA_Client_X.docx",
    description: "Non-disclosure agreement with Client X.",
    documentType: "NDA",
    format: "DOCX",
    tags: ["nda", "confidentiality", "client"],
    totalPages: 5,
    pagesAnalyzed: [1, 3],
    analyzedOn: "2025-09-10T09:15:00Z",
    people: ["Arjun Verma", "Priya Iyer"]
  },
  {
    name: "Lease_Agreement.pdf",
    description: "Office space lease agreement.",
    documentType: "Lease Agreement",
    format: "PDF",
    tags: ["lease", "property", "agreement"],
    totalPages: 20,
    pagesAnalyzed: [2, 4, 6, 10],
    analyzedOn: "2025-09-01T17:45:00Z",
    people: ["Manoj Gupta", "Neha Reddy", "Vikram Malhotra"]
  },
  {
    name: "Vendor_Contract.docx",
    description: "Contract with IT hardware vendor.",
    documentType: "Vendor Contract",
    format: "DOCX",
    tags: ["vendor", "supply", "contract"],
    totalPages: 15,
    pagesAnalyzed: [1, 8, 12],
    analyzedOn: "2025-08-28T14:20:00Z",
    people: ["Deepak Singh", "Kavya Nair"]
  },
  {
    name: "Service_Agreement.pdf",
    description: "Service level agreement with cloud provider.",
    documentType: "SLA",
    format: "PDF",
    tags: ["sla", "service", "cloud"],
    totalPages: 8,
    pagesAnalyzed: [1, 3, 5],
    analyzedOn: "2025-08-20T11:10:00Z",
    people: ["Rajesh Patel", "Sunita Desai"]
  },
  {
    name: "Partnership_Deal.docx",
    description: "Strategic partnership agreement.",
    documentType: "Partnership",
    format: "DOCX",
    tags: ["partnership", "strategic", "business"],
    totalPages: 25,
    pagesAnalyzed: [1, 5, 10, 15, 20],
    analyzedOn: "2025-08-15T16:30:00Z",
    people: ["Amit Kumar", "Shruti Jain", "Rohit Sharma", "Pooja Gupta"]
  },
  {
    name: "Privacy_Policy.pdf",
    description: "Updated privacy policy document.",
    documentType: "Policy",
    format: "PDF",
    tags: ["privacy", "policy", "compliance"],
    totalPages: 6,
    pagesAnalyzed: [1, 2, 4],
    analyzedOn: "2025-08-10T13:45:00Z",
    people: ["Legal Team", "Compliance Officer"]
  },
  {
    name: "Terms_of_Service.docx",
    description: "Terms of service for the platform.",
    documentType: "Terms",
    format: "DOCX",
    tags: ["terms", "service", "legal"],
    totalPages: 10,
    pagesAnalyzed: [1, 3, 7],
    analyzedOn: "2025-08-05T10:15:00Z",
    people: ["Legal Team"]
  },
  {
    name: "Investment_Agreement.pdf",
    description: "Series A investment agreement.",
    documentType: "Investment",
    format: "PDF",
    tags: ["investment", "funding", "series-a"],
    totalPages: 30,
    pagesAnalyzed: [1, 5, 10, 15, 20, 25],
    analyzedOn: "2025-07-28T09:00:00Z",
    people: ["CEO", "CFO", "Legal Team", "Investors"]
  },
  {
    name: "Employment_Handbook.docx",
    description: "Company employee handbook and policies.",
    documentType: "Handbook",
    format: "DOCX",
    tags: ["handbook", "hr", "policies"],
    totalPages: 40,
    pagesAnalyzed: [1, 5, 10, 15, 20, 25, 30, 35],
    analyzedOn: "2025-07-20T14:30:00Z",
    people: ["HR Team", "Legal Team"]
  },
  {
    name: "Software_License.pdf",
    description: "Software licensing agreement.",
    documentType: "License",
    format: "PDF",
    tags: ["software", "license", "technology"],
    totalPages: 12,
    pagesAnalyzed: [1, 4, 8],
    analyzedOn: "2025-07-15T16:45:00Z",
    people: ["CTO", "Legal Team"]
  },
  {
    name: "Insurance_Policy.docx",
    description: "Corporate insurance policy document.",
    documentType: "Insurance",
    format: "DOCX",
    tags: ["insurance", "corporate", "coverage"],
    totalPages: 18,
    pagesAnalyzed: [1, 6, 12, 15],
    analyzedOn: "2025-07-10T11:20:00Z",
    people: ["Finance Team", "Insurance Broker"]
  }
];

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(documents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = documents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Here's what's happening with your documents.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <UseAnimations animation={settings} size={16} strokeColor="#9ca3af" />
                </div>
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <UseAnimations animation={settings} />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Documents</p>
                  <p className="text-2xl font-bold text-gray-900">{documents.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={settings} size={24} strokeColor="#3b82f6" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Analyzed Today</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={settings} size={24} strokeColor="#10b981" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold text-gray-900">7</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={settings} size={24} strokeColor="#f59e0b" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Team Members</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UseAnimations animation={settings} size={24} strokeColor="#8b5cf6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mx-6 mb-6">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
              <p className="text-sm text-gray-600">Showing {startIndex + 1}-{Math.min(endIndex, documents.length)} of {documents.length} documents</p>
            </div>
            <div className="max-h-[calc(100vh-500px)] overflow-y-auto overflow-x-auto">
              <div className="min-w-max">
                <div className="divide-y divide-gray-200">
                  {currentDocuments.map((document) => (
                    <DocumentListItem key={document.name+Math.random()} document={document} />
                  ))}
                </div>
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={documents.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
