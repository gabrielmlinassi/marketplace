import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import Container from "@components/ui/Container";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ zIndex: "20", overflow: "hidden" }}>
      <Navbar />
      <Container>{children}</Container>
      <div style={{ marginTop: "90px" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
