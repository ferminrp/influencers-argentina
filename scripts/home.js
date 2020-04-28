new Vue({
  el: "#app",
  data() {
    return {
      info: null,
      searchQuery: null
    };
  },
  mounted() {
    axios
      .get("https://influencers-argentina.firebaseio.com/.json")
      .then(response => {
        this.info = response.data;
      });
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.info.filter(item => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every(v => item.username.toLowerCase().includes(v));
        });
      } else {
        return this.info;
      }
    }
  }
});
