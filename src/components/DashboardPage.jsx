import React, { useState, useMemo } from "react";
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { LuArrowDownUp, LuArrowUp, LuArrowDown } from "react-icons/lu";
import { FiEye, FiEdit, FiTrash2, FiMoreVertical } from "react-icons/fi";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const DashboardPage = ({ getMsg = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [selectedRows, setSelectedRows] = useState(new Set());

    // Filter and search data
    const filteredData = useMemo(() => {
        return getMsg.filter(item => 
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.organizationName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.id?.toString().includes(searchTerm)
        );
    }, [getMsg, searchTerm]);

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortField) return filteredData;
        
        return [...filteredData].sort((a, b) => {
            const aValue = a[sortField] || "";
            const bValue = b[sortField] || "";
            
            if (sortDirection === "asc") {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }, [filteredData, sortField, sortDirection]);

    // Paginate data
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const handleSelectAll = (checked) => {
        if (checked) {
            setSelectedRows(new Set(paginatedData.map(item => item.id)));
        } else {
            setSelectedRows(new Set());
        }
    };

    const handleSelectRow = (id, checked) => {
        const newSelected = new Set(selectedRows);
        if (checked) {
            newSelected.add(id);
        } else {
            newSelected.delete(id);
        }
        setSelectedRows(newSelected);
    };

    const getSortIcon = (field) => {
        if (sortField !== field) return <LuArrowDownUp className="sort-icon" />;
        return sortDirection === "asc" ? 
            <LuArrowUp className="sort-icon" /> : 
            <LuArrowDown className="sort-icon" />;
    };

    return (
        <div className="dashboard-page">
            {/* Enhanced Toolbar */}
            <div className="toolbar">
                <div className="search">
                    <span className="icon">
                        <IoMdSearch />
                    </span>
                    <input 
                        type="text" 
                        placeholder="Search by name, email, organization, or message..." 
                        aria-label="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="toolbar-actions">
                    <button type="button" className="btn" aria-label="Filter">
                        <CiFilter className="icon" />
                        Filter
                    </button>
                    <div className="results-info">
                    <button type="button" className="btn" aria-label="Sort">
                        <LuArrowDownUp className="icon" />
                        Sort
                    </button>
                    </div>
                </div>
            </div>

            {/* Professional Table */}
            <div className="table-container">
                <div className="table-header">
                    <div className="table-title">
                        <h2>Contact Requests</h2>
                        <span className="record-count">{getMsg.length} total records</span>
                    </div>
                    <div className="table-actions">
                        {selectedRows.size > 0 && (
                            <button className="btn-danger">
                                Delete Selected ({selectedRows.size})
                            </button>
                        )}
                    </div>
                </div>

                <div className="table-wrapper">
                    <table className="professional-table">
                        <thead>
                            <tr>
                                <th className="checkbox-column">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedRows.size === paginatedData.length && paginatedData.length > 0}
                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                    />
                                </th>
                                <th 
                                    className="sortable" 
                                    onClick={() => handleSort('id')}
                                >
                                    Reference ID
                                    {getSortIcon('id')}
                                </th>
                                <th 
                                    className="sortable" 
                                    onClick={() => handleSort('name')}
                                >
                                    Customer Name
                                    {getSortIcon('name')}
                                </th>
                                <th 
                                    className="sortable" 
                                    onClick={() => handleSort('organizationName')}
                                >
                                    Organizer Name
                                    {getSortIcon('organizationName')}
                                </th>
                                <th 
                                    className="sortable" 
                                    onClick={() => handleSort('email')}
                                >
                                    Email
                                    {getSortIcon('email')}
                                </th>
                                <th>Request Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((item, index) => (
                                    <tr key={item.id || index} className={selectedRows.has(item.id) ? 'selected' : ''}>
                                        <td className="checkbox-column">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedRows.has(item.id)}
                                                onChange={(e) => handleSelectRow(item.id, e.target.checked)}
                                            />
                                        </td>
                                        <td className="reference-id">
                                            <span className="id-badge">{((currentPage - 1) * itemsPerPage) + index + 1}</span>
                                        </td>
                                        <td className="customer-name">
                                            <div className="name-container">
                                                <span className="name">{item.name || 'N/A'}</span>
                                            </div>
                                        </td>
                                        <td className="organizer-name">
                                            <span>{item.organizationName || 'N/A'}</span>
                                        </td>
                                        <td className="email">
                                            <a href={`mailto:${item.email}`} className="email-link">
                                                {item.email || 'N/A'}
                                            </a>
                                        </td>
                                        <td className="message">
                                            <div className="message-preview">
                                                {item.message ? 
                                                    (item.message.length > 50 ? 
                                                        `${item.message.substring(0, 50)}...` : 
                                                        item.message
                                                    ) : 'N/A'
                                                }
                                            </div>
                                        </td>
                                        <td className="actions">
                                            <div className="action-buttons">
                                                <button 
                                                    className="action-btn view-btn" 
                                                    title="View Details"
                                                >
                                                    <FiEye />
                                                </button>
                                                <button 
                                                    className="action-btn edit-btn" 
                                                    title="Edit"
                                                >
                                                    <FiEdit />
                                                </button>
                                                <button 
                                                    className="action-btn delete-btn" 
                                                    title="Delete"
                                                >
                                                    <FiTrash2 />
                                                </button>
                                                <button 
                                                    className="action-btn more-btn" 
                                                    title="More Options"
                                                >
                                                    <FiMoreVertical />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="no-data">
                                    <td colSpan="7" className="no-data-cell">
                                        <div className="no-data-content">
                                            <div className="no-data-icon">📋</div>
                                            <h3>No records found</h3>
                                            <p>Try adjusting your search criteria or check back later.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button 
                            className="pagination-btn"
                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                        >
                            <HiOutlineChevronLeft />
                            Previous
                        </button>
                        
                        <div className="pagination-info">
                            Page {currentPage} of {totalPages}
                        </div>
                        
                        <button 
                            className="pagination-btn"
                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                            <HiOutlineChevronRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardPage;
