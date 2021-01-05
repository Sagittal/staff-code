// tslint:disable max-line-length

import {Io, Sentence} from "@sagittal/general"
import {Code, computeInputSentenceUnicode, Unicode} from "../../../src"
import {computeCodeSentenceFromUnicodeSentence} from "../../../src/translate/codes/code"

describe("computeInputSentenceUnicode", (): void => {
    it("basically works", (): void => {
        const inputSentence = "d5 /|\\ d5 nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrdn 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("supports multiple staves with a break", (): void => {
        const inputSentence = "ston Gcl ; nt br; nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n   " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrdn 1; st8 8; st8 4; br; ntqrdn st8 8; st8 5;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("adds a space at the end if the last word is a break", (): void => {
        const inputSentence = "ston Gcl ; nt br;" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrdn 1; st8 8; st8 4; br; sp" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("supports inline comments", (): void => {
        const inputSentence = "ston Gcl ; {check this out} { and you can do a 2nd comment in a row too } nt br; {comment} nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "      \n   " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl st16 16; st8 7; ntqrdn 1; st8 8; st8 4; br; ntqrdn st8 8; st8 5;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("includes a space after fallen back input words so that when you have multiple in a row you can distinguish them           ", (): void => {
        const inputSentence = "don't know what i'm doing" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "don't know what i'm doing  " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes =
            "?? ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? ?? sp ?? ?? ?? sp ?? ?? ?? ?? ?? sp 2;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("still supports symbols with curlies, despite those being comment chars", (): void => {
        const inputSentence = "Gcl ; .{ ; nt ; .} ; nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "    　  　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "Gcl 23; .{ 6; ntqrdn 13; .} 6; ntqrdn 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    it("is whitespace agnostic", (): void => {
        const inputSentence = "d5           /|\\     \n  d5    \t     nt" as Io & Sentence

        const actual = computeInputSentenceUnicode(inputSentence)

        const expectedUnicode = "　 " as Unicode & Sentence
        expect(actual).toBe(expectedUnicode)
        const expectedCodes = "up2 /|\\ up2 ntqrdn 13;" as Code & Sentence
        expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
    })

    describe("Smart Position", (): void => {
        it("the most recently used position is automatically applied if none is specified", (): void => {
            const inputSentence = "d5 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ up2 ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("don't manifest until they are needed (only apply to symbols with ligatures to be vertically shifted by them)", (): void => {
            const inputSentence = "d5 ston /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 5; up2 ntqrdn 3; st8 8; st8 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("persists until a new position is used (is 'sticky')", (): void => {
            const inputSentence = "d5 ston /|\\ ; nt ; g4 \\! ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "            " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 5; up2 ntqrdn 3; st8 8; st8 2; dn2 \\! 6; st8 1; dn2 ntqrup 7; st8 6;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("does not actually put the middle position on the stave; there is no zero position glyph in SMuFL, so we temporarily use a code point from the Sagittal range, but it has no actual effect so it shouldn't be emitted", (): void => {
            const inputSentence = "d5 nt ; b4 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 ntqrdn 13; /|\\ ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("works for the supplemental positions", (): void => {
            const inputSentence = "c7 /|\\ nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up15 /|\\ up15 ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Clef", (): void => {
        it("assume treble clef even if no clef has been provided", (): void => {
            const inputSentence = "d4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn5 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("change depending on the clef", (): void => {
            const inputSentence = "Fcl ; d4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("clefs are smart and they stick until you change them (you can change from one to the other)", (): void => {
            const inputSentence = "Fcl ; d4 nt ; c4 nt ; Gcl ; d4 nt ; c4 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 　    　 　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Fcl 24; up7 ntqrdn 13; up6 ntqrdn 13; Gcl 23; dn5 ntqrup 13; dn6 ntqrup 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Advance", (): void => {
        it("advances by the width computed for each glyph from the Bravura font", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            actual = computeInputSentenceUnicode("lgln" as Io & Sentence)
            expectedUnicode = "　  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "lgln 15;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("Gcl" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "Gcl 23;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntdbwh" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntdbwh 23;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntwh" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntwh 17;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt2up" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfup 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntup" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrup 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt8up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8up 20;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt16up" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16up 21;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nthfdn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nthfdn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ntqrdn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "ntqrdn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt8dn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt8dn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("nt16dn" as Io & Sentence)
            expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "nt16dn 13;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("gives a default width of 0 to unknown codes", (): void => {
            const inputSentence = "U+5E78" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "幸 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "?? 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("accepts unknown codes in other reasonable formats", (): void => {
            expect(computeInputSentenceUnicode("U+5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u+5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("U5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("u5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5E78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
            expect(computeInputSentenceUnicode("\\u+5e78" as Io & Sentence)).toBe("幸 " as Unicode & Sentence)
        })

        it("if more than one unicode has occurred since the previous advance, uses the width of the unicode with the max width", (): void => {
            const inputSentence = "lgln nt16up" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 21;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("resets the advance amount after each application", (): void => {
            const inputSentence = "lgln nt16up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "lgln nt16up 21; ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can have the spacing adjusted from the default of 2", (): void => {
            const inputSentence = "sp7 nt16up" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt16up 24; 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("supports manual advance amounts", (): void => {
            const inputSentence = "ston d5 /|\\ 14; nt 17;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up2 /|\\ st8 8; st8 6; up2 ntqrdn 2; st8 8; st8 7;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("supports positioning the next glyph with its right edge against the right edge of the current line with the advance-to-end code", (): void => {
            const inputSentence = `ston \
nt en; blsn ; br; \
nt ; nt en; blsn ; br; \
nt ; nt ; nt en; blsn ; br; \
nt ; nt ; nt ; nt en; blsn ; br; \
nt ; nt ; nt ; nt ; nt en; blsn ; br; \
nt ; nt ; nt ; nt ; nt ; nt en; blsn ; br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt en; blsn ; br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt ; nt en; blsn` as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = `\
    
         
          
               
                 
                    
                        
                            ` as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = `\
ntqrdn st8 8; st8 5; 2; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; 5; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; 3; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; 6; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 7; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 6; ntqrdn 2; st8 8; st8 3; 4; blsn br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 6; ntqrdn 2; st8 8; st8 3; ntqrdn 5; st8 8; st8 7; blsn` as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("the advance-to-end code also works for the double barline", (): void => {
            const inputSentence = `ston \
nt en; bldb ; br; \
nt ; nt en; bldb ; br; \
nt ; nt ; nt en; bldb ; br; \
nt ; nt ; nt ; nt en; bldb ; br; \
nt ; nt ; nt ; nt ; nt en; bldb ; br; \
nt ; nt ; nt ; nt ; nt ; nt en; bldb ; br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt en; bldb ; br; \
nt ; nt ; nt ; nt ; nt ; nt ; nt ; nt en; bldb` as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = `\
       
        
             
                
                 
                      
                       
                            ` as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = `\
ntqrdn st8 8; st8 5; 3; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; 1; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; 4; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; 2; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 6; 2; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 6; ntqrdn 2; st8 8; st8 3; bldb br; \
ntqrdn st8 8; st8 5; ntqrdn 3; st8 8; st8 2; ntqrdn 6; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 4; st8 8; st8 1; ntqrdn 7; st8 6; ntqrdn 2; st8 8; st8 3; ntqrdn 5; st8 8; st8 3; bldb` as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("the advance-to-end code has no effect when smart staff is not on", (): void => {
            const inputSentence = "nt en; blsn" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "ntqrdn blsn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        // tslint:disable-next-line ban
        xit("the advance-to-end code works for glyphs with larger widths", (): void => {
            const inputSentence = "ston en; orprprdevxmr" as Io & Sentence // The code orprprdevxmr has 44 width

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 4; orprprdevxmr 4; st24 24; st8 8;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })

    describe("Smart Stave", (): void => {
        it("automatically adds stave lines as needed, if smart stave has been asked for", (): void => {
            const inputSentence = "ston nt8up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st16 16; st8 4; ntqrdn 4; st8 8; st8 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("does not add additional lines as needed, if only a manual stave has been asked for", (): void => {
            const inputSentence = "st5lnwd nt8up ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "  　 " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st24 nt8up 20; ntqrdn 13;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can be turned off and on", (): void => {
            const inputSentence = "ston Gcl ; nt ; stof nt ; nt ; ston nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "      　 　    " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "Gcl st16 16; st8 7; ntqrdn 1; st8 8; st8 4; ntqrdn 13; ntqrdn 13; ntqrdn st8 8; st8 5;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("provides leger lines automatically for notes and noteheads beyond ±5 staff positions", (): void => {
            const inputSentence = "ston a5 /|\\ ; nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 /|\\ st8 8; st8 5; up6 lgln up6 ntqrdn 3; st8 8; st8 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("only puts leger lines on every other position (the ones that would have been lines)", (): void => {
            const inputSentence = "ston b5 nt ;" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "up6 lgln up7 ntqrdn st8 8; st8 5;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("provides multiple leger lines if the note is very beyond the staff", (): void => {
            const inputSentence = "ston a3 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "dn8 lgln dn6 lgln dn8 ntqrup st8 8; st8 5;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("turns off leger lines when smart stave is off", (): void => {
            const inputSentence = "stof st5lnnr dn6 nt ston ; dn6 nt" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "       " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "st8 dn6 ntqrup st8 8; st8 5; dn6 lgln dn6 ntqrup 3; st8 8; st8 2;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("provides leger lines of the smallest size which is wider than the symbol they are for", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            // Width 6; gets leger line with width 7
            actual = computeInputSentenceUnicode("ston a5 nhslvrensm" as Io & Sentence)
            expectedUnicode = " " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnnr up6 nhslvrensm st8 8;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            // Width 11; gets leger line with width 13
            actual = computeInputSentenceUnicode("ston a5 nt8dn" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt8dn st8 8; st8 5;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            // Width 19; gets leger line with width 20
            actual = computeInputSentenceUnicode("ston a5 ntshqrmndbwh" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnwd up6 ntshqrmndbwh st16 16; st8 1;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            // Width 21; gets leger line with width 20, because that's as wide as we can go
            actual = computeInputSentenceUnicode("ston a5 ntdbwh" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lglnwd up6 ntdbwh st16 16; st8 7;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("makes exceptions for upward notes with flags, since their flags contribute to width which is irrelevant to the leger line (because the stem is on the right, and flags always go to the right, so that width is not part of the notehead, which the leger line is really for), treating them as if they were just as wide as a quarter note", (): void => {
            let actual
            let expectedUnicode
            let expectedCodes

            //  has width 11, so it should receive a 13-wide medium leger line

            actual = computeInputSentenceUnicode("ston a5 nt8up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt8up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt16up" as Io & Sentence)
            expectedUnicode = "   " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt16up st16 16; st8 5;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt32up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt32up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt64up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt64up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt128up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt128up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt256up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt256up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt512up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt512up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)

            actual = computeInputSentenceUnicode("ston a5 nt1024up" as Io & Sentence)
            expectedUnicode = "  " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            expectedCodes = "up6 lgln up6 nt1024up st16 16; st8 4;"
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("should not display anything when you've only entered 'ston'", (): void => {
            const inputSentence = "ston" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("should not display anything when you've only entered 'ston' and an example of the type of staff you want to automate", (): void => {
            const inputSentence = "ston st5ln" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "" as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("can be configured to automate different types of staves, by providing one stave of that kind", (): void => {
            const inputSentence = "ston st4ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st4ln 16; st4lnnr 4; ntqrdn 4; st4lnnr 8; st4lnnr 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })

        it("manual stave of the same type as the automated type has no effect (including if it's the default type)", (): void => {
            const inputSentence = "ston st5ln nt8up ; nt4" as Io & Sentence

            const actual = computeInputSentenceUnicode(inputSentence)

            const expectedUnicode = "     " as Unicode & Sentence
            expect(actual).toBe(expectedUnicode)
            const expectedCodes = "nt8up st16 16; st8 4; ntqrdn 4; st8 8; st8 1;" as Code & Sentence
            expect(computeCodeSentenceFromUnicodeSentence(actual)).toBe(expectedCodes)
        })
    })
})
