import { useState } from 'react';
import axios from 'axios';
import './AdminPage.css';

function AdminPage() {
  const [batch, setBatch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const batchOptions = ['18', '19', '20', '21', '22'];

  const handleSaveBatch = async () => {
    if (!batch || !startDate) {
      setErrorMessage('Please select batch and start date.');
      return; 
    }

    try {
      await axios.post('http://localhost:3001/batches', {
        batch: batch,
        startDate: startDate
      });

      setBatch('');
      setStartDate('');
      setErrorMessage('');
      setSuccessMessage('Batch saved successfully.');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error saving batch:', error);
      setErrorMessage('Error saving batch. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Admin Page</h1>
      <div className="input-container">
        <select value={batch} onChange={(e) => setBatch(e.target.value)}>
          <option value="">Select Batch</option>
          {batchOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="button-container">
        <button onClick={handleSaveBatch}>Save Batch</button>
      </div>
    </div>
  );
}

export default AdminPage;
