import React, { useState } from 'react';

const questions = [
  {
    question: 'What is Node.js?',
    answer:
      'Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows you to run JS on the server-side.',
  },
  {
    question: 'What is npm?',
    answer:
      'npm stands for Node Package Manager. It is used to manage libraries and dependencies in Node.js projects.',
  },
  {
    question: 'What is the difference between require and import?',
    answer:
      '`require()` is CommonJS syntax and used in older Node.js. `import` is ES6 module syntax and used in modern JavaScript with support via "type": "module".',
  },
  {
    question: 'What is an event loop in Node.js?',
    answer:
      'The event loop allows Node.js to perform non-blocking I/O operations by offloading operations to the system and executing the callback when ready.',
  },
  {
    question: 'What is middleware in Node.js?',
    answer:
      'Middleware is a function in Express.js that has access to request, response, and the next function. It is used for logging, authentication, etc.',
  },
];

const NodeJsPage = () => {
  const [selectedQA, setSelectedQA] = useState(null);

  const openModal = (qa) => setSelectedQA(qa);
  const closeModal = () => setSelectedQA(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🟢 Node.js Interview Prep</h1>
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
    color: '#27ae60',
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
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default NodeJsPage;
