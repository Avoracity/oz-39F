var ozArray = [
    {"question": " What is the name of the broker residing in Magatia? " , "answer": " Han the Broker " },
    {"question": " What is the name of the buddy list admin in Lith Harbor? " , "answer": " Mr. Goldstein " },
    {"question": " What is the name of the buddy list admin in Ludibrium? " , "answer": " Robert Holly " },
    {"question": " What is the name of the dog sitting next to the Dimensional Mirror in Orbis? " , "answer": " Moppie " },
    {"question": " What is the name of the current council president in Edelstein? " , "answer": " Anthony " },
    {"question": " What is the name of the former council president in Edelstein? " , "answer": " Albert " },
    {"question": " What is the name of the grandma guarding the Great Temple in Pantheon? " , "answer": " Selene " },
    {"question": " What is the name of the helmsman of Riena Strait Glacial Observatory? " , "answer": " Helmsman Tanya " },{"question": " What is the name of the Humanoid residing in Magatia? " , "answer": " Humanoid A " },
    {"question": " What is the name of the kid monk in front of the Golden Temple entrance? " , "answer": " Noi " },
    {"question": " What is the name of the merchant on the Nautilus? " , "answer": " Gali " },
    {"question": " What is the name of the pet master in Ellinia? " , "answer": " Mar the Fairy " },
    {"question": " What is the name of the plastic surgeon in Ariant? " , "answer": " Aldin " },
    {"question": " What is the name of the skin care expert in Ariant? " , "answer": " Lila " },
    {"question": " What is the name of the storage keeper in Ludibrium? " , "answer": " Seppy " },
    {"question": " What is the name of the storage keeper in Rien? " , "answer": " Pusla " },
    {"question": " What is the name of the storage keeper on the Nautilus? " , "answer": " Dondlass " },
    {"question": " What is the name of the street sweeper in Edelstein? " , "answer": " Brighton " },
    {"question": " What is the name of the town mascot of Edelstein? " , "answer": " Checky " },
    {"question": " What is the name of the upcoming merchant in Pantheon? " , "answer": " Karin " },
    {"question": " What is the name of the warp helper in Herb Town? " , "answer": " Crane " },
    {"question": " What is the name of the weapon merchant in Ariant? " , "answer": " Zaid " },
    {"question": " What is the name of the weapon seller on the Nautilus? " , "answer": " Morgan " },
    {"question": " Who in Kerning City can repair items? " , "answer": " JM From tha Streetz " },
    {"question": " Who is the item creator in front of the Sleepywood Hotel? " , "answer": " Chrishrama " },
    {"question": " Who is the merchant in the Golden Temple? " , "answer": " Ms. Tang " },
    {"question": " Who is the merchant in Gold Beach Resort? " , "answer": " Mason " },
    {"question": " Who is the warrior job instructor in the Warriors' Sanctuary? " , "answer": " Dances with Balrog " },
    {"question": " Who is the weapon seller in Perion? " , "answer": " River " },
    {"question": " Who is the subway worker next to the Ticket Gate in Kerning City? " , "answer": " Jake " },
    {"question": " Are you asking me if I can see in front of me? Of course I can! " , "answer": " Puno " },
    {"question": " Do you want to learn how to achieve spiritual enlightenment? " , "answer": " No Gong " },
    {"question": " Grendel the Really Old is not a bad person, but his students... " , "answer": " Arwen the Fairy " },
    {"question": " If you have the Scroll of Secrets, give it to me! " , "answer": " Geanie " },
    {"question": " I can only do this by myself for so long... " , "answer": " Anne " },
    {"question": " I can't wait for these kits to grow up! " , "answer": " Patience " },
    {"question": " I found him, so I'll take care of him! " , "answer": " Moonbeam " },
    {"question": " I gotta say, I look pretty good in an apron. " , "answer": " Elex " },
    {"question": " I need more firewood for the furnace. " , "answer": " Timber " },
    {"question": " I need to send these herbs to Tae Sang fast... " , "answer": " Mr. Ku " },
    {"question": " I serve the ancient Nova deities. " , "answer": " Fenelle " },
    {"question": " I will never let go of thieves who try to steal from me. " , "answer": " Harry " },
    {"question": " I'm worried that monsters these days are much more ferocious... " , "answer": " Lisa " },   
    {"question": " Just look at me! So strong. Don't be jealous. " , "answer": " Olaf " },
    {"question": " Life is transitory. As time passes, the world will change. " , "answer": " Do Gong " },     
    {"question": " My friend Arwen is still pretty uncomfortable around humans. " , "answer": " Rowen the Fairy " },
    {"question": " My hands aren't what they used to be. I really need to get me an apprentice... " , "answer": " Potter " },
    {"question": " Nice weather, isn't it? It's a greay day to enjoy a walk with my pet, Muffins. " , "answer": " Bastille " },
    {"question": " Nothing like a good set of Pirate digs, mates! " , "answer": " Rodos " },
    {"question": " Outsiders can never be trusted. " , "answer": " Faculty Head Kalayan " },
    {"question": " Pirates are the best! You want a piece of me? " , "answer": " Valerie " },
    {"question": " So much homework... And so much studying to do... Man, I'm swamped. " , "answer": " Wing the Fairy " },
    {"question": " That smell in the air sure does make the fur stand up, don't it? " , "answer": " Alviola " },
    {"question": " The seas have grown fat as an orca, eh? " , "answer": " Putan " },
    {"question": " This room is not open to the public. " , "answer": " Olson " },
    {"question": " We must work together. " , "answer": " Lakelis " },
    {"question": " Where are all my research notes? And my fairy comics? " , "answer": " Cootie the Really Small " },
    {"question": " Won't somebody bring me some food? I'm starving? " , "answer": " Lumps " },
    {"question": " Work is important, but eating is crucial! " , "answer": " Bavan " },
    {"question": " I'm collecting herbs... " , "answer": " Sabitrama " },
    {"question": " Which of these bosses has NEVER appeared in MapleStory? " , "answer": "Bear Grills ,Beelzebub ,Big Brother  ,Big Carl  ,Botichelli  ,Cocatris  ,Diablow  ,Emuloch  ,Navy Captain  ,Von Venom " },
    {"question": " Which of these chairs does NOT exist in MapleStory? " , "answer": " Come Back Chair  ,Diamond Bath  ,First Love Chair  ,Last Year Sergeant Chair  ,March Bunny Chair  ,Mammoth Chair  ,Money Cushion  ,Rappy's Persimmon Chair  ,Valentine's Cursed Chair  ,Wheelchair " },
    {"question": " Which of these cities does NOT exist in MapleStory? " , "answer": " Aqua Aqua    ,Cunning City    ,Edinburgh    ,El Segundo    ,Fenesys  ,Frankenstein ,Margaret,    ,Sacramento   ,Sleeping Forest    ,Swan Town " },
    {"question": " Which of these is NOT a crafting item in MapleStory? " , "answer": " Loving Chocolate  ,Fairy Sand  ,Hyacinth Juice  ,Kryptonite Ore  ,Magnus Sweat,  Nickel  ,Penicillin  ,Pulsatilla Seed  ,Used Fabric  ,Zakum Phlegm " },
    {"question": " Which of these is NOT a one-handed weapon? " , "answer": " Beatstick  ,Doombringer  ,Facebuster  ,Forked Spear  ,Gallant Wings  ,Lion's Fang  Lunar Glory  ,Pioneer's Dual Wings  ,Twin Zephyrs  ,Wooden Mallet " },
    {"question": " Which of these is NOT a Paladin skill? " , "answer": " Blaze Defense  ,Blessing  ,Chase  ,Divine Sword  ,Faint Prayer  ,Haste  ,Lightning Action  Mendable Claw  ,Ordinance  ,Regal Stretch " },
    {"question": " Which of these is NOT a Shade skill? " , "answer": " Chase Cut   ,Dead Or Alive  ,Heavy Hammer  ,Hyper Buting  ,Pink Punch Really Angry Fist, Scuffle,  Sleeper Hold,  Stumping A Mudhole,  Super Mega Awesome Punch " },
    {"question": " Which of these is NOT a skill of a Battle Mage? " , "answer": " Draw Mana " },
    {"question": " Which of these is NOT a skill of a Cannoneer? " , "answer": " Fast Reload " },
    {"question": " Which of these is NOT a skill of a Marksman? " , "answer": " Exploding Arrows " },
    {"question": " Which of these is NOT a skill of a Mechanic? " , "answer": " Claymore " },
    {"question": " Which of these is NOT a skill of a Wind Archer? " , "answer": " Double Shot Witcher " },
    {"question": " Which of these is NOT a skill of Mihile? " , "answer": " Soul Plunger " },
    {"question": " Which of these is NOT a skill of Phantom? " , "answer": " Perfect Sense " },
    {"question": " Which of these is NOT a skill of the Demon Slayer? " , "answer": " Mind Flayer " },
    {"question": " Which of these is NOT a skill of the Night Walker? " , "answer": " Collateral Flash " },    
    {"question": " Which of these is NOT a skill of the Swordsman? " , "answer": " Imagination Boost " },      
    {"question": " Which of these is NOT a Zero skill? " , "answer": " Crimson Cutter  ,Cross Line  ,Deadly Action  ,Double Stretch  ,Fighting Stumble,  File Driver  ,Low Blow ,Mega Power Bomb  ,Moon Assault  ,Psychic Tracer " },
    {"question": " Which of these is NOT in Monster Life? " , "answer": " Aqua Aquarium  ,Basement Training Ground  ,BigWigs  ,Black Bunny Farm  ,Black House  ,Cave House  ,Empress Prayer House  ,Fish Farm ,Fruit Farm  ,Heaven's Hammer  ,Hideout  ,Maple Aquatic House  ,Maple Water Park  ,Mushroomy Mine  ,Organic Mud House  ,Pantheon Temple  ,Psychic Audition Hall  ,Puriel House  ,Shammos' Storage Room  ,Sushi House " },
    {"question": " Which of these items does NOT exist in MapleStory? " , "answer": " Alchemist's Handmade Gloves  ,Blessed Sunglasses  ,Donkey's Chef Hat  ,Frantic Hair Pin  ,Minotaurus Nose Ring  ,Phoenix Dandruff  ,Single's Curse Promise Ring  ,Sugar's Tiny Cane  ,Ultimate Harp Helm  Venom Buccaneer " },
    {"question": " Which of these items is NOT a consumable item? " , "answer": " Crimson Bull  ,Fairy Dew  ,Fancy Cheese  ,Lukewarm Juice  ,Purple Potion  ,Smoked Salmon  ,Wizard's Toenail  ,Year of Horse Cleansing Potion, Year of Horse Resistance Potion  ,Zakum's Breath " },
    {"question": " Which of these items is NOT a hand cannon? " , "answer": " Art Lulu ,Bling Bling Iron Cannon ,Blurry Cannon  ,Click Click Boom  ,Crimson Bull  ,Cursed Black Cannon  ,Dragonic Deck Sweeper  ,Handcrafted Ignite Crash  ,Necro Beryl Cannon  ,Used Toy Cannon " },
    {"question": " Which of these jobs does NOT exist in MapleStory? " , "answer": " Art Designer  ,Bard  ,Beast Lord  ,Blue Mage  ,Cannon Puncher  ,Demon Hunter  ,Eric  ,Necromancer  ,Water Dancer  ,Wind Runner " },
    {"question": " Which of these jobs is a part of the Cygnus Knights? " , "answer": " Blaze Wizard  ,Night Walker " },
    {"question": " Which of these jobs is a part of the Explorers? " , "answer": " Bishop  ,Dual Blade " },     
    {"question": " Which of these jobs is a part of the Legendary Heroes? " , "answer": " Luminous  ,Mercedes " },
    {"question": " Which of these jobs is a part of the Nova race? " , "answer": " Angelic Buster ,Kaiser " },  
    {"question": " Which of these jobs is a part of the Resistance? " , "answer": " Demon Avenger  ,Xenon " },  
    {"question": " Which of these monsters does NOT exist in MapleStory? " , "answer": " Bertus  ,Corbie  ,Dark Cactus  ,Downey  ,Fenelle  ,Mountable Golem  ,Red Peppers  ,Sledge Hammer  ,Sharplan  ,Solarion " },
    {"question": " Which of these monsters is NOT a canine? " , "answer": " Birk " },
    {"question": " Which of these monsters is NOT a Mammal? " , "answer": " Spore " },
    {"question": " Which of these monsters is NOT a plant? " , "answer": " OctoPirate " },
    {"question": " Which of these monsters is NOT a reptile? " , "answer": " Jr. Wraith " },
    {"question": " Which of these monsters is NOT enchanted? " , "answer": " Antoinette  ,Goby " },
    {"question": " Which of these monsters is NOT from the Nihal Desert? " , "answer": " Water Thief Monster " },
    {"question": " Which of these monsters is NOT in the Tower of Oz? " , "answer": " Ancient Insectivore Slimes  ,Ancient Mushroom Bat  ,Ancient Red Turtle  ,Black Thorny Bear  ,Blue Ancient Beetle  ,Blue Mushroom Bat  ,Crocodile  ,Murupa  ,Roolang  ,Yellow Flower Cow " },
    {"question": " Which of these monsters is NOT live in the sea? " , "answer": " Captain Latencia " },       
    {"question": " Which of these monsters is NOT undead? " , "answer": " Pink Bean  ,Snipe of Competence " },  
    {"question": " Which of these people is NOT a resident in MapleStory? " , "answer": " Agamemnon  ,Carno  ,DJ Koo  ,Giant Joe  ,Harcourt  ,Jacklyn  ,Joe Bob  ,Kaiso  ,Stitch  ,Sybil " },

]