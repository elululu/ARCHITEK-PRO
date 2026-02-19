/* ========================================
   ARCHITEK PRO — Data
   Base de connaissances encyclopédique
   Architecture d'Intérieur
   ======================================== */

const APP_DATA = {
  domains: [
    // ====================================
    // 1. STYLES & COURANTS
    // ====================================
    {
      id: 'styles',
      name: 'Styles & Courants',
      icon: '◐',
      color: '#B8956A',
      description: 'Les grands mouvements architecturaux, du classicisme au contemporain. Culture, influences et codes esthétiques.',
      fiches: [
        {
          id: 'art-deco',
          title: 'Art Déco',
          subtitle: '1920–1940',
          summary: 'Mouvement né dans les années 1920 à Paris, l\'Art Déco célèbre le luxe, la géométrie et l\'artisanat d\'excellence. Il fusionne modernité industrielle et raffinement décoratif.',
          sections: [
            {
              title: 'Origines & contexte',
              content: 'L\'Art Déco naît officiellement lors de l\'Exposition internationale des Arts décoratifs de Paris en 1925. Il succède à l\'Art Nouveau et reflète l\'optimisme de l\'entre-deux-guerres. Il s\'inspire des avant-gardes (Cubisme, Futurisme), de l\'art égyptien et des cultures « exotiques ».'
            },
            {
              title: 'Caractéristiques en intérieur',
              content: 'Formes géométriques marquées (zigzags, chevrons, éventails), symétrie rigoureuse, utilisation de matériaux nobles (laque, ébène de Macassar, ivoire, chrome, verre). Palette riche : noir, or, émeraude, bordeaux. Mobilier sculptural aux lignes épurées mais opulentes.'
            },
            {
              title: 'Figures clés',
              content: 'Jacques-Émile Ruhlmann (ébéniste d\'exception), Eileen Gray (mobilier laqué), René Lalique (verrerie), Jean Dunand (laque et dinanderie). En architecture : William Van Alen (Chrysler Building), Robert Mallet-Stevens.'
            },
            {
              title: 'Application contemporaine',
              content: 'L\'Art Déco revient régulièrement dans l\'hôtellerie de luxe et les espaces premium. On l\'intègre via des motifs géométriques dans le carrelage, des luminaires en laiton, du velours émeraude, des miroirs fumés et des détails dorés. L\'astuce : le doser pour éviter le pastiche.'
            }
          ],
          keyPoints: [
            'Géométrie + matériaux nobles = ADN de l\'Art Déco',
            'Toujours symétrique et ordonné',
            'Le doré et le noir sont les couleurs signature',
            'Fonctionne remarquablement dans les halls, bars et salles de bain',
            'En 2026, on le mélange souvent avec du minimalisme pour un rendu moderne'
          ],
          tips: [
            'Un miroir Art Déco en forme d\'éventail peut transformer un mur entier',
            'Utiliser du laiton brossé plutôt que du doré brillant pour un rendu actuel',
            'Le terrazzo avec motifs géométriques est un excellent choix de sol Art Déco contemporain'
          ],
          tags: ['luxe', 'géométrie', 'années 20', 'or', 'marbre', 'hôtellerie']
        },
        {
          id: 'bauhaus',
          title: 'Bauhaus',
          subtitle: '1919–1933',
          summary: 'École fondatrice du design moderne. Le Bauhaus prône l\'union de l\'art et de l\'industrie, la fonctionnalité absolue et l\'absence d\'ornement superflu.',
          sections: [
            {
              title: 'Origines & philosophie',
              content: 'Fondé par Walter Gropius à Weimar en 1919, le Bauhaus (« maison de la construction ») réunit architectes, artistes et artisans. Sa devise : « La forme suit la fonction ». L\'école déménage à Dessau (1925) puis Berlin (1932), avant d\'être fermée par les nazis en 1933.'
            },
            {
              title: 'Principes en design d\'intérieur',
              content: 'Lignes droites et angles nets, absence de décoration superflue, couleurs primaires (rouge, bleu, jaune) sur fond neutre (blanc, noir, gris). Matériaux industriels : acier tubulaire, contreplaqué, verre, béton. Chaque objet doit être fonctionnel, reproductible et accessible.'
            },
            {
              title: 'Mobilier iconique',
              content: 'Chaise Wassily de Marcel Breuer (1925) — premier meuble en tube d\'acier. Chaise Barcelona de Mies van der Rohe (1929). Bureau et lampe de Wilhelm Wagenfeld. Ces pièces sont encore produites aujourd\'hui et restent des références absolues.'
            },
            {
              title: 'Héritage contemporain',
              content: 'Le Bauhaus est l\'ancêtre direct du minimalisme actuel. Ses principes se retrouvent dans l\'architecture IKEA, le design Apple, et la majorité de l\'ameublement contemporain. En intérieur, l\'esprit Bauhaus s\'exprime par des espaces ouverts, un mobilier fonctionnel et une palette retenue.'
            }
          ],
          keyPoints: [
            '« La forme suit la fonction » — principe fondateur',
            'Union de l\'art, de l\'artisanat et de l\'industrie',
            'Couleurs primaires + noir/blanc/gris',
            'Matériaux industriels assumés',
            'Influence majeure sur tout le design du XXe et XXIe siècle'
          ],
          tips: [
            'Une seule pièce de mobilier Bauhaus (Wassily, Barcelona) peut ancrer tout un intérieur',
            'Associer un mur blanc pur avec un meuble en acier et cuir = esprit Bauhaus immédiat',
            'Les lampes Bauhaus sont parfaites pour un bureau ou un coin lecture contemporain'
          ],
          tags: ['modernisme', 'fonctionnalisme', 'acier', 'minimalisme', 'design industriel']
        },
        {
          id: 'minimalisme-japonais',
          title: 'Minimalisme Japonais',
          subtitle: 'Wabi-Sabi & Ma',
          summary: 'L\'art de l\'espace vide et de la beauté imparfaite. Le minimalisme japonais va au-delà de l\'esthétique — c\'est une philosophie de vie appliquée à l\'habitat.',
          sections: [
            {
              title: 'Concepts fondamentaux',
              content: 'Wabi-Sabi : beauté de l\'imperfection, de l\'éphémère et de l\'incomplet. Ma (間) : notion d\'intervalle, de vide porteur de sens. Kanso : simplicité élégante. Fukinsei : asymétrie naturelle. Ces concepts, issus du bouddhisme zen, guident chaque choix de design.'
            },
            {
              title: 'Traduction en intérieur',
              content: 'Espaces épurés avec peu de meubles, chacun essentiel. Matériaux naturels bruts : bois (hinoki, cèdre), papier washi, pierre, bambou. Palette neutre : blancs cassés, beiges, gris doux, noirs profonds. Lumière naturelle filtrée par des panneaux shoji. Rangements intégrés et dissimulés.'
            },
            {
              title: 'Éléments clés',
              content: 'Engawa (véranda de transition intérieur/extérieur), tokonoma (alcôve décorative), tatami (sol en paille de riz), fusuma (cloisons coulissantes). L\'entrée (genkan) avec son dénivelé ritualise le passage entre extérieur et intérieur.'
            },
            {
              title: 'Intégration dans un projet occidental',
              content: 'Pas besoin de tout japoniser. L\'esprit s\'intègre par : un choix de matériaux naturels et bruts, la réduction du mobilier au nécessaire, des rangements fermés, une attention à la lumière naturelle, des plantes vertes minimalistes (un bonsaï, une branche d\'ikebana), et surtout : du vide assumé.'
            }
          ],
          keyPoints: [
            'Le vide est aussi important que le plein',
            'Wabi-Sabi = beauté de l\'imperfection (une céramique artisanale > une pièce industrielle parfaite)',
            'Matériaux naturels non traités de préférence',
            'La lumière est un matériau de construction',
            'Chaque objet doit mériter sa place'
          ],
          tips: [
            'Un seul objet artisanal imparfait sur une étagère vide crée plus d\'impact qu\'une étagère remplie',
            'Remplacer les rideaux lourds par des panneaux en lin léger change immédiatement l\'atmosphère',
            'Le bois brut non verni (chêne, frêne) est le meilleur allié du wabi-sabi occidental'
          ],
          tags: ['zen', 'wabi-sabi', 'bois', 'épuré', 'lumière naturelle', 'philosophie']
        },
        {
          id: 'mid-century-modern',
          title: 'Mid-Century Modern',
          subtitle: '1945–1970',
          summary: 'L\'âge d\'or du design américain et scandinave. Formes organiques, couleurs vives et un optimisme contagieux qui définit encore notre vision du « bon design ».',
          sections: [
            {
              title: 'Contexte historique',
              content: 'Né de l\'après-guerre et du baby-boom, le Mid-Century Modern exprime l\'optimisme américain et la démocratisation du design. Les nouvelles techniques (moulage du contreplaqué, plastique, fibre de verre) permettent des formes inédites à prix accessible.'
            },
            {
              title: 'Caractéristiques',
              content: 'Lignes organiques et fluides, pieds fuselés (compas), formes en coquille. Mélange de matériaux naturels et synthétiques. Grandes baies vitrées, plans ouverts, connexion intérieur-extérieur. Couleurs : moutarde, orange brûlé, vert olive, teal, sur fond neutre.'
            },
            {
              title: 'Designers majeurs',
              content: 'Charles & Ray Eames (chaise Eames, Lounge Chair), Arne Jacobsen (chaise Egg, Swan), Eero Saarinen (table Tulip), George Nelson (Marshmallow Sofa, Ball Clock), Hans Wegner (chaise Wishbone), Isamu Noguchi (table basse Noguchi).'
            },
            {
              title: 'Utilisation actuelle',
              content: 'Le MCM est l\'un des styles les plus réédités et copiés. Il se mixe facilement avec du contemporain. Un Lounge Chair Eames dans un salon minimaliste, une table Tulip dans une cuisine moderne, des pieds compas sur un meuble TV — autant de touches MCM universelles.'
            }
          ],
          keyPoints: [
            'Formes organiques + pieds fuselés = signature MCM',
            'Mélange bois chaud (noyer, teck) + couleurs vives',
            'Les icônes MCM sont des investissements durables',
            'S\'adapte à presque tous les intérieurs contemporains',
            'La connexion intérieur-extérieur est un principe fondamental'
          ],
          tips: [
            'Un seul fauteuil MCM authentique (ou bonne réédition) suffit à donner le ton d\'une pièce',
            'Les couleurs MCM (moutarde, teal) fonctionnent parfaitement en coussins ou en accent wall',
            'Le noyer américain est LE bois du Mid-Century — à privilégier pour le mobilier'
          ],
          tags: ['design', 'organique', 'noyer', 'Eames', 'vintage', 'couleurs vives']
        },
        {
          id: 'brutalisme',
          title: 'Brutalisme',
          subtitle: '1950–1975 & revival 2020s',
          summary: 'L\'honnêteté brute des matériaux. Le Brutalisme, longtemps décrié, connaît un revival puissant en design d\'intérieur avec ses textures béton et sa force sculpturale.',
          sections: [
            {
              title: 'Origines',
              content: 'Le terme vient du français « béton brut » (Le Corbusier). Le Brutalisme architectural s\'impose dans les années 1950-70 comme une expression honnête de la structure. Figures majeures : Le Corbusier (Unité d\'habitation), Tadao Ando, Paulo Mendes da Rocha.'
            },
            {
              title: 'Principes en intérieur',
              content: 'Matériaux laissés bruts et visibles : béton ciré ou banchée, acier oxydé, bois massif non traité, pierre brute. Volumes généreux, proportions monumentales. Pas de fioritures — la beauté naît de la masse, de la texture et de la lumière sur les surfaces.'
            },
            {
              title: 'Le néo-brutalisme (2020s)',
              content: 'Le revival brutaliste en design d\'intérieur adoucit la rudesse originelle. On associe le béton à du bois chaud, des textiles doux et des plantes. Le mobilier brutaliste (tables en béton fibré, étagères en acier brut) devient pièce de collection. L\'éclairage est sculpté, souvent indirect.'
            },
            {
              title: 'Application pratique',
              content: 'Un mur en béton ciré (ou enduit effet béton) transforme un espace. Associer à du laiton vieilli, du cuir naturel et du lin brut. Le brutalisme fonctionne particulièrement bien dans les lofts, espaces de travail et salles de bain.'
            }
          ],
          keyPoints: [
            'L\'honnêteté des matériaux est le principe central',
            'Le béton ciré est le matériau signature',
            'Le néo-brutalisme tempère avec du bois et du textile',
            'L\'éclairage indirect magnifie les textures',
            'Idéal pour les grandes surfaces et les hauts plafonds'
          ],
          tips: [
            'Un enduit effet béton coûte 3x moins qu\'un vrai béton ciré et peut être très convaincant',
            'Toujours équilibrer une surface béton avec des matières chaudes (bois, tissu, cuir)',
            'Les vasques en béton fibré sont devenues un standard du design haut de gamme'
          ],
          tags: ['béton', 'brut', 'texture', 'monumental', 'loft', 'industriel']
        },
        {
          id: 'style-scandinave',
          title: 'Style Scandinave',
          subtitle: 'Hygge & fonctionnalité',
          summary: 'La chaleur nordique incarnée en design. Le style scandinave allie fonctionnalité, matériaux naturels et atmosphère « hygge » — confortable et accueillante.',
          sections: [
            {
              title: 'Philosophie',
              content: 'Le design scandinave naît de la nécessité de créer des intérieurs chaleureux face au climat rude du Nord. Il intègre le concept danois de « hygge » (bien-être douillet), le « lagom » suédois (juste ce qu\'il faut) et le fonctionnalisme finlandais d\'Alvar Aalto.'
            },
            {
              title: 'Codes visuels',
              content: 'Blanc dominant, relevé de bois clair (bouleau, pin, hêtre). Palette douce : gris perle, bleu glacier, rose poudré. Mobilier aux lignes simples et fonctionnelles. Textiles omniprésents : plaids en laine, coussins en lin, tapis berbère. Beaucoup de bougies et de lumière douce.'
            },
            {
              title: 'Designers emblématiques',
              content: 'Alvar Aalto (tabouret 60, vase Savoy), Arne Jacobsen (chaise Series 7), Hans Wegner (Wishbone Chair), Verner Panton (Panton Chair), Marimekko (textile finlandais), HAY et Muuto (design danois contemporain).'
            },
            {
              title: 'Clés de réussite',
              content: 'Luminosité maximale (rideaux légers, murs clairs). Rangements fermés pour garder l\'espace épuré. Mix de textures (bois + laine + céramique + lin). Plantes vertes comme éléments vivants. Mobilier vintage chiné mêlé à du neuf. La clé : que chaque objet soit beau ET utile.'
            }
          ],
          keyPoints: [
            'Blanc + bois clair = base scandinave',
            'Hygge = lumière douce + textiles + bougies',
            'Chaque objet doit être fonctionnel ET beau',
            'Rangements fermés pour maintenir l\'ordre visuel',
            'La lumière naturelle est sacrée'
          ],
          tips: [
            'Investir dans des luminaires design scandinaves (Louis Poulsen, &Tradition) — ils font 80% de l\'ambiance',
            'Le bois de bouleau donne un rendu plus authentiquement nordique que le chêne blanchi',
            'Un plaid jeté sur un canapé gris avec 2 bougies = hygge instantané'
          ],
          tags: ['nordique', 'hygge', 'bois clair', 'blanc', 'cocooning', 'fonctionnel']
        },
        {
          id: 'japandi',
          title: 'Japandi',
          subtitle: 'Fusion Japon × Scandinavie',
          summary: 'Le mariage harmonieux du minimalisme japonais et de la chaleur scandinave. Un style contemporain majeur qui combine le meilleur des deux mondes.',
          sections: [
            {
              title: 'Naissance du style',
              content: 'Le Japandi émerge dans les années 2010 de la convergence naturelle entre design scandinave et esthétique japonaise. Les deux cultures partagent l\'amour des matériaux naturels, de la fonctionnalité et de la simplicité. Le Japandi assume cette rencontre.'
            },
            {
              title: 'Palette & matériaux',
              content: 'Palette terreuse et apaisante : beige sable, gris chaud, brun chocolat, noir doux, blanc cassé. Matériaux : chêne ou frêne naturel, pierre, céramique artisanale, lin, laine bouclée, papier washi, bambou. Textures mates de préférence, jamais brillant.'
            },
            {
              title: 'Principes d\'aménagement',
              content: 'Mobilier bas et enraciné (influence japonaise). Lignes douces et organiques (influence scandinave). Peu de pièces, très sélectionnées. Artisanat valorisé : céramique, vannerie, textile tissé main. Plantes architecturales (olivier, ficus lyrata). Éclairage chaud et indirect.'
            },
            {
              title: 'Erreurs à éviter',
              content: 'Ne pas tomber dans le « too perfect » — le Japandi célèbre l\'imperfection wabi-sabi. Éviter le plastique et le synthétique. Ne pas surcharger — si vous hésitez à ajouter un objet, c\'est qu\'il n\'a pas sa place. Ne pas mélanger trop de bois différents (max 2).'
            }
          ],
          keyPoints: [
            'Fusion du meilleur : chaleur nordique + rigueur japonaise',
            'Palette terreuse et mates, jamais de couleurs vives',
            'L\'artisanat et les imperfections sont valorisés',
            'Mobilier bas, organique, en matériaux naturels',
            'Style très demandé en 2024-2026, pertinent pour tout projet résidentiel'
          ],
          tips: [
            'Une céramique artisanale japonaise posée sur un meuble danois = Japandi parfait',
            'Le frêne massif est le bois roi du Japandi',
            'Penser l\'éclairage en couches : indirect au plafond + lampe à poser en papier washi'
          ],
          tags: ['fusion', 'naturel', 'artisanat', 'terre', 'contemporain', 'tendance']
        },
        {
          id: 'maximalisme',
          title: 'Maximalisme',
          subtitle: 'L\'excès maîtrisé',
          summary: 'L\'antithèse du minimalisme. Le maximalisme célèbre l\'accumulation, la couleur, les motifs et l\'expression personnelle sans retenue — mais avec méthode.',
          sections: [
            {
              title: 'Philosophie',
              content: 'Le maximalisme rejette l\'idée que « less is more ». Il affirme que la surabondance, quand elle est personnelle et cohérente, crée des espaces riches, vivants et uniques. Chaque objet raconte une histoire. L\'intérieur devient une autobiographie matérielle.'
            },
            {
              title: 'Codes visuels',
              content: 'Couleurs saturées et contrastées, motifs multiples (floraux, géométriques, animaliers), superposition de textures (velours, soie, fourrure, macramé). Murs galerie (salon-style hanging), collections affichées, bibliothèques pleines, objets vintage et souvenirs de voyage.'
            },
            {
              title: 'La méthode dans la folie',
              content: 'Le bon maximalisme n\'est pas du désordre. Il fonctionne grâce à : un fil conducteur chromatique (3-4 couleurs récurrentes), une cohérence de style ou d\'époque, une hiérarchie visuelle (un point focal par zone), et une qualité des pièces individuelles.'
            },
            {
              title: 'Quand l\'utiliser',
              content: 'Idéal pour les personnalités expressives, les espaces de vie, les boutiques et les restaurants d\'ambiance. Fonctionne très bien en chambre d\'hôtel boutique. Attention dans les petits espaces : il faut une maîtrise encore plus grande des proportions.'
            }
          ],
          keyPoints: [
            '« More is more » — mais avec cohérence',
            'Un fil chromatique relie tous les éléments',
            'La qualité individuelle de chaque pièce est essentielle',
            'Les murs sont traités comme des toiles (papier peint, art, couleur)',
            'Contraire du minimalisme mais pas du bon goût'
          ],
          tips: [
            'Commencer par un papier peint audacieux sur un seul mur, puis construire autour',
            'Le velours dans des couleurs profondes (émeraude, bordeaux, saphir) est le tissu roi du maximalisme',
            'Créer un « mur galerie » avec des cadres de tailles et styles variés mais une palette cohérente'
          ],
          tags: ['couleur', 'motifs', 'éclectique', 'personnel', 'velours', 'audace']
        }
      ]
    },

    // ====================================
    // 2. MATÉRIAUX & TEXTURES (CLASSÉS)
    // ====================================
    {
      id: 'materiaux',
      name: 'Matériaux & Textures',
      icon: '◧',
      color: '#8B7355',
      description: 'Tout savoir sur les matériaux : propriétés, usages, entretien, coûts et combinaisons. Classés par famille.',
      fiches: [

        // ──────────────────────────────
        // BOIS
        // ──────────────────────────────
        {
          id: 'chene-massif',
          category: 'Bois',
          title: 'Chêne Massif',
          subtitle: 'Le roi des bois nobles',
          summary: 'Bois dur par excellence en architecture d\'intérieur européenne. Sa polyvalence, sa durabilité et sa beauté en font le choix n°1 pour le mobilier, les sols et les menuiseries.',
          sections: [
            {
              title: 'Caractéristiques techniques',
              content: 'Densité : 710 kg/m³. Dureté Janka : 1360 lbf. Grain serré avec veinage prononcé. Couleur naturelle : brun doré à brun moyen, fonce avec le temps. Très bonne résistance aux chocs et à l\'usure. Se travaille bien en ébénisterie.'
            },
            {
              title: 'Types et finitions',
              content: 'Chêne blanc (Quercus alba) : plus clair, plus résistant à l\'eau. Chêne rouge (Q. rubra) : tons rosés, légèrement moins dur. Finitions courantes : huilé (mat naturel), verni (protection maximale), ciré (patine vivante), cérusé (blanchiment des veines), brossé (accentue le grain).'
            },
            {
              title: 'Utilisations en intérieur',
              content: 'Parquet (point de Hongrie, bâtons rompus, lames larges). Mobilier : tables, étagères, plans de travail. Menuiseries : portes, plinthes, moulures. Escaliers. Panneaux muraux (boiseries). Poutres apparentes.'
            },
            {
              title: 'Entretien & prix',
              content: 'Parquet chêne massif : 60-120€/m² pose comprise. Table sur mesure : 800-3000€. Entretien huilé : réappliquer une huile dure tous les 1-2 ans. Verni : nettoyage simple, rénovation tous les 10 ans. Éviter l\'eau stagnante et les produits agressifs.'
            }
          ],
          keyPoints: [
            'Densité 710 kg/m³ — excellent rapport durabilité/travaillabilité',
            'Le chêne huilé est le standard du design contemporain',
            'Se patine magnifiquement avec le temps',
            'Compatible avec tous les styles (scandinave, industriel, classique)',
            'Investissement durable — un parquet chêne dure 100+ ans'
          ],
          tips: [
            'Choisir du chêne français (Quercus petraea) pour la plus belle qualité en Europe',
            'Le point de Hongrie en chêne naturel huilé est intemporel — ne jamais hésiter à le proposer',
            'Pour un rendu contemporain, préférer des lames larges (180mm+) et une huile invisible'
          ],
          tags: ['bois', 'noble', 'parquet', 'mobilier', 'durable', 'polyvalent']
        },
        {
          id: 'noyer',
          category: 'Bois',
          title: 'Noyer',
          subtitle: 'L\'élégance sombre',
          summary: 'Bois noble par excellence du design Mid-Century et contemporain. Son grain riche et sa couleur chocolat profonde en font un choix premium pour le mobilier haut de gamme.',
          sections: [
            { title: 'Caractéristiques', content: 'Densité : 640 kg/m³. Dureté Janka : 1010 lbf — plus tendre que le chêne mais suffisant pour le mobilier. Couleur : brun chocolat à brun violacé, avec aubier clair contrasté. Veinage spectaculaire, souvent ondulé. Le noyer américain (Juglans nigra) est plus foncé et plus disponible que le noyer européen (J. regia).' },
            { title: 'Utilisations', content: 'Mobilier haut de gamme (tables, buffets, bureaux). Placage décoratif (panneaux muraux, portes). Parquet (moins courant, très luxueux). Plans de travail. Escaliers. Le placage « ronce de noyer » (loupes) est parmi les plus précieux au monde.' },
            { title: 'Associations & design', content: 'Le noyer est LE bois du Mid-Century Modern (Eames, Nakashima). Il s\'associe magnifiquement avec le laiton, le cuir cognac, le marbre blanc et le béton. Éviter de le mélanger avec trop d\'autres bois foncés — il a besoin de contraste.' },
            { title: 'Prix & entretien', content: 'Bois massif : 2x à 3x plus cher que le chêne. Table noyer massif : 1500-5000€. Placage : alternative accessible (80-150€/m²). Finition huile-cire recommandée. Sensible aux UV — fonce puis s\'éclaircit légèrement avec le temps.' }
          ],
          keyPoints: ['Le bois signature du design Mid-Century', 'Plus tendre que le chêne — à protéger en plan de travail cuisine', 'Le contraste aubier/duramen peut être exploité esthétiquement', 'Le placage ronce de noyer = ultra luxe', 'S\'éclaircit légèrement à la lumière — prévoir l\'évolution'],
          tips: ['Un plateau de table en noyer massif « live edge » (bord naturel) est une pièce maîtresse spectaculaire', 'En placage, toujours vérifier le raccord des veines — un bon plaquiste fait la différence', 'Le noyer + laiton brossé + cuir fauve = le trio le plus élégant qui existe'],
          tags: ['bois', 'noble', 'foncé', 'Mid-Century', 'mobilier', 'luxe']
        },
        {
          id: 'teck',
          category: 'Bois',
          title: 'Teck',
          subtitle: 'L\'imputrescible',
          summary: 'Bois tropical légendaire pour sa résistance naturelle à l\'eau, aux insectes et au temps. Le teck est le choix ultime pour les salles de bain et les espaces extérieurs.',
          sections: [
            { title: 'Caractéristiques', content: 'Densité : 630-720 kg/m³. Dureté Janka : 1070 lbf. Naturellement riche en huiles et en silice — résistant à l\'eau, aux champignons et aux insectes sans aucun traitement. Couleur dorée à brun miel, grise s\'il est laissé brut en extérieur. Grain droit et fin. Origine : Asie du Sud-Est (Myanmar, Indonésie).' },
            { title: 'Utilisations en intérieur', content: 'Salle de bain : plans de vasque, caillebotis de douche, meubles. Mobilier intérieur/extérieur (la transition est naturelle). Parquet de salle de bain. Plans de travail cuisine (bonne résistance à l\'eau). Meubles de rangement. Accessoires (plateaux, boîtes, miroirs).' },
            { title: 'Écoresponsabilité', content: 'Le teck sauvage est menacé — TOUJOURS exiger du teck de plantation certifié FSC ou PEFC. Alternatives éco : iroko (afrique), accoya (bois modifié), robinier (faux acacia, européen). Le teck recyclé (ancien mobilier, pontons de bateaux) est très recherché et écoresponsable.' },
            { title: 'Entretien & prix', content: 'Prix : parmi les bois les plus chers (100-200€/m² en lames). Entretien intérieur : huile de teck 1-2x/an pour conserver la couleur dorée. Sans entretien, il grise naturellement (certains préfèrent). Nettoyage : savon neutre. Durée de vie : quasi illimitée.' }
          ],
          keyPoints: ['Naturellement imputrescible sans aucun traitement', 'Le choix n°1 pour les salles de bain en bois', 'Toujours exiger la certification FSC — écoresponsabilité obligatoire', 'Grise naturellement en extérieur — c\'est un choix esthétique', 'Le teck recyclé est premium et durable'],
          tips: ['Un caillebotis teck dans une douche à l\'italienne apporte une touche spa immédiate', 'Le teck + pierre naturelle + laiton = salle de bain d\'hôtel 5 étoiles', 'Choisir du teck de grade A (heartwood pur, sans aubier) pour la meilleure résistance'],
          tags: ['bois', 'tropical', 'salle de bain', 'extérieur', 'résistant', 'eau']
        },
        {
          id: 'pin-sapin',
          category: 'Bois',
          title: 'Pin & Sapin',
          subtitle: 'Les bois tendres accessibles',
          summary: 'Bois résineux abondants et économiques. Le pin et le sapin sont les bois de construction par excellence, avec un potentiel décoratif sous-estimé quand ils sont bien utilisés.',
          sections: [
            { title: 'Caractéristiques', content: 'Pin sylvestre : densité 510 kg/m³, jaunâtre à rosé, nœuds marqués. Sapin/Épicéa : densité 450 kg/m³, blanc crème, nœuds plus petits. Les deux sont des bois tendres (Janka 380-690 lbf). Croissance rapide = ressource renouvelable et prix bas.' },
            { title: 'Utilisations', content: 'Structure et ossature bois. Lambris mural et plafond (le « cabin style » scandinave). Étagères et rangements. Mobilier basique (tables, bancs). Parquet (pin maritime ou pin Douglas pour les sols — plus durs). Moulures et plinthes peintes.' },
            { title: 'Finitions & valorisation', content: 'Brut huilé : style scandinave/japandi authentique. Blanchi/lasure blanche : lumineux, style bord de mer ou nordique. Brossé et flammé (shou sugi ban) : technique japonaise spectaculaire — brûler la surface pour la protéger et la sublimer. Peint : masque les nœuds, rendu lisse.' },
            { title: 'Prix & limites', content: 'Pin : 15-30€/m² (vs 60-120€ pour le chêne). Sapin : encore moins cher. Limites : se raye facilement, marque sous les chocs, sensible à l\'humidité. Pas adapté cuisine ou salle de bain sans traitement spécifique. Les nœuds peuvent être un atout ou un défaut selon le design.' }
          ],
          keyPoints: ['3x à 5x moins cher que le chêne — rapport qualité/prix imbattable', 'Le pin Douglas est le plus dur des pins — adapté aux sols', 'Le shou sugi ban (bois brûlé) est une finition spectaculaire et protectrice', 'Parfait pour le lambris mural et plafond de style scandinave', 'Les nœuds = charme rustique assumé ou défaut à masquer — trancher dès le brief'],
          tips: ['Un mur complet en lambris pin blanchi crée un effet cocooning spectaculaire à petit prix', 'Le pin Douglas vieilli avec du fer (vinaigre + clous = patine grise naturelle) est magnifique', 'Pour un rendu haut de gamme, choisir du pin nodefree (sans nœuds) — plus rare mais existe'],
          tags: ['bois', 'économique', 'résineux', 'lambris', 'scandinave', 'accessible']
        },
        {
          id: 'bouleau',
          category: 'Bois',
          title: 'Bouleau',
          subtitle: 'Le blond nordique',
          summary: 'Bois clair et lumineux, star du design finlandais (Alvar Aalto). Le bouleau, surtout en contreplaqué, est un matériau phare de l\'architecture d\'intérieur contemporaine.',
          sections: [
            { title: 'Caractéristiques', content: 'Densité : 670 kg/m³. Couleur : blanc crème à jaune pâle, très clair. Grain fin et homogène, peu de veinage. Bois dur malgré son aspect délicat. Le contreplaqué de bouleau finlandais est considéré comme le meilleur au monde.' },
            { title: 'Le contreplaqué de bouleau', content: 'Multiplis de bouleau (9-21 plis) : extrêmement résistant, stable, et esthétique avec ses tranches striées visibles. Utilisé par Alvar Aalto (tabouret 60, fauteuil Paimio). Aujourd\'hui omniprésent : plans de travail, mobilier, étagères, façades de cuisine. La tranche multiplis devient un élément décoratif.' },
            { title: 'Applications', content: 'Façades de cuisine et de rangement (contreplaqué). Plan de travail (24-40mm de multiplis vernis). Mobilier d\'architecte (bureaux, étagères). Panneaux muraux. Jouets et mobilier enfant (sain, clair, doux). Maquettes et prototypage.' },
            { title: 'Prix & entretien', content: 'Contreplaqué bouleau finlandais : 40-80€/m² (selon épaisseur). Massif : rare en France, plutôt nordique. Finition : vernis mat ou huile incolore pour garder la clarté. Vitrification possible pour les plans de travail. Sensible aux taches — protéger en cuisine.' }
          ],
          keyPoints: ['Le bois signature d\'Alvar Aalto et du design finlandais', 'Le contreplaqué de bouleau = matériau technique ET esthétique', 'La tranche multiplis visible est devenue un code du design contemporain', 'Extrêmement clair — illumine les espaces sombres', 'Le meilleur bois pour le mobilier enfant (clair, sain, résistant)'],
          tips: ['Un plan de travail en multiplis bouleau 40mm avec tranche visible = look architecte abordable', 'Combiner bouleau clair + détails noirs = style scandinave minimaliste parfait', 'Le bouleau prend très bien la teinture — on peut le teinter en rose, vert sauge, bleu...'],
          tags: ['bois', 'clair', 'nordique', 'contreplaqué', 'Aalto', 'finlandais']
        },

        // ──────────────────────────────
        // PIERRES NATURELLES
        // ──────────────────────────────
        {
          id: 'marbre-carrare',
          category: 'Pierres naturelles',
          title: 'Marbre de Carrare',
          subtitle: 'La pierre des maîtres',
          summary: 'Extrait des carrières de Toscane depuis l\'Antiquité, le marbre de Carrare est LE symbole du luxe intemporel en architecture d\'intérieur.',
          sections: [
            {
              title: 'Géologie & extraction',
              content: 'Pierre métamorphique calcaire issue des Alpes Apuanes (Toscane, Italie). Exploité depuis le Ier siècle av. J.-C. — Michel-Ange y choisissait ses blocs. Le Statuario (le plus pur, le plus cher) présente un fond blanc éclatant avec de fines veines grises. Le Calacatta offre des veines dorées plus prononcées.'
            },
            {
              title: 'Propriétés',
              content: 'Pierre relativement tendre (3-4 sur l\'échelle de Mohs). Poreuse — sensible aux acides et aux taches. Densité : 2710 kg/m³. Absorbe la chaleur lentement. Chaque dalle est unique. Le marbre est vivant — il se patine et évolue avec le temps.'
            },
            {
              title: 'Applications',
              content: 'Plans de travail de cuisine (avec précaution). Salles de bain (murs, sols, vasques). Tables et consoles. Cheminées. Revêtements muraux. Dosserets. Plus récemment : petits objets déco (plateaux, lampes, vases).'
            },
            {
              title: 'Entretien & coût',
              content: 'Prix : 100-300€/m² selon qualité. Statuario : 400-800€/m². Entretien : traitement hydrofuge à la pose, puis nettoyage au savon de Marseille. Jamais de vinaigre, citron ou produit acide. Accepter la patine ou opter pour un traitement anti-tache professionnel.'
            }
          ],
          keyPoints: [
            'Carrare = blanc veiné gris, Calacatta = veines plus dorées et prononcées',
            'Sensible aux acides — à protéger en cuisine',
            'Chaque dalle est unique — superviser le choix en carrière ou chez le marbrier',
            'Se patine avec le temps (considéré comme une qualité en wabi-sabi)',
            'Alternatives crédibles : quartz composite, grès cérame effet marbre'
          ],
          tips: [
            'Toujours faire un test acide en boutique pour évaluer la réactivité de la pierre',
            'Pour un plan de travail cuisine, le quartzite est plus résistant avec un look similaire',
            'Le « book-matching » (miroir de 2 dalles) crée un effet spectaculaire en mur de salle de bain'
          ],
          tags: ['pierre', 'luxe', 'blanc', 'Italie', 'salle de bain', 'plan de travail']
        },
        {
          id: 'beton-cire',
          category: 'Enduits & Revêtements minéraux',
          title: 'Béton Ciré',
          subtitle: 'L\'enduit caméléon',
          summary: 'Revêtement minéral millimétrique qui imite l\'aspect du béton brut. Extrêmement polyvalent, il habille sols, murs, plans de travail et même douches.',
          sections: [
            {
              title: 'Composition & types',
              content: 'Le béton ciré est un enduit de 2-3mm d\'épaisseur composé de ciment, résines, quartz et pigments. Deux grandes familles : le micro-ciment (à base de ciment) et le micro-béton (plus épais, plus résistant). Marques de référence : Microtopping (Ideal Work), Béton Lège, Marius Aurenti.'
            },
            {
              title: 'Propriétés',
              content: 'Épaisseur : 2-3mm. Applicable sur presque tous les supports existants (carrelage, bois, métal). Résistant à l\'eau une fois protégé. Aspect mat à satiné selon la finition. Toucher soyeux. Antidérapant. Pas de joints — surface monolithique continue.'
            },
            {
              title: 'Applications',
              content: 'Sols intérieurs (très demandé en rénovation). Murs et crédences. Plans de travail cuisine et salle de bain. Douches à l\'italienne. Escaliers. Mobilier (tables, vasques). Extérieurs protégés (terrasses couvertes).'
            },
            {
              title: 'Mise en œuvre & prix',
              content: 'Application en 5-6 couches par un professionnel qualifié. Temps de séchage : 48-72h entre couches. Finition : vernis polyuréthane ou cire naturelle. Prix posé : 100-180€/m². Entretien : savon neutre, réapplication de cire 1x/an. Réparation des fissures possible.'
            }
          ],
          keyPoints: [
            'Épaisseur 2-3mm — idéal en rénovation sans modification de niveaux',
            'Surface sans joints = hygiène et esthétique contemporaine',
            'Attention : pose par un professionnel obligatoire — très technique',
            'Le rendu dépend énormément de l\'applicateur — voir des chantiers avant de choisir',
            'Teinte dans la masse — palette infinie de couleurs'
          ],
          tips: [
            'Demander au moins 3 échantillons de teinte sur support réel avant validation',
            'En douche, prévoir un drainage parfait — le béton ciré ne pardonne pas les flaques stagnantes',
            'Le gris anthracite en sol + murs blancs crée un écrin contemporain irrésistible'
          ],
          tags: ['enduit', 'béton', 'sans joints', 'rénovation', 'contemporain', 'cuisine']
        },
        {
          id: 'terrazzo',
          category: 'Enduits & Revêtements minéraux',
          title: 'Terrazzo',
          subtitle: 'Renaissance d\'un classique',
          summary: 'Matériau ancestral vénitien remis au goût du jour. Le terrazzo — mélange de fragments de marbre dans un liant — est devenu un incontournable du design contemporain.',
          sections: [
            {
              title: 'Histoire',
              content: 'Né à Venise au XVe siècle, le terrazzo (ou granito) était à l\'origine fait de chutes de marbre récupérées, liées au ciment et polies. Omniprésent dans l\'architecture italienne et Art Déco. Après des décennies d\'oubli, il connaît un revival spectaculaire depuis 2018.'
            },
            {
              title: 'Composition & types',
              content: 'Terrazzo traditionnel : fragments de marbre + ciment. Terrazzo époxy : fragments + résine (plus de couleurs possibles). Granulométrie : micro (grains fins, aspect discret) à macro (gros éclats, très graphique). Personnalisation infinie : choix des pierres, couleurs du liant, taille des fragments.'
            },
            {
              title: 'Applications contemporaines',
              content: 'Sol monolithique (coulé sur place). Plans de travail et crédences. Vasques et tablettes de salle de bain. Dalles (carreaux de terrazzo pré-fabriqués). Mobilier (tables, bancs). Façades de meubles de cuisine. Grès cérame imitation terrazzo (alternative économique).'
            },
            {
              title: 'Prix & entretien',
              content: 'Terrazzo coulé sur place : 150-350€/m². Carreaux de terrazzo : 80-200€/m². Grès cérame imitation : 30-60€/m². Entretien : simple, savon neutre. Cristallisation recommandée tous les 5-10 ans pour le terrazzo traditionnel. Très résistant à l\'usure.'
            }
          ],
          keyPoints: [
            'Le terrazzo est entièrement personnalisable (couleurs, taille des éclats)',
            'Existe en coulé sur place (premium) ou en carreaux (plus accessible)',
            'L\'imitation grès cérame est devenue très convaincante',
            'Parfait pour les sols de grande surface sans joints',
            'Tendance forte et durable — pas un effet de mode passager'
          ],
          tips: [
            'Un terrazzo à petits éclats blancs et roses sur fond blanc = look très contemporain et doux',
            'En plan de travail, le terrazzo époxy permet des couleurs impossibles en traditionnel',
            'Mixer terrazzo au sol + béton ciré aux murs crée un dialogue de textures captivant'
          ],
          tags: ['vénitien', 'sol', 'marbre', 'tendance', 'personnalisable', 'résistant']
        },
        {
          id: 'laiton',
          category: 'Métaux',
          title: 'Laiton',
          subtitle: 'L\'or de l\'architecte',
          summary: 'Alliage de cuivre et zinc au ton doré chaleureux. Le laiton est devenu le métal signature du design d\'intérieur haut de gamme des années 2020.',
          sections: [
            {
              title: 'Propriétés',
              content: 'Alliage cuivre (60-70%) + zinc (30-40%). Ton doré chaud, plus subtil que l\'or. Résistant à la corrosion. Se patine naturellement avec le temps (vert-de-gris). Antibactérien naturel. Ductile et facile à travailler. Non magnétique.'
            },
            {
              title: 'Finitions',
              content: 'Poli miroir : brillant, glamour. Brossé : mat, contemporain (le plus utilisé en 2024-2026). Patiné : aspect vieilli, authentique. Laqué : protégé contre l\'oxydation, conserve sa couleur. PVD : traitement ultra-résistant, recommandé pour robinetterie et poignées.'
            },
            {
              title: 'Applications en intérieur',
              content: 'Robinetterie (la star actuelle). Poignées de porte et de meuble. Luminaires. Pieds de mobilier. Étagères et consoles. Miroirs. Crédences (feuilles de laiton). Interrupteurs et prises design. Plinthes et baguettes de finition.'
            },
            {
              title: 'Entretien & alternatives',
              content: 'Laiton non laqué : s\'oxyde naturellement, nettoyer au citron + bicarbonate si souhaité. Laiton laqué/PVD : simple essuyage. Prix : robinet laiton brossé 200-800€. Alternatives : acier doré (moins cher), laiton plaqué sur zamak (entrée de gamme, moins durable).'
            }
          ],
          keyPoints: [
            'Le laiton brossé est LA finition métal de référence depuis 2020',
            'Se patine avec le temps — c\'est un choix esthétique à assumer',
            'Antibactérien naturel — idéal pour robinetterie et poignées',
            'Fonctionne avec tous les styles : du classique au brutaliste',
            'Attention aux imitations (zamak doré) — vérifier la qualité'
          ],
          tips: [
            'Coordonner robinetterie + poignées + luminaires dans la même finition laiton pour un rendu cohérent',
            'Le laiton brossé + chêne naturel + lin blanc = trio gagnant universel',
            'Pour un budget serré, réserver le vrai laiton aux points de contact (poignées, robinets) et utiliser de l\'acier doré ailleurs'
          ],
          tags: ['métal', 'doré', 'robinetterie', 'poignées', 'luminaires', 'luxe']
        },
        {
          id: 'lin',
          category: 'Textiles',
          title: 'Lin',
          subtitle: 'Textile noble & vivant',
          summary: 'Fibre naturelle d\'exception cultivée principalement en Normandie. Le lin incarne l\'élégance décontractée et la durabilité dans les intérieurs contemporains.',
          sections: [
            {
              title: 'Propriétés',
              content: 'Fibre naturelle issue de la plante de lin (Linum usitatissimum). La France est le 1er producteur mondial. Thermorégulateur (frais en été, isolant en hiver). Antibactérien et antiallergique. Très résistant — se bonifie au lavage. Absorbant. Biodégradable.'
            },
            {
              title: 'Applications en intérieur',
              content: 'Rideaux et voilages (le tombé du lin est incomparable). Linge de lit (draps, housses de couette). Nappes et serviettes. Revêtement de canapé et fauteuil. Coussins. Abat-jour. Revêtement mural (toile de lin tendue). Tapis en lin tissé.'
            },
            {
              title: 'Teintes & textures',
              content: 'Lin naturel : beige doré, aspect brut. Lin lavé : souple, froissé naturellement (le plus tendance). Lin teinté : palette douce (blanc cassé, gris perle, vert sauge, terracotta). Épaisseurs variées : voile léger pour les rideaux, toile épaisse pour l\'ameublement.'
            },
            {
              title: 'Entretien & coût',
              content: 'Lavage machine 40°C, sèche-linge déconseillé. Se froisse naturellement — c\'est son charme. S\'adoucit à chaque lavage. Prix : drap lin lavé 100-200€, rideaux 80-150€ le panneau. Marques : Merci, Harmony, Linge Particulier, Libeco.'
            }
          ],
          keyPoints: [
            'Le lin lavé est le textile le plus demandé en décoration depuis 2020',
            'Il se froisse — et c\'est sa qualité, pas un défaut',
            'Thermorégulateur + antibactérien = idéal pour le linge de lit',
            'La France (Normandie) est le 1er producteur mondial — privilégier le lin français',
            'S\'associe naturellement avec le bois, la céramique et le rotin'
          ],
          tips: [
            'Un rideau en lin naturel non doublé filtre la lumière magnifiquement — effet wabi-sabi garanti',
            'Le lin terracotta est la couleur de textile qui fonctionne dans le plus grand nombre d\'intérieurs',
            'Pour un canapé en lin, choisir un tissu stonewashed (pré-lavé) pour éviter le rétrécissement'
          ],
          tags: ['textile', 'naturel', 'rideaux', 'literie', 'français', 'durable']
        },

        // ──────────────────────────────
        // PIERRES (suite)
        // ──────────────────────────────
        {
          id: 'travertin',
          category: 'Pierres naturelles',
          title: 'Travertin',
          subtitle: 'La pierre du moment',
          summary: 'Pierre calcaire sédimentaire aux tons chauds et à la surface naturellement texturée. Le travertin est LA pierre tendance des années 2020, omniprésente dans les projets haut de gamme.',
          sections: [
            { title: 'Caractéristiques', content: 'Pierre calcaire formée par dépôts de sources chaudes. Couleur : ivoire, beige, noisette, parfois walnut (brun). Surface naturellement alvéolée (trous caractéristiques). Densité : 2400-2700 kg/m³. Dureté : 3-4 Mohs — pierre tendre. Deux finitions principales : adouci (lisse mat) ou vieilli (surface texturée avec trous ouverts).' },
            { title: 'Origines', content: 'Le travertin de Rome (utilisé pour le Colisée). Aujourd\'hui principalement extrait en Turquie (Denizli), Iran et Italie. Le travertin turc « classique » est le plus accessible. Le travertin italien (navona, noce) est plus rare et plus cher. Le travertin iranien offre des teintes uniques (vert, rouge).' },
            { title: 'Applications', content: 'Revêtement mural salle de bain (LA tendance actuelle). Sols intérieurs et extérieurs. Plan de vasque monolithique. Douche complète (murs + receveur). Crédence cuisine. Tables et consoles. Cheminées. Façades de meuble.' },
            { title: 'Prix & entretien', content: 'Dalles : 50-150€/m². Travertin italien premium : 150-300€/m². Hydrofuge obligatoire à la pose. Entretien : savon neutre. Sensible aux acides (comme le marbre). Les trous se rebouchent au mastic-pierre ou se laissent ouverts (choix esthétique). Vieillit magnifiquement.' }
          ],
          keyPoints: ['LA pierre la plus demandée en 2024-2026', 'Les trous naturels sont sa signature — à assumer ou reboucher', 'Pierre chaude — parfaite pour les intérieurs « quiet luxury »', 'Sensible aux acides, comme le marbre', 'Le travertin « noce » (brun) est la teinte la plus recherchée actuellement'],
          tips: ['Un mur complet de douche en travertin adouci crée un effet spa naturel immédiat', 'Associer travertin + lin + bois clair = palette « quiet luxury » parfaite', 'Pour la cuisine, préférer le grès cérame imitation travertin (même look, zéro entretien)'],
          tags: ['pierre', 'calcaire', 'tendance', 'salle de bain', 'beige', 'quiet luxury']
        },
        {
          id: 'granit',
          category: 'Pierres naturelles',
          title: 'Granit',
          subtitle: 'L\'indestructible',
          summary: 'Pierre magmatique extrêmement dure et résistante. Le granit est le choix technique optimal pour les plans de travail cuisine, avec une palette de couleurs surprenante.',
          sections: [
            { title: 'Caractéristiques', content: 'Pierre ignée (magmatique) composée de quartz, feldspath et mica. Dureté : 6-7 Mohs — quasi inrayable. Densité : 2650-2750 kg/m³. Non poreux (faible absorption d\'eau). Résistant aux acides, à la chaleur et aux rayures. Des centaines de couleurs naturelles : noir, gris, blanc, rose, vert, bleu, brun.' },
            { title: 'Le granit en cuisine', content: 'Le matériau technique idéal pour un plan de travail : résistant à la chaleur (poser une casserole chaude = OK), inrayable en usage normal, non poreux (hygiénique), disponible en très grandes dalles. Finitions : poli miroir (brillant), adouci (mat satiné), flammé (rugueux), cuir/leather (texturé mat — très tendance).' },
            { title: 'Variétés remarquables', content: 'Nero Zimbabwe : noir profond, uniforme, ultra-élégant. Bianco Sardo : gris-blanc piqueté, polyvalent. Blue Pearl : bleu-gris iridescent (Norvège). Kashmir White : blanc crème indien. Nero Marquina : parfois classé marbre, noir veiné blanc. Le granit « Titanium » : noir avec reflets dorés spectaculaires.' },
            { title: 'Prix & entretien', content: 'Prix posé plan de travail : 200-500€/ml (matériau + façonnage + pose). L\'hydrofuge est recommandé mais pas obligatoire (contrairement au marbre). Entretien : quasi nul — eau + savon. Incassable en usage normal. Durée de vie : illimitée.' }
          ],
          keyPoints: ['Le matériau le plus résistant pour un plan de travail cuisine', 'Inrayable, résistant à la chaleur et aux acides', 'La finition « cuir/leather » est la tendance actuelle', 'Le Nero Zimbabwe poli est l\'un des matériaux les plus élégants qui existent', 'Entretien quasi nul — le rêve en cuisine'],
          tips: ['La finition leather (cuir) cache les traces de doigts — idéal en granit noir', 'Un plan de travail granit noir mat + robinet laiton brossé = combinaison infaillible', 'Demander un échantillon ET voir la tranche réelle — les photos ne montrent pas les paillettes et reflets'],
          tags: ['pierre', 'cuisine', 'plan de travail', 'résistant', 'noir', 'durable']
        },
        {
          id: 'ardoise',
          category: 'Pierres naturelles',
          title: 'Ardoise',
          subtitle: 'La pierre graphique',
          summary: 'Pierre métamorphique feuilletée, noire ou anthracite, à la texture naturellement clivée. L\'ardoise apporte une profondeur graphique unique aux intérieurs contemporains.',
          sections: [
            { title: 'Caractéristiques', content: 'Pierre métamorphique schisteuse. Couleur : noir, anthracite, gris-bleu, parfois vert ou violet. Surface naturellement feuilletée (clivage). Densité : 2700-2800 kg/m³. Dureté : 3-4 Mohs. Imperméable naturellement. Résistante au gel. Origine : Bretagne (Angers), Espagne, Brésil, Inde.' },
            { title: 'Applications en intérieur', content: 'Sol (dalles grand format — très contemporain). Crédence cuisine (résistante à la chaleur). Mur d\'accent (parement pierre naturelle). Tablette de salle de bain. Plan de travail (attention aux rayures blanches visibles sur fond noir). Étagères murales. Dessous de plat et accessoires.' },
            { title: 'Finitions', content: 'Naturelle (clivée) : surface texturée authentique, antidérapante. Adoucie : lisse au toucher, reflets subtils. Calibrée : épaisseur régulière pour une pose plus simple. L\'ardoise de Bretagne (Trélazé) est historiquement la plus prestigieuse, mais les carrières sont quasi épuisées.' },
            { title: 'Prix & entretien', content: 'Dalles sol : 40-80€/m². Parement mural : 30-60€/m². Entretien : huile de lin ou cire noire pour raviver la couleur. Peut blanchir aux frottements — appliquer une huile d\'entretien. Le « voile blanc » post-pose se traite au chiffon et huile.' }
          ],
          keyPoints: ['Surface naturellement antidérapante — parfaite pour les sols de salle de bain', 'Le noir de l\'ardoise est incomparable — plus profond que le carrelage noir', 'Pierre française historique (Angers) — aujourd\'hui surtout importée', 'Peut marquer blanc aux rayures — un choix esthétique à assumer', 'Très bon marché comparée aux autres pierres naturelles'],
          tips: ['En crédence, l\'ardoise naturelle résiste à la chaleur des plaques — poser directement derrière la cuisson', 'Un sol ardoise grand format (60×60 ou 60×90) + joints minimaux = rendu ultra contemporain', 'Huiler l\'ardoise à l\'huile de lin une fois par an pour maintenir le noir profond'],
          tags: ['pierre', 'noir', 'graphique', 'sol', 'crédence', 'naturelle']
        },
        {
          id: 'pierre-bourgogne',
          category: 'Pierres naturelles',
          title: 'Pierre de Bourgogne',
          subtitle: 'Le patrimoine français',
          summary: 'Calcaire à grain fin d\'une douceur incomparable. La pierre de Bourgogne incarne l\'élégance à la française — des châteaux de la Loire aux intérieurs contemporains les plus raffinés.',
          sections: [
            { title: 'Caractéristiques', content: 'Pierre calcaire sédimentaire de la région Bourgogne-Franche-Comté. Couleur : blanc crème, beige doré à rosé selon la carrière. Grain fin et homogène. Toucher doux et soyeux (d\'où son nom de « pierre de velours »). Densité : 2200-2500 kg/m³. Dureté : 3 Mohs — pierre tendre qui se travaille magnifiquement.' },
            { title: 'Variétés principales', content: 'Comblanchien : la plus dure, peut se polir comme un marbre — beige rosé. Lanvignes : beige clair classique, la plus utilisée en dallage. Chamesson : ton miel doré. Chassagne : beige crème, finition adoucie soyeuse. Magny : blanc lumineux. Chaque carrière a son caractère — visiter avant de choisir.' },
            { title: 'Applications', content: 'Dallage intérieur (la référence française). Cheminées. Escaliers (marches massives). Vasques monolithiques. Encadrements de fenêtre et de porte. Plan de travail (avec traitement). Mobilier (consoles, tables). Revêtement mural (opus incertum ou dalles régulières).' },
            { title: 'Prix & entretien', content: 'Dallage : 80-200€/m² selon variété et épaisseur. Comblanchien poli : 120-250€/m². Pierre tendre — sensible aux taches et aux acides. Hydrofuge indispensable. Entretien : savon noir ou savon de Marseille. Développe une belle patine au fil des décennies — la pierre vit et s\'embellit.' }
          ],
          keyPoints: ['La douceur au toucher est incomparable — aucun autre matériau ne la reproduit', 'Pierre française par excellence — extraction locale et responsable', 'Le Comblanchien se polit comme un marbre et résiste bien à l\'usure', 'Vieillit magnifiquement — la patine est un atout majeur', 'Idéale pour les projets de rénovation de caractère (maisons anciennes, hôtels particuliers)'],
          tips: ['En chauffage au sol, la pierre de Bourgogne est idéale — elle emmagasine et restitue la chaleur en douceur', 'Le format opus romain (4 tailles mélangées) est le dallage le plus élégant pour un salon', 'Associer pierre de Bourgogne + boiseries peintes + lin = l\'intérieur français intemporel par excellence'],
          tags: ['pierre', 'calcaire', 'français', 'beige', 'dallage', 'patrimoine']
        },
        {
          id: 'quartzite',
          category: 'Pierres naturelles',
          title: 'Quartzite',
          subtitle: 'Le marbre indestructible',
          summary: 'Pierre métamorphique d\'une beauté comparable au marbre mais d\'une résistance proche du granit. Le quartzite est le compromis idéal pour ceux qui veulent le look marbre en cuisine.',
          sections: [
            { title: 'Caractéristiques', content: 'Pierre métamorphique issue de grès quartzeux. Dureté : 7 Mohs (vs 3-4 pour le marbre) — quasi inrayable. Non poreuse. Résistante aux acides (contrairement au marbre). Résistante à la chaleur. Des veines spectaculaires similaires au marbre. Couleurs : blanc, gris, vert, bleu, rose, doré.' },
            { title: 'Variétés d\'exception', content: 'Taj Mahal : blanc crème veiné or — sublime. Calacatta Macaubas : blanc veiné gris, sosie du Calacatta en indestructible. Sea Pearl : gris-vert aux motifs de vagues. Azul Macaubas : bleu profond veiné blanc — spectaculaire. Fusion : multicolore, chaque dalle est une œuvre d\'art.' },
            { title: 'Applications', content: 'Plan de travail cuisine (son application phare — beauté du marbre, résistance du granit). Îlot central monolithique. Mur de salle de bain (book-match). Dosserets. Tables de salle à manger. Cheminées. Le quartzite est le secret des plus belles cuisines contemporaines.' },
            { title: 'Prix & entretien', content: 'Prix : 200-600€/m² selon variété (les bleus et verts sont les plus chers). Pose : nécessite un façonnier spécialisé (pierre très dure). Entretien : quasi nul — eau + savon. Un hydrofuge est recommandé par précaution mais pas indispensable. LE matériau qui ne craint rien.' }
          ],
          keyPoints: ['La beauté du marbre + la résistance du granit = le meilleur des deux mondes', 'Résistant aux acides — le citron ne le tache pas (contrairement au marbre)', 'Les variétés bleues et vertes sont parmi les pierres les plus spectaculaires au monde', 'Plus cher que le granit mais incomparablement plus beau', 'Attention aux « faux quartzites » — toujours vérifier par un test acide'],
          tips: ['Pour un plan de travail « marbre blanc » qui ne craint rien, choisir Calacatta Macaubas en quartzite', 'Le book-match de quartzite (deux dalles en miroir) est l\'effet wow ultime en mur cuisine ou salle de bain', 'Prévoir une visite chez le marbrier pour choisir la tranche exacte — chaque dalle est unique'],
          tags: ['pierre', 'résistant', 'cuisine', 'plan de travail', 'marbre', 'premium']
        },

        // ──────────────────────────────
        // ENDUITS & REVÊTEMENTS (suite)
        // ──────────────────────────────
        {
          id: 'tadelakt',
          category: 'Enduits & Revêtements minéraux',
          title: 'Tadelakt',
          subtitle: 'L\'enduit marocain',
          summary: 'Enduit à la chaux traditionnel marocain, poli au galet et traité au savon noir. Le tadelakt est imperméable, écologique et d\'une sensualité visuelle incomparable.',
          sections: [
            { title: 'Origine & composition', content: 'Enduit millénaire originaire de Marrakech, utilisé traditionnellement dans les riads et les hammams. Composé de chaux de Marrakech (chaux aérienne), pigments naturels et eau. La technique : application en couches fines, polissage au galet, traitement au savon noir d\'olive qui imperméabilise par saponification.' },
            { title: 'Propriétés', content: 'Imperméable naturellement (grâce au savon noir). Antibactérien et antifongique (pH alcalin de la chaux). Régulateur d\'humidité. Surface douce et soyeuse au toucher. Aspect légèrement lustré, vivant et imparfait. Épaisseur : 5-8mm. 100% écologique — matériaux naturels uniquement.' },
            { title: 'Applications', content: 'Salle de bain complète (murs + douche). Vasques monolithiques en tadelakt. Plans de vasque. Murs d\'accent en pièces de vie. Cheminées. Hammams et spas. Le tadelakt est FAIT pour l\'eau — c\'est son habitat naturel.' },
            { title: 'Mise en œuvre & prix', content: 'Application par un artisan spécialisé uniquement — technique exigeante. Séchage : 2-3 semaines. Prix posé : 150-250€/m². Palette : terres naturelles (ocre, terracotta, beige, blanc cassé, noir charbon). Entretien : savon noir 2x/an. Pas de produits chimiques. Durée de vie : des décennies.' }
          ],
          keyPoints: ['100% naturel et écologique — chaux + eau + pigments + savon noir', 'Imperméable naturellement — fait pour les zones humides', 'Le polissage au galet crée une surface unique et irremplaçable', 'Technique artisanale — le résultat dépend totalement de l\'artisan', 'Compatible RE2020 — matériau biosourcé par excellence'],
          tips: ['Toujours voir un chantier terminé de l\'artisan avant de signer', 'Le tadelakt terracotta en salle de bain avec robinetterie laiton brossé = coup de cœur client garanti', 'Prévoir un temps de séchage de 3 semaines dans le planning — le tadelakt ne se brusque pas'],
          tags: ['enduit', 'chaux', 'Maroc', 'salle de bain', 'écologique', 'artisanal']
        },
        {
          id: 'stuc-venitien',
          category: 'Enduits & Revêtements minéraux',
          title: 'Stuc Vénitien',
          subtitle: 'L\'illusion du marbre',
          summary: 'Enduit décoratif à base de chaux et de poudre de marbre qui imite l\'aspect du marbre poli. Le stuc vénitien (stucco lustro) est l\'art suprême de l\'enduit mural.',
          sections: [
            { title: 'Composition & technique', content: 'Mélange de chaux aérienne éteinte, poudre de marbre fine et pigments. Application en 3-5 couches ultrafines au platoir inox, chaque couche travaillée et comprimée. Le lustrage final au platoir chaud crée un effet miroir naturel (ferrage). La réaction chimique de carbonatation donne une dureté comparable au marbre.' },
            { title: 'Rendus possibles', content: 'Stucco lustro : poli brillant, effet marbre veiné — le plus spectaculaire. Marmorino : plus mat, plus granuleux, effet pierre. Veneziano : lustré doux, le plus courant. La technique des « veines » consiste à superposer des couleurs contrastées avec des gestes précis — c\'est un art.' },
            { title: 'Applications', content: 'Murs de salon et salle à manger (effet wow garanti). Tête de lit (1 mur accent). Cheminées (résistant à la chaleur). Entrées et halls d\'hôtel. Boutiques et restaurants haut de gamme. Colonnes et arcs décoratifs. Plafonds (technique avancée, rendu spectaculaire).' },
            { title: 'Prix & réalisation', content: 'Prix posé : 80-200€/m² selon finition. Artisan spécialisé indispensable. Temps : 1 journée par couche, 3-5 jours pour un mur complet. Entretien : chiffon sec ou légèrement humide. Très résistant une fois carbonaté. Réparations possibles mais délicates.' }
          ],
          keyPoints: ['L\'effet marbre sans le poids ni le prix du marbre réel', 'Le ferrage (polissage au platoir chaud) crée un brillant naturel unique', 'Technique artisanale de haute expertise — l\'artisan fait 90% du résultat', 'Matériau écologique : chaux + marbre, pas de chimie', 'Investissement décoratif à fort impact — 1 seul mur transforme une pièce'],
          tips: ['Un mur de stuc vénitien noir (nero) poli est plus spectaculaire que du marbre noir réel', 'En tête de lit, le stuc dans un ton chaud (argile, terracotta) crée une profondeur incroyable', 'Toujours demander un échantillon grandeur nature (minimum 50×50cm) avant de valider'],
          tags: ['enduit', 'chaux', 'Italie', 'mur', 'luxe', 'artisanal']
        },
        {
          id: 'carreaux-ciment',
          category: 'Enduits & Revêtements minéraux',
          title: 'Carreaux de Ciment',
          subtitle: 'L\'artisanat géométrique',
          summary: 'Carreaux moulés à la main, compressés (non cuits), aux motifs géométriques et floraux. Nés au XIXe siècle, ils reviennent en force comme éléments signature des intérieurs de caractère.',
          sections: [
            { title: 'Fabrication', content: 'Fabriqués un par un à la main : un diviseur en laiton sépare les couleurs dans un moule, les pigments en ciment coloré sont coulés, puis le carreau est compressé à 40 tonnes. Pas de cuisson — le durcissement est chimique (prise du ciment). Chaque carreau est unique. Format standard : 20×20 cm.' },
            { title: 'Motifs & styles', content: 'Géométriques : les classiques (étoiles, losanges, hexagones). Floraux : Art Nouveau et orientaux. Frise : motifs de bordure qui encadrent un tapis central. Uni texturé : sans motif mais avec les irrégularités artisanales. Les maisons Carocim, Popham Design et Emery & Cie sont les références contemporaines.' },
            { title: 'Applications', content: 'Sol de cuisine ou salle de bain (usage historique). Crédence cuisine (très demandé). Tapis de sol (zone de carreaux décorés encadrée de dalles unies). Entrée (effet paillasson décoratif permanent). Mur d\'accent (fresque). Sol de douche.' },
            { title: 'Prix & entretien', content: 'Prix : 80-200€/m² (artisanaux). Imitation grès cérame : 25-50€/m². Pose : joints fins (2mm). Traitement hydrofuge + oléofuge indispensable à la pose (2 couches). Entretien : savon neutre, pas d\'acide. Patinent avec le temps (charme ou défaut selon les goûts).' }
          ],
          keyPoints: ['Fabriqués à la main, un par un — chaque carreau est unique', 'Le traitement hydrofuge à la pose est OBLIGATOIRE — sans lui, taches garanties', 'Le format 20×20 est le standard — prévoir le calepinage soigneusement', 'Les imitations grès cérame sont très convaincantes et sans entretien', 'Le « tapis de sol » en carreaux de ciment est un classique indémodable'],
          tips: ['Créer un tapis de carreaux décorés à l\'entrée encadré de béton ciré = transition moderne/ancien spectaculaire', 'En crédence, le grès cérame imitation est préférable — vraiment aucun entretien', 'Commander 15% de carreaux en plus : les chutes + casses + réserve future sont indispensables'],
          tags: ['carrelage', 'artisanal', 'motifs', 'cuisine', 'sol', 'patrimoine']
        },

        // ──────────────────────────────
        // MÉTAUX (suite)
        // ──────────────────────────────
        {
          id: 'acier-corten',
          category: 'Métaux',
          title: 'Acier Corten',
          subtitle: 'La rouille noble',
          summary: 'Acier auto-patinable qui développe une couche de rouille protectrice orange-brune. L\'acier Corten transforme l\'oxydation en atout esthétique.',
          sections: [
            { title: 'Propriétés', content: 'Acier allié au cuivre, chrome et nickel. En contact avec l\'air et l\'eau, il développe une patine d\'oxyde stable qui protège le cœur du métal. Couleur : orange vif (neuf) → brun profond (mature, après 1-2 ans). La patine se stabilise et ne salit plus. Résistance structurelle identique à l\'acier classique.' },
            { title: 'Utilisation en intérieur', content: 'Mur d\'accent (panneaux de Corten fixés sur support). Habillage de cheminée (résistant à la chaleur). Escaliers (marches + garde-corps). Cloisons ajourées (découpe laser possible). Mobilier (tables, étagères). Bacs à plantes intégrés. Crédence (avec traitement de fixation de la patine).' },
            { title: 'Mise en œuvre', content: 'Le Corten brut va rouiller et couler — en intérieur, il faut FIXER la patine avec un vernis ou un fixateur. La pré-patine en atelier est recommandée (accélérer l\'oxydation puis fixer). L\'épaisseur standard : 2-3mm en panneaux décoratifs. Découpe laser pour des motifs personnalisés possible.' },
            { title: 'Prix', content: 'Panneaux bruts : 80-150€/m². Panneaux pré-patinés et fixés : 150-300€/m². Découpe laser personnalisée : sur devis (500€+ selon complexité). Artisans métalliers spécialisés recommandés. Alternative : peinture effet rouille (moins authentique mais plus simple).' }
          ],
          keyPoints: ['La rouille EST la protection — pas un défaut, une fonctionnalité', 'En intérieur : toujours fixer la patine pour éviter les coulures', 'La découpe laser permet des panneaux ajourés spectaculaires', 'S\'associe magnifiquement avec le bois brut, le béton et les plantes', 'L\'évolution de la patine (1-2 ans) est un spectacle en soi'],
          tips: ['Un habillage de cheminée en Corten est un point focal inoubliable', 'Fixer la patine avec du vernis mat polyuréthane — 2 couches minimum', 'Le Corten + éclairage rasant indirect = les reliefs et textures deviennent sculpturaux'],
          tags: ['métal', 'rouille', 'patine', 'industriel', 'cheminée', 'sculptural']
        },
        {
          id: 'cuivre',
          category: 'Métaux',
          title: 'Cuivre',
          subtitle: 'Le métal vivant',
          summary: 'Métal noble au ton rosé-orangé unique, le cuivre se patine en vert-de-gris avec le temps. Il apporte une chaleur inégalée et un caractère vivant aux intérieurs.',
          sections: [
            { title: 'Propriétés', content: 'Métal pur (Cu). Couleur : rosé-orangé (neuf) → brun puis vert-de-gris (patine naturelle). Excellent conducteur thermique et électrique. Antibactérien naturel puissant. Malléable et ductile. Se soude, se martèle, se plie facilement. Recyclable à 100% sans perte de qualité.' },
            { title: 'Applications en intérieur', content: 'Hottes de cuisine (cuivre martelé — spectaculaire). Éviers et vasques. Crédence (feuilles de cuivre). Luminaires et suspensions. Étagères et porte-serviettes. Robinetterie (plus rare que le laiton mais très distinctif). Objets déco : vases, bougeoirs, plateaux.' },
            { title: 'Cuivre vs Laiton', content: 'Le cuivre est rosé, le laiton est doré. Le cuivre se patine plus vite et plus vert. Le cuivre est plus cher. Le laiton est plus courant en robinetterie. En design, le cuivre est plus « artisanal » et chaleureux, le laiton plus « design » et sophistiqué. Les deux ne se mélangent pas bien ensemble.' },
            { title: 'Entretien', content: 'Le cuivre vit — sa patine est naturelle et belle. Pour la conserver rosée : polir régulièrement au citron + sel ou au produit spécifique. Pour la laisser évoluer : ne rien faire. Vernis de protection possible pour figer un état. En cuisine, le cuivre est hygiénique mais demande un entretien régulier.' }
          ],
          keyPoints: ['Le seul métal naturellement rosé — ton unique et chaud', 'Antibactérien naturel puissant — idéal en cuisine', 'Patine vert-de-gris = choix esthétique fort à assumer avec le client', 'Ne jamais mélanger cuivre et laiton dans le même espace', 'Le cuivre martelé artisanal est un objet de luxe et d\'unicité'],
          tips: ['Une hotte en cuivre martelé au-dessus d\'un îlot = pièce maîtresse de la cuisine', 'En crédence, les feuilles de cuivre vieillissent magnifiquement derrière la cuisson', 'Le cuivre + vert profond (mur, plantes) = combinaison chromatique naturelle et spectaculaire'],
          tags: ['métal', 'rosé', 'patine', 'cuisine', 'antibactérien', 'artisanal']
        },
        {
          id: 'acier-noir',
          category: 'Métaux',
          title: 'Acier Noir Mat',
          subtitle: 'La ligne graphique',
          summary: 'L\'acier thermolaqué noir mat est devenu le standard du design contemporain pour les structures, verrières et détails architecturaux. Il dessine et structure l\'espace.',
          sections: [
            { title: 'Propriétés & finitions', content: 'Acier (fer + carbone) revêtu de peinture thermolaquée (poudre cuite au four). Le noir mat (RAL 9005 mat ou texturé) est le standard absolu du design 2020s. Alternatives : noir satiné (légèrement brillant), noir texturé (grain fin), gunmetal (gris foncé métallisé). L\'acier brut ciré (sans thermolaquage) existe aussi pour un look industriel.' },
            { title: 'Applications phares', content: 'Verrière d\'intérieur (la star absolue). Garde-corps d\'escalier (lisses horizontales fines). Étagères murales (consoles invisibles + tablettes). Encadrements de porte et de niche. Pieds de table et de meuble. Luminaires. Porte coulissante type grange (barn door). Structure de mezzanine.' },
            { title: 'La verrière d\'intérieur', content: 'Phénomène majeur des 10 dernières années. Structure acier noir + vitrage clair ou feuilleté. Sépare sans cloisonner, laisse passer la lumière. Types : fixe, avec porte battante, avec porte coulissante. Dimensions standard : traverse à 105 cm (hauteur d\'allège), montants tous les 40-50 cm. Prix : 800-2500€/m² selon complexité.' },
            { title: 'Fabrication & prix', content: 'Artisan métallier/serrurier (recommandé) : sur-mesure, qualité supérieure. Industriel (Lapeyre, Leroy Merlin) : standard, prix accessible. Étagère murale acier noir : 50-200€/ml. Garde-corps : 200-500€/ml. Thermolaquage : résistant aux rayures, UV, humidité. Entretien : néant (chiffon humide).' }
          ],
          keyPoints: ['Le noir mat (RAL 9005) est LE standard métal du design contemporain', 'La verrière d\'intérieur reste la demande n°1 des clients en rénovation', 'L\'acier noir dessine des lignes graphiques dans l\'espace — il structure', 'Le thermolaquage garantit une finition durable sans entretien', 'Sur-mesure artisan > industriel standard pour la qualité du détail'],
          tips: ['Une verrière fixe sans porte est 40% moins chère et suffit souvent pour l\'effet', 'Coordonner verrière + luminaires + poignées en noir mat pour une cohérence totale', 'Les étagères en cornière acier noir + planche chêne = le classique industriel indémodable'],
          tags: ['métal', 'noir', 'verrière', 'graphique', 'industriel', 'contemporain']
        },
        {
          id: 'inox',
          category: 'Métaux',
          title: 'Inox Brossé',
          subtitle: 'Le professionnel',
          summary: 'L\'acier inoxydable est le métal de la cuisine professionnelle et de l\'architecture contemporaine. Hygiénique, résistant et intemporel, l\'inox brossé s\'est installé dans les intérieurs résidentiels.',
          sections: [
            { title: 'Propriétés', content: 'Acier allié au chrome (>10,5%) et souvent au nickel. Inoxydable (ne rouille pas). Hygiénique (surface non poreuse, antibactérien). Résistant à la chaleur, aux acides et à la corrosion. Recyclable à 100%. Le grade 304 est le standard alimentaire/intérieur. Le 316 (marine) pour les environnements très humides.' },
            { title: 'Finitions', content: 'Brossé : mat directionnel, le plus utilisé (cache les traces). Poli miroir : brillant, effet spectaculaire mais montre tout. Satiné : entre les deux. PVD : coloration possible (or, noir, bronze) tout en gardant les propriétés inox. Anti-traces (anti-fingerprint) : traitement de surface qui repousse les marques de doigts.' },
            { title: 'Applications résidentielles', content: 'Plan de travail cuisine (le choix des chefs — hygiénique et indestructible). Crédence (soudée au plan = 0 joint). Évier (intégré au plan de travail pour un monobloc). Façades de cuisine (style professionnel). Garde-corps et rampes. Étagères. Tablette de salle de bain. Hotte et électroménager.' },
            { title: 'Prix & entretien', content: 'Plan de travail inox : 300-600€/ml. Crédence : 150-300€/m². Entretien : produit inox spécifique ou vinaigre blanc. Polir dans le sens du brossage. Les micro-rayures sont normales et créent une patine d\'usage. Épaisseur recommandée : 1,5-2mm.' }
          ],
          keyPoints: ['Matériau le plus hygiénique existant — standard hospitalier et alimentaire', 'Le brossé anti-traces est le meilleur compromis esthétique/pratique', 'Le plan de travail inox monobloc (plan + évier + crédence soudés) = 0 joint, 100% hygiène', 'Les micro-rayures d\'usage sont normales — elles créent la patine', 'Ne jamais utiliser d\'éponge abrasive dans le sens contraire du brossage'],
          tips: ['Un plan de travail inox + façades bois = le parfait équilibre chaleur/professionnalisme', 'Le PVD noir sur inox crée une robinetterie ultra-résistante qui ne s\'écaille jamais', 'Pour un look chef à domicile : plan inox + étagères murales inox + crédible lisse inox = cuisine pro'],
          tags: ['métal', 'inox', 'cuisine', 'hygiénique', 'professionnel', 'résistant']
        },

        // ──────────────────────────────
        // TEXTILES (suite)
        // ──────────────────────────────
        {
          id: 'velours',
          category: 'Textiles',
          title: 'Velours',
          subtitle: 'Le tissu du luxe',
          summary: 'Tissu à poils ras d\'une richesse visuelle et tactile incomparable. Le velours est le textile qui apporte instantanément luxe et profondeur à un intérieur.',
          sections: [
            { title: 'Types de velours', content: 'Velours ras : pile courte, aspect contemporain et résistant. Velours côtelé : nervures parallèles (comeback massif en 2024-2026). Velours frappé/écrasé : aspect froissé brillant, glamour. Velours de coton : mat, casual-chic. Velours de soie : le plus luxueux, lustré, fragile. Velours mohair : ultra-doux, résistant.' },
            { title: 'Applications', content: 'Canapé et fauteuil (l\'utilisation n°1). Coussins et jetés. Tête de lit capitonnée. Rideaux (occultants naturels, tombé magnifique). Pouf et banquette. Revêtement de chaise de salle à manger. Abat-jour. Le velours est un « multiplicateur d\'élégance » — il élève instantanément tout meuble.' },
            { title: 'Couleurs & associations', content: 'Le velours sublime les couleurs profondes : émeraude, bordeaux, bleu nuit, moutarde, terracotta, rose poudré. Il fonctionne aussi en neutres (gris, taupe, crème) pour un luxe discret. Association parfaite : velours + laiton + marbre. Le velours vert émeraude est devenu iconique depuis 2018.' },
            { title: 'Entretien & durabilité', content: 'Velours de coton et polyester : résistants, nettoyage facile. Velours de soie/viscose : fragile, nettoyage pro. Aspirer régulièrement dans le sens du poil. Les marques d\'assise (crushing) sont normales — brosser à la vapeur. Le velours résiste bien à l\'usure si la qualité est bonne (Martindale > 30000 cycles).' }
          ],
          keyPoints: ['Le velours multiplie par 10 la perception de luxe d\'un meuble', 'Le velours côtelé large (jumbo cord) est le grand retour 2025-2026', 'Martindale > 30000 cycles pour un usage canapé quotidien', 'Les couleurs profondes sont la force du velours — ne pas le choisir en blanc', 'Velours + laiton = l\'association luxe universelle'],
          tips: ['Un canapé velours émeraude dans un salon neutre = point focal instantané', 'Pour un rendu contemporain (pas baroque), choisir un velours ras sur des formes simples', 'Les coussins velours sont le moyen le moins cher d\'ajouter du luxe — prévoir 50×50 cm minimum'],
          tags: ['textile', 'luxe', 'canapé', 'couleur', 'doux', 'élégant']
        },
        {
          id: 'laine-bouclee',
          category: 'Textiles',
          title: 'Laine Bouclée',
          subtitle: 'La texture cocooning',
          summary: 'Tissu à boucles non coupées d\'un confort visuel et tactile unique. La laine bouclée (bouclé) est devenue le textile signature du style contemporain-cocooning.',
          sections: [
            { title: 'Caractéristiques', content: 'Tissu dont les fils forment des boucles à la surface (non rasées, contrairement au velours). Texturé, organique, vivant. Peut être en pure laine, mélange laine-coton, ou synthétique. L\'aspect « moutonné » est sa signature. Épaisseur et densité des boucles varient : fin et serré (élégant) à gros et lâche (ultra-cosy).' },
            { title: 'Le phénomène bouclé en mobilier', content: 'Le tissu bouclé a explosé grâce au canapé Camaleonda de B&B Italia (1970, réédité 2020) et aux rééditions de pièces des années 70. Aujourd\'hui, le fauteuil bouclé crème est devenu un classique contemporain (Ligne Roset Ploum, Hay Quilton). Le bouclé est LE tissu du « quiet luxury » en mobilier.' },
            { title: 'Applications', content: 'Fauteuil et canapé (l\'usage phare). Pouf et ottoman. Chaise de salle à manger. Tête de lit. Coussins (texture contrastante sur un canapé lisse). Tapis (bouclé de laine — ex : moquette bouclée sisal-look). Banquette sur-mesure.' },
            { title: 'Entretien & choix', content: 'Fragile aux griffes (chats = ennemi n°1 du bouclé). Les boucles peuvent s\'accrocher et tirer. Aspirer délicatement. Nettoyage professionnel recommandé. Pour un usage intensif, privilégier un bouclé serré à petites boucles (plus résistant). Le blanc/crème est iconique mais salissant — le gris ou beige est plus réaliste.' }
          ],
          keyPoints: ['Le tissu du « quiet luxury » et du design organique 2020s', 'Attention absolue aux animaux domestiques — griffes + boucles = désastre', 'Le bouclé crème sur formes organiques = le combo le plus « Instagram » du moment', 'Préférer un bouclé à boucles serrées pour la durabilité', 'Le toucher est irrésistible — les clients veulent toujours toucher avant d\'acheter'],
          tips: ['Si le client a un chat, proposer un velours ras plutôt que du bouclé — être honnête', 'Un fauteuil bouclé crème + pieds laiton = pièce signature pour tout salon contemporain', 'Le bouclé en coussin 60×60 sur un canapé en lin = jeu de textures parfait et abordable'],
          tags: ['textile', 'bouclé', 'cocooning', 'fauteuil', 'tendance', 'organique']
        },

        // ──────────────────────────────
        // CÉRAMIQUE & CARRELAGE
        // ──────────────────────────────
        {
          id: 'gres-cerame',
          category: 'Céramique & Carrelage',
          title: 'Grès Cérame',
          subtitle: 'Le caméléon technique',
          summary: 'Carreau de céramique cuit à très haute température (1200°C+). Le grès cérame peut imiter n\'importe quel matériau (marbre, bois, béton, métal) avec une résistance et un prix imbattables.',
          sections: [
            { title: 'Fabrication & propriétés', content: 'Mélange d\'argile, quartz et feldspath pressé et cuit à 1200-1400°C. Absorption d\'eau <0,5% (quasi nul). Dureté : 5-8 Mohs. Résistant au gel, aux acides, aux taches, aux UV. Existe en pleine masse (teint dans la masse) ou émaillé (décor imprimé en surface). Formats : du 20×20 au 160×320 cm (dalles géantes).' },
            { title: 'Les imitations', content: 'Effet marbre : Calacatta, Carrare, Statuario — très convaincant. Effet bois : lames céramiques avec texture grain de bois — bluffant. Effet béton/ciment : le standard des sols contemporains. Effet métal (oxydé, rouillé). Effet pierre naturelle (ardoise, travertin). Effet terrazzo. La technologie d\'impression numérique rend les imitations de plus en plus réalistes.' },
            { title: 'Formats & poses', content: 'Grand format (60×120, 80×160, 120×120) : le plus contemporain, moins de joints. Format XXL (120×260, 160×320) : pour les plans de travail et les murs monolithiques. Lames (20×120, 30×120) : imitation parquet. Hexagonal : très tendance. Épaisseur standard : 9-10mm. Épaisseur réduite : 3-6mm (rénovation sur existant, mur, mobilier).' },
            { title: 'Prix & avantages', content: 'Entrée de gamme : 20-40€/m². Milieu de gamme : 40-80€/m². Haut de gamme (Mutina, Marazzi, Florim) : 80-150€/m². Pose : 30-60€/m². Entretien : quasi nul — balai, serpillière. Pas de traitement nécessaire. Le matériau le plus polyvalent et le plus économique pour les grandes surfaces.' }
          ],
          keyPoints: ['Le matériau le plus polyvalent de l\'architecture d\'intérieur', 'Imite presque tous les autres matériaux avec un entretien nul', 'Le grand format avec joints rectifiés (minimalistes) = rendu pierre naturelle', 'Le grès cérame XXL (3mm) peut se coller SUR un carrelage existant', 'Les marques italiennes (Marazzi, Florim, Mutina, Fiandre) sont la référence mondiale'],
          tips: ['Pour un effet marbre crédible, choisir du rectifié avec joint de 1,5mm maxi et coulis assorti', 'Le grès cérame effet bois au sol de salle de bain = le meilleur compromis beauté/praticité', 'Les dalles XXL 3mm se posent directement sur ancien carrelage — gain de temps et d\'épaisseur énorme en rénovation'],
          tags: ['carrelage', 'céramique', 'imitation', 'sol', 'résistant', 'économique']
        },
        {
          id: 'zellige',
          category: 'Céramique & Carrelage',
          title: 'Zellige',
          subtitle: 'L\'émail imparfait',
          summary: 'Carreau de terre cuite émaillé artisanal marocain. Le zellige séduit par ses irrégularités, ses variations de teinte et son éclat unique — l\'antithèse parfaite du carrelage industriel.',
          sections: [
            { title: 'Fabrication artisanale', content: 'Argile locale (Fès, Maroc) façonnée à la main, séchée au soleil, émaillée individuellement et cuite au four à bois. Chaque carreau est unique : épaisseur variable (10-12mm), surface ondulée, émail craquelé et irrégulier, variations de couleur naturelles. C\'est un produit 100% artisanal — et c\'est là sa beauté.' },
            { title: 'Format & couleurs', content: 'Format traditionnel : carré 10×10 cm (le plus iconique), 5×5, 2×2. Formats contemporains : 6,5×20 (briquette), 10×30, hexagone. Couleurs : blanc (le plus demandé), vert, bleu, terracotta, noir, rose, jaune safran. L\'émail est lustré naturellement — l\'éclat varie selon l\'angle de vue et la lumière.' },
            { title: 'Applications', content: 'Crédence de cuisine (l\'application star — 90% des demandes). Mur de salle de bain (douche, baignoire). Mur d\'accent. Dosseret derrière un plan de travail. Sol (possible mais fragile — préférer en mur). Cheminée. Niche décorative. Le zellige blanc en crédence cuisine est devenu un classique universel.' },
            { title: 'Prix & pose', content: 'Zellige marocain artisanal : 80-200€/m². Imitations industrielles : 30-60€/m². Pose : exige un carreleur patient — les irrégularités demandent un ajustement carreau par carreau. Joint : étroit (2-3mm) et de couleur assortie. Entretien : l\'émail est résistant mais les joints (non émaillés) sont poreux — traitement recommandé.' }
          ],
          keyPoints: ['L\'irrégularité est la beauté du zellige — si on veut du parfait, choisir autre chose', 'Le zellige blanc 10×10 en crédence cuisine est devenu un standard universel du design', 'Chaque carreau est unique — les variations de teinte sont NORMALES et souhaitées', 'La pose est plus longue qu\'un carrelage standard — prévoir le surcoût main d\'œuvre', 'Les imitations industrielles existent mais perdent 80% du charme'],
          tips: ['Mélanger intentionnellement des zelliges de différentes cuissons pour maximiser les variations', 'En crédence, le zellige vert + plan de travail bois + robinet laiton = le trio parfait', 'Commander des échantillons de plusieurs fournisseurs — la qualité varie énormément'],
          tags: ['carrelage', 'artisanal', 'Maroc', 'crédence', 'émaillé', 'irrégulier']
        },

        // ──────────────────────────────
        // MATÉRIAUX INNOVANTS
        // ──────────────────────────────
        {
          id: 'quartz-composite',
          category: 'Matériaux innovants',
          title: 'Quartz Composite',
          subtitle: 'L\'alternative technique',
          summary: 'Matériau composite de quartz broyé (93%) et résine (7%). Le quartz composite (Silestone, Caesarstone, Dekton) est l\'alternative la plus populaire aux pierres naturelles pour les plans de travail.',
          sections: [
            { title: 'Composition & fabrication', content: 'Quartz naturel broyé (93%) lié par résine polyester ou acrylique (7%). Fabriqué industriellement en dalles. Non poreux (absorption d\'eau quasi nulle). Couleur uniforme et répétable (contrairement à la pierre naturelle). Marques leaders : Silestone (Cosentino), Caesarstone, Compac, Dekton (ultra-compact, cuisson à 25000°C).' },
            { title: 'Propriétés', content: 'Dureté : 7 Mohs (comme le quartzite naturel). Non poreux — ne tache pas, n\'absorbe pas. Résistant aux rayures (mais pas inrayable). Résistant aux acides. Sensible à la chaleur (la résine fond à haute température — ne pas poser de casserole brûlante). Le Dekton est une évolution : surface ultra-compacte résistante aussi à la chaleur.' },
            { title: 'Applications', content: 'Plan de travail cuisine (80% des utilisations). Plan de vasque salle de bain. Crédence. Table. Appui de fenêtre. Bar et comptoir. Habillage de mobilier. Le quartz composite est le standard du plan de travail contemporain moyen-haut de gamme.' },
            { title: 'Prix & comparaison', content: 'Plan de travail posé : 200-500€/ml. Dekton : 300-600€/ml. Comparé au granit : prix similaire mais couleur uniforme. Comparé au marbre : beaucoup plus résistant, moins cher. Comparé au quartzite naturel : moins cher mais sans les veines uniques. Garantie fabricant : souvent 25 ans.' }
          ],
          keyPoints: ['Le matériau le plus utilisé pour les plans de travail contemporains', 'Non poreux = 0 entretien, 0 tache — argument massue pour les clients', 'Ne PAS poser de casserole brûlante dessus (sauf Dekton)', 'Couleur uniforme = avantage ou inconvénient selon les goûts (pas de veine unique)', 'Dekton = l\'évolution ultime — résiste aussi à la chaleur et aux UV'],
          tips: ['Pour un look marbre sans l\'entretien, le Silestone « Calacatta Gold » est bluffant', 'Toujours proposer Dekton pour un plan de travail autour de la plaque de cuisson', 'Le chant biseauté fin (2cm) est plus contemporain que le chant droit épais (4cm)'],
          tags: ['composite', 'quartz', 'plan de travail', 'cuisine', 'résistant', 'industriel']
        },
        {
          id: 'liege',
          category: 'Matériaux innovants',
          title: 'Liège',
          subtitle: 'L\'isolant décoratif',
          summary: 'Écorce du chêne-liège, récoltée sans abattre l\'arbre. Le liège est un matériau naturel aux propriétés exceptionnelles : isolant thermique, acoustique, hypoallergénique et 100% renouvelable.',
          sections: [
            { title: 'Propriétés', content: 'Isolant thermique (λ = 0.040 W/m.K — aussi performant que la laine de verre). Isolant acoustique (réduit les bruits d\'impact et aériens). Hypoallergénique et antibactérien. Hydrofuge naturel (subérine). Compressible et élastique — confort sous les pieds. Résistant au feu. 100% naturel, renouvelable et recyclable. Récolte tous les 9 ans sans abattre l\'arbre.' },
            { title: 'Applications en intérieur', content: 'Sol (parquet liège clipsable ou collé — doux et chaud sous les pieds). Mur (panneaux décoratifs et acoustiques). Panneau d\'affichage design (bureau, cuisine). Sous-couche acoustique (sous parquet). Isolation (murs et plafonds). Objets déco (lampes, tabourets, plateaux). Le liège est compatible avec le chauffage au sol.' },
            { title: 'Esthétique contemporaine', content: 'Longtemps associé au « rétro/années 70 », le liège vit un revival majeur. Panneaux muraux hexagonaux, dalles teintées (noir, gris, blanc), mobilier en liège massif (tabourets, tables — Jasper Morrison pour Vitra). Les designers portugais (Cork = Portugal) explorent les limites du matériau.' },
            { title: 'Prix & entretien', content: 'Sol liège : 30-60€/m² (comparable au parquet stratifié). Panneaux muraux décoratifs : 20-50€/m². Entretien sol : vitrification ou huilage, nettoyage simple. Durée de vie : 30-50 ans. Peut se poncer et revitrifier. Le Portugal produit 50% du liège mondial — filière durable et structurée.' }
          ],
          keyPoints: ['Triple fonction : décoratif + isolant thermique + isolant acoustique', 'Parfait sous les pieds — doux, chaud, silencieux', 'Compatible RE2020 — matériau biosourcé avec excellent bilan carbone', 'Revival design majeur — le liège n\'est plus « ringard »', 'Le Portugal est LE pays du liège — privilégier l\'origine portugaise'],
          tips: ['Des panneaux muraux liège derrière un bureau créent un mur acoustique + pense-bête design', 'Le sol liège en chambre d\'enfant = choix optimal (doux, chaud, amortissant, hypoallergénique)', 'Le liège teinté noir en panneau mural est spectaculaire et méconnu'],
          tags: ['naturel', 'isolant', 'acoustique', 'écologique', 'sol', 'mur']
        },
        {
          id: 'rotin-cannage',
          category: 'Matériaux innovants',
          title: 'Rotin & Cannage',
          subtitle: 'Le tressage organique',
          summary: 'Liane tropicale tressée (rotin) ou treillis de lanières végétales (cannage). Ces matériaux naturels apportent chaleur, texture et une touche organique incomparable.',
          sections: [
            { title: 'Rotin vs Cannage', content: 'Le rotin est une liane (Calamus rotang) : tige pleine et souple, se courbe pour former la structure des meubles. Le cannage est un treillis tissé de lanières d\'écorce de rotin ou de jonc : c\'est le « tissu » qui garnit les assises et les panneaux. Osier = saule tressé (similaire mais européen). Bambou = herbe creuse (différent).' },
            { title: 'Le grand revival', content: 'Le cannage est revenu massivement depuis 2019, porté par le style parisien-bohème et le retour des années 70. Les chaises Thonet cannées (1859) sont devenues des icônes intemporelles. Le cannage contemporain s\'utilise en porte de meuble, tête de lit, claustra, et abat-jour. C\'est le matériau du « chic décontracté ».' },
            { title: 'Applications', content: 'Mobilier : fauteuils, chaises, étagères, tables basses (rotin). Portes de placard et de meuble (cannage tendu). Tête de lit (panneau de cannage). Claustra / séparation de pièce (panneau de cannage dans cadre bois). Luminaires (suspension en rotin tressé). Miroir (cadre rotin). Cache-radiateur (cannage ventilé).' },
            { title: 'Entretien & durabilité', content: 'Le rotin est résistant mais craint l\'eau stagnante et le soleil direct prolongé. Dépoussiérer au pinceau. Humidifier légèrement 2x/an pour maintenir la souplesse. Le cannage se retend à la vapeur s\'il se détend. Prix : chaise cannée 100-500€. Panneau de cannage : 20-60€/m². Fabrication artisanale vs industrielle (Indonésie).' }
          ],
          keyPoints: ['Le cannage est redevenu un classique — pas une mode passagère', 'Rotin = structure, cannage = remplissage — deux matériaux différents', 'Le panneau de cannage est un DIY accessible pour transformer un meuble IKEA', 'Apporte de la texture et de l\'organicité à n\'importe quel intérieur', 'Les suspensions en rotin tressé sont les luminaires les plus chaleureux qui existent'],
          tips: ['Remplacer les portes pleines d\'un meuble par du cannage = transformation spectaculaire à petit prix', 'Le cannage en tête de lit + lin lavé + bois clair = chambre bohème-chic parfaite', 'En claustra de séparation, le cannage dans un cadre chêne crée une transparence douce et élégante'],
          tags: ['naturel', 'tressé', 'organique', 'mobilier', 'bohème', 'tendance']
        },
        {
          id: 'terre-crue',
          category: 'Matériaux innovants',
          title: 'Terre Crue',
          subtitle: 'Le matériau ancestral du futur',
          summary: 'La terre crue — pisé, torchis, adobe, enduit terre — est le matériau de construction le plus ancien au monde et le plus prometteur pour l\'architecture écologique de demain.',
          sections: [
            { title: 'Techniques principales', content: 'Pisé : terre compactée en couches dans un coffrage — murs massifs et sculpturaux. Adobe : briques de terre séchées au soleil. Torchis : terre + paille sur ossature (colombages). Enduit terre : revêtement mural en couche fine (5-15mm) — la technique la plus accessible en intérieur. Bauge : terre modelée en masse (tradition bretonne).' },
            { title: 'Propriétés exceptionnelles', content: 'Régulation hygrométrique naturelle (absorbe et restitue l\'humidité — taux idéal de 50-60%). Inertie thermique (fraîcheur en été, chaleur en hiver). Isolation acoustique. Assainit l\'air (absorbe les polluants). Aucune émission de COV. Bilan carbone quasi nul. Recyclable à 100% (c\'est de la terre).' },
            { title: 'Applications en intérieur contemporain', content: 'Enduit terre sur murs intérieurs (la plus accessible). Mur en pisé apparent (spectaculaire — couches de terre visibles). Cloison en brique de terre compressée (BTC). Mobilier en terre (banquettes intégrées, étagères sculptées). Sol en terre battue (stabilisée à la chaux). Le mur en pisé est devenu une signature dans l\'architecture contemporaine haut de gamme.' },
            { title: 'Mise en œuvre & prix', content: 'Enduit terre : 30-80€/m² posé (artisan spécialisé). Mur pisé : 150-400€/m² (construction neuve). Matériau : souvent gratuit ou très peu cher (terre locale). Main d\'œuvre : le coût principal. Artisans : réseau Craterre (Grenoble), ASTERRE. Formation possible (chantiers participatifs). Le séchage est lent (semaines) — planifier.' }
          ],
          keyPoints: ['Le meilleur régulateur d\'humidité existant — confort intérieur incomparable', 'Bilan carbone quasi nul — le matériau le plus écologique qui existe', 'L\'enduit terre est l\'application la plus accessible (rénovation)', 'Le mur en pisé apparent est devenu un objet de luxe et de design', 'Compatible et même moteur de la RE2020'],
          tips: ['Proposer un mur d\'accent en enduit terre argileuse (Tierrafino, Akterre) — texture et régulation d\'humidité', 'Le pisé + béton + verre = la trinité de l\'architecture contemporaine durable', 'Visiter un chantier terre (Craterre organise des formations) pour maîtriser le sujet — c\'est transformateur'],
          tags: ['naturel', 'écologique', 'terre', 'pisé', 'RE2020', 'artisanal']
        }
      ]
    },

    // ====================================
    // 3. COULEUR & LUMIÈRE
    // ====================================
    {
      id: 'couleur-lumiere',
      name: 'Couleur & Lumière',
      icon: '◑',
      color: '#C4956A',
      description: 'Théorie des couleurs, palettes harmonieuses, éclairage technique et ambiance lumineuse.',
      fiches: [
        {
          id: 'theorie-couleurs',
          title: 'Théorie des Couleurs',
          subtitle: 'Fondamentaux chromatiques',
          summary: 'Maîtriser la couleur est un superpouvoir en architecture d\'intérieur. Comprendre le cercle chromatique, les harmonies et la psychologie des couleurs change tout.',
          sections: [
            {
              title: 'Le cercle chromatique',
              content: 'Trois primaires (rouge, jaune, bleu), trois secondaires (orange, vert, violet), six tertiaires. Couleurs chaudes (rouge→jaune) : énergie, intimité. Couleurs froides (vert→violet) : calme, espace. Les neutres (blanc, gris, noir, beige) sont la toile de fond.'
            },
            {
              title: 'Les harmonies',
              content: 'Complémentaire : 2 couleurs opposées sur le cercle (bleu/orange) — contraste maximal. Analogique : 3 couleurs voisines (bleu-vert, vert, vert-jaune) — harmonie naturelle. Triadique : 3 couleurs équidistantes — équilibre dynamique. Monochrome : une seule teinte en variations — sophistication garantie.'
            },
            {
              title: 'La règle 60-30-10',
              content: 'Règle d\'or de la décoration : 60% couleur dominante (murs, sol, grands meubles), 30% couleur secondaire (rideaux, tapis, fauteuils), 10% couleur d\'accent (coussins, objets, œuvres). Cette proportion crée un équilibre visuel naturel et professionnel.'
            },
            {
              title: 'Psychologie des couleurs en intérieur',
              content: 'Bleu : calme, confiance — idéal chambres et bureaux. Vert : nature, équilibre — toutes les pièces. Rouge : énergie, appétit — touches en salle à manger. Jaune : optimisme — touches en cuisine. Rose poudré : douceur — chambres. Noir : sophistication — touches et contrastes. Blanc : lumière, espace — base universelle.'
            }
          ],
          keyPoints: [
            'Règle 60-30-10 = formule fiable pour tout projet',
            'Les couleurs chaudes rapprochent, les froides éloignent',
            'Toujours tester les couleurs in situ avec la lumière réelle de la pièce',
            'Le blanc pur (RAL 9010) est rarement le meilleur choix — préférer un blanc cassé',
            'La couleur du sol influence la perception de toutes les autres couleurs'
          ],
          tips: [
            'Peindre des échantillons A3 directement sur le mur et les observer matin, midi et soir avant de valider',
            'En cas de doute, le vert sauge est la couleur la plus sûre — elle fonctionne partout',
            'Un plafond légèrement plus clair que les murs (de 2 tons) donne une impression de hauteur'
          ],
          tags: ['couleur', 'palette', 'chromatic', 'harmonies', 'psychologie', 'fondamentaux']
        },
        {
          id: 'eclairage-technique',
          title: 'Éclairage Technique',
          subtitle: 'Kelvin, Lumen & Lux',
          summary: 'L\'éclairage fait ou défait un intérieur. Comprendre les unités, les types de sources et les techniques d\'implantation est fondamental.',
          sections: [
            {
              title: 'Les 3 unités essentielles',
              content: 'Kelvin (K) = température de couleur. 2700K = blanc chaud (cocooning). 3000K = blanc chaud neutre (le standard design). 4000K = blanc neutre (bureaux). 6500K = lumière du jour froide. Lumen (lm) = quantité de lumière émise. Lux (lx) = lumière reçue par surface (lm/m²).'
            },
            {
              title: 'Les 3 couches d\'éclairage',
              content: 'Éclairage général/ambiant : lumière uniforme d\'ensemble (plafonnier, spots encastrés, indirect). Éclairage fonctionnel/tâche : ciblé pour une activité (liseuse, sous-meuble cuisine, lampe de bureau). Éclairage d\'accent/décoratif : met en valeur (spots orientables, bandes LED, appliques).'
            },
            {
              title: 'Niveaux d\'éclairement recommandés',
              content: 'Salon : 150-300 lux (ambiant) + 500 lux (lecture). Cuisine : 300-500 lux (plan de travail). Chambre : 100-200 lux (ambiant) + 300 lux (chevet). Salle de bain : 300 lux (général) + 500 lux (miroir). Bureau : 500 lux minimum. Couloir : 100-150 lux.'
            },
            {
              title: 'Technologies actuelles',
              content: 'LED : standard absolu — 90% du marché. CRI (indice de rendu des couleurs) : viser >90 pour un intérieur qualitatif. Variateurs : indispensables dans toute pièce de vie. LED COB : lumière douce sans point lumineux visible. Bandes LED : révolution de l\'éclairage indirect. Smart lighting : Philips Hue, Casambi.'
            }
          ],
          keyPoints: [
            '3000K = la température de référence pour un intérieur résidentiel haut de gamme',
            'CRI >90 est non négociable pour un rendu des couleurs fidèle',
            'Toujours prévoir un variateur — TOUJOURS',
            'Les 3 couches d\'éclairage doivent coexister dans chaque pièce',
            'Les LED ne sont pas toutes égales — investir dans de la qualité'
          ],
          tips: [
            'Placer une bande LED en gorge (corniche lumineuse) pour un éclairage indirect haut de gamme à faible coût',
            'En cuisine, 4000K sous les meubles hauts (fonctionnel) + 2700K en suspension au-dessus de l\'îlot (ambiance)',
            'Un miroir rétro-éclairé en salle de bain élimine le besoin d\'appliques murales'
          ],
          tags: ['éclairage', 'LED', 'kelvin', 'lumen', 'technique', 'ambiance']
        },
        {
          id: 'palettes-tendance',
          title: 'Palettes Tendance 2025-2026',
          subtitle: 'Les harmonies du moment',
          summary: 'Les directions chromatiques majeures pour les projets actuels, des neutres apaisants aux accents audacieux.',
          sections: [
            {
              title: 'Warm Neutrals — La douceur terreuse',
              content: 'Palette : blanc cassé chaleureux, beige sable, taupe clair, caramel doux, brun chocolat. C\'est LA tendance majeure de 2025-2026. S\'applique à tous les types de projets. Fonctionne en ton-sur-ton pour une sophistication maximale. Références Farrow & Ball : Skimming Stone, Jitney, London Stone.'
            },
            {
              title: 'Green Sanctuary — Le retour du vert',
              content: 'Palette : vert sauge, vert olive, vert forêt, vert d\'eau. Le vert s\'impose dans toutes les pièces — cuisine, chambre, salle de bain. Associé au bois et au laiton, il crée des espaces apaisants et naturels. Références : Farrow & Ball Vert de Terre, Little Greene Sage Green, Ressource Émeraude.'
            },
            {
              title: 'Quiet Luxury — Le luxe silencieux',
              content: 'Palette : gris chaud, greige, pierre, champagne, or pâle. Inspirée par la mode « quiet luxury » (The Row, Loro Piana), cette palette transpose le raffinement discret dans l\'intérieur. Matière > couleur. Texture > motif. Peu de contrastes forts.'
            },
            {
              title: 'Bold Statements — L\'audace mesurée',
              content: 'Palette : bordeaux profond, bleu klein, vert bouteille, terracotta brûlée. Utilisée en accent (un mur, un meuble, un plafond) dans un écrin neutre. Le monochrome audacieux (une pièce entière en bleu nuit) revient en force dans les projets les plus expressifs.'
            }
          ],
          keyPoints: [
            'Warm Neutrals = tendance dominante et la plus sûre pour 2025-2026',
            'Le vert est la nouvelle couleur universelle',
            'Quiet Luxury = pour les clients haut de gamme discrets',
            'L\'audace fonctionne en dose contrôlée ou en immersion totale — pas entre les deux',
            'Toujours considérer l\'orientation de la pièce et la lumière naturelle pour choisir la palette'
          ],
          tips: [
            'Pour un salon nord (lumière froide), privilégier les warm neutrals pour compenser',
            'Le plafond peint dans la même couleur que les murs crée un effet « cocon » très demandé',
            'Créer un nuancier physique avec des échantillons de matériaux + peinture pour chaque projet'
          ],
          tags: ['palette', 'tendance', '2025', 'couleur', 'neutre', 'vert', 'audace']
        }
      ]
    },

    // ====================================
    // 4. ERGONOMIE & AGENCEMENT
    // ====================================
    {
      id: 'ergonomie',
      name: 'Ergonomie & Agencement',
      icon: '⊞',
      color: '#6B9E78',
      description: 'Les règles d\'or de la circulation, des proportions, de l\'anthropométrie et de l\'organisation des espaces.',
      fiches: [
        {
          id: 'regles-circulation',
          title: 'Règles de Circulation',
          subtitle: 'Flux & passages',
          summary: 'Un intérieur réussi se vit par le mouvement. Les règles de circulation déterminent le confort quotidien et la fluidité d\'un espace.',
          sections: [
            {
              title: 'Largeurs de passage minimales',
              content: 'Passage principal : 90 cm minimum (120 cm confort). Couloir : 90 cm minimum (80 cm toléré en rénovation). Passage entre meubles : 60 cm minimum. Dégagement devant un plan de travail : 120 cm (150 cm si 2 personnes). Porte standard : 83 cm (93 cm PMR). Escalier : 80 cm minimum entre rampes.'
            },
            {
              title: 'Le triangle d\'activité (cuisine)',
              content: 'Le principe fondamental de l\'agencement cuisine. Les trois pôles (froid/stockage, lavage/préparation, cuisson) forment un triangle dont le périmètre idéal est de 3,60 m à 6,60 m. Aucun côté ne doit dépasser 2,70 m. Aucun obstacle ne doit couper le triangle.'
            },
            {
              title: 'Distances relationnelles',
              content: 'Distance intime : <45 cm (lit, canapé d\'angle). Distance personnelle : 45-120 cm (coin salon, table à manger). Distance sociale : 120-360 cm (espace de réception). En salon, la distance idéale entre deux assises face-à-face est de 200-250 cm.'
            },
            {
              title: 'Hiérarchie des espaces',
              content: 'Espace de circulation > espace d\'activité > espace de rangement. Toujours préserver la circulation en priorité. Les espaces de passage ne doivent jamais traverser une zone d\'activité (ex : ne pas traverser le salon pour accéder à la cuisine). Créer des « zones tampon » entre espaces de natures différentes.'
            }
          ],
          keyPoints: [
            '90 cm = largeur de passage universel à mémoriser',
            'Triangle d\'activité cuisine : périmètre 3,60-6,60 m',
            'La circulation prime toujours sur la décoration',
            '120 cm devant un plan de travail est non négociable',
            'Un plan bien circulé se ressent physiquement — le client le sentira'
          ],
          tips: [
            'Tracer les flux de circulation sur plan avant de placer le moindre meuble',
            'Simuler les parcours quotidiens (lever → salle de bain → cuisine) pour optimiser',
            'En rénovation, une porte déplacée de 50 cm peut transformer toute la circulation'
          ],
          tags: ['circulation', 'ergonomie', 'plan', 'cuisine', 'passage', 'confort']
        },
        {
          id: 'anthropometrie',
          title: 'Anthropométrie',
          subtitle: 'Dimensions du corps humain',
          summary: 'Toutes les cotes essentielles du corps humain appliquées au mobilier et à l\'agencement intérieur. La base de tout projet fonctionnel.',
          sections: [
            {
              title: 'Hauteurs clés assise/debout',
              content: 'Assise : 45 cm (standard). Plan de travail cuisine : 85-92 cm (selon taille de l\'utilisateur). Table à manger : 74-76 cm. Bureau : 72-75 cm. Bar/comptoir : 105-110 cm. Tabouret de bar : 65-75 cm. Crédence cuisine : entre 50-60 cm (entre plan de travail et meuble haut).'
            },
            {
              title: 'Profondeurs & largeurs',
              content: 'Plan de travail : 60-65 cm de profondeur. Bureau : 60-80 cm. Table à manger : 85-100 cm (largeur). Place par convive : 60 cm minimum. Profondeur d\'assise confortable : 45-55 cm. Profondeur placard : 55-60 cm. Profondeur étagère : 25-35 cm selon usage.'
            },
            {
              title: 'Hauteurs murales',
              content: 'Centre d\'un tableau : 150 cm du sol (hauteur des yeux). Interrupteur : 110 cm du sol. Prise : 25-30 cm du sol (150 cm au-dessus du plan de travail en cuisine). Miroir salle de bain : centre à 165 cm. Étagères murales : première à 120-130 cm, espacement 30-35 cm.'
            },
            {
              title: 'La salle de bain',
              content: 'Vasque : 85 cm du sol (standard), 80 cm (enfant/PMR). Douche : 80×80 cm minimum, 90×90 cm confort. Baignoire standard : 170×70 cm. WC : 40 cm du mur latéral minimum, dégagement frontal 60 cm. Sèche-serviettes : 100-130 cm du sol.'
            }
          ],
          keyPoints: [
            '45 cm = hauteur d\'assise universelle',
            '85-92 cm = plan de travail cuisine (adapter à l\'utilisateur)',
            '150 cm = centre des tableaux (ligne des yeux)',
            '60 cm = espace par convive à table',
            'Ces cotes sont à connaître par cœur — elles reviennent dans chaque projet'
          ],
          tips: [
            'Pour un plan de travail personnalisé : coude de l\'utilisateur à 90° - 15 cm = hauteur idéale',
            'Prévoir des prises USB intégrées au plan de travail — c\'est devenu un standard de confort',
            'Les hauteurs PMR (plan de travail 80 cm, passage 150 cm) sont un bon guide pour l\'accessibilité universelle'
          ],
          tags: ['dimensions', 'corps', 'cotes', 'mobilier', 'hauteurs', 'fondamentaux']
        },
        {
          id: 'rangement',
          title: 'L\'Art du Rangement',
          subtitle: 'Storage design',
          summary: 'Le rangement est le nerf de la guerre en architecture d\'intérieur. Un espace magnifique sans rangement suffisant deviendra vite chaotique.',
          sections: [
            {
              title: 'Règle des 10%',
              content: 'Un logement bien conçu consacre 10% minimum de sa surface au rangement. Appartement 50m² = 5m² de rangement. Maison 120m² = 12m². Ce calcul inclut les placards, dressings, celliers, buanderies, coffres et meubles de rangement.'
            },
            {
              title: 'Types de rangement',
              content: 'Rangement fermé (placards, tiroirs) : pour le quotidien, le fonctionnel, le vrac. Rangement ouvert (étagères, niches) : pour les beaux objets, les livres, la décoration. Rangement caché (sous escalier, faux plafond, mobilier à double fonction) : pour maximiser l\'espace. La règle : 80% fermé, 20% ouvert.'
            },
            {
              title: 'Solutions par pièce',
              content: 'Entrée : placard avec tringle + étagères + tiroir. Cuisine : plan de travail dégagé = rangement suffisant. Chambre : dressing 2,5 m linéaire minimum par personne. Salle de bain : colonne + meuble vasque avec tiroirs. Salon : meuble TV avec rangement fermé + bibliothèque. Bureau : caisson + étagères murales.'
            },
            {
              title: 'Optimisation en petit espace',
              content: 'Hauteur sous plafond : exploiter jusqu\'à 2,40m+ avec meubles sur-mesure. Meubles multifonctions : lit coffre, banquette avec rangement, table extensible. Portes coulissantes (gain de débattement : 70-80 cm). Miroirs pour agrandir visuellement. Couleur unique mur-placards pour unifier.'
            }
          ],
          keyPoints: [
            '10% de la surface en rangement minimum',
            '80% fermé / 20% ouvert — règle d\'or',
            'Un plan de travail de cuisine dégagé = signe d\'un bon rangement',
            '2,5 m linéaire de dressing par personne',
            'Toujours anticiper les besoins futurs (famille qui grandit, changement de mode de vie)'
          ],
          tips: [
            'Un cellier/buanderie même minuscule (2m²) change la vie d\'un logement',
            'Les placards de 60 cm de profondeur avec tiroirs intérieurs sont plus efficaces que les 90 cm avec étagères',
            'En rénovation, le premier réflexe : identifier les « murs morts » transformables en rangement'
          ],
          tags: ['rangement', 'placard', 'dressing', 'optimisation', 'petit espace', 'organisation']
        }
      ]
    },

    // ====================================
    // 5. NORMES & RÉGLEMENTATIONS
    // ====================================
    {
      id: 'normes',
      name: 'Normes & Réglementations',
      icon: '⊡',
      color: '#7A8B9E',
      description: 'DTU, accessibilité PMR, normes électriques, sécurité incendie et réglementation thermique.',
      fiches: [
        {
          id: 'accessibilite-pmr',
          title: 'Accessibilité PMR',
          subtitle: 'Personnes à Mobilité Réduite',
          summary: 'L\'accessibilité n\'est pas une option — c\'est une obligation légale et un impératif éthique. Maîtriser les normes PMR est indispensable pour tout architecte d\'intérieur.',
          sections: [
            {
              title: 'Cadre légal',
              content: 'Loi du 11 février 2005 pour l\'égalité des droits et des chances. Obligation d\'accessibilité pour tous les ERP (Établissements Recevant du Public). En logement neuf : toutes les unités de vie doivent être accessibles ou adaptables. En rénovation : obligation lors de travaux importants.'
            },
            {
              title: 'Dimensions clés',
              content: 'Porte : 90 cm minimum de passage utile. Couloir : 120 cm (140 cm pour croisement de 2 fauteuils). Aire de rotation fauteuil : 150 cm de diamètre. Rampe d\'accès : pente max 5% (tolérance 8% sur 2m). Hauteur de commande : entre 90 et 130 cm. WC : 80 cm du mur latéral, barre d\'appui à 70-80 cm.'
            },
            {
              title: 'Salle de bain PMR',
              content: 'Douche à l\'italienne sans ressaut (ou max 2 cm avec chanfrein). Espace de transfert latéral à la douche et au WC. Lavabo sans meuble dessous (passage des jambes du fauteuil). Siège de douche rabattable à 45-50 cm. Barre d\'appui horizontale + verticale. Mitigeur thermostatique avec butée à 38°C.'
            },
            {
              title: 'Design inclusif (au-delà de la norme)',
              content: 'Le design inclusif va plus loin que la conformité. C\'est concevoir des espaces beaux ET accessibles. Exemples : douche à l\'italienne comme choix esthétique (pas seulement PMR). Poignées de porte à levier (plus élégantes que les boutons). Éclairage progressif pour les malvoyants. Contrastes visuels intégrés au design.'
            }
          ],
          keyPoints: [
            '150 cm de diamètre = aire de rotation à mémoriser absolument',
            '90 cm de passage de porte minimum',
            'La douche à l\'italienne résout l\'accessibilité ET l\'esthétique',
            'L\'accessibilité concerne aussi les personnes âgées, les parents avec poussette, etc.',
            'Un bon design est accessible par défaut, pas par adaptation'
          ],
          tips: [
            'Proposer systématiquement la douche à l\'italienne — c\'est devenu le standard esthétique ET PMR',
            'Les barres d\'appui design existent (inox brossé, noir mat) — plus besoin de barres hospitalières',
            'En résidentiel, toujours prévoir au moins 1 salle d\'eau accessible au RDC'
          ],
          tags: ['PMR', 'accessibilité', 'loi', 'dimensions', 'salle de bain', 'inclusif']
        },
        {
          id: 'normes-electriques',
          title: 'Normes Électriques NF C 15-100',
          subtitle: 'Installation électrique',
          summary: 'La norme NF C 15-100 régit toutes les installations électriques dans les logements en France. Connaître ses exigences minimales est indispensable pour tout projet.',
          sections: [
            {
              title: 'Nombre de points par pièce (minimum)',
              content: 'Séjour : 1 point d\'éclairage + 5 prises (>20m² : 7 prises) + 1 prise communication. Chambre : 1 éclairage + 3 prises + 1 prise communication. Cuisine : 1 éclairage + 6 prises dont 4 au-dessus du plan de travail. Salle de bain : 1 éclairage + 1 prise (hors volume). WC : 1 éclairage. Couloir : 1 éclairage + 1 prise.'
            },
            {
              title: 'Volumes en salle de bain',
              content: 'Volume 0 (dans la baignoire/douche) : seul TBTS 12V autorisé (IPX7). Volume 1 (au-dessus baignoire/douche, 2,25m de haut) : luminaire TBTS, chauffe-eau (IPX5). Volume 2 (60 cm autour du volume 1) : luminaire IP44, rasoir. Hors volume : toutes prises et appareils avec différentiel 30mA.'
            },
            {
              title: 'Tableau électrique',
              content: 'Différentiel 30mA obligatoire sur tous les circuits. 1 interrupteur différentiel type A (pour plaques et lave-linge). 1+ interrupteur différentiel type AC. Parafoudre obligatoire dans certaines zones. GTL (Gaine Technique Logement) obligatoire à l\'entrée. Espace libre de 20% dans le tableau pour évolutions futures.'
            },
            {
              title: 'Bonnes pratiques au-delà de la norme',
              content: 'Prévoir plus de prises que le minimum (on en manque toujours). Prises USB intégrées au plan de travail et aux chevets. Interrupteurs design aux finitions coordonnées (Legrand Céliane, Schneider Odace, Meljac). Domotique : prévoir le câblage même si pas installé immédiatement. Variateurs sur tous les éclairages de pièces de vie.'
            }
          ],
          keyPoints: [
            'NF C 15-100 = la norme de référence pour toute installation résidentielle',
            'Les volumes de salle de bain sont la partie la plus critique',
            'Toujours prévoir 30% de prises en plus du minimum normatif',
            'Différentiel 30mA obligatoire partout',
            'Les interrupteurs et prises sont des éléments de design à part entière'
          ],
          tips: [
            'Placer les interrupteurs du même côté que la poignée de porte (du côté qui ouvre)',
            'En rénovation, le passage de câbles en plinthes techniques évite de casser les murs',
            'Prévoir un circuit dédié pour un futur chargeur de véhicule électrique (même sans borne)'
          ],
          tags: ['électricité', 'norme', 'prise', 'sécurité', 'salle de bain', 'installation']
        },
        {
          id: 'reglementation-thermique',
          title: 'Réglementation Thermique RE2020',
          subtitle: 'Performance énergétique',
          summary: 'La RE2020 (Réglementation Environnementale 2020) impose des exigences de performance énergétique et environnementale qui impactent directement les choix en intérieur.',
          sections: [
            {
              title: 'Principes de la RE2020',
              content: 'Entrée en vigueur le 1er janvier 2022, la RE2020 remplace la RT2012. Trois objectifs : réduire la consommation énergétique (sobriété + efficacité), diminuer l\'empreinte carbone de la construction, et garantir le confort en été sans climatisation. Elle impacte matériaux, isolation, vitrages et systèmes.'
            },
            {
              title: 'Impact sur l\'architecture d\'intérieur',
              content: 'Isolation renforcée = murs plus épais (perte de surface habitable à compenser). Ventilation double flux quasi obligatoire (à intégrer dans le design). VMC design ou gaines techniques discrètes. Poêle à bois/granulés comme complément chauffage (intégration esthétique). Menuiseries haute performance = profilés plus fins = plus de lumière.'
            },
            {
              title: 'Matériaux biosourcés',
              content: 'La RE2020 favorise les matériaux à faible empreinte carbone. Isolation : fibre de bois, ouate de cellulose, laine de chanvre (vs laine de verre/roche). Structure : bois (CLT, ossature bois). Finitions : peintures biosourcées, enduits à la chaux, liège. Ces choix ont un impact direct sur l\'ambiance intérieure.'
            },
            {
              title: 'Confort d\'été',
              content: 'La RE2020 impose un seuil de confort d\'été (DH ≤ 1250°C.h). Solutions architecturales : brise-soleil, stores extérieurs, casquettes solaires. Solutions intérieures : matériaux à inertie thermique (pierre, béton, terre crue), ventilation naturelle traversante, volets intérieurs isolants, couleurs claires en toiture.'
            }
          ],
          keyPoints: [
            'RE2020 = obligation pour tout permis de construire depuis 2022',
            'Les matériaux biosourcés deviennent la norme, pas l\'exception',
            'Le confort d\'été est aussi important que l\'isolation hivernale',
            'L\'architecte d\'intérieur doit dialoguer avec le thermicien',
            'Les choix de matériaux intérieurs impactent le bilan carbone global'
          ],
          tips: [
            'Proposer du liège décoratif en panneau mural — il est isolant thermique ET acoustique ET tendance',
            'Intégrer un poêle à bois ou granulés comme élément central du design (pas dans un coin)',
            'Les enduits à la chaux (tadelakt, stuc) sont RE2020-compatibles et magnifiques'
          ],
          tags: ['thermique', 'RE2020', 'isolation', 'énergie', 'biosourcé', 'réglementation']
        }
      ]
    },

    // ====================================
    // 6. OUTILS & LOGICIELS
    // ====================================
    {
      id: 'outils',
      name: 'Outils & Logiciels',
      icon: '⊟',
      color: '#9E6B8B',
      description: 'Maîtriser les logiciels de conception, rendu 3D, présentation et gestion de projet.',
      fiches: [
        {
          id: 'sketchup',
          title: 'SketchUp',
          subtitle: 'Modélisation 3D intuitive',
          summary: 'Le logiciel de modélisation 3D le plus accessible et le plus utilisé par les architectes d\'intérieur. Idéal pour la conception rapide et la communication client.',
          sections: [
            {
              title: 'Pourquoi SketchUp',
              content: 'Interface intuitive (courbe d\'apprentissage la plus courte du marché). Modélisation en « push/pull » — dessiner en 2D, extruder en 3D. Immense bibliothèque de composants (3D Warehouse : millions d\'objets gratuits). Export vers la plupart des logiciels de rendu. Version Web gratuite disponible.'
            },
            {
              title: 'Workflow type',
              content: 'Importer un plan 2D (DWG/PDF) → tracer les murs → extruder en 3D → placer les menuiseries → meubler via 3D Warehouse → appliquer les matériaux → créer des scènes (vues) → exporter vers V-Ray ou Enscape pour rendu photoréaliste.'
            },
            {
              title: 'Extensions indispensables',
              content: 'V-Ray for SketchUp : rendu photoréaliste professionnel. Enscape : rendu temps réel + VR. Profile Builder : menuiseries et moulures paramétriques. Curic Space : analyse des surfaces automatique. FlexTools : portes et fenêtres paramétriques. Layout : mise en page de planches de présentation.'
            },
            {
              title: 'Versions & prix',
              content: 'SketchUp Free (web) : gratuit, limité. SketchUp Go : 119$/an, mobile + web. SketchUp Pro : 349$/an, complet. SketchUp Studio : 749$/an, inclut V-Ray. Pour un architecte d\'intérieur, SketchUp Pro est le minimum recommandé.'
            }
          ],
          keyPoints: [
            'Outil n°1 des architectes d\'intérieur indépendants',
            'Courbe d\'apprentissage la plus rapide du marché 3D',
            '3D Warehouse = bibliothèque de mobilier gigantesque',
            'V-Ray ou Enscape transforment les modèles en rendus photoréalistes',
            'SketchUp Pro + V-Ray = combo professionnel le plus courant'
          ],
          tips: [
            'Investir 2 semaines d\'apprentissage intensif suffit pour devenir opérationnel',
            'Toujours modéliser à l\'échelle 1:1 — ne jamais mettre à l\'échelle après coup',
            'Créer sa propre bibliothèque de composants favoris = gain de temps énorme sur chaque projet'
          ],
          tags: ['3D', 'modélisation', 'logiciel', 'design', 'rendu', 'présentation']
        },
        {
          id: 'moodboard',
          title: 'L\'Art du Moodboard',
          subtitle: 'Communication visuelle',
          summary: 'Le moodboard est l\'outil de communication n°1 avec le client. Bien réalisé, il aligne les visions et évite les malentendus avant même de dessiner.',
          sections: [
            {
              title: 'Qu\'est-ce qu\'un moodboard professionnel',
              content: 'Un moodboard (planche d\'ambiance) est une composition visuelle qui communique l\'esprit d\'un projet. Il réunit images d\'inspiration, échantillons de matériaux, palette de couleurs et références de mobilier. C\'est un outil de communication, pas de décoration.'
            },
            {
              title: 'Contenu d\'un moodboard efficace',
              content: 'Image d\'ambiance principale (1 grande photo qui donne le ton). 3-5 images secondaires (détails, textures, espaces similaires). Palette de couleurs (5-7 couleurs avec références). Échantillons matériaux (bois, tissu, pierre). Sélection de mobilier clé (2-3 pièces). Éclairage de référence. Police/typographie si branding.'
            },
            {
              title: 'Outils de création',
              content: 'Canva Pro : le plus accessible, templates professionnels. Adobe InDesign : le standard pour les planches haute qualité. Figma : collaboratif, excellent pour les présentations. Milanote : outil dédié aux moodboards créatifs. Pinterest : recherche d\'inspiration (mais pas de création). Physique : carton + échantillons réels = impact maximal en rendez-vous client.'
            },
            {
              title: 'Méthodologie de présentation',
              content: 'Présenter en personne si possible (l\'écran ne rend pas les textures). Commencer par le concept en mots avant de montrer les images. Hiérarchiser : ambiance globale → matériaux → mobilier → détails. Ne jamais présenter plus de 2 directions différentes (choix cornélien = paralysie du client). Laisser le moodboard imprimé au client après la présentation.'
            }
          ],
          keyPoints: [
            'Le moodboard aligne la vision — il prévient 80% des malentendus',
            '1 image d\'ambiance forte > 10 petites images',
            'Les échantillons physiques sont irremplaçables pour les matériaux',
            'Maximum 2 propositions de direction — pas plus',
            'Le moodboard précède tout dessin technique'
          ],
          tips: [
            'Créer un moodboard en 30 min max — si ça prend plus longtemps, le concept n\'est pas clair',
            'Toujours inclure une image « c\'est exactement pas ça » pour clarifier les limites',
            'Photographier les échantillons matériaux en lumière naturelle pour le rendu le plus fidèle'
          ],
          tags: ['moodboard', 'présentation', 'client', 'ambiance', 'communication', 'outils']
        }
      ]
    },

    // ====================================
    // 7. GESTION DE PROJET
    // ====================================
    {
      id: 'gestion-projet',
      name: 'Gestion de Projet',
      icon: '⊞',
      color: '#6B7A9E',
      description: 'De la première rencontre à la livraison : phases de projet, relation client, chiffrage et suivi de chantier.',
      fiches: [
        {
          id: 'phases-projet',
          category: 'Méthodologie',
          title: 'Les Phases d\'un Projet',
          subtitle: 'Du brief à la livraison',
          summary: 'Un projet d\'architecture d\'intérieur suit un déroulement précis en phases distinctes. Les connaître et les respecter est la clé d\'un projet réussi.',
          sections: [
            {
              title: 'Phase 1 — Étude préliminaire (ESQ)',
              content: 'Durée : 1-2 semaines. Rencontre client, visite du lieu, prise de cotes, analyse du brief (besoins, budget, délais, goûts). Production du relevé de l\'existant. Première intention de projet : esquisses, moodboards, 2-3 orientations possibles. Livrable : dossier d\'esquisse + estimation budgétaire macro.'
            },
            {
              title: 'Phase 2 — Avant-Projet (APS/APD)',
              content: 'Durée : 2-4 semaines. Développement de la direction validée. Plans d\'aménagement détaillés, élévations, coupes. Sélection des matériaux et finitions. Recherche de mobilier. Premiers rendus 3D. Chiffrage détaillé. Livrable : dossier complet de projet avec plans, 3D, carnets de matériaux et budget.'
            },
            {
              title: 'Phase 3 — Dossier d\'Exécution (PRO/DCE)',
              content: 'Durée : 2-4 semaines. Plans techniques pour les artisans (menuisier, électricien, plombier, carreleur). Détails de fabrication, calepinages. Consultation des entreprises, analyse des devis, négociation. Livrable : cahier des charges technique, planning prévisionnel, devis validés.'
            },
            {
              title: 'Phase 4 — Suivi de Chantier',
              content: 'Durée : variable (1 semaine à 6 mois selon projet). Coordination des corps de métier. Visites de chantier régulières (1-2x/semaine). Vérification de conformité. Gestion des imprévus et ajustements. Réception des ouvrages. Livrable : PV de réception + dossier de livraison (notices d\'entretien, contacts artisans).'
            }
          ],
          keyPoints: [
            'Chaque phase se conclut par une validation client avant passage à la suivante',
            'Le brief client est le document le plus important — ne jamais bâcler cette étape',
            'Le chiffrage réaliste en phase 1 évite 90% des problèmes',
            'Le suivi de chantier représente 30-40% du temps total d\'un projet',
            'Facturer chaque phase séparément protège l\'architecte d\'intérieur'
          ],
          tips: [
            'Créer un questionnaire client standardisé (mode de vie, budget, inspirations) à envoyer avant la première rencontre',
            'Toujours ajouter 10-15% de marge au budget pour les imprévus',
            'Documenter chaque visite de chantier par photos + compte-rendu écrit'
          ],
          tags: ['projet', 'phases', 'client', 'chantier', 'organisation', 'méthodologie']
        },
        {
          id: 'brief-client',
          category: 'Méthodologie',
          title: 'Le Brief Client',
          subtitle: 'L\'art de poser les bonnes questions',
          summary: 'Le brief est le fondement de tout projet. Un brief mal fait = un projet bancal. Voici comment structurer cette étape cruciale et extraire les vraies attentes du client.',
          sections: [
            {
              title: 'Avant la rencontre — Le pré-questionnaire',
              content: 'Envoyer un questionnaire 3-5 jours avant le rendez-vous. Questions essentielles : combien de personnes vivent dans le lieu ? Animaux ? Travail à domicile ? Loisirs ? Objets à intégrer obligatoirement ? Budget global envisagé ? Inspirations (demander 10 images Pinterest/Instagram). Cela permet de préparer la rencontre et de ne pas perdre de temps sur le basique.'
            },
            {
              title: 'Pendant la rencontre — Les questions profondes',
              content: 'Au-delà du fonctionnel, creuser le mode de vie. Comment se passe votre matinée type ? Où vous installez-vous le soir ? Recevez-vous beaucoup ? Cuisinez-vous ensemble ? Quelles pièces ne fonctionnent pas actuellement et POURQUOI ? Quel hôtel/restaurant vous a marqué ? Ce sont ces réponses qui font la différence entre un projet correct et un projet exceptionnel.'
            },
            {
              title: 'Le brief visuel — Moodboard collaboratif',
              content: 'Créer un moodboard avec le client pendant ou juste après la rencontre. Pinterest partagé ou présentation physique. Identifier les récurrences : si le client choisit 8 images avec du bois chaleureux et des tons neutres, le message est clair. Attention aux contradictions (budget serré mais inspirations luxe) — les pointer avec diplomatie.'
            },
            {
              title: 'La synthèse de brief',
              content: 'Rédiger un document de synthèse de 2-3 pages maximum. Résumé des besoins fonctionnels, contraintes techniques, budget, planning, ambiance souhaitée. Faire valider et signer par le client. Ce document devient la référence en cas de désaccord. « C\'est dans le brief » est votre meilleure protection.'
            }
          ],
          keyPoints: [
            'Le brief est un document SIGNÉ, pas une discussion informelle',
            'Les questions sur le mode de vie sont plus importantes que les questions sur le style',
            'Un client ne sait pas toujours ce qu\'il veut — c\'est à vous de l\'aider à le formuler',
            'Les images d\'inspiration révèlent plus que les mots',
            'Pointer les contradictions budget/ambition dès le brief, pas en cours de projet'
          ],
          tips: [
            'Enregistrer la conversation (avec accord) pour ne rien oublier',
            'Prendre des photos du lieu existant sous tous les angles pendant la visite',
            'Demander au client de vivre 1 semaine en notant ce qui le gêne chez lui — retours précieux'
          ],
          tags: ['brief', 'client', 'questionnaire', 'moodboard', 'méthodologie', 'démarrage']
        },
        {
          id: 'releve-existant',
          category: 'Méthodologie',
          title: 'Le Relevé de l\'Existant',
          subtitle: 'Mesurer avant de concevoir',
          summary: 'Un relevé précis est la base technique de tout projet. Erreur de 2 cm = meuble qui ne rentre pas. Voici la méthode pour un relevé fiable.',
          sections: [
            {
              title: 'Le matériel nécessaire',
              content: 'Indispensable : télémètre laser (Bosch GLM 50 C ou Leica Disto — 100-200€), mètre ruban 5m, carnet quadrillé A3, crayon + gomme. Recommandé : niveau laser, détecteur de matériaux (pour localiser les poteaux/gaines), appareil photo. Pro : Leica BLK360 (scanner 3D) — investissement important mais gain de temps énorme sur les gros projets.'
            },
            {
              title: 'Méthode de relevé étape par étape',
              content: '1) Croquis général à main levée du plan (ne pas dessiner à l\'échelle, juste les proportions). 2) Coter toutes les longueurs de murs. 3) Coter les ouvertures (largeur, hauteur, distance au mur). 4) Coter les hauteurs sous plafond (attention aux faux-plafonds). 5) Repérer les arrivées d\'eau, évacuations, prises, interrupteurs. 6) Photographier chaque mur. 7) Vérifier les diagonales (un mur qui semble droit peut être trapézoïdal).'
            },
            {
              title: 'Les pièges classiques',
              content: 'Les murs ne sont jamais parfaitement droits ni d\'équerre — toujours vérifier. Les hauteurs sous plafond varient souvent dans un même appartement ancien. Les plans de copropriété sont souvent approximatifs — NE JAMAIS s\'y fier aveuglément. Les gaines techniques (VMC, colonnes d\'eau) créent des contraintes invisibles. Les planchers anciens ne sont jamais de niveau.'
            },
            {
              title: 'Du relevé au plan numérique',
              content: 'Retranscrire dans AutoCAD, SketchUp ou Archicad le jour même (tant que la mémoire est fraîche). Mettre le plan à l\'échelle 1:50 (standard). Indiquer le nord, les cotes, les niveaux. Ajouter une légende (existant vs projet). Conserver le croquis papier original — il peut sauver en cas de doute.'
            }
          ],
          keyPoints: [
            'Toujours vérifier les cotes en croix (diagonales) — c\'est ce qui révèle les murs pas d\'équerre',
            'Le télémètre laser est l\'investissement n°1 pour un architecte d\'intérieur',
            'Ne jamais se fier aux plans existants sans vérification sur site',
            'Photographier TOUT — vous y reviendrez 10 fois depuis votre bureau',
            'Retranscrire le relevé en numérique dans les 24h'
          ],
          tips: [
            'Développer un template de relevé standardisé à imprimer (grille avec checklist)',
            'Mesurer les épaisseurs de murs aussi — important pour la menuiserie sur-mesure',
            'Scanner 3D : le Leica BLK360 se loue à la journée (~200€) pour les gros projets'
          ],
          tags: ['relevé', 'mesures', 'technique', 'plans', 'méthodologie', 'outils']
        },
        {
          id: 'moodboard-pro',
          category: 'Méthodologie',
          title: 'Créer un Moodboard Pro',
          subtitle: 'Communiquer une ambiance',
          summary: 'Le moodboard est votre outil de communication n°1 avec le client. Il traduit les mots en images et permet de valider une direction avant de dessiner un seul plan.',
          sections: [
            {
              title: 'Anatomie d\'un bon moodboard',
              content: 'Un moodboard pro contient : 1 image d\'ambiance dominante (le hero shot), 3-5 images d\'espaces inspirants, 4-6 échantillons matériaux/textures, 2-3 références mobilier clé, 1 palette couleur (5 teintes max). Le tout sur un fond neutre (blanc ou gris clair). Maximum 15 éléments — au-delà, c\'est du bruit.'
            },
            {
              title: 'Les erreurs à éviter',
              content: 'Trop d\'images (le client se perd). Des images de styles contradictoires. Des images trop « magazine » que le budget ne permet pas. Pas de matériaux réels (ajouter des échantillons physiques si possible). Un moodboard qui ne raconte pas une histoire cohérente. Copier-coller Pinterest sans curation personnelle.'
            },
            {
              title: 'Outils de création',
              content: 'Adobe InDesign : le standard pro, mise en page maîtrisée. Canva Pro : rapide, templates, collaboration facile. Figma : moderne, collaboratif, précis. Keynote/PowerPoint : pour les présentations client animées. Physique : carton mousse + impressions + échantillons réels — très impactant en clientèle. Milanote : outil en ligne spécialisé moodboards créatifs.'
            },
            {
              title: 'Présenter le moodboard au client',
              content: 'Toujours présenter EN PERSONNE ou en visio — jamais envoyer par email sans explication. Raconter l\'histoire : « Imaginez que vous rentrez chez vous... ». Guider le regard du client. Demander des retours structurés : qu\'est-ce qui vous parle ? Qu\'est-ce qui vous gêne ? Valider formellement avant de passer aux plans.'
            }
          ],
          keyPoints: [
            'Un moodboard n\'est pas un collage Pinterest — c\'est un outil de communication professionnel',
            'Maximum 15 éléments — chaque élément doit être là pour une raison',
            'Toujours inclure des textures/matériaux, pas seulement des images d\'espaces',
            'Présenter en personne et RACONTER l\'histoire',
            'Le moodboard validé = le contrat moral sur la direction esthétique'
          ],
          tips: [
            'Créer un template de moodboard réutilisable avec votre identité visuelle',
            'Amener des échantillons physiques (bois, pierre, tissu) en complément — toucher > voir',
            'Faire 2 moodboards (2 directions) pour le premier rendez-vous — le client se sent impliqué dans le choix'
          ],
          tags: ['moodboard', 'présentation', 'client', 'ambiance', 'communication', 'design']
        },
        {
          id: 'honoraires',
          category: 'Business',
          title: 'Honoraires & Tarification',
          subtitle: 'Combien facturer',
          summary: 'La question que tout architecte d\'intérieur se pose. Tour d\'horizon des méthodes de tarification, des fourchettes de prix et des bonnes pratiques.',
          sections: [
            {
              title: 'Les modes de facturation',
              content: 'Au pourcentage du montant des travaux : 8-15% (le plus courant pour les gros projets). Au forfait par phase : montant fixe par étape. Au m² : 50-200€/m² selon complexité. À l\'heure : 80-150€/h (plus rare, surtout pour le conseil). Mixte : forfait pour le design + % pour le suivi de chantier.'
            },
            {
              title: 'Fourchettes de marché (France, 2025)',
              content: 'Conseil/coaching déco : 150-400€ la session (2-3h). Projet complet appartement : 5000-25000€. Projet complet maison : 15000-60000€. Projet commercial (restaurant, boutique) : 10000-80000€. Suite hôtelière : 8000-40000€/chambre. Le prix dépend de la notoriété, de la localisation et de la complexité.'
            },
            {
              title: 'Structure de paiement',
              content: 'Acompte à la signature : 30%. Validation de l\'avant-projet : 30%. Lancement des travaux : 20%. Réception du chantier : 20%. Toujours formaliser par un contrat signé avec échéancier. Conditions de paiement : 30 jours. Pénalités de retard légales.'
            },
            {
              title: 'Valoriser ses honoraires',
              content: 'Un bon architecte d\'intérieur fait économiser de l\'argent au client (évite les erreurs coûteuses, négocie les prix artisans, optimise les surfaces). Communiquer cette valeur. Montrer le ROI : un logement bien conçu prend 15-25% de valeur. Se spécialiser augmente la valeur perçue et les honoraires.'
            }
          ],
          keyPoints: [
            '8-15% du montant des travaux = la norme pour un projet complet',
            'Toujours formaliser par un contrat avant de commencer',
            '30-30-20-20 = structure de paiement sécurisante',
            'Se spécialiser (hôtellerie, restaurant, luxe) permet de facturer plus cher',
            'Les honoraires reflètent la valeur, pas le temps passé'
          ],
          tips: [
            'Créer un contrat type solide avec un avocat — c\'est un investissement de 500€ qui protège des milliers',
            'Présenter les honoraires APRÈS avoir montré la valeur (portfolio, témoignages, expertise)',
            'Ne jamais commencer à travailler sans acompte — jamais'
          ],
          tags: ['honoraires', 'prix', 'business', 'contrat', 'facturation', 'métier']
        },
        {
          id: 'budget-chiffrage',
          category: 'Business',
          title: 'Budget & Chiffrage',
          subtitle: 'Estimer juste, livrer dans le budget',
          summary: 'Le chiffrage est l\'exercice le plus redouté et le plus important. Un budget mal estimé détruit la confiance du client. Voici comment chiffrer avec précision.',
          sections: [
            {
              title: 'Les ratios de base au m²',
              content: 'Rénovation légère (peinture, sols, luminaires) : 400-800€/m². Rénovation moyenne (cuisine, salle de bain, redistribution légère) : 800-1500€/m². Rénovation lourde (tout casser, tout refaire) : 1500-2500€/m². Haut de gamme/luxe : 2500-5000€/m². Ultra-luxe : 5000-10000€/m². Ces ratios sont pour Paris — déduire 15-30% en province.'
            },
            {
              title: 'Décomposition d\'un budget type',
              content: 'Gros œuvre / structure : 10-20%. Plomberie : 10-15%. Électricité : 8-12%. Menuiserie sur-mesure : 15-25%. Sols (pose + matériaux) : 10-15%. Peinture / enduits : 5-10%. Mobilier : 15-30%. Luminaires : 5-10%. Décoration / accessoires : 5-10%. Honoraires architecte d\'intérieur : 8-15% du total. Imprévus : 10-15%.'
            },
            {
              title: 'Construire un chiffrage détaillé',
              content: 'Lister TOUS les postes (utiliser un template Excel/Notion). Pour chaque poste : quantité × prix unitaire. Demander 2-3 devis par corps de métier. Ajouter la marge imprévus (10% minimum, 15% en rénovation ancien). Présenter au client par tranches : « fourchette basse si on reste simple, fourchette haute si on va loin ». Toujours chiffrer TTC — c\'est ce que le client paie.'
            },
            {
              title: 'Les pièges qui font exploser le budget',
              content: 'L\'ancien cache toujours des surprises (plomberie vétuste, amiante, murs pas droits). Le client qui change d\'avis en cours de chantier — chiffrer les avenants immédiatement. Les délais de livraison mobilier/matériaux sous-estimés (container bloqué = surcoût). La TVA (10% rénovation vs 20% neuf — vérifier l\'éligibilité). Les frais de parking, benne, ascenseur pour livraison en ville.'
            }
          ],
          keyPoints: [
            'Toujours donner une FOURCHETTE, jamais un chiffre exact',
            '10-15% d\'imprévus est un minimum, pas un luxe',
            'Chiffrer poste par poste, pas au doigt mouillé',
            'Faire valider le budget PAR ÉCRIT avant de lancer les travaux',
            'Un budget dépassé de 5% est normal — au-delà, il y a eu un problème de chiffrage'
          ],
          tips: [
            'Créer un fichier Excel/Notion de chiffrage type à réutiliser pour chaque projet',
            'Constituer une base de prix (prix au m² carrelage posé, prix prise électrique, etc.) mise à jour annuellement',
            'Demander systématiquement 3 devis — la variation peut aller du simple au triple'
          ],
          tags: ['budget', 'chiffrage', 'prix', 'estimation', 'coûts', 'business']
        },
        {
          id: 'contrat-juridique',
          category: 'Business',
          title: 'Contrat & Aspects Juridiques',
          subtitle: 'Se protéger légalement',
          summary: 'Un contrat solide protège votre travail, votre rémunération et vos droits d\'auteur. Ne commencez JAMAIS un projet sans contrat signé.',
          sections: [
            {
              title: 'Les clauses indispensables',
              content: 'Identification des parties. Description précise de la mission (phases incluses et exclues). Honoraires et échéancier de paiement. Planning prévisionnel. Conditions de modification/avenant. Propriété intellectuelle et droits d\'auteur. Conditions de résiliation. Responsabilités (assurance RC Pro obligatoire). Clause de médiation en cas de litige.'
            },
            {
              title: 'Droits d\'auteur de l\'architecte d\'intérieur',
              content: 'Vos plans, dessins et créations sont protégés par le droit d\'auteur automatiquement. Le client achète le droit de RÉALISER le projet, pas de le reproduire ou le modifier. Interdiction de diffuser les plans sans autorisation. Droit de paternité : le client ne peut pas dire qu\'il a conçu le projet lui-même. Ces droits se négocient — certains clients (promoteurs) veulent une cession complète.'
            },
            {
              title: 'L\'assurance RC Pro',
              content: 'Obligatoire pour exercer. Couvre les erreurs de conception (un meuble qui ne passe pas, un matériau inadapté). Couvre les dommages pendant le chantier sous votre responsabilité. Coût : 800-2000€/an selon le CA. MAAF, AXA, Allianz proposent des contrats spécifiques architectes d\'intérieur. Toujours vérifier que le suivi de chantier est couvert.'
            },
            {
              title: 'Les erreurs juridiques fréquentes',
              content: 'Travailler sur un engagement oral (« on s\'était dit que... »). Ne pas faire signer les validations de phase. Modifier le projet sans avenant chiffré signé. Accepter un scope creep (le client ajoute des pièces sans surcoût). Ne pas avoir de clause de résiliation claire. Oublier de faire signer le PV de réception.'
            }
          ],
          keyPoints: [
            'PAS DE CONTRAT = PAS DE PROJET — c\'est non négociable',
            'RC Pro obligatoire — vérifier la couverture chaque année',
            'Les droits d\'auteur vous appartiennent par défaut — ne les cédez pas gratuitement',
            'Chaque modification = un avenant signé + chiffré',
            'Faire valider chaque phase par signature protège des changements d\'avis rétroactifs'
          ],
          tips: [
            'Investir 500-800€ avec un avocat spécialisé pour créer votre contrat type',
            'Rejoindre l\'UNAID ou le CFAI pour accéder à des modèles de contrats et une protection juridique',
            'Scanner et archiver TOUS les documents signés dans un dossier cloud par projet'
          ],
          tags: ['contrat', 'juridique', 'droits auteur', 'assurance', 'protection', 'business']
        },
        {
          id: 'relation-client',
          category: 'Relation Client',
          title: 'Gérer la Relation Client',
          subtitle: 'Communication, attentes & conflits',
          summary: 'La relation client est un art en soi. Un client bien géré = un projet fluide + des recommandations. Un client mal géré = cauchemar garanti, même sur un beau projet.',
          sections: [
            {
              title: 'Les types de clients',
              content: 'Le confiant : vous fait confiance, peu de feedback → risque qu\'il soit déçu à la fin. Le contrôlant : veut tout valider → structurer les rendez-vous et les livrables. L\'indécis : change d\'avis souvent → limiter les options (2-3 max), faire valider par écrit. Le couple en désaccord : le plus compliqué → identifier le décideur, proposer des compromis visuels. Le pressé : veut tout pour hier → être clair sur le planning dès le début.'
            },
            {
              title: 'La communication projet',
              content: 'Établir un rythme de communication dès le départ (ex: point hebdomadaire par email + visite chantier bi-mensuelle). Toujours écrire les décisions par email après un échange oral. Utiliser un outil de suivi partagé (Notion, Trello, simple dossier Google Drive). Envoyer des photos régulières du chantier — le client adore voir l\'avancement.'
            },
            {
              title: 'Gérer les désaccords',
              content: 'Le client n\'aime pas une proposition : ne pas le prendre personnellement, écouter les raisons, proposer des alternatives. Le client veut changer en cours de route : chiffrer immédiatement l\'impact (coût + délai), formaliser par avenant. Le client conteste les honoraires : revenir au contrat signé. En dernier recours : médiation (clause à prévoir au contrat).'
            },
            {
              title: 'Fidéliser et obtenir des recommandations',
              content: 'Un cadeau de livraison (bougie, livre design, plante) coûte 50€ et marque les esprits. Envoyer des photos professionnelles du projet fini. Demander un témoignage 1 mois après la livraison. Envoyer une carte/email à l\'anniversaire du projet. Un client satisfait recommande en moyenne à 3-5 personnes — c\'est votre meilleur marketing.'
            }
          ],
          keyPoints: [
            'La communication écrite protège autant qu\'un contrat',
            'Identifier le type de client dès le brief permet d\'adapter sa posture',
            'Un changement en cours de projet = avenant AVANT de modifier quoi que ce soit',
            'Le cadeau de livraison est le meilleur investissement marketing',
            '80% des nouveaux clients viennent du bouche-à-oreille'
          ],
          tips: [
            'Préparer un « Welcome Kit » client (déroulement du projet, planning, contacts, FAQ)',
            'Toujours finir un email par « N\'hésitez pas si vous avez des questions » — ça désamorce l\'anxiété',
            'Photoshooter chaque projet fini avec un photographe pro (200-500€) — c\'est votre portfolio'
          ],
          tags: ['client', 'communication', 'relation', 'conflits', 'fidélisation', 'business']
        },
        {
          id: 'suivi-chantier',
          category: 'Chantier',
          title: 'Suivi de Chantier',
          subtitle: 'Coordonner les corps de métier',
          summary: 'Le chantier est le moment de vérité. C\'est là que tout se concrétise — ou déraille. Le suivi rigoureux est ce qui distingue un projet amateur d\'un projet professionnel.',
          sections: [
            {
              title: 'Les corps de métier à coordonner',
              content: 'Ordre classique d\'intervention : 1) Démolition / déblaiement. 2) Maçonnerie / gros œuvre. 3) Plomberie (1er fix). 4) Électricité (1er fix). 5) Plâtrerie / cloisons. 6) Menuiserie (pose des bâtis). 7) Chape / ragréage sols. 8) Carrelage / sols. 9) Peinture / enduits. 10) Menuiserie (finitions). 11) Plomberie (2ème fix — robinetterie). 12) Électricité (2ème fix — appareillage). 13) Pose mobilier. 14) Nettoyage fin de chantier.'
            },
            {
              title: 'Le planning de chantier',
              content: 'Créer un diagramme de Gantt simple (Excel, Monday, MS Project). Identifier les dépendances (le carreleur ne peut pas poser avant la chape). Prévoir des marges entre les lots (2-3 jours). Anticiper les délais de livraison matériaux (commander 4-6 semaines à l\'avance). Partager le planning avec TOUS les intervenants. Le mettre à jour chaque semaine.'
            },
            {
              title: 'La visite de chantier type',
              content: 'Fréquence : 1-2x/semaine. Arriver avec la liste des points à vérifier. Photographier l\'avancement (un téléphone suffit). Vérifier les cotes critiques (encastrements, alignements). Vérifier les matériaux livrés (bon modèle, bonne couleur, pas de casse). Rédiger un compte-rendu dans les 24h (envoi à tous les intervenants + client). Tenir un « cahier de chantier » (historique de toutes les décisions).'
            },
            {
              title: 'Les problèmes courants',
              content: 'L\'artisan ne vient pas au jour prévu → avoir toujours un plan B et des contacts de remplacement. Le matériau livré n\'est pas le bon → TOUJOURS vérifier à réception avant pose. Les cotes ne correspondent pas aux plans → c\'est pour ça qu\'on vérifie sur place. Le client passe sur le chantier et demande des changements directement aux ouvriers → INTERDIRE cette pratique dès le début.'
            }
          ],
          keyPoints: [
            'L\'ordre d\'intervention des corps de métier est sacré — le bouleverser coûte cher',
            'Photographier chaque visite = votre assurance en cas de litige',
            'Le compte-rendu écrit dans les 24h est non négociable',
            'Commander les matériaux 4-6 semaines à l\'avance minimum',
            'Le client ne doit JAMAIS donner des instructions directement aux artisans'
          ],
          tips: [
            'Créer un groupe WhatsApp par chantier (vous + tous les artisans) pour la coordination rapide',
            'Avoir une \"shortlist\" de 2-3 artisans par corps de métier en cas de défaillance',
            'Prendre les photos toujours du même angle pour montrer l\'évolution'
          ],
          tags: ['chantier', 'suivi', 'coordination', 'artisans', 'planning', 'travaux']
        },
        {
          id: 'artisans-reseau',
          category: 'Chantier',
          title: 'Trouver & Gérer ses Artisans',
          subtitle: 'Votre réseau est votre trésor',
          summary: 'Un architecte d\'intérieur vaut autant que son réseau d\'artisans. Trouver les bons, les fidéliser et gérer la relation est un skill essentiel.',
          sections: [
            {
              title: 'Où trouver de bons artisans',
              content: 'Le bouche-à-oreille entre confrères architectes d\'intérieur (le meilleur canal). Les chantiers terminés : repérer un beau travail dans un restaurant/hôtel et demander qui l\'a fait. Les salons pro (Artisan & Patrimoine, Architect@Work). Les groupements d\'artisans (Compagnons du Devoir, labels RGE). Houzz Pro, Quotatis pour le premier tri. JAMAIS les plateformes low-cost (qualité aléatoire).'
            },
            {
              title: 'Évaluer un artisan',
              content: 'Demander 3 références de chantiers récents et les APPELER. Visiter un chantier en cours si possible. Vérifier les assurances (décennale, RC Pro) — demander les attestations. Vérifier l\'inscription au registre des métiers. Le devis est un indicateur : un devis détaillé et bien présenté = un artisan sérieux. Le prix le plus bas est rarement le meilleur choix.'
            },
            {
              title: 'La relation au quotidien',
              content: 'Respecter les artisans (ils ont un savoir-faire que vous n\'avez pas). Payer dans les délais prévus — un artisan payé à temps revient et vous priorise. Être précis dans les plans et les demandes (un plan flou = un résultat flou). Reconnaître le bon travail. Recommander les bons artisans à vos confrères. Ne pas les mettre en concurrence systématiquement — la loyauté paie.'
            },
            {
              title: 'Gérer les litiges',
              content: 'Le travail n\'est pas conforme aux plans : constater par écrit + photos, demander la reprise. Le chantier prend du retard : identifier la cause (artisan ? matériaux ? client ?), adapter le planning. La qualité est insuffisante : ne pas payer la dernière tranche avant correction. En dernier recours : mise en demeure, puis médiation ou tribunal de commerce.'
            }
          ],
          keyPoints: [
            'Un bon réseau d\'artisans se construit sur des années — commencer maintenant',
            'Toujours vérifier les assurances AVANT le début du chantier',
            'Payer à temps = fidéliser et être prioritaire',
            'Le prix le plus bas est presque toujours un mauvais signal',
            'Constituer un fichier artisans noté (qualité, fiabilité, prix, spécialités)'
          ],
          tips: [
            'Créer un fichier Excel/Notion « Mes artisans » avec notes, contacts, retours',
            'Offrir un café/petit déj sur le chantier de temps en temps — ça change tout',
            'Demander aux artisans leur avis technique — ils ont souvent de meilleures solutions que ce qu\'on imagine'
          ],
          tags: ['artisans', 'réseau', 'chantier', 'fournisseurs', 'qualité', 'business']
        },
        {
          id: 'reception-livraison',
          category: 'Chantier',
          title: 'Réception & Livraison',
          subtitle: 'Conclure le projet proprement',
          summary: 'La réception est le moment juridique où le client accepte les travaux. La livraison est le moment émotionnel où il découvre son nouveau chez-lui. Les deux comptent.',
          sections: [
            {
              title: 'La pré-réception (OPR — Opérations Préalables à la Réception)',
              content: 'Visite minutieuse SEUL avant de faire venir le client. Checklist par pièce : peinture (retouches, coulures), sols (rayures, joints), menuiserie (fermetures, alignements), plomberie (fuites, pression), électricité (tous les points fonctionnent). Lister toutes les réserves et les faire corriger AVANT la réception officielle.'
            },
            {
              title: 'Le PV de réception',
              content: 'Document juridique signé par le client et l\'architecte d\'intérieur. Peut être « sans réserve » (tout est conforme) ou « avec réserves » (liste des points à corriger + délai). À partir de la signature : début des garanties légales (garantie de parfait achèvement 1 an, garantie décennale 10 ans). Toujours faire signer un PV — c\'est votre décharge.'
            },
            {
              title: 'La mise en scène de la livraison',
              content: 'C\'est votre moment de show. Nettoyage impeccable (faire appel à une entreprise de nettoyage fin de chantier). Mise en place du mobilier, des objets déco, des luminaires allumés. Si possible : faire découvrir au client les yeux fermés puis ouvrir. Préparer un dossier de livraison : plans as-built, contacts artisans, notices d\'entretien des matériaux.'
            },
            {
              title: 'L\'après-projet',
              content: 'Visite de courtoisie 1 mois après (vérifier que tout va bien, recueillir le feedback). Séance photo professionnelle pour le portfolio. Demander un témoignage écrit. Envoyer les photos retouchées au client. Rester disponible pour les questions d\'entretien. Le projet terminé est le début de la relation long terme.'
            }
          ],
          keyPoints: [
            'Toujours faire une pré-réception seul AVANT la réception officielle',
            'Le PV de réception est obligatoire — il protège tout le monde',
            'La mise en scène de la livraison crée le « wow effect » et les recommandations',
            'Le dossier de livraison (plans, contacts, notices) est un signe de professionnalisme',
            'La photo pro du projet fini est votre meilleur investissement marketing'
          ],
          tips: [
            'Préparer une checklist OPR par pièce type à imprimer',
            'Budget livraison : 200-500€ pour le nettoyage pro + quelques fleurs/bougie',
            'Le photographe : réserver 2-3 semaines après la livraison (le client a le temps d\'habiter le lieu)'
          ],
          tags: ['réception', 'livraison', 'chantier', 'PV', 'client', 'qualité']
        },
        {
          id: 'outils-gestion',
          category: 'Outils & Organisation',
          title: 'Outils de Gestion de Projet',
          subtitle: 'S\'organiser comme un pro',
          summary: 'Les bons outils font gagner des heures par semaine et évitent les oublis. Voici l\'écosystème recommandé pour un architecte d\'intérieur organisé.',
          sections: [
            {
              title: 'La base de données projet',
              content: 'Notion : le couteau suisse — templates projet, bases de données matériaux, suivi client. Alternative : Airtable (plus structuré, type tableur). Créer un template de projet réutilisable avec : brief, planning, budget, contacts artisans, suivi matériaux, PV réunions. Dupliquer ce template pour chaque nouveau projet.'
            },
            {
              title: 'La communication',
              content: 'Email : communication formelle et traces écrites. WhatsApp : coordination rapide chantier (1 groupe par projet). Zoom/Google Meet : réunions client à distance. Google Drive / Dropbox : partage de documents et plans. Wetransfer : envoi de fichiers lourds (rendus 3D, photos HD).'
            },
            {
              title: 'Le planning',
              content: 'Google Calendar : rendez-vous et visites chantier. Monday.com ou Asana : planning projet avec deadlines et dépendances. Excel/Sheets : Gantt simple pour le planning chantier. L\'idéal : un outil qui combine planning + budget + to-do (Monday ou Notion).'
            },
            {
              title: 'La comptabilité',
              content: 'Factures : Henrri (gratuit), Freebe (auto-entrepreneurs), Pennylane (plus complet). Suivi des heures : Toggl ou Clockify (pour vérifier la rentabilité par projet). Devis : créer un template PDF professionnel avec votre identité visuelle. Un comptable spécialisé professions libérales est indispensable (100-200€/mois).'
            }
          ],
          keyPoints: [
            'Notion + Google Calendar + WhatsApp = le trio minimum',
            'Un template de projet réutilisable fait gagner 1-2 jours par nouveau projet',
            'Tracker ses heures par projet révèle la rentabilité réelle',
            'Archiver TOUT dans le cloud — un disque dur qui lâche = catastrophe',
            'Un comptable spécialisé vaut son pesant d\'or'
          ],
          tips: [
            'Passer une demi-journée à créer ses templates (projet, devis, facture, CR chantier) = investissement à vie',
            'Automatiser les tâches répétitives (Zapier : nouveau projet → création dossier Google Drive + planning)',
            'Backup hebdomadaire de tous les fichiers projets sur un 2ème cloud'
          ],
          tags: ['outils', 'organisation', 'gestion', 'logiciels', 'productivité', 'business']
        },
        {
          id: 'dossier-plans',
          category: 'Outils & Organisation',
          title: 'Les Plans & Livrables',
          subtitle: 'Ce que vous devez produire',
          summary: 'Tour d\'horizon de tous les documents et plans qu\'un architecte d\'intérieur doit produire, phase par phase, et les standards de qualité attendus.',
          sections: [
            {
              title: 'Plans d\'aménagement',
              content: 'Le plan d\'aménagement est LE document central. Échelle 1:50 (standard). Contient : murs existants/projetés, cloisons, ouvertures, mobilier positionné, cotations principales, circulation, légende. Produire obligatoirement : plan de l\'existant + plan projeté (en couleur ou en grisé de différenciation). Bonus : plan de circulation (flèches de mouvement).'
            },
            {
              title: 'Élévations et coupes',
              content: 'Les élévations montrent chaque mur en vue de face — indispensables pour la cuisine, la salle de bain, et tout mur avec du sur-mesure. Échelle 1:20 ou 1:25. Inclure : hauteurs de plan de travail (86-92 cm), crédence, meubles hauts (à 140-160 cm du sol), miroirs, niches. Les coupes traversent le projet pour montrer les rapports de hauteur.'
            },
            {
              title: 'Carnet de détails',
              content: 'Plans de détail au 1:5 ou 1:10 pour les éléments sur-mesure : profils de menuiserie, détails de niche, gorge lumineuse, plinthes, calepinage de carrelage. C\'est ce dossier qui fait la différence entre un projet « ok » et un projet « parfait ». Les artisans ont besoin de ces détails pour fabriquer correctement.'
            },
            {
              title: 'Rendus & visuels 3D',
              content: 'Outils : SketchUp + Enscape (rapide), 3ds Max + V-Ray (photoréaliste), Blender + Cycles (gratuit et puissant). 2-3 vues 3D par pièce principale suffisent. Le rendu photoréaliste aide le client à se projeter mais attention : ne pas survendre (le rendu est toujours plus beau que la réalité). Alternative : collages Photoshop (plus rapides, très tendance).'
            }
          ],
          keyPoints: [
            'Le plan d\'aménagement 1:50 est le livrable n°1',
            'Les élévations sont obligatoires pour cuisine, SDB et murs avec sur-mesure',
            'Les détails au 1:5 sont ce qui fait un projet soigné',
            'Les rendus 3D sont un outil de vente, pas un livrable technique',
            'Chaque plan doit avoir : échelle, nord, date, légende, votre nom'
          ],
          tips: [
            'Numéroter et dater chaque version de plan (V1, V2, V3) — jamais de \"plan_final_final_v2\"',
            'Utiliser un cartouche professionnel avec votre logo sur chaque plan',
            'Apprendre SketchUp + un moteur de rendu rapide = le combo le plus rentable en temps/qualité'
          ],
          tags: ['plans', 'livrables', 'dessins', 'technique', 'rendus', '3D', 'organisation']
        }
      ]
    },

    // ====================================
    // 8. TENDANCES & VEILLE
    // ====================================
    {
      id: 'tendances',
      name: 'Tendances & Veille',
      icon: '◉',
      color: '#9E8B6B',
      description: 'Salons, designers influents, tendances émergentes et culture architecturale contemporaine.',
      fiches: [
        {
          id: 'salons-incontournables',
          title: 'Salons Incontournables',
          subtitle: 'Le calendrier du design',
          summary: 'Les salons internationaux sont les lieux où naissent les tendances, où se font les contacts et où s\'enrichit la culture du design. Les connaître est indispensable.',
          sections: [
            {
              title: 'Maison & Objet — Paris',
              content: 'Janvier et septembre au Parc des Expositions de Villepinte. LE salon français de la décoration et du design. 3000 exposants, 80000 visiteurs. Découverte des tendances, nouvelles marques et matériaux. Le « Designer of the Year » et les « Rising Talents » sont des indicateurs de tendance majeurs.'
            },
            {
              title: 'Salone del Mobile — Milan',
              content: 'Avril, à la Fiera Milano Rho. Le plus grand et le plus prestigieux salon de design au monde. 2000 exposants, 350000 visiteurs. La Design Week s\'étend dans tout Milan (Fuorisalone) avec des installations dans les cours des palais. C\'est ici que les grandes marques (B&B Italia, Molteni, Cassina) dévoilent leurs nouveautés.'
            },
            {
              title: 'Autres salons majeurs',
              content: 'Stockholm Furniture Fair (février) : design scandinave. IMM Cologne (janvier) : mobilier allemand et international. London Design Festival (septembre) : design britannique et international. Cersaie Bologne (septembre) : carrelage et céramique — incontournable pour les matériaux. Architect@Work : format speed-meeting architectes/fournisseurs.'
            },
            {
              title: 'Veille au quotidien',
              content: 'Magazines : AD (Architectural Digest), Elle Décoration, The World of Interiors, Dezeen. Instagram : @dezeen, @yellowtrace, @leibal, @thedesignfiles. Podcasts : Design Matters, 99% Invisible. Livres : Phaidon, Gestalten, Taschen. Sites : Dezeen.com, Yellowtrace.com.au, Yatzer.com, ArchDaily.com.'
            }
          ],
          keyPoints: [
            'Milan en avril = le rendez-vous annuel n°1 du design mondial',
            'Maison & Objet = l\'écosystème français/européen',
            'Cersaie = le salon matériaux le plus important',
            'La veille quotidienne (Instagram, Dezeen) est aussi importante que les salons',
            'Les salons sont des lieux de networking autant que d\'inspiration'
          ],
          tips: [
            'Prévoir 3 jours minimum pour Milan — 1 jour ne suffit pas',
            'Photographier systématiquement les finitions et matériaux, pas seulement les meubles',
            'Créer un système de classement des inspirations (Pinterest boards par projet/thème) dès maintenant'
          ],
          tags: ['salons', 'Milan', 'Paris', 'tendances', 'veille', 'networking']
        },
        {
          id: 'designers-contemporains',
          title: 'Designers Contemporains',
          subtitle: 'Les voix actuelles du design',
          summary: 'Les architectes d\'intérieur et designers qui façonnent l\'esthétique contemporaine. Les connaître nourrit la culture et l\'inspiration.',
          sections: [
            {
              title: 'Architecture d\'intérieur française',
              content: 'Joseph Dirand : minimalisme français luxueux, maître des proportions et de la pierre. Sarah Lavoine : couleur audacieuse (bleu Sarah), style parisien chic et accessible. Jean-Louis Deniot : classicisme réinventé, l\'un des plus influents au monde. Studio KO : brutalisme chic, Musée Yves Saint Laurent Marrakech. Charles Zana : sophistication et mélange des époques.'
            },
            {
              title: 'Scène internationale',
              content: 'Ilse Crawford (UK/Suède) : design centré sur l\'humain, directrice artistique Ikea. Vincenzo De Cotiis (Italie) : brutalisme poétique, récupération et patine. Axel Vervoordt (Belgique) : wabi-sabi occidental, maître de la sérénité. Kelly Wearstler (USA) : maximalisme sculptural, références Art Déco. India Mahdavi (France/Iran) : couleur et douceur, créatrice de la « Pink Room » de The Gallery at Sketch.'
            },
            {
              title: 'Nouvelles voix à suivre',
              content: 'Emmanuelle Simon (FR) : matériaux bruts et poésie. Fabrizio Casiraghi (IT/FR) : néo-classicisme parisien. Guillaume Alan (FR) : minimalisme chaleureux. Faye Toogood (UK) : mobilier sculptural, frontière art/design. Sabine Marcelis (NL) : design expérimental, résine et lumière.'
            },
            {
              title: 'Apprendre de leur travail',
              content: 'Analyser un projet d\'un designer : décomposer les proportions, identifier les matériaux, comprendre la palette, noter les détails. Acheter leurs livres monographiques (Joseph Dirand « Spaces », Axel Vervoordt « Wabi Inspirations »). Visiter leurs réalisations (hôtels, restaurants ouverts au public).'
            }
          ],
          keyPoints: [
            'Joseph Dirand et Axel Vervoordt sont deux pôles opposés mais essentiels à connaître',
            'La scène française est parmi les plus influentes au monde en design d\'intérieur',
            'Suivre les « nouvelles voix » anticipe les tendances de demain',
            'Les livres monographiques sont le meilleur investissement culturel',
            'Visiter physiquement les lieux conçus par ces designers est irremplaçable'
          ],
          tips: [
            'Créer un dossier par designer avec 10-20 images clés de leurs projets',
            'Quand un projet vous inspire, noter POURQUOI (proportions ? palette ? matériaux ? lumière ?)',
            'Les hôtels design sont les meilleurs showrooms — y séjourner ou au moins y prendre un café'
          ],
          tags: ['designers', 'contemporain', 'français', 'inspiration', 'culture', 'portfolio']
        },
        {
          id: 'tendances-2025-2026',
          title: 'Tendances 2025-2026',
          subtitle: 'Directions majeures',
          summary: 'Les grandes directions du design d\'intérieur pour 2025-2026, identifiées à travers les salons, les publications et l\'analyse de marché.',
          sections: [
            {
              title: 'Quiet Luxury — Le luxe silencieux',
              content: 'Inspiré par la mode (The Row, Brunello Cucinelli), le quiet luxury en intérieur privilégie la qualité des matériaux et la subtilité sur l\'ostentation. Pas de logos, pas de pièces tape-à-l\'œil. Pierre naturelle, bois massif, textiles nobles. Des matières qu\'on touche plus qu\'on ne regarde. Couleurs sourdes et élégantes.'
            },
            {
              title: 'Biophilic Design — La nature intégrée',
              content: 'Au-delà des plantes vertes : intégration profonde de la nature dans l\'habitat. Matériaux vivants (bois brut, pierre, terre crue). Formes organiques dans le mobilier. Lumière naturelle maximisée. Vues sur la nature cadrées comme des tableaux. Jardins intérieurs, murs végétaux, cours intérieures. Eau comme élément de design (fontaines, bassins).'
            },
            {
              title: 'Artisanat & fabrication locale',
              content: 'Réaction à la globalisation et à l\'uniformisation IKEA. Retour de l\'artisanat : céramique, vannerie, textile tissé, forge, ébénisterie. Collaboration architecte d\'intérieur × artisan local. Pièces uniques ou en petite série. Le « fait main » visible (traces d\'outil, irrégularités) devient un signe de luxe et d\'authenticité.'
            },
            {
              title: 'Couleur-matière — Au-delà de la peinture',
              content: 'La couleur ne vient plus seulement de la peinture mais de la matière elle-même. Pierre verte (Verde Guatemala), bois teinté dans la masse, béton pigmenté, céramique émaillée, verre coloré (Murano revival). Le monochrome matériau (une salle de bain entièrement en pierre verte) est la signature du moment.'
            }
          ],
          keyPoints: [
            'Quiet Luxury = tendance dominante du segment haut de gamme',
            'Le biophilic design devient une attente standard des clients',
            'L\'artisanat local est le nouveau luxe',
            'La couleur vient de la matière, pas du pot de peinture',
            'Ces tendances convergent vers un même message : authenticité, nature, qualité'
          ],
          tips: [
            'Développer un réseau d\'artisans locaux (céramiste, ébéniste, ferronnier) = avantage concurrentiel majeur',
            'Proposer systématiquement une « pièce artisanale » dans chaque projet',
            'Visiter les ateliers d\'artisans et documenter le processus — les clients adorent ces histoires'
          ],
          tags: ['tendances', '2025', '2026', 'quiet luxury', 'artisanat', 'biophilic']
        }
      ]
    }
  ]
};
