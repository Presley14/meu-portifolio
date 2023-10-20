

document.addEventListener("DOMContentLoaded", function() {
    const carrossel = document.querySelector(".carrossel")

    const cards = document.querySelectorAll(".card_projeto")
    let cardIndex = Math.floor(cards.length / 2)
  
    function atualizarCarrossel() {
        carrossel.style.transform = `translateX(-${cardIndex * 100}%)`
        
                cards.forEach((card, index) => {
                    card.style.filter = index === cardIndex ? "none" : "blur(5px)"
                    card.classList.toggle("atual", index === cardIndex)
                })
    }
  
    function moverCarrossel(direcao) {
      if (direcao === "prev" && cardIndex > 0) {
        cardIndex--;
      } else if (direcao === "next" && cardIndex < cards.length - 1) {
        cardIndex++
      }
      atualizarCarrossel()
    }
  
    document.getElementById("anterior").addEventListener("click", () => moverCarrossel("prev"))
    document.getElementById("proximo").addEventListener("click", () => moverCarrossel("next"))
  
    atualizarCarrossel()
  })