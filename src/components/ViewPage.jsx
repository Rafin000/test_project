import { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewPage.css';
import routineData from '../RoutineData'; // Import routine data

export default function ViewPage() {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    fetchBatches();
  }, []);

  const fetchBatches = async () => {
    try {
      const response = await axios.get('http://localhost:3001/batches');
      setBatches(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
    }
  };

  const getWeekNumber = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const weeksElapsed = Math.floor((today - start) / (7 * 24 * 60 * 60 * 1000));
    return weeksElapsed + 1;
  };

  const getCurrentClass = (batch, currentTime) => {
    const dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    const time = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (routineData && routineData[batch] && routineData[batch][dayOfWeek]) {
      const routines = routineData[batch][dayOfWeek];
      const currentRoutine = routines.find(routine => {
        const routineStart = new Date(`2000-01-01T${routine.start}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const routineEnd = new Date(`2000-01-01T${routine.end}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        return time >= routineStart && time < routineEnd;
      });
      return currentRoutine ? currentRoutine.class : 'No class';
    } else {
      return 'No class';
    }
  };

  const currentDateTime = new Date();


  return (
    <div className="container">
      <h1 className="header">View Page</h1>
      <div className="card-container">
        {batches.map((batch) => (
          <div key={batch.id} className="card">
            <div className="card-header">{batch.batch} Batch</div>
            <div className="card-body">
              <div className='card-starting-date'>
                Starting Date: {batch.start_date}
              </div>
              <div className='card-week'>
                Week Number: {getWeekNumber(batch.start_date)}
              </div>
              <div className="card-routine">
                <h3>Live Class:</h3>
                <p className="live-class">{getCurrentClass(batch.batch, currentDateTime)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
