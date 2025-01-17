import Footer from "@/pageSections/Footer";
import Nav from "@/pageSections/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
