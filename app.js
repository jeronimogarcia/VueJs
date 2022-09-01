Vue.component('codermeals-card',{
  props:{
      producto:Object
  },
  template:`<div align="center">
      <img :src="producto.portada" :alt="producto.titulo">
      <h3> {{producto.titulo}} </h3>
      <p>$ <b> {{producto.costo}} </b> </p>
      <button class="btn btn-success" @click="console(producto.id)">AGREGAR</button>
  </div>`,
  methods:{
      console(id){
          console.log('id',id);
      }
  }
})

//! INSTANCIA DE VUE
var app = new Vue({
  el: '#app',
  data:{
      bool:true,
      html: '<h3> {{titulo}} </h3>',
      num:0,
      codermeals: [
          {
              id: 1,
              titulo: "Spaghetti alla puttanesca",
              costo: 575.00,
              portada: "https://4.bp.blogspot.com/-D5Wvi_gX_Kg/WLatk_GVnKI/AAAAAAAAA5M/-y0gB26R0Dkb01QmdgfZqQALtd9NMV2DACLcB/s1600/P70301-072354.jpg"
          },
          {
              id: 2,
              titulo: "Pizza Napoletana ai carciofi",
              costo: 675.00,
              portada: "https://static.cookist.it/wp-content/uploads/sites/21/2017/12/istock-480277738.jpg"
          },
          {
              id: 3,
              titulo: "Porchetta umbra a cottura lunga",
              costo: 845.00,
              portada: "https://www.fontecesia.it/wp-content/uploads/2018/11/porchetta-umbra-1920x1280.jpg"
          },
          {
              id: 4,
              titulo: "Orecchiette alle cime di rapa",
              costo: 845.00,
              portada: "https://irepo.primecp.com/2016/03/259860/recipe-8673_ExtraLarge1000_ID-1461628.jpg"
          }
      ]
  },
  methods:{
  },
  computed:{
  },
})