<!-- /src/components/Poll.vue -->

<template>

<section>

<h4>What time do you head to bed?</h4>

<ul>

<li

v-for="option in options"

:key="option.id"

:class="{ selected: selectedOption.id === option.id }"

@click="vote(option)"

>{{option.category}}</li>

</ul>

</section>

</template>

<script>

export default {

name: "Poll",

props: ["options"],

data() {

return {

selectedOption: ""

};

}

methods: {

vote(option) {

this.selectedOption = option;

}

}

};

</script>

<style scoped>

section {

padding: 10px 25px;

border-radius: 6px;

box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);

width: 40%;

display: flex;

flex-direction: column;

justify-content: center;

border-top: 5px solid purple;

}

h4 {

font-family: poiret-one, sans-serif;

text-transform: uppercase;

font-size: 16px;

letter-spacing: 0.7px;

margin-bottom: 30px;

}

ul {

list-style: none;

padding-left: 0;

}

li {

padding: 22px 17px;

border: 1px solid rgba(0, 0, 0, 0.1);

margin-bottom: 15px;

border-radius: 6px;

cursor: pointer;

}

li.selected {

border-left: 5px solid purple;

}

</style>
