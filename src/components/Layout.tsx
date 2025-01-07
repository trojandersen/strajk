import Nav from "./Nav";
type LayoutProps = {
  children: React.ReactNode;
  page?: string;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full">
      <Nav />
      <main className="h-full place-content-center bg-[#FFF4F1]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
