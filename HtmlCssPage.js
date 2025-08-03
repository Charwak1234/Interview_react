import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the difference between HTML and HTML5?',
    answer:
      'HTML5 is the latest version of HTML with new features like semantic tags (header, footer), multimedia support (audio, video), and canvas/SVG for graphics.',
  },
  {
    question: 'What are semantic tags in HTML?',
    answer:
      'Semantic tags clearly describe the meaning of the content. Examples: <header>, <footer>, <article>, <section>. They improve readability and SEO.',
  },
  {
    question: 'What is the Box Model in CSS?',
    answer:
      'The CSS box model consists of margins, borders, padding, and the actual content. It defines how elements are displayed and spaced on the page.',
  },
  {
    question: 'Difference between ID and Class in CSS?',
    answer:
      'ID is unique and used once per page, prefixed by `#`. Class can be reused and is prefixed by `.`. ID has higher specificity.',
  },
  {
    question: 'What is responsive design?',
    answer:
      'Responsive design makes web pages look good on all devices using media queries, flexible grids, and layout techniques like Flexbox or CSS Grid.',
  },
];

const HtmlCssPage = () => {
  const [selectedQA, setSelectedQA] = useState(null);

  const openModal = (qa) => setSelectedQA(qa);
  const closeModal = () => setSelectedQA(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎨 HTML & CSS Interview Prep</h1>
      <p style={styles.intro}>Click any question to view the answer in a pop-up.</p>

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
    backgroundColor: '#f0f5f9',
    marginBottom: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#2980b9',
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
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default HtmlCssPage;
