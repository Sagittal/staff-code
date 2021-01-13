import {BLANK, computeKeyPath, isUndefined, RecordKey, sort, Word} from "@sagittal/general"
import {ALIASES_MAP, Code, SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP, Unicode} from "../../../../translate"
import {EMPTY_CODE} from "./constants"

const ALIASES_FOR_REFERENCE_MAP = JSON.parse(JSON.stringify(ALIASES_MAP))

const SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES =
    Object.keys(SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP) as Array<Code & Word>
SAGITTAL_SECONDARY_SAGISPEAK_ALIAS_CODES.forEach((key: Code & Word): void => {
    delete ALIASES_FOR_REFERENCE_MAP[key]
})

const ALIASES_ENTRIES = Object.entries(ALIASES_FOR_REFERENCE_MAP) as Array<[Code & Word, Unicode & Word]>

const UNICODE_ALIASES = ALIASES_ENTRIES.reduce(
    (
        unicodeAliases: Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
        [code, unicode]: [Code & Word, Unicode & Word],
    ): Record<RecordKey<Unicode & Word>, Array<Code & Word>> => {
        if (isUndefined(unicodeAliases[unicode])) {
            unicodeAliases[unicode] = [] as Array<Code & Word>
        }

        unicodeAliases[unicode].push(code)
        sort(unicodeAliases[unicode], {by: computeKeyPath("length")})

        // TODO: FEATURE IMPROVE, READY TO GO: EXCEPTIONAL ALIAS ORDERING
        //  I think /||\ and \!!/ should be the click-to-insert (ungreyed) codes,
        //  Despite being longer than shr and flt.
        //  Likewise @. and l., not i and o.
        //  Can't argue with that. I'll try to figure out the least obnoxious way to realize that.
        //  Just make it so that if any code has no alphabetical characters, it definitely comes first

        return unicodeAliases
    },
    {} as Record<RecordKey<Unicode & Word>, Array<Code & Word>>,
) as Record<RecordKey<Unicode & Word>, Array<Code & Word>>

const CODE_ALIASES: Record<RecordKey<Code & Word>, Array<Code & Word>> = {
    "nt4": ["nt", "nt4"] as Array<Code & Word>,
}

// TODO: FEATURE IMPROVE, READY TO GO: SAGISPEAK CORRECTIONS
//  Fix Sagispeak, "sl" rather than "sr", "ch" rather than "kh". Also in Sagittal-SMuFL-Map.

const setupCodeCell = (codeCell: HTMLTableCellElement, unicode: Unicode & Word, code: Code & Word): void => {
    const aliases = UNICODE_ALIASES[unicode] || CODE_ALIASES[code]
    if (isUndefined(aliases)) {
        codeCell.textContent = code
        if (code === EMPTY_CODE) {
            codeCell.style.color = "#888888"
            codeCell.setAttribute("sc-code", BLANK)
        } else {
            codeCell.setAttribute("sc-code", code)
        }
    } else {
        aliases.forEach((alias: Code & Word, index: number): void => {
            const aliasSpan = document.createElement("span")
            aliasSpan.textContent = alias
            if (index !== 0) {
                aliasSpan.style.paddingLeft = "1em"
                aliasSpan.style.color = "#888888"
            }
            codeCell.appendChild(aliasSpan)
        })
        codeCell.setAttribute("sc-code", aliases[0])
    }
}

export {
    setupCodeCell,
}
