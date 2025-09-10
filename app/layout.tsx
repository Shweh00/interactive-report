export const metadata = {
  title: "柒柒六道",
  description: "柒柒六道，快看我做的页面！！！！！"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
