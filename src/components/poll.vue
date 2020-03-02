<template>


</template>

<script>

export default {

name: "Poll",

props: ["options"],

data() {



},

methods: {

vote(option) {

this.$socket.emit("vote", option);

this.selectedOption = option;

}

}

};

</script>