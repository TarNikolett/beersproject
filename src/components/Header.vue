<template>
<div id="header-nav">
  <h1>{{ message }}</h1>
</div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    message: "Our Products"
  })
};
</script>

<style>
#header-nav{
  height: 150px;
  background-image: url('../assets/header.jpg');
  background-repeat:no-repeat;
  background-size:100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  text-transform: uppercase;
  text-shadow: 3px 0 black, 0 3px black, 3px 0 black, 0 3px black;
  font-family: 'Akaya Telivigala', cursive;
  color: rgb(243, 239, 239);
}

</style>
