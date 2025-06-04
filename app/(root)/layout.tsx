import { Navbar } from "@/components/general/Navbar";
import Footer from "@/components/sections/Footer";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home- Glass House Waters",
//   description: "Your lasting Solution to Your Water Problems",
// };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
