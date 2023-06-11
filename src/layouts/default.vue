<template>
  <div class="min-h-screen web-site-main">
    <NuxtLoadingIndicator />
    <SiteHeader />
    <div class="min-h-screen">
      <slot></slot>
    </div>
    <SiteFooter />
  </div>
</template>
