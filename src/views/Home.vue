<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'
import { welcome } from '@/services/greeting'

export default createComponent({
  name: 'home',
  components: { HelloWorld },
  setup() {
    let mode = process.env.NODE_ENV ?? 'development'
    let msg = welcome(`Vue.js App ${mode}`)

    return { msg }
  }
})
</script>
