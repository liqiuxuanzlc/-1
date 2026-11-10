import { defineStore } from 'pinia'
import { ref } from 'vue'

// 模块名：use counter store
// 模块状态：count, msg
// 模块操作：add
export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const msg = ref('hello pinia')
    const add = (x) => {
      count.value += x
    }

    return {
      count,
      msg,
      add,
    }
  },
  {
    persist: {
      key: 'counterllllllllllllllll',
      pick: ['count'], // 只持久化count属性
    },
  }
)
