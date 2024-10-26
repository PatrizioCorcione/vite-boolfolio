<template>
  <div class="container-custom" id="about">
    <div>
      <div :class="{ 'fade-in': true, 'show': showText }">
        <h2 class="about-title">About Me</h2>
        <p class="about-text">
          Benvenuto nel mio portfolio! Mi chiamo Patrizio Corcione e sono un Junior Full Stack Web Developer!
        </p>
          <p class="about-text"> 
            Prima di intraprendere questo percorso, ho lavorato come barman in diversi settori, ricoprendo sempre posizioni di responsabilità. 
          Quando mi sono avvicinato al mondo della programmazione, ho subito percepito che fosse la mia vera passione, un settore dinamico e in costante trasformazione, ricco di opportunità per crescere e migliorare. 
          Grazie al corso di Full Stack Web Developer che ho frequentato presso Boolean, ho appreso le competenze necessarie per sviluppare progetti utilizzando linguaggi sia front-end che back-end. 
          Sono una persona in continua formazione che fa della sua capacità di lavorare in team e della volontà di migliorare i suoi punti di forza.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false, // Stato per controllare l'apparizione del testo
    };
  },
  mounted() {
    // Usa un timer per far apparire il testo al caricamento
    setTimeout(() => {
      this.showText = true; // Attiva l'effetto di apparizione
    }, 300); // 300 ms di ritardo prima di mostrare il testo
  }
}
</script>

<style lang="scss" scoped>
#about {
  padding: 80px 0 60px 0; /* Padding top e bottom */
  border-radius: 10px; /* Aggiunge angoli arrotondati */
}

.about-title {
  padding: 0 20px;
  
}

.about-text {
  font-size: 1.2rem; /* Dimensione del testo */
  color: #ffffff; /* Colore grigio scuro per il testo */
  line-height: 1.6; /* Maggiore spaziatura tra le righe per leggibilità */
  padding: 0 20px; /* Spaziatura orizzontale */
  text-align: justify; /* Giustifica il testo per un aspetto uniforme */
}

.fade-in {
  transition: transform 0.5s ease, opacity 0.5s ease; /* Transizione per l'effetto */
  transform: translateY(20px); /* Posizione di partenza */
  opacity: 0; /* Inizialmente invisibile */
}

.fade-in.show {
  transform: translateY(0); /* Si sposta nella posizione originale */
  opacity: 1; /* Diventa visibile */
}
@media (max-width: 767.98px) {
  .about-text{
    text-align: start;
    line-height: 1.5rem;
  }
  #about {
  padding: 20px 0 60px 0; /* Padding top e bottom */
  border-radius: 10px; /* Aggiunge angoli arrotondati */
}
}
</style>
