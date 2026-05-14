export type ReportSection =
  | {
      title: string;
      items: string[];
    }
  | {
      title: string;
      text: string;
    };

export type ReportWater = {
  name: string;
  summary: string;
  sections: ReportSection[];
};

export type FishingReportRegion = {
  slug: string;
  title: string;
  waters: ReportWater[];
};

export const mayReportLabel = "May Fishing Report";
export const mayReportDate = "May 13 Conditions & Outlook";

export const fishingReportRegions: FishingReportRegion[] = [
  {
    slug: "lake-michigan-and-tributaries",
    title: "Lake Michigan and Tributaries",
    waters: [
      {
        name: "Lake Michigan",
        summary:
          "Spring salmon fishing is beginning to improve as baitfish move toward the shoreline. Most fish are still being caught inside the two mile shoreline band.",
        sections: [
          {
            title: "What’s Biting",
            items: [
              "Coho salmon",
              "Steelhead",
              "Lake trout",
              "Early skamania",
              "Smallmouth bass",
            ],
          },
          {
            title: "Productive Areas",
            items: [
              "Michigan City Harbor",
              "Port of Indiana",
              "Burns Ditch",
              "East Chicago breakwalls",
              "Hammond shoreline",
            ],
          },
          {
            title: "Best Techniques",
            items: [
              "Troll dodger and fly combos in the top 20 to 30 feet",
              "Orange and chartreuse spoons",
              "Spawn sacs under floats",
              "Ned rigs and soft plastics near rocks and breakwalls",
            ],
          },
          {
            title: "Conditions",
            text: "Cold water continues to slow the bite somewhat, but improving bait presence has anglers optimistic for the coming weeks.",
          },
        ],
      },
      {
        name: "Trail Creek",
        summary:
          "A few early skamania steelhead are beginning to move into the creek systems.",
        sections: [
          {
            title: "Best Baits",
            items: ["Spawn sacs", "Bright spoons", "Float rigs"],
          },
          {
            title: "Outlook",
            text: "Numbers remain light, but patient anglers covering water are finding fish.",
          },
        ],
      },
      {
        name: "Little Calumet River",
        summary:
          "Bass and catfish action continues to improve as water temperatures rise.",
        sections: [
          {
            title: "Effective Presentations",
            items: [
              "Swimbaits",
              "Jerkbaits",
              "Cut bait for catfish",
              "Night fishing around slower pools",
            ],
          },
        ],
      },
      {
        name: "St. Joseph River",
        summary:
          "One of the stronger multi species fisheries in northern Indiana right now.",
        sections: [
          {
            title: "What’s Biting",
            items: [
              "Walleye",
              "Smallmouth bass",
              "Pike",
              "Channel catfish",
              "Crappie",
            ],
          },
          {
            title: "Productive Tactics",
            items: [
              "Jig and minnow combinations",
              "Swimbaits in current seams",
              "Nightcrawlers and cut bait for catfish",
            ],
          },
          {
            title: "Hotspots",
            items: ["Twin Branch Dam", "Elkhart stretches", "Backwater pools"],
          },
        ],
      },
    ],
  },
  {
    slug: "northern-indiana",
    title: "Northern Indiana",
    waters: [
      {
        name: "Lake Wawasee",
        summary:
          "Bass and panfish are moving shallow with fish actively spawning in warming bays.",
        sections: [
          {
            title: "Best Baits",
            items: [
              "Chatterbaits",
              "Spinnerbaits",
              "Tube jigs",
              "Minnows under slip floats",
            ],
          },
          {
            title: "Best Locations",
            items: [
              "Emerging weed lines",
              "Dark bottom coves",
              "Docks receiving afternoon sun",
            ],
          },
        ],
      },
      {
        name: "Webster Lake",
        summary:
          "Crappie action continues to improve with warming water temperatures.",
        sections: [
          {
            title: "Productive Techniques",
            items: ["Small minnows", "White tube jigs", "Red worms for bluegill"],
          },
          {
            title: "Best Bite Windows",
            items: ["Early morning", "Evening hours"],
          },
        ],
      },
      {
        name: "Chain O'Lakes State Park",
        summary:
          "Northern pike and largemouth bass are active around warming vegetation.",
        sections: [
          {
            title: "Recommended Presentations",
            items: [
              "Spinnerbaits",
              "Suspending jerkbaits",
              "Live bait under floats",
            ],
          },
        ],
      },
      {
        name: "Winona Lake",
        summary:
          "Bass fishing remains steady with fish staging near shallow cover.",
        sections: [
          {
            title: "Best Techniques",
            items: [
              "Weightless plastics",
              "Swim jigs",
              "Crankbaits around submerged structure",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "central-indiana",
    title: "Central Indiana",
    waters: [
      {
        name: "Lake Monroe",
        summary:
          "High water conditions continue, but fishing has improved as lake levels stabilize.",
        sections: [
          {
            title: "What’s Biting",
            items: [
              "Walleye",
              "Hybrid striped bass",
              "Crappie",
              "Largemouth bass",
            ],
          },
          {
            title: "Best Areas",
            items: ["Tailwaters below the dam", "Flooded timber", "Creek channels"],
          },
          {
            title: "Productive Presentations",
            items: [
              "Inline spinners",
              "Paddle tail swimbaits",
              "Minnows around brush",
              "Crankbaits in moving water",
            ],
          },
        ],
      },
      {
        name: "Geist Reservoir",
        summary: "Bass are shallow and aggressive during low light periods.",
        sections: [
          {
            title: "Best Baits",
            items: ["Buzzbaits", "Spinnerbaits", "Soft plastics around docks"],
          },
          {
            title: "Additional Notes",
            text: "Crappie continue holding near submerged wood and brush piles.",
          },
        ],
      },
      {
        name: "Eagle Creek Reservoir",
        summary:
          "Urban anglers are finding good action for crappie, bass, and catfish.",
        sections: [
          {
            title: "Current Pattern",
            items: [
              "Crappie suspended around structure",
              "Bass shallow in warming coves",
              "Catfish active after sunset",
            ],
          },
        ],
      },
      {
        name: "White River",
        summary: "Smallmouth fishing continues improving as flows stabilize.",
        sections: [
          {
            title: "Productive Presentations",
            items: ["Ned rigs", "Small swimbaits", "Craw colored crankbaits"],
          },
          {
            title: "Best Water",
            items: ["Gravel bars", "Bridge eddies", "Rocky current seams"],
          },
        ],
      },
    ],
  },
  {
    slug: "southern-indiana",
    title: "Southern Indiana",
    waters: [
      {
        name: "Patoka Lake",
        summary: "One of the hottest striped bass bites in Indiana this week.",
        sections: [
          {
            title: "What’s Biting",
            items: ["Wipers", "Catfish", "Crappie", "Largemouth bass"],
          },
          {
            title: "Best Techniques",
            items: [
              "Live shad",
              "Chicken liver",
              "White swimbaits",
              "Evening and night fishing",
            ],
          },
          {
            title: "Productive Areas",
            items: ["Tailwaters", "Main lake points", "Rip rap shorelines"],
          },
        ],
      },
      {
        name: "Ohio River",
        summary:
          "River conditions remain favorable with steady catfish and hybrid bass action.",
        sections: [
          {
            title: "Target Species",
            items: ["Blue catfish", "Flathead catfish", "Sauger", "Smallmouth bass"],
          },
          {
            title: "Best Presentations",
            items: [
              "Cut bait in deep holes",
              "Crankbaits near current breaks",
              "Jigging around wing dams",
            ],
          },
        ],
      },
      {
        name: "Blue River",
        summary: "Clear water conditions are producing quality smallmouth action.",
        sections: [
          {
            title: "Effective Baits",
            items: [
              "Inline spinners",
              "Soft craws",
              "Small topwater lures during evenings",
            ],
          },
        ],
      },
      {
        name: "Brookville Lake",
        summary:
          "Crappie and walleye fishing continue improving with warmer water temperatures.",
        sections: [
          {
            title: "Best Areas",
            items: ["Standing timber", "Main lake points", "Creek arms"],
          },
          {
            title: "Recommended Baits",
            items: ["Minnows", "Blade baits", "Jigging spoons"],
          },
        ],
      },
    ],
  },
];

export function getFishingReportRegion(slug: string) {
  return fishingReportRegions.find((region) => region.slug === slug);
}

export function hasItems(
  section: ReportSection,
): section is Extract<ReportSection, { items: string[] }> {
  return "items" in section;
}
