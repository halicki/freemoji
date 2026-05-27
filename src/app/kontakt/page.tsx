"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { type VariantKey } from "@/data/content";

export default function ContactPage() {
  const [variant, setVariant] = useState<VariantKey>("normalne");

  return (
    <main className="min-h-[90vh] bg-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </main>
  );
}
