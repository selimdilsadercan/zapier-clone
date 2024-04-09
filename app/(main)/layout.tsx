import Sidebar from "@/components/global/Sidebar";
import React from "react";
// import InfoBar from "@/components/infobar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        {/* <InfoBar /> */}
        <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
