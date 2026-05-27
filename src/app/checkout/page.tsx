"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { content, type VariantKey } from "@/data/content";

export default function CheckoutPage() {
  const [variant, setVariant] = useState<VariantKey>("genz");
  const { items, removeItem, total, clearCart } = useCart();
  const [step, setStep] = useState<"cart" | "details" | "payment" | "success">("cart");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    nip: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Polska",
    agreeTerms: false,
  });

  const [paymentMethod, setPaymentMethod] = useState<"card" | "blik" | "paypal">("card");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    // Here you would integrate with Stripe or other payment provider
  };

  if (step === "success") {
    return (
      <main className="min-h-screen bg-gradient-to-b from-yellow/10 to-white">
        <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
        
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="bg-white rounded-3xl border-4 border-yellow p-10 md:p-16 shadow-2xl text-center">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="font-display text-4xl md:text-5xl font-800 text-gray-900 mb-4">
              Dziękujemy za zamówienie!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Twoje zamówienie zostało przyjęte. Szczegóły wysłaliśmy na adres e-mail.
            </p>
            
            <div className="bg-yellow/20 rounded-2xl p-6 mb-8">
              <p className="text-gray-800 font-600 mb-2">Numer zamówienia:</p>
              <p className="font-display text-3xl font-900 text-gray-900">
                #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
              >
                Wróć na stronę główną
              </Link>
              <Link
                href="/bettermessage"
                className="bg-gray-900 hover:bg-gray-800 text-white font-700 px-8 py-4 rounded-full transition-all hover:scale-105 inline-block"
              >
                Zobacz produkty
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow/10 to-white">
      <Navbar variant={variant} setVariant={setVariant} showLanguageSelector={true} />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="font-display text-5xl md:text-6xl font-800 text-gray-900 mb-12 text-center">
          Finalizacja zamówienia 💳
        </h1>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {[
              { id: "cart", label: "Koszyk", icon: "🛒" },
              { id: "details", label: "Dane", icon: "📝" },
              { id: "payment", label: "Płatność", icon: "💳" },
            ].map((s, idx) => (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 transition-all ${
                      step === s.id
                        ? "bg-yellow scale-110 shadow-lg"
                        : idx < ["cart", "details", "payment"].indexOf(step)
                        ? "bg-green-500"
                        : "bg-gray-200"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <span className="text-sm font-600 text-gray-700">{s.label}</span>
                </div>
                {idx < 2 && (
                  <div className="h-1 flex-1 bg-gray-200 mx-2">
                    <div
                      className={`h-full transition-all ${
                        idx < ["cart", "details", "payment"].indexOf(step)
                          ? "bg-green-500 w-full"
                          : "bg-gray-200 w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            {step === "cart" && (
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
                <h2 className="font-display text-3xl font-700 text-gray-900 mb-6">
                  Twój koszyk
                </h2>

                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🛍️</div>
                    <p className="text-xl font-600 text-gray-900 mb-2">
                      Koszyk jest pusty
                    </p>
                    <Link
                      href="/bettermessage"
                      className="inline-block mt-4 bg-yellow hover:bg-yellow-dark text-gray-900 font-700 px-6 py-3 rounded-full transition-all"
                    >
                      Przeglądaj produkty
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-200"
                        >
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 font-600 mb-1">
                              {item.variant}
                            </div>
                            <h3 className="font-display text-xl font-700 text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {item.description}
                            </p>
                            <div className="font-display text-2xl font-800 text-gray-900">
                              ${item.price}
                            </div>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-2"
                            aria-label="Usuń"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setStep("details")}
                      className="w-full bg-yellow hover:bg-yellow-dark text-gray-900 font-700 text-lg py-4 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      Przejdź do danych →
                    </button>
                  </>
                )}
              </div>
            )}

            {step === "details" && (
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
                <h2 className="font-display text-3xl font-700 text-gray-900 mb-6">
                  Dane do faktury
                </h2>

                <form onSubmit={(e) => { e.preventDefault(); setStep("payment"); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Imię *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Nazwisko *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Firma (opcjonalnie)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        NIP (opcjonalnie)
                      </label>
                      <input
                        type="text"
                        value={formData.nip}
                        onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-600 text-gray-700 mb-2">
                      Adres *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Miasto *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Kod pocztowy *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Kraj *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-4">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-yellow focus:ring-yellow cursor-pointer"
                    />
                    <label htmlFor="agree" className="text-sm text-gray-600 cursor-pointer">
                      Zapoznałem się z Regulaminem strony i Polityką prywatności *
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep("cart")}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-700 py-4 rounded-full transition-all"
                    >
                      ← Wróć
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-yellow hover:bg-yellow-dark text-gray-900 font-700 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      Przejdź do płatności →
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === "payment" && (
              <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg">
                <h2 className="font-display text-3xl font-700 text-gray-900 mb-6">
                  Metoda płatności
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Methods */}
                  <div className="space-y-3">
                    {[
                      { id: "card", label: "Karta płatnicza", icon: "💳", logos: ["Visa", "Mastercard"] },
                      { id: "blik", label: "BLIK", icon: "📱", logos: ["BLIK"] },
                      { id: "paypal", label: "PayPal", icon: "🌐", logos: ["PayPal"] },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id as any)}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                          paymentMethod === method.id
                            ? "border-yellow bg-yellow/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{method.icon}</span>
                          <span className="font-600 text-gray-900">{method.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {method.logos.map((logo) => (
                            <span key={logo} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {logo}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Stripe Payment (simulated) */}
                  {paymentMethod === "card" && (
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                      <div>
                        <label className="block text-sm font-600 text-gray-700 mb-2">
                          Numer karty
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-600 text-gray-700 mb-2">
                            Data ważności
                          </label>
                          <input
                            type="text"
                            placeholder="MM/RR"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-600 text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors"
                          />
                        </div>
                      </div>
                      
                      {/* Stripe Badge */}
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                        <span>Bezpieczne płatności z</span>
                        <svg
                          className="h-4"
                          viewBox="0 0 60 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 01-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 013.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 01-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 01-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 00-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z"
                            fill="#6772E5"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "blik" && (
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <label className="block text-sm font-600 text-gray-700 mb-2">
                        Kod BLIK
                      </label>
                      <input
                        type="text"
                        placeholder="000 000"
                        maxLength={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-yellow outline-none transition-colors text-center text-2xl font-mono tracking-widest"
                      />
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Wpisz 6-cyfrowy kod z aplikacji bankowej
                      </p>
                    </div>
                  )}

                  {paymentMethod === "paypal" && (
                    <div className="bg-gray-50 rounded-2xl p-6 text-center">
                      <p className="text-gray-700 mb-4">
                        Zostaniesz przekierowany do PayPal, aby dokończyć płatność.
                      </p>
                      <div className="bg-blue-500 text-white px-6 py-3 rounded-xl inline-block font-600">
                        PayPal
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep("details")}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-700 py-4 rounded-full transition-all"
                    >
                      ← Wróć
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-700 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      Zapłać ${total} 💰
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-6 shadow-lg sticky top-24">
              <h3 className="font-display text-2xl font-700 text-gray-900 mb-4">
                Podsumowanie
              </h3>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-600 text-gray-900">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Suma częściowa:</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>VAT (23%):</span>
                  <span>${(total * 0.23).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t-2 border-gray-900 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-600 text-gray-900">Do zapłaty:</span>
                  <span className="font-display text-3xl font-800 text-gray-900">
                    ${(total * 1.23).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-yellow/10 rounded-2xl p-4">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <p className="text-xs font-600 text-gray-900 mb-1">
                      Bezpieczna płatność
                    </p>
                    <p className="text-xs text-gray-600">
                      Twoje dane są chronione przez szyfrowanie SSL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
