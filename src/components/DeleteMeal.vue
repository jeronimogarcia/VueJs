<template>
    <div>
        <button @click="$emit('deleteMeal', index)">
            Delete Meal
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            index: Number
        }
    }
</script>

<style scoped>

</style>