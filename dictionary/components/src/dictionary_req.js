class Definition {
    constructor(word) {
        this.word = word
        this.body = null
        this.def = {}
        this.phonetic = ''
        this.getResponse()
    }

    getResponse = () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`
        const req = new Request(url)

        fetch(req)
            .then(res => {
                if (res.status === 200) return res.json()
                else if (res.status === 404)
                    throw new Error(`${this.word} not found`)
                else throw new Error('Something went wrong')
            })
            .then(res => (this.body = JSON.parse(JSON.stringify(res))))
            .then(res => {
                this.body[0].meanings.forEach(element => {
                    this.def[element.partOfSpeech] = element.definitions.map(
                        e => e.definition
                    )
                })
                this.phonetic = this.body[0].phonetic
            })
            .catch(error => console.error(error))
    }
}

const defineWord = (word) => {
    const x = new Definition(word)
}

module.exports = Definition
