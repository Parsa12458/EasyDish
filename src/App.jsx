import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="overflow-x-hidden">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
