import React, { useState } from 'react';


  const questions = [
  {
    question: 'What is JavaScript?',
    answer:
      'JavaScript is a versatile scripting language primarily used for creating dynamic content on websites. It runs in the browser.',
  },
  {
    question: 'What are data types in JavaScript?',
    answer:
      'Primitive types: String, Number, Boolean, Null, Undefined, Symbol, BigInt. Non-primitive: Objects, Arrays, Functions.',
  },
  {
    question: 'What is closure in JavaScript?',
    answer:
      'A closure is the combination of a function and the lexical environment within which it was declared. It can access variables from its outer scope.',
  },
  {
    question: 'What is the difference between == and ===?',
    answer:
      '== checks for value equality with type coercion, whereas === checks for both value and type equality.',
  },
  {
    question: 'What is the use of “this” keyword?',
    answer:
      '"this" refers to the object it belongs to. It has different values depending on how a function is called.',
  },
  {
    question: 'What is hoisting in JavaScript?',
    answer:
      'Hoisting is JavaScript’s default behavior of moving declarations to the top. Variables and functions are "hoisted" before code execution.',
  },
  {
    question: 'Explain event bubbling in JavaScript.',
    answer:
      'Event bubbling is a type of event propagation where the event starts from the target element and bubbles up to its ancestors in the DOM tree.',
  },
  {
    question: 'What is async/await in JavaScript?',
    answer:
      'async/await is syntax for writing asynchronous code in a synchronous fashion. "async" makes a function return a promise, "await" waits for the promise.',
  },
  {
    question: 'How can you remove duplicates from an array?',
    answer:
      'You can use the Set object: [...new Set(array)] removes duplicate values from an array in JavaScript.',
  },
  {
    question: 'What is the difference between var, let, and const?',
    answer:
      '`var` is function-scoped and can be redeclared. `let` and `const` are block-scoped. `const` can’t be reassigned after initialization.',
  },
];


const JavaScriptPage = () => {
  const [selectedQA, setSelectedQA] = useState(null);

  const openModal = (qa) => setSelectedQA(qa);
  const closeModal = () => setSelectedQA(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📜 JavaScript Interview Prep</h1>
      <p style={styles.intro}>Click on a question to view the answer.</p>

      <ul style={styles.list}>
        {questions.map((qa, index) => (
          <li
            key={index}
            onClick={() => openModal(qa)}
            style={styles.question}
          >
            {qa.question}
          </li>
        ))}
      </ul>

      {selectedQA && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 style={styles.modalTitle}>{selectedQA.question}</h2>
            <p style={styles.modalAnswer}>{selectedQA.answer}</p>
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  intro: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#555',
    marginBottom: '30px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  question: {
    padding: '15px',
    backgroundColor: '#ecf0f1',
    marginBottom: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#e67e22',
    transition: '0.2s ease-in-out',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#2c3e50',
  },
  modalAnswer: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '20px',
  },
  closeButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default JavaScriptPage;
