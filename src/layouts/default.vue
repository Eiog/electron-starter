<script setup lang="ts">
const { useDarkMode, naiveThemeOverrides, naiveLocale, naiveDateLocale }
  = storeToRefs(useAppStore())
</script>

<template>
  <naive-provider
    :dark="useDarkMode"
    :theme-overrides="naiveThemeOverrides"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
  >
    <div wfull hfull flex-center bg="white dark:gray-900">
      <header-bar />
      <div max-w-xl hfull flex-center select-none flex="col">
        <router-entry />
        <default-menu />
      </div>
    </div>
  </naive-provider>
</template>

<style scoped lang="less"></style>
