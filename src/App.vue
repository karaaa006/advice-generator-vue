<script>
import { fetchRandomAdvice } from "./api";
import AppButton from "./components/AppButton.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  components: {
    AppButton,
    PulseLoader,
  },
  data() {
    return {
      loading: false,
      adviceObj: null,
      error: null,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;

      try {
        const data = await fetchRandomAdvice();

        this.adviceObj = data;
        this.loading = false;
      } catch (e) {
        this.error = e;
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<template>
  <main>
    <div class="advice-wrap">
      <div class="advice-num" v-if="this.adviceObj">
        ADVICE #{{ this.adviceObj.id }}
      </div>
      <div class="advice-text" v-if="this.adviceObj">
        “{{ this.adviceObj.advice }}”
      </div>
      <div class="loader-wrapper" v-if="this.loading">
        <PulseLoader :color="'#52ffa8'" />
      </div>
      <AppButton text="NEW" :onClick="fetchData" :isDisabled="this.loading" />
    </div>
  </main>
</template>

<style scoped>
.advice-wrap {
  position: relative;

  width: 500px;

  margin-bottom: 50px;
  padding: 50px 10px 0;
  border-radius: 15px;

  background-color: #323a49;
  color: #cee3e9;
  box-shadow: 0 10px 25px rgb(0 0 0 / 30%);

  text-align: center;
}

.advice-num {
  margin-top: 0;
  margin-bottom: 30px;

  color: #52ffa8;

  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.advice-text {
  padding-bottom: 30px;

  font-size: 28px;

  border-bottom: 1px solid rgba(206, 227, 233, 0.363);
}

.loader-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
