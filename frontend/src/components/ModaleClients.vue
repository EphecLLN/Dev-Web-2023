
<template>
  <!-- Modal -->
  <div class="modal fade" id="modal" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Infos sur le client</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="bloc-modale">
            <div class="modal-wrapper">
              <table class="modale-clients-table">
                <thead>
                  <tr>
                    <th>Nom de la société</th>
                    <th>Personne de contact</th>
                    <th>Fonction</th>
                    <th>numéro de téléphone</th>
                    <th>adresse e-mail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ client.nom_societe }}</td>
                    <td>{{ client.prenom }} {{ client.nom }}</td>
                    <td>{{ client.fonction }}</td>
                    <td><a href="tel:{{client.telephone}}">{{ client.telephone }}</a></td>
                    <td><a href="mailto:{{client.mail_client}}">{{ client.mail_client }}</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" color="red" data-bs-dismiss="modal">fermer</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Modal } from "bootstrap";
import axios from "axios";
import { API } from "@/main";
export default {
  name: "ModaleClients",
  props: ["id_client"], //reçoit la propriété id_client
  methods: {
    getClient() {
      const token = this.$store.state.token;
      axios.get(API + '/clients/' + this.id_client,
        {
          headers : {
            Authorization : `Bearer ${token}`
          }
        }
        )
        .then(response => {
          this.client = response.data[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      client: {}
    }
  },
  mounted() {
    this.getClient();
    const modaleElem = document.getElementById("modal");
    const modale = new Modal(modaleElem);
    modaleElem.addEventListener("hidden.bs.modal", () => {
      this.$emit("fermer")
    });
    modale.show();
  },
}
</script>


<style>
/*
  .bloc-modale{
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width : 100px
  }
  .modale-clients-table{
    width: 1000px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }*/
</style>