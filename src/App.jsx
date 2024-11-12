import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./pages/Homepage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecipesProvider } from "./context/RecipesContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecipesProvider>
        <DarkModeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/:recipeId" element={<DetailPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </RecipesProvider>
    </QueryClientProvider>
  );
}

export default App;
