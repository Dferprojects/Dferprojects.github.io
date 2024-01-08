


const { createApp } = Vue

createApp({
  data() {
    return {
      data: undefined,
      array:[],
      searchValue:"",
      checked:[],
      types: [],
      arrayCompleto:[],
      inicio:1,
      tope:201

      
     
    }
  }, 


  
  created(){
      this.loadData()

    },
    

        
      

    methods: {

      aumentar:function(){
        this.inicio += 200
        this.tope += 200
        this.loadData()

       
      },

      reducir:function(){
        this.inicio -= 200
        this.tope -= 200
        this.loadData()
       
      },

      searchFilter:function(){
        let filtrados = this.arrayCompleto.filter(a => a.name.toLowerCase().includes(this.searchValue.toLowerCase()))
        this.array = filtrados
       
      },

      checkInput:function(){
        if(this.checked.length == 1 || this.checked.length ==2){
        let filtrarPrimerTipo = this.arrayCompleto.filter(a => a.types[0].type.name == this.checked)
        this.array = filtrarPrimerTipo
      } else {
        location.reload()
      }
  },

  loadData:function(){
    let URL = "https://pokeapi.co/api/v2/pokemon/"
    this.array = []
    for(let i = this.inicio ; i < this.tope; i++){
        axios.get(URL + i)
            .then(response => {
              this.data = response.data
              this.array.push(this.data)
              this.array.sort((a,b)=>a.id-b.id)
              this.types.push(this.data.types[0].type.name)
              this.arrayCompleto=this.array 
              
          }
        ) 
      }
    },

    colorCard:function(color){
      switch(color){
        case "grass": 
          return "var(--color-grass)";
          break;
        case "normal":
          return "var(--color-normal)";
          break;
        case "fire":
          return "var(--color-fire)";
          break;
        case "water": 
          return "var(--color-water)";
          break;
        case "electric":
          return "var(--color-electric)";
          break;
        case "ice":
          return "var(--color-ice)";
          break;
        case "fighting": 
          return "var(--color-fighting)";
          break;
        case "poison":
          return "var(--color-poison)";
          break;
        case "psychic":
          return "var(--color-psychic)";
          break;
        case "flying": 
          return "var(--color-flying)";
          break;
        case "bug":
          return "var(--color-bug)";
          break;
        case "rock":
          return "var(--color-rock)";
          break;
        case "ghost": 
          return "var(--color-ghost)";
          break;
        case "dark":
          return "var(--color-dark)";
          break;
        case "dragon":
          return "var(--color-dragon)";
          break;
        case "steel":
          return "var(--color-steel)";
          break;
        case "fairy":
          return "var(--color-fairy)";
          break;
        case "ground":
          return "var(--color-ground)";
          break;
      }
    },

  },
 
  

}).mount("#app")

