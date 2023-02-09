<template>
  <div class="shop-filter flex items-center justify-center gap-20 pb-16">
    <button
        v-for="filter in filters"
        :key="filter"
        class="filter relative overflow-hidden"
        :class="{ 'active': filter === active }"
        @click="$emit('filter', filter), active = filter"
    >
        {{ filter }}
    </button>
  </div>
</template>

<script setup>

  const filters = [
    'quint',
    'ridley',
    'eddy merckx',
    'ritchey'
  ]

  let active

</script>