import { useEffect, useState } from 'react';
import { getStats } from '../api/leads';

const Stats = () => {
  const [stats, setStats] = useState({ total: 0, stats: [] });

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  const statusColors = {
    New: '#3b82f6',
    Contacted: '#f59e0b',
    Qualified: '#8b5cf6',
    Converted: '#10b981',
    Lost: '#ef4444',
  };

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-number">{stats.total}</span>
        <span className="stat-label">Total Leads</span>
      </div>
      {stats.stats && stats.stats.map((s) => (
        <div className="stat-card" key={s._id} style={{ borderTop: `3px solid ${statusColors[s._id] || '#ccc'}` }}>
          <span className="stat-number">{s.count}</span>
          <span className="stat-label">{s._id}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;