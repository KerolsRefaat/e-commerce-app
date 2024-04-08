import ProductsDetails from "./Components/ProductDetails";
import ProductsCard from "./Components/ProductsCard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>

<Router>
      <Routes>
        <Route path="/" element={<ProductsCard />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
      </Routes>
    </Router>
        </>
   
  );
}

export default App;
