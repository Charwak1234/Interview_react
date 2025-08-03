import React, { useState } from 'react';

const questions = [
  {
    question: 'What is Java?',
    answer:
      'Java is a high-level, object-oriented programming language developed by Sun Microsystems. It is platform-independent and widely used for building enterprise applications.',
  },
  {
    question: 'What are the features of Java?',
    answer:
      'Object-Oriented, Platform-Independent, Secure, Robust, Multithreaded, High Performance with Just-In-Time compilers.',
  },
  {
    question: 'What is JVM?',
    answer:
      'JVM (Java Virtual Machine) is an abstract machine that enables your Java application to run on any device or operating system.',
  },
  {
    question: 'Difference between JDK, JRE, and JVM?',
    answer:
      'JDK is the Java Development Kit, JRE is the Java Runtime Environment, and JVM is the Java Virtual Machine. JDK includes JRE and development tools.',
  },
  {
    question: 'What is OOP?',
    answer:
      'Object-Oriented Programming (OOP) is a programming paradigm based on the concept of objects. It includes principles like encapsulation, inheritance, and polymorphism.',
  },
];

const JavaPage = () => {
  const [selectedQA, setSelectedQA] = useState(null);

  const openModal = (qa) => setSelectedQA(qa);
  const closeModal = () => setSelectedQA(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>☕ Java Interview Prep</h1>
      <p style={styles.intro}>Click on a question to view the answer.</p>

      <ul style={styles.list}>
        {questions.map((qa, index) => (
          <li key={index} onClick={() => openModal(qa)} style={styles.question}>
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
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default JavaPage;
