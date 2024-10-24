<template>
  <div class="callout" :class="type">
    <div class="content">
      <Icon v-if="icon" :name="icon" class="icon" :style="{ color: iconColor }"></Icon>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info', // Define types like 'info', 'warning', 'success'
    },
    icon: {
      type: String,
      default: '', // Optional icon, e.g. an emoji or FontAwesome icon
    }
  },
  computed: {
    iconColor() {
      switch (this.type) {
        case 'info':
          return '#00bcd4'; // Info color
        case 'warning':
          return '#ff9800'; // Warning color
        case 'success':
          return '#4caf50'; // Success color
        default:
          return '#000'; // Default black color
      }
    }
  }
}
</script>

  
  <style scoped>
  .callout {
    border-left: 4px solid;
    padding: 16px;
    margin: 16px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .callout.info {
    border-color: #00bcd4;
  }
  
  .callout.warning {
    border-color: #ff9800;
  }
  
  .callout.success {
    border-color: #4caf50;
  }
  
  .icon {
    font-size: 24px;
    margin-right: 8px;
  }
  
  .content {
    display: inline-block;
  }
  </style>
  