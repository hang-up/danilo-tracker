<script>
export default {};
</script>

<template>
  <div>
    <form>
      <div>
        <slot name="form-header"></slot>
      </div>
      <div>
        <slot name="form-content"></slot>
      </div>
      <div>
        <slot name="form-actions"></slot>
      </div>
    </form>
  </div>
</template>
