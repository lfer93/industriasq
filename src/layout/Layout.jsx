import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ maxWidth: "100%", overflowX: "hidden" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;