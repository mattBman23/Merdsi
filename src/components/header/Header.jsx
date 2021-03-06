import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {
  Backdrop,
  Button,
  Divider,
  Drawer,
  Fade,
  FormGroup,
  IconButton,
  Modal,
  TextField,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { CartItems } from '../../widgets/CartItems';
import { AuthForm } from '../../widgets/authForm/AuthForm';

export const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);

  return (
    <div className={`${styles.container} topBotLayoutPadding`}>
      <div className={styles.imgContainer}>
        <img src={logo} />
      </div>
      <div className={styles.btnGroup}>
        <Button variant="outlined" onClick={() => setShowAuthForm(true)}>
          Login
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showAuthForm}
          className={styles.modal_body}
          onClose={() => setShowAuthForm(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showAuthForm}>
            <div className={styles.modal_content}>
              <AuthForm />
            </div>
          </Fade>
        </Modal>

        <IconButton onClick={() => setShowDrawer(true)} component="span">
          <ShoppingCart />
        </IconButton>
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          <div
            onClick={() => setShowDrawer(false)}
            onKeyDown={() => setShowDrawer(false)}
          >
            <CartItems />
          </div>
        </Drawer>
      </div>
    </div>
  );
};
