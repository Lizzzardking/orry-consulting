import { use, useState } from "react";
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
    <div className="bg-dark-blue text-white h-screen ">
      <section>
        <header>This will be the </header>
        <h1>Hero Section</h1>
      </section>
      <section>
        <h1>main body hello</h1>
        <BudgetCalculator503020 />
      </section>
      <section>
        <h1>FAQ</h1>
        <FAQs data={faqs} />
      </section>
    </div>
  );
}

export default App;

/*-------- BUDGET CALCULATOR -----------*/

function BudgetCalculator503020() {
  const [budget, setBudget] = useState("");
  const b = Number(budget) || 0;
  const needs = b * 0.5;
  const wants = b * 0.3;
  const savings = b * 0.2;

  return (
    <div className="h-160 w-160 mx-auto border-2">
      <p>
        Schreibe hier dein monatliches Budget auf und erhalte eine Aufteilung
        nach der 50/30/20-Regel:
      </p>
      <input
        type="number"
        min="0"
        placeholder="Dein monatliches Budget in €"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "-" || e.key === "Minus") e.preventDefault();
        }}
        className="bg-cyan-500 mt-5 pl-3 rounded-sm w-120 text-center"
      />
      {/* <Output needs={needs} wants={wants} savings={savings} /> */}
      <ResultBox title="Fixkosten" result={needs}>
        <label className="mr-4">Fixkosten</label>
      </ResultBox>
      <ResultBox title="Wünsche" result={wants}>
        <label className="mr-4">Wünsche</label>
      </ResultBox>
      <ResultBox title="Ersparnisse" result={savings}>
        <label className="mr-4">Ersparnisse</label>
      </ResultBox>
    </div>
  );
}

function ResultBox({ result, children }) {
  return (
    <div>
      {children}
      {result.toFixed(2)} €
    </div>
  );
}

// function Output({ needs, wants, savings }) {
//   return (
//     <div>
//       <h2>
//         Budget für deine Fixkosten: <span>{needs.toFixed()}</span> €
//       </h2>
//       <h2>
//         Budget für deine Wünsche: <span>{wants.toFixed()}</span> €
//       </h2>
//       <h2>
//         Budget für deine Ersparnisse: <span>{savings.toFixed()}</span> €
//       </h2>
//     </div>
//   );
// }

/*-------- FAQS -----------*/

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
