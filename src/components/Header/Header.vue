<template>
  <div class="Header">
    <div class="Header_left">
      <slot name="Header_left"></slot>
    </div>
    <div class="Header_title">
      <slot name="Header_title"></slot>
    </div>
    <div class="Header_right">
      <slot name="Header_right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style>
.Header {
  width: 100%;
  display: flex;
  height: 6vh;
  line-height: 6vh;
  background-color: #cf2d28;
}
.Header div {
  font-size: 6vw;
  text-align: center;
  color: white;
}
.Header .Header_left,
.Header .Header_right {
  width: 6vh;
}
.Header .Header_title {
  flex: auto;
}
</style>