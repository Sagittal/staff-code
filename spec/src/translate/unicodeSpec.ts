import {Io, Unicode, UnicodeLiteral, Word} from "@sagittal/general"
import {Code} from "../../../bin"
import {CASE_DESENSITIZED_CODE_MAP, computeUnicodeForCode} from "../../../src/translate/codes"
import {getUnicode, shouldNotBeDisplayed} from "../../../src/translate/unicode"

describe("getUnicode", (): void => {
    it("gets you the unicode for a given base word", (): void => {
        const inputWord = "ntqrup" as Io & Word

        const actual = getUnicode(inputWord)

        const expected = CASE_DESENSITIZED_CODE_MAP["ntqrup"]
        expect(actual).toEqual(expected)
    })

    it("gets you the unicode for a given alias word", (): void => {
        const inputWord = "8va" as Io & Word

        const actual = getUnicode(inputWord)

        const expected = CASE_DESENSITIZED_CODE_MAP["otal"]
        expect(actual).toEqual(expected)
    })

    it("can handle uppercase codes", (): void => {
        expect(getUnicode("/X" as Io & Word)).toEqual(CASE_DESENSITIZED_CODE_MAP["/x"])
        expect(getUnicode(".LL" as Io & Word)).toEqual(CASE_DESENSITIZED_CODE_MAP[".ll"])
    })

    it("takes a a Unicode literal and converts it to Unicode", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "U+5E78" as UnicodeLiteral & Word

        const actual = getUnicode(unicodeLiteral)

        const expected = "幸" as Unicode & Word
        expect(actual).toEqual(expected)
    })

    it("let's do a realistic, known example", (): void => {
        const unicodeLiteral: UnicodeLiteral & Word = "U+E3F0" as UnicodeLiteral & Word

        const actual = getUnicode(unicodeLiteral)

        const expected = "" as Unicode & Word
        expect(actual).toEqual(expected)
    })
})

describe("shouldNotBeDisplayed", (): void => {
    it("returns true for positions, because smart position takes care of putting the position character down                  ", (): void => {
        const unicode = computeUnicodeForCode("up1" as Code & Word)

        expect(shouldNotBeDisplayed(unicode)).toBeTruthy()
    })

    it("returns true for position supplements too", (): void => {
        const unicode = computeUnicodeForCode("up15" as Code & Word)

        expect(shouldNotBeDisplayed(unicode)).toBeTruthy()
    })
})

