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
        event: "Housing Equity",
        when: "October 8 from 9:30-10:30AM",

        host:
          "Raysa Rodriguez, CCC Associate Executive Director for Policy and Advocacy",
        panelists: [],

        intro: `<p>
              More than 90,000 New Yorkers are currently experiencing homelessness.  In NYC, families with children comprise 70% of the city’s shelter system. Each year, the number of students in temporary housing continues to trend upward.</p><p>To ensure all New Yorkers--individuals, families, and older adults-- have stable housing, we must address inequities experienced by the severely rent burdened, those living in overcrowded housing and those with a lack of access to housing supports.
            </p>
            `,
        url: "#",
        date: "October 8, 2020"
      }
    };
  }
};
</script>

<style scoped>
</style>