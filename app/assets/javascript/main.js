import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";
window.Stimulus = Application.start();

Stimulus.register("queries", class extends Controller {
    static targets = ["id","toggleGrammarTable", "toggleGraph", "toggleSimplified", "grammarTable"];

    connect() {
        console.log("[stimulus] connected!", this.element)
    }

    toggleGrammarTable() {
        this.toggle(this.grammarTableTarget, this.toggleGrammarTableTarget)
    }

    toggleGraph() {
        console.log("Graph view not supported yet!")
    }

    toggleSimplified() {
        console.log("Simplified view not supported yet!")
    }

    toggle(element, toggle) {
        if (toggle.classList.contains('btn-primary-selected')) {
            // hide
            toggle.classList.replace('btn-primary-selected', 'btn-primary-deselected')
            element.classList.add('hidden')
        } else {
            // show
            toggle.classList.replace('btn-primary-deselected', 'btn-primary-selected')
            element.classList.remove('hidden')
        }
    }

    get id() {
        return this.idTarget.value
    }
});