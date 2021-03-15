<template>
<div id="header-nav">
  <h1>{{ message }}</h1>
</div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    message: "Beers"
  })
};
</script>

<style>
#header-nav{
  height: 110px;
  background-image: url('../assets/header.jpg');
  background-repeat:no-repeat;
    background-size:100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: rgb(243, 239, 239);
  padding: 0;
}

</style>
