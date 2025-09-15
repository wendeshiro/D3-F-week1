function App() {
  return (
    <div className="Title">
      <h1>Hello, World!</h1>
      <p>Welcome to your React application.</p>
      <button>Click Me!</button>
      <Excerpt title="Excerpt 01" body="Excerpt 01 Excerpt 01"/>
      <Excerpt title="Excerpt 02" body="Excerpt 02 Excerpt 02"/>
    </div>
  );
}

function Excerpt({ title, body }) {
  return (
    <div className="Excerpt">
      <h2>Excerpt Component</h2>
      <p>This is an excerpt component.</p>
      <h3>Props</h3>
    </div>
  );
}


export default App;

