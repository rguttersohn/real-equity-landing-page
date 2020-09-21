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
        event: "Health and Mental Health Equity",
        when: "October 15 from 8:30-9:30AM",
        host:
          "Alice Bufkin, CCC Director Of Policy For Child And Adolescent Health",
        panelists: [],

        intro: `<p>
              Health and mental health disparities disproportionately impact communities of color and individuals living in poverty.
            </p>
             <p>
               They are influenced by limited access to primary and preventive care, quality of care received, lack of awareness, and social and physical environmental conditions. New York City’s poorest communities have a significantly higher mortality rate as compared to wealthier neighborhoods, with the impact of COVID-19 further illuminating this disparity.
             </p>
             `,
        url: "#",
        date: "October 15, 2020"
      }
    };
  }
};
</script>

<style scoped>
</style>