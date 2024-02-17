import "@/styles/markdown.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="markdown">{children}</div>;
}
