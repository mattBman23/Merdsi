import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={`${styles.container} topBotLayoutPadding`}>
      <div className={styles.copyrights}>
        &copy; <span>MERDSI</span>
      </div>
      <div className={styles.socialMedias}>
        <Facebook />
        <Twitter />
        <YouTube />
        <Instagram />
      </div>
    </div>
  );
};
