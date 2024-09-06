import "@/assets/styles/global.css";

export const metadata = {
  title: "Property Palse",
  keywords: "property, real estate, buy, sell, rent",
  description: "Best property portal in the world",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
