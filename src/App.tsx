import { AppRoutesProvider } from "@components/AppRoutesProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppRoutesProvider />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
