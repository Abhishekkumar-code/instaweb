import { useEffect, useState } from 'react';
import { getLeads } from '../api/leads';
import Stats from '../components/Stats';
import SearchBar from '../components/SearcBar';
import LeadTable from '../components/LeadTable';

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  const fetchLeads = async () => {
    const params = { page, limit: 10 };
    if (search) params.search = search;
    if (status) params.status = status;
    const data = await getLeads(params);
    setLeads(data.leads || []);
    setTotal(data.total || 0);
  };

  useEffect(() => {
    fetchLeads();
  }, [search, status, page]);

  const totalPages = Math.ceil(total / 10);

  return (
    <div className="page">
      <h1>Lead Dashboard</h1>
      <Stats />

      <div className="section">
        <SearchBar search={search} onSearch={setSearch} status={status} onStatus={setStatus} />
        <LeadTable leads={leads} onRefresh={fetchLeads} />

        {totalPages > 1 && (
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
            <span>{page} / {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;