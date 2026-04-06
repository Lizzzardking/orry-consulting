import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "./assets/vite.svg";
//import heroImg from "./assets/hero.png";
import "./index.css";

// FOR THE FAQ SECTION - will be moved in future to own component and will be made dynamic
const faqs = [
  {
    title: "Add question here?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "Add another question here?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  //const [count, setCount] = useState(0);

  return (
    <body className="bg-dark-blue text-white">
      <section>
        <header>This will be the </header>
        <h1>Hero Section</h1>
      </section>
      <section>
        <h1>main body section</h1>
      </section>
      <section>
        <h1>FAQ</h1>
        <FAQs data={faqs} />
      </section>
    </body>
  );
}

export default App;

function FAQs({ data }) {
  const [currentlyOpen, setCurrentlyOpen] = useState(null);

  return (
    <div className="w-160 mx-auto flex flex-col gap-6 border-2">
      {data.map((el, i) => (
        <FAQitem
          currentlyOpen={currentlyOpen}
          onOpen={setCurrentlyOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </FAQitem>
      ))}
    </div>
  );
}

function FAQitem({ num, currentlyOpen, title, onOpen, children }) {
  const isOpen = num === currentlyOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="text-2xl font-medium">
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-2xl font-medium">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <div className="content-box leading-1.6 col-start-2 col-end--1 pb-4">
          {children}
        </div>
      )}{" "}
    </div>
  );
}
