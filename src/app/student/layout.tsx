export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <header>
            <h1>Student Dashboard</h1>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; 2023 Student Portal</p>
        </footer>
    </div>
  );
}
