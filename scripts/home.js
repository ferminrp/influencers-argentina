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
      .get("https://influencersargentina.xyz/data.json")
      .then(response => {
        this.info = response;
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
