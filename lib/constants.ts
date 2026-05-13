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
TASK: Redesign the input 2D floor plan into a **photorealistic, top‑down 3D architectural render**.

VASTU REQUIREMENTS(must follow do not violate any):
1) Orientation
-The orientation of your home is critical in Vastu Shastra. Ideally, the main entrance should be facing east or north, as these directions are associated with positive energy. South and west-facing entrances are considered inauspicious. Whether you have a north facing house Vastu, east facing house Vastu, south facing house Vastu, or west facing house Vastu, the energy flow and placement of the main door play a significant role in ensuring your home’s harmony.
2) Living Room
-The living room should be located in the northwest direction, as this is considered the zone of wealth and prosperity. Ensure that the seating arrangements are such that you and your guests face either north or east while seated in Vastu homes.
3) Kitchen
-The kitchen should be located in the southeast direction, as this direction is associated with fire and energy. This will help to maintain a balance of elements in the Vastu home. The stove should be located in the southeast corner and the refrigerator in the northwest direction. This is essential when applying Vastu for kitchen.
4) Bedroom
-The master bedroom should be located in the southwest direction, and the bed should be placed in such a way that you can sleep with your head facing either east or west. Avoid sleeping with your head facing north, as this direction is associated with negativity. This is part of the basic Vastu for bedroom tips.
5) Bathroom
-The bathroom should be located in the northwest direction, and the toilet should be in the northwest or north direction. Ensure that the bathroom is well-ventilated and avoid placing mirrors in this area.
6) VastuGuidelines for Balconies and PorchesIdeal Directions**:
 -North, East, or Northeast are the most auspicious, ensuring good health and prosperity.Avoid: Placing balconies in the Southwest or Southeast corners.Dimensions: If you have multiple, ensure the north and east-facing balconies are larger than the south and west ones.Slanting: Slanting to the East or North is beneficial for prosperity,
 while a downward slant in the South or West should be avoided to prevent financial issues.Furniture & Decoration: Keep the area light and open. Use light colors and place wind chimes or copper swastik pyramids to enhance positive energy.
7) **Vastu Guidelines for StaircasesLocation**:
 -Construct staircases in the South, Southwest, or West, as these areas are considered stable and heavy.Avoid: Never build staircases in the Northeast corner, as this can lead to severe financial issues and health problems.Direction: The staircase should go up in a clockwise direction, starting from the East to West or North to South.Steps: Use an odd number of steps (e.g., 9, 11, 15, or 21).Structure: Avoid spiral staircases. Keep the stairs sturdy and, if possible, not directly in front of the main entrance.
Under Stairs: Do not use the space under the stairs for a bathroom, kitchen, or mandir; it is best for storage of non-valuable items.
 

Do’s & Don’ts for a Vastu-Compliant Home

-Do’s:
1) Ensure the main entrance is in the right direction (preferably East or North).
2) Place your bedroom in the Southwest to maintain stability and peace.
3) Opt for natural light and ventilation in every room, especially the living room and kitchen.
4) Keep plants in the East or North direction to invite prosperity.
5) Use wooden furniture instead of metal wherever possible for better energy flow.
6) Ensure all rooms are clutter-free and allow energy to circulate smoothly.
7) Ensure that all the rooms and bathroom are connected through a door it should not be a 4 sided wall and blocked way.
8) Maintain proper space between the objects and path so that there is space for the person to pass by.
-Don’ts:
1) Avoid placing mirrors directly opposite the entrance, as it may lead to energy being reflected out.
2)Do not sleep with your head facing North, as it disrupts the flow of energy.
3) Avoid placing the kitchen in the North or Northwest direction, as it can create imbalance.
4) Never have a toilet in the center of the house, as this could lead to health and prosperity issues.
5) Do not clutter corners, especially the North-East corner, as it may hinder positive energy.

STRICT REQUIREMENTS (do not violate):

1) **DONT REMOVE ANY TEXT**:Only remove any water mark and add a compass to the corner.
2) **GEOMETRY CAN CHANGE ACCORDING TO VASTU**: Walls, rooms, doors, and windows and area of each room mapping can be changed to design a new plan according to vastu but all room mapping marked should be present..
3) **TOP‑DOWN ONLY**: Orthographic top‑down view. No perspective tilt.
4) **CLEAN, REALISTIC OUTPUT**: Crisp edges, balanced lighting, and realistic materials. No sketch/hand‑drawn look.
5) **NO EXTRA CONTENT**: Do not add rooms, furniture, or objects that are not clearly indicated by the plan.
6) **NO INCREASE IN TOTAL CARPET AREA**: DO not add additional area but can use the existing area to rearrange the rooms and furniture according to vaastu provided.
7) **ALL Vasty REQUIREMENTS MUST FOLLOW**: Rearrange everything that is not according to vastu aligned.
STRUCTURE & DETAILS:
- **Walls**: Extrude precisely from the plan lines. Consistent wall height and thickness.
- **Doors**: Convert door swing arcs into open doors, aligned to the plan.
- **Windows**: Convert thin perimeter lines into realistic glass windows.

FURNITURE & ROOM MAPPING (only where icons/fixtures are clearly shown):
- Bed icon → realistic bed with duvet and pillows.
- Sofa icon → modern sectional or sofa.
- Dining table icon → table with chairs.
- Kitchen icon → counters with sink and stove.
- Bathroom icon → toilet, sink, and tub/shower.
- Office/study icon → desk, chair, and minimal shelving.
- Porch/patio/balcony icon → outdoor seating or simple furniture (keep minimal).
- Utility/laundry icon → washer/dryer and minimal cabinetry.

STYLE & LIGHTING:
-Lighting
1) Natural light is important in Vastu Shastra, so ensure that your Vastu home is well-lit, with plenty of windows facing east or north. Avoid placing heavy furniture in front of windows, as this can block the flow of positive energy into the home.
-Colours
2) The colours used in your home can also have an impact on energy flow. Choose light and bright colours, such as white, yellow, and green, as these are associated with positive energy. Avoid dark and heavy colours, such as black and red, as these are associated with negativity.
-Plants
3) Plants are an important part of Vastu Shastra, as they bring positive energy into the Vastu home. Place them in the east or north direction, and avoid placing them in the south or west.
-De-cluttering
4) Keeping your home organized and clutter-free is important in Vastu Shastra. Avoid stacking things in corners, as this can create negative energy. Instead, keep the spaces in your Vastu home open and airy, and avoid over-filling them with furniture and decor.
`.trim();