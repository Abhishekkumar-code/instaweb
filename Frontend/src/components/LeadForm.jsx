import { useState } from 'react';
import { createLead } from '../api/leads';
import { useNavigate } from 'react-router-dom';

const statuses = ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'];

const LeadForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', status: 'New', notes: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await createLead(form);
    if (res.message) return setError(res.message);
    navigate('/');
  };

  return (
    <div className="form-container">
      <h2>Add New Lead</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input name="company" value={form.company} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            {statuses.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Add Lead</button>
          <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;