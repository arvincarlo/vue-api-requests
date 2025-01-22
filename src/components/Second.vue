<script>
import DataDisplay from './DataDisplay.vue';

export default {
    components: {
        DataDisplay
    }
};
</script>

<template>
    <h1>Second Page</h1>

    <router-link to="/">
        <button type="button">Back to Dashboard</button>
    </router-link>
    <p>
        Examinee: Arvin Carlo Cris
    </p>


    <div>
        <h1>Messages Table</h1>
        <data-display />
    </div>
</template>

<style scoped></style>
