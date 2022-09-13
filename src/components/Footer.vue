<template>
    <div class="footerContainer">
        <h2>{{footerTitle}}</h2>
    </div>
</template>

<script>
export default {
    props: {
        footerTitle: String
    }

}
</script>

<style scoped>
.footerContainer {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: rgb(198, 193, 193);
    display: flex;
    justify-content: center;
    z-index: 2;

}
</style>