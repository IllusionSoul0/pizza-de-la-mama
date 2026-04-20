<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="toast">
    {{ message }}
  </div>
</template>

<style>
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;

  background: #2563eb;
  color: white;

  padding: 14px 20px;
  border-radius: 12px;

  font-weight: 600;
  font-size: 15px;

  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);

  z-index: 999;

  animation: toastIn 0.35s ease;
}

@keyframes toastIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
