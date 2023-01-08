# Challenge ONE Alura/Oracle - Decodificador de Textos

Aplicação que criptografa textos, desenvolvida usando as tecnologias: **HTML**, **CSS**, **Javascript**, utilizando **Metodologia Ágil** como organização de trabalho, com o auxilio da ferramenta do **Trello**, que deve seguir as seguintes regras de negócio:

Modelo Figma: https://www.figma.com/file/tvFEYhVfZTjdJ5P24RGV21/Alura-Challenge---Desafio-1---L%C3%B3gica?node-id=16%3A802

As "chaves" de criptografia que utilizaremos são:

- `A letra "e" é convertida para "enter"`
- `A letra "i" é convertida para "imes"`
- `A letra "a" é convertida para "ai"`
- `A letra "o" é convertida para "ober"`
- `A letra "u" é convertida para "ufat"`

**Requisitos:**
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

Por exemplo:
`"gato" => "gaitober"`
`gaitober" => "gato"`

- A página deve ter campos para inserção do texto a ser criptografado ou descriptografado, e a pessoa usuária deve poder escolher entre as duas opções
- O resultado deve ser exibido na tela.

**Extras**

- Um botão que copie o texto criptografado/descriptografado para a área de transferência - ou seja, que tenha a mesma funcionalidade do ctrl+C ou da opção "copiar" do menu dos aplicativos.

- Função em Javascript que deixa as letras do `textarea` minusculas em tempo real.
    
    ```
     function minuscula(string) {

        let resultado = string.value.toLowerCase();
        string.value = resultado;
    }
    ```

# Resultado 

#challengeonedecodificador4

- URL da solução: [Adicione o URL da solução aqui](https://your-solution-url.com)
- URL do site ao vivo: [Adicione o URL do site ao vivo aqui](https://your-live-site-url.com)

![](./img/modelo-apresentacao.gif)


