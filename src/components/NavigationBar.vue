<template>
    <div class="navBarContainer">
        <nav class="navbar" :class="open ? 'closed' : 'opened'" @click="toggleStatus()">
            Menu
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: true,
        }
    },
    methods: {
        toggleStatus() {
            this.open = !this.open
        }
    },
}
</script>

<style scoped>

.navBarContainer{
    display: flex;
    flex-direction: row;
    width: 100%;

}

.navBarContainer h2{
    margin-top: 0;
    padding-top: 10px;
    width: 100%;
}

.navbar {
    position: fixed;
    z-index: 1;
    top: 81px;
    background: lightblue;
    padding-top: 10px;
}

.opened {
    width: 200px;
    height: 100%;
}

.closed {
    width: 200px;
    height: 30px;
}
</style>

