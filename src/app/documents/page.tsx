"use client";

import { useState, useMemo } from "react";
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
    analyzedOn: "2025-08-29T11:10:00Z",
    people: ["Pooja Nair", "Karan Bhatia"]
  },
  {
    name: "Service_Agreement.pdf",
    description: "Agreement for managed cloud services.",
    documentType: "Service Agreement",
    format: "PDF",
    tags: ["services", "cloud", "agreement"],
    totalPages: 18,
    pagesAnalyzed: [3, 6, 9, 14],
    analyzedOn: "2025-08-20T16:00:00Z",
    people: ["Rahul Singh", "Sneha Kapoor"]
  },
  {
    name: "Policy_Document.docx",
    description: "Company HR policy handbook.",
    documentType: "Policy",
    format: "DOCX",
    tags: ["policy", "hr", "compliance"],
    totalPages: 30,
    pagesAnalyzed: [5, 10, 15, 20, 25],
    analyzedOn: "2025-08-15T13:30:00Z",
    people: ["Meena Joshi", "Amit Sharma"]
  },
  {
    name: "Partnership_Agreement.pdf",
    description: "Business partnership terms with XYZ Pvt Ltd.",
    documentType: "Partnership Agreement",
    format: "PDF",
    tags: ["partnership", "business", "agreement"],
    totalPages: 22,
    pagesAnalyzed: [2, 11, 20],
    analyzedOn: "2025-08-10T10:05:00Z",
    people: ["Rajesh Khanna", "Divya Menon", "Suresh Rao"]
  },
  {
    name: "IPR_Agreement.pdf",
    description: "Intellectual property rights assignment document.",
    documentType: "IPR Agreement",
    format: "PDF",
    tags: ["ipr", "legal", "assignment"],
    totalPages: 10,
    pagesAnalyzed: [1, 4, 7, 9],
    analyzedOn: "2025-08-05T09:00:00Z",
    people: ["Alok Jain", "Ritika Desai"]
  },
  {
    name: "Loan_Agreement.docx",
    description: "Loan terms with national bank.",
    documentType: "Loan Agreement",
    format: "DOCX",
    tags: ["loan", "finance", "bank"],
    totalPages: 25,
    pagesAnalyzed: [2, 5, 12, 18, 22],
    analyzedOn: "2025-07-28T15:45:00Z",
    people: ["Gaurav Patil", "Komal Yadav"]
  },
  {
    name: "Acquisition_Agreement.pdf",
    description: "M&A acquisition contract with ABC Ltd.",
    documentType: "Acquisition Agreement",
    format: "PDF",
    tags: ["acquisition", "merger", "contract"],
    totalPages: 40,
    pagesAnalyzed: [3, 10, 18, 25, 35],
    analyzedOn: "2025-07-20T19:20:00Z",
    people: ["Nikhil Choudhary", "Shweta Pillai", "Irfan Khan"]
  },
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
    analyzedOn: "2025-08-29T11:10:00Z",
    people: ["Pooja Nair", "Karan Bhatia"]
  },
  {
    name: "Service_Agreement.pdf",
    description: "Agreement for managed cloud services.",
    documentType: "Service Agreement",
    format: "PDF",
    tags: ["services", "cloud", "agreement"],
    totalPages: 18,
    pagesAnalyzed: [3, 6, 9, 14],
    analyzedOn: "2025-08-20T16:00:00Z",
    people: ["Rahul Singh", "Sneha Kapoor"]
  },
  {
    name: "Policy_Document.docx",
    description: "Company HR policy handbook.",
    documentType: "Policy",
    format: "DOCX",
    tags: ["policy", "hr", "compliance"],
    totalPages: 30,
    pagesAnalyzed: [5, 10, 15, 20, 25],
    analyzedOn: "2025-08-15T13:30:00Z",
    people: ["Meena Joshi", "Amit Sharma"]
  },
  {
    name: "Partnership_Agreement.pdf",
    description: "Business partnership terms with XYZ Pvt Ltd.",
    documentType: "Partnership Agreement",
    format: "PDF",
    tags: ["partnership", "business", "agreement"],
    totalPages: 22,
    pagesAnalyzed: [2, 11, 20],
    analyzedOn: "2025-08-10T10:05:00Z",
    people: ["Rajesh Khanna", "Divya Menon", "Suresh Rao"]
  },
  {
    name: "IPR_Agreement.pdf",
    description: "Intellectual property rights assignment document.",
    documentType: "IPR Agreement",
    format: "PDF",
    tags: ["ipr", "legal", "assignment"],
    totalPages: 10,
    pagesAnalyzed: [1, 4, 7, 9],
    analyzedOn: "2025-08-05T09:00:00Z",
    people: ["Alok Jain", "Ritika Desai"]
  },
  {
    name: "Loan_Agreement.docx",
    description: "Loan terms with national bank.",
    documentType: "Loan Agreement",
    format: "DOCX",
    tags: ["loan", "finance", "bank"],
    totalPages: 25,
    pagesAnalyzed: [2, 5, 12, 18, 22],
    analyzedOn: "2025-07-28T15:45:00Z",
    people: ["Gaurav Patil", "Komal Yadav"]
  },
  {
    name: "Acquisition_Agreement.pdf",
    description: "M&A acquisition contract with ABC Ltd.",
    documentType: "Acquisition Agreement",
    format: "PDF",
    tags: ["acquisition", "merger", "contract"],
    totalPages: 40,
    pagesAnalyzed: [3, 10, 18, 25, 35],
    analyzedOn: "2025-07-20T19:20:00Z",
    people: ["Nikhil Choudhary", "Shweta Pillai", "Irfan Khan"]
  }
];



export default function Documents() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const itemsPerPage = 10;

  // Calculate pagination
  const totalPages = Math.ceil(documents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDocuments = documents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} 
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
              <p className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, documents.length)} of {documents.length} documents
              </p>
            </div>
            <div className="flex items-center gap-4">
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-6">
          {/* Documents List */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto overflow-x-auto">
              <div className="min-w-max">
                <div className="divide-y divide-gray-200">
                  {currentDocuments.map((document) => (
                    <DocumentListItem key={document.name+Math.random()} document={document} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Pagination */}
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