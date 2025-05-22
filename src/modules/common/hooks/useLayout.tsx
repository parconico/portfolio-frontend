export function useLayout(pathname: string) {
  const routes = [
    {
      path: "/",
      name: "Sobre mi",
    },
    {
      path: "/resume",
      name: "Resume",
    },
    {
      path: "/portfolio",
      name: "Portafolio",
    },
    // {
    //   path: "/blog",
    //   name: "blog",
    // },
    {
      path: "/contact",
      name: "Contacto",
    },
  ];
  const title =
    pathname === "/"
      ? "about"
      : pathname === "/resume"
      ? "Resume"
      : pathname === "/contact"
      ? "Contact"
      : pathname === "/portfolio"
      ? "Portfolio"
      : "Blog";
  return { title, routes };
}
