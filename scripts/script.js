document.addEventListener("DOMContentLoaded", () => {
  // Fecha todos os menus abertos
  const closeAllMenus = () => {
    document.querySelectorAll(".curso-menu, .fundo-menu-open-hc, .fundo-menu-open-py").forEach(el => {
      el.classList.remove("open");
    });
  };

  // Alterna abertura/fechamento de um menu específico
  const toggleMenu = (btn) => {
    const menu = btn.nextElementSibling;
    const isOpen = menu.classList.contains("open");

    closeAllMenus();

    if (!isOpen) {
      menu.classList.add("open");

      const selector = btn.dataset.extra;
      if (selector) {
        document.querySelector(selector)?.classList.add("open");
      }
    }
  };

  // Adiciona listener para cada botão de curso
  document.querySelectorAll(".curso-btn").forEach(btn => {
    btn.addEventListener("click", () => toggleMenu(btn));
  });

  // Fechar navbar ao clicar fora
  document.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");

    // Verifica se o clique foi fora da navbar e se o menu está aberto
    if (!navbar.contains(e.target) && navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  });
});

