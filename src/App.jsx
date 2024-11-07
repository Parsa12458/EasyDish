import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecipesProvider } from "./context/RecipesContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipesProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="overflow-x-hidden">
          <Header />
          <Homepage />
          <Footer />
        </div>
      </RecipesProvider>
    </QueryClientProvider>
  );
}

export default App;
