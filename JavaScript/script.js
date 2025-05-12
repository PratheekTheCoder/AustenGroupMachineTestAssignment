

document.addEventListener("DOMContentLoaded", () => {
const menuItems = document.querySelectorAll('.desktop-nav-menu-item');

// Close all open submenus
function closeAllSubmenus() {
  document.querySelectorAll('.desktop-nav-submenu-items-wrapper').forEach(submenu => {
    submenu.classList.remove('child-open');
  });
}

// Toggle submenu: open if closed, close if open
function toggleSubmenu(submenu) {
  const isOpen = submenu.classList.contains('child-open');
  closeAllSubmenus(); // Always close others first

  if (!isOpen) {
    submenu.classList.add('child-open');
  }
}

// Initialize click events
function initDesktopNavMenu() {
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const submenu = item.querySelector('.desktop-nav-submenu-items-wrapper');
      if (submenu) {
        toggleSubmenu(submenu);
      }
    });
  });
}

// Initialize
initDesktopNavMenu();

// brands filters script starts here
const filterTabs = document.querySelectorAll("ul.brands-filters-tabs-list li.brands-filters-tab-items");
const productItems = document.querySelectorAll(".filtered-products-list-outer .filtered-product-item");

// Apply active class to selected tab
function setActiveTab(selectedTab) {
  filterTabs.forEach(tab => tab.classList.remove("active"));
  selectedTab.classList.add("active");
}

// Show or hide product items based on selected filter
function filterProductsByBrand(filterValue) {
  productItems.forEach(product => {
    const brand = product.getAttribute("data-filter").toLowerCase();
    const wrapper = product.parentElement;

    wrapper.style.display = (filterValue === "all" || brand === filterValue) ? "flex" : "none";
  });
}

// Handle tab click event
function onTabClick(tab) {
  const filterValue = tab.getAttribute("data-filter").toLowerCase();
  setActiveTab(tab);
  filterProductsByBrand(filterValue);
}

// Attach event listeners to each filter tab
function initializeFilterTabs() {
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => onTabClick(tab));
  });
}

//  default filter tab on page load
function applyDefaultFilter() {
  const defaultTab = document.querySelector('li[data-filter="all"]');
  if (defaultTab) {
    onTabClick(defaultTab);
  }
}

// Initialize filtering logic
initializeFilterTabs();
applyDefaultFilter();
});

