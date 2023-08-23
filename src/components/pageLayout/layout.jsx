import LeftNav from "../leftNav";
import TopNav from "../topNav";
import Category from "../category";
import PageTop from "../pageTop";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <LeftNav />
      <div className="flex-grow grid grid-rows-[auto_1fr]">
        <TopNav></TopNav>
        <div className="grid grid-cols-[252px_1fr] bg-[#F8FAFC]">
          <Category />
          <main className="flex-grow overflow-x-hidden">
            <PageTop />
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
