import View from "./View";

class Widget extends View {
  _parentEl = document.querySelector(".widget-con");

  _allTabs = document.querySelectorAll(".tab-content-lb");
  _allLinks = document.querySelectorAll(".tabs-lb a");
  _tabContentWrapper = document.querySelector(".tab-content-wrapper-lb");
  _allTabsTeam = document.querySelectorAll(".tab-content");
  _allLinksTeam = document.querySelectorAll(".tabs a");
  _tabContentWrapperTeam = document.querySelector(".tab-content-wrapper");

  shiftTabs = (linkId) => {
    this._allTabs.forEach((tab, i) => {
      if (tab.id.includes(linkId)) {
        this._allTabs.forEach((tabItem) => {
          tabItem.style = `transform: translateY(-${i * 300}px);`;
        });
      }
    });
  };

  addHandlerSlide() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target.closest(".tabs-lb a");
      if (!link || link.classList.contains("active")) return;

      // Remove "active" class from all links
      this._allLinks.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });

      // Add "active" class to the clicked link
      link.classList.add("active");

      // Get the linkId from the clicked link
      const linkId = link.id;

      // Call the shiftTabs method to handle the tab shift
      this.shiftTabs(linkId);
    });
  }

  shiftTabsTeam = (linkId) => {
    this._allTabsTeam.forEach((tab, i) => {
      if (tab.id.includes(linkId)) {
        this._allTabsTeam.forEach((tabItem) => {
          tabItem.style = `transform: translateY(-${i * 300}px);`;
        });
      }
    });
  };

  addHandlerSlideTeam() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      const link = e.target.closest(".tabs a");
      if (!link || link.classList.contains("active")) return;

      // Remove "active" class from all links
      this._allLinksTeam.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });

      // Add "active" class to the clicked link
      link.classList.add("active");

      // Get the linkId from the clicked link
      const linkId = link.id;

      // Call the shiftTabs method to handle the tab shift
      this.shiftTabsTeam(linkId);
    });
  }
}

export default new Widget();
