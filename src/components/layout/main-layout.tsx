import { AppSidebar } from "../parts/app-sidebar";
import { Header } from "../parts/header";
import { SidebarProvider } from "../ui/sidebar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Header />
          <div>{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
};
