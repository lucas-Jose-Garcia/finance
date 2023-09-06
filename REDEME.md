### Alterações de Bibliotecas

#### React Native Paper Dates
Por padrão ela trás o ícone de calendário para o lado direito, por uma questão de harmonia da tela seria melhor que o ícone ficasse do lado esquerdo, para isso foi efetuada a seguinte alteração no arquivo ´TextInputMask.tsx´

```js
    <TextInput
        {...'rest of props'}
        left={inputButton}
    />
```