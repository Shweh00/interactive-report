export const metadata = {
  title: "交互式报告 · 模板",
  description: "React + Tailwind + Recharts 的 scrollytelling 页面"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
