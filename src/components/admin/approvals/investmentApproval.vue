<template>
  <div class="container">
      <section class="container main-container " style="height:auto">




            <div class="row card shadow-lg p-3 mb-5" style="margin-top:-30px;margin-bottom:30px">
                <div class="col">
                <p class="text-success mt-5"><b>Investment Requests</b></p>
                <div class="form-group has-search main">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search">
                </div>
                <div class="table-responsive text-center">
                    <table class="table table-striped table-bordered">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Product Cycle</th>
                            <th scope="col">Investment Request Date</th>
                            <th scope="col">Approval Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row" class="text-success">Ajayi Olamide</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" class="btn btn-danger btn-sm">RUNNING</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row" class="text-success">Babatunde Ade</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" class="btn btn-outline-dark btn-sm">PENDING</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row" class="text-success">Balogun John</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" class="btn btn-outline-dark btn-sm">PENDING</button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </section>
  </div>
</template>

<script>
import{ mdbTbl, mdbModal, mdbBtn, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbTblHead, mdbTblBody,mdbListGroup, mdbListGroupItem, mdbBadge,mdbNavbar, mdbContainer,mdbCard, mdbRow,mdbCardBody, mdbCardTitle, mdbCardText, mdbCol, mdbNavItem,mdbIcon, mdbNavbarNav,  mdbDropdown,mdbDropdownItem,mdbDropdownMenu, mdbDropdownToggle,mdbNavbarToggler, mdbNavbarBrand, } from 'mdbvue'
export default {
 name:'investmentApproval',
 components :{
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbModal, 
    mdbModalHeader, 
    mdbModalTitle, 
    mdbModalBody, 
    mdbModalFooter,
    mdbTbl,
     mdbTblHead,
      mdbTblBody,

 }
}
</script>

<style scoped>
.main-container {
    border:2px solid black;
    margin-left:3vw;
    height: auto;
    overflow-x: hidden
 }

</style>