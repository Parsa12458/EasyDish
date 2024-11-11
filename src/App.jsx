import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecipesProvider } from "./context/RecipesContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipesProvider>
        <DarkModeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <div className="overflow-x-hidden dark:bg-backgroundDark">
            <Header />
            <Homepage />
            <Footer />
          </div>
        </DarkModeProvider>
      </RecipesProvider>
    </QueryClientProvider>
  );
}

export default App;
