<script setup lang="ts">
window.electronAPI.sendMessage("Hello from App.vue!");
</script>

<template>
	<RouterView />
</template>
<style>
html,
body {
	margin: 0;
	padding: 0;
}
</style>
