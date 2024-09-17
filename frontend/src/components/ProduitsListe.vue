<template>
  <br><br>
  <div class="product-list">
    <table class="table">
      <thead>
        <tr>
          <th>Nom du produit</th>
          <th v-if="this.utilisateur.role === 'admin'">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(produit, index) in listeProduit" :key="index">
          <td v-if="!produit.editMode">{{ produit.nom }}</td>
          <td v-else><input type="text" v-model="produit.nom"></td>
          <td v-if="this.utilisateur.role === 'admin'">
            <button class="btn btn-primary" v-if="!produit.editMode" @click="produit.editMode = true">Modifier</button>
            <button class="update-button" v-else @click="updateProduit(produit)">Valider</button>
            <button class="btn btn-danger" @click="deleteProduit(produit.id_produit)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { API } from "@/main";
import { mapState } from 'vuex';
export default {
  name: "ProduitsAffichage",
  props: {
    listeProduit: {
      type: Array
    },
    getProduits: {
      type: Function
    }
  },
  data() {
    return {
      errorMessage: ""
    }
  },
  computed: {
    ...mapState({
      utilisateur : "utilisateur"
    })
  },
  methods: {
    deleteProduit(id) {
      axios.delete(API + `/produits/${id}`)
        .then(() => {
          this.getProduits();
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateProduit(produit) {
      if (!produit.nom) {
        this.errorMessage = 'Le champ nom ne peut pas être vide.';
        return;
      }
      axios
        .put(API + `/produits/${produit.id_produit}`, produit)
        .then(() => {
          produit.editMode = false;
          this.errorMessage = ''; // Réinitialiser le message d'erreur
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = 'Une erreur s\'est produite lors de la mise à jour du produit.';
        });
    }
  }
};
</script>
<!--
<style scoped>
.product-list {
  margin: 50px auto;
  max-width: 1000px;
}

.product-table {
  border-collapse: collapse;
  width: 100%;
}

.product-table th {
  background: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  padding: 12px 15px;
}

.product-table td {
  font-size: 16px;
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
}

.product-table td input[type=text] {
  width: 100%;
  padding: 6px 10px;
  font-size: 16px;
  border: 1px solid #ddd;
}

.product-table .delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.product-table .edit-button {
  background-color: #287ec4;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.product-table .update-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

td button {
  margin: 8px;
}

.error-message {
  color: red;
  font-weight: bold;
}
</style>-->