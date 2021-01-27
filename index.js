
function sideBarPullRight() {
  if (document.getElementById("sideBarToggle").checked) {
    if (window.matchMedia("(max-width: 460px)").matches) {
      document.getElementById("sideBar").style.width = "192px";
      document.getElementById("sideBarHeader").style.display = "inherit";
      document.getElementById("sideBarHeaderLogo").style.display = "block";
      document.getElementById("sideBarHeaderImg").style.display = "block";
      document.getElementById("sideBarCategoryLabelCatalog").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelHealth").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelBeauty").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelLeisure").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelAuto").style.display =
        "block";
    } else {
      document.getElementById("sideBar").style.width = "240px";
      document.getElementById("sideBarHeaderLogo").style.display = "block";
      document.getElementById("sideBarCategoryLabelCatalog").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelHealth").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelBeauty").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelLeisure").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelAuto").style.display =
        "block";
    }
  } else {
    document.getElementById("sideBarHeader").style.display = null;
    document.getElementById("sideBar").style = null;
    document.getElementById("sideBarHeaderImg").style = null;
    document.getElementById("sideBarHeaderLogo").style = null;
    document.getElementById("sideBarCategoryLabelCatalog").style = null;
    document.getElementById("sideBarCategoryLabelHealth").style = null;
    document.getElementById("sideBarCategoryLabelBeauty").style = null;
    document.getElementById("sideBarCategoryLabelLeisure").style = null;
    document.getElementById("sideBarCategoryLabelAuto").style = null;
  }
}
