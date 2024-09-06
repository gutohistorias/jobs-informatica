const checkBoxes = document.querySelectorAll('.checkbox input');

checkBoxes.forEach(c =>{
    c.addEventListener("change", () =>{
        const label = document.querySelector('label[for="${c.name)"]');
        if(c.checked){
            label.style.color = '#1A1E20';
        }else{
            label.style.color = '##808487';
        }
    });
});


const sidebar = document.querySelector('.sidebar');
const menuBtn = document.getElementById('menuToggle');

menuBtn.addEventListener("click", ()=>{
    sidebar.style.left = "0px";
})

document.addEventListener("click", (event) =>{
    const isClickInside = sidebar.contains(event.target) || menuBtn.contains (event.target);

    if(!isClickInside){
        sidebar.style.left = "-200px";
    }
})


// Seleciona o botão "Limpar Tudo" (ajuste o seletor conforme necessário)
const clearButton = document.querySelector('.filters a[href="#"]');

// Adiciona um event listener ao botão
clearButton.addEventListener('click', () => {
  // Seleciona todos os checkboxes dentro da seção de filtros
  const checkboxes = document.querySelectorAll('.filters input[type="checkbox"]');

  // Desmarca todos os checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
});


// Parte do código que serve para fazer a filtragem das empresas que você digita

const searchInput = document.getElementById('searchInput');
const jobCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();

    jobCards.forEach(card => {
        card.classList.remove('card-selected');

        if (searchTerm) {
            const jobTitle = card.querySelector('.job-title').innerText.toLowerCase();
            const jobDescription = card.querySelector('.card-desc').innerText.toLowerCase();
            let jobTagsText = '';
            card.querySelectorAll('.card-tags a').forEach(tag => {
                jobTagsText += tag.textContent.toLowerCase() + ' ';
            });
            const allText = `${jobTitle} ${jobDescription} ${jobTagsText}`;

            const isMatch = allText.includes(searchTerm);

            if (isMatch) {
                card.classList.add('card-selected');
            } else {
                card.style.display = 'none';
            }
        } else {
            card.style.display = 'block';
        }
    });
});