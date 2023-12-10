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
      <body className="scroll-smooth font-montserrat antialiased">
        <header>Header Section</header>

        <main>{children}</main>

        <footer>Footer Section</footer>
      </body>
    </html>
  );
};

export default RootLayout;
