<!-- /src/components/PollChart.vue -->

<template>

<section>

<kendo-chart

ref="chart"

:title-text="'What time do you go to bed?'"

:legend-position="'top'"

:tooltip-visible="true"

:tooltip-template="template"

:theme="'sass'"

:style="style"

>

<kendo-chart-series-item

:type="'donut'"

:data="options"

:labels-visible="true"

:labels-template="template"

:labels-position="'outsideEnd'"

:labels-background="'transparent'"

:labels-align="'circle'"

:style="style"

></kendo-chart-series-item>

</kendo-chart>

</section>

</template>

<script>

import { Chart, ChartSeriesItem } from "@progress/kendo-charts-vue-wrapper";

export default {

name: "PollsChart",

props: ["options"],

data() {

return {

template: "#= category # - #= kendo.format('{0:P}', percentage) #",

style: {

fontFamily: "muli, sans-serif;",

height: "500px"

}

};

}

};

</script>

<style scoped>

section {

width: 50%;

margin-left: 5%;

font-family: muli, sans-serif !important;

}

</style>