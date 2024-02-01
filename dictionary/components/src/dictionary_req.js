class DictRequest {
    constructor(word) {
        this.word = word
        this.body = null
        this.definitions = {}
        this.phonetic = null
        // this.init()
    }

    init = async () => {
        try {
            this.body = await getResponse(this.word)
            // get definitions
            this.body.meanings.forEach(element => {
                this.definitions[element.partOfSpeech] =
                    element.definitions.map(e =>
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

const newDictReq = async word => {
    try {
        const res = new DictRequest(word)
        await res.init()
        return {
            definitions: res.definitions,
            phonetic: res.phonetic,
        }
    } catch {}
}

const example = async () => {
    const test = await newDictReq('train')
    console.log(test.definitions)
    console.log(test.phonetic)
}

example()

module.exports = newDictReq
