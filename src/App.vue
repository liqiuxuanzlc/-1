<script setup>
// 引入HelloWorld组件
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import WelcomeItem from './components/WelcomeItem.vue'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './store/counter.js'
const counterStore = useCounterStore()
const { count, msg } = storeToRefs(counterStore) // 直接解构赋值，会丢失响应式属性
const doubleCount = computed(() => count.value * 2) // 计算属性，会自动更新

const mm = ref(0)
console.log(mm.value)
</script>

<template>
  <div id="app">
    <h1>这是根组件-{{ count }}</h1>
    <h2>这是根组件-{{ msg }}</h2>
    <h3>这是根组件-{{ doubleCount }}</h3>
    <WelcomeItem />
    <HelloWorld />
  </div>
</template>

<style></style>
