<template>



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



},

sockets: {

connect() {

console.log("connected");

},

voted(data) {

this.options = this.options.map(option => {

if (data.id === option.id) {

option.value += 1;

return option;

}

return option;

});

this.voted = true;

}

}

};

</script>

<style>



</style>
