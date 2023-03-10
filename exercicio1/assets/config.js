function paginar(idPagina) {
  const elementoAtivo = document.querySelector(".item.active");
  elementoAtivo.classList.remove("active");

  const novaPagina = document.getElementById(idPagina);
  novaPagina.classList.add("active");
}
