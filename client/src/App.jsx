// src/App.jsx
function App() {
  return (
    <main style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#00695c' }}>Celiac Care (React)</h1>
      <p>Welcome! This page is rendered by React.</p>

      <nav style={{ marginTop: 20 }}>
        <a href="/" style={link}>Home</a>
        <a href="/symptoms.html" style={link}>Symptoms (static site)</a>
      </nav>

      <section style={{ marginTop: 30 }}>
        <h2>Next up</h2>
        <ul>
          <li>Hook this page to your Express API</li>
          <li>Build a Foods list with search</li>
          <li>Add Login/Signup later</li>
        </ul>
      </section>
    </main>
  );
}

const link = {
  marginRight: 10,
  padding: '8px 12px',
  background: '#00695c',
  color: 'white',
  textDecoration: 'none',
  borderRadius: 6
};

export default App;
