type Props = {
  children: React.ReactNode;
};

export default function Workspace({
  children,
}: Props) {
  return (
    <main className="flex-1 overflow-auto bg-[#111827]">
      {children}
    </main>
  );
}