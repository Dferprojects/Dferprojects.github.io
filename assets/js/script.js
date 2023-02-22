const { createApp } = Vue

createApp({
  data() {
    
    return {
      data: [],
      
    }
  }, 
  
  created(){
    this.loadData()
    this.loadWin()
  },
  
  methods: {
    loadWin() {
    setTimeout(function() {window.onload()}, 2000);
},
    loadData(){
        axios.get("https://randomuser.me/api/")
        .then(response => {
        this.data = response.data.results
        
        })
    },
}
   
}).mount("#app")
