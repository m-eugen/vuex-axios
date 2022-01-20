<template>
  <div class="loader-wrapper" v-if="isShowLoader">
    <b-spinner type="grow" variant="light"></b-spinner>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>
<style scoped>
.loader-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
