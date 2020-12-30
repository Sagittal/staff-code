export {computeSmartPositionAndSmartClefUnicodeIntroClauseAndUpdateSmarts} from "./introClause"
export {canBePositioned} from "./canBePositioned"
export {updateSmartClef} from "./clef"
export {updateSmartPosition} from "./position"
export {getUnicodeGivenClef} from "./unicode"
export {isPositionUnicode} from "./isPositionUnicode"
export {Clef} from "./types"

// TODO: FEATURE IMPROVE, BLOCKED: CLEFS
//  Clefs can be CSP'd and middle C will be shifted
//  This will be blocked on adding the ligatures to the font, though
//  That part is introduced here: http://forum.sagittal.org/viewtopic.php?p=3163#p3163
//  Dave says "So in future, someone who wanted a tenor clef would write "up2 Ccl ;" or "[ tncl up2 Ccl ] tncl ;"."
//  Then see: http://forum.sagittal.org/viewtopic.php?p=3166#p3166
//  For an explanation of how instead you should just start tracking where middle C is
//  - Blocked on understanding what changes Dave already made to Bravura Text BB from Bravura Text
//  Because if I add ligatures for the clefs, I'll want to do it in a FontForge script
//  And I know I asked him at some point if he was keeping track of all of those changes, and I think he replied
//  But for the life of me I cannot find it
//  - This should also involve adding alto and tenor clefs
//  - There's also the matter of renaming the font to Bravura Text SC, "SC" for "StaffCode".
//  But you'll have to run it through the https://onlinefontconverter.com/]online font converter afterwards,
//  To make it work on the web, and to generate the .woff.
//  Old stuff here too: http://forum.sagittal.org/viewtopic.php?p=2811#p2811
//  - And update the names (Just change "BB" to "SC" wherever you find it.)
//  - I think I want to wait on this until I figure out the other changes I need to make, like clef ligatures
//  As well as ligatures for all the supplemental positions (which have otherwise been implemented here)
//  That's why I'm combining these to-dos here