<template>
  <div class="cadastro">
    <h4>Rota Pai</h4>
    <input type="text" name="nome" id="nome" placeholder="Nome" /><br />
    <input type="text" name="email" id="email" placeholder="E-mail" /><br />
    <button>Enviar</button>
    <h4>{{ parametroDaRota }}</h4>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      parametroDaRota: "Nada",
    };
  },
  created() {
    console.log("Mariana Oliveira de Albuquerque");
    console.log(this.$route.params.dado);
    this.parametroDaRota = this.$route.params.dado;
  },
};
</script>
