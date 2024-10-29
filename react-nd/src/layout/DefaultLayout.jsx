import Topbar from "@/components/navbar/Topbar";
import Footer from "@/components/navbar/Footer";

import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const footerHeight = "2.5rem";
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: `calc(100vh - ${footerHeight})` }}>
      <header>
        <Topbar />
      </header>
  
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
  
      <footer style={{ height: footerHeight }}>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout;