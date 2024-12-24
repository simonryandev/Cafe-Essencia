function openModal(item) {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const description = document.getElementById('modal-description');
  const price = document.getElementById('modal-price');

  const menuDetails = {
    cafe1: {
      title: 'Café Expresso',
      description: 'Um café intenso feito com grãos selecionados para um sabor único.',
      price: 'R$ 10,00',
    },
    bebida1: {
      title: 'Suco Natural',
      description: 'Suco 100% natural, feito com frutas frescas.',
      price: 'R$ 8,00',
    },
    sobremesa1: {
      title: 'Torta de Limão',
      description: 'Uma sobremesa deliciosa com um toque cítrico de limão.',
      price: 'R$ 12,00',
    },
    cafe2: {
      title: 'Cappuccino',
      description: 'Uma combinação perfeita de café, leite vaporizado e espuma.',
      price: 'R$ 12,00',
    },
    bebida2: {
      title: 'Chá Gelado',
      description: 'Refrescante chá gelado com um toque de limão.',
      price: 'R$ 6,00',
    },
    sobremesa2: {
      title: 'Brownie',
      description: 'Brownie de chocolate com pedaços de nozes e textura irresistível.',
      price: 'R$ 15,00',
    },
    cafe3: {
      title: 'Café de Canela',
      description: 'Expresso com um toque de canela em pó e leite vaporizado, decorado com pau de canela.',
      price: 'R$ 11,00',
    },
    bebida3: {
      title: 'Smoothie de Frutas Vermelhas',
      description: 'Combinação de morango, framboesa e mirtilo com iogurte natural.',
      price: 'R$ 15,00'
    },
    sobremesa3: {
      title: 'Cheesecake de Frutas Vermelhas',
      description: 'Tradicional cheesecake com calda de frutas vermelhas frescas.',
      price: 'R$ 18,00'
    },
    lanche1: {
      title: 'Coxinha',
      description: 'Um clássico brasileiro: massa macia e dourada recheada com frango temperado, empanada e frita até ficar crocante.',
      price: 'R$ 3,00',
    },
    lanche2: {
      title: 'Pão de Queijo',
      description: 'O queridinho de Minas Gerais, feito com polvilho e queijo, perfeito para acompanhar um café.',
      price: 'R$ 4,00',
    },
    lanche3: {
      title: 'Tapioca de Carne Seca com Catupiry',
      description: 'Combinação típica nordestina: carne seca desfiada e catupiry cremoso.',
      price: 'R$ 9,00',
    },
  };

  if (menuDetails[item]) {
    title.textContent = menuDetails[item].title;
    description.textContent = menuDetails[item].description;
    price.textContent = menuDetails[item].price;
    modal.style.display = 'flex';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function filterItems(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'todos') {
      item.style.display = 'block';
    } else if (!item.classList.contains(category)) {
      item.style.display = 'none';
    } else {
      item.style.display = 'block';
    }
  });
}
