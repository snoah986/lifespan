'const WorldEvents = [
  {
    id: 'moon_landing_1969', year: 1969, countries: ['all'], title: 'Moon Landing', description: 'You watch Neil Armstrong walk on the moon on a flickering television screen. The whole street seems to stop breathing at once.', statEffects: { happiness: 8, stress: -3 }, ageRange: { min: 3, max: 99 },
  },
  {
    id: 'jfk_1963', year: 1963, countries: ['United States'], title: 'JFK Assassinated', description: 'The news cuts in and the room goes cold. President Kennedy has been shot in Dallas. Nothing feels certain anymore.', statEffects: { happiness: -10, stress: 8 }, ageRange: { min: 5, max: 99 },
  },
  {
    id: 'england_worldcup_1966', year: 1966, countries: ['United Kingdom'], title: 'England Win the World Cup', description: 'The whole country erupts. You have never seen adults cry with joy before today. It feels like anything is possible.', statEffects: { happiness: 12, stress: -5 }, ageRange: { min: 3, max: 99 },
  },
  {
    id: 'oil_crisis_1973', year: 1973, countries: ['United Kingdom','United States','Germany','France','Australia'], title: 'Oil Crisis Hits', description: 'Petrol queues stretch around the block and heating bills are through the roof. Your family sits in coats indoors to save money.', statEffects: { wealth: -8, stress: 10, happiness: -6 }, ageRange: { min: 10, max: 99 },
  },
  {
    id: 'winter_discontent_1979', year: 1979, countries: ['United Kingdom'], title: 'Winter of Discontent', description: 'Rubbish piles up in the streets and nothing seems to work. The unions are striking and the country feels like it is falling apart.', statEffects: { happiness: -8, stress: 12, wealth: -5 }, ageRange: { min: 16, max: 99 },
  },
  {
    id: 'brixton_riots_1981', year: 1981, countries: ['United Kingdom'], title: 'Brixton Riots', description: 'Smoke rises over South London and the news is full of burning cars. Tensions that have been building for years have finally broken.', statEffects: { stress: 8, happiness: -5 }, ageRange: { min: 10, max: 99 },
  },
  {
    id: 'miners_strike_1984', year: 1984, countries: ['United Kingdom'], title: 'Miners Strike', description: "Communities across the coalfields are holding firm but the strain is visible everywhere. Families are being torn apart by which side they are on.", statEffects: { happiness: -7, stress: 10, wealth: -4 }, ageRange: { min: 16, max: 99 },
  },
  {
    id: 'chernobyl_1986', year: 1986, countries: ['Soviet Union'], title: 'Chernobyl Disaster', description: 'The authorities say there is nothing to worry about but everyone can feel something is wrong. The news from Pripyat is terrifying.', statEffects: { health: -5, stress: 15, happiness: -8 }, ageRange: { min: 1, max: 99 },
  },
  {
    id: 'black_monday_1987', year: 1987, countries: ['all'], title: 'Black Monday — Stock Market Crash', description: 'Markets around the world collapse in a single day. The financial news is apocalyptic and nobody seems to know how bad it will get.', statEffects: { wealth: -15, stress: 12 }, ageRange: { min: 18, max: 99 },
  },
  {
    id: 'berlin_wall_1989', year: 1989, countries: ['all'], title: 'Berlin Wall Falls', description: 'People are dancing on top of the wall with hammers and the images are unlike anything you have ever seen. History is happening in real time.', statEffects: { happiness: 10, stress: -5 }, ageRange: { min: 5, max: 99 },
  },
  {
    id: 'german_reunification_1990', year: 1990, countries: ['Germany'], title: 'Germany Reunified', description: 'East and West are one country again after forty years apart. For some it is jubilation. For others the uncertainty is overwhelming.', statEffects: { happiness: 8, stress: 6 }, ageRange: { min: 5, max: 99 },
  },
  {
    id: 'soviet_collapse_1991', year: 1991, countries: ['Soviet Union'], title: 'Soviet Union Collapses', description: 'Everything... Exported!.'