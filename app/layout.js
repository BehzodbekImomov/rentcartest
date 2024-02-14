import { Inter } from "next/font/google";
import IdContext from "@/context/IdContext";
import CarContext from "@/context/CarContext";
import { ToastContainer } from "react-toastify";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "../globals.css";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Portofino",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <IdContext>
            <CarContext>
              <ToastContainer />

              {children}
            </CarContext>
          </IdContext>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
