export const PUTER_WORKER_URL = import.meta.env.VITE_PUTER_WORKER_URL || "";

// Storage Paths
export const STORAGE_PATHS = {
    ROOT: "VaastuX",
    SOURCES: "VaastuX/sources",
    RENDERS: "VaastuX/renders",
} as const;

// Timing Constants (in milliseconds)
export const SHARE_STATUS_RESET_DELAY_MS = 1500;
export const PROGRESS_INCREMENT = 15;
export const REDIRECT_DELAY_MS = 600;
export const PROGRESS_INTERVAL_MS = 100;
export const PROGRESS_STEP = 5;

// UI Constants
export const GRID_OVERLAY_SIZE = "60px 60px";
export const GRID_COLOR = "#3B82F6";

// HTTP Status Codes
export const UNAUTHORIZED_STATUSES = [401, 403];

// Image Dimensions
export const IMAGE_RENDER_DIMENSION = 1024;

export const VaastuX_RENDER_PROMPT = `
TASK:
DO NOT simply convert the uploaded 2D floor plan into 3D.

Instead:
FIRST completely analyze the original plan,
extract all functional requirements,
THEN redesign an entirely NEW Vastu-compliant floor plan from scratch while preserving the same usable carpet area, same room count, and same utilities.

The final output should be:
1) A NEW Vastu-optimized layout
2) A realistic top-down 3D architectural render
3) Based on the original requirements only
4) NOT a copy of the original geometry

--------------------------------------------------
CRITICAL PRIORITY ORDER (VERY IMPORTANT)
--------------------------------------------------

Priority #1 → FULL VASTU COMPLIANCE
Priority #2 → SAME TOTAL CARPET AREA
Priority #3 → SAME NUMBER OF ROOMS & UTILITIES
Priority #4 → REALISTIC ARCHITECTURAL PLANNING
Priority #5 → PHOTOREALISTIC TOP-DOWN 3D RENDER

The original wall layout is NOT important.
You are allowed to redesign the entire internal arrangement if needed for proper Vastu alignment.

--------------------------------------------------
IMPORTANT DESIGN LOGIC
--------------------------------------------------

DO NOT:
- trace the original walls
- replicate the original geometry
- simply beautify the existing plan
- keep incorrect room placements
- prioritize visual similarity

INSTEAD:
- treat the uploaded plan as a REQUIREMENTS DOCUMENT
- extract area + room information
- redesign the home completely according to Vastu
- create a brand-new optimized layout
- preserve only:
• total carpet area
• room count
• utility count
• practical functionality

The final layout SHOULD look architecturally different if required for Vastu compliance.

--------------------------------------------------
PHASE 1 — ANALYZE INPUT PLAN
--------------------------------------------------

Extract from uploaded floor plan:

1. Total approximate carpet area
2. Total number of bedrooms
3. Total bathrooms
4. Kitchen count
5. Living room count
6. Dining count
7. Balcony/porch count
8. Staircase count
9. Utility/laundry spaces
10. Entry position
11. Window distribution
12. Plumbing zones

Then ignore the old geometry and redesign intelligently.

--------------------------------------------------
MANDATORY VASTU RULES (HIGHEST PRIORITY)
--------------------------------------------------

ENTRANCE:
- Main entrance MUST face East or North.

LIVING ROOM:
- Place in Northwest.
- Seating must face North or East.

KITCHEN:
- MUST be in Southeast.
- Stove in Southeast corner.
- Refrigerator in Northwest side of kitchen.
- NEVER place kitchen in North or Northwest.

MASTER BEDROOM:
- MUST be in Southwest.
- Bed orientation:
  head towards East or West only.
- NEVER North-facing sleep direction.

BATHROOM:
- Northwest or North only.
- NEVER center of house.
- Proper ventilation required.

BALCONY / PORCH:
- Only North / East / Northeast.
- NEVER Southwest or Southeast.

STAIRCASE:
- South / Southwest / West only.
- NEVER Northeast.
- Clockwise ascending.
- NOT directly in front of entrance.
- No spiral staircase.

NORTHEAST ZONE:
- Keep open/light/minimal.
- Avoid heavy furniture.
- No toilet/staircase/kitchen here.

--------------------------------------------------
STRICT AREA RULES
--------------------------------------------------

- Total carpet area MUST remain approximately equal to original.
- DO NOT increase built-up footprint.
- DO NOT add extra rooms.
- DO NOT remove required rooms.
- You may resize rooms proportionally for Vastu optimization.
- Efficient circulation required.

--------------------------------------------------
STRICT ROOM RULES
--------------------------------------------------

If original plan contains:
- 3 bedrooms → redesign must contain exactly 3 bedrooms
- 2 bathrooms → redesign must contain exactly 2 bathrooms
- 1 kitchen → redesign must contain exactly 1 kitchen

DO NOT:
- invent mandir rooms
- add extra lounge
- add extra balcony
- add extra study
- add random furniture zones

--------------------------------------------------
TEXT PRESERVATION
--------------------------------------------------

- Preserve all original room labels and dimensions.
- Remove only watermark if present.
- Add compass showing North direction.

--------------------------------------------------
3D RENDER REQUIREMENTS
--------------------------------------------------

Generate:
- Ultra realistic architectural visualization
- STRICT orthographic top-down view
- NO perspective
- NO angled camera
- NO isometric view

Style:
- realistic Indian modern home
- clean interiors
- uncluttered spaces
- natural daylight

--------------------------------------------------
FURNITURE RULES
--------------------------------------------------

ONLY place furniture matching actual room function.

Bedroom:
- Bed only

Living:
- Sofa + table only

Kitchen:
- Counters + stove + sink + refrigerator

Bathroom:
- Toilet + sink + shower

Dining:
- Dining table only if dining exists

Balcony:
- Minimal seating only if balcony exists

DO NOT:
- add decorative clutter
- overfill rooms
- add random objects

--------------------------------------------------
OUTPUT EXPECTATION
--------------------------------------------------

The final result must feel like:
- a completely redesigned Vastu-correct architectural plan
- professionally space planned
- realistic and functional
- NOT a traced copy of the original plan
- same practical requirements
- same area
- same utilities
- fully optimized for Vastu

MOST IMPORTANT:
If the original plan violates Vastu,
YOU MUST CHANGE THE LAYOUT COMPLETELY
instead of preserving incorrect placements.
`.trim();