import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Aquí se renderiza cada página individual */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
