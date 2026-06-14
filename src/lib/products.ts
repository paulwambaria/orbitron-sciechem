const U = 'https://images.unsplash.com';
const Q = '?w=600&h=400&fit=crop&q=80';

// Each product gets its own thematically-matched image
const IMG = {
  // Industrial chemical environments
  lab_vials:        `${U}/photo-1576671081837-49000212a370${Q}`,   // coloured test tubes/vials — acids, solutions
  lab_scientist:    `${U}/photo-1532938911079-1b06ac7ceec7${Q}`,   // researcher with beakers — alkalis, crystals
  chem_plant:       `${U}/photo-1565793298595-6a879b1d9492${Q}`,   // industrial plant towers — large-scale acids
  industrial_int:   `${U}/photo-1532187863486-abf9dbad1b69${Q}`,   // factory interior — ammonia, silicate
  petroleum_pipes:  `${U}/photo-1558618666-fcd25c85cd64${Q}`,      // industrial pipes — petroleum, solvents
  water_blue:       `${U}/photo-1548407260-da850faa41e3${Q}`,      // clear blue water — sodium hypochlorite, water treatment

  // Food ingredients
  food_spices:      `${U}/photo-1498579150354-977475b7ea0b${Q}`,   // colourful spice bowls — citric acid, ascorbic acid
  food_factory:     `${U}/photo-1568702846914-96b305d2aaeb${Q}`,   // food production line — sodium benzoate, food additives
  bakery_flour:     `${U}/photo-1509440159596-0249088772ff${Q}`,   // flour, eggs, baking — potassium sorbate, emulsifiers
  bread_loaf:       `${U}/photo-1543362906-acfc16c67564${Q}`,      // sliced bread — calcium propionate
  dairy_milk:       `${U}/photo-1563636619-e9143da7973b${Q}`,      // milk/dairy products — lactic acid, sorbitol dairy
  cooking_oil:      `${U}/photo-1474979266404-7eaacbcd87c5${Q}`,   // oil being poured — vitamin AD3, edible oil fortification
  seasonings_spoon: `${U}/photo-1590779033100-9f60a05a013d${Q}`,   // spices on wooden spoons — MSG/flavour enhancers

  // Pharmaceutical
  pharma_blister:   `${U}/photo-1584308666744-24d5c474f2ae${Q}`,   // blister packs — MCC, excipients
  pharma_pills:     `${U}/photo-1471864190281-a93a3070b6de${Q}`,   // coloured pills/capsules — tablets, sorbitol
  pharma_bottles:   `${U}/photo-1582719471384-894fbb16e074${Q}`,   // amber glass pharma bottles — glycerin, propylene glycol
  pharma_liquid:    `${U}/photo-1576091160399-112ba8d25d1d${Q}`,   // pharmaceutical clear liquid — ethanol pharma

  // Lab equipment
  lab_instrument:   `${U}/photo-1581093196277-9b3c75a5d1ae${Q}`,   // technician at instrument — spectrophotometer, stirrer
  lab_equipment:    `${U}/photo-1582719471384-894fbb16e074${Q}`,   // bench lab equipment — HPLC, incubator
  lab_testing:      `${U}/photo-1576671081837-49000212a370${Q}`,   // coloured vials in rack — reagents, refractometer

  // Environment / specialty
  soil_field:       `${U}/photo-1500651230702-0e2d8a49d4ad${Q}`,   // green farm field — soil testing kits
  food_kitchen:     `${U}/photo-1504674900247-0877df9cc836${Q}`,   // food table/kitchen — acetic acid, F&B
};

export type ProductCategory = 'industrial' | 'food' | 'pharma' | 'petroleum' | 'laboratory' | 'food-inputs';

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  cas: string;
  grade: string;
  form: string;
  description: string;
  applications: string[];
  specifications?: { key: string; value: string }[];
  image: string;
  featured?: boolean;
};

export const CATEGORY_META: Record<ProductCategory, { label: string; badge: string }> = {
  industrial:    { label: 'Industrial Chemicals',   badge: 'bg-blue-100 text-blue-700' },
  food:          { label: 'Food Ingredients',       badge: 'bg-orange-100 text-orange-600' },
  pharma:        { label: 'Pharmaceutical',         badge: 'bg-green-100 text-green-700' },
  petroleum:     { label: 'Petroleum & Solvents',  badge: 'bg-slate-100 text-slate-700' },
  laboratory:    { label: 'Laboratory Equipment',  badge: 'bg-purple-100 text-purple-700' },
  'food-inputs': { label: 'Food & Beverage Inputs', badge: 'bg-cyan-100 text-cyan-700' },
};

export const products: Product[] = [
  // ── INDUSTRIAL CHEMICALS ──────────────────────────────────────────────────
  {
    slug: 'caustic-soda',
    name: 'Caustic Soda (NaOH)',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '1310-73-2',
    grade: 'Industrial / Technical Grade',
    form: 'Flakes / Pearls',
    description:
      'High-purity sodium hydroxide in flake and pearl forms. Essential for soap manufacturing, water treatment, textile processing, and chemical synthesis across all industrial sectors.',
    applications: ['Soap & Detergent Manufacturing', 'Water Treatment & pH Control', 'Textile Processing', 'Paper & Pulp Industry', 'Chemical Synthesis'],
    specifications: [
      { key: 'Purity', value: '≥ 99.0%' },
      { key: 'Moisture', value: '≤ 1.0%' },
      { key: 'Iron (Fe)', value: '≤ 10 ppm' },
      { key: 'Packaging', value: '25 kg bags / Bulk' },
    ],
    image: IMG.lab_scientist,          // white crystals / research lab setting
    featured: true,
  },
  {
    slug: 'sodium-hypochlorite',
    name: 'Sodium Hypochlorite',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '7681-52-9',
    grade: 'Industrial Grade',
    form: 'Liquid Solution (10–15%)',
    description:
      'Industrial-grade sodium hypochlorite solution for disinfection, bleaching, and water treatment. Available in 10–15% active chlorine concentration.',
    applications: ['Water Disinfection', 'Swimming Pool Treatment', 'Hospital & Facility Disinfection', 'Textile Bleaching', 'Food Sanitation'],
    specifications: [
      { key: 'Active Chlorine', value: '10–15%' },
      { key: 'pH', value: '11–13' },
      { key: 'Packaging', value: '25 L / 200 L Drums' },
    ],
    image: IMG.water_blue,             // blue/clear water — bleach/disinfection
  },
  {
    slug: 'hydrochloric-acid',
    name: 'Hydrochloric Acid',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '7647-01-0',
    grade: 'Industrial / AR Grade',
    form: 'Liquid (30–37%)',
    description:
      'High-quality HCl for pH control, metal pickling, and chemical manufacturing. Available in industrial and analytical reagent grades.',
    applications: ['Metal Cleaning & Pickling', 'pH Adjustment', 'Chemical Manufacturing', 'Food Processing (Acidifier)', 'Laboratory Analysis'],
    specifications: [
      { key: 'Assay', value: '30–37%' },
      { key: 'Specific Gravity', value: '1.18–1.19' },
      { key: 'Packaging', value: '35 kg Carboys / IBC' },
    ],
    image: IMG.lab_vials,              // coloured vials — acid/chemical solutions
  },
  {
    slug: 'sulfuric-acid',
    name: 'Sulfuric Acid',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '7664-93-9',
    grade: 'Industrial / AR Grade',
    form: 'Liquid (95–98%)',
    description:
      'Concentrated sulfuric acid critical in fertilizer production, battery manufacturing, and chemical synthesis. Supplied in industrial and AR grades.',
    applications: ['Battery Manufacturing', 'Fertilizer Production', 'Metal Processing', 'Water Treatment', 'Chemical Synthesis'],
    specifications: [
      { key: 'Assay', value: '95–98%' },
      { key: 'Specific Gravity', value: '1.84' },
      { key: 'Packaging', value: 'Carboys / IBC Tanks' },
    ],
    image: IMG.chem_plant,             // industrial plant towers — large-scale acid production
  },
  {
    slug: 'nitric-acid',
    name: 'Nitric Acid',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '7697-37-2',
    grade: 'Industrial / AR Grade',
    form: 'Liquid (65–70%)',
    description:
      'High-purity nitric acid for metal etching, fertilizer manufacturing, and explosives production in industrial and analytical grades.',
    applications: ['Fertilizer Production', 'Metal Etching & Pickling', 'Explosives Manufacturing', 'Laboratory Analysis', 'Chemical Synthesis'],
    image: IMG.lab_vials,              // lab vials — acid/nitric in glass
  },
  {
    slug: 'ammonia-solution',
    name: 'Ammonia Solution',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '1336-21-6',
    grade: 'Industrial Grade',
    form: 'Liquid Solution (25–30%)',
    description:
      'Industrial ammonia solution (ammonium hydroxide) for cleaning, refrigeration systems, textile dyeing, and chemical manufacturing.',
    applications: ['Industrial Cleaning', 'Refrigeration Systems', 'Textile Dyeing', 'Fertilizers', 'Chemical Manufacturing'],
    image: IMG.industrial_int,         // factory interior — industrial ammonia use
  },
  {
    slug: 'sodium-silicate',
    name: 'Sodium Silicate (Water Glass)',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '1344-09-8',
    grade: 'Industrial Grade',
    form: 'Liquid / Solid',
    description:
      'Sodium silicate in liquid and solid forms for adhesive manufacturing, paper processing, detergents, and construction applications.',
    applications: ['Detergent Manufacturing', 'Adhesives & Sealants', 'Paper Processing', 'Ceramics & Refractory', 'Construction'],
    image: IMG.chem_plant,             // industrial plant — silicate processing
  },
  {
    slug: 'industrial-ethanol',
    name: 'Industrial Ethanol / Methanol',
    category: 'industrial',
    categoryLabel: 'Industrial Chemicals',
    cas: '64-17-5 / 67-56-1',
    grade: 'Denatured / Industrial Grade',
    form: 'Liquid',
    description:
      'Denatured industrial ethanol and methanol for cleaning, hand sanitizer production, solvent applications, and manufacturing processes.',
    applications: ['Hand Sanitizer Production', 'Industrial Cleaning', 'Solvent Applications', 'Cosmetics Manufacturing'],
    specifications: [
      { key: 'Ethanol Concentration', value: '70% / 95% / Anhydrous' },
      { key: 'Packaging', value: '25 L / 200 L Drums' },
    ],
    image: IMG.petroleum_pipes,        // industrial drums/storage — bulk ethanol
  },

  // ── FOOD PROCESSING CHEMICALS & ADDITIVES ─────────────────────────────────
  {
    slug: 'citric-acid',
    name: 'Citric Acid (Monohydrate / Anhydrous)',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '5949-29-1 / 77-92-9',
    grade: 'Food Grade (CODEX / KEBS)',
    form: 'Powder / Granules',
    description:
      'High-purity food-grade citric acid in anhydrous and monohydrate forms — the most widely used acidulant, preservative, and flavoring agent in beverages, confectionery, and food processing.',
    applications: ['Beverages & Soft Drinks', 'Confectionery & Candy', 'Dairy Products', 'Jams & Jellies', 'Cleaning Agents'],
    specifications: [
      { key: 'Assay', value: '≥ 99.5%' },
      { key: 'Heavy Metals', value: '≤ 10 ppm' },
      { key: 'Packaging', value: '25 kg bags' },
    ],
    image: IMG.food_spices,            // colourful ingredient bowls — citric/acidic food
    featured: true,
  },
  {
    slug: 'ascorbic-acid',
    name: 'Ascorbic Acid (Vitamin C)',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '50-81-7',
    grade: 'Food Grade / Pharma Grade',
    form: 'Crystalline Powder',
    description:
      'Premium ascorbic acid for food fortification, beverage enhancement, and antioxidant preservation. Available in food and pharmaceutical grade.',
    applications: ['Food Fortification', 'Beverage Enhancement', 'Antioxidant Preservation', 'Vitamin Supplements', 'Bakery & Dairy'],
    specifications: [
      { key: 'Assay', value: '99.0–100.5%' },
      { key: 'Packaging', value: '25 kg drums' },
    ],
    image: IMG.seasonings_spoon,       // colourful powder/spice closeup — vitamin supplement feel
  },
  {
    slug: 'sodium-benzoate',
    name: 'Sodium Benzoate',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '532-32-1',
    grade: 'Food Grade (FCC / KEBS)',
    form: 'Powder / Granules',
    description:
      'Broad-spectrum food preservative for beverages, sauces, fruit juices, and acidic food products. Approved by KEBS and international food safety standards.',
    applications: ['Beverage Preservation', 'Fruit Juices & Squashes', 'Sauces & Condiments', 'Jams & Jellies', 'Bakery Products'],
    image: IMG.food_factory,           // food production line — large-scale food preservation
  },
  {
    slug: 'potassium-sorbate',
    name: 'Potassium Sorbate',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '590-00-1',
    grade: 'Food Grade',
    form: 'Powder / Granules',
    description:
      'Effective mold, yeast, and fungal growth inhibitor for food and beverages. Safe, widely approved, and compatible with most food matrices.',
    applications: ['Cheese & Dairy', 'Wine & Beer', 'Bakery Products', 'Fruit Products', 'Personal Care Products'],
    image: IMG.bakery_flour,           // bakery ingredients — bread/mold prevention
  },
  {
    slug: 'acetic-acid',
    name: 'Acetic Acid (Food Grade)',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '64-19-7',
    grade: 'Food Grade',
    form: 'Liquid (80–100%)',
    description:
      'High-purity food-grade acetic acid for pickling, vinegar production, and flavoring applications. Meets CODEX and KEBS food standards.',
    applications: ['Vinegar Production', 'Pickling & Preservation', 'Condiments & Sauces', 'Bakery', 'Flavoring Agent'],
    image: IMG.food_kitchen,           // food/kitchen — vinegar/condiment context
  },
  {
    slug: 'lactic-acid',
    name: 'Lactic Acid',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '50-21-5',
    grade: 'Food Grade',
    form: 'Liquid (80–88%)',
    description:
      'Premium lactic acid for dairy processing, meat preservation, and beverage acidification. Natural fermentation-derived option available.',
    applications: ['Dairy Processing', 'Meat & Poultry', 'Beverages & Brewing', 'Bakery (Sourdough)', 'Pharmaceutical Formulations'],
    image: IMG.dairy_milk,             // dairy/milk — lactic acid is key in dairy
  },
  {
    slug: 'calcium-propionate',
    name: 'Calcium Propionate',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '4075-81-4',
    grade: 'Food Grade',
    form: 'Powder',
    description:
      'Antimicrobial preservative for bakery products that inhibits mold and bacterial growth effectively. Standard choice for bread, cakes, and tortillas.',
    applications: ['Bread & Bakery', 'Cakes & Pastries', 'Tortillas & Flat Breads', 'Cheese Production'],
    image: IMG.bread_loaf,             // sliced bread — calcium propionate is the bread preservative
  },
  {
    slug: 'vitamin-ad3',
    name: 'Vitamin AD3 (Edible Oil Fortification)',
    category: 'food',
    categoryLabel: 'Food Ingredients',
    cas: '68-26-8',
    grade: 'Food Grade',
    form: 'Liquid / Powder Premix',
    description:
      'Vitamin A & D3 blend for edible oil fortification, dairy products, and food supplements. Compliant with KEBS oil fortification standards for the Kenyan market.',
    applications: ['Edible Oil Fortification', 'Dairy Products', 'Margarine & Spreads', 'Food Supplements'],
    image: IMG.cooking_oil,            // golden oil being poured — edible oil fortification
  },

  // ── PHARMACEUTICAL RAW MATERIALS ──────────────────────────────────────────
  {
    slug: 'glycerin-pharma',
    name: 'Glycerin (Pharma Grade)',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '56-81-5',
    grade: 'USP / BP Pharma Grade',
    form: 'Clear Viscous Liquid',
    description:
      'USP/BP pharmaceutical-grade glycerin for syrup formulations, oral liquids, topical preparations, and pharmaceutical manufacturing.',
    applications: ['Oral Liquid Formulations', 'Topical Preparations', 'Suppositories', 'Cosmetics & Toiletries', 'Food Applications'],
    specifications: [
      { key: 'Assay', value: '≥ 99.5%' },
      { key: 'Colour (APHA)', value: '≤ 10' },
      { key: 'Water', value: '≤ 0.5%' },
      { key: 'Packaging', value: '25 kg / 250 kg drums' },
    ],
    image: IMG.pharma_bottles,         // amber glass pharmaceutical bottles — glycerin/clear pharma liquid
    featured: true,
  },
  {
    slug: 'sorbitol-solution',
    name: 'Sorbitol Solution',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '50-70-4',
    grade: 'Pharma Grade USP/BP',
    form: 'Liquid (70%)',
    description:
      'Pharmaceutical-grade sorbitol solution as a humectant, sweetener, and excipient for oral preparations, syrups, and pharmaceutical formulations.',
    applications: ['Oral Liquid Formulations', 'Cough Syrups', 'Laxatives', 'Toothpaste Manufacturing', 'Diabetic Food Products'],
    image: IMG.pharma_pills,           // medicine capsules — oral pharma products
  },
  {
    slug: 'liquid-glucose',
    name: 'Liquid Glucose',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '50-99-7',
    grade: 'Pharma / Food Grade',
    form: 'Viscous Syrup',
    description:
      'Pharmaceutical and food-grade liquid glucose as an excipient, sweetener, and binder in tablet manufacturing and confectionery applications.',
    applications: ['Tablet Manufacturing (Binder)', 'Confectionery', 'Bakery Products', 'Pharmaceutical Syrups', 'Energy Drinks'],
    image: IMG.pharma_liquid,          // pharmaceutical liquid/syrup — viscous glucose
  },
  {
    slug: 'ethanol-pharma',
    name: 'Ethanol (Pharma Grade)',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '64-17-5',
    grade: 'BP / USP Pharma Grade',
    form: 'Liquid',
    description:
      'USP/BP pharmaceutical-grade ethanol for pharmaceutical manufacturing, hand sanitizer production, tinctures, and extraction processes.',
    applications: ['Pharmaceutical Manufacturing', 'Hand Sanitizer Production', 'Tinctures & Extracts', 'Sterilization', 'Cosmetics'],
    image: IMG.pharma_bottles,         // pharma bottles/amber glass — pharma ethanol
  },
  {
    slug: 'microcrystalline-cellulose',
    name: 'Microcrystalline Cellulose (MCC)',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '9004-34-6',
    grade: 'Pharma Grade NF',
    form: 'White Free-Flowing Powder',
    description:
      'MCC as a tablet binder and filler for direct compression and wet granulation manufacturing. Meets NF, EP, and BP specifications.',
    applications: ['Tablet Direct Compression', 'Wet Granulation', 'Capsule Filling', 'Controlled Release Formulations'],
    image: IMG.pharma_blister,         // blister packs/tablets — MCC is a tablet excipient
  },
  {
    slug: 'propylene-glycol',
    name: 'Propylene Glycol',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: '57-55-6',
    grade: 'Pharma / Food Grade USP',
    form: 'Clear Colourless Liquid',
    description:
      'USP pharmaceutical-grade propylene glycol as a solvent, humectant, and preservative in pharmaceutical, food, and cosmetic applications.',
    applications: ['Pharma Solvents', 'Injectable Formulations', 'Topical Products', 'Food Additives', 'Cosmetics & Skincare'],
    image: IMG.pharma_liquid,          // clear pharmaceutical liquid — propylene glycol appearance
  },
  {
    slug: 'pharma-excipients',
    name: 'Pharmaceutical Excipients (Full Range)',
    category: 'pharma',
    categoryLabel: 'Pharmaceutical',
    cas: 'Various',
    grade: 'Pharma Grade',
    form: 'Powder / Liquid',
    description:
      'Comprehensive range of excipients including binders, disintegrants, lubricants, coating agents, and film formers for solid and liquid dosage forms.',
    applications: ['Tablet Manufacturing', 'Capsule Filling', 'Oral Liquid Formulations', 'Controlled Release', 'Coating Formulations'],
    image: IMG.pharma_blister,         // pharma tablets/blister — excipients = tablets
  },

  // ── PETROLEUM & SOLVENT CHEMICALS ─────────────────────────────────────────
  {
    slug: 'toluene',
    name: 'Toluene',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '108-88-3',
    grade: 'Industrial / AR Grade',
    form: 'Clear Liquid',
    description:
      'High-purity toluene as a solvent for paint manufacturing, adhesives, inks, rubber, and pharmaceutical processes. Available in industrial and analytical grades.',
    applications: ['Paint & Coatings', 'Adhesives & Sealants', 'Printing Inks', 'Rubber Industry', 'Pharmaceutical Processes'],
    specifications: [
      { key: 'Assay', value: '≥ 99.5%' },
      { key: 'Boiling Range', value: '109.5–111.5 °C' },
      { key: 'Packaging', value: '200 L Drums / IBCs' },
    ],
    image: IMG.industrial_int,         // factory interior — paint/coatings manufacturing
    featured: true,
  },
  {
    slug: 'xylene',
    name: 'Xylene (Mixed)',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '1330-20-7',
    grade: 'Industrial / AR Grade',
    form: 'Clear Liquid',
    description:
      'Mixed xylenes as industrial and lab-grade solvents for paints, varnishes, petrochemicals, and histology lab clearing.',
    applications: ['Paint Thinner', 'Laboratory Histology', 'Rubber Industry', 'Pesticide Production', 'Chemical Synthesis'],
    image: IMG.chem_plant,             // industrial plant — xylene produced at refineries
  },
  {
    slug: 'hexane',
    name: 'Hexane',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '110-54-3',
    grade: 'Industrial / HPLC Grade',
    form: 'Clear Liquid',
    description:
      'High-purity hexane for edible oil extraction, HPLC mobile phase, and industrial solvent applications. Industrial and HPLC grade available.',
    applications: ['Edible Oil Extraction', 'HPLC Mobile Phase', 'Rubber Cement', 'Adhesives', 'Analytical Chemistry'],
    image: IMG.lab_vials,              // lab vials — hexane is analytical/HPLC grade
  },
  {
    slug: 'white-spirit',
    name: 'White Spirit (Mineral Spirits)',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '8052-41-3',
    grade: 'Industrial Grade',
    form: 'Clear to Pale Yellow Liquid',
    description:
      'Petroleum-derived solvent for paint thinning, metal degreasing, and general-purpose industrial cleaning.',
    applications: ['Paint Thinning', 'Dry Cleaning', 'Metal Degreasing', 'Printing Inks', 'Varnishes & Lacquers'],
    image: IMG.petroleum_pipes,        // petroleum/industrial — derived from crude oil
  },
  {
    slug: 'acetone',
    name: 'Acetone',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '67-64-1',
    grade: 'Industrial / AR Grade',
    form: 'Clear Volatile Liquid',
    description:
      'High-purity acetone as a universal solvent for industrial cleaning, coatings removal, laboratory use, and pharmaceutical manufacturing.',
    applications: ['Industrial Cleaning', 'Paint & Coating Removal', 'Pharmaceutical', 'Laboratory Solvent', 'Cosmetics'],
    image: IMG.lab_vials,              // clear glass vials — acetone is clear, lab/cosmetic use
  },
  {
    slug: 'isopropyl-alcohol',
    name: 'Isopropyl Alcohol (IPA)',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '67-63-0',
    grade: 'Industrial / Pharma Grade',
    form: 'Clear Liquid (70% / 99%)',
    description:
      'High-purity IPA for disinfection, electronics cleaning, cosmetics manufacturing, and general industrial solvent applications.',
    applications: ['Disinfectant & Antiseptic', 'Electronics Cleaning', 'Pharmaceutical Manufacturing', 'Cosmetics', 'Industrial Cleaning'],
    image: IMG.lab_scientist,          // lab researcher — IPA is central to lab/disinfection work
  },
  {
    slug: 'lubricant-additives',
    name: 'Lubricant Additives',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: 'Various',
    grade: 'Industrial Grade',
    form: 'Liquid / Paste',
    description:
      'Specialized lubricant additives including anti-wear agents, extreme pressure additives, corrosion inhibitors, and viscosity improvers for lubricant formulations.',
    applications: ['Engine Oil Formulation', 'Gear Oil', 'Hydraulic Fluids', 'Metalworking Fluids', 'Grease Manufacturing'],
    image: IMG.petroleum_pipes,        // industrial pipes/petroleum — lubricant/oil industry
  },
  {
    slug: 'solvent-naphtha',
    name: 'Solvent Naphtha',
    category: 'petroleum',
    categoryLabel: 'Petroleum & Solvents',
    cas: '8052-41-3',
    grade: 'Industrial Grade',
    form: 'Clear to Yellow Liquid',
    description:
      'Industrial solvent naphtha for paint manufacturing, rubber production, cleaning agents, and as a hydrocarbon diluent in chemical processes.',
    applications: ['Paint Manufacturing', 'Rubber Industry', 'Adhesives', 'Cleaning Agents', 'Printing Inks'],
    image: IMG.industrial_int,         // factory interior — naphtha used in manufacturing
  },

  // ── LABORATORY EQUIPMENT & ANALYTICAL REAGENTS ────────────────────────────
  {
    slug: 'spectrophotometer',
    name: 'UV-VIS Spectrophotometer',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Analytical Instrument',
    form: 'Benchtop Equipment',
    description:
      'Single and double-beam UV-VIS spectrophotometers for quantitative analysis in food, water quality, pharmaceutical QC, and environmental monitoring.',
    applications: ['Water Quality Analysis', 'Food Adulteration Testing', 'Pharmaceutical QC', 'Environmental Monitoring', 'Teaching Laboratories'],
    image: IMG.lab_instrument,         // lab technician at instrument — spectrophotometer use
    featured: true,
  },
  {
    slug: 'ph-conductivity-meter',
    name: 'pH / Conductivity Meter',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Laboratory Instrument',
    form: 'Benchtop / Portable',
    description:
      'Precision digital pH meters and conductivity meters for laboratory QC, field testing, water analysis, and industrial process monitoring.',
    applications: ['Water Quality Testing', 'Food & Beverage QC', 'Pharmaceutical Manufacturing', 'Environmental Testing', 'Industrial Process Control'],
    image: IMG.water_blue,             // clear water/testing — pH meters are used for water quality
  },
  {
    slug: 'water-testing-kits',
    name: 'Water Testing Kits (BOD / COD / Chlorine)',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Analytical',
    form: 'Kit / Reagent Set',
    description:
      'Comprehensive water testing kits for BOD, COD, chlorine, turbidity, and heavy metal analysis for water treatment plants and NEMA compliance.',
    applications: ['Municipal Water Testing', 'Industrial Effluent Testing', 'Swimming Pool Water', 'Borehole Analysis', 'NEMA Compliance'],
    image: IMG.water_blue,             // blue water — water testing kits
  },
  {
    slug: 'soil-testing-kits',
    name: 'Soil Testing Kits',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Field & Lab',
    form: 'Kit',
    description:
      'Portable and laboratory soil testing kits for pH, NPK, and micronutrient analysis to support agricultural productivity and fertilizer recommendations.',
    applications: ['Agricultural Extension Services', 'Research Institutions', 'Commercial Farming', 'Soil pH Monitoring', 'Fertilizer Recommendation'],
    image: IMG.soil_field,             // green farm field — soil testing is for agriculture
  },
  {
    slug: 'ar-grade-reagents',
    name: 'AR Grade Analytical Reagents',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'Various',
    grade: 'AR / GR Grade',
    form: 'Powder / Liquid',
    description:
      'Wide range of analytical reagent grade chemicals for volumetric analysis, gravimetric analysis, and standard solution preparation in research labs.',
    applications: ['Volumetric Analysis', 'Gravimetric Testing', 'Standard Solution Preparation', 'Research & Development', 'QC Laboratories'],
    image: IMG.lab_testing,            // coloured vials — AR reagents are colourful/varied chemicals
  },
  {
    slug: 'hplc-gc-systems',
    name: 'HPLC / GC Analytical Systems & Sensors',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Analytical Instrument',
    form: 'Modular System',
    description:
      'HPLC and GC systems for pharmaceutical analysis, environmental testing, food safety, and petrochemical research applications.',
    applications: ['Pharmaceutical QC & Potency', 'Environmental Analysis', 'Food Safety Testing', 'Pesticide Residue', 'Petrochemical Analysis'],
    image: IMG.lab_equipment,          // bench lab equipment with bottles — HPLC instrument
  },
  {
    slug: 'magnetic-stirrer',
    name: 'Magnetic Stirrers & Laboratory Ovens',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Lab Equipment',
    form: 'Benchtop Equipment',
    description:
      'Heavy-duty magnetic stirrers, combination stirrer-hot plates, and laboratory ovens for mixing, titrations, drying, and sample preparation.',
    applications: ['Laboratory Mixing', 'Titration Procedures', 'Chemical Dissolution', 'Sample Preparation', 'Microbiological Work'],
    image: IMG.lab_instrument,         // lab technician at bench — stirrer/oven operation
  },
  {
    slug: 'refractometer',
    name: 'Refractometers',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Analytical Instrument',
    form: 'Portable / Benchtop',
    description:
      'Optical and digital refractometers for measuring sugar concentration (Brix), refractive index, and specific gravity in food, beverage, and industrial applications.',
    applications: ['Fruit Juice Quality Control', 'Sugar Concentration (Brix)', 'Battery Acid Testing', 'Coolant Concentration', 'Dairy QC'],
    image: IMG.lab_testing,            // lab vials/testing — refractometer used on liquid samples
  },
  {
    slug: 'microbiology-consumables',
    name: 'Microbiology Media & Consumables',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'Various',
    grade: 'Microbiological Grade',
    form: 'Powder / Prepared Media',
    description:
      'Ready-to-use and dehydrated microbiological culture media, staining reagents, and consumables for food safety, pharmaceutical, and clinical microbiology.',
    applications: ['Food Safety Microbiology', 'Water Microbiology', 'Clinical Bacteriology', 'Pharmaceutical Sterility Testing', 'Environmental Monitoring'],
    image: IMG.lab_scientist,          // researcher with samples — microbiology lab work
  },
  {
    slug: 'incubator',
    name: 'Laboratory Incubators',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Lab Equipment',
    form: 'Benchtop / Floor-standing',
    description:
      'Precision temperature-controlled incubators for microbiological culture, BOD testing, cell culture, and stability studies in research and QC labs.',
    applications: ['Microbiology Culture', 'BOD Testing', 'Stability Studies', 'Fermentation Research', 'Cell & Tissue Culture'],
    image: IMG.lab_equipment,          // lab equipment bench — incubator in lab setting
  },
  {
    slug: 'titration-kits',
    name: 'Titration Kits & All Analytical Kits',
    category: 'laboratory',
    categoryLabel: 'Laboratory Equipment',
    cas: 'N/A',
    grade: 'Analytical',
    form: 'Kit / Equipment',
    description:
      'Complete range of titrimetric analysis kits, burettes, and automated titrators for acid-base, redox, complexometric, and precipitation titrations.',
    applications: ['Acid-Base Titration', 'Redox Analysis', 'Complexometric (EDTA)', 'Water Hardness', 'QC Laboratories'],
    image: IMG.lab_testing,            // test tubes with coloured liquids — titration uses coloured indicators
  },

  // ── FOOD & BEVERAGE PRODUCTION INPUTS ─────────────────────────────────────
  {
    slug: 'flavor-enhancers',
    name: 'Flavor Enhancers (MSG / IMP / GMP)',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: '142-47-2',
    grade: 'Food Grade',
    form: 'Powder / Granules',
    description:
      'Monosodium glutamate (MSG), inosine monophosphate (IMP), and guanosine monophosphate (GMP) as umami flavor enhancers for soups, snacks, sauces, and processed foods.',
    applications: ['Soups & Instant Noodles', 'Snack Seasoning', 'Sauces & Condiments', 'Processed Meats', 'Savory Flavors'],
    image: IMG.seasonings_spoon,       // spices on wooden spoons — flavour enhancers/seasonings
  },
  {
    slug: 'fortification-blends',
    name: 'Fortification Blends (Iron / Zinc / Vitamins)',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: 'Various',
    grade: 'Food Grade',
    form: 'Powder Premix',
    description:
      'Customized mineral and vitamin premixes for flour, oil, and salt fortification programs. Fully compliant with KEBS fortification standards for Kenya and East Africa.',
    applications: ['Flour Fortification', 'Edible Oil Fortification', 'Salt Iodization', 'Beverage Fortification', 'Infant Formula'],
    image: IMG.food_spices,            // colourful ingredient bowls — vitamin/mineral blends are powder mixes
    featured: true,
  },
  {
    slug: 'food-enzymes',
    name: 'Food Enzymes (Amylase / Protease / Lipase)',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: 'Various',
    grade: 'Food Grade',
    form: 'Powder / Liquid',
    description:
      'Carbohydrase, protease, and lipase enzyme preparations for baking, brewing, dairy, and meat processing. Improves texture, shelf life, and product quality.',
    applications: ['Baking (Bread Softening)', 'Brewing & Fermentation', 'Cheese Manufacturing', 'Meat Tenderization', 'Juice Clarification'],
    image: IMG.food_factory,           // food production line — enzymes used in industrial food processing
  },
  {
    slug: 'food-emulsifiers',
    name: 'Emulsifiers (Lecithin / GMS / PGPR)',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: 'Various',
    grade: 'Food Grade',
    form: 'Powder / Liquid / Granules',
    description:
      'Soy lecithin, glycerol monostearate (GMS), and PGPR for chocolate, margarine, bakery, and dairy emulsification applications.',
    applications: ['Chocolate & Confectionery', 'Margarine & Spreads', 'Bakery (Shelf Life)', 'Ice Cream', 'Beverages'],
    image: IMG.bakery_flour,           // baking ingredients — emulsifiers are key in baking
  },
  {
    slug: 'anti-caking-agents',
    name: 'Anti-Caking Agents (Silicon Dioxide / STPP)',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: 'Various',
    grade: 'Food Grade',
    form: 'Fine Powder',
    description:
      'Silicon dioxide, sodium aluminosilicate, and STPP to prevent clumping and maintain flow in powdered food products, salt, and seasonings.',
    applications: ['Table Salt Anti-Caking', 'Powdered Spices', 'Dry Mixes', 'Milk Powder', 'Baking Powder'],
    image: IMG.food_spices,            // colourful powdered ingredients — anti-caking agents for powders
  },
  {
    slug: 'dairy-beverage-chemicals',
    name: 'Dairy & Beverage Processing Chemicals',
    category: 'food-inputs',
    categoryLabel: 'Food & Beverage Inputs',
    cas: 'Various',
    grade: 'Food Grade',
    form: 'Powder / Liquid',
    description:
      'Specialty chemicals for CIP (clean-in-place) dairy sanitation, beverage processing line maintenance, and food-grade equipment cleaning and sanitization.',
    applications: ['Dairy CIP Cleaning', 'Beverage Line Sanitization', 'Brewing Equipment', 'UHT Processing', 'Cold Storage Sanitation'],
    image: IMG.dairy_milk,             // dairy/milk — dairy processing chemicals
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
