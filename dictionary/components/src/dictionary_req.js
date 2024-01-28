class Definition {
    constructor(word) {
        this.word = word
        this.body = null
        this.def = {}
        this.phonetic = null
    }

    init = async () => {
        try {
            this.body = await getResponse(this.word)
            // get definitions
            this.body.meanings.forEach(element => {
                this.def[element.partOfSpeech] = element.definitions.map(e =>
                    e.example
                        ? e.definition + '  e.g. ' + e.example
                        : e.definition
                )
            })
            // get phonetic
            this.phonetic = this.body.phonetic
                ? this.body.phonetic
                : this.body.phonetics.find(e => e.text)['text']
        } catch (error) {
            console.error(error)
        }
    }
}

const getResponse = async word => {
    try {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const req = new Request(url)
        const res = await fetch(req)

        if (res.status === 200) {
            const bodyJson = await res.json()
            return JSON.parse(JSON.stringify(bodyJson))[0]
        } else if (res.status === 404) throw new Error(`${word} not found`)
        else throw new Error('Something went wrong')
    } catch (error) {
        console.error(error)
    }
}
const example = async () => {
    const test = new Definition('train')
    await test.init()
    console.log(test.body)
    console.log(test.def)
    console.log(test.phonetic)
}

example()

module.exports = Definition
