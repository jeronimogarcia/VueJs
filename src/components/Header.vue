<template>
    <div class="headerMainContainer">
        <div class="headerBackground">
            <div class="headerContainer">
                <h1>{{title}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
   
}
</script>

<style scoped>
.headerMainContainer {
    display: flex;
    width: 100%;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    
}
.headerBackground{
    display: flex;
    width: 100%;
    background-color: rgb(255, 255, 14);
    justify-content: center;
}
.headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    width: 750px;
    
}
</style>