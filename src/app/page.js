"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";
import Map from "@/components/Map";

export default function Home() {
  const [quizForm, setQuizForm] = useState({
    damageType: "",
    panel: "",
    size: "",
    paintDamage: "",
    photos: [],
    phone: "",
    messenger: "WhatsApp",
    name: "",
  });
  const [quizStatus, setQuizStatus] = useState("");

  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );

    fadeElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = useMemo(
    () => [
      {
        title: "Вмятини от паркиране",
        description: "Удари от врати и леки контактни щети по паркинги.",
        suitability: "Подходящо, когато боята е здрава и има достъп отвътре.",
      },
      {
        title: "Повреди след градушка",
        description: "Множество малки вмятини по покрив, капак или багажник.",
        suitability: "Работи, ако няма напукване на боята и рамките са здрави.",
      },
      {
        title: "Капак, крила, врати",
        description: "Единични вмятини по най-често удряните панели.",
        suitability: "Подходящо при стандартен достъп или след сваляне на обшивка.",
      },
      {
        title: "Сложни сгъвки",
        description: "Дълбоки или на ръбове – само след оглед и съгласуване.",
        suitability: "Възможно е частично подобрение, уточнява се при оценката.",
      },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        title: "Съхранява оригиналния лак",
        text: "Без боядисване и шпакловка – фабричният цвят и стойност остават непокътнати.",
      },
      {
        title: "По-бързо и по-изгодно",
        text: "Повечето паркинг удари се поправят за час-два, без нужда от престой в сервиз.",
      },
      {
        title: "По-висока ликвидност",
        text: "Без вторични слоеве боя – няма разлики по детайла и автомобилът се продава по-лесно.",
      },
      {
        title: "Чиста технология",
        text: "Работа с PDR лампа, лостове и лепила. Никакъв прах, миризми или замърсяване на салона.",
      },
    ],
    []
  );

  const caseStudies = useMemo(
    () => [
      {
        before: "/images/before1.jpg",
        after: "/images/after1.jpg",
        label: "Врата • паркинг удар",
        time: "Около 1.5 часа • без боядисване",
      },
      {
        before: "/images/before2.jpg",
        after: "/images/after2.jpg",
        label: "Капак • градушка",
        time: "4 часа работа с лампа и лепила",
      },
      {
        before: "/images/before3.jpg",
        after: "/images/after3.jpg",
        label: "Задно крило • паркиране",
        time: "2 часа • достъп през подкалник",
      },
      {
        before: "/images/before1.jpg",
        after: "/images/after1.jpg",
        label: "Предна врата • ръб",
        time: "Нужно сваляне на кората • 2.5 часа",
      },
      {
        before: "/images/before2.jpg",
        after: "/images/after2.jpg",
        label: "Покрив • градушка",
        time: "Работа по точки • 5 часа",
      },
      {
        before: "/images/before3.jpg",
        after: "/images/after3.jpg",
        label: "Багажник • parking dent",
        time: "1 час • без пълнители",
      },
    ],
    []
  );

  const faqItems = useMemo(
    () => [
      {
        q: "Подходящ ли е PDR за моята вмятина?",
        a: "Ако лакът е здрав и има достъп до панела – почти винаги да. При ръбове или силни сгъвки правим оглед, за да потвърдим.",
      },
      {
        q: "Ще се вижда ли след?",
        a: "Работим без шпакловки и боя. При стандартни удари резултатът е невидим, при силни сгъвки може да остане минимален отпечатък, който обсъждаме предварително.",
      },
      {
        q: "Колко време отнема?",
        a: "Малки паркинг удари са 60–120 минути. По-големи и градушка – от няколко часа до ден според броя точки и достъпа.",
      },
      {
        q: "Работите ли по ребра и сгъвки?",
        a: "Да, но винаги след оглед. Даваме честна прогноза какво подобрение е реалистично и дали е нужен частичен демонтаж.",
      },
      {
        q: "Правите ли градушка?",
        a: "Да, имаме инструменти и лампи за системна работа по градушка. Често комбинираме достъп отвътре и лепилна техника.",
      },
      {
        q: "Трябва ли да се боядисва?",
        a: "Не. PDR е именно за да не се боядисва и да остане заводският лак. Ако лакът е спукан, първо възстановяваме формата и обсъждаме локален ремонт.",
      },
      {
        q: "Има ли гаранция?",
        a: "Да, даваме гаранция за извършената корекция и за това, че панелът остава без шпакловка.",
      },
      {
        q: "Какво ако боята е наранена?",
        a: "Ще изправим детайла максимално и ще предложим партньор за лак, ако е нужно. Така цената и зоната на боядисване се минимизират.",
      },
    ],
    []
  );

  const handleQuizChange = (field, value) => {
    setQuizForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoChange = (event) => {
    const files = Array.from(event.target.files || []);
    setQuizForm((prev) => ({ ...prev, photos: files }));
  };

  const handleQuizSubmit = (event) => {
    event.preventDefault();
    setQuizStatus(
      "Заявката е получена. Ще се свържем до 5–10 минути по избрания от вас канал."
    );
  };

  return (
    <>
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />

        <section
          id="pdr-benefits"
          className="fade-in flex flex-col items-center justify-center bg-[var(--color-secondary)]"
        >
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Защо PDR?</h2>
            <p className="max-w-4xl mx-auto text-center text-lg text-gray-200 mb-10">
              PDR (Paintless Dent Repair) връща формата на детайла без шпакловка и
              боядисване. Запазвате заводския лак, спестявате време и автомобилът остава ликвиден.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-[var(--color-card-bg)] rounded-xl p-5 border border-white/5 shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-200">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="fade-in flex flex-col items-center justify-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Услуги PDR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service-card p-6 flex flex-col justify-between bg-[var(--color-card-bg)] rounded-xl border border-white/5 shadow-lg"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="text-gray-200">{service.description}</p>
                    <p className="text-sm text-emerald-200">{service.suitability}</p>
                  </div>
                  <a
                    href="#quiz"
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold"
                  >
                    Оцени по снимка
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cases"
          className="fade-in flex flex-col items-center justify-center bg-[var(--color-secondary)]"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold">Преди / След</h2>
                <p className="text-gray-200 mt-2 max-w-2xl">
                  Реални кейсове с PDR лампа. Подписваме всяка работа: детайл, време, сложност.
                </p>
              </div>
              <a
                href="#quiz"
                className="self-start px-5 py-3 bg-white text-black rounded-lg font-semibold hover:bg-emerald-100"
              >
                Искам такъв резултат
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {caseStudies.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className="bg-[var(--color-card-bg)] rounded-xl overflow-hidden border border-white/5 shadow-lg"
                >
                  <div className="grid grid-cols-2 gap-1 h-48 md:h-56">
                    <img src={item.before} alt="Преди" className="w-full h-full object-cover" />
                    <img src={item.after} alt="След" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-gray-300">
                      <span>Преди</span>
                      <span>След</span>
                    </div>
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="text-sm text-gray-200">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="fade-in flex flex-col items-center justify-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Как протича ремонтът</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {["Оценка по снимка или на място", "Демонтаж за достъп до панела (ако е нужно)", "Изправяне с лостове или лепилен PDR", "Контрол с лампа до изчезване на отблясъка", "Финална проверка и предаване"].map(
                (step, idx) => (
                  <div
                    key={step}
                    className="bg-[var(--color-card-bg)] rounded-xl p-4 text-center border border-white/5 shadow-lg"
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500 text-black flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-gray-200">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="fade-in flex flex-col items-center justify-center bg-[var(--color-secondary)]"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Цена и фактори</h2>
                <p className="text-lg text-gray-200 mb-4">
                  PDR не е фиксирана услуга. Даваме ориентир и точна цена след снимки.
                </p>
                <ul className="space-y-3 text-gray-200">
                  {["Размер и брой вмятини", "Локация и достъп до панела", "Има ли сгъвка или ръб", "Материал – стомана или алуминий", "Нужно ли е частично разглобяване"].map(
                    (factor) => (
                      <li key={factor} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{factor}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-[var(--color-card-bg)] rounded-2xl p-6 border border-emerald-500/40 shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">Ориентири</h3>
                <div className="space-y-3 text-gray-200">
                  <div className="flex justify-between">
                    <span>Small (монета до длан)</span>
                    <span className="font-semibold">от 60–120 лв</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium (по-големи паркинг удари)</span>
                    <span className="font-semibold">от 120–220 лв</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complex / сгъвки</span>
                    <span className="font-semibold">след оглед</span>
                  </div>
                </div>
                <a
                  href="#quiz"
                  className="block text-center mt-6 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold"
                >
                  Вземи точна цена по снимка
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="quiz" className="fade-in flex flex-col items-center justify-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Оцени по снимка</h2>
            <p className="text-center text-lg text-gray-200 mb-8">
              Попълни краткия формуляр. Ще отговорим в рамките на 5–10 минути и ще уточним деня за ремонт.
            </p>
            <form
              className="bg-[var(--color-card-bg)] rounded-2xl p-6 md:p-8 shadow-xl border border-white/5 max-w-5xl mx-auto"
              onSubmit={handleQuizSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Тип повреда</label>
                  <select
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                    value={quizForm.damageType}
                    onChange={(e) => handleQuizChange("damageType", e.target.value)}
                    required
                  >
                    <option value="">Избери</option>
                    <option value="parking">Паркинг удар</option>
                    <option value="hail">Градушка</option>
                    <option value="other">Друго</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Къде е вмятината</label>
                  <select
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                    value={quizForm.panel}
                    onChange={(e) => handleQuizChange("panel", e.target.value)}
                    required
                  >
                    <option value="">Избери</option>
                    <option value="door">Врата</option>
                    <option value="fender">Крило</option>
                    <option value="hood">Капак</option>
                    <option value="roof">Покрив</option>
                    <option value="trunk">Багажник</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Размер</label>
                  <select
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                    value={quizForm.size}
                    onChange={(e) => handleQuizChange("size", e.target.value)}
                    required
                  >
                    <option value="">Избери</option>
                    <option value="coin">Монета</option>
                    <option value="palm">Длан</option>
                    <option value="bigger">По-голямо от длан</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Има ли скол/напукване на боята?</label>
                  <select
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                    value={quizForm.paintDamage}
                    onChange={(e) => handleQuizChange("paintDamage", e.target.value)}
                    required
                  >
                    <option value="">Избери</option>
                    <option value="no">Не</option>
                    <option value="yes">Да</option>
                    <option value="unknown">Не знам</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm text-gray-200">Качи 2–4 снимки</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    required
                    onChange={handlePhotoChange}
                    className="w-full bg-[var(--color-secondary)] border border-dashed border-white/20 rounded-lg p-3"
                  />
                  {quizForm.photos.length > 0 && (
                    <p className="text-xs text-gray-300">
                      Добавени файлове: {quizForm.photos.map((file) => file.name).join(", ")}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Телефон</label>
                  <input
                    type="tel"
                    required
                    value={quizForm.phone}
                    onChange={(e) => handleQuizChange("phone", e.target.value)}
                    placeholder="+359..."
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-200">Име и предпочитан месинджър</label>
                  <input
                    type="text"
                    required
                    value={quizForm.name}
                    onChange={(e) => handleQuizChange("name", e.target.value)}
                    placeholder="Име"
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3 mb-2"
                  />
                  <select
                    className="w-full bg-[var(--color-secondary)] border border-white/10 rounded-lg p-3"
                    value={quizForm.messenger}
                    onChange={(e) => handleQuizChange("messenger", e.target.value)}
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Viber">Viber</option>
                    <option value="Phone">Телефонно обаждане</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-sm text-gray-300">
                  След изпращане ще получите потвърждение и можем да продължим в WhatsApp/Viber с линк към снимките.
                </p>
                <button
                  type="submit"
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold"
                >
                  Изпрати за оценка
                </button>
              </div>
              {quizStatus && (
                <div className="mt-4 text-emerald-200 font-semibold text-center">{quizStatus}</div>
              )}
            </form>
          </div>
        </section>

        <section id="faq" className="fade-in flex flex-col items-center justify-center bg-[var(--color-secondary)]">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">FAQ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="bg-[var(--color-card-bg)] border border-white/5 rounded-xl p-4"
                >
                  <summary className="font-semibold cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-gray-200">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="fade-in flex flex-col items-center justify-center py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Контакти</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left space-y-4">
                <img
                  src="/images/master.JPG"
                  alt="Нашият PDR техник"
                  className="mx-auto md:mx-0 rounded-full w-32 h-32 object-cover"
                />
                <p className="text-white font-semibold text-lg">Алекс • PDR техник</p>
                <p className="text-gray-200">Работим по записване. Звъннете или пишете, за да уточним час.</p>
                <div className="space-y-1 text-gray-200">
                  <p><strong>Телефон:</strong> <a href="tel:+359893976715" className="text-emerald-300">+359 893 976 715</a></p>
                  <p><strong>Адрес:</strong> Варна, Княз Борис I 141</p>
                  <p><strong>Работно време:</strong> Пон–Съб: 09:00 – 19:00</p>
                </div>
                <ContactIcons />
              </div>
              <Map />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
