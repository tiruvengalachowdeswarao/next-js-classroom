import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="rootLayout" className={inter.className}>
        <NavBar></NavBar>
        <br></br>
        <hr></hr>
        {children}
        <hr></hr>
        <br></br>
        <nav>
          <p>CopyRight @IBM</p>
        </nav>
      </body>
    </html>
  );
}
