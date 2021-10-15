<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container">
          <div class="row mb-2">
            <div class="col-sm-12">
              <h1 class="m-0">REPLACE WIPER BLADES</h1>
              <br />
              <p>
                Front wiper blades are supplied as a "pair" unless otherwise
                requested , rear wiper blades are a "single" unit.(Fitting just
                the individual driver or passengers wiper blades are not
                recommened)
              </p>
            </div>
            <!-- /.col -->
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
      <div class="content">
        <div class="container">
          <div class="card">
            <div class="card-body">
          <div class="row">
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title">FRONT WIPER BLADES(PAIR)</h5>
                    </div>
                    <div class="col text-center">
                      <h5 style="color: blue; font-weight: bold">
                        € 20
                      </h5>
                    </div>
                  </div>
                  <br />
                  <p class="card-text">
                   Wiper blades(pair) for the front wind shield
                  </p>
                  <br />
                  <div class="row">
                    <div class="col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button type="submit" v-on:click="decreaseCount('front')" class="btn btn-success">-</button>
                    </div>
                    <input
                      type="number" value="1" v-model="front"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div class="input-group-append">
                      <button type="submit" v-on:click="increseCount('front')"  class="btn btn-success">+</button>
                    </div>
                  </div>
                  </div>
                  <div class="col">
                    <button type="submit" v-on:click="addProduct('front')" class="btn btn-success">Add</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
               <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title">REAR WIPER BLADES(PAIR)</h5>
                    </div>
                    <div class="col text-center">
                      <h5 style="color: blue; font-weight: bold">
                        € 30
                      </h5>
                    </div>
                  </div>
                  <br />
                  <p class="card-text">
                   Wiper blades(pair) for the rear wind shield
                  </p>
                  <br />
                  <div class="row">
                    <div class="col">
                         <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button type="submit" v-on:click="decreaseCount('rear')" class="btn btn-success">-</button>
                    </div>
                    <input
                      type="number" value="1" v-model="rear"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div class="input-group-append">
                      <button type="submit" v-on:click="increseCount('rear')"  class="btn btn-success">+</button>
                    </div>
                  </div>
                    </div>
                        <div class="col">
                    <button type="submit" v-on:click="addProduct('rear')" class="btn btn-success">Add</button>
                  </div>
                  </div>
               
                </div>
              </div>
            </div>
               <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title">HEADLIGHT WIPER BLADE</h5>
                    </div>
                    <div class="col text-center">
                      <h5 style="color: blue; font-weight: bold">
                        € 10
                      </h5>
                    </div>
                  </div>
                  <br />
                  <p class="card-text">
                  Wiper blades(pair) for the front headlight
                  </p>
                  <br />
                  <div class="row">
                    <div class="col">
                         <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button type="submit" v-on:click="decreaseCount('headlight')" class="btn btn-success">-</button>
                    </div>
                    <input
                      type="number" value="1" v-model="headlight"
                      class="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div class="input-group-append">
                      <button type="submit" v-on:click="increseCount('headlight')"  class="btn btn-success">+</button>
                    </div>
                  </div>
                    </div>
                    <div class="col">
                      <button type="submit" v-on:click="addProduct('headlight')" class="btn btn-success">Add</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- /.row -->
        </div>

        <button type="submit" class="btn btn-success" v-on:click="checkOut">Checkout</button>
            </div>
          </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
  </div>
</template>
<script>
export default {
  name: "MainContent",
  data () {
    return {
     front : 1,
     rear : 1,
     headlight :1,
     selArray : []
    }
  },

  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods : {
  decreaseCount(data) {
    if(this[data] != 0){
    this[data] -= 1
    }
  },
  increseCount(data) {
    console.log(data,this[data])
     this[data] += 1
  },
  addProduct(data) {
      this.$store.dispatch("addProductToCart" ,{
      product : data,
      quantity : this[data]
    })
    //  console.log( 'addProduct',this.$store.state.cart)
  },
  checkOut() {
    this.$router.push('summary')
     console.log( 'sdg',this.$store.state.cart)
  }
  },
  mounted() { 
    this.$store.dispatch("getList");
    console.log( 'card',this.$store.state.cart)
  
  },
};
</script>
<style>
.card-title {
  float: left;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}
.input-group {
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 84%;
}
</style>