<template>
  <div class="container-fluid">
    <h1 class="titulo text-center">
      INSTITUTO TECNOLOGICO DE VILLAHERMOSA  <b-badge variant="success">SIE</b-badge>
    </h1>
  </div>
</template>

<style lang="scss">
@import "../node_modules/rfs/scss";

.titulo{
  @include font-size(2.2rem,true);
  margin: auto;
  font-family: Inconsolata,"sans-serif";
  color:white;
  font-weight: 800;
  text-shadow: -2px -2px 3px rgb(0, 125, 10),
                2px -2px 3px rgb(0, 125, 10),
                -2px 2px 3px rgb(0, 125, 10),
                2px 2px 3px rgb(0, 125, 10);
  // -webkit-text-stroke: 4px white;

}
</style>
