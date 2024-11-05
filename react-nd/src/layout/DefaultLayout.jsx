import { Outlet } from "react-router-dom";

import { Topbar } from "@/components/navbar/Topbar";
import { Footer } from "@/components/footer/Footer";

const footerHeight = "2.5rem";

export const DefaultLayout = () => {
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
