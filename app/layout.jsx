import "@/app/styles/globals.css";

export const metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon/png",
  },
  title: "Next.JS Starter Template App",
  description:
    "Starter template for Next.JS projects using JavaScript and Shadcn/UI.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-display flex h-screen flex-col scroll-smooth antialiased">
        <header>Header Section</header>

        <main className="relative overflow-hidden">{children}</main>

        <footer className="mt-auto">Footer Section</footer>
      </body>
    </html>
  );
};

export default RootLayout;
