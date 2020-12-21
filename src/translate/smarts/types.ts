import {Code, Symbol, Unicode, Width} from "../symbols"

interface Smarts {
    advanceWidth: Width,
    staveWidth: Width,
    spacing: Width,
    staveOn: boolean,
    position: Unicode,
    codeMap: Record<Code, Symbol>
}

export {
    Smarts,
}
