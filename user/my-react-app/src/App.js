import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./View/Header";
import Home from "./View/Home";
import Footer from "./View/Footer";
import Featured from "./View/Featured";
import Popular from "./View/Popular";
import Blog from "./View/Blog";
import Login from "./View/Login";
import SignupForm from "./View/SignupForm";
import Cart from "./View/Cart";
import Account from "./View/Account";
import HelpCenter from "./View/HelpCenter";
import ContactUs from "./View/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import BookDetails from "./View/BookDetails";
import Order from "./View/Order";
import ThankYou from "./View/ThankYou";
// import BookDetailPage from "./View/BookDetailPage";
// import DetailsButton from "./View/DetailsButton";

const App = () => {
  const [userauth, setUserAuth] = useState("");
  useEffect(() => {
    setUserAuth(localStorage.getItem("userauth"));
    console.log(userauth);
    console.log(userauth != "");
  }, [userauth]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Featured/" element={<Featured/>}/>
        <Route path="/Popular/" element={<Popular/>}/>
        <Route path="/Blog/" element={<Blog/>}/> 
        <Route path="/BookDetails/" element={<BookDetails/>}/>
        <Route path="/BookDetails/:id" element={<BookDetails/>}/>
        {userauth != "" && userauth != null && userauth != undefined ? (
              <>
        <Route path="/Cart/" element={<Cart/>}/>
        <Route path="/Cart/:id" element={<Cart/>}/>
        <Route path="/Account/" element={<Account/>}/>
        <Route path="/HelpCenter/" element={<HelpCenter/>}/>
        <Route path="/ContactUs/" element={<ContactUs/>}/>
        <Route path="/Order/" element={<Order/>}/>
        <Route path="/ThankYou" element={<ThankYou/>}/>
        
        {/* <Route path="/Order/:id" element={<Order/>}/> */}


        {/* <Route path="/BookDetailPage/" element={<BookDetailPage/>}/> */}
        {/* <Route path="/DetailsButton/" element={<DetailsButton/>}/> */}

        
        {/* Nested route for book detail */}
        
        </>
            ) :(<>
                    <Route path="/Login/" element={<Login/>}/>
        
                   <Route path="/signup/" element={<SignupForm />} />
            </>)}
        

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;