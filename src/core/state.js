export function StateManager() {
    let state = {}; // Objet pour stocker l'état de l'application

    // Fonction pour mettre à jour l'état
    function setState(newState) {
        state = { ...state, ...newState }; // Fusionne le nouvel état avec l'état existant
        // console.log('State updated:', state);
    }

    // Fonction pour récupérer l'état actuel
    function getState() {
        return state;
    }

    // Retourner les fonctions pour les rendre accessibles à l'extérieur du module
    return { setState, getState };
}


