<template>
  <div :class="{'navbar': true, 'light-mode': !homeStore.darkMode}">
    <div class="logo-container">
      <div class="logo-circle">
        <div class="logo-circle-triangle" />
      </div>
      <div class="logo-background-bot" />
    </div>
    <div class="navbar-bottom-container">
      <div @click="homeStore.setDarkMode()" class="light-mode-container">
        <i class="material-icons">light_mode</i>
      </div>
      <div class="profile-container">
        <div class="photo-container">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '~~/stores';

const homeStore = useHomeStore();
</script>

<style lang="scss" scoped>
</style>
