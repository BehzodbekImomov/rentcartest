import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Fragment } from "react";

export default function PublicLayout({ children }) {
  return (
    <Fragment>
      <Header />

      <main>{children}</main>

      <Footer />
    </Fragment>
  );
}
