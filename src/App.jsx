import React from 'react';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>LOL</main>
      <Footer />
    </div>
  );
};
