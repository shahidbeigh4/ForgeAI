type Props = {
  children: React.ReactNode;
};

export default function Sidebar({
  children,
}: Props) {
  return (
    <aside className="flex h-screen w-[420px] flex-col border-r border-white/10 bg-[#0B1120]">
      {children}
    </aside>
  );
}