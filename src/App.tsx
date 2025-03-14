import { AppRoutesProvider } from "@components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@pages";
import { Layout } from "@modules/layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppRoutesProvider />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
