<template>
  <div class="event-wrapper" :class="eventClasslist[0]">
    <h2><span>Event Name:</span> {{details.event}}</h2>
    <p><span>When:</span> {{details.when}}</p>
    <p  v-if="details.host !==''"><span>Hosted by:</span> {{details.host}}</p>
    <p  v-if="details.panelists.length > 0"><span>Panelists:</span></p>
    <ul v-for="panelist in details.panelists" :key="panelist">
      <li>{{panelist}}</li>
    </ul>
    <p><span>Session Summary:</span></p>
    <div v-html="details.intro"></div>
    <a :href="details.url" target="_blank">
      <button v-if='details.url === "#"' disabled class="event-passed">Registration coming soon</button>
      <button v-else-if="eventDate > date" >Register for the {{details.event}} webinar here</button>
      <button v-else disabled class="event-passed" >This event has passed</button>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    details: Array
  },
  computed:{
    date(){
      return new Date()
    },
    eventDate(){
      return new Date(this.details.date)
    }
  },
  data() {
    return {
      eventClasslist: []
    };
  },
  methods: {
    addHighlightClass() {
      this.eventClasslist.pop();
      this.eventClasslist.push("add-highlight");
    }
  },
  mounted() {
    this.addHighlightClass();
  }
};
</script>

<style >
#app .event-wrapper {
  width: 70%;
  margin: auto;
  margin-bottom: 5%;
  padding:3%;
  border-radius:15px;
}

#app .event-wrapper h2 span, #app .event-wrapper p span{
color: #cc6633;
font-weight:bold;
}

#app .event-wrapper a button:hover {
  cursor: pointer;
  background-color: #333333;
  color: #ffcc66;
}
#app .event-wrapper a button {
  padding: 3%;
  background-color: #ffcc66;
  color: #333333;
  font-size: 120%;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  transition: all 0.3s ease-in-out;
  margin: 3% auto;
}
#app  .event-wrapper a button.event-passed {
  cursor:initial;
  background-color: #fcedd0;
}

#app .event-wrapper a button.event-passed:hover {
  background-color: #fcedd0;
  color:initial
}

#app .add-highlight {
  animation: fade-highlight;
  animation-fill-mode: forwards;
  animation-iteration-count: initial;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

@keyframes fade-highlight {
  from {
    background-color: #fee3df;
  }
  to {
    background-color: #ffffff;
  }
}

@media screen and (max-width:928px){
  #app .event-wrapper{
    width:90%;
    margin:auto;
  }
}
</style>