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
        event: "Children's Behavioral Health in the Age of COVID",
        when: "October 15 from 8:30-9:30AM",
        host:
          "Alice Bufkin, Director of Policy for Child and Adolescent Health at Citizens’ Committee for Children of New York",
        panelists: ["Jennifer F. Havens, MD, Vice Chair for Clinical Integration and Mentoring, Department of Child and Adolescent Psychiatry, NYU Langone Health; Director of Child and Adolescent Behavioral Health, Office of Behavioral Health, NYC Health and Hospitals; Professor, Departments of Child and Adolescent Psychiatry and Psychiatry, NYU Grossman School of Medicine","Dr. Warren Y.K. Ng MD MPH, Medical Director of Outpatient Behavioral Health and the Director of Clinical Services for the Division of Child and Adolescent Psychiatry at Columbia University Medical Center (CUMC) and New York-Presbyterian/Morgan Stanley Children's Hospital. Dr. Ng is also President-Elect for the American Academy of Child and Adolescent Psychiatry (AACAP)","Dr. Aaron Reliford, Director of Child and Adolescent Psychiatry at NYU Langone Hospital-Brooklyn and Clinical Assistant Professor, Department of Child and Adolescent Psychiatry at NYU Grossman School of Medicine"],

        intro: `<p>
              Health and mental health disparities disproportionately impact communities of color and individuals living in poverty.
            </p>
             <p>
               They are influenced by limited access to primary and preventive care, quality of care received, lack of awareness, and social and physical environmental conditions. New York City’s poorest communities have a significantly higher mortality rate as compared to wealthier neighborhoods, with the impact of COVID-19 further illuminating this disparity.
             </p>
             `,
        url: "https://cccnewyork.salsalabs.org/childrens-behavioral-health-event/index.html?page=register",
        date: "October 15, 2020"
      }
    };
  }
};
</script>

<style scoped>
</style>