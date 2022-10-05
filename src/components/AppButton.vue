<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <button class="btn">{{ text }}</button>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: none;
  margin: 0 auto;
  border-radius: 100%;
  transform: translateY(50%);
  background-color: hsl(150, 100%, 66%);
  cursor: pointer;
  transition: box-shadow 250ms ease;
}

.btn:hover {
  box-shadow: 0 0 30px hsl(150deg 100% 66%);
}
</style>
