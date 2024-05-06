import React from 'react';

const SideBar = () => {
    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme" data-bg-className="bg-menu-theme" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">

  
  <div className="app-brand demo ">
    <a href="index-2.html" className="app-brand-link">
      <span className="app-brand-logo demo">

<svg width="25" viewBox="0 0 25 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path d="M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z" id="path-1"></path>
    <path d="M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z" id="path-3"></path>
    <path d="M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z" id="path-4"></path>
    <path d="M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z" id="path-5"></path>
  </defs>
  <g id="g-app-brand" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Brand-Logo" transform="translate(-27.000000, -15.000000)">
      <g id="Icon" transform="translate(27.000000, 15.000000)">
        <g id="Mask" transform="translate(0.000000, 8.000000)">
          <mask id="mask-2" fill="white">
            <use xlink:href="#path-1"></use>
          </mask>
          <use fill="#696cff" xlink:href="#path-1"></use>
          <g id="Path-3" mask="url(#mask-2)">
            <use fill="#696cff" xlink:href="#path-3"></use>
            <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-3"></use>
          </g>
          <g id="Path-4" mask="url(#mask-2)">
            <use fill="#696cff" xlink:href="#path-4"></use>
            <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-4"></use>
          </g>
        </g>
        <g id="Triangle" transform="translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ">
          <use fill="#696cff" xlink:href="#path-5"></use>
          <use fill-opacity="0.2" fill="#FFFFFF" xlink:href="#path-5"></use>
        </g>
      </g>
    </g>
  </g>
</svg>

</span>
      <span className="app-brand-text demo menu-text fw-bold ms-2">Sneat</span>
    </a>

    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
      <i className="bx bx-chevron-left bx-sm align-middle"></i>
    </a>
  </div>

  <div className="menu-inner-shadow"></div>

  
  
  <ul className="menu-inner py-1 ps ps--active-y">
    <!-- Dashboards -->
    <li className="menu-item active open">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-home-circle"></i>
        <div className="text-truncate" data-i18n="Dashboards">Dashboards</div>
        <span className="badge badge-center rounded-pill bg-danger ms-auto">5</span>
      </a>
      <ul className="menu-sub">
        <li className="menu-item active">
          <a href="dashboards-analytics.html" className="menu-link">
            <div className="text-truncate" data-i18n="Analytics">Analytics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="dashboards-crm.html" className="menu-link">
            <div className="text-truncate" data-i18n="CRM">CRM</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-ecommerce-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="eCommerce">eCommerce</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-logistics-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="Logistics">Logistics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="Academy">Academy</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Layouts -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-layout"></i>
        <div className="text-truncate" data-i18n="Layouts">Layouts</div>
      </a>

      <ul className="menu-sub">

        <li className="menu-item">
          <a href="layouts-collapsed-menu.html" className="menu-link">
            <div className="text-truncate" data-i18n="Collapsed menu">Collapsed menu</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-content-navbar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Content navbar">Content navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-content-navbar-with-sidebar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="../horizontal-menu-template/index.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Horizontal">Horizontal</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-without-menu.html" className="menu-link">
            <div className="text-truncate" data-i18n="Without menu">Without menu</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-without-navbar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Without navbar">Without navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-fluid.html" className="menu-link">
            <div className="text-truncate" data-i18n="Fluid">Fluid</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-container.html" className="menu-link">
            <div className="text-truncate" data-i18n="Container">Container</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-blank.html" className="menu-link">
            <div className="text-truncate" data-i18n="Blank">Blank</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Front Pages -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-store"></i>
        <div className="text-truncate" data-i18n="Front Pages">Front Pages</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="../front-pages/landing-page.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Landing">Landing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="../front-pages/pricing-page.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Pricing">Pricing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="../front-pages/payment-page.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Payment">Payment</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="../front-pages/checkout-page.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Checkout">Checkout</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="../front-pages/help-center-landing.html" className="menu-link" target="_blank">
            <div className="text-truncate" data-i18n="Help Center">Help Center</div>
          </a>
        </li>
      </ul>
    </li>


    <!-- Apps & Pages -->
    <li className="menu-header small text-uppercase">
      <span className="menu-header-text" data-i18n="Apps &amp; Pages">Apps &amp; Pages</span>
    </li>
    <li className="menu-item">
      <a href="app-email.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-envelope"></i>
        <div className="text-truncate" data-i18n="Email">Email</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-chat.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-chat"></i>
        <div className="text-truncate" data-i18n="Chat">Chat</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-calendar.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-calendar"></i>
        <div className="text-truncate" data-i18n="Calendar">Calendar</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-kanban.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-grid"></i>
        <div className="text-truncate" data-i18n="Kanban">Kanban</div>
      </a>
    </li>
    <!-- e-commerce-app menu start -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-cart-alt"></i>
        <div className="text-truncate" data-i18n="eCommerce">eCommerce</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-ecommerce-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Products">Products</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-product-list.html" className="menu-link">
                <div className="text-truncate" data-i18n="Product List">Product List</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-product-add.html" className="menu-link">
                <div className="text-truncate" data-i18n="Add Product">Add Product</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-category-list.html" className="menu-link">
                <div className="text-truncate" data-i18n="Category List">Category List</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Order">Order</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-order-list.html" className="menu-link">
                <div className="text-truncate" data-i18n="Order List">Order List</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-order-details.html" className="menu-link">
                <div className="text-truncate" data-i18n="Order Details">Order Details</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Customer">Customer</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-customer-all.html" className="menu-link">
                <div className="text-truncate" data-i18n="All Customers">All Customers</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <div className="text-truncate" data-i18n="Customer Details">Customer Details</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-overview.html" className="menu-link">
                    <div className="text-truncate" data-i18n="Overview">Overview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-security.html" className="menu-link">
                    <div className="text-truncate" data-i18n="Security">Security</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-billing.html" className="menu-link">
                    <div className="text-truncate" data-i18n="Address &amp; Billing">Address &amp; Billing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-notifications.html" className="menu-link">
                    <div className="text-truncate" data-i18n="Notifications">Notifications</div>
                  </a>
                </li>

              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="app-ecommerce-manage-reviews.html" className="menu-link">
            <div className="text-truncate" data-i18n="Manage Reviews">Manage Reviews</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-ecommerce-referral.html" className="menu-link">
            <div className="text-truncate" data-i18n="Referrals">Referrals</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Settings">Settings</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-settings-detail.html" className="menu-link">
                <div className="text-truncate" data-i18n="Store Details">Store Details</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-payments.html" className="menu-link">
                <div className="text-truncate" data-i18n="Payments">Payments</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-checkout.html" className="menu-link">
                <div className="text-truncate" data-i18n="Checkout">Checkout</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-shipping.html" className="menu-link">
                <div className="text-truncate" data-i18n="Shipping &amp; Delivery">Shipping &amp; Delivery</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-locations.html" className="menu-link">
                <div className="text-truncate" data-i18n="Locations">Locations</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-notifications.html" className="menu-link">
                <div className="text-truncate" data-i18n="Notifications">Notifications</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <!-- e-commerce-app menu end -->
    <!-- Academy menu start -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-book-open"></i>
        <div className="text-truncate" data-i18n="Academy">Academy</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-academy-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-course.html" className="menu-link">
            <div className="text-truncate" data-i18n="My Course">My Course</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-course-details.html" className="menu-link">
            <div className="text-truncate" data-i18n="Course Details">Course Details</div>
          </a>
        </li>
      </ul>
    </li>
    <!-- Academy menu end -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-car"></i>
        <div className="text-truncate" data-i18n="Logistics">Logistics</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-logistics-dashboard.html" className="menu-link">
            <div className="text-truncate" data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-logistics-fleet.html" className="menu-link">
            <div className="text-truncate" data-i18n="Fleet">Fleet</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-food-menu"></i>
        <div className="text-truncate" data-i18n="Invoice">Invoice</div>
        <span className="badge badge-center rounded-pill bg-success ms-auto">4</span>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-invoice-list.html" className="menu-link">
            <div className="text-truncate" data-i18n="List">List</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-preview.html" className="menu-link">
            <div className="text-truncate" data-i18n="Preview">Preview</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-edit.html" className="menu-link">
            <div className="text-truncate" data-i18n="Edit">Edit</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-add.html" className="menu-link">
            <div className="text-truncate" data-i18n="Add">Add</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-user"></i>
        <div className="text-truncate" data-i18n="Users">Users</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-user-list.html" className="menu-link">
            <div className="text-truncate" data-i18n="List">List</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="View">View</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-user-view-account.html" className="menu-link">
                <div className="text-truncate" data-i18n="Account">Account</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-security.html" className="menu-link">
                <div className="text-truncate" data-i18n="Security">Security</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-billing.html" className="menu-link">
                <div className="text-truncate" data-i18n="Billing &amp; Plans">Billing &amp; Plans</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-notifications.html" className="menu-link">
                <div className="text-truncate" data-i18n="Notifications">Notifications</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-connections.html" className="menu-link">
                <div className="text-truncate" data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-check-shield"></i>
        <div className="text-truncate" data-i18n="Roles &amp; Permissions">Roles &amp; Permissions</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-access-roles.html" className="menu-link">
            <div className="text-truncate" data-i18n="Roles">Roles</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-access-permission.html" className="menu-link">
            <div className="text-truncate" data-i18n="Permission">Permission</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-dock-top"></i>
        <div className="text-truncate" data-i18n="Pages">Pages</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="User Profile">User Profile</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-profile-user.html" className="menu-link">
                <div className="text-truncate" data-i18n="Profile">Profile</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-teams.html" className="menu-link">
                <div className="text-truncate" data-i18n="Teams">Teams</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-projects.html" className="menu-link">
                <div className="text-truncate" data-i18n="Projects">Projects</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-connections.html" className="menu-link">
                <div className="text-truncate" data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Account Settings">Account Settings</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-account-settings-account.html" className="menu-link">
                <div className="text-truncate" data-i18n="Account">Account</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-security.html" className="menu-link">
                <div className="text-truncate" data-i18n="Security">Security</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-billing.html" className="menu-link">
                <div className="text-truncate" data-i18n="Billing &amp; Plans">Billing &amp; Plans</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-notifications.html" className="menu-link">
                <div className="text-truncate" data-i18n="Notifications">Notifications</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-connections.html" className="menu-link">
                <div className="text-truncate" data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="pages-faq.html" className="menu-link">
            <div className="text-truncate" data-i18n="FAQ">FAQ</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="pages-pricing.html" className="menu-link">
            <div className="text-truncate" data-i18n="Pricing">Pricing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Misc">Misc</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-misc-error.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Error">Error</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Under Maintenance">Under Maintenance</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Coming Soon">Coming Soon</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Not Authorized">Not Authorized</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
        <div className="text-truncate" data-i18n="Authentications">Authentications</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Login">Login</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-login-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-login-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Register">Register</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-register-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-register-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Multi-steps">Multi-steps</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Verify Email">Verify Email</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Reset Password">Reset Password</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Forgot Password">Forgot Password</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Two Steps">Two Steps</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                <div className="text-truncate" data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-spreadsheet"></i>
        <div className="text-truncate" data-i18n="Wizard Examples">Wizard Examples</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="wizard-ex-checkout.html" className="menu-link">
            <div className="text-truncate" data-i18n="Checkout">Checkout</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="wizard-ex-property-listing.html" className="menu-link">
            <div className="text-truncate" data-i18n="Property Listing">Property Listing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="wizard-ex-create-deal.html" className="menu-link">
            <div className="text-truncate" data-i18n="Create Deal">Create Deal</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="modal-examples.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-window-open"></i>
        <div className="text-truncate" data-i18n="Modal Examples">Modal Examples</div>
      </a>
    </li>

    <!-- Components -->
    <li className="menu-header small text-uppercase"><span className="menu-header-text" data-i18n="Components">Components</span></li>
    <!-- Cards -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-collection"></i>
        <div className="text-truncate" data-i18n="Cards">Cards</div>
        <span className="badge badge-center rounded-pill bg-danger ms-auto">6</span>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="cards-basic.html" className="menu-link">
            <div className="text-truncate" data-i18n="Basic">Basic</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-advance.html" className="menu-link">
            <div className="text-truncate" data-i18n="Advance">Advance</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-statistics.html" className="menu-link">
            <div className="text-truncate" data-i18n="Statistics">Statistics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-analytics.html" className="menu-link">
            <div className="text-truncate" data-i18n="Analytics">Analytics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-gamifications.html" className="menu-link">
            <div className="text-truncate" data-i18n="Gamifications">Gamifications</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-actions.html" className="menu-link">
            <div className="text-truncate" data-i18n="Actions">Actions</div>
          </a>
        </li>
      </ul>
    </li>
    <!-- User interface -->
    <li className="menu-item">
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-box"></i>
        <div className="text-truncate" data-i18n="User interface">User interface</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="ui-accordion.html" className="menu-link">
            <div className="text-truncate" data-i18n="Accordion">Accordion</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-alerts.html" className="menu-link">
            <div className="text-truncate" data-i18n="Alerts">Alerts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-badges.html" className="menu-link">
            <div className="text-truncate" data-i18n="Badges">Badges</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-buttons.html" className="menu-link">
            <div className="text-truncate" data-i18n="Buttons">Buttons</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-carousel.html" className="menu-link">
            <div className="text-truncate" data-i18n="Carousel">Carousel</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-collapse.html" className="menu-link">
            <div className="text-truncate" data-i18n="Collapse">Collapse</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-dropdowns.html" className="menu-link">
            <div className="text-truncate" data-i18n="Dropdowns">Dropdowns</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-footer.html" className="menu-link">
            <div className="text-truncate" data-i18n="Footer">Footer</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-list-groups.html" className="menu-link">
            <div className="text-truncate" data-i18n="List Groups">List Groups</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-modals.html" className="menu-link">
            <div className="text-truncate" data-i18n="Modals">Modals</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-navbar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Navbar">Navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div className="text-truncate" data-i18n="Offcanvas">Offcanvas</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-pagination-breadcrumbs.html" className="menu-link">
            <div className="text-truncate" data-i18n="Pagination &amp; Breadcrumbs">Pagination &amp; Breadcrumbs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-progress.html" className="menu-link">
            <div className="text-truncate" data-i18n="Progress">Progress</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-spinners.html" className="menu-link">
            <div className="text-truncate" data-i18n="Spinners">Spinners</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-tabs-pills.html" className="menu-link">
            <div className="text-truncate" data-i18n="Tabs &amp; Pills">Tabs &amp; Pills</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-toasts.html" className="menu-link">
            <div className="text-truncate" data-i18n="Toasts">Toasts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-tooltips-popovers.html" className="menu-link">
            <div className="text-truncate" data-i18n="Tooltips &amp; Popovers">Tooltips &amp; Popovers</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-typography.html" className="menu-link">
            <div className="text-truncate" data-i18n="Typography">Typography</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Extended components -->
    <li className="menu-item">
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-copy"></i>
        <div className="text-truncate" data-i18n="Extended UI">Extended UI</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="extended-ui-avatar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Avatar">Avatar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-blockui.html" className="menu-link">
            <div className="text-truncate" data-i18n="BlockUI">BlockUI</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-drag-and-drop.html" className="menu-link">
            <div className="text-truncate" data-i18n="Drag &amp; Drop">Drag &amp; Drop</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-media-player.html" className="menu-link">
            <div className="text-truncate" data-i18n="Media Player">Media Player</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
            <div className="text-truncate" data-i18n="Perfect Scrollbar">Perfect Scrollbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-star-ratings.html" className="menu-link">
            <div className="text-truncate" data-i18n="Star Ratings">Star Ratings</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-sweetalert2.html" className="menu-link">
            <div className="text-truncate" data-i18n="SweetAlert2">SweetAlert2</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-text-divider.html" className="menu-link">
            <div className="text-truncate" data-i18n="Text Divider">Text Divider</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div className="text-truncate" data-i18n="Timeline">Timeline</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="extended-ui-timeline-basic.html" className="menu-link">
                <div className="text-truncate" data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="extended-ui-timeline-fullscreen.html" className="menu-link">
                <div className="text-truncate" data-i18n="Fullscreen">Fullscreen</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="extended-ui-tour.html" className="menu-link">
            <div className="text-truncate" data-i18n="Tour">Tour</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-treeview.html" className="menu-link">
            <div className="text-truncate" data-i18n="Treeview">Treeview</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-misc.html" className="menu-link">
            <div className="text-truncate" data-i18n="Miscellaneous">Miscellaneous</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Icons -->
    <li className="menu-item">
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-crown"></i>
        <div className="text-truncate" data-i18n="Icons">Icons</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="icons-boxicons.html" className="menu-link">
            <div className="text-truncate" data-i18n="Boxicons">Boxicons</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="icons-font-awesome.html" className="menu-link">
            <div className="text-truncate" data-i18n="Fontawesome">Fontawesome</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Forms & Tables -->
    <li className="menu-header small text-uppercase"><span className="menu-header-text" data-i18n="Forms &amp; Tables">Forms &amp; Tables</span></li>
    <!-- Forms -->
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-detail"></i>
        <div className="text-truncate" data-i18n="Form Elements">Form Elements</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="forms-basic-inputs.html" className="menu-link">
            <div className="text-truncate" data-i18n="Basic Inputs">Basic Inputs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-input-groups.html" className="menu-link">
            <div className="text-truncate" data-i18n="Input groups">Input groups</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-custom-options.html" className="menu-link">
            <div className="text-truncate" data-i18n="Custom Options">Custom Options</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-editors.html" className="menu-link">
            <div className="text-truncate" data-i18n="Editors">Editors</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-file-upload.html" className="menu-link">
            <div className="text-truncate" data-i18n="File Upload">File Upload</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-pickers.html" className="menu-link">
            <div className="text-truncate" data-i18n="Pickers">Pickers</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-selects.html" className="menu-link">
            <div className="text-truncate" data-i18n="Select &amp; Tags">Select &amp; Tags</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-sliders.html" className="menu-link">
            <div className="text-truncate" data-i18n="Sliders">Sliders</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-switches.html" className="menu-link">
            <div className="text-truncate" data-i18n="Switches">Switches</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-extras.html" className="menu-link">
            <div className="text-truncate" data-i18n="Extras">Extras</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-detail"></i>
        <div className="text-truncate" data-i18n="Form Layouts">Form Layouts</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="form-layouts-vertical.html" className="menu-link">
            <div className="text-truncate" data-i18n="Vertical Form">Vertical Form</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div className="text-truncate" data-i18n="Horizontal Form">Horizontal Form</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-layouts-sticky.html" className="menu-link">
            <div className="text-truncate" data-i18n="Sticky Actions">Sticky Actions</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-carousel"></i>
        <div className="text-truncate" data-i18n="Form Wizard">Form Wizard</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="form-wizard-numbered.html" className="menu-link">
            <div className="text-truncate" data-i18n="Numbered">Numbered</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-wizard-icons.html" className="menu-link">
            <div className="text-truncate" data-i18n="Icons">Icons</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="form-validation.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-list-check"></i>
        <div className="text-truncate" data-i18n="Form Validation">Form Validation</div>
      </a>
    </li>
    <!-- Tables -->
    <li className="menu-item">
      <a href="tables-basic.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-table"></i>
        <div className="text-truncate" data-i18n="Tables">Tables</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-grid"></i>
        <div className="text-truncate" data-i18n="Datatables">Datatables</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="tables-datatables-basic.html" className="menu-link">
            <div className="text-truncate" data-i18n="Basic">Basic</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="tables-datatables-advanced.html" className="menu-link">
            <div className="text-truncate" data-i18n="Advanced">Advanced</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="tables-datatables-extensions.html" className="menu-link">
            <div className="text-truncate" data-i18n="Extensions">Extensions</div>
          </a>
        </li>
      </ul>
    </li>

    <!-- Charts & Maps -->
    <li className="menu-header small text-uppercase">
      <span className="menu-header-text" data-i18n="Charts &amp; Maps">Charts &amp; Maps</span>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons bx bx-chart"></i>
        <div className="text-truncate" data-i18n="Charts">Charts</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="charts-apex.html" className="menu-link">
            <div className="text-truncate" data-i18n="Apex Charts">Apex Charts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="charts-chartjs.html" className="menu-link">
            <div className="text-truncate" data-i18n="ChartJS">ChartJS</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="maps-leaflet.html" className="menu-link">
        <i className="menu-icon tf-icons bx bx-map-alt"></i>
        <div className="text-truncate" data-i18n="Leaflet Maps">Leaflet Maps</div>
      </a>
    </li>

    <!-- Misc -->
    <li className="menu-header small text-uppercase"><span className="menu-header-text" data-i18n="Misc">Misc</span></li>
    <li className="menu-item">
      <a href="https://themeselection.com/support/" target="_blank" className="menu-link">
        <i className="menu-icon tf-icons bx bx-support"></i>
        <div className="text-truncate" data-i18n="Support">Support</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/" target="_blank" className="menu-link">
        <i className="menu-icon tf-icons bx bx-file"></i>
        <div className="text-truncate" data-i18n="Documentation">Documentation</div>
      </a>
    </li>
  <div className="ps__rail-x" style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" style="top: 0px; height: 161px; right: 4px;"><div className="ps__thumb-y" tabindex="0" style="top: 0px; height: 15px;"></div></div></ul>
  
  

</aside>
    );
};

export default SideBar;