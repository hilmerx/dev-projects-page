import $ from 'jquery'

export default class Modal {
    constructor(){
        this.modal = $(".modal")
        this.aboutButton = $("#about")
        this.textBox = $("#modal-box")
        this.background = $("#modal-background")
        this.closeButton = $("#modal-x")

        this.events()
    }

    events() {
        this.aboutButton.click(this.openModal.bind(this))

        this.background.click(this.closeModal.bind(this))

        this.textBox.click(function(e){
                e.stopPropagation()
        })

        this.closeButton.click(this.closeModal.bind(this))
    }


    openModal() {
        this.modal.addClass("modal--is-active")
        return false
    }

    closeModal() {
        this.modal.removeClass("modal--is-active")
        return false
    }
}



