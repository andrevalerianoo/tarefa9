const form = document.getElementById('formulario');
const inputtarefa = document.getElementById('tarefa');
let linhas='';


form.addEventListener('submit', function(e){
    e.preventDefault();

        adicionarlista();
        

    function adicionarlista() {
        const inputtarefa = document.getElementById('tarefa');

        let linha = '<table>';

        linha += `<li> ${inputtarefa.value}</li>`;
        linha += '</table>'

        linhas += linha;

        const corpotabela = document.querySelector("table");
        corpotabela.innerHTML = linhas;

    }

})


        $(document).ready(function(){
            $('#formulario').on('submit', function(e){
                e.preventDefault();
                adicionarLista();
            });

            function adicionarLista() {
                const inputTarefa = $('#tarefa');
                const tarefa = inputTarefa.val().trim(); // Remover espaços em branco

                if (tarefa !== '') {
                    const linha = `<tr><td>${tarefa}</td></tr>`;
                    $('#tabela').append(linha);
                    inputTarefa.val(''); // Limpar o campo de entrada
                }
            }

            $('#novo').click(function(){
                $('#novo').hide();
                $('.center').fadeIn();
                console.log();
            });
    
        })
