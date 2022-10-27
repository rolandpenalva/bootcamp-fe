const options = [
  {
    id: 1,
    name: "home",
    menu: "Home",
    url: "/home",
    protected: false,
  },
  {
    id: 2,
    name: "about",
    menu: "About",
    url: "/about",
    protected: false,
  },
  {
    id: 3,
    name: "transfer",
    menu: "Transfer",
    url: "/transfer",
    protected: false,
  },
  {
    id: 4,
    name: "product",
    menu: "Product",
    url: "/product",
    protected: false,
  },
  {
    id: 5,
    name: "admin",
    menu: "Admin",
    url: "/admin",
    protected: false,
    sub: [
      {
        id: 5.1,
        name: "user",
        menu: "Users",
        url: "/users",
        protected: false,
      },{
        id: 5.2,
        name: "catalog",
        menu: "Catalogs",
        url: "/catalog",
        protected: false,
      }
    ]
  }
];
export default options;
