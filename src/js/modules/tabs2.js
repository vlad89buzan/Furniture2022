function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  //tabs
  const tabs = document.querySelectorAll(tabsSelector);
  const tabsContent = document.querySelectorAll(tabsContentSelector);
  const tabsParent = document.querySelector(tabsParentSelector);
  
  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 1) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
   
    const target = e.target;
    

    if (
      target.classList.contains(tabsSelector.slice(1)) ||
      target.closest(tabsSelector).classList.contains(tabsSelector.slice(1))
    ) {
      tabs.forEach((item, i) => {
        
        if (target == item || target.closest(tabsSelector) == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// module.exports = tabs;
export default tabs;
