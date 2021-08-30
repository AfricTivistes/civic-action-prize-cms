let message = ""

window.addEventListener("DOMContentLoaded", () => {    
  const form = document.getElementById("contact-form")
  const button = document.getElementById("contact-form-button")
  //document.querySelector("form").addEventListener("submit", handleSubmit)
  const status = document.getElementById("contact-form-status")
  // const nsecteur = document.getElementById("nsecteur")
  // const description = document.getElementById("description")
  // const ndescription = document.getElementById("ndescription")
  // const pourquoi = document.getElementById("pourquoi")
  // const nominePourquoi = document.getElementById("nominePourquoi")
  const langue = document.getElementById('langue').value
  // const sector = document.getElementsByName('nsecteur')

  const success = () => {
    form.reset()
    button.style = "display: none "
    status.classList.add("alert-success")
    status.innerHTML = { en: "Thank you! Your nomination has been submitted successfully.", fr: "Merci! Votre nomination a été soumis avec succès." }[langue]
  }

  const error = () => {
    status.classList.add("alert-danger")
    status.innerHTML = message
  }

  // const countWords = str => {
  //   str = str.replace(/(^\s*)|(\s*$)/gi, "")
  //   str = str.replace(/[ ]{2,}/gi, " ")
  //   str = str.replace(/\n /, "\n")
  //   return str.split(' ').length
  // }

  const validate = () => {

    // let countSector = 0
    let valide = true

    // message = "Oops! Il y avait un problème, "

    // status.classList.remove("alert-success")
    // status.classList.remove("alert-danger")
    // nsecteur.classList.remove("alert-danger")
    // description.classList.remove("alert-danger")
    // pourquoi.classList.remove("alert-danger")
    
    // // handle the form sector
    // for (var checkbox of sector) {
    //   if (checkbox.checked) {
    //     countSector += 1
    //   }
    // }

    // if (countSector <= 0 || countSector > 3) {
    //   valide = false
    //   message += { en: "* Secteur(s) d'activités, ", fr: "* Secteur(s) d'activités, "}[langue]
    //   if (countSector == 0) message += { en: " choisir une réponse, ", fr: " choisir une réponse, " }[langue]
    //   message += { en: "maximun de réponses 3", fr: "maximun de réponses 3"}[langue]
    //   nsecteur.classList.add("alert-danger")
    // }

    // // handle the form sector & why
    // const wdescription = countWords(ndescription.value)
    // const wpourquoi = countWords(nominePourquoi.value)

    // if (wdescription > 250) {
    //   valide = false
    //   message += { en: " * Description, 250 words maximum", fr: " * Description, 250 mots maximum" }[langue]
    //   description.classList.add("alert-danger")
    // }

    // if (wpourquoi > 250) {
    //   valide = false
    //   message += { en: " * Why, 250 words maximum", fr: " * Pourquoi, 250 mots maximum" }[langue]
    //   pourquoi.classList.add("alert-danger")
    // }


    return valide
  }

  // handle the form submission event

  form.addEventListener("submit", (ev) => {
    if (validate()) {
      ev.preventDefault()
      var data = new FormData(form)
      ajax(form.method, form.action, data, success, error)
    }else{
      ev.preventDefault()
      error()
    }
  })
})

// helper function for sending an AJAX request

const ajax = (method, url, data, success, error) => {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.getElementById('contact-form');
//   let formData = new FormData(myForm)
//   fetch('/api/submission', {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: formData
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
// }