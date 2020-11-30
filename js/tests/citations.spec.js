let startQuote = [
    'start quote 1',
    'start quote 2',
    'start quote 3'
];

let middleQuote = [
    'middle quote 1',
    'middle quote 2',
    'middle quote 3'
];

let endQuote = [
    'end quote 1',
    'end quote 2',
    'end quote 3'
];



beforeEach(() => {
    this.citations = new Citations({
        startQuote: [
            'start quote 1',
            'start quote 2',
            'start quote 3'
        ],

        middleQuote: [
            'middle quote 1',
            'middle quote 2',
            'middle quote 3'
        ],

        endQuote: [
            'end quote 1',
            'end quote 2',
            'end quote 3'
        ]
    });     
})

describe('Générate citation', () => {

    it('return exception when pass other type on the constructor', () => {
        expect(() => {
            let quotes = new Citations('string');
        }).toThrow();
    })

    it('return a string', () => {
        expect(typeof this.citations.buildCitation()).toBe('string')
    })

    it('build quote with index 0 of the array', () => {
        let citation = this.citations.buildCitation(0, 0, 0);
        expect(citation).toEqual('start quote 1 middle quote 1 end quote 1');
    });

    it('generate two quote', () => {
        let citation = this.citations.generate(2);
        expect(citation.length).toEqual(2)
    });

    it('generate two quote pass with number quotes on the parameters function', () => {
        let citation = this.citations.generate(2);
        expect(citation.length).toEqual(2)
    });

    it('generate random citation', () => {
        let citation = this.citations.generate(2);
        expect(citation[0]).not.toEqual(citation[1]);
    })
})