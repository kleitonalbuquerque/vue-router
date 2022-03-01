<template>
  <div class="cadastro">
    <input type="text" name="nome" id="nome" placeholder="Nome" /><br />
    <input type="text" name="email" id="email" placeholder="E-mail" /><br />
    <button>Enviar</button>
    <h4>{{ parametroDaRota }}</h4>
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
