import {Code, Symbol} from "./types"

const CLEF_MAP: Record<Code, Symbol> = {
    /*U+E050*/[Code[`tbcf`]]: {unicode: "", width: 24, description: "treble"},
    /*U+E05C*/[Code[`alcf`]]: {unicode: "", width: 24, description: "alto"},
    /*U+E062*/[Code[`bscf`]]: {unicode: "", width: 24, description: "bass"},
    /*U+E512*/[Code[`8va`]]: {unicode: "", width: 24, description: "octave above"},
    // TODO: add a test that for every enum key (Code) there is a CODES[] to fix the 8va thing
    /*U+E51C*/[Code[`8va`]]: {unicode: "", width: 24, description: "octave below"},
} as Record<Code, Symbol>

const GENERIC_POSITION_MAP: Record<Code, Symbol> = {
    /*U+EB97*/[Code[`up8`]]: {unicode: "", width: 0},
    /*U+EB96*/[Code[`up7`]]: {unicode: "", width: 0},
    /*U+EB95*/[Code[`up6`]]: {unicode: "", width: 0},
    /*U+EB94*/[Code[`up5`]]: {unicode: "", width: 0},
    /*U+EB93*/[Code[`up4`]]: {unicode: "", width: 0},
    /*U+EB92*/[Code[`up3`]]: {unicode: "", width: 0},
    /*U+EB91*/[Code[`up2`]]: {unicode: "", width: 0},
    /*U+EB90*/[Code[`up1`]]: {unicode: "", width: 0},
    /*U+F3F0*/[Code[`md0`]]: {unicode: "", width: 0},
    /*U+EB98*/[Code[`dn1`]]: {unicode: "", width: 0},
    /*U+EB99*/[Code[`dn2`]]: {unicode: "", width: 0},
    /*U+EB9A*/[Code[`dn3`]]: {unicode: "", width: 0},
    /*U+EB9B*/[Code[`dn4`]]: {unicode: "", width: 0},
    /*U+EB9C*/[Code[`dn5`]]: {unicode: "", width: 0},
    /*U+EB9D*/[Code[`dn6`]]: {unicode: "", width: 0},
    /*U+EB9E*/[Code[`dn7`]]: {unicode: "", width: 0},
    /*U+EB9F*/[Code[`dn8`]]: {unicode: "", width: 0},
} as Record<Code, Symbol>

const TREBLE_POSITION_MAP: Record<Code, Symbol> = {
    [Code[`c6`]]: GENERIC_POSITION_MAP[Code[`up8`]],
    [Code[`b5`]]: GENERIC_POSITION_MAP[Code[`up7`]],
    [Code[`a5`]]: GENERIC_POSITION_MAP[Code[`up6`]],
    [Code[`g5`]]: GENERIC_POSITION_MAP[Code[`up5`]],
    [Code[`f5`]]: GENERIC_POSITION_MAP[Code[`up4`]],
    [Code[`e5`]]: GENERIC_POSITION_MAP[Code[`up3`]],
    [Code[`d5`]]: GENERIC_POSITION_MAP[Code[`up2`]],
    [Code[`c5`]]: GENERIC_POSITION_MAP[Code[`up1`]],
    [Code[`b4`]]: GENERIC_POSITION_MAP[Code[`md0`]],
    [Code[`a4`]]: GENERIC_POSITION_MAP[Code[`dn1`]],
    [Code[`g4`]]: GENERIC_POSITION_MAP[Code[`dn2`]],
    [Code[`f4`]]: GENERIC_POSITION_MAP[Code[`dn3`]],
    [Code[`e4`]]: GENERIC_POSITION_MAP[Code[`dn4`]],
    [Code[`d4`]]: GENERIC_POSITION_MAP[Code[`dn5`]],
    [Code[`c4`]]: GENERIC_POSITION_MAP[Code[`dn6`]],
    [Code[`b3`]]: GENERIC_POSITION_MAP[Code[`dn7`]],
    [Code[`a3`]]: GENERIC_POSITION_MAP[Code[`dn8`]],
} as Record<Code, Symbol>

const BASS_POSITION_MAP: Record<Code, Symbol> = {
    [Code[`e4`]]: GENERIC_POSITION_MAP[Code[`up8`]],
    [Code[`d4`]]: GENERIC_POSITION_MAP[Code[`up7`]],
    [Code[`c4`]]: GENERIC_POSITION_MAP[Code[`up6`]],
    [Code[`b3`]]: GENERIC_POSITION_MAP[Code[`up5`]],
    [Code[`a3`]]: GENERIC_POSITION_MAP[Code[`up4`]],
    [Code[`g3`]]: GENERIC_POSITION_MAP[Code[`up3`]],
    [Code[`f3`]]: GENERIC_POSITION_MAP[Code[`up2`]],
    [Code[`e3`]]: GENERIC_POSITION_MAP[Code[`up1`]],
    [Code[`d3`]]: GENERIC_POSITION_MAP[Code[`md0`]],
    [Code[`c3`]]: GENERIC_POSITION_MAP[Code[`dn1`]],
    [Code[`b2`]]: GENERIC_POSITION_MAP[Code[`dn2`]],
    [Code[`a2`]]: GENERIC_POSITION_MAP[Code[`dn3`]],
    [Code[`g2`]]: GENERIC_POSITION_MAP[Code[`dn4`]],
    [Code[`f2`]]: GENERIC_POSITION_MAP[Code[`dn5`]],
    [Code[`e2`]]: GENERIC_POSITION_MAP[Code[`dn6`]],
    [Code[`d2`]]: GENERIC_POSITION_MAP[Code[`dn7`]],
    [Code[`c2`]]: GENERIC_POSITION_MAP[Code[`dn8`]],
} as Record<Code, Symbol>

const MANUAL_POSITION_MAP: Record<Code, Symbol> = {
    [Code[`tbc6`]]: GENERIC_POSITION_MAP[Code[`up8`]],
    [Code[`tbb5`]]: GENERIC_POSITION_MAP[Code[`up7`]],
    [Code[`tba5`]]: GENERIC_POSITION_MAP[Code[`up6`]],
    [Code[`tbg5`]]: GENERIC_POSITION_MAP[Code[`up5`]],
    [Code[`tbf5`]]: GENERIC_POSITION_MAP[Code[`up4`]],
    [Code[`tbe5`]]: GENERIC_POSITION_MAP[Code[`up3`]],
    [Code[`tbd5`]]: GENERIC_POSITION_MAP[Code[`up2`]],
    [Code[`tbc5`]]: GENERIC_POSITION_MAP[Code[`up1`]],
    [Code[`tbb4`]]: GENERIC_POSITION_MAP[Code[`md0`]],
    [Code[`tba4`]]: GENERIC_POSITION_MAP[Code[`dn1`]],
    [Code[`tbg4`]]: GENERIC_POSITION_MAP[Code[`dn2`]],
    [Code[`tbf4`]]: GENERIC_POSITION_MAP[Code[`dn3`]],
    [Code[`tbe4`]]: GENERIC_POSITION_MAP[Code[`dn4`]],
    [Code[`tbd4`]]: GENERIC_POSITION_MAP[Code[`dn5`]],
    [Code[`tbc4`]]: GENERIC_POSITION_MAP[Code[`dn6`]],
    [Code[`tbb3`]]: GENERIC_POSITION_MAP[Code[`dn7`]],
    [Code[`tba3`]]: GENERIC_POSITION_MAP[Code[`dn8`]],
    [Code[`bse4`]]: GENERIC_POSITION_MAP[Code[`up8`]],
    [Code[`bsd4`]]: GENERIC_POSITION_MAP[Code[`up7`]],
    [Code[`bsc4`]]: GENERIC_POSITION_MAP[Code[`up6`]],
    [Code[`bsb3`]]: GENERIC_POSITION_MAP[Code[`up5`]],
    [Code[`bsa3`]]: GENERIC_POSITION_MAP[Code[`up4`]],
    [Code[`bsg3`]]: GENERIC_POSITION_MAP[Code[`up3`]],
    [Code[`bsf3`]]: GENERIC_POSITION_MAP[Code[`up2`]],
    [Code[`bse3`]]: GENERIC_POSITION_MAP[Code[`up1`]],
    [Code[`bsd3`]]: GENERIC_POSITION_MAP[Code[`md0`]],
    [Code[`bsc3`]]: GENERIC_POSITION_MAP[Code[`dn1`]],
    [Code[`bsb2`]]: GENERIC_POSITION_MAP[Code[`dn2`]],
    [Code[`bsa2`]]: GENERIC_POSITION_MAP[Code[`dn3`]],
    [Code[`bsg2`]]: GENERIC_POSITION_MAP[Code[`dn4`]],
    [Code[`bsf2`]]: GENERIC_POSITION_MAP[Code[`dn5`]],
    [Code[`bse2`]]: GENERIC_POSITION_MAP[Code[`dn6`]],
    [Code[`bsd2`]]: GENERIC_POSITION_MAP[Code[`dn7`]],
    [Code[`bsc2`]]: GENERIC_POSITION_MAP[Code[`dn8`]],
} as Record<Code, Symbol>

const POSITION_MAP: Record<Code, Symbol> = {
    ...BASS_POSITION_MAP,
    ...TREBLE_POSITION_MAP, // Yes, I realize this is overriding bass. But it's for the unicodes list.
    ...GENERIC_POSITION_MAP,
    ...MANUAL_POSITION_MAP,
}

export {
    CLEF_MAP,
    BASS_POSITION_MAP,
    TREBLE_POSITION_MAP,
    MANUAL_POSITION_MAP,
    POSITION_MAP,
    GENERIC_POSITION_MAP,
}
