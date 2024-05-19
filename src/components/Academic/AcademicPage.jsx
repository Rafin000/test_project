import { useState, useEffect } from 'react';
import axios from 'axios';
import './AcademicPage.css';
import routineData from '../../RoutineData'; // Import routine data

export default function AcademicPage() {
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
    <div className="academic-container">
      <h1 className="academic-header">Academic Routine</h1>
      <div className="schedule-container">
        {batches.map((batch) => (
          <div key={batch.id} className="schedule-column gradient-border">
            <div className="box">
              <h3 className='live-class'>Starting Date</h3>
              <p>{batch.start_date}</p>
            </div>
            <div className="box">
              <h3 className='live-class'>Current Week</h3>
              <p className="current-week">{getWeekNumber(batch.start_date)}</p>
            </div>
            <div className="box" style={{ backgroundColor: '#fdecea' }}>
              <h3 className='live-class'>Live Item</h3>
              <p className="live-class-content">{getCurrentClass(batch.batch, currentDateTime)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
