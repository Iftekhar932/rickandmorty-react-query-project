import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Characters from "./Components/Characters/Characters";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Characters />
      </div>
    </QueryClientProvider>
  );
}

export default App;
