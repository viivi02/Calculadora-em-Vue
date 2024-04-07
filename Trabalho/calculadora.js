const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods: {
        lidarBotao(valor) {
            switch (valor)
            {
                case '*':
                    this.lidarOperador(valor);
                    break;
                case '/':
                    this.lidarOperador(valor);
                    break;
                case '-':
                    this.lidarOperador(valor);
                    break;
                case '+':
                    this.lidarOperador(valor);
                    break;
                case '.':
                    this.lidarDecimal();
                    break;
                case 'C':
                    this.lidarLimpar();
                    break;

                case '=':
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            if((this.numeroAtual == 0 || this.numeroAtual == null) && valor == '/'){
                this.display = "Erro: não da pra dividir por zero";
                return;
            }else if(this.operador !== null){
                this.lidarIgual();
                return;
            }
            console.log(this.numeroAtual,this.numeroAnterior,this.display);
            this.numeroAnterior = `${this.numeroAtual}`;
            this.numeroAtual = '';
            this.operador = valor;
            this.lidarDisplay(this.operador);
        },
        lidarDecimal() {
            if (this.display.indexOf('.') === -1) {
                this.display += '.';
            }
        },
        lidarLimpar() {
            this.display = '';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            console.log(this.display, this.numeroAtual, this.numeroAnterior, this.operador);
            let resultado = eval(`${this.numeroAnterior}${this.operador}${this.numeroAtual}`);
            this.lidarLimpar();
            this.lidarNumero(resultado);
        },
        lidarNumero(valor) {
            if(this.numeroAtual == null){
                this.numeroAtual = '';
            }
            this.numeroAtual = `${this.numeroAtual}${valor}`;
            this.lidarDisplay(valor);
        },
        lidarDisplay(valor){
            this.display = `${this.display}${valor}`;
        }
    }
}).mount("#app");