"use client";

import { useState, useMemo } from "react";
import DocumentListItem from "@/components/DocumentListItem";
import Sidebar from "@/components/Sidebar";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import searchToX from "react-useanimations/lib/searchToX";

const allDocuments = [
  {
    name: "Employment_Contract.pdf",
    description: "Contract for full-time software engineer role with detailed terms and conditions.",
    documentType: "Contract",
    format: "PDF",
    tags: ["employment", "contract", "hr", "legal"],
    totalPages: 12,
    pagesAnalyzed: [1, 2, 5, 7],
    analyzedOn: "2025-09-14T12:30:00Z",
    people: ["Ravi Kumar", "Anjali Sharma", "Siddharth Mehta"]
  },
  {
    name: "NDA_Client_X.docx",
    description: "Non-disclosure agreement with Client X for confidential information protection.",
    documentType: "NDA",
    format: "DOCX",
    tags: ["nda", "confidentiality", "client", "legal"],
    totalPages: 5,
    pagesAnalyzed: [1, 3],
    analyzedOn: "2025-09-10T09:15:00Z",
    people: ["Arjun Verma", "Priya Iyer"]
  },
  {
    name: "Lease_Agreement.pdf",
    description: "Office space lease agreement with property management company.",
    documentType: "Lease Agreement",
    format: "PDF",
    tags: ["lease", "property", "agreement", "real-estate"],
    totalPages: 20,
    pagesAnalyzed: [2, 4, 6, 10],
    analyzedOn: "2025-09-01T17:45:00Z",
    people: ["Manoj Gupta", "Neha Reddy", "Vikram Malhotra"]
  },
  {
    name: "Vendor_Contract.docx",
    description: "Contract with IT hardware vendor for equipment supply and maintenance.",
    documentType: "Vendor Contract",
    format: "DOCX",
    tags: ["vendor", "supply", "contract", "it"],
    totalPages: 15,
    pagesAnalyzed: [1, 8, 12],
    analyzedOn: "2025-08-28T14:20:00Z",
    people: ["Deepak Singh", "Kavya Nair"]
  },
  {
    name: "Service_Agreement.pdf",
    description: "Service level agreement with cloud provider for hosting services.",
    documentType: "SLA",
    format: "PDF",
    tags: ["sla", "service", "cloud", "hosting"],
    totalPages: 8,
    pagesAnalyzed: [1, 3, 5],
    analyzedOn: "2025-08-20T11:10:00Z",
    people: ["Rajesh Patel", "Sunita Desai"]
  },
  {
    name: "Partnership_Deal.docx",
    description: "Strategic partnership agreement with technology company.",
    documentType: "Partnership",
    format: "DOCX",
    tags: ["partnership", "strategic", "business", "technology"],
    totalPages: 25,
    pagesAnalyzed: [1, 5, 10, 15, 20],
    analyzedOn: "2025-08-15T16:30:00Z",
    people: ["Amit Kumar", "Shruti Jain", "Rohit Sharma", "Pooja Gupta"]
  },
  {
    name: "Privacy_Policy.pdf",
    description: "Updated privacy policy document for user data protection.",
    documentType: "Policy",
    format: "PDF",
    tags: ["privacy", "policy", "compliance", "gdpr"],
    totalPages: 6,
    pagesAnalyzed: [1, 2, 4],
    analyzedOn: "2025-08-10T13:45:00Z",
    people: ["Legal Team", "Compliance Officer"]
  },
  {
    name: "Terms_of_Service.docx",
    description: "Terms of service for the platform and user agreements.",
    documentType: "Terms",
    format: "DOCX",
    tags: ["terms", "service", "legal", "platform"],
    totalPages: 10,
    pagesAnalyzed: [1, 3, 7],
    analyzedOn: "2025-08-05T10:15:00Z",
    people: ["Legal Team"]
  },
  {
    name: "Investment_Agreement.pdf",
    description: "Series A investment agreement with venture capital firm.",
    documentType: "Investment",
    format: "PDF",
    tags: ["investment", "funding", "series-a", "venture-capital"],
    totalPages: 30,
    pagesAnalyzed: [1, 5, 10, 15, 20, 25],
    analyzedOn: "2025-07-28T09:00:00Z",
    people: ["CEO", "CFO", "Legal Team", "Investors"]
  },
  {
    name: "Employment_Handbook.docx",
    description: "Company employee handbook and HR policies documentation.",
    documentType: "Handbook",
    format: "DOCX",
    tags: ["handbook", "hr", "policies", "employee"],
    totalPages: 40,
    pagesAnalyzed: [1, 5, 10, 15, 20, 25, 30, 35],
    analyzedOn: "2025-07-20T14:30:00Z",
    people: ["HR Team", "Legal Team"]
  }
];

const searchFilters = [
  { value: "all", label: "All Documents" },
  { value: "pdf", label: "PDF Files" },
  { value: "docx", label: "Word Documents" },
  { value: "contract", label: "Contracts" },
  { value: "nda", label: "NDAs" },
  { value: "policy", label: "Policies" }
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const filteredDocuments = useMemo(() => {
    let filtered = allDocuments;

    // Apply format filter
    if (selectedFilter !== "all") {
      if (selectedFilter === "pdf") {
        filtered = filtered.filter(doc => doc.format === "PDF");
      } else if (selectedFilter === "docx") {
        filtered = filtered.filter(doc => doc.format === "DOCX");
      } else if (selectedFilter === "contract") {
        filtered = filtered.filter(doc => doc.documentType.toLowerCase().includes("contract"));
      } else if (selectedFilter === "nda") {
        filtered = filtered.filter(doc => doc.documentType === "NDA");
      } else if (selectedFilter === "policy") {
        filtered = filtered.filter(doc => doc.documentType.toLowerCase().includes("policy"));
      }
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(query) ||
        doc.description.toLowerCase().includes(query) ||
        doc.documentType.toLowerCase().includes(query) ||
        doc.tags.some(tag => tag.toLowerCase().includes(query)) ||
        doc.people.some(person => person.toLowerCase().includes(query))
      );
    }

    // Apply sorting
    if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "date") {
      filtered.sort((a, b) => new Date(b.analyzedOn) - new Date(a.analyzedOn));
    } else if (sortBy === "type") {
      filtered.sort((a, b) => a.documentType.localeCompare(b.documentType));
    }

    return filtered;
  }, [searchQuery, selectedFilter, sortBy]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search is handled by the filteredDocuments useMemo
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Search Documents</h1>
              <p className="text-sm text-gray-600">Find documents by name, content, or tags</p>
            </div>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-6">
          <form onSubmit={handleSearch} className="max-w-4xl">
            <div className="relative">
              <UseAnimations 
                animation={searchToX} 
                size={24} 
                strokeColor="#9ca3af" 
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Search documents, tags, people, or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {searchFilters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === filter.value
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="relevance">Relevance</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex-1 px-6 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Search Results ({filteredDocuments.length})
                </h2>
                {searchQuery && (
                  <p className="text-sm text-gray-600">
                    Results for "{searchQuery}"
                  </p>
                )}
              </div>
            </div>
            
            <div className="max-h-[calc(100vh-400px)] overflow-y-auto">
              {filteredDocuments.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {filteredDocuments.map((document) => (
                    <DocumentListItem key={document.name+Math.random()} document={document} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <UseAnimations animation={searchToX} size={48} strokeColor="#9ca3af" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No documents found</h3>
                  <p className="mt-2 text-gray-600">
                    {searchQuery 
                      ? `No documents match your search for "${searchQuery}"`
                      : "Try adjusting your search criteria or filters."
                    }
                  </p>
                  {searchQuery && (
                    <div className="mt-4">
                      <button
                        onClick={() => setSearchQuery("")}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Clear Search
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
