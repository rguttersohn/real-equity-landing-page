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
        host: "",
        panelists: [],
        intro: `<p>
              As our city begins to focus on recovery and rebuilding, Citizen’s Committee for Children, FPWA, United Neighborhood Houses, and UJA Federation of New York have joined together to host the Racial Equity Advancement Lab (R.E.A.L.), a collaborative effort to convene and mobilize New Yorkers committed to advancing racial justice.
            </p> 
            <p>
              Through a series of virtual conversations each Thursday in October, we will focus on five key pillars of equity- economic equity, education equity, housing equity, health equity, and justice equity- that will need to be addressed in order for our city to truly address fairness and equity for all.
            </p>
            `,
        url:"#",
      date: "October 29, 2020"
      }
    };
  }
};
</script>

<style scoped>
</style>