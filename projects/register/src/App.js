import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/register', formData);
      console.log('Registration successful:', response.data);
      
    } catch (error) {
      console.error('Registration error:', error.response.data);
      
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <p>Введите номер телефона:</p>
        <input name="phoneNumber" type="text" placeholder='Введите номер телефона' onChange={handleChange} />
        <p>Введите пароль:</p>
        <input name="password" type="password" placeholder='Введите пароль' onChange={handleChange} />

        <label className="term">Я даю согласие на <a href='/register/public/term.html'>обработку персональных данных</a></label>
        
        <button type='submit' className="butn">Зарегистрироваться</button> 
        <a href="./autoriz.html" className="autoriz">Уже есть аккаунт?</a>
      </form>
    </div>
  );
};

export default App;




