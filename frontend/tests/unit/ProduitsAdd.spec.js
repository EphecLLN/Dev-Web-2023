import { mount } from '@vue/test-utils';
import ProduitsAdd from '../../src/components/ProduitAdd.vue';

describe('ProduitsAdd', () => {
    it('ajoute un produit lorsque le formulaire est soumis', () => {
        const getProduits = jest.fn();
        const wrapper = mount(ProduitsAdd, {
            propsData: {
                getProduits: getProduits,
            },
        });

        // Simule le clic sur le bouton "Ajouter un produit"
        wrapper.find('.ajouter').trigger('click');

        // Vérifie que le formulaire est affiché après le clic
        expect(wrapper.find('form').isVisible()).toBe(true);

        // Remplit le champ de texte avec un nom de produit
        wrapper.find('input[type="text"]').setValue('Nouveau produit');

        // Simule la soumission du formulaire
        wrapper.find('form').trigger('submit.prevent');

        // Vérifie que la méthode addProduit est appelée avec les bons paramètres
        expect(wrapper.vm.nomProduit).toBe('Nouveau produit');
        expect(getProduits).toHaveBeenCalled();

        // Vérifie que le formulaire est masqué après la soumission
        expect(wrapper.find('form').isVisible()).toBe(false);
    });
});

