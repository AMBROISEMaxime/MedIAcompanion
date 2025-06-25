import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { TranscriptionArea } from './components/TranscriptionArea';
import { RightPanel } from './components/RightPanel';
import { Footer } from './components/Footer';

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('fr-FR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="min-h-screen flex flex-col">
        <Header currentTime={currentTime} />
        
        <main className="flex-1 flex">
          <Sidebar />
          <TranscriptionArea />
          <RightPanel />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;