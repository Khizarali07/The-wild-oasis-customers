import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[16rem_1fr] md:h-full gap-12">
      <SideNavigation />
      <div className="md:py-1">{children}</div>
    </div>
  );
}
