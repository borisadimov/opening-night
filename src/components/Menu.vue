<template lang="pug">
  .menu(v-bind:class="{ 'showedMenu': this.scrolled }")
    a.menu-logo(href="#")
      img(src="~assets/images/logo-small.png")
    .menu-list
      a.menu-item(href="#") Cast
      a.menu-item.menu-active(href="#") Reviews
      a.menu-item(href="#") Clips
      a.menu-item(href="#") Contest
      a.menu-item.watch(href="#") Watch it now
</template>

<script>
  export default {
    name: "MenuComponent",
    data: function() {
      return {
        scrolled: false
      }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > window.innerHeight;
      }
    },
    mounted: function() {
      var raf = window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame;
          
      var lastScrollTop = window.scrollY;

       var loop = () => {
          var scrollTop = window.scrollY;
          if (lastScrollTop === scrollTop) {
              raf(loop);
              return;
          } else {
              lastScrollTop = scrollTop;

              // fire scroll function if scrolls vertically
              this.handleScroll();
              raf(loop);
          }
      }

      if (raf) {
        loop();
      }

      // window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .menu
    position: fixed
    width: 100%
    top: 0
    left: 0

    z-index: 999

    background: rgba(10,10,10,0.90)
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50)

    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

    padding: 0 30px
    height: 60px

    transform: translateY(-120%)
    transition: transform 0.3s ease
    will-change: transform

    &.showedMenu
      transform: translateY(0)

    &-logo
      position: relative

      img
        height: 71px
        position: absolute
        top: -25px
        z-index: 5

    &-list
      display: flex
      flex-flow: row nowrap
      align-items: center

    &-item
      display: block
      font-family: 'Open Sans', sans-serif
      color: #D0D0D0
      line-height: 60px
      text-transform: uppercase
      padding: 0 20px

    &-item.menu-active
      color: #FFFFFF
      font-weight: bold

    &-item.watch
      margin-left: 38px
      font-family: 'Open Sans Hebrew Condensed', sans-serif
      background-image: linear-gradient(-182deg, #f45232 0%, #e52816 100%)
      box-shadow: 0px 3px 10px 0px rgba(79, 24, 91, 0.68)
      padding: 0 18px
      border-radius: 120px
      text-transform: capitalize
      font-weight: bold
      font-size: 18px
      color: #FFFFFF
      letter-spacing: 1.46px
      text-align: center
      line-height: 35px
      cursor: pointer
</style>