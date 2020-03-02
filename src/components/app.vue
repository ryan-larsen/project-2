<template>

<div id="app">

<Header/>

<div class="body">

<Poll :options="options"/>

<PollsChart :options="options" v-if="voted"/>

</div>

</div>

</template>

<script>

import Header from "./components/Header";

import Poll from "./components/Poll";

import PollsChart from "./components/Chart";

export default {

name: "app",

components: {

Header,

Poll,

PollsChart

},

data() {

...

},

};

</script>

<style>

...

</style>