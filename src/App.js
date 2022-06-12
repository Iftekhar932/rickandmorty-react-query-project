import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./Components/Characters/Characters";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App container">
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;

/* import "./App.css";
import Characters from "./Components/Characters/Characters";
import { QueryClient, QueryClientProvider } from "react-query";

// CREATE A NEW CLIENT
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="container">
          <h1>Rick and Morty</h1>
          <Characters />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

 */
