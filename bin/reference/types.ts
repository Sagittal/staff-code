import {Char, Count, Html, Id, Index, Link, Name, Word} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Code, Unicode} from "../../src/translate"

type ReferenceRow = [Unicode & Word, Code & Word, Mnemonic]

type Mnemonic = Html & {_MnemonicBrand: boolean}

type Explanation = Html & {_ExpanationBrand: boolean}
type Parenthetical = string & {_ParentheticalBrand: boolean}

// @ts-ignore
type Section = [Id<Section>, Name<Section>, Parenthetical, Link, Explanation, ReferenceRow[]]

interface SmuflRangeDatum {
    description: Name<Section>,
    glyphs: Array<Name<Unicode>>,
}

type SmuflRanges = Record<Id<Section>, SmuflRangeDatum>

interface MatchesCaseAgnosticParameters {
    glyphNameChar: Name<Unicode> & Char,
    code: Code & Word,
    codeIndex: Index<Code & Char>
}

interface ShouldBoldParameters extends MatchesCaseAgnosticParameters {
    codeCharsAlreadyMatchedByThisMnemonicWord: Count<Code & Char>,
}

export {
    ReferenceRow,
    Section,
    SmuflRangeDatum,
    SmuflRanges,
    Explanation,
    Mnemonic,
    Parenthetical,
    MatchesCaseAgnosticParameters,
    ShouldBoldParameters,
}
