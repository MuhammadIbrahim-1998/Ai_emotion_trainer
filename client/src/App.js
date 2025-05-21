import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleAnalyze = async () => {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    setSentiment(data.sentiment);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🧠 Emotional Intelligence Trainer</h1>
        <p style={styles.subtitle}>Help our animal friends express their feelings!</p>

        <textarea
          style={styles.textarea}
          rows={4}
          cols={50}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type what the character might be feeling..."
        />

        <button style={styles.button} onClick={handleAnalyze}>Analyze Emotion</button>

        {sentiment && (
          <p style={styles.result}>
            <strong>💬 Detected Emotion:</strong> {sentiment}
          </p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Comic Sans MS, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '90%',
    textAlign: 'center',
  },
  title: {
    fontSize: '30px',
    color: '#6a1b9a',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    resize: 'none',
  },
  button: {
    backgroundColor: '#6a1b9a',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  result: {
    fontSize: '18px',
    marginTop: '20px',
    color: '#333',
  }
};

export default App;

//git rm -r --cached .
//git add .
//git commit -m "Clean commit: unified .gitignore and removed tracked junk"
//git push -u origin main
