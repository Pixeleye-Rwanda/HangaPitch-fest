<template>
<div class="">
    <button
      v-show="showScrollButton"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 bg-navy text-white  rounded-sm p-4  shadow-lg transition-opacity duration-300"
    >
    <i class="fa fa-long-arrow-up text-white fa-1x" aria-hidden="true"></i>

    </button>
</div>

</template>

<script>
export default{
    name:"scrollButton",
    data() {
    return {
      showScrollButton: false, 
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showScrollButton = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
}

</script>
<style>
</style>