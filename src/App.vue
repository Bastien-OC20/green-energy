<template>
  <nav class="navbar navbar-expand-lg  p-3 fixed-top" id="mainNav">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="./assets/logo-bw.png" alt="Green_E Logo" id="logoImg" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse bg-dark" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link mx-2 active"
              aria-current="page"
              href="#"
              >Home</router-link
            >
          </li>
          <li class="nav-item dropdown ">
            <router-link
              to="/solaire"
              class="nav-link mx-2 dropdown-toggle"
              href="/solaire"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Le solaire</router-link
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <router-link
                  to="/Solar/PhotoPanel"
                  class="nav-link mx-2"
                  href="/Solar/PhotoPanel"
                  >photovoltaique</router-link
                >
              </li>
              <li>
                <router-link
                  to="/Solar/SolarPanel"
                  class="nav-link mx-2"
                  href="/Solar/SolarPanel"
                  >Solaire</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/eolien" class="nav-link mx-2" href="/eolien"
              >L'éolien</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link mx-2" href="/about"
              >About</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div
    id="hero"
  >
    <h1
      class="display-3 text-center text-white greatVibesFont"
    >
      Envie de changer d'énergie ?
    </h1>
  </div>
  <div class="vh-90"></div>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods() {
    const mainNav = document.getElementById("mainNav");
    const logoImg = document.getElementById("logoImg");
    //const hero = document.getElementById("hero");
    let heroActive = false; // To enhance performance, I chose this global variable to track the navbar changes.
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        if (!heroActive) {
          heroActive = true;
          mainNav.classList.add("bg-dark");
          if (window.innerWidth < 956) return;
          logoImg.className = "consize";
        }
      } else {
        if (heroActive) {
          heroActive = false;
          mainNav.classList.remove("bg-dark");
          if (window.innerWidth < 956) return;
          logoImg.className = "";
        }
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #051f38;
}


.router-link-exact-active {
  color: #42b983;
}
.greatVibesFont {
  font-family: GreatVibes;
  color:black;
  
  padding-top: 20vh;
        padding-bottom: 10vh;
        text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.8);
}



.navbar-brand img {
  width: 100%;
  max-width: 350px;
  position: absolute;
  transition: all 300ms linear;
  transform-origin: 0% 0%;
}

@media screen and (max-width: 956px) {
  .navbar-brand img {
    width: 100%;
    max-width: 150px;
    position: relative;
  }
}

#hero{
  background: url('./assets/img/green_E-1.jpg') no-repeat;
      background-size: cover;
      background-position: top center;
}

img.consize {
  transform: translateY(-10px) scale(0.15);
}
#mainNav {
  transition: background 300ms linear;
  color:black;
  
}
</style>
