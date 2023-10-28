import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Sidebar />

      <Separator className="h-0.5 dark:bg-slate-400 bg-slate-800 " />
      <Footer />
    </>
  );
}
