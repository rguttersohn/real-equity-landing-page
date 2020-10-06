<template>
  <div>
    <Event :details="details" />
  </div>
</template>

<script>
import Event from "@/components/Event.vue";
export default {
  components: {
    Event
  },
  data() {
    return {
      details: {
        event: "Economic Equity",
        when: "October 1 from 9:30-10:30AM",
        host: "Jennifer Jones Austin, FPWA’s CEO and Executive Director",
        panelists: [
          "Ron Deutsch, Executive Director of the Fiscal Policy Institute",
          "Darrick Hamilton, Henry Cohen Professor of Economics and Urban Policy and Founding Director of the Institute for the Study of Race, Stratification, and Political Economy at the New School"
        ],
        intro: `
            <p>
              Nearly one in five New Yorkers, a majority of whom are from communities of color or immigrant backgrounds, are living in poverty. Nearly 40% are unable to afford basic household needs for themselves or their family.
            </p>
             <p>
               These disparities are not new, but rather the result of purposeful and systemic economic exclusion for generations of Black and brown communities. How did we get here and how do we begin to address these deep, historic economic disparities across our city?
             </p>
            `,
        url:
          "https://us02web.zoom.us/webinar/register/1316001774698/WN_7DTnNuJFTbCRuHNRkECR0A",
        date: "October 1, 2020",
        jsonDate:"2020-10-01T09:30"
      }
    };
  }
};
</script>

<style scoped></style>
