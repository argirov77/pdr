import './globals.css';

export const metadata = {
  title: "PDR | Премахване на вмятини без боядисване | SVA Detailing",
  description:
    "PDR студио във Варна: оценка по снимка за 5–10 минути, ремонт без шпакловка и боядисване, запазваме заводския лак.",
  openGraph: {
    title: "PDR от SVA Detailing",
    description:
      "Оценка по снимка, реални кейсове преди/след и прозрачни ориентири за цената на PDR ремонт.",
    type: "website",
    locale: "bg_BG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
