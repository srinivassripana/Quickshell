import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { FilterProvider } from "./utils/filterContext";
function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </FilterProvider>
  );
}

export default App;
