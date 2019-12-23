<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <p>Version {{ version }}</p>
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
    let version = process.env.VUE_APP_VERSION ?? 'unknown'
    let mode = process.env.NODE_ENV ?? 'development'
    let msg = welcome(`Vue.js App ${mode}`)

    return {
      msg,
      version
    }
  }
})
</script>
