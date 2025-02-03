import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./page/Landing";
import Category from "./page/Category";
import Product from "./page/Product";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Landing />} />
          <Route index path="/category/:category" element={<Category />} />
          <Route
            index
            path="/category/:category/:product"
            element={<Product />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
