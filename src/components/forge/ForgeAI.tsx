import Header from "./Header";
import Sidebar from "./Sidebar";
import Workspace from "./Workspace";

export default function ForgeAI() {
  return (
    <div className="flex h-screen bg-[#020617] text-white">
      <Sidebar>
        <Header />

        <div className="flex-1 flex items-center justify-center text-gray-500">
          Chat coming in Sprint 7.2
        </div>
      </Sidebar>

      <Workspace>
        <div className="flex h-full items-center justify-center text-gray-500">
          Live Preview
        </div>
      </Workspace>
    </div>
  );
}