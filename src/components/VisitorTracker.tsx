
import { useEffect, useState } from 'react';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  pathname: string;
  sessionId: string;
}

const VisitorTracker = () => {
  const [visitorData, setVisitorData] = useState<VisitorData | null>(null);

  useEffect(() => {
    // Generate a simple session ID (in production, use a proper UUID library)
    const generateSessionId = () => {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    // Get or create session ID
    let sessionId = localStorage.getItem('visitor_session_id');
    if (!sessionId) {
      sessionId = generateSessionId();
      localStorage.setItem('visitor_session_id', sessionId);
    }

    const visitor: VisitorData = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      pathname: window.location.pathname,
      sessionId
    };

    setVisitorData(visitor);

    // Store visitor data locally for now (will be sent to backend later)
    const existingVisitors = JSON.parse(localStorage.getItem('visitor_logs') || '[]');
    existingVisitors.push(visitor);
    localStorage.setItem('visitor_logs', JSON.stringify(existingVisitors));

    console.log('Visitor tracked:', visitor);

    // TODO: When backend is ready, send this data to your API
    // Example:
    // fetch('/api/track-visitor', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(visitor)
    // });

  }, []);

  // This component doesn't render anything visible
  return null;
};

export default VisitorTracker;
