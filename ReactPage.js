import React, { useState } from 'react';

const questions = [
  {
    question: 'What is React?',
    answer:
      'React is a JavaScript library used to build user interfaces. It allows developers to create reusable UI components.',
  },
  {
    question: 'What are the features of React?',
    answer:
      'JSX, Virtual DOM, Components, Unidirectional data flow, Performance optimizations using Reconciliation.',
  },
  {
    question: 'What is JSX?',
    answer:
      'JSX stands for JavaScript XML. It allows us to write HTML in React and makes it easier to write and add HTML in React.',
  },
  {
    question: 'What are Components?',
    answer:
      'Components are independent, reusable pieces of UI in React. They can be class-based or functional.',
  },
  {
    question: 'What is Virtual DOM?',
    answer:
      'The virtual DOM is a lightweight copy of the real DOM. React updates it first, then efficiently updates the real DOM.',
  },
  {
    question: 'What is the Virtual DOM?',
    answer:
      'The Virtual DOM is a lightweight, in-memory representation of the actual DOM, used by React to optimize UI updates.',
  },
  {
    question: 'Explain the difference between state and props.',
    answer:
      'State is data managed within a component, while props are data passed from a parent component to a child.',
  },
  {
    question: 'What are Hooks in React?',
    answer:
      'Hooks are functions that let you "hook into" React state and lifecycle features from functional components.',
  },
  {
    question: 'What is a Higher-Order Component (HOC)?',
    answer:
      'A HOC is a function that takes a component and returns a new component with enhanced capabilities.',
  },
  {
    question: 'What is React Router used for?',
    answer:
      'React Router is a library for handling declarative routing in React applications, enabling navigation between different views.',
  },
  {
    question: 'What is the purpose of the key prop when rendering lists?',
    answer:
      'The key prop helps React identify which items have changed, been added, or been removed in a list, optimizing rendering performance.',
  },
  {
    question: 'What is a controlled component?',
    answer:
      'A controlled component is a form element whose value is controlled by React state.',
  },
  {
    question: 'How do you optimize React application performance?',
    answer:
      'Optimization techniques include using React.memo, useCallback, useMemo, lazy loading, and code splitting.',
  },
];

const ReactPage = () => {
  const [selectedQA, setSelectedQA] = useState(null);

  const openModal = (qa) => setSelectedQA(qa);
  const closeModal = () => setSelectedQA(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>⚛️ React Interview Questions</h1>
      <p style={styles.intro}>Click a question to view the answer in a popup window.</p>

      <ul style={styles.list}>
        {questions.map((qa, index) => (
          <li
            key={index}
            onClick={() => openModal(qa)}
            style={styles.question}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dfe6e9')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f6fa')}
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
              ✖ Close
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
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    color: '#2d3436',
    marginBottom: '10px',
  },
  intro: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#636e72',
    marginBottom: '30px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  question: {
    padding: '18px 20px',
    backgroundColor: '#f5f6fa',
    marginBottom: '12px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '17px',
    color: '#0984e3',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
    transition: 'all 0.2s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.3s ease-in-out',
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: '35px',
    borderRadius: '15px',
    width: '90%',
    maxWidth: '550px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
    textAlign: 'center',
    animation: 'scaleIn 0.25s ease-in-out',
  },
  modalTitle: {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#2d3436',
  },
  modalAnswer: {
    fontSize: '17px',
    color: '#444',
    marginBottom: '25px',
    lineHeight: '1.6',
  },
  closeButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#00cec9',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default ReactPage;
