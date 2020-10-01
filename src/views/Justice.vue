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
        event: "Justice Equity",
        when: "October 29 from 9:30-10:30AM",
        host: "FPWA",
        panelists: [],
        intro: `<p>
              Systemic racism drives both poverty and mass incarceration of low-income people of color, putting these communities especially at risk for justice system involvement. Join us as we discuss the systems that lead to higher rates of incarceration for Black and brown communities and the policies that must be reformed and advanced in order to address these inequities.
            </p>
            `,
        url:"https://us02web.zoom.us/webinar/register/5516001774889/WN_wJRLx2GlSXmSzcK2vZGbOQ",
      date: "October 29, 2020"
      }
    };
  }
};
</script>

<style scoped>
</style>