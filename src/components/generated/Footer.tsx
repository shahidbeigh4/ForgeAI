type FooterProps = {
  copyright: string;
};

export default function Footer({
  copyright,
}: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-10 text-center text-gray-500">
      {copyright}
    </footer>
  );
}