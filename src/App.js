import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/Main";
import Name from "./Components/Name";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/name" element={<Name />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
