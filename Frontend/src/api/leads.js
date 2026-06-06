const BASE = 'http://localhost:3000/api/leads';

export const getLeads = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}?${query}`);
  return res.json();
};

export const getStats = async () => {
  const res = await fetch(`${BASE}/stats`);
  return res.json();
};

export const createLead = async (data) => {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateLead = async (id, data) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteLead = async (id) => {
  const res = await fetch(`${BASE}/${id}`, { method: 'DELETE' });
  return res.json();
};