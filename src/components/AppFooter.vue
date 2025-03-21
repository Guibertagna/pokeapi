<template>
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">&copy; 2025  The Pokémon Company. All rights reserved.</p>
        <nav class="footer-nav">
          <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
          <router-link to="/terms" class="footer-link">Terms of Use</router-link>
          <router-link to="/contact" class="footer-link">Contact</router-link>
        </nav>
      </div>
      <div class="social-media">
        <a href="https://facebook.com" target="_blank" class="social-link">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="social-link">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-link">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" class="social-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e51c23;
    color: #fff;
    padding: 20px 30px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.05);
    height: auto;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 900px;
    flex-wrap: wrap;
    text-align: center;
  }
  
  .footer-text {
    font-size: 14px;
  }
  
  .footer-nav {
    display: flex;
    gap: 20px;
  }
  
  .footer-link {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.2s ease;
  }
  
  .footer-link:hover {
    color: #ECDFCC;
    transform: scale(1.05);
  }
  
  .social-media {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
  
  .social-link {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s ease, transform 0.2s ease;
  }
  
  .social-link:hover {
    color: #ECDFCC;
    transform: scale(1.2);
  }
  </style>
  