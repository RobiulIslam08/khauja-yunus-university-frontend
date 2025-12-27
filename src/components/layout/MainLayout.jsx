
// MainLayout.js
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

// এই লেআউটে কোনো ধরনের লোডিং লজিক বা setTimeout থাকবে না।
const MainLayout = () => {
  return (
    <div >
      <Navbar />
      <main>
        {/* এখানে HomePage বা অন্যান্য পেজ সরাসরি রেন্ডার হবে */}
        <Outlet /> 
      </main>
    
      <Footer />
    </div>
  );
};

export default MainLayout;