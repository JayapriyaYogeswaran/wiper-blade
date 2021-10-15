<template>
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container">
          <div class="row mb-2" >
            <div class="col-sm-12">
                <div class="row">
                    <div class="col">
              <h1 class="m-0">SUMMARY</h1>   
                    </div>
                    <div class="col text-right">
               <router-link to="/" > <button class="btn btn-success btn-sm" >Go Back</button></router-link>
                    </div>
                </div>
              <br />
              <div v-if="this.selProduct.length != 0">
             <div class="row" v-for="li in selProduct" :key="li.sel.id">
                 <div class="col">
                    {{li.quantity}}  &nbsp;&nbsp;  x &nbsp;&nbsp;   {{li.sel.title}}
                 </div>
                  <div class="col" style="color: blue; font-weight: bold">
                     $ {{li.quantity * li.sel.price}}
                  </div>
             </div>
             <br><br>
             <b>Total Amount : </b> {{total}}
             <br><br>

             <button type="submit"  data-toggle="modal" data-target="#modal-default" class="btn btn-success">Pay Now</button>
              </div>
              <div v-else>
                  You do not any Select Product , Please select Product
              </div>
            </div>
            <!-- /.col -->
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
          <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Paid Successfully</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <p>Total Amount : {{total}}</p>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.content-header -->

      <!-- Main content -->
  </div>
</template>
<script>
export default {
    data () {
        return {
           selProduct : [],
           total : 0
        }
    },
  
    mounted () {
        this.selProduct = this.$store.state.cart
        console.log(this.selProduct)
        for(let i=0;i<this.selProduct.length ; i++) {
            this.total += this.selProduct[i].quantity *  this.selProduct[i].sel.price
        }
    }
}
</script>