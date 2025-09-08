function App() {
  return (
    <div className="Title">
      <h1>Hello, World!</h1>
      <p>Welcome to your React application.</p>
      <button>Click Me!</button>
      <Excerpt title=/>
      <Excerpt />
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

