function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if (!Client.isValidUrl(formText)){
        alert('Please enter a valid url')
        return
    }
    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8090/api?lang=en&url=${formText}`)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('model').innerHTML = data.model
        document.getElementById('score_tag').innerHTML = data.score_tag
        document.getElementById('agreement').innerHTML = data.agreement
        document.getElementById('subjectivity').innerHTML = data.subjectivity
        document.getElementById('confidence').innerHTML = data.confidence
        document.getElementById('irony').innerHTML = data.irony
    })
}

export { handleSubmit }
