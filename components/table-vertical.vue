<template>
  <div class="table-responsive">
    <table :class="`table table-hover table-vertical ${size}`">
      <thead>
        <tr v-if="title">
          <th>
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for="(itemContent, index) in arrayContent" :key="index" -->
        <tr v-for="(itemContent, index) in arrayContent" :key="index">
          <td>
            {{ itemContent.name }}
          </td>
          <td>
            {{ itemContent.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      arrayContent:Array,
      size:String,
      title:String
    }
  }
</script>
