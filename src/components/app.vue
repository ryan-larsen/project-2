<!-- /src/App.vue -->

<template>

<div id="app">

<Header/>

<div class="body">

<!-- app body here -->

</div>

</div>

</template>

<script>

import Header from "./components/Header";

export default {

name: "app",

components: {

Header,

},

data() {

return {

options: [

{

value: 0,

id: 1,

category: "Before 9:00pm"

},

{

value: 0,

id: 2,

category: "After 9:00pm before 10:00pm"

},

{

value: 0,

id: 3,

category: "Before 11:00pm"

},

{

value: 0,

id: 4,

category: "Early hours - 12:00am"

}

],

voted: false

};

}

</script>

<style>

#app {

width: 70%;

margin: auto;

color: #2c3e50;

font-family: muli, sans-serif;

font-weight: 400;

}

.body {

display: flex;

}

</style>
