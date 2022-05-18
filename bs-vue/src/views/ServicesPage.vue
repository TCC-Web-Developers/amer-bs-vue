<template>
  <section class="services bg-dark">
    <div class="container">
      <div class="section-title text-center mb-5">
        <h5 class="text-warning fs-5 fw-b">SERVICES</h5>
        <h2 class="text-white">What we do</h2>
        <p class="text-white">
          Cloud bread flannel poke, flexitarian vinyl iPhone church-key shaman
          williamsburg kitsch beard.
        </p>
      </div>
      <div class="row text-white text-center">
        <div class="col-4">
          <div class="card border border-2 rounded bg-secondary py-2">
            <img src="../images/service.png" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Furniture design</h5>
              <p class="card-text">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit..
              </p>
              <button class="btn btn-outline-warning">More Information</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border border-2 rounded bg-secondary py-2">
            <img src="../images/service.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Advertising</h5>
              <p class="card-text">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <button class="btn btn-outline-warning">More Information</button>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border border-2 rounded bg-secondary py-2">
            <img src="../images/service.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Brand & Packaging</h5>
              <p class="card-text">
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <button class="btn btn-outline-warning">More Information</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card {
  cursor: pointer;
  transition: 0.3s;
}
.btn {
  transition: 0.3s;
}
.card:hover,
.btn:hover {
  transform: scale(1.1);
}
</style>
