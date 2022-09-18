import { useEffect, useState } from 'react';

export default function InternetAvailabilityObserver() {
  const [isOnline, setOnline] = useState(false);

  useEffect(() => {
    setOnline(navigator.onLine);

    window.addEventListener('online', () => setOnline(true));
    window.addEventListener('offline', () => setOnline(false));
    return () => {
      window.removeEventListener('online', () => setOnline(true));
      window.removeEventListener('offline', () => setOnline(false));
    };
  }, []);

  return (
    <>
      <h1>Internet Availability Observer</h1>
      <p>
        {isOnline ? (
          <>
            <span>
              You are <b>online</b>
            </span>
          </>
        ) : (
          <>
            <span>
              You are <b>offline</b>
            </span>
          </>
        )}
      </p>
    </>
  );
}
