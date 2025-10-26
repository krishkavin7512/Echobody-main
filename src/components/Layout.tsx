import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-64 min-h-screen">
        <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10 flex items-center px-8">
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </header>
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
