<template>
  <div class="navigation">
    <b-navbar toggleable="sm" type="dark" variant="success">
      <b-navbar-brand to="/">
        <b-img
          src="https://clientdata.mx/wp-content/uploads/2018/11/kiosko1.png"
          fluid
          width="90"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <!-- <b-dropdown
        split
        split-variant="outline-dark"
        variant="dark"
        text="Menu"
        class="m-2"
      >
      <b-dropdown-item>First Action</b-dropdown-item>
      </b-dropdown>-->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="stock">
            <b-img
            src="https://image.flaticon.com/icons/svg/258/258273.svg"
            fluid
            width="30"
            to="stock"
            ></b-img>
            Stock
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style></style>
