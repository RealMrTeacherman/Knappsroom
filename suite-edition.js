/* suite-edition.js (v91) — which copy of the suite this is.

   This is the Creslane copy's version. It is the one file where this
   copy differs from the suite it was built from; everything else is
   byte for byte the same.

   What a teacher chooses is stored in that teacher's browser and wins
   over anything here, so this only decides what a board starts as.

     groupLook  the math board's four groups: "colors" (Red, Blue,
                Yellow, Green) or "animals" (Fox, Bear, Tiger, Lion) */
window.SuiteEdition = { name: "creslane", groupLook: "colors",
  /* v106: no Firebase project of its own; each teacher pastes theirs in
     Planner sync (or uses GitHub), so no copy points at another's project */
  firebase: null };
