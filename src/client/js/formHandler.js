function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (!isValidUrl(formText)){
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
function isValidUrl(value) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

export { handleSubmit }
