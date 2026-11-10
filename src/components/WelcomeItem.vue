<script setup>

//defineModel 定义一个响应式的属性，用于接收父组件传递过来的数据
//同时也可以向父组件传递数据 比如 mm=e.target.value
import {storeToRefs} from 'pinia';
import {useCounterStore} from '../store/counter.js';
const counterStore=useCounterStore();
const {count}= storeToRefs(counterStore); 
const {add}= counterStore; // 方法可以直接解构，因为不需要响应式属性
</script>

<template>
  <div id="app">
    <p>这是组件2-{{ count }}- <button @click="add(1)">+</button> </p>
  </div>
</template>

<style>

</style>