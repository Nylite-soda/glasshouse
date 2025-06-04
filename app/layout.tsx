import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import "@mantine/core/styles.css";

const myColor: MantineColorsTuple = [
  "#edf3fd",
  "#d8e3f5",
  "#acc5ed",
  "#7da5e6",
  "#588ae0",
  "#4279dd",
  "#3671dd",
  "#2a60c4",
  "#2255b0",
  "#0e3877",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor", // Set your custom color as the primary color
  fontFamily: "Poppins, sans-serif",
  headings: { fontFamily: "Poppins, sans-serif" },
});

export const metadata: Metadata = {
  title: "Glass House Waters",
  description: "Your lasting Solution to Your Water Problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body suppressHydrationWarning={true} className="!bg-[#F6F6F6]">
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
