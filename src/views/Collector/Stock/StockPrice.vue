<script setup lang="ts">
import { ElTable, ElTableColumn } from 'element-plus'
import { ContentWrap } from '@/components/ContentWrap'
import { getAllStockInfo } from '@/api/collector/stockDate'

defineOptions({
  name: 'StockPrice'
})

const tableData = async () => {
  await getAllStockInfo()
    .then((value) => {
      return value.data
    })
    .catch((err) => {
      console.error(err)
    })
}
</script>

<template>
  <ContentWrap>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="code" label="Code" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
    </el-table>
  </ContentWrap>
</template>
