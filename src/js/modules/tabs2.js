function tabs(tabsSelector,tabsContentSelector,tabsParentSelector, activeClass) {
    //tabs
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);
    console.log(tabs);
    console.log(tabsContent);
    console.log(tabsParent);
  
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
      console.log('aaa');
      const target = e.target;
      console.log(e.target);
      
      if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item, i) => {
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  }
  
  // module.exports = tabs;
  export default tabs;