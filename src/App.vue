<script setup></script>

<template>
  <el-button type="primary">Primary</el-button>
  <div class="test">test scss</div>
  <RouterView />
</template>

<style scoped lang="scss">
.test {
  color: $warnColor;
}
</style>
