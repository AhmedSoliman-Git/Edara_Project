import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "../../i18n/routing";
import NavBar from "../../components/Header/NavBar";

export const metadata = {
  title: "Erada Construction",
  description: "building",
  
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();



  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
