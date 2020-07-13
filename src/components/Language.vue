<!-- Vue component for displaying language setting -->
<template>
  <div>
    <h5>{{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: 'language',
  props: {
    msg: String
  }
}
</script>


