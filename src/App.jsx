import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecipesProvider } from "./context/RecipesContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";

const Homepage = lazy(() => import("./pages/Homepage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const SavedRecipesPage = lazy(() => import("./pages/SavedRecipesPage"));

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
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Homepage />} />
                  <Route path="/:recipeId" element={<DetailPage />} />
                  <Route
                    path="/user/savedRecipes"
                    element={<SavedRecipesPage />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </DarkModeProvider>
      </RecipesProvider>
    </QueryClientProvider>
  );
}

export default App;
