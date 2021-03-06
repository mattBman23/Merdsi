import { Button, Divider, FormGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import styles from './AuthForm.module.css';

export const AuthForm = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <p className={styles.header}>{showLogin ? 'Login' : 'Register'}</p>
      <Divider variant="fullWidth" />
      <FormGroup>
        <div className={styles.formGroup}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            autoComplete="off"
          />
          <br />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            autoComplete="off"
          />
          <br />
          {!showLogin && (
            <>
              <TextField
                type="password"
                label="Confirm Password"
                variant="outlined"
                autoComplete="off"
              />
              <br />
            </>
          )}

          <Button variant="contained" color="primary">
            {showLogin ? 'Login' : 'Register'}
          </Button>
        </div>
      </FormGroup>
      <Divider variant="fullWidth" />
      <div className={styles.botInfo}>
        {showLogin ? (
          <p>
            New to Merdsi?{' '}
            <span onClick={() => setShowLogin(false)}>Create an account</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setShowLogin(true)}>Login</span>
          </p>
        )}
      </div>
    </>
  );
};
