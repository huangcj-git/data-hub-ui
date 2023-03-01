<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
import { ContentWrap } from '@/components/ContentWrap'
import { getAllStockInfo } from '@/api/collector/stockData'
import { StockInfo } from '@/api/collector/types'

defineOptions({
  name: 'StockPrice'
})

// ref 定义组件数据
let tableData = ref([] as StockInfo[])

const flush = async () => {
  getAllStockInfo().then((res) => {
    tableData.value = res.data
  })
}

onMounted(flush)
</script>

<template>
  <ContentWrap>
    <ElButton type="primary" @click="flush">Get All Stock Info</ElButton>
    <ElTable :data="tableData" style="width: 100%">
      <ElTableColumn prop="code" label="Code" width="180" />
      <ElTableColumn prop="name" label="Name" width="180" />
    </ElTable>
  </ContentWrap>
</template>
