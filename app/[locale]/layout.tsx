import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "../../i18n/routing";
import NavBar from "../../components/Header/NavBar";
import CircleItem from '../../components/Circle/CircleItem'
import { Metadata } from "next";

export const metadata : Metadata = {
  title: {
    default : "Erada Construction Engineering | Leading Construction Company for Quality & Innovation",
    template : "%s | Erada Construction Engineering"
  },
  description: "innovative, and cost-effective building solutions. We specialize in residential and commercial projects with a commitment to excellence, efficiency, and sustainability. Contact us today to bring your vision to life!",
  twitter : {
    card : "summary_large_image",
  } 
  
  
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
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <CircleItem /> 

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
