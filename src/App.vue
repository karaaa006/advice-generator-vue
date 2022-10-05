<script setup>
import AppButton from "./components/AppButton.vue";
</script>

<template>
  <main>
    <div class="advice-wrap">
      <div class="advice-num">ADVICE #220</div>
      <div class="advice-text">
        “Most things are not as bad as you think they are.”
      </div>
      <AppButton text="Btn" />
    </div>
  </main>
</template>

<style scoped>
.advice-wrap {
  background-color: #323a49;
  color: #cee3e9;

  width: 100%;
  max-width: 500px;
  margin-bottom: 50px;
  padding: 50px 10px 0;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 25px rgb(0 0 0 / 30%);
  color: hsl(193, 38%, 86%);
}

.advice-num {
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 12px;
  color: hsl(150, 100%, 66%);
}

.advice-text {
  padding-bottom: 30px;

  font-size: 28px;

  border-bottom: 1px solid hsla(193, 38%, 86%, 0.363);
}
</style>
