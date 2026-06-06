import { useNavigate } from 'react-router-dom';
import { createLead } from '../api/leads';
import LeadForm from '../components/LeadForm';

function AddLead() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await createLead(data);
    if (res._id) navigate('/');
    else alert(res.message || 'Something went wrong');
  };

  return (
    <div className="page">
      <h1>Add New Lead</h1>
      <LeadForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddLead;