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
        event: "Housing Equity & Racial Justice",
        when: "October 8 from 9:30-10:30AM",

        host:
          "Raysa Rodriguez, CCC Associate Executive Director for Policy and Advocacy",
        panelists: ["Kadisha Davis, Housing Fellow with the Family Homelessness Coalition","Braden Crooks, Co-Founder at Designing the We","Kirk Goodrich Director of Real Estate Development at Monadnock Development"],

        intro: `<p>
          Join CCC for part two of the Racial Equity Advancement Labs (R.E.A.L.) Series. During this virtual conversation, we'll explore the intersection between family homelessness, affordable housing and historical policies such as redlining and segregation that contribute to present day housing inequity.</p> <p>Panel speakers include Kadisha Davis, Housing Fellow with the Family Homelessness Coalition; Kirk Goodrich, Director of Real Estate Development at Monadnock Development; and Braden Crooks, Co-Founder at Designing the We, who will share with us the history of redlining policies and community-driven solutions, current efforts to develop affordable housing in New York, and the necessary reforms needed to promote housing stability for families and children.  
        </p>
            `,
        url: "https://cccnewyork.salsalabs.org/housing-equity-event/index.html?page=register",
        date: "October 8, 2020"
      }
    };
  }
};
</script>

<style>
</style>