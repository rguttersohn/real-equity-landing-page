<template>
  <div class="home">
    <Event :details="details" />
  </div>
</template>

<script>
import Event from "@/components/Event.vue";

export default {
  name: "Education",
  components: {
    Event
  },
  data() {
    return {
      details: {
        event: "Education Equity",
        when: "October 22 from 9:30 to 10:30AM",
        host: "United Neighborhood Houses",
        panelists: [],

        intro:
        `<p>
          The racial educational achievement gap is interconnected with systemic inequality. Black and brown students from families with low incomes are more likely to be below proficiency standards, dropout of high school and not complete college.</p> <p>Join us as we explore how we got here and how do we begin to address these deep educational disparities across our city.</p>`,
        url: "https://zoom.us/webinar/register/WN_cF121POmRIi4F7CbM6KQyw",
        date: "October 22, 2020"
      }
    };
  }
};
</script>
