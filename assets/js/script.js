const { createApp } = Vue

createApp({
  data() {
    
    return {
      data: [],
      
    }
  }, 
  
  created(){
    setInterval("location.reload()",2000);
    this.loadData()
  },
  
  methods: {
    loadData(){
        axios.get("https://randomuser.me/api/")
        .then(response => {
        this.data = response.data.results
        
        })
    },
}
   
}).mount("#app")
