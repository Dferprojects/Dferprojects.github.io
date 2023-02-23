
const { createApp } = Vue

createApp({
  data() {
    
    return {
      data: [],
      
    }
  }, 
  
  created(){
    this.loadData()
  },
  
  methods: {
    loadData(){
        axios.get("https://randomuser.me/api/")
        .then(response => {
        this.data = response.data.results
        
        })
    },
    changeProfile(){
     location.reload()
  },
}
   
}).mount("#app")
