export type CategorySlug =
  | "hunting"
  | "fishing"
  | "gear"
  | "conservation"
  | "cooking";

export interface Category {
  slug: CategorySlug;
  name: string;
  eyebrow: string;
  description: string;
  accent: string;
  featuredTags: string[];
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  bio: string;
  imageLabel: string;
  imageSrc?: string;
}

export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
      variant?: "body" | "heading";
      boldPhrases?: string[];
      italic?: boolean;
      size?: "body" | "small";
    }
  | {
      type: "list";
      items: Array<{
        text: string;
        bold?: boolean;
      }>;
    }
  | {
      type: "table";
      rows: string[][];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
  readingTime: number;
  author: Author;
  body: ArticleBlock[];
}

export const categories: Category[] = [
  {
    slug: "hunting",
    name: "Hunting",
    eyebrow: "Pursuit",
    description:
      "Coverage built for ethical hunters who care about skill, stewardship, access, and long seasons in the field.",
    accent: "from-pine to-moss",
    featuredTags: ["Whitetail", "Waterfowl", "Gear", "Public Land"],
  },
  {
    slug: "fishing",
    name: "Fishing",
    eyebrow: "Angling",
    description:
      "Stories and service that connect anglers to rivers, lakes, saltwater opportunities, and the habitats that sustain them.",
    accent: "from-[#31585f] to-[#7a8f7f]",
    featuredTags: ["Bass", "Trout", "Fly Fishing", "Boats"],
  },
  {
    slug: "gear",
    name: "Gear",
    eyebrow: "Field Kit",
    description:
      "Measured coverage of field gear, tackle, optics, apparel, tools, and practical buying decisions that hold up outdoors.",
    accent: "from-[#4d5a4b] to-sand",
    featuredTags: ["Optics", "Apparel", "Tackle", "Reviews"],
  },
  {
    slug: "conservation",
    name: "Conservation",
    eyebrow: "Stewardship",
    description:
      "Reporting and explainers on policy, access, wildlife science, and the organizations shaping the future of wild places.",
    accent: "from-pine-deep to-pine",
    featuredTags: ["Policy", "Wildlife", "Access", "Science"],
  },
  {
    slug: "cooking",
    name: "Cooking",
    eyebrow: "Table",
    description:
      "Clean, respectful preparation of wild game and fish with a focus on technique, seasonality, and sharing food well.",
    accent: "from-clay to-sand",
    featuredTags: ["Wild Game", "Fish", "Camp Cooking", "Butchery"],
  },
];

export const authors: Author[] = [
  {
    slug: "connor-jackson",
    name: "Connor Jackson",
    role: "Founder and Editor",
    shortBio:
      "Connor Jackson is an outdoorsman and the founder of Field and Habitat, with a background in business management and a life centered on the outdoors.",
    bio: "Connor Jackson is an outdoorsman and the founder of Field and Habitat. Connor earned his bachelor degree in Business Management from the School of Environmental Affairs at Indiana University. Connor spends his time outdoors fly fishing, hunting, and trapping. He is the self-proclaimed Head Chef of his household, cooking for his wife and daughter on a nightly basis.",
    imageLabel: "Portrait placeholder",
    imageSrc: "/Photos for Writers/Connor Jackson Trout.JPG",
  },
];

const p = (
  text: string,
  boldPhrases?: string[],
  options?: {
    italic?: boolean;
    size?: "body" | "small";
  },
): ArticleBlock => ({
  type: "paragraph",
  text,
  boldPhrases,
  italic: options?.italic,
  size: options?.size,
});
const h = (text: string): ArticleBlock => ({
  type: "paragraph",
  text,
  variant: "heading",
});
const list = (
  items: Array<{
    text: string;
    bold?: boolean;
  }>,
): ArticleBlock => ({ type: "list", items });

export const articles: Article[] = [
  {
    slug: "possible-changes-coming-for-indiana-bobcat-season",
    title: "Possible Changes Coming for Indiana Bobcat Season",
    excerpt:
      "Indiana wildlife officials are considering specific changes to the state’s bobcat hunting and trapping regulations for 2026 after another strong harvest season in 2025.",
    category: "hunting",
    tags: ["Hunting", "Conservation", "Bobcats", "Indiana"],
    publishedAt: "2026-04-22T22:03:46-04:00",
    heroImage: "/Photos for Articles/ThreeBobcats (1).PNG",
    readingTime: 5,
    author: authors[0],
    body: [
      p("Indiana wildlife officials are considering specific changes to the state’s bobcat hunting and trapping regulations for 2026 after another strong harvest season in 2025. If approved, the proposal would represent the next step in Indiana’s transition from bobcat recovery to active population management."),
      p("For decades, bobcats were rare in Indiana. Habitat loss, unregulated harvest, and settlement pressure pushed the species to low numbers across much of the state by the early 1900s. Over the last several decades, that trend has reversed. Forest regeneration, stronger prey bases, modern wildlife regulations, and expanding habitat corridors have helped bobcats steadily reclaim southern Indiana and spread northward."),
      h("What Happened in 2025?"),
      p("Indiana’s 2025 bobcat season showed the strongest legal harvest totals since the species reopened to regulated take. The state harvested 250 bobcats in 2025, a notable jump that signals both growing participation and a healthy population base in harvest zones.", ["250 bobcats in 2025"]),
      p("Most activity remained concentrated in southern Indiana, where bobcats are most established. Wildlife managers also continued relying on multiple indicators beyond harvest totals, including:"),
      list([
        { text: "Trail camera confirmations" },
        { text: "Public sighting reports" },
        { text: "Road mortality data" },
        { text: "Nuisance complaints" },
        { text: "Geographic spread into new counties" },
        { text: "Age and sex data from harvested animals" },
      ]),
      p("Those data points reportedly continued to show a stable or increasing population, especially in southern and south central Indiana."),
      p("That strong 2025 harvest total is a major reason officials are now considering expanded opportunity for 2026."),
      h("Specific Changes Proposed for 2026"),
      p("Indiana’s current proposal includes several concrete changes rather than broad concepts. Those changes include:"),
      list([
        { text: "Increase the statewide harvest quota from 250 bobcats to 400 bobcats", bold: true },
        { text: "Expand the season length from 15 days to 30 days", bold: true },
        { text: "Open additional counties in central Indiana where bobcat sightings and confirmed presence have increased", bold: true },
        { text: "Allow the use of dogs for bobcat hunting where legal under existing game pursuit rules", bold: true },
        { text: "Permit landowners experiencing livestock or poultry damage more flexibility in nuisance removal permits", bold: true },
        { text: "Maintain mandatory check in and harvest reporting within 24 hours", bold: true },
        { text: "Keep automatic season closure once the statewide quota is reached", bold: true },
        { text: "Continue annual biological review of harvest age structure, sex ratios, and geographic distribution", bold: true },
      ]),
      p("If adopted, these changes would create the most liberal bobcat season Indiana has seen in modern times, while still retaining quota safeguards."),
      h("How Indiana Compares to Other Midwest States"),
      p("Indiana currently remains one of the more conservative bobcat states in the region, but the 2025 harvest total of 250 animals places it closer to established Midwest programs than many realize."),
      h("Midwest Bobcat Management Snapshot (Estimated 2025 Data)"),
      {
        type: "table",
        rows: [
          ["State", "Estimated Population", "Annual Harvest / Take", "Management Style"],
          ["Indiana", "1,500 to 2,500", "250", "Conservative quota"],
          ["Kentucky", "8,000 to 12,000", "400 to 700", "Established season"],
          ["Ohio", "500 to 1,000", "0", "Protected"],
          ["Illinois", "3,000 to 5,000", "0", "No active season"],
          ["Michigan", "10,000+", "300 to 500", "Permit system"],
          ["Wisconsin", "4,000 to 6,000", "250 to 350", "Lottery / tag system"],
          ["Missouri", "12,000+", "1,000+", "Broad harvest access"],
          ["Minnesota", "8,000+", "400 to 600", "Zone quotas"],
        ],
      },
      p("Figures represent agency estimates and recent public harvest summaries. Totals vary annually.", undefined, {
        italic: true,
        size: "small",
      }),
      p("The chart shows Indiana is still cautious relative to several neighboring states, even with the proposed expansion."),
      h("Why the Proposal Has Support"),
      p("Hunters, trappers, and some landowners see the proposal as a natural next step in bobcat management."),
      p("First, they argue population recovery goals have clearly been met in many counties."),
      p("Second, a 400 bobcat quota would still be conservative compared with states with similar habitat."),
      p("Third, longer seasons improve opportunity while reducing crowding and rushed participation."),
      p("Fourth, nuisance flexibility helps rural landowners protect poultry and small livestock."),
      h("Why Some Oppose It"),
      p("Opponents are expected to raise concerns during public comment."),
      p("Bobcats remain difficult to census accurately."),
      p("Some residents oppose expanded predator harvest in principle."),
      p("Others may support quota increases but oppose opening newer central Indiana counties."),
      p("Still others may believe a jump from 250 to 400 is too aggressive in one season."),
      h("What Needs to Happen for the Proposal to Pass"),
      p("For Indiana’s 2026 bobcat changes to become law, the Department of Natural Resources must formally advance the proposal through the Natural Resources Commission."),
      p("That includes preliminary approval, public comment periods, stakeholder input, and final adoption."),
      p("Supporters will need to show that the 2025 harvest of 250 bobcats demonstrates sustainability and continued growth.", ["250 bobcats"]),
      p("Public participation will matter significantly."),
      h("Bottom Line"),
      p("Indiana’s bobcat recovery has been one of the state’s wildlife success stories. The question for 2026 is no longer whether bobcats belong here. It is how they should be managed."),
      p("If approved, the proposed jump to a 400 bobcat quota, longer season, and expanded county access would move Indiana closer to surrounding Midwest states while still keeping regulatory safeguards in place.", ["400 bobcat", "quota", "still keeping"]),
    ],
  },
  {
    slug: "fewer-birds-over-the-wabash",
    title: "Fewer Birds Over the Wabash: The Science Behind Southwest Indiana’s Duck Decline",
    excerpt:
      "For generations, Hovey Lake Fish and Wildlife Area in Posey County, Indiana stood as one of the premier duck hunting destinations in the Midwest.",
    category: "hunting",
    tags: ["Hunting", "Conservation", "Waterfowl", "Indiana"],
    publishedAt: "2026-04-22T22:00:38-04:00",
    heroImage: "/Photos for Articles/Sunsetoverwabash.jpeg",
    readingTime: 8,
    author: authors[0],
    body: [
      p("For generations, Hovey Lake Fish and Wildlife Area in Posey County, Indiana stood as one of the premier duck hunting destinations in the Midwest. Positioned in the floodplain of the lower Wabash River near its confluence with the Ohio, it offered nearly perfect habitat for migrating waterfowl. Through the mid-20th century, hunters regularly saw limits of mallards, pintails, and teal. Stories from the 1950s through the 1980s describe skies full of birds and consistent success that rivaled more famous destinations along the Mississippi Flyway."),
      p("I started hunting the region in 2020 and heard both the tall tales from the decades prior and the reasons why those hunts are stuck in the past. Many lifelong hunters, like those I hunt with in southwestern Indiana describe a very similar reality. There are fewer birds, shorter migrations, and less predictable seasons. While it may feel like a simple decline, the science tells a more complex story. A combination of climate change, agricultural shifts, habitat loss, and behavioral adaptation has reshaped how and where ducks migrate across North America and southwestern Indiana."),
      h("Migration Is Shifting Within the Flyway"),
      p("The idea that migration paths are shifting is partially true, but often misunderstood. Flyways like the Mississippi are not narrow corridors but broad regions. Within those regions, ducks adjust their movements based on weather, habitat, and food availability."),
      p("Research from the U.S. Fish and Wildlife Service and Ducks Unlimited shows that while the Mississippi Flyway remains intact, the distribution of birds within it has shifted northward and westward in recent decades. A key concept is “short-stopping.” Instead of continuing to traditional wintering grounds like southern Indiana, Kentucky, and Arkansas, many ducks now stop earlier in Illinois, Missouri, and even farther north."),
      p("This shift reduces both the number of birds reaching southwestern Indiana and the amount of time they remain there."),
      h("Climate Change and the Short-Stopping Effect"),
      p("The most significant driver behind this change is climate."),
      p("Historically, freezing temperatures forced ducks south as wetlands iced over and food became inaccessible. Today, winters across the Midwest are warmer, with fewer and shorter freeze events. Data from the National Oceanic and Atmospheric Administration shows a clear warming trend over the past several decades."),
      p("As a result, wetlands and agricultural fields in states north of Indiana remain open longer into winter. A study published in Global Change Biology found that mallards have shifted their wintering range north by hundreds of miles, strongly correlated with rising temperatures. If open water and food are available, ducks simply do not need to migrate as far."),
      p("For areas like Hovey Lake, this means fewer birds arriving, later arrivals in the season, and shorter periods of peak activity."),
      h("Food Availability Has Moved North"),
      p("Food is just as important as weather in determining migration patterns. Modern agriculture in the Midwest has created an abundance of reliable food sources farther north. Waste corn and soybeans left after harvest, combined with managed wetlands and conservation programs, provide high-energy feeding opportunities for migrating ducks."),
      p("Organizations like Ducks Unlimited have worked extensively with farmers in states like Illinois and Iowa to improve habitat. These efforts have made northern portions of the flyway increasingly attractive to waterfowl."),
      p("At the same time, the lower Wabash Valley has experienced changes in flooding patterns and wetland productivity. River management, sedimentation, and inconsistent water levels have reduced the reliability of natural food sources in some areas."),
      p("When ducks encounter abundant food earlier in their migration, there is little incentive to continue south."),
      h("Habitat Loss and Degradation"),
      p("Local habitat conditions also play a significant role. Indiana has lost more than 85 percent of its original wetlands since European settlement, according to the Indiana Department of Natural Resources. While protected areas like Hovey Lake remain intact, the surrounding landscape has been heavily altered."),
      p("Wetlands have become more fragmented, reducing the size and connectivity of available habitat. Changes in river systems have altered natural flooding cycles that once supported productive feeding areas."),
      p("Even in managed areas, maintaining ideal conditions has become more difficult. Water levels, vegetation, and food availability must align, and increasing variability in weather patterns makes that harder to achieve consistently."),
      h("Hunting Pressure and Behavioral Adaptation"),
      p("Another factor contributing to the perception of fewer birds is how ducks have adapted to hunting pressure."),
      p("Modern waterfowl have become more cautious in response to decades of hunting across the flyway. They are more likely to feed at night, limit daytime movement, and avoid heavily pressured areas. Research from the U.S. Fish and Wildlife Service shows that ducks quickly learn to use refuges and areas with less disturbance."),
      p("If regions farther north offer both abundant food and reduced pressure, ducks will increasingly remain there. This behavioral shift can make it seem like populations have declined locally, even when overall numbers remain stable."),
      h("Population Trends and Distribution"),
      p("It is important to distinguish between fewer ducks overall and fewer ducks in a specific location. According to U.S. Fish and Wildlife Service surveys, many duck populations have remained stable over the long term. In some years, populations have even increased."),
      p("The issue facing hunters in southwestern Indiana is not necessarily a widespread population decline, but a redistribution of birds across the landscape. Some species, such as northern pintails, have experienced declines due to breeding habitat loss in the Prairie Pothole Region. However, for many commonly hunted species, the birds are still present within the flyway."),
      p("They are simply spending more time farther north."),
      h("A New Reality for Southwest Indiana"),
      p("The conditions that once made Hovey Lake legendary have changed. Ducks are migrating later, stopping earlier, and spending less time in southern portions of the flyway. Food and habitat conditions are often better farther north, and birds have adapted to both environmental changes and hunting pressure."),
      p("The result is fewer birds, shorter windows of opportunity, and less predictability for hunters in the lower Wabash Valley."),
      h("Conclusion"),
      p("Hovey Lake’s reputation was built during a time when climate, habitat, and migration patterns aligned perfectly for southwestern Indiana. That alignment no longer exists in the same way. What hunters are experiencing today is not simply a decline, but a shift in distribution driven by warming temperatures, agricultural change, and evolving waterfowl behavior."),
      p("The birds are still there. They are just not stopping where they used to."),
    ],
  },
  {
    slug: "bass-on-the-long-rod",
    title: "Bass on the Long Rod: Why You Should Fly Fish for Bass",
    excerpt:
      "Living in the Midwest, I’ve taken some heat for utilizing my fly rod for bass fishing.",
    category: "fishing",
    tags: ["Fishing", "Bass", "Fly Fishing"],
    publishedAt: "2026-04-24T10:02:10-04:00",
    heroImage: "/Photos for Articles/Bass on the fly.JPG",
    readingTime: 4,
    author: authors[0],
    body: [
      p("Living in the Midwest, I’ve taken some heat for utilizing my fly rod for bass fishing. Pulling out my 4-piece 7 weight when others are using conventional tackle rod feels a little like showing up to a truck pull in a sports car. It’s not the first thing most people think of when chasing largemouth or smallmouth, but once you try it, it’s hard to forget. Conventional tackle catches plenty of bass, no doubt about it. Spinnerbaits, crankbaits, worms, and jigs all have their place. But a fly rod brings a different kind of excitement, more visual, more hands on, and in many ways, more rewarding."),
      p("With conventional gear, the rod mostly casts and fights the fish while the reel handles line. With a fly rod, you become part of every step. You strip line by hand, manage slack, and animate the fly with little movements that make it come alive. It feels active. Personal. When a bass eats on the fly, especially in shallow water, it feels like you tricked him face to face."),
      p("One of the best places to start is with topwater flies. Few things in fishing can compete with a bass exploding on a popper at dawn. A foam popper chugged along lily pads or next to a dock can create the kind of strike that makes you laugh out loud. You cast near cover, let the rings settle, then give it a sharp strip. Pop. Pause. Pop. Pause. Then chaos. It’s one of the most addictive ways to fish, period."),
      p("When the fish aren’t looking up, that’s where streamers come in. Flies like the famous Clouser Minnow are bass staples for a reason. They imitate baitfish, dart through the water, and can be tied in endless color combinations. White and chartreuse is a classic. Black works great in stained water. Olive can shine when bass are feeding on bluegill or young perch. Cast them near points, weed edges, or submerged timber and strip them back with varying speeds until the fish tell you what they want."),
      p("One major advantage of fly fishing for bass is depth control, especially in weedy water. Conventional lures often foul on vegetation or dive too aggressively. With a fly line and the right setup, you can fish exactly where you want. Floating line with a weighted fly can tick just above the grass. Intermediate line can cruise through sparse weeds. Sink tip line can probe deeper pockets without burying into salad. It’s precise, clean, and surprisingly effective."),
      h("Then there’s the fight."),
      p("A three pound bass on heavy baitcasting gear is fun. A three pound bass on a 7 weight fly rod feels like a bar fight. The rod bends deep, the fish surges, and every head shake comes straight through the cork handle. Even largemouth buried in pads become memorable when you’re managing line by hand and trying to keep tension."),
      p("Fly fishing for bass also has a way of slowing you down. You notice ambush points, bluegill beds, shadows under overhangs, and the little lanes in weed mats where predators wait. You fish with more intention."),
      p("If you already love bass fishing, a fly rod won’t replace your tackle box. But it might become the most fun rod you own."),
    ],
  },
  {
    slug: "the-truth-about-the-6-5-creedmoor",
    title: "The Truth About the 6.5 Creedmoor: Facts, Myths, and Real Hunting Use",
    excerpt:
      "The 6.5 Creedmoor has become one of the most talked about rifle cartridges of the last decade.",
    category: "gear",
    tags: ["Gear", "Hunting", "6.5 Creedmoor"],
    publishedAt: "2026-04-24T10:51:43-04:00",
    readingTime: 6,
    author: authors[0],
    body: [
      p("The 6.5 Creedmoor has become one of the most talked about rifle cartridges of the last decade. Some hunters praise it as nearly perfect. Others dismiss it as overhyped marketing. The truth, as usual, sits somewhere in the middle."),
      p("The 6.5 Creedmoor is neither magic nor useless. It is simply a modern, efficient cartridge that does several things very well. For hunters trying to decide if it belongs in their rifle safe, the best place to start is by ignoring internet arguments and looking at facts."),
      h("What the 6.5 Creedmoor Is Good At"),
      p("The 6.5 Creedmoor was designed around efficiency and shootability. It fires sleek, aerodynamic bullets that hold velocity well, resist wind drift, and maintain energy better than many traditional cartridges with similar recoil."),
      p("Most common factory hunting loads use bullets from 120 to 143 grains, with muzzle velocities usually around 2,700 feet per second depending on barrel length and load selection."),
      p("Those numbers may not sound flashy, but real world performance matters more than marketing."),
      p("One of the biggest reasons for the cartridge’s popularity is recoil. It kicks less than many traditional hunting rounds like the .308 Winchester, .30 06 Springfield, and often less than the .270 Winchester. Lower recoil helps many shooters practice more, shoot more accurately, and recover their sight picture faster after the shot."),
      p("That matters far more than bragging rights over muzzle energy."),
      h("Myth: It Is Too Weak for Deer Hunting"),
      p("This is one of the most common claims online, and it is simply false.", ["it is simply false"]),
      p("The 6.5 Creedmoor is an excellent whitetail cartridge. It also performs very well on mule deer, pronghorn, feral hogs, and black bear with proper bullets and responsible shot placement."),
      p("Because 6.5mm bullets often have high sectional density, they penetrate deeply for their size. That means they can drive through tissue and bone efficiently while still expanding properly with quality hunting bullets."),
      p("For deer sized game, the 6.5 Creedmoor is one of the best all around modern choices available."),
      h("Myth: It Is Only a Long Range Cartridge"),
      p("Also false."),
      p("Yes, the cartridge performs well at longer ranges because of efficient bullet design and low wind drift. But it is just as effective at common hunting distances of 50 to 300 yards."),
      p("Many 6.5 Creedmoor owners never shoot past 250 yards. They still benefit from mild recoil, strong accuracy, and dependable terminal performance."),
      h("Recommended Impact Energy for Common North American Game"),
      p("These are general rules of thumb, not hard laws. Bullet construction and shot placement matter as much or more than energy numbers."),
      {
        type: "table",
        rows: [
          ["Animal", "Common Recommended Minimum Impact Energy"],
          ["Whitetail Deer", "1,000 ft lbs"],
          ["Feral Hogs", "1,000 to 1,200 ft lbs"],
          ["Pronghorn", "800 to 1,000 ft lbs"],
          ["Black Bear", "1,200 ft lbs"],
          ["Mule Deer", "1,000 to 1,200 ft lbs"],
          ["Elk", "1,500 ft lbs"],
          ["Moose", "1,800 ft lbs"],
        ],
      },
      h("Common Hunting Load Ballistic Comparison"),
      p("Approximate figures using common factory hunting loads with a 200 yard zero. Actual numbers vary by barrel length, elevation, and ammunition brand."),
      {
        type: "table",
        rows: [
          ["Cartridge", "Common Hunting Load", "100 Yards", "300 Yards", "500 Yards"],
          ["6.5 Creedmoor", "143 gr ELD X", "+1.8” / 2,430 fps / 1,875 ft lbs", "7.5” drop / 2,170 fps / 1,495 ft lbs", "41” drop / 1,920 fps / 1,170 ft lbs"],
          [".270 Winchester", "130 gr Soft Point", "+1.6” / 2,850 fps / 2,345 ft lbs", "6.2” drop / 2,450 fps / 1,730 ft lbs", "35” drop / 2,080 fps / 1,250 ft lbs"],
          [".308 Winchester", "150 gr Soft Point", "+2.0” / 2,550 fps / 2,165 ft lbs", "8.9” drop / 2,120 fps / 1,495 ft lbs", "50” drop / 1,760 fps / 1,030 ft lbs"],
          ["7mm 08 Remington", "140 gr Hunting Load", "+1.9” / 2,520 fps / 1,975 ft lbs", "7.8” drop / 2,180 fps / 1,475 ft lbs", "43” drop / 1,860 fps / 1,075 ft lbs"],
          [".30 06 Springfield", "165 gr Soft Point", "+1.9” / 2,620 fps / 2,515 ft lbs", "8.0” drop / 2,220 fps / 1,805 ft lbs", "45” drop / 1,860 fps / 1,265 ft lbs"],
        ],
      },
      h("What Can Comfortably Be Hunted With It"),
      p("The 6.5 Creedmoor is squarely in its comfort zone with:"),
      list([
        { text: "Whitetail deer" },
        { text: "Mule deer" },
        { text: "Antelope / pronghorn" },
        { text: "Feral hogs" },
        { text: "Black bear" },
        { text: "Coyotes and predators" },
      ]),
      p("It is highly effective on these species with proper bullets."),
      h("What About Elk?"),
      p("Elk is where honest discussion matters."),
      p("Yes, elk can absolutely be taken with the 6.5 Creedmoor. Many hunters do it every year. But can be hunted and best cartridge choice are different questions."),
      p("With premium bullets and disciplined shot selection, the Creedmoor works. Broadside shots at reasonable ranges are ideal."),
      p("However, if elk are your main target species every year, larger cartridges like the .270, .308, .30 06, 7mm Rem Mag, or .300 class rounds offer more energy and greater margin for error."),
      h("What About Moose?"),
      p("Possible? Yes."),
      p("Ideal? Usually no."),
      p("Moose are large, heavy animals. While bullet placement still matters most, hunters generally benefit from more bullet weight and more impact energy than the 6.5 Creedmoor provides."),
      h("Why Does the 6.5 Creedmoor Get Hate?"),
      p("There are several reasons."),
      p("First, it became extremely popular, and popular products often create backlash."),
      p("Second, some fans exaggerated its capability and talked as if it replaced every cartridge ever made."),
      p("Third, some critics focus only on caliber size or muzzle energy while ignoring bullet design, recoil, and real world results."),
      p("Fourth, internet cartridge debates are often emotional rather than practical."),
      h("Is the Hate Valid?"),
      p("Some of it is fair."),
      p("The 6.5 Creedmoor is not a magnum. It does not hit the hardest. It is not the best answer for every species or every hunter."),
      p("But claims that it is weak, useless, or only hype are not supported by field results."),
      p("The cartridge succeeds because it balances recoil, accuracy, penetration, and practical hunting performance."),
      h("Should You Buy One?"),
      p("Ask yourself these questions:"),
      list([
        { text: "Do you mainly hunt deer, antelope, hogs, or black bear?" },
        { text: "Do you want lighter recoil and easier shooting?" },
        { text: "Do you want a rifle capable from woods ranges to several hundred yards?" },
        { text: "Do you want strong factory ammo support and many rifle options?" },
      ]),
      p("If yes, the 6.5 Creedmoor is a smart purchase."),
      p("If your main goal is elk, moose, or the largest North American game, you may be better served by .270, .308, .30 06, or larger cartridges."),
      h("Final Verdict"),
      p("The real lesson is simple. Ignore internet myths and match the cartridge to your hunting style. The 6.5 Creedmoor is not magic, but it is absolutely one of the most practical hunting cartridges of the modern era."),
    ],
  },
];

export const allTags = Array.from(
  new Set([
    ...categories.flatMap((category) => category.featuredTags),
    ...articles.flatMap((article) => article.tags),
  ]),
).sort();

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug) {
  return articles.filter(
    (article) =>
      article.category === category ||
      article.tags.some((tag) => tag.toLowerCase() === category),
  );
}

export function getAuthor(slug: string) {
  return authors.find((author) => author.slug === slug);
}
