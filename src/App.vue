<template>
<div>
      <Header />
      <TableData />
</div>
</template>

<script>
import Header from "./components/Header.vue";
import TableData from "./components/TableData.vue";

export default {
  name: "App",
  components: {
    Header,
    TableData
  }
};
</script>