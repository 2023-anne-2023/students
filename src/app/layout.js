import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({ subsets: ["latin"],weight : "400" });

export const metadata = {
  title: "University",
  description: "students of university. Rollnumber? check, Name? check,Department? check",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
        <h1>Details of Students</h1>
        {children}</body>
    </html>
  );
}
