<template>
  <div>
<CNavbar  sticky expandable="md" class="mt-4" light color="azure">
    <CToggler in-navbar @click="collapse = !collapse"/>
    <CNavbarBrand href="/">Portfolio</CNavbarBrand>
    <CCollapse :show="collapse" navbar>
      <CNavbarNav>
        <CNavItem to="/" >Home</CNavItem>
         <CNavItem to="/about" >About</CNavItem>
         <CNavItem to="/blogs" >Blog</CNavItem>
      </CNavbarNav>

      <!-- Right aligned nav items -->
      <CNavbarNav class="ml-auto">
          <CNavItem><b-icon icon="envelope-fill" font-scale="1"></b-icon><a> rrahuljadhav.rj@gmail.com</a></CNavItem>
        <!-- <CForm inline>
          <CInput
            class="mr-sm-2"
            placeholder="Search"
            size="sm"
          />
          <CButton
            color="primary"
            size="sm"
            class="my-2 my-sm-0"
            type="submit"
            v-model="query"
          >
            Search
          </CButton>
        </CForm> -->
      </CNavbarNav>
    </CCollapse>
  </CNavbar>
  <div style="border-bottom: 1px solid gray"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      query: ''
    }
  }

}
</script>

<style scoped>

</style>
