window.onload = () => {
  const light_switch = document.querySelector(".light-switch");
  const header = document.querySelector("header");
  const meet_the_host = document.querySelector(".meet-the-host");

  light_switch.onclick = () => {
    if (light_switch.classList.contains("off")) {
      light_switch.classList.remove("off");
      light_switch.classList.add("on");
      document.body.style.background = "black";
      header.style.opacity = "0.2";
      meet_the_host.style.opacity = "0.2";
    } else {
      light_switch.classList.remove("on");
      light_switch.classList.add("off");
      document.body.style.background = "#14202f";
      header.style.opacity = "1";
      meet_the_host.style.opacity = "1";
    }
  };
};
