function App() {
  return (
    <div className="Title">
      <h1>Hello, World!</h1>
      <p>Welcome to your React application.</p>
      <button>Click Me!</button>
      <Excerpt title="Excerpt 01"/>
      <Excerpt title="Excerpt 02"/>
    </div>
  );
}

function Excerpt() {
  return (
    <div className="Excerpt">
      <h2>Excerpt Component</h2>
      <p>This is an excerpt component.</p>
    </div>
  );
}


export default App;

