export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
