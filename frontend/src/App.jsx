import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("Unavailable"));
  }, []);

  return (
    <main className="app">
      <p className="eyebrow">DevOps Practice</p>
      <h1>Frontend is ready</h1>
      <p className="description">
        The React app and Express backend run independently.
      </p>
      <div className="status">
        <span className="status-label">Backend</span>
        <span className="status-value">{backendStatus}</span>
      </div>
      <p className="hint">
        Start the backend on port 3000 to connect this app.
      </p>
    </main>
  );
}

export default App;
