import { useState } from 'react';
import { updateLead, deleteLead } from '../api/leads';

const statuses = ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'];

const statusColors = {
  New: '#3b82f6',
  Contacted: '#f59e0b',
  Qualified: '#8b5cf6',
  Converted: '#10b981',
  Lost: '#ef4444',
};

const LeadTable = ({ leads, onRefresh }) => {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  const handleEdit = (lead) => {
    setEditId(lead._id);
    setEditData({ name: lead.name, email: lead.email, phone: lead.phone, company: lead.company, status: lead.status, notes: lead.notes });
  };

  const handleSave = async (id) => {
    await updateLead(id, editData);
    setEditId(null);
    onRefresh();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this lead?')) {
      await deleteLead(id);
      onRefresh();
    }
  };

  if (!leads.length) return <p className="no-data">No leads found.</p>;

  return (
    <div className="table-wrapper">
      <table className="lead-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Status</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              {editId === lead._id ? (
                <>
                  <td><input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /></td>
                  <td><input value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} /></td>
                  <td><input value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })} /></td>
                  <td><input value={editData.company} onChange={(e) => setEditData({ ...editData, company: e.target.value })} /></td>
                  <td>
                    <select value={editData.status} onChange={(e) => setEditData({ ...editData, status: e.target.value })}>
                      {statuses.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </td>
                  <td><input value={editData.notes} onChange={(e) => setEditData({ ...editData, notes: e.target.value })} /></td>
                  <td>
                    <button className="btn-save" onClick={() => handleSave(lead._id)}>Save</button>
                    <button className="btn-cancel" onClick={() => setEditId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.phone}</td>
                  <td>{lead.company}</td>
                  <td>
                    <span className="status-badge" style={{ background: statusColors[lead.status] }}>
                      {lead.status}
                    </span>
                  </td>
                  <td>{lead.notes || '—'}</td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(lead)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(lead._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;