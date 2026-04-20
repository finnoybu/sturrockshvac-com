// FontAwesome initialization — import this module from any client
// component that uses FontAwesomeIcon.
//
// FontAwesome by default injects its stylesheet dynamically at runtime.
// That injection happens *after* the icons have already rendered at
// default (often wrong) sizes, so when the CSS finally applies the icons
// resize — pushing everything below them down and producing Cumulative
// Layout Shift.
//
// The canonical fix, per FontAwesome's own docs:
//   1. Import the stylesheet statically (Next.js bundles it into the
//      page's CSS, loaded before any JS runs).
//   2. Disable the runtime injection.
//
// Must be imported for side effects before any FontAwesomeIcon renders.

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
