import {BLANK, cleanArray, computeKeyPath, isUndefined, RecordKey, shallowClone, sort, Word} from "@sagittal/general"
import {
    ALIASES_MAP,
    Code,
    SAGITTAL_COMMA_NAME_ALIASES_MAP,
    SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP,
    Unicode,
} from "../../../../../translate"
import {LIGHT_GREY} from "../../constants"
import {EMPTY_CODE_CELL} from "./constants"

// TODO: ALIASES BUG
//  We have ".b" as the click-to-insert code for flat, in the Ref.
//  That just seems like a straight bug that needs fixing.
//  Same problem with natural and double-flat. Sharp and double-sharp are OK.
//  - Oh. That's because of the bit where I thought sorting codes with non-alphabetical chars first would
//  Solve all the problems. We know now that they don't, due to the complexity of the sagittal alias sorting
//  Desires. So, I'll probably just need to undo that bit and make all the exceptions hardcoded.
//  Probably simpler than what I had to do to make it work now with some semblance of pattern to it.

const ALIASES_FOR_REFERENCE_MAP = JSON.parse(JSON.stringify(ALIASES_MAP))

const SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES =
    Object.keys(SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP) as Array<Code & Word>
SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES.forEach((key: Code & Word): void => {
    delete ALIASES_FOR_REFERENCE_MAP[key]
})

const ALIASES_ENTRIES = Object.entries(ALIASES_FOR_REFERENCE_MAP) as Array<[Code & Word, Unicode & Word]>

const reorderAliasesSuchThatAnyWithNonAlphabeticalCharsComeFirst = (unicodeAliases: Array<Code & Word>): void => {
    const indexOfCodeWithNonAlphabeticalChars =
        unicodeAliases.findIndex((unicodeAlias: Code & Word): boolean => !!unicodeAlias.match(/[^\w]/))
    if (indexOfCodeWithNonAlphabeticalChars !== -1) {
        const originalUnicodeAliases = shallowClone(unicodeAliases)
        cleanArray(unicodeAliases)
        const aliasesOriginallyBeforeAliasWithNonAlphabeticalChars =
            originalUnicodeAliases.slice(0, indexOfCodeWithNonAlphabeticalChars)
        const aliasesOriginallyAfterAliasWithNonAlphabeticalChars =
            originalUnicodeAliases.slice(indexOfCodeWithNonAlphabeticalChars + 1)
        const unicodeAliasWithNonAlphabeticalChars = originalUnicodeAliases[indexOfCodeWithNonAlphabeticalChars]
        unicodeAliases.push(
            unicodeAliasWithNonAlphabeticalChars,
            ...aliasesOriginallyBeforeAliasWithNonAlphabeticalChars,
            ...aliasesOriginallyAfterAliasWithNonAlphabeticalChars,
        )
    }
}

const reorderAliasesSuchThatSagittalCommaNameAliasesComeFinal = (unicodeAliases: Array<Code & Word>): void => {
    const indexOfSagittalCommaNameAlias =
        unicodeAliases.findIndex((unicodeAlias: Code & Word): boolean => {
            return Object.keys(SAGITTAL_COMMA_NAME_ALIASES_MAP).includes(unicodeAlias)
        })
    if (indexOfSagittalCommaNameAlias !== -1) {
        const originalUnicodeAliases = shallowClone(unicodeAliases)
        cleanArray(unicodeAliases)
        const aliasesBeforeSagittalCommaNameAlias =
            originalUnicodeAliases.slice(0, indexOfSagittalCommaNameAlias)
        const aliasesAfterSagittalCommaNameAlias =
            originalUnicodeAliases.slice(indexOfSagittalCommaNameAlias + 1)
        const sagittalCommaNameAlias = originalUnicodeAliases[indexOfSagittalCommaNameAlias]

        unicodeAliases.push(
            ...aliasesBeforeSagittalCommaNameAlias,
            ...aliasesAfterSagittalCommaNameAlias,
            sagittalCommaNameAlias,
        )
    }
}

const UNICODES_ALIASES = ALIASES_ENTRIES.reduce(
    (
        unicodesAliases: Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
        [code, unicode]: [Code & Word, Unicode & Word],
    ): Record<RecordKey<Unicode & Word>, Array<Code & Word>> => {
        if (isUndefined(unicodesAliases[unicode])) {
            unicodesAliases[unicode] = [] as Array<Code & Word>
        }

        const unicodeAliases = unicodesAliases[unicode]

        unicodeAliases.push(code)

        sort(unicodeAliases, {by: computeKeyPath("length")})
        reorderAliasesSuchThatAnyWithNonAlphabeticalCharsComeFirst(unicodeAliases)
        reorderAliasesSuchThatSagittalCommaNameAliasesComeFinal(unicodeAliases)

        return unicodesAliases
    },
    {} as Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
) as Record<RecordKey<Unicode & Word>, Array<Code & Word>>

const CODE_ALIASES: Record<RecordKey<Code & Word>, Array<Code & Word>> = {
    "nt4": ["nt", "nt4"] as Array<Code & Word>,
}

const setupCodeCellWithOnlyTheAutoGeneratedCode = (codeCell: HTMLTableCellElement, code: Code & Word) => {
    codeCell.textContent = code
    if (code === EMPTY_CODE_CELL) {
        codeCell.style.color = LIGHT_GREY
        codeCell.setAttribute("sc-code", BLANK)
    } else {
        codeCell.setAttribute("sc-code", code)
    }
}

const setupCodeCellWithOnlyTheAliases = (codeCell: HTMLTableCellElement, aliases: Array<Code & Word>): void => {
    aliases.forEach((alias: Code & Word, index: number): void => {
        const aliasSpan = document.createElement("span")
        aliasSpan.textContent = alias
        if (index !== 0) {
            aliasSpan.style.paddingLeft = "1em"
            aliasSpan.style.color = LIGHT_GREY
        }
        codeCell.appendChild(aliasSpan)
    })
    codeCell.setAttribute("sc-code", aliases[0])
}

const setupCodeCell = (codeCell: HTMLTableCellElement, unicode: Unicode & Word, code: Code & Word): void => {
    const aliases = UNICODES_ALIASES[unicode] || CODE_ALIASES[code]
    if (isUndefined(aliases)) {
        setupCodeCellWithOnlyTheAutoGeneratedCode(codeCell, code)
    } else {
        setupCodeCellWithOnlyTheAliases(codeCell, aliases)
    }
}

export {
    setupCodeCell,
}
