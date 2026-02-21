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
          category: 'Classiques & Historiques',
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
          category: 'Classiques & Historiques',
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
          category: 'Contemporains & Fusion',
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
          category: 'Classiques & Historiques',
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
          category: 'Classiques & Historiques',
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
          category: 'Contemporains & Fusion',
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
          category: 'Contemporains & Fusion',
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
          category: 'Expressifs & Éclectiques',
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
        },
        {
          id: 'retro-contemporain',
          category: 'Expressifs & Éclectiques',
          title: 'Rétro-Contemporain',
          subtitle: 'La mémoire réinventée',
          summary: 'Mêler le charme des éléments anciens (moulures, parquet, cheminées) à une écriture contemporaine épurée. Le style roi de la rénovation parisienne, omniprésent dans les reportages Sloft.',
          sections: [
            {
              title: 'Principe fondamental',
              content: 'Le rétro-contemporain ne restaure pas à l\'identique et ne fait pas table rase. Il crée un dialogue entre l\'existant patrimonial et des interventions résolument modernes. Le contraste est le moteur : moulures XVIIIe + béton ciré, parquet point de Hongrie + cuisine en Corian, cheminée en marbre + mobilier minimaliste.'
            },
            {
              title: 'Les éléments patrimoniaux à conserver',
              content: 'Moulures et corniches (même partielles). Parquet ancien (point de Hongrie, Versailles, bâton rompu). Cheminées en marbre ou pierre. Hauteur sous plafond généreuse. Portes à panneaux et poignées d\'époque. Ferronnerie de balcon. Tomettes anciennes. Poutres apparentes. La règle : tout ce qui a de la patine et du caractère mérite d\'être conservé et mis en valeur.'
            },
            {
              title: 'Les interventions contemporaines',
              content: 'Cuisine ouverte en îlot (plan de travail en pierre naturelle ou béton ciré). Verrière d\'atelier pour séparer sans cloisonner. Salle de bain en béton ciré ou tadelakt. Éclairage architectural (spots encastrés, rubans LED indirects dans les corniches). Mobilier design (pièces signées ou sur-mesure). Enduit à la chaux ou peinture mate profonde sur les murs. Le faux plafond déposé pour retrouver la hauteur d\'origine.'
            },
            {
              title: 'L\'approche Sloft : le décryptage',
              content: 'Ce qui distingue un bon projet rétro-contemporain : 1) La lumière est repensée (faux plafonds supprimés, verrières ajoutées, menuiseries alignées). 2) La circulation est fluidifiée (ouverture cuisine/salon, suppression des couloirs inutiles). 3) Les matériaux anciens et modernes se répondent (travertin au sol + cuisine laquée, moulures + béton ciré). 4) La palette est cohérente (blanc chaud dominant + bois + pierre + un accent).'
            }
          ],
          keyPoints: [
            'Contraste ancien/moderne = ADN du style',
            'Toujours conserver les éléments patrimoniaux (moulures, parquet, cheminées)',
            'La verrière est devenue un classique du genre',
            'Le blanc chaud (Farrow & Ball Pointing, Joa\'s White) est la base chromatique parfaite',
            'C\'est le style le plus demandé en rénovation dans les grandes villes françaises'
          ],
          tips: [
            'Déposer le faux plafond en premier — retrouver 20-40 cm de hauteur transforme tout',
            'Un parquet ancien poncé mais non vitrifié (huilé mat) garde sa patine et son âme',
            'Les moulures peintes dans la même couleur que le mur (ton-sur-ton mat) = effet contemporain immédiat'
          ],
          tags: ['rénovation', 'patrimoine', 'moulures', 'verrière', 'parisien', 'contraste']
        },
        {
          id: 'style-mediterraneen',
          title: 'Style Méditerranéen',
          category: 'Expressifs & Éclectiques',
          subtitle: 'Lumière, pierre & chaux',
          summary: 'L\'art de vivre du Sud : enduits à la chaux, pierre naturelle, voûtes, terre cuite et lumière écrasante. Un style authentique et intemporel qui séduit bien au-delà de la Méditerranée.',
          sections: [
            {
              title: 'ADN du style',
              content: 'Le Méditerranéen est né de la contrainte climatique : murs épais en pierre pour la fraîcheur, enduits à la chaux blanche pour réfléchir la chaleur, volets pour moduler la lumière, sols en terre cuite ou pierre pour l\'inertie thermique. Ce vocabulaire fonctionnel est devenu une esthétique universellement admirée.'
            },
            {
              title: 'Matériaux signature',
              content: 'Pierre calcaire (pour les murs, sols, plans de travail). Enduit à la chaux (badigeon, tadelakt, stuc). Terre cuite (tomettes hexagonales, carreaux rectangulaires, zellige). Bois brut (chêne, olivier, pin maritime). Fer forgé (rampes, luminaires). Béton ciré (interprétation contemporaine). Céramique émaillée (vasques, crédences). Palette : blanc, ocre, terre de Sienne, bleu outremer, vert olive.'
            },
            {
              title: 'Déclinaisons régionales',
              content: 'Provence : lavande, ocre, fer forgé, tomettes. Grèce : blanc pur, bleu intense, chaux, arches. Maroc : zellige, tadelakt, bois de cèdre, moucharabieh. Italie du Sud : travertin, majolique, voûtes en berceau, terrazzo. Espagne : carreaux de ciment, arches mauresques, patios. Chaque déclinaison a ses codes mais le vocabulaire de base est commun.'
            },
            {
              title: 'Application en intérieur contemporain',
              content: 'Ne pas faire du pastiche folklorique. Intégrer le vocabulaire méditerranéen dans une écriture épurée : un mur en enduit chaux texturé + sol en pierre + mobilier contemporain bas. Une salle de bain en tadelakt monochrome. Une cuisine avec crédence en zellige + plan de travail en pierre massive. Les arches reviennent en force comme élément architectural (passage entre pièces, niche murale).'
            }
          ],
          keyPoints: [
            'Le Méditerranéen est d\'abord fonctionnel avant d\'être esthétique',
            'La chaux (badigeon, tadelakt) est le liant universel du style',
            'Les arches et voûtes sont les éléments architecturaux signature',
            'Palette terreuse + bleu ou vert en accent',
            'Très tendance en 2025-2026, porté par le retour de la terre cuite et du zellige'
          ],
          tips: [
            'Un mur en badigeon de chaux (20-30€/m² en DIY) transforme n\'importe quelle pièce',
            'Les tomettes anciennes récupérées (Provence, Italie) ont une patine impossible à reproduire',
            'L\'arche peut se créer en plâtre sur ossature métallique — pas besoin de taille de pierre'
          ],
          tags: ['méditerranéen', 'chaux', 'pierre', 'zellige', 'arche', 'terre cuite']
        },
        {
          id: 'style-parisien',
          title: 'Le Style Parisien',
          category: 'Contemporains & Fusion',
          subtitle: 'L\'appartement haussmannien réinventé',
          summary: 'Le style parisien tel que documenté par Sloft : l\'art de sublimer l\'haussmannien avec des interventions contemporaines. Moulures + verrière + parquet + pièces de design = la formule magique.',
          sections: [
            {
              title: 'L\'héritage haussmannien',
              content: 'L\'immeuble haussmannien (1853-1870) offre un cadre exceptionnel : hauteur sous plafond 2,80-3,20 m, moulures, corniches, parquet en point de Hongrie ou bâton rompu, cheminées en marbre, grandes fenêtres, enfilade de pièces. C\'est la matière première du « style parisien » que le monde entier envie et que Sloft documente inlassablement.'
            },
            {
              title: 'Les codes de la rénovation parisienne',
              content: 'Décloisonner pour créer une grande pièce de vie ouverte (salon + cuisine + salle à manger). Installer une verrière d\'atelier (acier noir + verre) entre cuisine et salon ou chambre et salon. Conserver et restaurer les moulures et corniches. Poncer et huiler le parquet ancien. Créer un îlot central en cuisine. Repenser la salle de bain (béton ciré, zellige, robinetterie design). Peindre murs ET moulures dans la même teinte (blanc chaud ou couleur sourde).'
            },
            {
              title: 'Les clés de la lumière',
              content: 'L\'enjeu n°1 dans un appartement parisien est la lumière. Les pièces en enfilade créent des espaces en « second jour » (sans fenêtre directe). Solutions Sloft : la verrière apporte la lumière au cœur du plan. Le faux plafond déposé libère de la hauteur et de la luminosité. Les menuiseries alignées (cuisine ouverte) permettent à la lumière de traverser. Le choix d\'un blanc chaud réfléchit sans éblouir.'
            },
            {
              title: 'Le mobilier : le mix parfait',
              content: 'Pièce iconique du design (Lounge Chair Eames, chaise Tulip Saarinen, canapé Togo). Luminaires design (Serge Mouille, Flos, DCW). Pièces vintage chinées (fauteuil années 50, console Art Déco). Mobilier sur-mesure en bois et métal (bibliothèque, meuble TV). Tapis berbère ou kilim. Art contemporain aux murs. La clé : le MIX des époques — jamais un intérieur « tout neuf » ou « tout ancien ».'
            }
          ],
          keyPoints: [
            'L\'haussmannien est un cadre — les interventions contemporaines le subliment',
            'Verrière + îlot + parquet ancien = triptyque parisien par excellence',
            'La lumière est l\'enjeu n°1 — chaque décision doit la servir',
            'Le mix des époques (design + vintage + sur-mesure) crée l\'authenticité',
            'Le blanc chaud (Pointing, String, Skimming Stone) est la base universelle'
          ],
          tips: [
            'Photographier l\'appartement vide avant travaux — la lumière naturelle à différentes heures guide tout le projet',
            'Un parquet point de Hongrie restauré vaut plus que n\'importe quel revêtement neuf',
            'La verrière type « atelier » : profil acier 25-30mm, verre feuilleté, traverses horizontales — vérifier la portée avec un BET'
          ],
          tags: ['parisien', 'haussmannien', 'moulures', 'verrière', 'parquet', 'rénovation']
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
          category: 'Céramique & Carrelage',
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
        // MATÉRIAUX COMPLÉMENTAIRES
        // ──────────────────────────────
        {
          id: 'quartz-composite',
          category: 'Matériaux Complémentaires',
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
          category: 'Matériaux Complémentaires',
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
          category: 'Matériaux Complémentaires',
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
          category: 'Matériaux Complémentaires',
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
        },
        {
          id: 'sols-souples',
          category: 'Revêtements de Sol',
          title: 'Sols Souples : LVT, Linoléum, Moquette',
          subtitle: 'Le guide complet des revêtements résilients',
          summary: 'Les sols souples représentent une part majeure des projets d\'aménagement — résidentiels comme tertiaires. LVT (Luxury Vinyl Tile), linoléum, moquette : chaque famille a ses avantages, ses pièges et ses usages spécifiques. Savoir les distinguer est essentiel pour prescrire juste.',
          sections: [
            {
              title: 'LVT — Luxury Vinyl Tile',
              content: 'La LVT est un revêtement PVC multicouche imitant le bois, la pierre ou le béton avec un réalisme saisissant. Composition : couche d\'usure transparente (0,2 à 0,7mm) + décor imprimé HD + âme en PVC ou SPC (Stone Polymer Composite). Types : LVT collée (2-3mm, la plus stable, idéale rénovation car faible épaisseur). LVT clipsable rigide / SPC (4-6mm, pose flottante, adapté aux pièces humides si SPC). LVT WPC (Wood Polymer Composite, plus souple et confortable sous le pied). Classement : UPEC (U2sP2E1C0 minimum en résidentiel, U3P3E2C2 pour un restaurant). Avantages : étanche (salle de bain, cuisine), acoustique intégrée (sous-couche), très fin (idéal rénovation sans raboter les portes), large choix de décors, prix modéré (20-60€/m² posé). Inconvénients : PVC = pétrochimie (pas écologique), sensible aux charges ponctuelles (pieds de meuble → patins), jaunissement possible au soleil (choisir un UV coating). Marques pro : Forbo Allura, Tarkett iD Inspiration, Gerflor Creation.'
            },
            {
              title: 'Linoléum véritable',
              content: 'Le VRAI linoléum (à ne PAS confondre avec le PVC/vinyl !) est un revêtement 100% naturel inventé en 1860. Composition : huile de lin oxydée + résines naturelles + farine de bois + charges minérales + pigments, sur une trame en jute. Marques : Forbo Marmoleum (quasi monopole mondial), DLW (Gerflor). Propriétés : naturellement bactériostatique (l\'huile de lin oxydée empêche le développement bactérien), antistatique, résistant aux produits chimiques. Durée de vie : 25-40 ans en usage intensif. Bilan écologique excellent (matières premières renouvelables, biodégradable). Épaisseur : 2-4mm. Pose collée uniquement (colle acrylique). Odeur caractéristique d\'huile de lin à la pose (disparaît en 2-3 semaines). Coloris : palette très riche (Marmoleum propose plus de 300 teintes, dont des marbré spectaculaires). Prix : 30-70€/m² posé. Défaut : sensible à l\'eau stagnante (les joints doivent être soudés à chaud pour les pièces humides). Nécessite un ragréage parfait (le moindre défaut du support se voit). Usage : hôpitaux, écoles, crèches, bureaux, résidentiel haut de gamme écologique.'
            },
            {
              title: 'Moquette',
              content: 'Loin d\'être démodée, la moquette connaît un retour en grâce — notamment en hôtellerie, bureaux et chambres haut de gamme. Types de fabrication : tuftée (la plus courante — fils piqués dans un dossier), tissée (Axminster, Wilton — haut de gamme, motifs complexes), aiguilletée (entrée de gamme, aspect feutre — halls, expos). Types de velours : bouclé (résistant, aspect texturé — bureaux), coupé (doux, luxueux — chambres), coupé-bouclé (motifs en relief). Matières : laine (la reine — confort, résilience, isolant, anti-feu naturel), polyamide/nylon (résistant à l\'usure et aux taches — contract), polypropylène (entrée de gamme), mélanges laine/polyamide (le meilleur rapport qualité/usage). Pose : tendue sur thibaude (le plus confortable, pose traditionnelle avec gripper), collée en plein (bureaux, hôtels), dalles de moquette plombantes 50x50 (bureaux — remplacement facile). Acoustique : la moquette est le MEILLEUR revêtement acoustique — réduction du bruit d\'impact de 25-35 dB. Allergie : contrairement aux idées reçues, la moquette piège les allergènes au sol (au lieu de les laisser voler dans l\'air) — à condition d\'aspirer régulièrement. Prix : 15-40€/m² (tuftée), 80-300€/m² (tissée laine haut de gamme). Marques : Bolon (vinyl tressé, design scandinave), Ege, Interface (dalles), Balsan, Tai Ping (ultra luxe).'
            },
            {
              title: 'Comment choisir',
              content: 'Pièce humide (SDB, cuisine) → LVT SPC ou grès cérame (PAS de linoléum ni moquette). Bureau / open space → dalles de moquette plombantes (acoustique + remplacement facile) ou LVT. Chambre haut de gamme → moquette laine épaisse ou linoléum uni (Marmoleum Walton). Hall d\'hôtel → moquette tissée Axminster (motifs sur-mesure) ou linoléum. Crèche / école → linoléum (naturel, bactériostatique, résistant). Commerce → LVT collée haute résistance (U3/U4). Résidentiel éco-responsable → linoléum véritable. Résidentiel budget → LVT clipsable SPC. Le classement UPEC (Usure, Poinçonnement, Eau, Chimie) est votre boussole — vérifier que le classement du produit correspond au local.'
            }
          ],
          keyPoints: [
            'LVT ≠ Linoléum. Le linoléum est 100% naturel (huile de lin), la LVT est en PVC',
            'Le classement UPEC est OBLIGATOIRE pour vérifier la compatibilité usage/produit',
            'La moquette est le meilleur isolant acoustique — irremplaçable dans les chambres et bureaux',
            'LVT SPC = la solution la plus polyvalente en rénovation (fine, étanche, pose rapide)',
            'Le linoléum véritable (Marmoleum) dure 25-40 ans — investissement à long terme'
          ],
          tips: [
            'Le client dit « lino » mais pense « PVC » — toujours clarifier. Le vrai linoléum coûte plus cher mais dure 3x plus longtemps',
            'En pose LVT sur ancien carrelage : ragréage fibré obligatoire pour lisser les joints — sinon ils se marquent dans la LVT en quelques mois',
            'Les dalles de moquette Bolon (vinyl tressé) sont le produit parfait pour un bureau design : acoustiques, lavables, esthétiques, posées en une journée'
          ],
          tags: ['sol', 'LVT', 'linoléum', 'moquette', 'vinyle', 'revêtement', 'UPEC']
        },
        {
          id: 'parquet',
          category: 'Revêtements de Sol',
          title: 'Parquet : Massif, Contrecollé, Stratifié',
          subtitle: 'Le guide complet du bois au sol',
          summary: 'Le parquet est le revêtement noble par excellence. Mais derrière le mot « parquet » se cachent trois produits radicalement différents — seuls les deux premiers méritent réellement ce nom.',
          sections: [
            {
              title: 'Parquet massif',
              content: 'Le parquet massif est constitué d\'une seule essence de bois sur toute son épaisseur (14 à 23mm). C\'est le « vrai » parquet au sens noble. Essences courantes : chêne (80% du marché — robuste, tannique, se patine magnifiquement), noyer (sombre, luxueux, 120-200€/m²), frêne (clair, nervuré, bon rapport qualité-prix), châtaignier (rustique, tannique), hêtre (clair, dur mais instable dimensionnellement), exotiques : teck (imputrescible), merbau (rouge-brun), wengé (très sombre). Pose : clouée sur lambourdes (traditionnelle, surélevée de 4-6cm — attention à la hauteur !), collée en plein (la plus stable, sur chape ragréée). Finition : huilé (aspect naturel mat, entretien régulier à l\'huile), vitrifié/verni (brillant ou satiné, résistant, moins naturel), ciré (patine exceptionnelle mais fragile — réservé au patrimoine). Épaisseur de la couche d\'usure : le massif peut être poncé 5 à 7 fois dans sa vie → durée de vie 80-100 ans. Prix : chêne massif 50-120€/m² fourni-posé. Point de bois 23mm rustique : ~35€/m² hors pose. C\'est un INVESTISSEMENT patrimonial.'
            },
            {
              title: 'Parquet contrecollé (flottant ou collé)',
              content: 'Le contrecollé est un sandwich : couche d\'usure en bois noble (2,5 à 6mm) + âme en latté/HDF/contreplaqué + contre-balancement. C\'est un vrai parquet (la surface est du vrai bois) mais plus fin et plus stable que le massif. Avantages : plus stable dimensionnellement (moins de jeu avec l\'humidité), compatible plancher chauffant (épaisseur réduite = meilleure conductivité), pose flottante possible (clipsable — rapide, pas de colle), moins cher que le massif (30-90€/m² posé). Inconvénient : couche d\'usure fine → ponçable 1 à 3 fois seulement (selon épaisseur). Durée de vie : 30-50 ans. Choisir une couche d\'usure ≥ 3,5mm pour un usage résidentiel durable (≥ 4mm idéalement). Marques : Boen (scandinave, excellente qualité), Panaget (français), Bauwerk, Quick-Step Palazzo. Le contrecollé en pose collée sur chape = le meilleur compromis esthétique/technique en rénovation.'
            },
            {
              title: 'Stratifié — ce n\'est PAS du parquet',
              content: 'Le stratifié est un panneau HDF (fibre haute densité) recouvert d\'un décor photographique sous une couche de résine mélamine. Il n\'y a AUCUN bois noble en surface — c\'est une photo de bois. Classement AC (Abrasion Class) : AC3 = résidentiel modéré, AC4 = résidentiel intense / commercial léger, AC5 = commercial intense. Avantages : très résistant aux rayures et taches, prix imbattable (8-25€/m² posé), pose flottante rapide, large choix de décors. Inconvénients : ne peut JAMAIS être poncé, sonorité creuse sous le pied (nécessite une sous-couche acoustique épaisse), les chants gonflent au contact de l\'eau (pas de pose en pièce humide), aspect « plastique » perceptible de près. Durée de vie : 10-20 ans. Marques : Quick-Step (Impressive, Majestic), Pergo, Egger, Kronotex. Le stratifié a sa place (budget serré, location, chambre d\'enfant) mais NE PAS l\'appeler « parquet » — c\'est un sol stratifié.'
            },
            {
              title: 'Calepinages et poses',
              content: 'Pose à l\'anglaise à coupe perdue : lames parallèles, coupes aléatoires — la plus courante, la plus économique (peu de chutes). Pose à l\'anglaise à coupe de pierre : joints décalés d\'1/2 lame régulièrement — plus structuré. Pose en point de Hongrie (chevron) : lames coupées à 45° ou 60° formant un V continu — très élégant, classique parisien. Surcoût de ~20% (coupes + chutes). Pose en bâtons rompus : lames posées à 90° les unes des autres — le motif iconique des appartements haussmanniens. Pose en damier : carrés alternés, très graphique. Pose à la française (Versailles, Chantilly) : panneaux complexes de parquet assemblés — patrimoine et ultra-luxe. Direction de pose : toujours dans le sens de la lumière principale (perpendiculaire à la fenêtre) pour minimiser la visibilité des joints. En couloir : toujours dans le sens de la longueur.'
            }
          ],
          keyPoints: [
            'Parquet massif = bois plein, ponçable 5-7 fois, dure 80-100 ans',
            'Contrecollé = vrai bois en surface mais sur support composite — le meilleur compromis en rénovation',
            'Stratifié = photo de bois sur HDF — ce n\'est PAS un parquet, ne peut pas être poncé',
            'Toujours poser dans le sens de la lumière (perpendiculaire aux fenêtres)',
            'Point de Hongrie et bâtons rompus = les deux motifs nobles parisiens'
          ],
          tips: [
            'Client avec budget limité mais exigeant : contrecollé chêne 4mm d\'usure, pose collée en bâtons rompus = aspect massif pour 2x moins cher',
            'Imposer une hygrométrie entre 45% et 65% dans le CCTP — le bois vit, et un chauffage trop sec = joints ouverts garantis',
            'Point de Hongrie 60° = plus dynamique et contemporain que le 45° classique — subtilité qui fait la différence'
          ],
          tags: ['parquet', 'bois', 'sol', 'massif', 'contrecollé', 'stratifié', 'chêne']
        },
        {
          id: 'carrelage-gres-cerame',
          category: 'Revêtements de Sol',
          title: 'Carrelage & Grès Cérame',
          subtitle: 'Le matériau technique roi des sols',
          summary: 'Le grès cérame est devenu le revêtement de sol le plus polyvalent du marché. Imitation bois, marbre, béton, métal — ses capacités techniques et esthétiques sont quasi illimitées. Mais le prescrire correctement exige de maîtriser formats, classements et contraintes de pose.',
          sections: [
            {
              title: 'Grès cérame technique',
              content: 'Composition : argile pressée à 400kg/cm² et cuite à 1200-1300°C. Résultat : un matériau extrêmement dur (Mohs 7-8), quasi imperméable (absorption d\'eau <0,5%), résistant au gel, aux acides, aux UV. Grès cérame pleine masse : coloré dans la masse — si on le casse, la couleur est uniforme. Le plus résistant (terrasses, commerces). Grès cérame émaillé : couche décorative en surface — plus de choix esthétiques mais la puce se voit si éclat. Grès cérame rectifié : bords découpés au diamant → joints ultra-fins (2mm) → aspect dalle monolithique. INDISPENSABLE pour un rendu contemporain.'
            },
            {
              title: 'Formats et tendances',
              content: 'Les grands formats dominent le marché : 60x60cm (standard contemporain), 60x120cm (très populaire — allonge visuellement les pièces), 80x80cm, 120x120cm (spectaculaire), 120x260cm (dalles XXL — imite une table de marbre, nécessite un poseur spécialisé et une ventouse). Épaisseurs : 6mm (ultra-fin sur trame pour rénovation — Kerlite, Laminam), 9-10mm (standard), 14mm (fort trafic), 20mm (terrasse extérieure sur plots). L\'imitation bois en grès cérame est devenue bluffante — format lame 20x120cm ou 30x120cm, texture antidérapante. L\'imitation marbre (Calacatta, Statuario, Marquina) en grand format rectifié est le best-seller de l\'architecture commerciale.'
            },
            {
              title: 'Classements et normes',
              content: 'PEI (résistance à l\'abrasion) : PEI III = résidentiel modéré (chambre), PEI IV = résidentiel intense (cuisine, entrée), PEI V = commercial intense (boutiques, restaurants). UPEC : U3P3E2C1 minimum pour un séjour, U4P4sE3C2 pour un commerce. R (antidérapance pieds chaussés) : R9 = intérieur standard, R10 = cuisine/salle de bain, R11 = douche à l\'italienne / extérieur, R12-R13 = industriel (piscines). A+B+C (antidérapance pieds nus) : A = sec, B = humide (obligatoire autour des piscines), C = très humide (douches collectives). Le classement DCOF (Dynamic Coefficient of Friction ≥ 0,42) est la norme américaine — de plus en plus demandé.'
            },
            {
              title: 'Pose et joints',
              content: 'Pose collée sur chape ragréée (simple encollage <30x30, double encollage ≥30x30 OBLIGATOIRE). Pose sur plots (terrasse — pas de colle, hauteur réglable, drainage naturel). Joint minimum : 2mm pour rectifié, 3-5mm pour non-rectifié. Joint de dilatation périphérique OBLIGATOIRE (5-8mm sous les plinthes). Joints de fractionnement : tous les 40m² ou 8ml en intérieur (DTU 52.2). Le ragréage doit être parfait : planéité SL1 (3mm sous règle de 2m) pour les grands formats ≥60cm. Coût de pose : 30-50€/m² hors fourniture (standard), 50-80€/m² pour grand format/motif complexe. Calepinage : TOUJOURS faire un plan de calepinage pour les grands formats — centrer les coupes, éviter les lames de moins de 1/3 de carreau.'
            }
          ],
          keyPoints: [
            'Grès cérame rectifié = joint 2mm = rendu monolithique contemporain',
            'Double encollage OBLIGATOIRE pour tout format ≥ 30x30cm',
            'R10 minimum en salle de bain, R11 en douche à l\'italienne',
            'Grand format (120x120+) = ragréage parfait + poseur spécialisé + ventouse',
            'L\'imitation bois en grès cérame est l\'alternative idéale en pièce humide'
          ],
          tips: [
            'Préférer un 60x120 rectifié en imitation marbre plutôt qu\'un 60x60 — le rendu est incomparablement plus luxueux et on voit moins de joints',
            'Exiger du double encollage dans le CCTP — c\'est la première cause de décollement et la première malfaçon en carrelage',
            'Le calepinage centré (coupes symétriques de chaque côté) fait la différence entre un carrelage « posé » et un carrelage « conçu »'
          ],
          tags: ['carrelage', 'grès cérame', 'sol', 'grand format', 'imitation', 'pose', 'PEI']
        },
        {
          id: 'beton-cire-resines',
          category: 'Revêtements de Sol',
          title: 'Béton Ciré & Résines de Sol',
          subtitle: 'Les revêtements coulés : béton ciré, microtopping, résine époxy, polyuréthane',
          summary: 'Les sols coulés (béton ciré, micro-ciment, résines) offrent un rendu monolithique sans joint — le rêve du design contemporain. Mais ce sont des produits TRÈS techniques, coûteux, et piégeux si mal prescrits.',
          sections: [
            {
              title: 'Béton ciré véritable',
              content: 'Le vrai béton ciré est un mortier fin à base de ciment, appliqué en 2-3 passes de 1-2mm sur un support préparé (primaire d\'accroche + ragréage). Il est ensuite poncé, puis protégé par un vernis ou une cire. Aspect : minéral, mat ou satiné, légèrement nuancé (le charme vient des variations). Épaisseur totale : 3-5mm. Compatible rénovation (faible épaisseur). Marques/fabricants : Marius Aurenti, Mercadier, Rouviere Collection. Contraintes : le béton ciré FISSURE. C\'est sa nature — le ciment fissure. Les micro-fissures sont « normales » et font partie du caractère du produit. Si le client veut un sol PARFAIT sans la moindre marque : déconseiller le béton ciré. Le béton ciré est poreux : sans protection (vernis/cire), il tache instantanément. Réappliquer la cire ou le vernis tous les 2-5 ans. Prix : 100-180€/m² posé (artisan spécialisé). Ne JAMAIS confier du béton ciré à un carreleur classique.'
            },
            {
              title: 'Micro-ciment / Microtopping',
              content: 'Le micro-ciment est l\'évolution du béton ciré : formulation améliorée avec résines polymères qui réduisent la fissuration. Plus fin (1-3mm), plus souple, plus résistant à l\'eau. Certaines formulations sont étanches (applicables en douche à l\'italienne avec système SPEC en dessous). Marques : Ideal Work (Microtopping), Topciment, Festool Deco. Avantage vs béton ciré : moins de fissuration, applicable sur carrelage existant (gain de temps), gamme de couleurs plus large. Inconvénient : aspect plus « plastique » que le vrai béton ciré, moins de caractère minéral. Prix : 80-150€/m² posé. C\'est souvent le meilleur choix en rénovation.'
            },
            {
              title: 'Résines (époxy, polyuréthane, PMMA)',
              content: 'Résine époxy : ultra-résistante (chimique, mécanique), brillante, lisse. Usage : garages, ateliers, commerces, lofts industriels. L\'époxy jaunit aux UV → uniquement en intérieur sans soleil direct. Effet miroir spectaculaire. Épaisseur : 2-5mm. Prix : 80-200€/m². Résine polyuréthane (PU) : plus souple que l\'époxy, résistante aux UV, confortable sous le pied. Finition mate ou satinée. Usage : résidentiel, bureaux, hôtellerie. Le choix haut de gamme pour un sol souple et silencieux. Prix : 100-250€/m². Résine PMMA (méthacrylate) : polymérisation ultra-rapide (2-4h) — idéal pour les commerces qui ne peuvent pas fermer longtemps. Moins esthétique. La résine de sol est un métier à part — applicateur spécialisé obligatoire (pas un peintre, pas un carreleur).'
            },
            {
              title: 'Comment choisir',
              content: 'Le client veut du « caractère minéral » avec des variations → béton ciré véritable. Le client veut un sol lisse sans joint en rénovation → micro-ciment (le plus polyvalent). Le client veut un sol ultra-résistant pour un commerce / loft → résine époxy. Le client veut un sol souple et silencieux en résidentiel haut de gamme → résine PU. Le client veut du sans joint en salle de bain → micro-ciment sur SPEC. ATTENTION : tous ces produits nécessitent un support PARFAIT — le moindre défaut du support se voit à travers. Budget ragréage à prévoir en plus. Et dans TOUS les cas : faire un échantillon test de 50x50cm sur site avant de valider la teinte et la finition — les rendus varient énormément selon la lumière et le support.'
            }
          ],
          keyPoints: [
            'Le béton ciré fissure — c\'est NORMAL. Prévenir le client AVANT, par écrit',
            'Le micro-ciment est plus fiable que le béton ciré en rénovation (moins de fissuration)',
            'L\'époxy jaunit au soleil — uniquement en intérieur sans exposition directe',
            'TOUS ces produits nécessitent un applicateur spécialisé — jamais un carreleur classique',
            'Toujours faire un échantillon test 50x50cm sur site avant validation'
          ],
          tips: [
            'La teinte « gris béton brut » (RAL 7035 approchant) est le best-seller absolu en béton ciré — indémodable',
            'En douche à l\'italienne : micro-ciment sur système SPEC complet — le béton ciré classique n\'est PAS étanche sans traitement',
            'Intégrer dans le devis une clause « micro-fissuration inhérente au matériau » pour le béton ciré — ça évite 90% des litiges'
          ],
          tags: ['béton ciré', 'résine', 'époxy', 'microtopping', 'sol', 'sans joint', 'contemporain']
        },
        {
          id: 'terrazzo-granito',
          category: 'Revêtements de Sol',
          title: 'Terrazzo & Granito',
          subtitle: 'Le revêtement vénitien revenu au sommet',
          summary: 'Le terrazzo (ou granito) est un revêtement composé de fragments de marbre, de pierre, de verre ou de quartz noyés dans un liant (ciment ou résine), puis poncé et poli. Né à Venise au XVe siècle, il connaît un retour spectaculaire depuis 2018.',
          sections: [
            {
              title: 'Composition et types',
              content: 'Terrazzo in situ (coulé sur place) : mortier de ciment + granulats de marbre, coulé sur 15-25mm d\'épaisseur, poncé et poli sur place. C\'est le terrazzo original vénitien — le plus beau, le plus cher. Carreaux de terrazzo préfabriqués : dalles de 30x30 à 60x60cm, fabriquées en usine, polies, prêtes à poser comme un carrelage. Plus accessible (50-120€/m²). Terrazzo résine : liant en résine époxy au lieu du ciment — plus souple, moins de risque de fissuration, mais moins « authentique ». Granulats : marbre blanc de Carrare (le classique), marbres colorés (vert, rose, noir), verre recyclé (contemporain), coquillages, nacre, laiton (ultra-luxe). Taille des granulats : petit grain (2-5mm) = rendu fin et délicat. Gros grain (15-30mm) = spectaculaire et graphique.'
            },
            {
              title: 'Le revival contemporain',
              content: 'Le terrazzo est revenu massivement dans le design contemporain depuis 2018-2019. Il est passé d\'un matériau « rétro » à un élément de design ultra-tendance. Applications actuelles : sols (son usage premier), plans de travail et vasques, crédences de cuisine, mobilier (tables, pieds de lampe), objets décoratifs (plateaux, vases). Le terrazzo contemporain joue sur les contrastes : fond noir + éclats blancs et dorés, fond terracotta + éclats de marbre, fond blanc + éclats multicolores. L\'imitation terrazzo en grès cérame existe (beaucoup moins cher) mais n\'a pas la profondeur ni le toucher du vrai.'
            },
            {
              title: 'Mise en œuvre et contraintes',
              content: 'Terrazzo in situ : application par un terrazzier spécialisé (métier rare — peu d\'artisans en France). Coulé en 15-25mm, séchage 7-14 jours, ponçage en 3-4 passes (diamant grain 50 → 200 → 400 → 800), polissage final. Joints de dilatation en laiton tous les 3-4m² (deviennent un élément décoratif). Le sol fini est imperméable après traitement hydro-oléofuge. Carreaux préfabriqués : pose classique comme un carrelage (double encollage, joint fin). Entretien : savon neutre, pas de produit acide (le marbre est sensible aux acides — vinaigre, citron attaquent le poli). Cristallisation possible pour raviver le poli (comme le marbre). Prix : in situ 150-400€/m², carreaux 50-120€/m², imitation grès cérame 25-60€/m².'
            },
            {
              title: 'Fournisseurs et références',
              content: 'Carreaux préfabriqués : Huguet (Majorque — artisanal haut de gamme), Diespeker (Londres), Concrete Collaborative. Terrazzo in situ : Entreprise Granito (Paris), artisans terrazziers locaux (réseau rare). Imitation grès cérame : Marazzi (Ghiara), Fioranese (Schegge), Codicer. Le vrai terrazzo in situ avec joints laiton dans un hall d\'entrée = le sol le plus spectaculaire qu\'un architecte d\'intérieur puisse spécifier. C\'est un investissement (200-400€/m²) mais il dure un siècle et ne se démode jamais.'
            }
          ],
          keyPoints: [
            'Terrazzo = fragments de marbre/pierre dans un liant ciment ou résine, poncé et poli',
            'Le terrazzo in situ est le plus beau mais nécessite un terrazzier spécialisé (métier rare)',
            'Les carreaux préfabriqués sont le compromis le plus accessible (50-120€/m²)',
            'Les joints laiton ne sont pas un défaut — ils font partie intégrante du design',
            'Le terrazzo ne se démode JAMAIS — c\'est un classique depuis le XVe siècle'
          ],
          tips: [
            'Un terrazzo fond blanc + éclats de vert et rose = la palette la plus tendance et la plus intemporelle',
            'Pour un plan de travail terrazzo : les préfabriqués résine sont plus faciles à mettre en œuvre que les ciment',
            'En budget limité : un carrelage imitation terrazzo en 120x120 rectifié rend très bien — 10x moins cher que le vrai'
          ],
          tags: ['terrazzo', 'granito', 'marbre', 'sol', 'vénitien', 'tendance', 'artisanal']
        },
        {
          id: 'peintures',
          category: 'Revêtements Muraux',
          title: 'Peintures : Types, Finitions & Prescription',
          subtitle: 'Mat, satin, brillant — acrylique, glycéro, alkyde, biosourcée',
          summary: 'La peinture est le revêtement mural le plus utilisé au monde. C\'est aussi celui qu\'on prescrit le plus mal : mauvais choix de finition, mauvaise préparation du support, produit inadapté à la pièce. Cette fiche couvre tout ce qu\'un architecte d\'intérieur doit savoir pour prescrire juste.',
          sections: [
            {
              title: 'Types de peinture',
              content: 'Acrylique (phase aqueuse) : la plus courante (80% du marché). Diluable à l\'eau, séchage rapide (1-2h au toucher), quasi inodore, nettoyage à l\'eau. Excellente pour les murs et plafonds en résidentiel. Faible en COV (Composés Organiques Volatils). Inconvénient : moins résistante que la glycéro dans les pièces humides. Glycéro (phase solvant) : à base de résines alkydes en solvant pétrolier. Ultra-résistante (lessivable, anti-humidité), finition tendue et laquée irréprochable. MAIS : forte odeur, séchage lent (6-12h), COV élevés, nettoyage au White Spirit. De plus en plus remplacée par l\'alkyde émulsion. Alkyde émulsion (alkyde en phase aqueuse) : le meilleur des deux mondes — résistance de la glycéro + facilité de l\'acrylique. Faible COV. Le choix PRO pour les boiseries, les pièces humides et les laques tendues. Marques : Tollens Idrotop, Sikkens Rubbol. Peinture biosourcée : résines végétales (lin, ricin, colza), pigments naturels. Labels : Ecolabel, NF Environnement, Ange Bleu. Marques : Algo (algues), Pure & Paint, Colibri. Pour les clients éco-sensibles.'
            },
            {
              title: 'Finitions',
              content: 'Mat : pas de reflet (brillance 0-5%). Cache les défauts du support. Ambiance feutrée et contemporaine. Inconvénient : tache facilement, difficile à nettoyer. Usage : plafonds (TOUJOURS mat), murs de salon/chambre si support bien préparé. Mat profond / mat velours / mat poudré : variantes ultra-mates très tendance (Farrow & Ball, Ressource). Rendu « craie » luxueux. Satiné : léger reflet (10-30%). Le meilleur compromis — lessivable, résistant, polyvalent. Usage : TOUTE pièce, surtout cuisine, SDB, couloir, chambre d\'enfant. C\'est le choix par défaut du professionnel. Brillant / Laqué : reflet miroir (70-100%). Effet spectaculaire sur les boiseries, les portes, les meubles. Amplifie les couleurs. MAIS : montre TOUS les défauts du support (nécessite un ponçage parfait entre chaque couche). Usage : boiseries, portes, plafonds design (effet laqué japonais). Velours : entre mat et satiné (~10% de brillance). Toucher soyeux. Le chic parisien par excellence.'
            },
            {
              title: 'Couleurs et nuanciers pro',
              content: 'Nuanciers professionnels : RAL (industriel, 213 teintes standard + 1625 en RAL Design), NCS (Natural Color System — le plus utilisé en architecture, notation scientifique S 1050-Y90R), Pantone (design/graphisme, pas adapté à la peinture bâtiment). Nuanciers éditeurs : Farrow & Ball (132 teintes exclusives, gamme « moderne country » anglaise), Little Greene (144 teintes, patrimoine anglais), Ressource (Paris, palette raffinée), Flamant (belge, teintes profondes), Tollens (gamme Inspired by Pantone). TOUJOURS commander un échantillon pot test ou un aplat A4 — la couleur change RADICALEMENT entre le nuancier papier, l\'écran et le mur réel (métamérisme, lumière du jour vs artificielle). Appliquer l\'échantillon sur le mur RÉEL, observer à différentes heures de la journée.'
            },
            {
              title: 'Préparation et application',
              content: 'La préparation du support représente 70% de la réussite d\'une peinture. Mur neuf (placo BA13) : 1 couche d\'impression (fixe le plâtre, uniformise l\'absorption) + 2 couches de finition. Mur ancien en bon état : lessivage, ponçage léger (grain 120), dépoussiérage, 1 sous-couche + 2 couches. Mur ancien dégradé : rebouchage (enduit de rebouchage Toupret ou Semin), ponçage, impression, 2-3 couches de finition. FISSURES : les reboucher avec un enduit fibré (souple) — un enduit classique refissurera. Temps de séchage entre couches : 4-6h acrylique, 12-24h glycéro. Application rouleau : le plus courant. Rouleau laqueur (velours ras) pour les finitions satinées/brillantes. Rouleau à poil moyen pour les mats. Le pistolet airless est réservé aux grandes surfaces (chantier neuf) — rendu plus tendu mais nécessite de protéger TOUT le chantier.'
            }
          ],
          keyPoints: [
            'Plafond = TOUJOURS mat. Mur = satiné par défaut (lessivable). Boiseries = alkyde satiné ou brillant',
            'L\'alkyde émulsion remplace la glycéro — résistance équivalente, sans l\'odeur ni les COV',
            'TOUJOURS tester la couleur sur le mur réel à différentes heures — le nuancier papier ment',
            'La préparation du support = 70% de la réussite. Pas de raccourci possible',
            'Farrow & Ball, Little Greene, Ressource = les 3 marques premium qui font la différence en prescription'
          ],
          tips: [
            'La teinte Farrow & Ball « Hague Blue » (n°30) est le bleu profond le plus demandé en architecture d\'intérieur — il fonctionne dans TOUTES les lumières',
            'Pour un mur parfaitement lisse en laque brillante : 2 couches d\'enduit + ponçage 180 + impression + ponçage 240 + 2 couches laque avec ponçage 320 entre les deux. C\'est 3x plus de travail mais le résultat est un miroir',
            'Inscrire « peinture finition velours » dans le CCTP plutôt que « mat » = le peintre appliquera un produit légèrement plus résistant et le résultat sera plus raffiné'
          ],
          tags: ['peinture', 'mur', 'finition', 'mat', 'satiné', 'couleur', 'RAL', 'Farrow & Ball']
        },
        {
          id: 'papier-peint',
          category: 'Revêtements Muraux',
          title: 'Papier Peint & Revêtements Muraux Collés',
          subtitle: 'Intissé, vinyle, panoramique, toile de verre',
          summary: 'Le papier peint est bien plus qu\'un « papier » — c\'est une famille de revêtements muraux aux propriétés très variées. Du panoramique d\'auteur à la toile de verre technique, chaque type a son usage précis.',
          sections: [
            {
              title: 'Types de papier peint',
              content: 'Intissé (non-tissé) : support en fibres synthétiques et cellulose. LE standard actuel — indéchirable, pose facile (colle sur le mur, pas sur le lé), cache les micro-fissures. Le choix par défaut en résidentiel. Vinyle sur intissé : couche de PVC sur support intissé. Lessivable, résistant à l\'humidité. Idéal cuisine, SDB (hors zone de projection directe), couloir, chambre d\'enfant. Vinyle expansé : relief en PVC — cache les défauts du support. Papier peint traditionnel (simplex/duplex) : papier classique. Fragile, pose délicate (colle sur le lé, trempage), se déchire facilement. De plus en plus rare. Toile de verre : tissu en fibre de verre à peindre. Ultra-résistant (classé M1 — quasi incombustible). Cache les fissures. Usage : locatif, hôtellerie, ERP. Aspect texturé (maille, chevron, crépi). Flizeline (Vlies) : non-tissé premium, rendu textile mat très élégant. Marques haut de gamme : Rasch, Elitis.'
            },
            {
              title: 'Papier peint d\'éditeur & panoramique',
              content: 'Les éditeurs de papier peint haut de gamme sont de véritables maisons de création. Éditeurs français : Élitis (textures luxueuses, effet matière — le plus spécifié par les architectes), Pierre Frey (classique raffiné, palmettes, toiles de Jouy), Casamance (contemporain accessible), Nobilis (textures, soieries), Zuber (panoramiques historiques peints à la main — patrimoine mondial, 5 000-30 000€). Éditeurs internationaux : Cole & Son (Londres, motifs iconiques — Fornasetti, Palm Jungle), William Morris (Arts & Crafts, motifs floraux intemporels), Wall&Decò (Italie, papiers peints outdoor, designs contemporains). Le panoramique est LE produit star du moment : un seul mur recouvert d\'une scène à grande échelle (paysage, jungle, abstrait). Rendu spectaculaire. Un panoramique sur-mesure coûte 80-300€/m² (Élitis, Wall&Decò) mais transforme une pièce entière.'
            },
            {
              title: 'Pose et contraintes techniques',
              content: 'Préparation du support : le mur DOIT être lisse, sec, propre, absorbant uniformément. Appliquer une sous-couche de préparation (Zinsser Gardz, Toupret) sur les murs poreux. Le raccord : droit (les motifs se raccordent horizontalement — simple), sauté (décalé d\'1/2 motif — plus de chutes, ~10-15% de perte), libre (motif aléatoire — le plus économique). TOUJOURS calculer la quantité avec le raccord — erreur classique = pas assez de rouleaux et le bain de fabrication a changé entre deux commandes. Sens de pose : toujours du même côté (commencer par la fenêtre, tourner dans le même sens) — sinon différence de nuance visible entre les lés (effet « shading »). Un poseur professionnel spécialisé papier peint est INDISPENSABLE pour les produits haut de gamme — un peintre classique n\'a pas le savoir-faire.'
            },
            {
              title: 'Usage en projet',
              content: 'Le mur d\'accent en papier peint panoramique = le geste le plus impactant et le plus rentable en décoration d\'intérieur. 1 mur suffit. Un mur Élitis ou Cole & Son à 150€/m² sur 8m² = 1 200€ — et il transforme la pièce davantage que 10 000€ de mobilier. Usage par pièce : salon = panoramique ou papier texturé (1 mur), chambre = motif doux ou panoramique paysage (mur tête de lit), SDB = vinyle résistant à l\'humidité (mur vasque), entrée = papier graphique (première impression). NE PAS mettre de papier peint : plafond bas + papier sombre = effet étouffant. Petite pièce + gros motif = effet papier cadeau. Partout = effet « boîte ». La règle d\'or : UN mur d\'accent + les autres en peinture unie coordonnée.'
            }
          ],
          keyPoints: [
            'Intissé = le standard moderne. Colle sur le mur, pas sur le lé. Indéchirable.',
            'Un mur d\'accent en panoramique = le geste déco le plus impactant au rapport qualité/prix',
            'TOUJOURS calculer les rouleaux avec le raccord + commander au même bain de fabrication',
            'Élitis, Cole & Son, Pierre Frey = les 3 éditeurs incontournables en prescription pro',
            'La toile de verre est le revêtement le plus résistant (M1) — idéal en ERP et locatif'
          ],
          tips: [
            'Le papier peint Élitis gamme « Anguille Big Croco » (faux cuir texturé) en tête de lit = effet WOW garanti chez chaque client',
            'Pour les budgets serrés : le panoramique Rebel Walls (suédois, impression numérique) offre des panoramiques sur-mesure à partir de 40€/m²',
            'En rénovation locative : toile de verre + peinture = le combo le plus solide et le plus pérenne — les locataires ne l\'abîment pas'
          ],
          tags: ['papier peint', 'mur', 'panoramique', 'intissé', 'Élitis', 'décoration', 'éditeur']
        },
        {
          id: 'enduits-decoratifs',
          category: 'Revêtements Muraux',
          title: 'Enduits Décoratifs : Tadelakt, Stuc, Chaux',
          subtitle: 'Les finitions minérales artisanales',
          summary: 'Les enduits décoratifs minéraux (tadelakt, stuc vénitien, chaux, terre) sont les finitions les plus nobles et les plus tactiles qui existent. Ils transforment un mur en surface vivante, vibrante de lumière. Mais ce sont des produits d\'artisan — pas de bricoleur.',
          sections: [
            {
              title: 'Tadelakt',
              content: 'Enduit traditionnel marocain à base de chaux de Marrakech (chaux hydraulique naturelle cuite à basse température). Application : 2 couches de 3-5mm, lissé à la taloche puis poli à la pierre d\'agate ou au galet. Imperméabilisé au savon noir (saponification de la chaux = surface brillante et imperméable). Le tadelakt est NATURELLEMENT ÉTANCHE — c\'est l\'un des seuls enduits directement utilisable en douche et en vasque. Aspect : surface lisse, brillante, avec des nuances de profondeur. Rappelle le marbre poli. Couleurs : pigments naturels (terres, ocres). Palette chaude : terracotta, sable, blanc cassé, rose poudré. Contrainte : artisan spécialisé tadelakt (pas un plâtrier classique). Application longue (1 mur/jour). Prix : 120-250€/m² posé. Entretien : savon noir 1-2x/an. Pas de produits acides (comme le marbre).'
            },
            {
              title: 'Stuc vénitien (Stucco lustro)',
              content: 'Enduit à base de chaux aérienne et de poudre de marbre. Inventé à Venise à la Renaissance pour imiter le marbre à moindre coût. Application : 3 à 7 couches ultrafines (0,5mm chacune), appliquées à la spatule inox, chaque couche poncée et lissée. La dernière couche est ferrée (passage à la spatule chaude) pour créer un poli miroir. L\'effet de profondeur vient des couches superposées — la lumière pénètre et se réfracte comme dans le marbre véritable. C\'est la finition murale la plus LUXUEUSE qui existe. Aspect : effet marbre veiné, poli miroir, profondeur visuelle extraordinaire. Le stuc vénitien bien exécuté est INDISCERNABLE du vrai marbre. Prix : 150-400€/m² posé (selon le nombre de couches et la finition). Marques de matières premières : Viero (Italie), Novacolor (Italie), San Marco.'
            },
            {
              title: 'Enduit à la chaux',
              content: 'La chaux est le liant minéral le plus ancien et le plus sain du bâtiment. Chaux aérienne (CL90) : la plus fine, la plus noble. Prise lente à l\'air (carbonatation). Pour les enduits décoratifs et les badigeons. Chaux hydraulique naturelle (NHL) : prise à l\'eau. Plus résistante mécaniquement. Pour les enduits de corps et les pièces humides. Le badigeon de chaux : chaux diluée dans l\'eau, appliquée en passes croisées à la brosse. Aspect : velouté, irrégulier, lumineux. Coût très faible (10-20€/m² en matière). Le « patinem » : mélange de chaux, de pigments et d\'huile de lin. Crée un effet patiné vieilli — parfait pour le style provençal/toscan. L\'enduit chaux est PERSPIRABLE — il laisse passer la vapeur d\'eau. Idéal en rénovation de bâti ancien (pierre, pisé, torchis) où le ciment est INTERDIT.'
            },
            {
              title: 'Comment prescrire',
              content: 'Le client veut un mur « effet béton » → stuc gris ou micro-ciment. Le client veut un mur lumineux et vivant → badigeon de chaux blanche (effet capri/méditerranéen). Le client veut un mur de douche spectaculaire → tadelakt (le seul enduit naturellement étanche). Le client veut un mur ultra-luxe « effet marbre » → stuc vénitien poli (le sommet de l\'art). Le client veut rénover un mur ancien en pierre → enduit chaux NHL (jamais de ciment !). Budget serré : badigeon de chaux (20-40€/m² posé) = le meilleur rapport effet/prix. Le badigeon est même faisable en DIY si le client est motivé. Budget illimité : stuc vénitien 7 couches (400€/m²) = une œuvre d\'art murale. Dans TOUS les cas : faire un panneau test de 60x60cm minimum avant de lancer le mur entier — les enduits décoratifs sont imprévisibles.'
            }
          ],
          keyPoints: [
            'Le tadelakt est le seul enduit naturellement étanche — utilisable en douche',
            'Le stuc vénitien est la finition murale la plus luxueuse — indiscernable du marbre si bien exécuté',
            'La chaux est PERSPIRABLE — obligatoire en bâti ancien (pierre, pisé, torchis)',
            'Tous ces enduits nécessitent un artisan spécialisé — pas un peintre/plâtrier classique',
            'Toujours faire un panneau test 60x60cm avant de valider'
          ],
          tips: [
            'Un mur d\'accent en tadelakt terracotta dans une salle de bain blanche = le geste signature qui rend un projet mémorable',
            'Le badigeon de chaux blanc sur pierre apparente = le combo provençal parfait, 20€/m² de matière, effet « maison de vacances en Grèce »',
            'Le stuc Novacolor « Marmorino » est le produit le plus accessible pour découvrir le stuc vénitien sans artisan ultra-spécialisé'
          ],
          tags: ['enduit', 'tadelakt', 'stuc', 'chaux', 'mur', 'artisanal', 'minéral', 'vénitien']
        },
        {
          id: 'lambris-tasseaux',
          category: 'Revêtements Muraux',
          title: 'Lambris, Tasseaux & Habillages Bois',
          subtitle: 'Du lambris classique au mur de tasseaux contemporain',
          summary: 'Le bois au mur connaît un retour massif — mais pas sous la forme du lambris PVC des années 90. Tasseaux verticaux, panneaux cannelés, lambris peints, MDF rainuré : l\'habillage bois mural est devenu un geste architectural majeur.',
          sections: [
            {
              title: 'Lambris bois massif',
              content: 'Le lambris classique : lames de bois massif (pin, sapin, chêne, châtaignier) assemblées par rainure-languette, fixées sur tasseaux ou collées. Épaisseur : 10-22mm. Largeurs : 70-150mm. Pose : horizontale (allonge visuellement la pièce), verticale (agrandit la hauteur — le choix contemporain), diagonale ou en chevron (graphique). Le lambris massif est un excellent isolant acoustique et un régulateur d\'humidité naturel. Finitions : brut (à peindre ou lasurer), brossé (texture accentuée), raboté (lisse), vieilli/brossé-blanchi (style bord de mer). Le lambris peint en blanc mat ou en couleur pastel est redevenu très chic — effet « New England » ou « cottage scandinave ». Prix : lambris pin raboté 10-25€/m², chêne massif 40-80€/m². NE PAS confondre avec le lambris PVC (imitation bois plastique — cheap et non écologique).'
            },
            {
              title: 'Tasseaux — le geste contemporain',
              content: 'Le mur de tasseaux verticaux est LE geste déco le plus tendance en 2024-2026. Des lattes de bois régulièrement espacées créent un rythme visuel puissant et une profondeur remarquable. Dimensions courantes : tasseaux 20x40mm, 30x30mm, 20x50mm, espacés de 20-40mm. Essences : chêne (le plus noble), pin (le plus accessible — à teinter), MDF (le plus régulier — à peindre). Fixation : collage au mastic polymère (Sika, Bostik) sur mur plan + clouage en finition (clous sans tête). Ou sur tasseau horizontal de support. Applications : mur d\'accent salon ou chambre, tête de lit, claustra/séparation de pièce, habillage de meuble TV, crédence (derrière verre pour la cuisine). Avantage caché : les tasseaux cachent les câbles et les imperfections du mur. Le jeu de lumière rasante sur les tasseaux crée un effet d\'ombre spectaculaire. Prix : DIY 30-60€/m², posé par artisan 80-150€/m².'
            },
            {
              title: 'Panneaux décoratifs (MDF, cannelé, 3D)',
              content: 'Panneaux MDF rainurés (cannelés) : plaques de MDF avec rainures régulières en V ou en U. Effet « tasseaux » prêt à poser — beaucoup plus rapide et régulier que les vrais tasseaux. Marques : Decospan, Marotte (français). Se peignent dans n\'importe quelle couleur. Panneaux 3D : MDF ou plâtre avec des motifs en relief (vagues, diamants, hexagones, organiques). Effet sculptural spectaculaire. Marques : WallArt, NMC, Orac Decor. Prix : 30-80€/m². Panneaux acoustiques décoratifs : feutre, mousse ou bois perforé. Combinent esthétique et absorption acoustique. Marques : Baux (suédois, feutre de laine pressée), Offecct, Woven Image. Le panneau MDF cannelé peint en noir mat ou vert forêt = le fond de meuble TV le plus instagrammable du moment.'
            },
            {
              title: 'Mise en œuvre et conception',
              content: 'Mur de tasseaux — étapes : 1) Préparer le mur (peinture de fond de la même couleur que les tasseaux pour que les interstices soient invisibles). 2) Tracer les verticales au niveau laser. 3) Couper les tasseaux à la bonne longueur (scie à onglet pour la précision). 4) Coller au mastic PU + clouer (clous sans tête). 5) Retouche de peinture si nécessaire. Erreur classique n°1 : ne pas peindre le mur de fond → on voit le mur blanc dans les intervalles. Erreur classique n°2 : tasseaux trop fins (<20mm) → pas assez de profondeur, effet « store vénitien ». Erreur classique n°3 : ne pas calculer la répartition → les coupes tombent mal aux extrémités. TOUJOURS dessiner le calepinage avant et centrer le motif sur le mur.'
            }
          ],
          keyPoints: [
            'Les tasseaux verticaux = LE geste tendance. 20x40mm espacés de 30mm est la proportion parfaite',
            'TOUJOURS peindre le mur de fond de la même couleur que les tasseaux AVANT de les poser',
            'Le panneau MDF cannelé est l\'alternative rapide et régulière aux vrais tasseaux',
            'Le lambris bois peint en blanc ou en couleur est redevenu très chic (≠ lambris PVC)',
            'La lumière rasante latérale est ESSENTIELLE — elle crée les ombres qui font tout l\'effet'
          ],
          tips: [
            'Tasseaux chêne naturel sur fond noir mat = la version la plus contemporaine et luxueuse',
            'Les tasseaux en tête de lit, prolongés au plafond (2-3 lames qui remontent) = effet architectural spectaculaire',
            'Panneau MDF cannelé Decospan en vert sauge (Little Greene Sage Green) derrière le canapé = le mur d\'accent Pinterest-proof'
          ],
          tags: ['lambris', 'tasseaux', 'bois', 'mur', 'MDF', 'cannelé', 'tendance', '3D']
        },
        {
          id: 'carrelage-mural',
          category: 'Revêtements Muraux',
          title: 'Carrelage Mural : Faïence, Zellige, Mosaïque',
          subtitle: 'Les revêtements céramiques muraux',
          summary: 'Le carrelage mural va bien au-delà du simple « carrelage blanc de salle de bain ». Zellige artisanal, faïence émaillée, mosaïque, grès cérame mural — chaque type crée une atmosphère radicalement différente.',
          sections: [
            {
              title: 'Faïence',
              content: 'La faïence est un carreau de céramique à pâte poreuse recouverte d\'un émail. C\'est le carrelage mural le plus courant. Différence avec le grès cérame : la faïence est plus tendre, plus poreuse, plus légère — elle ne convient qu\'au MUR (trop fragile pour le sol). L\'émail peut être brillant (classique), mat (contemporain), craquelé (effet artisanal vieilli), ondulé/biseauté (carreaux « métro »). Le carreau métro (7,5x15cm ou 10x20cm) : inventé pour le métro parisien en 1900. Le format le plus iconique du design intérieur. Biseauté (bords chanfreinés) = le classique. Plat = le contemporain. Pose : à joints décalés (classique), en chevron, en bâtons rompus, verticale (tendance). Le carrelage métro blanc brillant est INTEMPOREL — il fonctionne dans absolument toutes les cuisines et salles de bain du monde. Prix : carrelage métro basique 10-25€/m², éditeur 30-60€/m². Marques : Equipe (espagnol, excellent rapport qualité/prix), Mutina (italien, design), Made a Mano.'
            },
            {
              title: 'Zellige',
              content: 'Le zellige est un carreau de terre cuite émaillé, fabriqué artisanalement au Maroc (principalement à Fès). Chaque carreau est unique — irrégulier en forme, en épaisseur et en teinte. C\'est cette imperfection qui fait son charme et sa valeur. Format traditionnel : 10x10cm (le plus courant), 5x5cm (très graphique), losanges, étoiles (motifs géométriques islamiques). L\'émail est cuit au feu de bois — les variations de couleur sont naturelles et intentionnelles. Un mur en zellige vibre et capte la lumière de manière vivante — aucun matériau industriel ne peut reproduire cet effet. Couleurs iconiques : vert de Fès, bleu cobalt, blanc ivoire, terracotta, rose poudré. Pose : les irrégularités des carreaux nécessitent un joint plus large (3-5mm) et un poseur expérimenté. Chaque carreau se taille à la main à la marteline. Prix : 60-150€/m² fourni (artisanal marocain authentique), 30-60€/m² (imitation industrielle — perd 80% du charme). NE PAS commander du zellige en ligne sans voir un échantillon — les teintes varient énormément d\'un lot à l\'autre.'
            },
            {
              title: 'Mosaïque',
              content: 'La mosaïque est composée de petits éléments (tesselles) de 10x10mm à 50x50mm, montés sur trame (filet en fibre de verre ou papier). Matériaux : grès cérame (le plus courant, résistant), pâte de verre (translucide, coloris intenses — piscines, douches), émaux de Briare (français, semi-opaques, haut de gamme), pierre naturelle (marbre, travertin — mosaïques de sol antiques), miroir (effet brillant, agrandit l\'espace), métal (inox, laiton — accent contemporain). La mosaïque est le seul revêtement qui s\'adapte PARFAITEMENT aux surfaces courbes (colonnes, niches, vasques). Pose : double encollage sur trame, joints ciment (fin). Applications : douche à l\'italienne (sol + murs — antidérapante naturellement), niche de douche (l\'accent parfait), crédence cuisine, revêtement de vasque, frise décorative. Une bande de mosaïque dorée dans une douche en faïence blanche = le détail luxe accessible. Prix : 30-80€/m² (grès/pâte de verre standard), 100-300€/m² (émaux de Briare, pâte de verre Bisazza). Marques : Bisazza (ultra-luxe italien), Onix (espagnol), Hisbalit, Sicis.'
            },
            {
              title: 'Tendances et prescriptions',
              content: 'Le zellige vert d\'eau en crédence de cuisine blanche = le combo le plus demandé en 2024-2026. Le carrelage grand format mural (60x120cm grès cérame fin 6mm) remplace la faïence classique en salle de bain haut de gamme — moins de joints, rendu épuré. La pose verticale du carreau métro (debout au lieu de couché) est la version contemporaine du classique. Le mélange zellige + faïence + bois dans une même salle de bain crée une richesse de textures incomparable. Le grès cérame imitation zellige (Equipe, Wow) offre 70% de l\'effet pour 30% du prix — compromis acceptable. La niche de douche habillée d\'un matériau différent du reste (mosaïque dans une douche en grès, zellige dans une douche en béton ciré) = le geste signature. Calepinage mural : faire un plan en élévation AVANT le chantier — le positionnement des coupes et des joints est visible (contrairement au sol).'
            }
          ],
          keyPoints: [
            'Faïence = mur uniquement (trop fragile pour le sol). Grès cérame = sol ET mur',
            'Le zellige est artisanal et UNIQUE — ses imperfections sont sa valeur, pas un défaut',
            'Le carreau métro biseauté blanc = le revêtement mural le plus intemporel qui existe',
            'La mosaïque est le seul revêtement adapté aux surfaces courbes',
            'TOUJOURS faire une élévation de calepinage mural — les coupes se voient au mur'
          ],
          tips: [
            'Zellige 10x10 vert de Fès en crédence de cuisine = le geste déco qui rend n\'importe quelle cuisine « magazine »',
            'Une niche de douche en mosaïque dorée dans un mur de grès gris = le détail luxe qui coûte 50€ mais vaut 5 000€ visuellement',
            'Carrelage métro blanc posé verticalement avec joint gris anthracite = version contemporaine et chic du classique'
          ],
          tags: ['carrelage', 'mur', 'zellige', 'faïence', 'mosaïque', 'métro', 'céramique', 'crédence']
        },
        {
          id: 'essences-bois-detail',
          category: 'Bois Approfondi',
          title: 'Essences de Bois : Guide Complet',
          subtitle: 'Chêne, noyer, frêne, hêtre, résineux, exotiques — tout savoir pour bien prescrire',
          summary: 'Le choix d\'une essence de bois engage le projet sur 50 ans. Dureté, couleur, veinure, stabilité, prix — chaque essence a un profil unique. L\'architecte d\'intérieur qui dit « du bois » sans préciser l\'essence, c\'est comme un chef qui dit « de la viande » sans préciser le morceau.',
          sections: [
            {
              title: 'Chêne (Quercus)',
              content: 'LE bois de référence en France et en Europe. Dureté Brinell : 3,7-3,9 — résistant mais travaillable. Couleur : brun doré à brun miel (fonçe avec le temps). Veinure marquée, fil droit avec des mailles argentées caractéristiques en débit sur quartier. Stabilité : bonne (retrait faible — classe 2-3 selon traitement). Usages : parquet (le n°1 absolu — 80% des parquets massifs en France sont en chêne), menuiserie intérieure (portes, escaliers, meubles), charpente, bardage. Classes : chêne premier choix (nœuds rares, aubier absent, couleur homogène — CHER), chêne rustique (nœuds acceptés, veines marquées — le plus courant et le plus beau en déco contemporaine), chêne campagne (gros nœuds, fentes, variations — style brut/industriel). Chêne français vs chêne européen : le chêne français (Quercus petraea/robur) est le plus réputé — grain fin, belles mailles, il sert aussi pour les tonneaux de grands crus. Prix parquet massif chêne premier choix : 60-120€/m². Chêne rustique : 40-80€/m².'
            },
            {
              title: 'Noyer (Juglans)',
              content: 'Le bois noble par excellence — le plus prisé en ébénisterie depuis le XVIIe siècle. Dureté Brinell : 3,4 — mi-dur. Couleur : brun chocolat profond avec nuances violacées, aubier clair contrastant. Veinure somptueuse, souvent ondulée ou flammée. Noyer français (Juglans regia) : le roi — couleur riche, grain fin, raréfié et très cher (placage : 40-80€/m², massif : 150-300€/m²). Noyer américain (Juglans nigra / Black Walnut) : plus sombre, violacé, très tendance en design contemporain, plus disponible que le français. Prix : 80-150€/m² massif. Le noyer est LE bois des cuisines haut de gamme (façades placage), des bureaux de direction, des tables sculpturales. Sa couleur foncée « réchauffe » les intérieurs blancs et minimalistes — c\'est le mariage parfait du contemporain et du noble. Stabilité moyenne — sensible à l\'humidité. À utiliser en intérieur exclusivement. Peut être huilé (aspect mat naturel) ou verni (brillant, plus protecteur).'
            },
            {
              title: 'Frêne, Hêtre, Érable',
              content: 'Frêne (Fraxinus) : bois clair, presque blanc avec des nuances olivâtres. Dureté Brinell : 4,0 — DUR, excellent pour les parquets très sollicités. Fil droit, veinure longue et régulière. Le bois « blond scandinave » par excellence. Très utilisé en mobilier danois (Ercol, Carl Hansen). Peut être thermo-traité (frêne rétifié) → devient brun foncé, imputrescible, utilisable en extérieur. Prix parquet : 50-90€/m². Hêtre (Fagus) : bois rosé clair, grain très fin et homogène, dureté 3,8. Le bois le plus utilisé en France après le chêne. Très apprécié en mobilier (chaises bistrot Thonet !), plans de travail, escaliers. Inconvénient : sensible à l\'humidité et aux variations dimensionnelles — PAS pour les pièces humides. Prix : 30-60€/m². Érable (Acer) : bois blanc nacré, grain ultra-fin, dureté 3,5. Le bois le plus clair qui existe naturellement. Érable sycomore (Europe) : reflets nacrés, prisé en lutherie et marqueterie. Érable à sucre (Amérique) : « hard maple », très dur (4,8 Brinell), parquets sportifs (NBA !). Le bois des intérieurs ultra-lumineux.'
            },
            {
              title: 'Résineux',
              content: 'Pin sylvestre : le plus courant, peu cher (15-30€/m²), nœuds fréquents, couleur jaune miel. Usage : lambris, étagères, structure. Pin Douglas : plus résistant, rougeâtre, adapté à l\'extérieur. Épicéa (Sapin blanc) : blanc crème, léger, peu de nœuds dans les premiers choix. Le bois du sapin de Noël… mais aussi des lambris scandinaves et des chalets haut de gamme. Mélèze : le roi des résineux — brun rougeâtre, très résistant naturellement (classe 3 sans traitement), imputrescible. Le bois de bardage par excellence. Prix : 40-70€/m². Cèdre rouge (Western Red Cedar) : rougeâtre, odorant, imputrescible naturel. Le bardage premium (50-80€/m²). En résumé : les résineux sont MOINS chers mais MOINS nobles que les feuillus. En architecture d\'intérieur, on les utilise pour : les lambris (épicéa), les structures (pin Douglas), le style « chalet chic » (mélèze, épicéa 1er choix), les bardages extérieurs (mélèze, cèdre). Attention : les résineux « jaunissent » avec le temps et la lumière UV — traiter avec une lasure ou un vernis anti-UV.'
            },
            {
              title: 'Bois exotiques',
              content: 'Teck (Tectona grandis) : LE bois tropical de référence. Brun doré, huileux naturellement (imputrescible), dureté 3,5. Le bois des ponts de bateau, des terrasses, du mobilier de jardin. Origine : Birmanie, Indonésie. Attention : exiger la certification FSC (forêts gérées durablement). Prix : 80-150€/m². Iroko : l\'alternative africaine au teck, moins chère (50-80€/m²). Brun jaune, résistant, stable. Plan de travail cuisine, salle de bain. Wengé : brun très foncé, presque noir. Dureté extrême (4,5). Spectaculaire en parquet ou en placage — mais il écrase les espaces sombres. Très tendance 2000-2010, moins demandé aujourd\'hui. Padouk : rouge vif à l\'état brut (fonce au brun avec le temps). Spectaculaire en détails décoratifs (inserts, nez de marche). Bambou : techniquement une graminée, pas un bois. Très dur en version « strand woven » (4,5 Brinell !), écologique (pousse en 5 ans vs 80 ans pour un chêne). Parquet bambou : 30-60€/m². L\'alternative crédible au bois tropical. ATTENTION : les bois exotiques posent des questions éthiques (déforestation). Toujours exiger FSC ou PEFC. Privilégier les essences françaises/européennes quand c\'est possible.'
            }
          ],
          keyPoints: [
            'Le chêne = 80% des parquets massifs en France — la référence absolue, 3 classes de tri (premier choix, rustique, campagne)',
            'Le noyer = le bois noble par excellence — brun chocolat, le roi des cuisines haut de gamme et des meubles sculptés',
            'Le frêne = le blond scandinave, le plus dur des feuillus courants (Brinell 4,0)',
            'Mélèze = le roi des résineux, naturellement imputrescible (classe 3), idéal en bardage',
            'Toujours exiger FSC ou PEFC pour les bois exotiques — question éthique incontournable'
          ],
          tips: [
            'Chêne rustique + huile blanche = le parquet scandinave qui fait 80% des projets Pinterest. Simple, beau, intemporel, 50-70€/m² posé',
            'Noyer américain en placage sur MDF pour les façades de cuisine = le look luxe à prix raisonnable (80-120€/m² vs 200-300€/m² en massif)',
            'Le frêne thermo-traité (rétifié) est une alternative française et écologique au teck pour les terrasses et salles de bain — même résistance, sans déforestation tropicale'
          ],
          tags: ['bois', 'essence', 'chêne', 'noyer', 'frêne', 'hêtre', 'teck', 'parquet', 'massif']
        },
        {
          id: 'panneaux-derives-bois',
          category: 'Bois Approfondi',
          title: 'Panneaux Dérivés du Bois',
          subtitle: 'MDF, OSB, contreplaqué, mélaminé, stratifié HPL — le vrai cœur de l\'agencement',
          summary: 'En réalité, 90% de l\'agencement intérieur n\'est PAS en bois massif — c\'est en panneaux dérivés. MDF, mélaminé, stratifié, contreplaqué : ces matériaux sont le squelette invisible de toute cuisine, tout placard, tout meuble sur-mesure. Les connaître est essentiel pour prescrire intelligemment.',
          sections: [
            {
              title: 'MDF (Medium Density Fibreboard)',
              content: 'Panneau de fibres de bois agglomérées sous pression avec résine synthétique. Surface ultra-lisse, homogène, pas de fil ni de nœuds — parfait pour la peinture et le laquage. Épaisseurs : 3-30mm (standard : 16, 19, 22mm). Usages : façades de meubles laquées, portes intérieures peintes (âme MDF), plinthes, moulures, bibliothèques. Le MDF est LE support du laqué — il se ponce et se peint comme un rêve. La majorité des cuisines « laquées blanches » sont en MDF laqué. MDF hydrofuge (vert) : résiste à l\'humidité — pour les SDB et cuisines. MDF ignifugé (rouge) : classement M1 — pour les ERP. Inconvénients : LOURD (750 kg/m³), gonfle irréversiblement au contact de l\'eau (sauf hydrofuge), poussière fine au sciage (masque FFP2 obligatoire — le formaldéhyde est cancérigène en exposition prolongée). Choisir du MDF classé E1 (faible émission de formaldéhyde) ou E0,5. Prix : 8-15€/m² en 19mm.'
            },
            {
              title: 'Contreplaqué (Multiplis)',
              content: 'Feuilles de bois (plis) croisées et collées — chaque pli est perpendiculaire au précédent. C\'est le panneau le PLUS résistant mécaniquement à épaisseur égale. Structure croisée = stabilité exceptionnelle (ne se déforme quasiment pas). Épaisseurs : 3-30mm (standard : 12, 15, 18, 24mm). Essences : bouleau (le plus fin et le plus beau — le « contreplaqué de Finlande »), peuplier (léger, moins cher), okoumé (marin — résistant à l\'eau). Contreplaqué bouleau : la STAR du design contemporain. Ses chants (tranches) montrent les plis alternés — un graphisme naturel qui est devenu un signe esthétique à part entière. Plywood = le matériau des designers (Eames, Aalto). Usages : meubles sur-mesure, étagères, plan de travail (25mm bouleau huilé = magnifique), tête de lit, habillage mural. Contreplaqué marine okoumé : collage classe 3, résistant à l\'eau. Pour les SDB, les meubles de bateau, les cuisines. Prix : bouleau 12mm = 20-35€/m². Okoumé marine 18mm = 25-45€/m².'
            },
            {
              title: 'OSB (Oriented Strand Board)',
              content: 'Panneau de grandes lamelles de bois orientées et pressées. L\'aspect « brut industriel » avec ses copeaux visibles est devenu un CODE ESTHÉTIQUE du style loft/industriel/brutaliste. OSB/1 : usage intérieur sec, non structurel. OSB/2 : structurel, sec. OSB/3 : structurel, milieu humide (le plus courant). OSB/4 : haute performance, milieu humide. Épaisseurs : 9-22mm. Usages décoratifs : habillage mural, fond de meuble apparent, tête de lit, mobilier éphémère (événementiel), cloison de séparation brute. L\'OSB poncé et verni mat = un matériau noble et contemporain quand il est bien mis en œuvre. Inconvénients : surface irrégulière (pas de peinture lisse possible sauf 2 couches d\'apprêt), échardes en chants bruts, formaldéhyde (exiger E1). Prix : le moins cher de tous — 5-10€/m² en 18mm. L\'OSB est aussi excellent en sous-couche de parquet (plancher support) — robuste et bon marché.'
            },
            {
              title: 'Mélaminé & Stratifié HPL',
              content: 'Mélaminé : panneau de particules (aggloméré) ou MDF recouvert d\'une feuille de papier décor imprégnée de résine mélamine, pressée à chaud. C\'est le matériau des cuisines et dressings IKEA et de 80% des meubles de grande distribution. Décors : des centaines de références — imitation chêne, noyer, béton, marbre, uni blanc, noir, couleurs... Avantages : résistant aux rayures et à l\'humidité (en surface), pas d\'entretien, peu cher. Inconvénients : les chants sont le point faible (le panneau de particules dessous est visible — il faut un chant thermocollant ou ABS). Si l\'eau pénètre par un chant mal protégé → gonflement irréversible. Épaisseurs : 16, 18, 19, 25mm. Prix : 10-25€/m². Marques de décors : Egger (leader européen), Kronospan, Cleaf (textures ultra-réalistes). Stratifié HPL (High Pressure Laminate) : feuille décorative + kraft imprégné, pressée à haute pression. Beaucoup plus résistant que le mélaminé (chocs, rayures, chaleur, chimie). Le standard des plans de travail cuisine (épaisseur 0,8-1,2mm collé sur panneau). Marques : Formica (l\'inventeur !), Abet Laminati (italien, couleurs spectaculaires), Polyrey, Arpa. Le HPL compact (10-13mm, autoportant) = plans de travail, cloisons WC, mobilier extérieur.'
            },
            {
              title: 'Choisir le bon panneau',
              content: 'Façades de cuisine laquées : MDF 19mm + laque polyuréthane 2 composants. Façades de cuisine décor bois : mélaminé 19mm (Egger) ou placage bois sur MDF. Caissons de cuisine/dressing : mélaminé 16-18mm (blanc, le standard). Plans de travail : stratifié HPL sur aggloméré 38mm (le standard), ou compact HPL 13mm (plus fin, contemporain), ou bois massif/contreplaqué bouleau huilé (plus noble). Étagères sur-mesure : contreplaqué bouleau 18-24mm (le plus beau et le plus solide), ou MDF 22mm si peint. Bibliothèque murale : contreplaqué 18mm — la rigidité du croisé évite la flexion sur de grandes portées. Fond de meuble : MDF 3mm ou HDF 3mm (le fond invisible qu\'on oublie toujours de spécifier !). Mobilier design brut : contreplaqué bouleau chant apparent, ou OSB verni. Budget serré : aggloméré mélaminé 16mm = l\'ossature de base. Budget confort : MDF 19mm ou contreplaqué bouleau. Budget premium : placage bois sur MDF ou contreplaqué.'
            }
          ],
          keyPoints: [
            'Le MDF = LE support du laqué — surface parfaitement lisse, idéal pour les façades de cuisine peintes',
            'Le contreplaqué bouleau = le matériau des designers — chants croisés visibles comme signature esthétique',
            'Le mélaminé = 80% des meubles — peu cher mais attention aux chants (point faible par où l\'eau rentre)',
            'Le HPL (Formica, Abet Laminati) = le standard des plans de travail — plus résistant que le mélaminé',
            'Exiger du classement E1 ou E0,5 pour le formaldéhyde — surtout MDF et aggloméré en espace fermé'
          ],
          tips: [
            'Contreplaqué bouleau 24mm huilé = un plan de travail cuisine magnifique et original à 50€/m² — contre 200€/m² pour un bois massif. Le look est différent (plis visibles sur la tranche) mais très design',
            'IKEA utilise du mélaminé 18mm pour ses caissons — parfaitement acceptable. Le secret : changer les façades par du MDF laqué sur-mesure = la qualité d\'une cuisine à 15 000€ pour 5 000€',
            'L\'OSB 18mm poncé + 2 couches de vernis mat = un habillage mural spectaculaire à 10€/m². Le client voit un mur texturé « brut chic », pas un panneau de chantier'
          ],
          tags: ['MDF', 'OSB', 'contreplaqué', 'mélaminé', 'stratifié', 'HPL', 'panneau', 'agencement', 'Formica']
        },
        {
          id: 'traitement-finition-bois',
          category: 'Bois Approfondi',
          title: 'Traitement & Finition du Bois',
          subtitle: 'Huile, vernis, lasure, cire, saturateur — protéger et sublimer',
          summary: 'Un bois non traité grise, se tache, se dégrade. Le choix de la finition détermine l\'aspect (mat, satiné, brillant), la protection (eau, UV, usure) et l\'entretien. C\'est le dernier geste mais c\'est lui qui fait TOUTE la différence entre un projet amateur et un projet professionnel.',
          sections: [
            {
              title: 'Huile',
              content: 'L\'huile pénètre dans les fibres du bois et le nourrit en profondeur. Elle ne forme PAS de film en surface — le bois reste « vivant », on sent la matière au toucher. C\'est la finition la plus naturelle et la plus tendance en décoration contemporaine. Huile dure (Osmo, Rubio Monocoat, Blanchon) : la référence pour les parquets et les meubles. 1-2 couches suffisent. Séchage 24-48h. Aspect mat à satiné. Rubio Monocoat = 1 seule couche (révolutionnaire — gain de temps énorme sur chantier). Huile-cire : huile + cire naturelle combinées. Protection renforcée, aspect légèrement plus satiné. Blanchon Solid\'Oil, Bona Craft Oil. Huile teintée : permet de colorer le bois tout en gardant l\'aspect huilé. Rubio Monocoat propose 40+ teintes (du blanc pur au noir charbon). Huile blanche = le parquet « scandinave » qui fait rêver. Entretien : réparation locale possible (poncer la zone + réhuiler — impossible avec un vernis). Rafraîchir 1x/an dans les zones de passage. La seule finition qui vieillit BIEN — elle patine au lieu de s\'écailler.'
            },
            {
              title: 'Vernis',
              content: 'Le vernis forme un FILM transparent et dur en surface du bois. Il protège mécaniquement contre les rayures, les taches et l\'eau. Vernis polyuréthane (PU) : le plus résistant. Mono-composant (grand public) ou bi-composant (pro — le top). Aspect mat, satiné ou brillant. Le standard des parquets vitrifiés (on dit « vitrifier » en parquet). 2-3 couches + ponçage inter-couches. Vernis acrylique (phase aqueuse) : moins de COV (odeurs), séchage rapide, aspect plus naturel que le PU. Moins résistant — pour les meubles et les boiseries, pas les parquets très sollicités. Vernis mat contemporain vs vernis brillant classique : le mat est la norme en 2025 — le brillant fait « années 80 ». Mais attention : le vrai mat PU de qualité (Bona Traffic HD Extra Mat) est CHER. Inconvénients du vernis : ne se répare PAS localement — si le film est rayé/écaillé, il faut poncer TOUT le parquet et revitrifier (500-1 000€ pour un T3). Le bois perd son toucher naturel (on touche du plastique). L\'entretien est facile au quotidien mais la rénovation est lourde.'
            },
            {
              title: 'Lasure, saturateur, cire',
              content: 'Lasure : finition semi-pénétrante qui protège le bois des UV et de l\'humidité tout en laissant voir le veinage. C\'est LA finition pour le bois EXTÉRIEUR (volets, bardage, fenêtres bois). Lasure opacifiante = presque comme une peinture mais on voit le relief du bois. Lasure teintée transparente = couleur + protection sans masquer la veinure. Entretien : tous les 3-5 ans en extérieur. Marques : Sikkens (le top pro), Bondex, V33. Saturateur : huile très fluide pour les terrasses et bardages. Sature les fibres en profondeur, ne forme aucun film, n\'écaille pas. L\'alternative moderne à la lasure pour les terrasses. S\'entretient sans poncer (juste nettoyer et repasser une couche). Owatrol, Saturateur Blanchon. Cire : la finition traditionnelle (cire d\'abeille, carnauba). Aspect soyeux, toucher incomparable, odeur délicieuse. MAIS : très fragile (sensible à l\'eau, aux taches, à la chaleur), entretien exigeant (cirage régulier). Réservée au mobilier ancien, aux meubles de prestige, aux boiseries classiques. La cire sur un parquet = un cauchemar d\'entretien (glissant, marqué par chaque goutte d\'eau).'
            },
            {
              title: 'Traitement préventif et curatif',
              content: 'Traitement autoclave : imprégnation sous pression de sels de cuivre (classe 3 ou 4). Rend le bois imputrescible et résistant aux insectes. OBLIGATOIRE pour le bois en contact avec le sol ou l\'humidité permanente (poteaux, terrasses, structures). Le bois autoclave est verdâtre à l\'état neuf (pigments de cuivre) puis grise naturellement. Traitement thermique (rétification) : chauffage du bois à 200-250°C sous atmosphère contrôlée. Le bois devient brun foncé, stable, imputrescible — SANS produit chimique. Le frêne, le peuplier et le pin deviennent aussi résistants que le teck. Alternative écologique à l\'autoclave et aux bois exotiques. Traitement insecticide/fongicide : pour les bois anciens attaqués (vrillettes, capricornes, mérule). Injection sous pression par un professionnel certifié (CTB-A+). Garantie décennale. Obligatoire dans le diagnostic termites. Traitement anti-bleuissement : pour les résineux stockés (le bleu est un champignon esthétique, pas structurel, mais invendable).'
            }
          ],
          keyPoints: [
            'L\'huile = la finition la plus naturelle et tendance — se répare localement, vieillit en patinant',
            'Le vernis = la protection la plus résistante mais irréparable localement (ponçage total si abîmé)',
            'Rubio Monocoat = 1 seule couche d\'huile — la révolution en pose de parquet (gain de temps, résultat mat magnifique)',
            'La lasure = pour l\'EXTÉRIEUR uniquement (volets, bardage) — protège des UV et de l\'humidité',
            'Le traitement thermique (rétification) = l\'alternative écologique aux bois exotiques tropicaux'
          ],
          tips: [
            'Parquet chêne rustique + Rubio Monocoat teinte « Cotton White » = le parquet scandinave du Pinterest — 1 couche, 30 minutes de travail, résultat de magazine. TOUJOURS faire un échantillon sur une chute avant validation client',
            'En rénovation d\'un parquet ancien verni : PROPOSER le passage à l\'huile. Le client découvre le toucher naturel du bois et ne revient jamais au vernis. Ponçage + huile Osmo = 30-40€/m² fourni-posé',
            'Ne JAMAIS cirer un parquet en rez-de-chaussée ou en pièce de vie familiale — les taches d\'eau sont indélébiles et le cirage mensuel, personne ne le fait'
          ],
          tags: ['huile', 'vernis', 'lasure', 'cire', 'traitement', 'finition', 'Rubio Monocoat', 'vitrification']
        },
        {
          id: 'quincaillerie-ferronnerie',
          category: 'Matériaux Complémentaires',
          title: 'Quincaillerie & Ferronnerie d\'Agencement',
          subtitle: 'Charnières, coulisses, poignées, systèmes coulissants — les mécanismes invisibles',
          summary: 'La quincaillerie, c\'est l\'invisible qui fait tout. Un tiroir qui se ferme en silence, une porte qui s\'ouvre d\'un effleurement, un placard qui coulisse sans effort — ce confort quotidien repose sur des mécanismes de précision dont le coût est dérisoire par rapport à l\'impact sur l\'expérience utilisateur.',
          sections: [
            {
              title: 'Charnières (paumelles)',
              content: 'Charnière invisible à encastrer (charnière « de meuble ») : le standard pour TOUS les meubles de cuisine, dressing, salle de bain. 95% du marché = Blum et Hettich. Blum CLIP top BLUMOTION : la référence absolue. Ouverture 110° standard (95° pour angle), fermeture amortie intégrée (BLUMOTION = le « soft close »), réglable en 3 dimensions sans outil. Existe en version « tip-on » (ouverture par pression — pas de poignée = façade lisse). Hettich Sensys : concurrent direct de Blum, même qualité. Le choix entre les deux est souvent une guerre de religion entre menuisiers. Charnière à 170° (Blum CLIP top bi-fold) : pour les meubles d\'angle — la porte s\'ouvre à plat contre le caisson adjacent. Paumelle de porte (charnière d\'huisserie) : pour les portes intérieures. 3 paumelles par porte standard. Paumelle à larder (invisible quand fermée) = le top en design. Simonswerk Tectus = la paumelle invisible la plus connue (80-150€ la paire — cher, mais la porte semble flotter).'
            },
            {
              title: 'Coulisses de tiroir',
              content: 'Coulisse à galets (le bas de gamme — le tiroir qui déraille et grince) : à PROSCRIRE dans tout projet de qualité. Coulisse à billes (sortie partielle ou totale) : correcte, silencieuse, 5-15€/paire. Acceptable pour un budget serré. Coulisse BLUM Tandembox/Legrabox : LE système premium. Sortie totale (le tiroir sort complètement), charge 30-65kg, fermeture BLUMOTION intégrée (le tiroir se referme tout seul en douceur). Le Legrabox = version ultra-fine avec flancs en acier fin — le tiroir le plus élégant du marché. C\'est ce qui fait la différence entre une cuisine à 5 000€ et une cuisine à 15 000€. Hettich ArciTech : l\'alternative — flancs fins en acier, fermeture Silent System. Grass Nova Pro : troisième acteur, très présent chez les cuisinistes allemands. Système Blum SPACE TOWER : pour les colonnes de rangement (grand tiroir vertical avec organisation intérieure). Blum SERVO-DRIVE : ouverture électrique au toucher — le tiroir s\'ouvre quand on pousse la façade. Indispensable pour les façades sans poignée (cuisine minimaliste).'
            },
            {
              title: 'Systèmes coulissants',
              content: 'Porte coulissante en applique (type « grange ») : rail apparent en acier sur le mur. Le look industriel/farmhouse. Rail + roulettes + guide = 100-400€ le kit. Hauteur max 2,40m standard. Porte coulissante à galandage (dans la cloison) : la porte disparaît DANS le mur. Le système le plus élégant — aucun encombrement quand ouvert. Marques : Eclisse (n°1 mondial), Scrigno, Doortech. Le châssis s\'installe AVANT le plâtrage — à prévoir dès la conception. Épaisseur de cloison minimum : 100mm (simple) ou 125mm (double). Prix : châssis seul 200-600€. Porte coulissante de placard : rail haut + guide bas. Classique en dressing. 2-3 vantaux. Profils alu (Sogal, Coulidoor). Système pivotant (porte pivot) : la porte tourne sur un axe décentré. Spectaculaire pour les grandes portes (2,40-3m de haut). Système FritsJurgens = la référence (pivot invisible dans le sol, la porte semble flotter). 800-2 000€ le système — le luxe absolu.'
            },
            {
              title: 'Poignées et accessoires',
              content: 'Poignée : le bijou de la façade. C\'est le premier contact physique avec le meuble. 4 familles : barre (profil en T ou en U, longueur 128-1200mm — la plus contemporaine), bouton (rond, carré, conique — plus classique ou vintage), coquille (encastrée dans la façade — flush, minimaliste), intégrée (gorge fraisée dans la façade elle-même = la plus invisible). Matériaux : acier inox brossé (le classique moderne), laiton brossé/patiné (la tendance 2024-2026 — chaleureux, luxe discret), noir mat (le standard design actuel), cuir (Turnstyle Designs = le top — poignée en cuir sur tige métal), bois (scandinave). Marques premium : Dauby (belge, laiton patiné artisanal), FSB (allemand, design Bauhaus), Formani (néerlandais, architectes), Turnstyle (anglais, cuir). Grande distribution qualité : Ikea (rapport qualité/prix imbattable), Entraxe standard : 128mm (le plus courant), 160mm, 192mm. TOUJOURS vérifier l\'entraxe avant de commander. Serrure de porte intérieure : cylindre européen, béquille (poignée de porte), rosace (plaque ronde autour). Marques : Vachette, Bricard, Fichet (haut de gamme).'
            }
          ],
          keyPoints: [
            'Blum et Hettich = 95% de la quincaillerie de meubles. Le soft-close (BLUMOTION) est devenu le MINIMUM attendu',
            'Le Legrabox Blum = le tiroir premium — flancs fins en acier, fermeture amortie, charge 65kg',
            'Le galandage (Eclisse) = la porte qui disparaît dans le mur — à prévoir DÈS la conception',
            'Le laiton brossé/patiné = LA tendance poignées 2024-2026 — chaleur + luxe discret',
            'L\'entraxe 128mm est le plus courant — TOUJOURS le vérifier avant de commander des poignées'
          ],
          tips: [
            'Changer les poignées d\'une cuisine existante = le relooking le plus impactant au coût le plus faible. 15 poignées Dauby en laiton = ~600€ mais la cuisine semble neuve',
            'Blum tip-on + façade sans poignée = la cuisine la plus épurée possible. Le client pousse la façade, elle s\'ouvre. MAIS : les traces de doigts sur les façades mates sont un vrai problème — prévenir le client',
            'Pour une porte coulissante en applique « style industriel » : le rail en acier brut + roulettes apparentes est spectaculaire, mais le joint entre le mur et la porte ne sera JAMAIS étanche au bruit et à la lumière'
          ],
          tags: ['quincaillerie', 'charnière', 'Blum', 'tiroir', 'coulissant', 'poignée', 'galandage', 'ferrure']
        },
        {
          id: 'verre-vitrages-deco',
          category: 'Matériaux Complémentaires',
          title: 'Verre : Types, Usages & Intégration',
          subtitle: 'Feuilleté, trempé, dépoli, laqué Lacobel, miroir — la matière de lumière',
          summary: 'Le verre est le matériau de la lumière, de la transparence et de l\'agrandissement visuel. En architecture d\'intérieur, il sert de cloison, de crédence, de garde-corps, de plan de travail, de douche, de miroir. Connaître ses types et ses propriétés est indispensable pour prescrire correctement — un verre mal choisi peut être dangereux.',
          sections: [
            {
              title: 'Verre trempé',
              content: 'Le verre trempé (ou securit) est chauffé à ~620°C puis refroidi brutalement. Il est 5x plus résistant qu\'un verre ordinaire et, s\'il casse, il se fragmente en petits morceaux peu coupants (au lieu de grands éclats tranchants). C\'est un VERRE DE SÉCURITÉ — obligatoire dans certains usages. Usages : parois de douche (le standard — 8mm trempé), garde-corps vitré (si feuillage non requis), table basse en verre, étagères vitrées, crédence de cuisine. Le verre trempé ne peut PAS être retaillé après trempe — il doit être commandé aux dimensions finales avec toutes les découpes (trous, encoches) AVANT la trempe. ATTENTION : le verre trempé a un défaut rare mais réel — l\'explosion spontanée due aux inclusions de sulfure de nickel (NiS). 1 verre sur 10 000 peut exploser sans raison. La parade : le verre trempé-trempé (heat-soak test) passe un test de chauffe qui élimine 95% des verres à risque. Le spécifier pour les grandes surfaces vitrées en hauteur.'
            },
            {
              title: 'Verre feuilleté (Stadip)',
              content: 'Le verre feuilleté = 2 feuilles de verre collées sur un ou plusieurs films PVB (polyvinyl butyral) intercalaires. Si le verre casse, les morceaux restent collés au film — pas d\'effondrement, pas de projection de fragments. C\'est LE verre de sécurité pour les garde-corps, les toitures vitrées, les verrières et les planchers de verre. Nomenclature : 44.2 = 2 verres de 4mm + 2 films PVB (épaisseur totale ~8,8mm). 55.2 = 2x5mm + 2 PVB. 66.2 = 2x6mm + 2 PVB (garde-corps). Le feuilleté peut être trempé (trempé-feuilleté = la double sécurité — obligatoire en garde-corps toute hauteur et plancher de verre). PVB acoustique : le film PVB peut être « acoustique » (type Silence de Saint-Gobain) — réduit la transmission du bruit de 3-5 dB. Idéal pour les verrières d\'atelier donnant sur un espace bruyant. PVB coloré ou décoratif : le film peut être blanc, coloré, imprimé — verrière semi-opaque, cloison colorée. Prix : verre feuilleté 44.2 clair = 50-80€/m². 66.2 = 80-120€/m².'
            },
            {
              title: 'Verres décoratifs',
              content: 'Verre dépoli (sablé ou acide) : surface translucide (laisse passer la lumière mais pas la vue). Obtenu par sablage mécanique ou attaque à l\'acide fluorhydrique. L\'acide donne un toucher plus soyeux et se salit moins. Usages : porte de douche, cloison de bureau, vitrage de porte intérieure, imposte. On peut créer des motifs en masquant des zones avant le sablage. Verre laqué (Lacobel / Matelac) : verre peint sur la face arrière. La surface est brillante, lisse, réfléchissante. Lacobel (Saint-Gobain) : gamme de couleurs RAL + couleurs tendance. Le blanc Lacobel en crédence de cuisine = le look ultra-contemporain (brillant, facile à nettoyer, résistant à la chaleur si trempé). Noir Lacobel = la crédence luxe. Prix : 60-120€/m² posé. Miroir vieilli/antiqué : miroir dont le tain est volontairement dégradé pour un effet patiné, oxydé, vintage. Spectaculaire en tête de lit, en fond de niche, en crédence de bar. Miroir fumé (teinté gris ou bronze) : élégant, moins « clinique » qu\'un miroir clair. Très tendance. Miroir espion (sans tain) : réfléchissant d\'un côté, transparent de l\'autre (si l\'éclairage est correct). Pour les espaces de vente, les studios d\'enregistrement.'
            },
            {
              title: 'Verre structurel et usages techniques',
              content: 'Crédence de cuisine : verre trempé 6mm laqué (Lacobel) = le standard. Résiste à la chaleur (sauf flamme directe — ÉLOIGNER du gaz !). Alternative au carrelage : pas de joints, nettoyage d\'un coup d\'éponge, couleur uniforme. Pose collée ou avec fixations ponctuelles. Garde-corps : OBLIGATOIREMENT en verre feuilleté (trempé-feuilleté 10+10mm pour les garde-corps toute hauteur). Norme NF P01-012. Fixation : par pinces (type « rotofix »), profil U en pied, ou fixation ponctuelle (boutons spider). Le garde-corps verre = la transparence totale, mais coût élevé (300-600€/ml posé). Verrière d\'atelier : structure acier + simple vitrage (traditionnel) ou double vitrage (si séparation thermique). Verre feuilleté 44.2 recommandé pour la sécurité et l\'acoustique. Paroi de douche : verre trempé 8mm (le minimum — 10mm pour un feeling premium). Traitement anti-calcaire (type « Timeless » de Saint-Gobain ou ClearShield) INDISPENSABLE — sinon le calcaire s\'incruste en 6 mois et ne part plus jamais. Plancher de verre : feuilleté trempé antidérapant, épaisseur calculée par un BET. 44.6 minimum (6 PVB). Spectaculaire en mezzanine ou en puits de lumière.'
            }
          ],
          keyPoints: [
            'Verre trempé = 5x plus résistant, se fragmente en petits morceaux. OBLIGATOIRE pour parois de douche et crédences',
            'Verre feuilleté = les morceaux restent collés au film PVB. OBLIGATOIRE pour garde-corps et planchers',
            'Lacobel (verre laqué) en crédence de cuisine = le look ultra-contemporain, zéro joints, nettoyage facile',
            'Traitement anti-calcaire INDISPENSABLE sur les parois de douche — sinon calcaire irréversible en 6 mois',
            'Le verre trempé se commande aux DIMENSIONS FINALES — impossible de le retailler après trempe'
          ],
          tips: [
            'Miroir fumé bronze en fond de niche éclairée par LED = un effet de profondeur et de luxe spectaculaire pour 30€ de miroir + 20€ de ruban LED. Le ratio impact/coût est imbattable',
            'Crédence Lacobel blanc brillant du plan de travail au plafond = la cuisine semble 2x plus grande (effet de réflexion). TOUJOURS tremper le verre près de la plaque de cuisson',
            'En copropriété haussmannienne : remplacer les impostes opaques des portes par du verre feuilleté dépoli = inonder le couloir de lumière naturelle sans perdre l\'intimité'
          ],
          tags: ['verre', 'trempé', 'feuilleté', 'Lacobel', 'miroir', 'crédence', 'douche', 'garde-corps']
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
          category: 'Couleur',
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
          category: 'Lumière',
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
          category: 'Couleur',
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
        },
        {
          id: 'lumiere-naturelle-second-jour',
          title: 'Lumière Naturelle & Second Jour',
          category: 'Lumière',
          subtitle: 'L\'or de l\'architecte d\'intérieur',
          summary: 'La lumière naturelle est le matériau le plus précieux d\'un projet. Savoir l\'analyser, la capter et la redistribuer dans les pièces aveugles est une compétence clé — c\'est le cœur de chaque reportage Sloft.',
          sections: [
            {
              title: 'Analyser la lumière existante',
              content: 'Avant tout dessin, passer du temps dans l\'espace à différentes heures. Noter : l\'orientation (nord = lumière froide constante, sud = lumière chaude directe, est = matin, ouest = soir). La course du soleil à travers les fenêtres. Les zones d\'ombre permanentes. La présence de vis-à-vis. La qualité du vitrage existant. Prendre des photos à 9h, 12h, 15h et 18h — c\'est un outil de projet.'
            },
            {
              title: 'Le second jour : apporter la lumière où elle n\'est pas',
              content: 'Le « second jour » désigne un espace éclairé indirectement par la lumière d\'une pièce voisine. Solutions : la verrière d\'atelier (la plus courante — acier ou aluminium + verre clair ou sablé). L\'imposte vitrée au-dessus d\'une porte. La cloison à mi-hauteur. La claustra (bois ou métal) qui laisse filtrer la lumière. La porte vitrée pleine hauteur. Le puits de lumière (conduit solaire tubulaire — Velux Sun Tunnel).'
            },
            {
              title: 'Stratégies pour maximiser la lumière',
              content: 'Déposer les faux plafonds (gain de hauteur = plus de surface vitrée exploitable). Aligner les ouvertures (porte + verrière + fenêtre = perspective traversante). Supprimer les couloirs sombres inutiles. Utiliser des matériaux réfléchissants : miroirs stratégiques, laque claire, sol clair (pierre, béton ciré blanc). Peindre plafond et murs dans la même teinte claire. Les menuiseries fines (aluminium) maximisent la surface vitrée.'
            },
            {
              title: 'La lumière comme outil de composition',
              content: 'La lumière naturelle crée des « événements » dans l\'espace : un rayon de soleil sur un mur texturé (enduit, pierre), une ombre portée par une claustra, un reflet sur un sol poli. Les grands architectes (Tadao Ando, Peter Zumthor, John Pawson) composent avec la lumière comme un peintre. Dans un projet Sloft, la lumière est toujours mentionnée en premier — c\'est elle qui structure le plan.'
            }
          ],
          keyPoints: [
            'La lumière naturelle est le premier matériau d\'un projet — avant tout le reste',
            'Le second jour (verrière, imposte, cloison vitrée) est la solution n°1 en rénovation',
            'Analyser la lumière existante AVANT de dessiner — passer du temps sur place',
            'Aligner les ouvertures = perspective traversante = appartement qui respire',
            'Un espace en second jour bien traité peut être aussi lumineux qu\'une pièce avec fenêtre'
          ],
          tips: [
            'Proposer systématiquement une verrière quand une pièce est aveugle — le client dit oui dans 90% des cas',
            'Le Velux Sun Tunnel (conduit solaire tubulaire) apporte de la lumière naturelle jusqu\'à 6m de la toiture — solution méconnue',
            'Un miroir face à une fenêtre double visuellement la source de lumière'
          ],
          tags: ['lumière', 'verrière', 'second jour', 'orientation', 'naturelle', 'fenêtre']
        },
        {
          id: 'role-du-blanc',
          title: 'Le Blanc comme Matériau',
          category: 'Couleur',
          subtitle: 'Pas un seul blanc — des centaines',
          summary: 'Le blanc est le fond de scène de 80% des projets d\'intérieur. Mais il n\'existe pas UN blanc — il en existe des centaines, et choisir le bon change tout.',
          sections: [
            {
              title: 'Pourquoi le blanc domine',
              content: 'Le blanc maximise la lumière naturelle (il réfléchit 80% de la lumière reçue). Il unifie les surfaces (murs, plafonds, moulures) pour un rendu architectural épuré. Il met en valeur les matériaux (un parquet ancien, une pierre naturelle, un meuble design ressortent sur fond blanc). Il agrandit visuellement l\'espace. Et il est intemporel — jamais « daté ». Dans les reportages Sloft, 8 projets sur 10 ont une base blanche.'
            },
            {
              title: 'Choisir le bon blanc',
              content: 'Blanc froid (bleuté) : Strong White (F&B), Blanc de Meudon. Convient aux orientations sud et ouest. Blanc chaud (jaunâtre) : Pointing (F&B), Blanc Cassé (Ressource). Convient aux orientations nord et est. Blanc grisé : Skimming Stone (F&B), Dimpse. Sophistiqué, moins clinique. Blanc rosé : Pink Ground (F&B). Doux, flattering pour la peau — parfait en chambre. Blanc verdâtre : Vert de Terre (F&B). Presque imperceptible mais très vivant.'
            },
            {
              title: 'Techniques de mise en œuvre',
              content: 'Murs + plafond + moulures dans le même blanc = enveloppement total, volume mis en avant. Murs en blanc + plafond en couleur = effet cocon (tendance forte). Blanc mat (velours) sur les murs, blanc satiné sur les boiseries — jeu de finitions subtil. Badigeon de chaux blanche = texture vivante, irrégulière, qui accroche la lumière. Le blanc à la chaux vs le blanc acrylique : deux rendus radicalement différents.'
            },
            {
              title: 'Les erreurs à éviter',
              content: 'Ne JAMAIS utiliser un blanc de grande surface (Blanc de Blanc Dulux, etc.) dans un projet pro — c\'est un blanc optique pur, froid et agressif. Toujours tester les blancs avec un échantillon A4 sur le mur, à la lumière naturelle, à différentes heures. Attention au métamérisme : un blanc peut paraître rose le matin et jaune le soir. En cas de doute : Pointing de Farrow & Ball — c\'est le blanc le plus universellement beau.'
            }
          ],
          keyPoints: [
            'Il n\'existe pas de « blanc par défaut » — chaque blanc a une personnalité',
            'Pointing (F&B) = le blanc passe-partout le plus sûr',
            'Orientation nord = blanc chaud, orientation sud = blanc froid',
            'Murs + moulures + plafond même blanc = enveloppement architectural',
            'Toujours tester sur place, jamais choisir sur nuancier papier'
          ],
          tips: [
            'Commander 3-4 échantillons pots de blanc (F&B, Ressource) et les tester sur 50x50 cm sur le mur réel',
            'Le badigeon de chaux blanche est 10x plus beau qu\'une peinture acrylique blanche — texture vivante',
            'Pour un rendu « galerie d\'art » : blanc mat absolu (Dead Flat F&B) sur tous les murs'
          ],
          tags: ['blanc', 'peinture', 'lumière', 'Farrow & Ball', 'Ressource', 'technique']
        },
        {
          id: 'monochrome-matiere',
          category: 'Couleur',
          title: 'Le Monochrome Matière',
          subtitle: 'Quand la couleur vient du matériau',
          summary: 'La tendance forte de 2025-2026 : la couleur n\'est plus appliquée (peinture) mais incarnée dans la matière même (pierre verte, bois teinté, béton pigmenté, zellige coloré). Un espace monochrome entièrement en pierre ou en terre — signature des projets les plus publiés.',
          sections: [
            {
              title: 'Le principe',
              content: 'Au lieu de peindre un mur en vert, on utilise une pierre naturellement verte (Verde Guatemala, Vert d\'Estours). Au lieu d\'une peinture beige, on enduit en tadelakt naturel. La couleur EST le matériau. Le résultat : une profondeur, une texture et une vibration qu\'aucune peinture ne peut reproduire. C\'est le passage du 2D (couleur plate) au 3D (couleur-matière).'
            },
            {
              title: 'Les matériaux-couleurs stars',
              content: 'Pierre verte : Verde Guatemala, Vert d\'Estours, Green Onyx — salle de bain ou crédence. Travertin (beige-miel) : sol, mur, plan de vasque — le matériau-couleur le plus populaire du moment. Zellige terracotta : crédence, douche, mur d\'accent — vibration artisanale. Béton ciré teinté : sol-mur-plafond dans la même teinte — immersion totale. Marbre rose (Rosa Portogallo, Norrvange) : salle de bain de luxe. Bois fumé (chêne fumé) : tons bruns profonds sans teinture chimique.'
            },
            {
              title: 'La méthode monochrome total',
              content: 'Un espace entièrement en un seul matériau : salle de bain tout en travertin (sol + mur + vasque + tablier de baignoire). Cuisine entièrement en marbre (plan de travail + crédence + étagères murales). Chambre tout en bois (sol + tête de lit + mur d\'accent). C\'est spectaculaire et photographique — la signature des projets les plus publiés en 2025-2026.'
            },
            {
              title: 'Mise en œuvre & coûts',
              content: 'Le monochrome matière est plus coûteux qu\'une peinture mais l\'impact est incomparable. Travertin sol+mur : 120-250€/m² posé. Zellige : 80-150€/m² posé. Pierre naturelle type Verde Guatemala : 200-500€/m². Béton ciré teinté sol+mur : 100-200€/m². L\'investissement est dans la main d\'œuvre qualifiée — un bon carreleur ou un applicateur béton ciré formé fait toute la différence.'
            },
            {
              title: 'Sourcing & références',
              content: 'Zellige artisanal : Emery & Cie, Mosaic del Sur, Zelij (Maroc direct). Pierres naturelles : marbriers locaux + carrières (Pierre Bleue de Wallonie, Pierre de Bourgogne ROCAMAT). Travertin : Turquie, Italie, Iran — attention à la qualité (veinage, rebouchage). Terrazzo : Agglomarbre, Huguet, Diespeker (sur mesure). Béton ciré : Marius Aurenti, Mercadier, Rouviere Collection. Tadelakt : artisans spécialisés (Maroc, Provence, Uzès). Toujours commander des échantillons physiques — un matériau-couleur ne se choisit JAMAIS sur écran.'
            }
          ],
          keyPoints: [
            'Couleur-matière > couleur-peinture — profondeur et texture incomparables',
            'Le travertin est le matériau-couleur roi de 2025-2026',
            'Le monochrome total (une pièce, un seul matériau) est ultra-photographique',
            'Le coût est plus élevé mais l\'impact et la durabilité aussi',
            'Tendance portée par Instagram et les magazines d\'architecture (Sloft, AD, Dezeen)'
          ],
          tips: [
            'Pour une salle de bain monochrome travertin : reboucher les trous (aspect lisse) OU laisser les trous ouverts (aspect brut) — deux esthétiques radicalement différentes',
            'Le zellige terracotta 10x10 posé en quinconce dans une douche = effet spectaculaire pour un budget maîtrisé',
            'Proposer au moins UNE pièce en monochrome matière dans chaque projet — c\'est là que le client dit « wow »'
          ],
          tags: ['monochrome', 'matière', 'pierre', 'travertin', 'zellige', 'tendance']
        },
        {
          id: 'eclairage-ambiance',
          category: 'Lumière',
          title: 'Éclairage d\'Ambiance',
          subtitle: 'Mise en lumière & scénarios',
          summary: 'Au-delà de la technique (voir fiche Éclairage Technique), l\'éclairage d\'ambiance est l\'art de créer des atmosphères par la lumière — gorge lumineuse, scénarios pièce par pièce, et mise en scène du soir.',
          sections: [
            {
              title: 'La gorge lumineuse : technique star',
              content: 'La gorge lumineuse est un bandeau de LED dissimulé dans une retombée de plafond, un coffrage ou une corniche. La lumière rebondit sur le plafond ou le mur — jamais de source visible. Résultat : une lumière douce, enveloppante, sans ombre dure. Température recommandée : 2700K (blanc chaud) à 3000K. Intensité réglable via variateur. C\'est devenu un standard dans tout projet haut de gamme. Profondeur de gorge idéale : 12-15 cm. Distance LED/surface de rebond : 8-10 cm minimum pour éviter les « points chauds ».'
            },
            {
              title: 'Plan d\'éclairage par pièce',
              content: 'Salon : gorge lumineuse (ambiance) + lampes à poser (accent) + liseuse (fonctionnel). Cuisine : spots encastrés orientables (général) + LED sous meuble haut (fonctionnel) + suspension au-dessus de l\'îlot (décoratif). Chambre : gorge lumineuse ou appliques indirectes (ambiance) + liseuses (fonctionnel) + lampe de chevet (accent). Salle de bain : spots encastrés IP44 (général) + LED miroir (fonctionnel) + bougie (ambiance). Entrée : applique murale ou spot d\'accent + LED intégrée au meuble.'
            },
            {
              title: 'Scénarios jour/soir',
              content: 'Un bon projet prévoit au minimum 2 scénarios par pièce de vie. Scénario jour : lumière naturelle + éclairage fonctionnel complémentaire si nécessaire. Scénario soir : éclairage indirect (gorge, appliques) + lampes à poser + bougies. Scénario réception : éclairage tamisé (variateurs à 40%), suspension au-dessus de la table, bougies. Scénario nuit : veilleuses LED intégrées dans le couloir et la salle de bain (détection de mouvement). Le variateur est l\'outil clé : chaque point lumineux doit être dimmable.'
            },
            {
              title: 'Luminaires signatures',
              content: 'Les luminaires les plus photographiés en archi d\'intérieur : Serge Mouille (appliques, plafonniers — sculptural noir). DCW Éditions (Lampe Gras — industriel raffiné). Flos (IC Lights de Michael Anastassiades — sphères en équilibre). Louis Poulsen (PH5 — lumière nordique parfaite). Isamu Noguchi (Akari — papier washi — poésie lumineuse). Santa & Cole (Cesta — lampe iconique espagnole). Le choix du luminaire est un statement — il résume le style du projet.'
            }
          ],
          keyPoints: [
            'La gorge lumineuse = technique star du projet haut de gamme',
            'JAMAIS de plafonnier central seul — c\'est l\'erreur la plus commune',
            'Variateur dans chaque pièce = passage du jour au soir en douceur',
            'Prévoir minimum 2 scénarios d\'éclairage par pièce de vie',
            'Pour les bases techniques (Kelvin, Lumen, 3 couches) → voir fiche Éclairage Technique'
          ],
          tips: [
            'Prévoir les encastrements et passages de câbles AVANT le plâtre — l\'éclairage se pense en phase conception',
            'Un variateur coûte 30-50€ et transforme une pièce — le meilleur rapport investissement/impact',
            'Dessiner un plan d\'éclairage avec des cercles de lumière pour visualiser les zones éclairées et les zones d\'ombre'
          ],
          tags: ['éclairage', 'ambiance', 'gorge lumineuse', 'variateur', 'luminaires', 'scénarios']
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
          category: 'Principes Fondamentaux',
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
          category: 'Principes Fondamentaux',
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
          category: 'Principes Fondamentaux',
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
        },
        // --- COTES D'IMPLANTATION PAR PIÈCE ---
        {
          id: 'cotes-chambre',
          category: 'Cotes d\'Implantation',
          title: 'Distances & Implantation — Chambre',
          subtitle: 'Du lit aux murs : toutes les cotes',
          summary: 'La chambre est la pièce où les cotes d\'implantation sont les plus sensibles. Un lit trop serré, un passage trop étroit, une table de nuit qui ne rentre pas — ça se joue au centimètre. Voici toutes les distances à connaître, avec les nuances.',
          sections: [
            {
              title: 'Le lit : distances autour',
              content: 'CONFIGURATION IDÉALE (lit accessible des deux côtés) : 60 cm minimum entre le lit et le mur de chaque côté. C\'est le passage minimum pour se glisser dans le lit + faire le lit + poser une table de nuit. 70-80 cm = confort. Permet de circuler aisément, de poser une table de nuit de 40-50 cm et de garder un passage. Au pied du lit : 60-70 cm minimum jusqu\'au mur ou au meuble en face. CONFIGURATION LIT COLLÉ AU MUR (un côté) : parfaitement acceptable — surtout en petit espace, chambre d\'enfant, chambre d\'ami, studio. Le côté collé au mur ne nécessite aucun dégagement. L\'autre côté : 60 cm minimum. Avantage : gain de 60-80 cm de largeur de pièce. Inconvénient : faire le lit est moins pratique, une seule personne a un accès direct (couple → à éviter pour le lit principal). CONFIGURATION LIT CENTRÉ (tête de lit contre le mur) : la plus « hôtelière ». 60-80 cm de chaque côté. Nécessite une pièce de minimum 2,80 m de large (lit 140) ou 3 m (lit 160).'
            },
            {
              title: 'Dimensionnement du lit',
              content: 'Lit 1 personne : 90×190 cm (standard) ou 90×200 cm. Lit 2 personnes : 140×190 cm (le minimum couple). 160×200 cm (le standard confort — « Queen »). 180×200 cm (« King » — luxe, hôtelier, nécessite une chambre > 14 m²). Lit enfant : 70×140 cm (2-6 ans), puis 90×190/200 cm. Matelas : ajouter 2-5 cm au cadre de lit dans chaque dimension (le matelas dépasse légèrement). Tête de lit : prévoir 5-15 cm d\'épaisseur en plus derrière le lit (capitonnée : 10-15 cm, bois : 3-5 cm).'
            },
            {
              title: 'Tables de nuit & dressing',
              content: 'Table de nuit : 35-50 cm de large, 40-55 cm de profondeur. Hauteur idéale = hauteur du matelas (± 5 cm) soit 50-60 cm. Espace entre le lit et le mur avec table de nuit : minimum 40 cm pour la table + 20 cm de passage résiduel = 60 cm au total. Ou : table de nuit suspendue (murale) si passage très étroit → ne prend pas de place au sol. Dressing face au lit : minimum 60 cm de dégagement devant les portes. Portes coulissantes : 0 cm de dégagement (la meilleure solution en petit espace). Portes battantes : 60 cm de débattement. Commode : 50-55 cm de profondeur + 60 cm devant pour ouvrir les tiroirs = 110-115 cm d\'emprise totale.'
            },
            {
              title: 'Cas particuliers & astuces',
              content: 'Chambre < 9 m² : lit collé au mur un côté + table de nuit suspendue + dressing à portes coulissantes ou rideau = ça rentre. Chambre enfant (8-10 m²) : lit 90 cm collé au mur + bureau face au mur + rangement en hauteur. Lit mezzanine si HsP > 2,60 m (1,20 m sous la mezzanine = bureau/rangement, 1,20 m au-dessus = couchage). Chambre parentale « suite » (> 14 m²) : lit King centré + 80 cm de chaque côté + bout de lit (banc 120×40 cm) + passage vers dressing/SDB. Lit sous pente (combles) : 1,40 m minimum de hauteur au-dessus du matelas pour s\'asseoir dans le lit. Placer la tête de lit côté le plus haut.'
            }
          ],
          keyPoints: [
            '60 cm = distance minimum lit-mur pour circuler et faire le lit',
            'Lit collé au mur un côté = OK en petit espace / enfant / ami — PAS en lit principal couple',
            'Lit 160×200 (Queen) = le standard confort actuel pour 2 personnes',
            'Table de nuit suspendue = astuce n°1 en chambre étroite',
            'Portes de dressing coulissantes = gain de 60 cm de dégagement vs portes battantes'
          ],
          tips: [
            'Toujours dessiner le lit avec les tables de nuit ET le passage sur le plan — c\'est là qu\'on voit si ça rentre vraiment',
            'Un lit 140 dans une chambre de 10 m² fonctionne très bien — un lit 160 dans la même chambre peut être trop serré',
            'Penser au passage de l\'aspirateur : si la main ne passe pas entre le lit et le mur, c\'est un nid à poussière'
          ],
          tags: ['chambre', 'lit', 'distances', 'implantation', 'cotes', 'dressing', 'table de nuit']
        },
        {
          id: 'cotes-salon-sejour',
          category: 'Cotes d\'Implantation',
          title: 'Distances & Implantation — Salon',
          subtitle: 'Canapé, table basse, TV : le bon placement',
          summary: 'Le salon est la pièce la plus complexe à agencer : canapé, table basse, TV, bibliothèque, coin repas — tout doit cohabiter avec des distances de confort ET de circulation. Voici les cotes à maîtriser.',
          sections: [
            {
              title: 'Le canapé',
              content: 'CANAPÉ ET MURS : collé au mur = OK, c\'est la configuration la plus courante en petit/moyen espace. Avantage : gain de place maximum. Canapé « flottant » (décollé du mur) : plus élégant, crée de la profondeur. Laisser 10-30 cm derrière (console, tablette). Possible seulement si la pièce fait > 20 m². PASSAGE DERRIÈRE : si circulation derrière le canapé, minimum 60 cm (80 cm confort). PASSAGE LATÉRAL : 45-60 cm entre l\'accoudoir et le mur ou un meuble. DISTANCE ENTRE DEUX CANAPÉS FACE À FACE : 120-180 cm (conversation confortable). Plus de 250 cm = trop loin, on perd l\'intimité.'
            },
            {
              title: 'La table basse',
              content: 'DISTANCE CANAPÉ — TABLE BASSE : 35-45 cm. C\'est la distance pour poser/reprendre un verre sans se lever ET pouvoir passer les jambes. Moins de 30 cm = trop serré, on se cogne les tibias. Plus de 50 cm = trop loin, il faut se pencher. PASSAGE AUTOUR : 45-60 cm entre la table basse et les autres meubles/murs pour circuler. HAUTEUR : 35-45 cm (= hauteur de l\'assise du canapé ± 5 cm). Table basse plus basse que l\'assise = plus décontracté. Même hauteur = plus pratique. TAILLE : idéalement les 2/3 de la longueur du canapé. Canapé 200 cm → table basse 120-140 cm.'
            },
            {
              title: 'La télévision',
              content: 'DISTANCE DE VISIONNAGE : règle simple = 1,5 à 2,5 × la diagonale de l\'écran. TV 55" (140 cm) → distance 2,10-3,50 m. TV 65" (165 cm) → distance 2,50-4 m. TV 75" (190 cm) → distance 2,85-4,75 m. HAUTEUR : le centre de l\'écran à hauteur des yeux en position assise = 100-110 cm du sol (le bas de l\'écran à ~80-85 cm). Erreur fréquente : TV trop haute (au-dessus d\'une cheminée → mal au cou). MEUBLE TV : profondeur 35-45 cm. Le meuble TV ne doit pas être plus large que le mur sur lequel il est posé (proportion). Si TV murale : prévoir le passage des câbles dans le mur (gaine encastrée).'
            },
            {
              title: 'Coin repas dans le salon',
              content: 'TABLE RONDE : Ø 90 cm (4 personnes), Ø 110 cm (4-6), Ø 130 cm (6-8). Dégagement autour : 80-100 cm pour reculer la chaise + circuler derrière. TABLE RECTANGULAIRE : 80×120 cm (4 pers.), 80×160 cm (6), 80×200 cm (8). Place par convive : 60 cm de largeur minimum. CHAISE RECULÉE : une chaise tirée en arrière prend 75-80 cm depuis le bord de la table. TABLE COLLÉE AU MUR (une extrémité) : gain d\'espace, acceptable si 4 personnes max. TABLE COLLÉE AU MUR (un long côté) = banquette → gain de 40 cm de circulation côté banquette. PASSAGE ENTRE TABLE ET MUR/MEUBLE : 80 cm minimum (sans chaise tirée), 120 cm si on doit circuler derrière une personne assise.'
            },
            {
              title: 'Le coin lecture / fauteuil',
              content: 'Un fauteuil seul a besoin de : 45-60 cm latéralement (pour un guéridon ou une liseuse). 40-50 cm devant (repose-pieds ou simplement les jambes). Une lampe (liseuse, lampadaire) positionnée à 30 cm derrière et 40-50 cm au-dessus de l\'épaule. Fauteuil dans un angle : laisser 15-20 cm entre le dossier et le mur (le fauteuil ne doit pas toucher le mur, surtout si c\'est un fauteuil pivotant ou inclinable). Bibliothèque face aux assises : 100-120 cm de recul pour lire les titres confortablement.'
            }
          ],
          keyPoints: [
            '35-45 cm entre canapé et table basse = la distance magique',
            'Canapé collé au mur = OK et courant — pas besoin de s\'en excuser',
            'TV : centre de l\'écran à 100-110 cm du sol (hauteur des yeux assis)',
            'Chaise tirée en arrière = 75-80 cm depuis le bord de la table → à anticiper',
            '60 cm par convive à table = le minimum à toujours vérifier sur plan'
          ],
          tips: [
            'Avant de choisir un canapé, scotcher ses dimensions au sol avec du ruban de masquage — on visualise immédiatement si c\'est trop gros',
            'La table ronde est TOUJOURS plus conviviale et plus fluide en circulation qu\'une table rectangulaire à nombre de convives égal',
            'Un tapis sous le canapé + la table basse unifie le coin salon : il doit dépasser de 30-40 cm de chaque côté du canapé'
          ],
          tags: ['salon', 'canapé', 'table basse', 'TV', 'distances', 'implantation', 'coin repas']
        },
        {
          id: 'cotes-cuisine-implantation',
          category: 'Cotes d\'Implantation',
          title: 'Distances & Implantation — Cuisine',
          subtitle: 'Les cotes qui font une cuisine fonctionnelle',
          summary: 'La cuisine est la pièce la plus normée en termes de distances. Un centimètre en trop ou en moins change tout : une porte de lave-vaisselle qui bute, un passage trop étroit pour deux, un meuble haut inatteignable. Voici le référentiel complet.',
          sections: [
            {
              title: 'Les hauteurs',
              content: 'Plan de travail : 85-92 cm (standard 87 cm). Adapter à la taille de l\'utilisateur principal : coude à 90° − 15 cm = hauteur idéale. Meubles hauts : bas du meuble haut à 50-55 cm au-dessus du plan de travail (crédence). Haut du meuble haut : 210-220 cm max du sol (accessible sans escabeau). Hotte : 65 cm au-dessus d\'une plaque gaz, 55 cm au-dessus de plaques induction (vérifier notice). Prise plan de travail : 10-15 cm au-dessus du plan de travail. Éclairage sous meuble haut : en retrait de 5 cm du bord (la lumière éclaire le plan de travail, pas les yeux).'
            },
            {
              title: 'Les profondeurs',
              content: 'Meuble bas : 58-60 cm de profondeur (standard). Plan de travail : 60-65 cm (dépasse de 2-3 cm du meuble bas). Meuble haut : 32-37 cm de profondeur (ne doit PAS dépasser du plan de travail → sinon on se cogne la tête). Îlot : profondeur minimum 90 cm (rangement seul), 120 cm (rangement + cuisson), 150 cm (rangement + cuisson + coin repas). Retour de plan de travail en U : minimum 120 cm de largeur intérieure entre les deux plans parallèles (150 cm idéal si 2 personnes).'
            },
            {
              title: 'Les passages et dégagements',
              content: 'DEVANT LES MEUBLES : 90 cm minimum pour ouvrir une porte de meuble bas ou un tiroir. 120 cm confort. Si deux rangées face à face (cuisine en parallèle/U) : 120 cm minimum (2 personnes peuvent se croiser + une porte ouverte). LAVE-VAISSELLE ouvert : la porte dépasse de 55-60 cm — vérifier que le passage reste libre (minimum 70 cm à côté pour circuler). FOUR : prévoir 80 cm devant pour sortir un plat, porte ouverte. RÉFRIGÉRATEUR : porte ouverte à 90° + espace pour sortir un bac = 80-100 cm devant. Côté charnière : 5-10 cm du mur pour que la porte s\'ouvre complètement.'
            },
            {
              title: 'L\'îlot : cotes critiques',
              content: 'Passage entre l\'îlot et le mur de cuisine : 90 cm minimum (120 cm si 2 personnes). Passage entre l\'îlot et le reste du séjour : 100-120 cm (circulation principale). Coin repas sur l\'îlot : 60 cm de largeur par personne, 25-30 cm de profondeur pour les jambes sous le débord. Débord du plan pour les jambes : minimum 25 cm (tabouret), 30-35 cm (chaise haute). Hauteur coin repas : 87 cm (hauteur plan de travail = tabouret 65 cm) OU 75 cm (hauteur table = chaise standard). Prise dans l\'îlot : prévoir alimentation électrique au sol AVANT la chape — 2 à 4 prises minimum.'
            }
          ],
          keyPoints: [
            '87 cm = hauteur standard du plan de travail (ajuster à l\'utilisateur)',
            '120 cm entre deux plans de travail parallèles = minimum pour une cuisine fonctionnelle',
            'Le lave-vaisselle ouvert occupe 55-60 cm — vérifier que ça ne bloque pas le passage',
            'Meuble haut : 50-55 cm au-dessus du plan de travail (crédence)',
            '90 cm minimum autour de l\'îlot (120 cm si cuisine active)'
          ],
          tips: [
            'Le test ultime : simuler l\'ouverture de TOUS les éléments (four, lave-vaisselle, frigo, tiroirs) sur le plan et vérifier qu\'ils ne se cognent pas entre eux',
            'Un retour en U trop étroit (< 120 cm) rend la cuisine invivable — mieux vaut un L qu\'un U serré',
            'L\'erreur n°1 des cuisinistes : le réfrigérateur collé dans un angle avec la porte qui ne s\'ouvre pas à fond → toujours 5-10 cm de marge côté charnière'
          ],
          tags: ['cuisine', 'cotes', 'plan de travail', 'îlot', 'implantation', 'hauteur', 'ergonomie']
        },
        {
          id: 'cotes-sdb-wc',
          category: 'Cotes d\'Implantation',
          title: 'Distances & Implantation — SDB & WC',
          subtitle: 'Les cotes vitales en pièce d\'eau',
          summary: 'La salle de bain est la pièce où les distances sont les plus critiques : on y est souvent en mouvement (se pencher, se sécher, s\'habiller) dans un espace restreint. Chaque centimètre est stratégique.',
          sections: [
            {
              title: 'La douche',
              content: 'DIMENSIONS INTÉRIEURES : 80×80 cm = minimum vital (inconfortable). 90×90 cm = standard. 90×120 cm ou 90×140 cm = confort. 100×140 cm ou 120×120 cm = grand confort / PMR. PAROI DE DOUCHE (si non italienne ouverte) : épaisseur du verre 6-8 mm. Porte battante : 55-60 cm de débattement devant la douche → préférer porte pivotante, coulissante, ou pas de porte du tout (douche ouverte walk-in si ≥ 120 cm de large). DÉGAGEMENT DEVANT LA DOUCHE : 60-70 cm minimum pour sortir, se sécher, poser les pieds sur le tapis. Pomme de tête : 200-210 cm du sol minimum (pour une personne de 1,85 m sous la pluie).'
            },
            {
              title: 'Les WC',
              content: 'EMPRISE AU SOL : WC posé = 40×65-70 cm. WC suspendu = 36×55 cm (le bâti-support fait 50 cm de profondeur dans le mur / coffrage). DÉGAGEMENT FRONTAL : 60 cm minimum devant la cuvette (les genoux + se relever). 80 cm confort. DÉGAGEMENT LATÉRAL : 20 cm minimum entre la cuvette et le mur (ou un meuble). 40 cm si PMR (pour les barres d\'appui). AXE DE LA CUVETTE : 40 cm du mur latéral le plus proche (centre de la cuvette). PORTE : s\'ouvre vers l\'extérieur (obligatoire si pièce < 1,5 m²) ou coulissante. LAVE-MAINS : dans le WC si séparé de la SDB. 25-35 cm de profondeur (compact). Hauteur : 85 cm du sol.'
            },
            {
              title: 'Lavabo & meuble vasque',
              content: 'HAUTEUR : plan de vasque à 85 cm du sol (standard). 80 cm (enfant, PMR). 90 cm (personne grande — de plus en plus courant). DÉGAGEMENT DEVANT : 60 cm minimum (se pencher pour se laver le visage). 70-80 cm confort. ENTRE DEUX VASQUES : 30 cm minimum entre les bords (60 cm entre les axes). MEUBLE VASQUE : profondeur standard 45-50 cm. Largeur : 60 cm (1 vasque petit), 80-90 cm (1 vasque confort), 120-140 cm (double vasque). MIROIR : largeur = largeur du meuble vasque (ou plus). Bord bas à 105-110 cm du sol (personne debout voit sa tête). Bord haut : 190-200 cm. Éclairage miroir : au-dessus ou sur les côtés (jamais en contre-jour).'
            },
            {
              title: 'La baignoire',
              content: 'DIMENSIONS STANDARD : 170×70 cm (le classique français). 170×75 cm (un peu plus large — le confort). 180×80 cm (grand confort). Baignoire d\'angle : 120×120 cm à 150×150 cm (attention : très gourmand en espace). Baignoire îlot : prévoir 60-80 cm de passage tout autour. DÉGAGEMENT LATÉRAL : 0 cm possible (baignoire encastrée dans une niche, 3 côtés contre les murs = gain de place maximum). Un côté ouvert : 60 cm minimum de passage pour entrer/sortir. ROBINETTERIE : sur le côté long, centrée ou décalée vers les pieds. Douchette sur flexible de 150-175 cm. TABLIER : amovible ou à trappe pour accès à la plomberie (obligatoire).'
            },
            {
              title: 'Sèche-serviettes & accessoires',
              content: 'SÈCHE-SERVIETTES : hauteur de l\'appareil : centre à 100-130 cm du sol. Distance du sol : 20 cm minimum en bas (nettoyage). Distance du plafond : 15-20 cm minimum. Dégagement devant : 10-15 cm (serviettes qui pendent). Pas au-dessus des WC ni à portée d\'eau (douche). PORTE-SERVIETTES MURAL : 110-120 cm du sol. 1 barre par personne minimum (46-60 cm de large). PATÈRES : 150-170 cm du sol (peignoir). TABLETTE DE DOUCHE / NICHE : 100-120 cm du sol (à portée de main en position debout). 15×30 cm minimum pour poser shampooing + savon.'
            }
          ],
          keyPoints: [
            '60 cm devant chaque élément (douche, WC, vasque) = la règle universelle en SDB',
            'WC : 40 cm d\'axe depuis le mur latéral — la cote la plus souvent oubliée',
            'Vasque à 85 cm du sol (standard), 90 cm de plus en plus courant',
            'Douche ouverte walk-in (sans porte) seulement si largeur ≥ 120 cm',
            'Baignoire 3 côtés encastrés = l\'option la plus compacte'
          ],
          tips: [
            'En SDB de 3-4 m², la douche ouverte (walk-in) sans porte vitrée agrandit visuellement — mais prévoir une bonne pente de sol et un caniveau',
            'Le WC suspendu (Geberit) gagne 10-15 cm de profondeur par rapport au WC posé — précieux en petit espace',
            'Avant de positionner les sanitaires sur plan, vérifier : la porte s\'ouvre-t-elle sans taper dans le lavabo ? Le sèche-serviettes ne bloque-t-il pas le passage ?'
          ],
          tags: ['salle de bain', 'WC', 'distances', 'douche', 'vasque', 'implantation', 'cotes']
        },
        {
          id: 'cotes-bureau-entree',
          category: 'Cotes d\'Implantation',
          title: 'Distances & Implantation — Bureau, Entrée & Couloir',
          subtitle: 'Les espaces souvent négligés',
          summary: 'Le bureau (espace de travail), l\'entrée et les couloirs sont les parents pauvres de l\'agencement. Pourtant, des cotes bien pensées ici transforment le quotidien. L\'entrée est la première impression, le bureau est le confort de travail, le couloir est le liant de l\'appartement.',
          sections: [
            {
              title: 'L\'espace de travail / bureau',
              content: 'PLAN DE TRAVAIL : hauteur 72-75 cm (standard). Profondeur : 60 cm minimum (80 cm confort pour écran + clavier). Largeur : 100 cm minimum (120-150 cm confort). CHAISE DE BUREAU : recul de 70-80 cm entre le bord du bureau et le mur/meuble derrière (chaise reculée + passage). Accoudoirs : vérifier qu\'ils passent sous le bureau (hauteur d\'accoudoir standard 63-70 cm vs hauteur sous bureau 62-68 cm → conflit fréquent). ÉCRAN : distance yeux-écran = 50-70 cm. Bord supérieur de l\'écran à hauteur des yeux ou légèrement en dessous. Pas de fenêtre dans le dos (reflets) ni face à l\'écran (éblouissement) → fenêtre latérale = idéal.'
            },
            {
              title: 'L\'entrée',
              content: 'L\'ENTRÉE EST UN SAS : elle mérite 2-4 m² même en petit appartement. LARGEUR : 90 cm minimum de passage libre (après les meubles). MEUBLE D\'ENTRÉE : profondeur 30-35 cm (meuble à chaussures/console) ou 50-55 cm (placard avec tringle). Miroir : un grand miroir en pied (40×140 cm minimum) est quasi obligatoire — on se voit avant de sortir + agrandissement visuel. BANC/ASSISE : 35-45 cm de profondeur, 45 cm de hauteur — indispensable pour enfiler ses chaussures. Peut être un coffre (rangement dessous). PATÈRES/CROCHETS : 150-170 cm du sol (adulte), 100-110 cm (enfant). 1 par personne du foyer minimum. La première chose qu\'on voit : ne pas surcharger. Un beau luminaire + un miroir + une console = entrée réussie.'
            },
            {
              title: 'Le couloir',
              content: 'LARGEUR MINIMUM : 80 cm (toléré en ancien, très étroit). 90 cm (standard). 100-110 cm (confort). 120 cm si portes s\'ouvrent dans le couloir. PORTES DANS LE COULOIR : une porte standard (83 cm) ouverte à 90° dépasse de 83 cm dans le couloir → si le couloir fait 90 cm, la porte occupe presque toute la largeur. Solution : portes coulissantes, pivotantes ou ouverture dans la pièce. ÉCLAIRAGE : un couloir sans fenêtre a besoin d\'un éclairage généreux. Spots encastrés tous les 80-100 cm OU appliques murales alternées. Imposte vitrée au-dessus des portes = apport de lumière naturelle. MEUBLES : bibliothèque étroite (20-25 cm de profondeur) le long d\'un mur de couloir large (> 100 cm). Le couloir-bibliothèque est une solution élégante qui transforme un lieu de passage en lieu de vie.'
            },
            {
              title: 'Le dressing / walk-in',
              content: 'LARGEUR MINIMUM : 120 cm (penderie un côté + passage). 180 cm (penderie deux côtés — le vrai walk-in). 200-220 cm (penderie deux côtés + îlot central — luxe). PENDERIE : profondeur 55-60 cm (cintres standard). Tringle haute : 170-180 cm du sol (manteaux, robes). Tringle mi-hauteur : 110-120 cm (vestes, chemises). Double tringle : haute à 200 cm + basse à 100 cm (gain de capacité). TIROIRS : profondeur 45-55 cm, hauteur 15-20 cm (pulls, t-shirts). ÉTAGÈRES : profondeur 40-50 cm, espacement 30-35 cm. ÉCLAIRAGE : réglette LED au-dessus de chaque zone. Détecteur de mouvement (la lumière s\'allume à l\'ouverture de la porte) = pur luxe fonctionnel.'
            }
          ],
          keyPoints: [
            'Bureau : 60 cm de profondeur minimum + 70-80 cm de recul pour la chaise',
            'Entrée : 90 cm de passage libre + miroir + assise = le minimum vital',
            'Couloir : attention aux portes qui s\'ouvrent — portes coulissantes si < 100 cm de large',
            'Dressing : 120 cm de large minimum (une rangée), 180 cm (deux rangées)',
            'L\'entrée est la première et dernière impression — ne pas la négliger'
          ],
          tips: [
            'Le « couloir-bibliothèque » (étagères 25 cm de profondeur le long du mur) transforme un passage mort en espace utile et esthétique',
            'En entrée, un éclairage chaleureux (applique + miroir) change complètement la perception : on passe de « couloir sombre » à « accueil »',
            'Pour le bureau à domicile post-Covid, prévoir une prise Ethernet RJ45 + 4 prises électriques minimum — le WiFi ne suffit pas toujours'
          ],
          tags: ['bureau', 'entrée', 'couloir', 'dressing', 'distances', 'implantation', 'cotes']
        },
        {
          id: 'optimiser-petit-espace',
          category: 'Espaces & Pièces',
          title: 'Optimiser un Espace < 50 m²',
          subtitle: 'L\'art de vivre grand dans petit',
          summary: 'Les petites surfaces sont le cœur de métier de l\'architecte d\'intérieur en milieu urbain. Chaque mètre carré compte, chaque centimètre se négocie. C\'est dans la contrainte que naissent les projets les plus ingénieux.',
          sections: [
            {
              title: 'Les principes fondamentaux',
              content: 'Décloisonner : supprimer les murs non porteurs pour créer un espace fluide (cuisine/séjour/entrée en un seul volume). Unifier le sol : un même revêtement d\'un bout à l\'autre de l\'appartement agrandit visuellement. Maximiser la lumière : verrière, imposte, cloisons vitrées, miroirs stratégiques. Exploiter la hauteur : mezzanine de couchage (si HsP > 3,40 m), rangements en partie haute, bibliothèques pleine hauteur. Minimiser la circulation : supprimer les couloirs, regrouper les pièces d\'eau.'
            },
            {
              title: 'Le plan : 3 typologies qui marchent',
              content: 'Le studio-loft : tout est ouvert, le lit est intégré (escamotable, mezzanine ou alcôve). La fonctionnalité est dans le mobilier, pas dans les murs. Le T2 optimisé : séjour-cuisine ouvert + chambre fermée (mais avec verrière pour la lumière). La division en zones : utiliser le mobilier (bibliothèque, meuble bas, banquette) comme séparateur visuel sans cloisonner. Astuce : placer le coin nuit côté rue (on y passe moins de temps) et le séjour côté cour.'
            },
            {
              title: 'Mobilier malin',
              content: 'Le lit escamotable (Espace Loggia, Griffon) : libère 4-6 m² en journée. La table extensible (console → table 6 personnes). Le plan de travail prolongé en table à manger. La banquette dînatoire (gain de 40 cm vs chaises). Le meuble sur mesure multifonction (entrée + rangement + assise). Les portes coulissantes (gain de 1 m² par porte vs porte battante). Le dressing dans l\'entrée (souvent 2-3 m² inexploités).'
            },
            {
              title: 'Les erreurs à ne pas commettre',
              content: 'Trop de petites pièces fermées : mieux vaut 1 grand espace que 3 placards. Du mobilier trop gros : le canapé d\'angle XXL dans 35 m² → c\'est non. Négliger l\'entrée : c\'est la première impression + souvent 2-3 m² de rangement potentiel. Oublier les rangements : dans un petit espace, il faut PLUS de rangement qu\'ailleurs (minimum 10% de la surface). Multiplier les matériaux et couleurs : en petit espace, la sobriété agrandit.'
            }
          ],
          keyPoints: [
            'Décloisonner + unifier le sol + maximiser la lumière = le triptyque de base',
            'Minimum 10% de la surface en rangement, même dans un petit espace',
            'Le lit escamotable libère 4-6 m² en journée — game changer en studio',
            'Portes coulissantes = gain immédiat de 1 m² par porte',
            'Un seul sol d\'un bout à l\'autre de l\'appartement = agrandissement visuel garanti'
          ],
          tips: [
            'Projets référence Sloft : 23 m² à Montreuil (cocon minimaliste), 36 m² garage métamorphosé (Paris), 48 m² restructuré par la lumière (Sacha Ekert)',
            'Toujours démarrer par un plan coté au 1/50 avec le mobilier dessiné à l\'échelle — on voit immédiatement ce qui rentre ou pas',
            'Le miroir pleine hauteur en bout de couloir crée un effet de profondeur spectaculaire'
          ],
          tags: ['petit espace', 'studio', 'optimisation', 'plan', 'décloisonnement', 'mobilier']
        },
        {
          id: 'cuisine-ouverte-ilot',
          title: 'La Cuisine Ouverte & l\'Îlot Central',
          category: 'Espaces & Pièces',
          subtitle: 'Le cœur battant de l\'appartement',
          summary: 'La cuisine ouverte avec îlot est devenue la pièce maîtresse de l\'habitat contemporain. C\'est le lieu de vie, de convivialité et de représentation. Bien la concevoir demande rigueur et méthode.',
          sections: [
            {
              title: 'Le triangle d\'activité',
              content: 'Le plan d\'une cuisine s\'organise autour du triangle d\'activité : froid (réfrigérateur) — lavage (évier) — cuisson (plaques/four). La somme des 3 côtés du triangle doit être comprise entre 3,60 m et 6,60 m. Au-delà : trop de pas. En deçà : trop serré. L\'évier est idéalement face à la lumière naturelle. Les plaques sont proches du plan de travail (préparation → cuisson). Le réfrigérateur est accessible sans traverser la zone de travail.'
            },
            {
              title: 'L\'îlot central : fonctions et dimensions',
              content: 'Fonction repas : hauteur 75 cm (table) ou 90 cm (bar) ou 110 cm (mange-debout). Prévoir 60 cm de largeur par convive. Fonction cuisson : hotte intégrée dans le plan (type Bora, Novy, Elica) ou hotte suspendue. Prévoir une amenée de gaz et/ou électricité dans le sol. Fonction rangement : tiroirs côté cuisine + façade lisse côté salon. Dimensions minimales : largeur 90 cm pour un îlot avec rangement seul, 120 cm avec cuisson, 150 cm avec cuisson + coin repas. Passage autour : minimum 90 cm (120 cm idéal).'
            },
            {
              title: 'Matériaux de plan de travail',
              content: 'Pierre naturelle (granit, marbre, quartzite) : noble, résistant (granit), sensible aux acides (marbre). Quartz reconstitué (Silestone, Caesarstone) : très résistant, large choix de couleurs. Céramique grand format (Sapienstone, Dekton) : ultra-résistant, imite tous les matériaux. Bois massif (hêtre, chêne) : chaleureux, s\'entretient (huile). Inox : professionnel, inrayable. Béton ciré : tendance mais sensible. Terrazzo : retour en force. Le Corian (résine) : réparable, thermoformable, sans joint.'
            },
            {
              title: 'L\'intégration séjour-cuisine',
              content: 'L\'îlot fait la transition : côté cuisine = fonctionnel (tiroirs, prises, évier). Côté séjour = esthétique (façade lisse, matériau noble, espace repas). Alignement des finitions : la cuisine doit « disparaître » quand on regarde depuis le canapé. Façades lisses, poignées intégrées (gorge ou push-to-open), électroménager intégré. L\'éclairage de l\'îlot (3 suspensions alignées ou rampe LED) crée un point focal.'
            }
          ],
          keyPoints: [
            'Triangle d\'activité : périmètre entre 3,60 m et 6,60 m',
            'Passage minimum 90 cm autour de l\'îlot (120 cm idéal)',
            'L\'îlot central = la pièce architecturale de l\'appartement moderne',
            'Côté cuisine fonctionnel, côté salon esthétique — toujours',
            '3 suspensions au-dessus de l\'îlot = le geste déco le plus efficace en cuisine'
          ],
          tips: [
            'Toujours vérifier que l\'évacuation des eaux usées est possible dans l\'îlot AVANT de dessiner — c\'est la contrainte n°1',
            'La hotte aspirante intégrée au plan (Bora, Novy) libère visuellement l\'espace — investissement mais résultat spectaculaire',
            'Prévoir des prises intégrées dans l\'îlot (type prises escamotables) — on n\'en met jamais assez'
          ],
          tags: ['cuisine', 'îlot', 'plan de travail', 'ergonomie', 'triangle activité', 'ouvert']
        },
        {
          id: 'salle-de-bain-compacte',
          title: 'La Salle de Bain Compacte',
          category: 'Espaces & Pièces',
          subtitle: 'Luxe et fonctionnalité en 3-6 m²',
          summary: 'La salle de bain est la pièce la plus technique d\'un projet. En petit espace, chaque centimètre est stratégique. C\'est aussi là que le client attend le plus de « wow effect » — un projet réussi commence souvent ici.',
          sections: [
            {
              title: 'Les dimensions incompressibles',
              content: 'Douche à l\'italienne : minimum 80x80 cm (confort : 90x120 cm ou 90x140 cm). WC : emprise 60x40 cm + dégagement 60 cm devant. Lavabo : vasque posée (Ø 40-45 cm) ou meuble vasque (60-120 cm de large) + 60 cm de dégagement devant. Passage : 60 cm minimum entre deux éléments. Baignoire : si possible, 170x70 cm minimum. Attention : les portes battantes mangent de l\'espace — préférer porte coulissante ou battante inversée.'
            },
            {
              title: 'Optimisations en petit espace',
              content: 'La douche à l\'italienne (sans receveur) unifie le sol et agrandit visuellement. Les WC suspendus libèrent le sol (nettoyage + perception d\'espace). Le meuble vasque suspendu idem. La niche encastrée dans le mur (étagère dans la douche, niche à cosmétiques) = rangement qui ne prend pas de place. Le grand miroir (pleine largeur au-dessus du meuble vasque) double visuellement la pièce. Le carrelage grand format (60x60 ou 60x120) réduit les joints = plus de sérénité visuelle.'
            },
            {
              title: 'Le carrelage : choix stratégique',
              content: 'Sol : grès cérame antidérapant (R10 ou R11), grand format. Murs : tout carrelé (sol au plafond) = effet « bain turc » luxueux. Matériaux stars : zellige (artisanal, lumineux), travertin (warm luxe), terrazzo (graphique), marbre (classique luxe). Format : le grand format (30x60 minimum) agrandit l\'espace. Le zellige 10x10 en quinconce donne du caractère à une douche. Calepinage : poser les carreaux à joint continu mur-sol = impression de continuité.'
            },
            {
              title: 'La robinetterie encastrée',
              content: 'La robinetterie encastrée (mitigeur + douchette intégrés au mur) libère 15-20 cm de profondeur dans la douche. Elle donne un rendu épuré et haut de gamme. Marques de référence : Fantini, Cea Design, Axor (Hansgrohe), Dornbracht, RVB (français). Prévoir l\'encastrement AVANT le plâtre — un boîtier d\'encastrement est nécessaire. La pomme de tête encastrée au plafond = le luxe ultime de la douche.'
            }
          ],
          keyPoints: [
            'Douche à l\'italienne = standard absolu du projet contemporain',
            'WC + meuble vasque suspendus = espace visuel et propreté',
            'Grand format de carrelage = moins de joints = plus grand visuellement',
            'La robinetterie encastrée libère 15-20 cm — indispensable en petit espace',
            'Sol au plafond en carrelage = salle de bain de magazine'
          ],
          tips: [
            'Vérifier l\'épaisseur de la chape et la faisabilité de la pente pour la douche italienne AVANT de promettre au client',
            'La niche encastrée dans la douche se fait en même temps que le carrelage — la penser dès le plan',
            'Zellige 10x10 vert d\'eau dans la douche + robinetterie laiton = combinaison la plus photographiée sur Instagram'
          ],
          tags: ['salle de bain', 'douche', 'carrelage', 'compact', 'robinetterie', 'zellige']
        },
        {
          id: 'verriere-cloison-vitree',
          title: 'Verrière & Cloison Vitrée',
          category: 'Espaces & Pièces',
          subtitle: 'Séparer sans cloisonner',
          summary: 'La verrière est devenue l\'élément signature de la rénovation contemporaine. Elle sépare les espaces tout en laissant passer la lumière et les regards — c\'est le compromis parfait entre ouverture et intimité.',
          sections: [
            {
              title: 'Les typologies de verrière',
              content: 'Verrière d\'atelier (la classique) : structure acier noir + verre clair, style industriel. La plus demandée. Verrière en aluminium : plus fine, plus contemporaine, teinte au choix (noir, blanc, laiton). Verrière bois : plus chaleureuse, esprit scandinave ou japonais (shoji). Verrière avec porte intégrée (coulissante ou battante). Verrière imposte : juste un bandeau vitré au-dessus d\'une porte ou d\'un mur bas — discret mais efficace. Verrière toiture : pour les combles et rez-de-jardin.'
            },
            {
              title: 'Dimensionnement et pose',
              content: 'Largeur des montants : 25-40 mm (acier) à 20-30 mm (aluminium). Verre : clair (4-6 mm), feuilleté (sécurité obligatoire si grande surface), sablé ou flûté (intimité partielle). Hauteur standard : du sol au plafond OU sur allège (muret de 90-110 cm + verrière au-dessus). Fixation : sur rail haut et bas, ou scellée dans le mur. Épaisseur totale : 4-6 cm. Poids : 15-25 kg/m² — vérifier que le support peut recevoir la charge. Attention acoustique : le verre simple isole peu — le feuilleté acoustique (type 33.1) améliore de 3-5 dB.'
            },
            {
              title: 'Applications les plus courantes',
              content: 'Séparation cuisine / salon : la plus classique, permet de fermer la cuisine (fumées, bruit) tout en gardant la lumière. Séparation chambre / séjour : dans un studio ou T2, avec verre sablé pour l\'intimité. Séparation entrée / pièce de vie : crée un sas d\'entrée lumineux. Douche / salle de bain : verrière ou paroi vitrée de type industriel comme paroi de douche. Bureau dans le séjour : créer un espace de travail fermé visuellement mais ouvert lumineusement.'
            },
            {
              title: 'Fabricants et budget',
              content: 'Sur mesure artisan métallier : 800-1 500 €/m² (le plus beau, délai 4-8 semaines). Industriel haut de gamme : GoodHome (Castorama), Lapeyre, Leroy Merlin — 300-600 €/m² (standard, pose rapide). Fabricants pros : Atelier du Métal, Art Métal Concept, Turpin-Longueville. Budget : verrière 2x2,5 m (cuisine/salon) = 2 000-5 000 € selon la solution. La pose représente 30-50% du budget total.'
            }
          ],
          keyPoints: [
            'La verrière = la solution n°1 pour apporter de la lumière en second jour',
            'Acier = industriel, alu = contemporain, bois = chaleureux',
            'Verre feuilleté obligatoire en grande surface (sécurité)',
            'Verrière sur allège (muret) = séparation visuelle tout en laissant passer la lumière en haut',
            'Budget : 300 €/m² (GSB) à 1 500 €/m² (sur mesure artisan)'
          ],
          tips: [
            'L\'ajout d\'un verre flûté (cannelé) dans certains panneaux apporte du caractère tout en préservant l\'intimité',
            'Toujours prévoir un joint silicone souple entre la verrière et le mur — les bâtiments anciens bougent',
            'La verrière acier se patine naturellement — appliquer une cire pour conserver le noir profond ou laisser vieillir'
          ],
          tags: ['verrière', 'cloison', 'vitré', 'lumière', 'séparation', 'acier']
        },
        {
          id: 'banquette-integree',
          title: 'La Banquette Intégrée',
          category: 'Agencement Sur-Mesure',
          subtitle: 'Assise + rangement + signature',
          summary: 'La banquette intégrée est la solution la plus élégante pour gagner de la place dans un coin repas, une entrée ou un salon. C\'est aussi un geste architectural fort — un élément construit qui donne du caractère à un espace.',
          sections: [
            {
              title: 'Pourquoi la banquette',
              content: 'Gain de place : une banquette contre un mur prend 40-50 cm de profondeur (vs 60-80 cm pour des chaises). Rangement caché : assise relevable ou tiroirs sous l\'assise. Confort : avec de bons coussins, c\'est plus confortable et convivial qu\'une chaise. Esthétique : un élément construit « intégré » qui donne un effet sur-mesure et architecturé. Multifonction : coin repas le jour, espace lecture le soir, lit d\'appoint avec coussins.'
            },
            {
              title: 'Dimensions',
              content: 'Profondeur d\'assise : 40-50 cm (sans dossier contre le mur) ou 55-65 cm (avec coussins de dossier). Hauteur d\'assise : 43-47 cm (standard table 75 cm). Pour un coin repas en hauteur bar : 60-65 cm (table 90 cm). Espace sous l\'assise pour le rangement : 25-35 cm de hauteur utile. Le dossier : soit le mur directement (avec coussins rapportés), soit un dossier construit à 15-20° d\'inclinaison.'
            },
            {
              title: 'Types de construction',
              content: 'Maçonnée : en béton ou brique, recouverte d\'un habillage (bois, tissu). Solide, définitive. En bois (menuiserie) : la plus courante. Contreplaqué de bouleau ou MDF, avec assise relevable sur vérin. Sur mesure intégrée : la banquette fait partie du mobilier de cuisine ou d\'un meuble bas qui court le long du mur. En L ou en U : autour d\'une table dans un angle — optimise les coins souvent perdus.'
            },
            {
              title: 'Les finitions',
              content: 'Bois apparent (chêne, bouleau, noyer) : esprit scandinave ou japonais. Tissu tendu (bouclette, velours, lin) : confort et chaleur. Cuir ou simili : entretien facile, esprit bistrot. Coussins rapportés : le plus simple et le plus modulable. Wabi-sabi : banquette en béton brut ou tadelakt + coussins en lin — signature contemporaine. Associer la banquette au même bois que le sol ou la cuisine = continuité matière.'
            }
          ],
          keyPoints: [
            '40 cm de profondeur suffisent pour une banquette (vs 80 cm chaises + recul)',
            'Assise relevable = coffre de rangement dissimulé',
            'La banquette dînatoire autour d\'une table = gain de 40 cm de circulation',
            'Élément construit = signature architecturale qui valorise l\'espace',
            'Budget : 500-2000 € sur mesure selon les finitions'
          ],
          tips: [
            'Prévoir un tissu déhoussable et lavable pour l\'assise — surtout en coin repas avec enfants',
            'La mousse HR35 (haute résilience, densité 35 kg/m³) est le minimum pour un confort durable',
            'La banquette en L dans un angle crée un « nid » — c\'est souvent l\'endroit préféré du client'
          ],
          tags: ['banquette', 'assise', 'rangement', 'sur mesure', 'coin repas', 'intégré']
        },
        {
          id: 'mezzanine-hauteur',
          title: 'Mezzanine & Exploitation de la Hauteur',
          category: 'Espaces & Pièces',
          subtitle: 'Quand le m² se gagne en altitude',
          summary: 'Dans les petits espaces avec belle hauteur sous plafond, la mezzanine transforme un studio en duplex. C\'est l\'intervention la plus spectaculaire en rénovation — un gain de surface net de 30 à 50%.',
          sections: [
            {
              title: 'Faisabilité : la hauteur minimale',
              content: 'Hauteur sous plafond minimale : 3,60 m pour une mezzanine de couchage confortable (1,40 m en dessous + 1,80 m au-dessus + épaisseur plancher 20-30 cm). Si HsP < 3,60 m : mezzanine de couchage en « cocon » (on n\'est pas debout — c\'est un lit surélevé). Si HsP > 4 m : mezzanine à vivre (bureau, bibliothèque, salon). Si HsP > 5 m : vrai demi-étage avec circulation debout dessus et dessous. Réglementation : en dessous de 1,80 m de hauteur, la surface ne compte pas en surface habitable (mais reste utilisable).'
            },
            {
              title: 'Structure : les solutions techniques',
              content: 'Acier (IPN/IPE) : le plus courant en rénovation. Poutre acier scellée dans les murs porteurs + plancher bois ou métal dessus. Bois (solives apparentes) : plus chaleureux, esprit loft scandinave. En portée, compter des solives de 200-300 mm. Mixte acier-bois : poutre acier pour la portée + plancher bois pour la chaleur. Verre (plancher en verre feuilleté trempé) : spectaculaire, laisse passer la lumière. Portée maximum sans poteau intermédiaire : 3-4 m en bois, 5-6 m en acier (au-delà, prévoir un poteau).'
            },
            {
              title: 'L\'accès : escalier ou échelle',
              content: 'Escalier droit : emprise au sol 2-3 m², le plus confortable mais le plus gourmand en place. Escalier à pas japonais (ou pas alternés) : emprise 1-1,5 m², compact et design. Escalier hélicoïdal (colimaçon) : emprise Ø 130-160 cm, élégant mais moins pratique au quotidien. Échelle de meunier : emprise < 1 m², la plus compacte. Échelle coulissante ou rabattable : emprise 0, fixée au mur ou au plancher. Escalier-rangement : chaque marche est un tiroir — double fonction.'
            },
            {
              title: 'Aménagement de la mezzanine',
              content: 'Couchage : le plus courant. Matelas posé sur le plancher, éclairage indirect (ruban LED), prises tête de lit. Rangement intégré en périphérie (tiroirs sous pente si comble). Bureau / espace de travail : calme, en retrait, vue plongeante sur le séjour. Bibliothèque / lecture : mezzanine-nid avec coussins et étagères. Dressing : exploiter la hauteur réduite pour penderies et étagères. Garde-corps : câbles inox (discret), verre (lumineux), barreaux métal (industriel) ou mur bas (intimité). Hauteur minimale : 1 m (1,10 m si escalier donne directement dessus).'
            }
          ],
          keyPoints: [
            'HsP minimale 3,60 m pour une mezzanine de couchage confortable',
            'Gain de surface net : 30 à 50% — l\'intervention la plus rentable au m²',
            'L\'escalier à pas japonais = le meilleur compromis emprise/confort',
            'Acier (IPN) scellé = la solution structurelle standard en rénovation',
            'La mezzanine ne compte pas en surface habitable si h < 1,80 m — pas de taxe mais surface utile'
          ],
          tips: [
            'Faire valider la structure par un BET (Bureau d\'Études Techniques) — obligatoire pour le scellement des IPN',
            'Prévoir l\'éclairage sous la mezzanine dès la conception — les spots encastrés dans le plancher de la mezzanine sont du plus bel effet',
            'Un plancher en verre (feuilleté trempé) laisse passer la lumière vers le bas — spectaculaire dans un studio sombre'
          ],
          tags: ['mezzanine', 'hauteur', 'studio', 'duplex', 'escalier', 'structure']
        },
        {
          id: 'agencement-sur-mesure',
          category: 'Agencement Sur-Mesure',
          title: 'Dressings, Bibliothèques & Placards Sur-Mesure',
          subtitle: 'Concevoir le rangement comme une architecture dans l\'architecture',
          summary: 'Le rangement sur-mesure est LA plus-value n°1 d\'un projet d\'architecture d\'intérieur. Un dressing bien conçu change la vie quotidienne. Une bibliothèque murale transforme un mur vide en pièce maîtresse. Un placard intégré fait disparaître le désordre. Le sur-mesure n\'est pas un luxe — c\'est une optimisation rationnelle de chaque centimètre.',
          sections: [
            {
              title: 'Dressing : conception et dimensions',
              content: 'Types : dressing linéaire (1 mur), en L (2 murs), en U (3 murs), dressing walk-in (pièce dédiée). Largeur minimale pour un dressing walk-in : 1,80 m (penderie 60 cm + passage 60 cm + penderie 60 cm) — idéal : 2,20-2,50 m. Profondeur des penderies : 60 cm (le standard — un cintre fait 45 cm + l\'épaisseur du vêtement). Hauteur de la barre de penderie haute : 170-180 cm (costumes, robes longues, manteaux). Penderie basse (chemises, vestes) : 100-110 cm — permet de mettre 2 niveaux de penderie et DOUBLER la capacité. Étagères : profondeur 40 cm pour les pulls/t-shirts pliés, hauteur entre tablettes : 30-35 cm. Tiroirs : profondeur 50 cm, hauteur 15-20 cm (petits vêtements, accessoires). Prévoir un compartiment chaussures : 15 cm de hauteur par paire (plates), 20 cm (talons), 30 cm (bottes). Éclairage : LED intégré OBLIGATOIRE — un dressing mal éclairé est inutilisable. Détecteur de mouvement (Ikea STÖTTA ou LED encastrées avec capteur) = le luxe quotidien.'
            },
            {
              title: 'Bibliothèques et rangements muraux',
              content: 'La bibliothèque sur-mesure toute hauteur (sol-plafond) = le geste architectural le plus impactant dans un séjour. Elle habille un mur entier, structure l\'espace, expose les objets, range les livres et crée un DÉCOR en soi. Matériaux : MDF laqué (le plus contemporain — finition parfaite, toutes couleurs), contreplaqué bouleau chants apparents (le plus design — style nordique), chêne massif (le plus noble — style classique revisité), métal + bois (style industriel). Dimensions clés : profondeur 30 cm (livres), 35-40 cm (objets déco + livres), 25 cm (poche uniquement). Hauteur entre tablettes : 25 cm (poches), 30-32 cm (romans, beaux livres), 35 cm (grands formats). Étagères réglables (crémaillères) = obligatoire pour s\'adapter. Portée maximale d\'une étagère sans fléchir : MDF 19mm = 60 cm max. Contreplaqué 18mm = 80 cm. MDF 25mm = 80 cm. Au-delà : ajouter un montant intermédiaire ou utiliser une tablette renforcée (tasseau collé sous la tablette). Niches éclairées par LED : le détail qui transforme une bibliothèque en objet d\'art. 1 spot LED encastré ou 1 ruban LED par niche de mise en valeur.'
            },
            {
              title: 'Placards intégrés',
              content: 'Le placard intégré (du sol au plafond, de mur à mur) est l\'ennemi du meuble posé. Il maximise le rangement, épure l\'espace, supprime la poussière qui s\'accumule au-dessus et sur les côtés. Règle d\'or : TOUT placard doit aller du sol au plafond. L\'espace perdu au-dessus est un gâchis — c\'est là qu\'on range les valises, les couvertures, les archives. Types de portes : battantes (les plus simples, les moins chères, mais il faut l\'espace d\'ouverture devant), coulissantes (idéales si le passage est étroit — mais on n\'accède qu\'à la moitié du placard à la fois), pliantes (compromis — ouverture totale, encombrement réduit, mais mécanisme plus fragile). Façades : laquées (le plus contemporain), mélaminé décor bois (économique), miroir (agrandit la pièce — classique en entrée et chambre), cannage/rotin (tendance 2023-2026 — ajouter un cadre MDF + panneau de cannage). Intérieur : toujours en mélaminé blanc 16mm (le standard). Modules Ikea PAX = une base excellente à compléter par des façades sur-mesure (le hack le plus malin : caisson PAX + façades artisan = le prix d\'un placard basique pour un résultat haut de gamme).'
            },
            {
              title: 'Fabrication et budget',
              content: 'Trois filières : IKEA (PAX, BESTÅ, BILLY) + hack = le meilleur rapport qualité/prix. Caissons standardisés de qualité correcte + façades et poignées sur-mesure ou customisées. Budget dressing PAX complet : 1 500-3 000€. Limite : dimensions standards uniquement (largeurs 50/75/100 cm, profondeur 58 cm, hauteur 201/236 cm). Menuisier/agenceur artisan : le vrai sur-mesure. MDF laqué, placage chêne, contreplaqué bouleau — toutes dimensions, tous matériaux. Budget dressing 6m² : 5 000-12 000€. Bibliothèque murale 3m large × 2,5m haut : 3 000-8 000€. Délai : 3-6 semaines de fabrication. Le prix est dans la LAQUE (2-3 couches + ponçage inter-couches = beaucoup de main d\'œuvre). Agenceur industriel : entreprises qui font du sur-mesure en série. Mobalpa, Schmidt, SieMatic (ultra haut de gamme). Relevé de cotes + conception 3D + fabrication usine + pose. Budget intermédiaire entre IKEA et artisan. Conseil : toujours faire 2-3 devis (1 IKEA + hack, 1 artisan local, 1 agenceur) et comparer prix ET qualité.'
            }
          ],
          keyPoints: [
            'Dressing : profondeur 60 cm, 2 niveaux de penderie = double la capacité (haut 170 cm + bas 100 cm)',
            'Bibliothèque sol-plafond = le geste déco le plus impactant dans un séjour — structure le mur entier',
            'TOUT placard doit aller du sol au plafond — l\'espace au-dessus est un gâchis de rangement',
            'Portée max sans fléchir : MDF 19mm = 60 cm, contreplaqué 18mm = 80 cm — au-delà, montant intermédiaire',
            'Hack IKEA (caissons PAX + façades sur-mesure) = le meilleur rapport qualité/prix en rangement'
          ],
          tips: [
            'Dressing : 2 barres de penderie superposées (110 cm + 110 cm) au lieu d\'une seule à 180 cm = 2x plus de vêtements rangés. Le tiroir à chaussures incliné sous la penderie basse = le détail pro',
            'Bibliothèque MDF laqué blanc mat avec niches éclairées LED en fond coloré (bleu nuit, vert sauge, terracotta) = un meuble-tableau vivant. Coût du fond peint : 0€ (juste 1 pot de peinture)',
            'Façades miroir sur les placards d\'une entrée étroite = la pièce semble 2x plus large ET on se voit en pied avant de sortir. Double fonction, 0 cm d\'emprise supplémentaire'
          ],
          tags: ['dressing', 'bibliothèque', 'placard', 'sur-mesure', 'rangement', 'IKEA', 'menuisier']
        },
        {
          id: 'stores-rideaux-fenetres',
          category: 'Agencement Sur-Mesure',
          title: 'Stores, Rideaux & Habillage de Fenêtres',
          subtitle: 'Voilages, occultants, stores techniques — cadrer la lumière et l\'intimité',
          summary: 'L\'habillage de fenêtre est le parent pauvre de l\'architecture d\'intérieur — souvent oublié, traité en dernier, sous-budgété. Pourtant, c\'est lui qui contrôle la lumière, l\'intimité, la thermique et l\'acoustique d\'une pièce. Un bel intérieur avec des rideaux ratés reste un intérieur raté.',
          sections: [
            {
              title: 'Rideaux : types et poses',
              content: 'Rideau en voilage : tissu translucide qui tamise la lumière sans occulter. Le « vitrage » classique. Lin lavé, polyester froissé, coton mélangé. Le voilage en lin lavé blanc cassé = l\'élégance absolue — lumière douce, mouvement naturel, simplicité chic. Rideau occultant : tissu opaque (doublure occultante ou tissu blackout). Indispensable en chambre. Bloque 95-100% de la lumière. Peut être thermique (doublure aluminium) = isolation supplémentaire. Rideau décoratif : le rideau comme objet textile — velours, lin épais, laine, jacquard. Il habille le mur autant que la fenêtre. Pose : tringle apparente (la plus classique — barre en métal Ø19-28mm, laiton, noir mat, bois), rail au plafond encastré (la plus contemporaine — le rideau tombe du plafond, pas de tringle visible. Gorge technique dans le faux-plafond ou corniche/coffre en placoplâtre). Longueur : TOUJOURS au sol (le rideau qui s\'arrête à 10 cm du sol fait « court » — erreur déco n°1). Soit au ras du sol (1 cm au-dessus), soit cassant sur le sol (5-10 cm de tissu en excès = effet luxe drapé). Hauteur de pose : le plus HAUT possible — idéalement au plafond ou à 15-20 cm au-dessus de la fenêtre. Plus le rideau est posé haut, plus la pièce semble haute.'
            },
            {
              title: 'Stores intérieurs',
              content: 'Store enrouleur : toile qui s\'enroule sur un tube en tête de fenêtre. Le plus discret quand relevé. Toiles : tamisante (filtre la lumière), occultante (chambre), screen (tissu micro-perforé — bloque le soleil mais garde la vue. Le top pour les bureaux et séjours). Marques : Mermet (screen leader mondial, français), Copahome, Velux (pour les toits). Store vénitien : lamelles horizontales orientables. Aluminium 25mm (le classique — Luxaflex/Hunter Douglas, le n°1 mondial), bois 50mm (le plus chaleureux et le plus esthétique — style colonial revisité). Permet un contrôle FIN de la lumière — chaque lamelle s\'oriente. Le store vénitien bois 50mm couleur blanc cassé = un best-seller intemporel. Store californien (à bandes verticales) : lamelles verticales orientables. Pour les grandes baies vitrées. Le seul store qui accompagne les coulissants sans gêner l\'ouverture. Store bateau (roman blind) : tissu qui se replie en panneaux horizontaux quand on le remonte. Le plus décoratif des stores. En lin, en coton, en voile. Avec ou sans baleines (les baleines font des plis réguliers, sans baleines = plis souples naturels).'
            },
            {
              title: 'Stores extérieurs et protections solaires',
              content: 'Volet roulant : la protection la plus efficace (isolation thermique + phonique + occultation + sécurité). Intégré au coffre de linteau (neuf) ou en coffre apparent (rénovation). Aluminium (le standard) ou PVC (moins cher, moins résistant). Motorisation : OBLIGATOIRE en 2025 — personne ne veut de manivelle. Somfy = le leader (moteurs IO ou RTS, compatible domotique). BSO (Brise-Soleil Orientable) : le store extérieur premium. Lamelles aluminium orientables (comme un vénitien, mais à l\'extérieur). Bloque le rayonnement solaire AVANT qu\'il ne touche le vitrage — bien plus efficace qu\'un store intérieur. Motorisé, avec capteur solaire/vent automatique. Le must pour les façades sud et ouest. Prix : 500-1 500€ par fenêtre posé. Marques : Warema (allemand, le top), Griesser (suisse), Somfy (motorisation). Store banne : protection solaire des terrasses et balcons. Bras articulés + toile acrylique. Motorisé (Somfy). Toile Dickson (français, leader mondial des toiles acryliques) = la référence. Avancée : 3-4 m standard. Prix : 1 000-4 000€ posé selon largeur et qualité.'
            },
            {
              title: 'Choix et prescription',
              content: 'Séjour : double rideau (voilage lin + rideau décoratif lourd) sur rail encastré au plafond. OU store screen + rideau décoratif. Le screen garde la vue de jour, le rideau habille le soir. Chambre : store enrouleur occultant (discret, fonctionnel) + rideau décoratif occultant doublé. Double barrière = noir complet. Salle de bain : store enrouleur en toile PVC (résistant à l\'humidité) ou film adhésif dépoli sur le vitrage (le plus simple). Bureau/home office : store screen en priorité (anti-éblouissement écran, garde la vue). Mermet Satiné 5500 = la référence des architectes. Cuisine : store enrouleur tamisante (facile à nettoyer). Pas de rideau long près de la plaque de cuisson (risque incendie !). Grandes baies vitrées : store californien ou panneaux japonais (grands panneaux textiles coulissants sur rails parallèles = le plus contemporain pour les grandes surfaces vitrées). Budget : voilage confectionné = 30-80€/ml. Rideau occultant doublé = 60-150€/ml. Store screen sur-mesure = 150-300€/fenêtre. Rail encastré au plafond = 50-100€/ml.'
            }
          ],
          keyPoints: [
            'Le rideau TOUJOURS au sol (jamais à 10 cm au-dessus) et posé le plus HAUT possible (plafond idéalement)',
            'Le store screen = l\'anti-éblouissement qui garde la vue — le choix n°1 pour bureau et séjour sud/ouest',
            'Le BSO (Brise-Soleil Orientable) = la protection solaire la plus efficace — bloque le soleil AVANT le vitrage',
            'Le voilage en lin lavé blanc cassé tombant du plafond = l\'élégance absolue, simple et intemporelle',
            'Rail encastré au plafond (gorge technique) = le rideau semble tomber de nulle part — la pose la plus contemporaine'
          ],
          tips: [
            'Le rideau en lin lavé IKEA (DYTÅG ou SILVERLÖNN) = un rapport qualité/prix imbattable. 25€ le panneau, tombé magnifique, aspect artisanal. Le hack déco le plus répandu chez les architectes',
            'Poser la tringle à 5 cm du plafond (pas au-dessus de la fenêtre) + rideaux 30 cm plus larges que la fenêtre de chaque côté = la fenêtre semble 2x plus grande. Le tour de magie déco le plus efficace',
            'En chambre à coucher : store enrouleur occultant DANS l\'embrasure de la fenêtre (noir total) + rideau décoratif en lin sur tringle devant. L\'occultant fait le travail, le rideau fait le décor'
          ],
          tags: ['rideau', 'store', 'voilage', 'occultant', 'screen', 'BSO', 'lin', 'Somfy', 'protection solaire']
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
          category: 'Normes & Réglementations',
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
          category: 'Normes & Réglementations',
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
          category: 'Normes & Réglementations',
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
        },
        {
          id: 'amiante-diagnostic',
          category: 'Diagnostics Obligatoires',
          title: 'Amiante — Diagnostic & Gestion',
          subtitle: 'Le risque invisible des bâtiments pré-1997',
          summary: 'L\'amiante a été massivement utilisé dans le bâtiment jusqu\'à son interdiction en 1997. Il est potentiellement présent dans TOUT bâtiment construit avant cette date : flocages, dalles de sol, colles, canalisations, toitures. Le diagnostic est OBLIGATOIRE avant travaux. L\'inhaler provoque des maladies mortelles (mésothéliome, asbestose).',
          sections: [
            {
              title: 'Où trouver de l\'amiante',
              content: 'Flocages (plafonds, gaines techniques) : le plus dangereux car friable — les fibres se libèrent naturellement dans l\'air. Faux-plafonds : dalles contenant de l\'amiante (très courant dans les bureaux des années 60-80). Dalles de sol vinyl (type « dalami ») 30x30cm : extrêmement courantes dans les logements des années 50-80. La colle sous les dalles est AUSSI amiantée. Calorifugeages : isolation des tuyaux de chauffage (enrobage plâtreux autour des canalisations). Toiture en fibrociment (Eternit). Conduits de cheminée en fibrociment. Colles de carrelage et de faïence. Enduits et crépis. Joints de fenêtre et de porte coupe-feu. Amiante-ciment (gaines, plaques). Plaquettes de frein d\'ascenseur.'
            },
            {
              title: 'Obligations réglementaires',
              content: 'DTA (Dossier Technique Amiante) : obligatoire pour tous les immeubles dont le permis de construire est antérieur au 1er juillet 1997. Doit être réalisé par un diagnostiqueur certifié. Le propriétaire doit le mettre à disposition de tout intervenant. DAPP (Diagnostic Amiante Avant Vente) : obligatoire pour la vente. Repérage avant travaux (RAT) : obligatoire avant TOUS travaux, même mineurs (percer un mur, déposer un carrelage). Réalisé par un diagnostiqueur certifié selon la norme NF X46-020. Il identifie TOUS les matériaux amiantés susceptibles d\'être impactés par les travaux. Code du travail : l\'employeur (y compris l\'architecte qui prescrit les travaux) a une obligation de sécurité.'
            },
            {
              title: 'Procédure en cas d\'amiante',
              content: 'Si le diagnostic révèle de l\'amiante dans la zone de travaux : Sous-section 3 (SS3) : retrait ou encapsulage par une entreprise certifiée (habilitation SS3). Plan de retrait à soumettre à l\'inspection du travail 1 mois avant. Zone confinée + extraction d\'air + sas de décontamination + combinaisons jetables + masques P3. Sous-section 4 (SS4) : intervention sur des matériaux amiantés SANS les retirer (percer à travers, découper). Formation spécifique obligatoire pour les ouvriers. Élimination : les déchets amiantés sont des déchets dangereux (classe 1) — filière de traitement spécialisée, bordereaux de suivi. Coût : le désamiantage multiplie le budget par 3 à 10 selon la surface. Les dalles vinyl amiantées coûtent 50-150€/m² à déposer (vs 5-10€/m² pour des dalles classiques).'
            },
            {
              title: 'Responsabilité de l\'architecte d\'intérieur',
              content: 'Vous êtes le prescripteur des travaux. Si vous faites déposer un carrelage sans vérifier la présence d\'amiante dans la colle, et qu\'un ouvrier est exposé : VOTRE responsabilité pénale est engagée. Le repérage avant travaux (RAT) n\'est pas une option — c\'est une obligation LÉGALE dont le maître d\'ouvrage et ses mandataires (vous) sont garants. Réflexe systématique : bâtiment pré-1997 → exiger le DTA ET un repérage avant travaux ciblé sur votre zone d\'intervention. Si le client refuse le diagnostic pour raisons budgétaires → refuser la mission par écrit. L\'amiante tue — 3 000 décès/an en France liés à une exposition passée.'
            }
          ],
          keyPoints: [
            'TOUT bâtiment construit avant le 1er juillet 1997 est susceptible de contenir de l\'amiante',
            'Le repérage avant travaux est OBLIGATOIRE avant le moindre percement, le moindre retrait de sol',
            'Les dalles vinyl 30x30 et leur colle sont le piège n°1 en rénovation d\'appartement',
            'Votre responsabilité PÉNALE est engagée si vous prescrivez des travaux sans diagnostic',
            'Le désamiantage multiplie le budget par 3 à 10 — à anticiper AVANT le chiffrage'
          ],
          tips: [
            'Premier réflexe sur tout projet de rénovation : date du permis de construire. Avant 1997 → demander le DTA immédiatement',
            'Les dalles vinyl carrées 30x30cm collées au bitume = amiante quasi certain. NE JAMAIS les casser, les poncer ou les percer. Les recouvrir (ragréage par-dessus) est souvent la solution la moins chère et la plus sûre',
            'Intégrer la ligne « diagnostic amiante avant travaux » dans chaque devis de rénovation pré-1997 — c\'est votre protection juridique'
          ],
          tags: ['amiante', 'diagnostic', 'sécurité', 'réglementation', 'rénovation', 'santé']
        },
        {
          id: 'plomb-crep',
          category: 'Diagnostics Obligatoires',
          title: 'Plomb — CREP & Peintures Anciennes',
          subtitle: 'Le danger caché des immeubles pré-1949',
          summary: 'Le plomb a été utilisé dans les peintures (céruse) jusqu\'à son interdiction en 1949. Il est omniprésent dans les immeubles haussmanniens, les boiseries anciennes, les garde-corps en fonte. Le CREP (Constat de Risque d\'Exposition au Plomb) est obligatoire à la vente et à la location pour tout logement pré-1949. L\'ingestion ou l\'inhalation de plomb provoque le saturnisme.',
          sections: [
            {
              title: 'Où trouver du plomb',
              content: 'Peintures au plomb (céruse, minium) : sous les couches de peinture récentes, sur les boiseries (fenêtres, portes, plinthes, volets), murs et plafonds plâtrés, garde-corps et rampes en fonte/fer (minium = antirouille au plomb). Canalisations en plomb : alimentations en eau potable dans les immeubles anciens. L\'eau stagnante dans ces tuyaux accumule du plomb. Remplacement obligatoire (devait être fait avant 2013). Soudures à l\'étain-plomb : sur les canalisations en cuivre anciennes. Vitraux : les baguettes de plomb. Diagnostic : le CREP utilise un appareil à fluorescence X qui détecte le plomb à travers les couches de peinture sans les altérer.'
            },
            {
              title: 'Obligations réglementaires',
              content: 'CREP (Constat de Risque d\'Exposition au Plomb) : obligatoire pour la vente et la location de tout logement construit AVANT le 1er janvier 1949. Durée de validité : 1 an (vente), 6 ans (location), illimitée si absence de plomb. Seuil réglementaire : 1 mg/cm² de plomb. Si dépassé ET peinture dégradée (écaillée, cloquée) : travaux de suppression du risque obligatoires. Le préfet peut imposer des travaux en cas de risque d\'exposition (notamment avec enfants <6 ans — saturnisme infantile). En cas de travaux sur des surfaces plombées : obligation de mesures de protection similaires à l\'amiante (confinement, aspiration, EPI).'
            },
            {
              title: 'Gestion en rénovation',
              content: 'Ponçage/grattage de peinture au plomb : INTERDIT sans protection (crée des poussières de plomb toxiques). Le ponçage à sec est la pire méthode — les poussières sont ultrafines et se dispersent dans tout le logement. Solutions sûres : décapage chimique (pâte qui ramollit la peinture, on la retire sans poussière), décapage thermique à basse température (<450°C sinon le plomb se vaporise), encapsulage (recouvrir d\'un revêtement étanche — enduit, toile de verre, peinture épaisse). Remplacement des menuiseries : si les fenêtres anciennes sont plombées et dégradées, le remplacement est souvent plus simple et sûr que le décapage. Canalisations : remplacement par du PER ou du cuivre. Les canalisations en plomb sont grises et molles (marque de l\'ongle).'
            },
            {
              title: 'Saturnisme et responsabilité',
              content: 'Le saturnisme est l\'intoxication au plomb. Particulièrement dangereux pour les enfants <6 ans (développement neurologique), les femmes enceintes, et les ouvriers exposés. Contamination : ingestion d\'écailles de peinture (enfants), inhalation de poussières de ponçage/décapage, ingestion d\'eau contaminée. Symptômes : troubles du comportement, retard de développement, douleurs abdominales, anémie. C\'est une maladie à déclaration obligatoire. L\'architecte d\'intérieur qui prescrit un ponçage de boiseries dans un immeuble pré-1949 sans vérifier la présence de plomb engage sa responsabilité civile et pénale.'
            }
          ],
          keyPoints: [
            'CREP obligatoire pour tout logement construit avant le 1er janvier 1949 (vente et location)',
            'Le plomb se cache SOUS les couches de peinture récentes — invisible à l\'œil nu',
            'JAMAIS de ponçage à sec sur des peintures anciennes sans diagnostic plomb préalable',
            'Les boiseries (fenêtres, portes, plinthes) sont les supports les plus fréquemment plombés',
            'L\'encapsulage (recouvrement) est souvent plus sûr et moins cher que le décapage'
          ],
          tips: [
            'Appartement haussmannien + boiseries d\'origine = plomb quasi certain. Exiger le CREP avant toute intervention sur les menuiseries',
            'Quand un client veut « décaper les boiseries pour retrouver le bois brut » dans un immeuble pré-1949 : STOP — vérifier le plomb d\'abord',
            'Prévoir 1 500-3 000€ pour le décapage sécurisé d\'un lot de fenêtres plombées — l\'intégrer au budget dès le chiffrage'
          ],
          tags: ['plomb', 'CREP', 'diagnostic', 'sécurité', 'peinture', 'santé', 'haussmannien']
        },
        {
          id: 'securite-incendie',
          category: 'Normes & Réglementations',
          title: 'Sécurité Incendie & Classement au Feu',
          subtitle: 'Euroclasses, M0-M4, ERP, logement',
          summary: 'L\'architecte d\'intérieur choisit les matériaux, les revêtements, le mobilier — il est directement responsable du comportement au feu de l\'espace qu\'il conçoit. En ERP (Établissement Recevant du Public), une erreur de classement au feu peut coûter des vies et fermer un établissement.',
          sections: [
            {
              title: 'Classement au feu des matériaux',
              content: 'Ancien classement français (M) : M0 = incombustible (pierre, béton, plâtre, acier, verre). M1 = non inflammable (certains bois traités, PVC M1, tissus ignifugés). M2 = difficilement inflammable (moquette traitée, bois massif >14mm). M3 = moyennement inflammable (bois résineux, certains textiles). M4 = facilement inflammable (papier, textile non traité, polystyrène). Nouveau classement européen (Euroclasses) : A1/A2 = incombustible. B = contribution très limitée au feu. C/D = contribution limitée/moyenne. E = contribution importante. F = non déterminé. Les Euroclasses ajoutent des indices : s1/s2/s3 (production de fumée) et d0/d1/d2 (gouttes enflammées). Exemple : « Bs1d0 » = faible contribution au feu, peu de fumée, pas de gouttes.'
            },
            {
              title: 'Exigences en ERP (restaurants, hôtels, boutiques)',
              content: 'L\'arrêté du 25 juin 1980 fixe les règles. Revêtements muraux : M2 minimum dans les circulations et dégagements, M3 dans les locaux. Revêtements de sol : M4 dans les locaux, M3 dans les circulations. Plafonds : M1 dans les circulations, M2 dans les locaux. Rideaux, voilages, tentures : M1 (ignifugés). Sièges rembourrés : NF EN 1021-1 et 1021-2 (résistance à la cigarette et à l\'allumette). Portes coupe-feu : CF30 ou CF60 selon le type d\'ERP — fermeture automatique obligatoire. BAES (Blocs Autonomes d\'Éclairage de Sécurité) : balisage de sortie obligatoire. Désenfumage : obligatoire dans les grandes salles et circulations. Plan d\'évacuation affiché.'
            },
            {
              title: 'Exigences en logement',
              content: 'Logement individuel : moins contraignant mais le DAAF (Détecteur Avertisseur Autonome de Fumée) est OBLIGATOIRE depuis 2015. Un par étage minimum, dans les circulations menant aux chambres. Logement collectif (copropriété) : parties communes = quasi-ERP. Portes palières CF30 ou CF60 (coupe-feu 30 ou 60 minutes) obligatoires dans les immeubles de plus de 3 étages. Circulations communes : revêtements M2 minimum. Gaines techniques : coupe-feu (les gaines relient tous les étages et propagent le feu). Traversées de plancher (canalisations) : rebouchage coupe-feu obligatoire.'
            },
            {
              title: 'Impact sur les choix de l\'architecte',
              content: 'Bois massif >14mm : naturellement M3 (acceptable en murs de locaux ERP). Bois traité ou ignifugé : peut atteindre M1. Le traitement par imprégnation est plus durable que la peinture intumescente. Acier : M0 mais perd sa résistance mécanique à 500°C — protection par peinture intumescente, flocage, ou encoffrement. Textiles : doivent être ignifugés en ERP. Demander le PV (Procès-Verbal) de classement au feu au fournisseur. Polystyrène, mousse PU : M4 et très dangereux (gaz toxiques) — JAMAIS en apparent dans un ERP. Papier peint : M3 à M1 selon le support et le traitement. Rideau séparateur de salle : M1 obligatoire. TOUJOURS demander le PV de classement feu ou l\'attestation d\'ignifugation avant de spécifier un matériau en ERP.'
            }
          ],
          keyPoints: [
            'En ERP : TOUJOURS vérifier le classement au feu de chaque matériau AVANT de le spécifier',
            'M0 = incombustible. M1 = non inflammable. Murs en ERP = M2 minimum en circulation',
            'Les Euroclasses remplacent le classement M — « Bs1d0 » est l\'équivalent de M1',
            'DAAF obligatoire en logement depuis 2015 — un par étage, dans les circulations',
            'Demander le PV de classement feu ou l\'attestation d\'ignifugation à chaque fournisseur'
          ],
          tips: [
            'Créer un tableau « matériaux / classement feu » pour chaque projet ERP — le commissaire de sécurité le demandera',
            'Les tissus d\'éditeurs (Kvadrat, Pierre Frey) ont des gammes « contract » déjà ignifugées — plus simple que de faire traiter après',
            'Le flocage coupe-feu sur acier est moche — proposer de l\'habiller (faux-plafond, coffrage bois M1) plutôt que de le laisser visible'
          ],
          tags: ['incendie', 'feu', 'ERP', 'Euroclasses', 'M0', 'sécurité', 'réglementation']
        },
        {
          id: 'diagnostics-avant-renovation',
          category: 'Diagnostics Obligatoires',
          title: 'Diagnostics Techniques avant Rénovation',
          subtitle: 'La checklist complète',
          summary: 'Avant toute rénovation, une série de diagnostics techniques est obligatoire ou fortement recommandée. Les oublier, c\'est risquer des surcoûts astronomiques, des arrêts de chantier, et des poursuites judiciaires. Cette fiche est votre checklist systématique.',
          sections: [
            {
              title: 'Diagnostics obligatoires à la vente',
              content: 'DDT (Dossier de Diagnostics Techniques) — le vendeur doit fournir : DPE (Diagnostic de Performance Énergétique) : classement A-G, obligatoire vente ET location. Validité 10 ans. Le nouveau DPE (2021) est opposable = engage la responsabilité du diagnostiqueur. Amiante (DAPP) : obligatoire si permis de construire avant le 1er juillet 1997. Validité illimitée si négatif. Plomb (CREP) : obligatoire si construction avant le 1er janvier 1949. Validité 1 an (vente) si positif. Termites : obligatoire dans les zones classées par arrêté préfectoral. Validité 6 mois. Gaz : obligatoire si installation de plus de 15 ans. Validité 3 ans (vente). Électricité : obligatoire si installation de plus de 15 ans. Validité 3 ans (vente). ERP/ERNMT : état des risques naturels, miniers, technologiques. Validité 6 mois. Assainissement : obligatoire si assainissement non collectif (fosses septiques).'
            },
            {
              title: 'Diagnostics obligatoires avant travaux',
              content: 'Repérage amiante avant travaux (RAT) : obligatoire AVANT TOUS TRAVAUX dans un bâtiment pré-1997. Plus approfondi que le DAPP (qui ne couvre que les parties visibles). Le RAT cible spécifiquement les matériaux qui seront impactés par vos travaux. Coût : 500-2 000€ selon la surface. Diagnostic plomb avant travaux : si bâtiment pré-1949 et intervention sur des revêtements peints. Diagnostic termites : dans les zones classées, si travaux sur la structure bois. Diagnostic structure : si ouverture de mur porteur ou modification de la structure — étude par un ingénieur structure (bureau d\'études type Arcadis, Socotec, BET local). Coût : 800-3 000€ pour une note de calcul IPN.'
            },
            {
              title: 'Diagnostics recommandés (non obligatoires)',
              content: 'Diagnostic humidité : si traces de moisissures, salpêtre, remontées capillaires. Fait par un expert humidité indépendant (pas un vendeur de traitement). Coût : 300-800€. Diagnostic acoustique : si immeuble ancien bruyant ou projet en ERP. Mesure du RT60, de l\'isolement DnT,A. Diagnostic mérule : recommandé dans les zones à risque (Bretagne, Nord, Normandie). Diagnostic thermique : bilan thermique complet avec caméra infrarouge. Identifie les ponts thermiques et les déperditions. Coût : 200-500€. Diagnostic structure approfondi : si fissures inquiétantes, déformation des planchers, doute sur la capacité portante. Fait par un ingénieur structure avec sondages.'
            },
            {
              title: 'Votre rôle en tant qu\'architecte d\'intérieur',
              content: 'Demander le DDT complet au client dès le premier rendez-vous. Vérifier les dates de validité de chaque diagnostic. Si pré-1997 : exiger le RAT amiante avant de concevoir (les résultats peuvent changer tout le projet). Si pré-1949 : vérifier le CREP et anticiper le plomb. Si modification structurelle prévue (ouverture, mezzanine) : commander l\'étude structure dès l\'APS, pas en phase chantier. Intégrer le coût des diagnostics dans l\'estimation budgétaire dès le premier chiffrage. Refuser par ÉCRIT toute demande de travaux sans diagnostics préalables. Archiver tous les rapports de diagnostic dans le dossier projet. La check-list avant de commencer à dessiner : date de construction, DDT complet, diagnostics complémentaires nécessaires. Si un seul manque, le réclamer avant de poursuivre.'
            }
          ],
          keyPoints: [
            'Date de construction → diagnostics obligatoires : pré-1997 = amiante, pré-1949 = amiante + plomb',
            'Le RAT (repérage amiante avant travaux) est plus approfondi que le DAPP de vente — le demander SYSTÉMATIQUEMENT',
            'Le diagnostic structure est obligatoire dès qu\'on touche à un mur porteur — budget 800-3 000€',
            'TOUJOURS demander le DDT complet au premier RDV client — c\'est le document n°1',
            'Refuser par ÉCRIT de travailler sans diagnostics = votre protection juridique'
          ],
          tips: [
            'Créer un template de mail « demande de diagnostics » à envoyer à chaque nouveau client dès la signature du contrat',
            'Le DPE classe F ou G = passoire thermique = obligations de travaux à venir (interdiction de location). Prévenir le client des implications',
            'En cas de doute sur la structure : 800€ de diagnostic maintenant vs 50 000€ de sinistre après — le choix est vite fait'
          ],
          tags: ['diagnostic', 'amiante', 'plomb', 'DPE', 'structure', 'rénovation', 'checklist']
        }
      ]
    },

    // ====================================
    // 6. GESTION DE PROJET
    // ====================================
    {
      id: 'gestion-projet',
      name: 'Gestion de Projet',
      icon: '⊞',
      color: '#6B7A9E',
      description: 'De la première rencontre à la livraison : phases de projet, relation client, chiffrage et suivi de chantier.',
      fiches: [
        {
          id: 'sketchup',
          category: 'Outils & Organisation',
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
          category: 'Juridique & Assurances',
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
          category: 'Méthodologie',
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
        },
        // --- JURIDIQUE & ASSURANCES ---
        {
          id: 'statut-juridique-archi-interieur',
          category: 'Juridique & Assurances',
          title: 'Statut Juridique de l\'Architecte d\'Intérieur',
          subtitle: 'Titre, diplôme, cadre légal et obligations',
          summary: 'Contrairement à l\'architecte DPLG/HMONP, l\'architecte d\'intérieur n\'est pas une profession réglementée en France — mais le titre est protégé. Comprendre le cadre juridique est indispensable pour exercer légalement et crédiblement.',
          sections: [
            {
              title: 'Titre protégé vs. profession réglementée',
              content: '<ul><li>L\'architecte d\'intérieur N\'EST PAS une profession réglementée — contrairement à l\'architecte (DPLG/HMONP) inscrit à l\'Ordre.</li><li>Le TITRE « architecte d\'intérieur » est en revanche protégé par le CFAI (Conseil Français des Architectes d\'Intérieur).</li><li>Pour porter le titre, il faut : un diplôme reconnu par le CFAI + une inscription au répertoire du CFAI.</li><li>Les diplômes reconnus : DSAA Design (Bac+5), DNSEP (Beaux-Arts), diplômes d\'écoles privées reconnues (Camondo, Boulle, Penninghen, Académie Charpentier, ESAIL, etc.).</li><li>Sans diplôme reconnu : on peut exercer mais on doit utiliser « designer d\'espace », « décorateur », « concepteur d\'espace » — jamais « architecte d\'intérieur ».</li><li>La différence clé avec l\'architecte DPLG : l\'architecte d\'intérieur ne peut PAS signer de permis de construire ni toucher à la structure porteuse sans ingénieur.</li><li>En pratique : l\'architecte d\'intérieur intervient sur tout ce qui est non structurel — cloisons, revêtements, agencement, éclairage, mobilier.</li><li>Pour les travaux touchant à la structure (ouverture mur porteur, extension) : collaboration obligatoire avec un architecte DPLG et un ingénieur structure.</li></ul>'
            },
            {
              title: 'Les structures juridiques pour exercer',
              content: '<ul><li>Micro-entreprise (auto-entrepreneur) : le plus simple pour démarrer. Plafond 77 700€/an (prestations de service). Pas de TVA sous le seuil. Cotisations ~22%. Inconvénient : pas de déduction des charges, responsabilité personnelle illimitée.</li><li>EURL (Entreprise Unipersonnelle à Responsabilité Limitée) : responsabilité limitée au capital social. Déduction des charges. Régime IS ou IR. Plus crédible face aux clients et fournisseurs.</li><li>SASU (Société par Actions Simplifiée Unipersonnelle) : le président est assimilé salarié (meilleure protection sociale). Souplesse statutaire. Dividendes sans cotisations sociales. Idéal si CA > 50 000€.</li><li>SAS : si vous vous associez (2+ personnes). Même avantages que SASU mais à plusieurs.</li><li>Profession libérale BNC : rattachement URSSAF + CIPAV. Code APE 74.10Z « activités spécialisées de design ».</li><li>Conseil : commencer en micro pour tester, puis passer en SASU dès que le CA dépasse 40-50 000€/an.</li><li>IMPORTANT : quel que soit le statut, l\'assurance RC Pro est OBLIGATOIRE dès le premier projet.</li></ul>'
            },
            {
              title: 'Obligations légales de l\'exercice',
              content: '<ul><li>Immatriculation : inscription au registre du commerce (RCS) ou au répertoire des métiers selon le statut.</li><li>Assurance RC Professionnelle : OBLIGATOIRE — couvre les dommages causés aux tiers dans le cadre de votre activité.</li><li>Mentions légales obligatoires sur les devis et factures : numéro SIRET, forme juridique, capital social, assurance RC Pro (nom + numéro de police + couverture géographique).</li><li>CGV (Conditions Générales de Vente) : obligatoires pour les clients professionnels, fortement recommandées pour les particuliers.</li><li>Médiation de la consommation : obligatoire si vous travaillez avec des particuliers — vous devez nommer un médiateur et l\'indiquer sur vos documents.</li><li>RGPD : si vous collectez des données clients (nom, adresse, photos de leur intérieur), vous devez respecter le RGPD — registre de traitement, information des clients, droit à l\'effacement.</li><li>Droit de rétractation : 14 jours pour les contrats conclus à distance ou hors établissement avec des particuliers.</li><li>Formation continue : pas obligatoire légalement mais indispensable pour rester compétitif et à jour des normes.</li></ul>'
            },
            {
              title: 'Les organismes à connaître',
              content: '<ul><li>CFAI (Conseil Français des Architectes d\'Intérieur) : protège le titre, tient le répertoire des professionnels qualifiés — cfai.fr.</li><li>UNAID (Union Nationale des Architectes d\'Intérieur Designers) : syndicat professionnel, défend les intérêts de la profession — unaid.fr.</li><li>FNSAI (Fédération Nationale des Syndicats d\'Architectes d\'Intérieur) : autre syndicat historique.</li><li>URSSAF : organisme de collecte des cotisations sociales — votre interlocuteur principal en micro-entreprise.</li><li>CIPAV : caisse de retraite des professions libérales (si BNC).</li><li>INPI : pour déposer votre marque et protéger votre identité visuelle.</li><li>Ordre des Architectes : vous n\'y êtes PAS inscrit (c\'est l\'Ordre des architectes DPLG) — mais il faut connaître son existence et la distinction.</li></ul>'
            }
          ],
          keyPoints: [
            'Le titre « architecte d\'intérieur » est PROTÉGÉ par le CFAI — ne l\'utilisez pas sans diplôme reconnu',
            'L\'architecte d\'intérieur ne peut PAS signer de permis de construire',
            'RC Pro obligatoire dès le premier projet — sans assurance, vous exercez illégalement',
            'Micro-entreprise pour démarrer, SASU dès que le CA dépasse 40-50k€',
            'Se faire inscrire au CFAI dès que possible — c\'est un gage de crédibilité'
          ],
          tips: [
            'Vérifier si votre diplôme est reconnu par le CFAI avant d\'utiliser le titre — cfai.fr/formation',
            'Consulter un expert-comptable AVANT de choisir son statut — un mauvais choix coûte cher à corriger',
            'Faire rédiger ses CGV et son contrat type par un avocat spécialisé — investissement ~800-1500€ qui protège pendant des années'
          ],
          tags: ['juridique', 'statut', 'CFAI', 'titre', 'micro-entreprise', 'SASU', 'réglementation']
        },
        {
          id: 'assurances-archi-interieur',
          category: 'Juridique & Assurances',
          title: 'Les Assurances Indispensables',
          subtitle: 'RC Pro, décennale, PJ et protection du pro',
          summary: 'Une erreur de prescription, un sinistre sur chantier, un client mécontent qui vous assigne — sans les bonnes assurances, votre activité et votre patrimoine personnel sont en danger. Tour d\'horizon complet des assurances obligatoires et recommandées.',
          sections: [
            {
              title: 'La RC Professionnelle — OBLIGATOIRE',
              content: '<ul><li>RC Pro = Responsabilité Civile Professionnelle. Elle couvre les dommages que vous causez à autrui dans le cadre de votre activité.</li><li>Exemples couverts : erreur de prescription de matériau qui cause un dommage, mauvais conseil d\'implantation, retard de livraison qui entraîne un préjudice financier pour le client.</li><li>La RC Pro est OBLIGATOIRE pour tout architecte d\'intérieur — exercer sans est une faute grave.</li><li>Coût indicatif : 400-1 200€/an en fonction du CA, de l\'expérience et du périmètre d\'intervention.</li><li>Assureurs spécialisés : MAF (Mutuelle des Architectes Français), MMA, AXA, Hiscox, Allianz.</li><li>Vérifier les exclusions : certaines polices excluent les sinistres liés à la structure, aux travaux que vous avez dirigés mais pas conçus, ou aux projets à l\'étranger.</li><li>Mention OBLIGATOIRE sur vos devis et factures : nom de l\'assureur + numéro de police + couverture géographique.</li></ul>'
            },
            {
              title: 'La garantie décennale — selon votre activité',
              content: '<ul><li>La décennale couvre les dommages qui compromettent la solidité de l\'ouvrage ou le rendent impropre à sa destination pendant 10 ans après réception.</li><li>Elle est OBLIGATOIRE pour les constructeurs (loi Spinetta 1978) : architectes, entreprises, artisans qui participent à la construction.</li><li>L\'architecte d\'intérieur : en théorie, si vous ne touchez pas à la structure et ne dirigez pas les travaux (simple prescripteur), la décennale n\'est pas obligatoire.</li><li>ATTENTION : si vous faites de la maîtrise d\'œuvre (direction des travaux, coordination des entreprises), vous devenez « constructeur » au sens de la loi et la décennale DEVIENT obligatoire.</li><li>En pratique : de plus en plus de clients et de banques exigent une attestation décennale. Mieux vaut l\'avoir.</li><li>Coût indicatif : 1 500-4 000€/an selon le CA et la nature des travaux suivis.</li><li>La MAF (Mutuelle des Architectes Français) propose des contrats couplés RC Pro + décennale adaptés aux architectes d\'intérieur.</li><li>Piège fréquent : signer un contrat de « maîtrise d\'œuvre d\'exécution » sans avoir la décennale = faute grave, exclusion de garantie, responsabilité sur vos biens personnels.</li></ul>'
            },
            {
              title: 'Les autres assurances recommandées',
              content: '<ul><li>Protection Juridique Professionnelle (PJ Pro) : couvre les frais d\'avocat en cas de litige avec un client, un fournisseur ou une entreprise. Coût : 200-500€/an. INDISPENSABLE.</li><li>Assurance locaux professionnels (multirisque bureau) : si vous avez un atelier ou un showroom — incendie, vol, dégât des eaux.</li><li>Prévoyance (arrêt de travail, invalidité) : en libéral, aucune protection par défaut. Un accident = plus de revenu. La prévoyance couvre le maintien de revenu. Coût : 50-150€/mois.</li><li>Mutuelle santé : obligatoire si salarié, fortement recommandée en indépendant (loi Madelin permet la déduction fiscale).</li><li>Assurance véhicule professionnel : si vous utilisez votre véhicule pour les RDV clients et visites de chantier, vérifier que votre contrat auto couvre l\'usage professionnel.</li><li>Cyber-assurance : si vous stockez des données clients (plans, photos d\'intérieur) — de plus en plus pertinent.</li><li>Assurance perte d\'exploitation : couvre votre CA si un sinistre vous empêche de travailler (incendie du bureau, par exemple).</li></ul>'
            },
            {
              title: 'Les garanties post-chantier à connaître',
              content: '<ul><li>Garantie de parfait achèvement (GPA) : 1 an après réception. L\'entreprise doit réparer TOUS les désordres signalés (réserves ou apparition dans l\'année). C\'est la garantie la plus large.</li><li>Garantie de bon fonctionnement (biennale) : 2 ans. Couvre les équipements dissociables : robinetterie, volets roulants, portes, radiateurs, appareillage électrique.</li><li>Garantie décennale : 10 ans. Couvre les dommages qui affectent la solidité ou rendent l\'ouvrage impropre à sa destination : fissures structurelles, infiltrations, isolation défaillante.</li><li>PV de réception : le document qui déclenche TOUTES les garanties. Sans réception formelle = pas de garantie. Toujours faire un PV de réception signé avec liste de réserves.</li><li>Réserves : les défauts constatés à la réception. L\'entreprise a un délai pour les lever (souvent 60 jours). Tant que les réserves ne sont pas levées, retenir 5% du montant (retenue de garantie).</li><li>Dommages-Ouvrage (DO) : assurance du maître d\'ouvrage (le client) qui permet un préfinancement rapide des réparations décennales sans attendre le jugement de responsabilité. Obligatoire pour le client, pas pour vous — mais conseillez-la systématiquement.</li></ul>'
            }
          ],
          keyPoints: [
            'RC Pro = OBLIGATOIRE, sans exception, dès le premier projet',
            'Décennale = obligatoire si vous faites de la maîtrise d\'œuvre (direction de travaux)',
            'Protection Juridique Pro = la meilleure assurance rapport qualité/prix contre les litiges',
            'Le PV de réception déclenche TOUTES les garanties — ne jamais le négliger',
            'Conseiller la Dommages-Ouvrage au client — c\'est aussi vous protéger'
          ],
          tips: [
            'Comparer les devis MAF, Hiscox et MMA — les écarts peuvent aller du simple au triple pour la même couverture',
            'Relire les exclusions de votre police RC Pro chaque année — les conditions changent',
            'Garder une copie de TOUTES les attestations d\'assurance des entreprises intervenant sur vos chantiers — c\'est votre protection en cas de sinistre'
          ],
          tags: ['assurance', 'RC Pro', 'décennale', 'garantie', 'protection', 'juridique', 'risques']
        },
        {
          id: 'contrat-responsabilites',
          category: 'Juridique & Assurances',
          title: 'Contrats, Responsabilités & Litiges',
          subtitle: 'Se protéger juridiquement à chaque étape',
          summary: 'Le contrat est votre meilleur allié. Mal rédigé, il vous expose. Bien ficelé, il vous protège de 95% des litiges. Tour d\'horizon des responsabilités de l\'architecte d\'intérieur, des clauses essentielles et de la gestion des conflits.',
          sections: [
            {
              title: 'Le contrat de mission — structure type',
              content: '<ul><li>Objet de la mission : description PRÉCISE du périmètre (conception seule ? + suivi de chantier ? + mobilier ?). Ce qui n\'est PAS écrit n\'est PAS inclus.</li><li>Phases de mission : esquisse / avant-projet sommaire (APS) / avant-projet définitif (APD) / plans d\'exécution / suivi de chantier / réception. Préciser lesquelles sont incluses.</li><li>Honoraires et modalités de paiement : montant (forfait ou %), échéancier, conditions de règlement (30 jours), pénalités de retard.</li><li>Délais : planning prévisionnel de chaque phase. Préciser que les retards du client (validation, accès au site) décalent le planning d\'autant.</li><li>Obligations du client : fournir les diagnostics, donner accès au site, valider dans les délais, payer selon l\'échéancier.</li><li>Propriété intellectuelle : vos plans et dessins vous appartiennent jusqu\'au paiement intégral. Le client obtient un droit d\'usage, pas la propriété.</li><li>Clause de résiliation : conditions de sortie pour les deux parties (préavis, indemnités, paiement du travail réalisé).</li><li>Clause de médiation : en cas de litige, recours à un médiateur avant toute procédure judiciaire. Obligatoire pour les clients particuliers.</li><li>Tribunal compétent : indiquer le tribunal de votre domicile professionnel.</li></ul>'
            },
            {
              title: 'Les responsabilités de l\'architecte d\'intérieur',
              content: '<ul><li>Obligation de CONSEIL : vous devez informer le client des risques, des contraintes, des coûts réels. Un client qui perd de l\'argent parce que vous n\'avez pas signalé un problème = votre responsabilité.</li><li>Obligation de MOYENS (pas de résultat) : vous devez mettre en œuvre toutes les compétences nécessaires, mais vous ne garantissez pas un résultat précis (sauf engagement contractuel).</li><li>Responsabilité civile contractuelle : si vous ne respectez pas le contrat (retard, erreur de conception, non-respect du budget annoncé), le client peut demander réparation.</li><li>Responsabilité civile délictuelle : si vous causez un dommage à un tiers (voisin, copropriété) pendant le chantier.</li><li>Responsabilité pénale : en cas de mise en danger d\'autrui — amiante non diagnostiquée, non-respect des normes de sécurité, accessibilité bâclée en ERP.</li><li>Responsabilité du fait des entreprises : si vous faites de la maîtrise d\'œuvre, vous avez un devoir de contrôle sur les entreprises. Un artisan qui bâcle un travail que vous auriez dû vérifier = responsabilité partagée.</li><li>Prescription : l\'action en responsabilité civile se prescrit par 5 ans à compter de la découverte du dommage (hors décennale qui court 10 ans après réception).</li></ul>'
            },
            {
              title: 'Propriété intellectuelle & droits d\'auteur',
              content: '<ul><li>Vos plans, dessins, rendus 3D, moodboards et concepts sont protégés par le droit d\'auteur dès leur création — sans formalité, sans dépôt.</li><li>Le client ne peut PAS réutiliser vos plans pour un autre projet ou les confier à un autre professionnel sans votre accord — même s\'il les a payés.</li><li>Ce qui est payé = un droit d\'USAGE pour le projet défini au contrat. La propriété intellectuelle reste la vôtre.</li><li>Clause à intégrer au contrat : « Les plans et documents de conception restent la propriété intellectuelle de [votre nom/société]. Le client acquiert un droit d\'usage non exclusif, non cessible, limité au projet objet du présent contrat. »</li><li>Si le client veut la cession COMPLÈTE des droits : c\'est possible mais ça se négocie et ça se facture (en général +20-30% des honoraires).</li><li>Preuve de paternité : dater vos fichiers, vous envoyer un courrier recommandé avec les plans, utiliser une plateforme de dépôt (e-Soleau via INPI = 15€). En cas de litige, la preuve d\'antériorité est cruciale.</li><li>Utilisation en portfolio : vous avez le droit de publier des photos de vos réalisations (droit moral de l\'auteur) SAUF si le contrat l\'interdit explicitement. Prévoir une clause « droit de publication ».</li><li>Attention au « copier-coller » : reproduire le design d\'un confrère = contrefaçon. S\'inspirer est légal, copier est illégal.</li></ul>'
            },
            {
              title: 'Gérer un litige client',
              content: '<ul><li>RÈGLE N°1 : ne jamais réagir à chaud. Un client mécontent qui reçoit une réponse émotionnelle devient un client procédurier.</li><li>Étape 1 — Accusez réception par écrit : « J\'ai bien noté votre insatisfaction concernant [X]. Je reviens vers vous sous 48h après analyse. »</li><li>Étape 2 — Relisez le contrat : vérifiez ce qui était prévu, ce qui a été livré, ce qui a été validé. Les PV de validation signés sont votre meilleure preuve.</li><li>Étape 3 — Proposez une solution amiable : corriger le défaut, accorder une remise, offrir une prestation complémentaire. 90% des litiges se règlent à l\'amiable.</li><li>Étape 4 — Médiation : si pas d\'accord amiable, proposer un médiateur (obligatoire pour les clients particuliers). Coût partagé ou gratuit pour le consommateur.</li><li>Étape 5 — Procédure judiciaire : en dernier recours. Tribunal judiciaire pour les particuliers, tribunal de commerce entre pros. Faites-vous assister par un avocat (c\'est là que la PJ Pro est précieuse).</li><li>PRÉVENTION : le meilleur moyen d\'éviter les litiges = faire signer un PV de validation à CHAQUE étape (esquisse, APS, APD, choix matériaux). Un client qui a signé ne peut plus dire qu\'il n\'était pas d\'accord.</li><li>Les traces écrites (mails, comptes rendus de réunion signés) ont valeur de preuve — les échanges oraux non.</li></ul>'
            },
            {
              title: 'La facturation et les impayés',
              content: '<ul><li>Mentions obligatoires sur une facture : date, n° de facture, identité complète (SIRET, forme juridique), description de la prestation, montant HT/TTC, TVA, conditions de paiement, pénalités de retard.</li><li>Acompte à la signature : 30% minimum. Un client qui refuse de verser un acompte est un signal d\'alarme. L\'acompte engage les deux parties.</li><li>En cas d\'impayé : 1) Relance amiable par mail (J+7). 2) Relance formelle par courrier recommandé AR (J+15). 3) Mise en demeure (J+30). 4) Injonction de payer au tribunal (procédure rapide, ~40€).</li><li>Pénalités de retard légales : 3 x le taux d\'intérêt légal + indemnité forfaitaire de 40€ pour frais de recouvrement.</li><li>Clause de réserve de propriété : les plans ne sont livrés qu\'après paiement intégral. Le client ne peut pas utiliser vos documents tant qu\'il n\'a pas tout payé.</li><li>ASTUCE : ne jamais envoyer les fichiers source (DWG, SKP) avant le paiement final — ne livrer que des PDF ou exports image.</li></ul>'
            }
          ],
          keyPoints: [
            'Le contrat ÉCRIT est votre seule protection — un accord verbal ne vaut rien en cas de litige',
            'Obligation de conseil = devoir d\'ALERTE. Si vous voyez un problème et ne dites rien, c\'est votre faute',
            'Vos plans vous appartiennent — le client achète un droit d\'usage, pas la propriété',
            'Faire signer un PV de validation à chaque étape = prévention anti-litige n°1',
            'Ne jamais livrer les fichiers source avant le paiement intégral'
          ],
          tips: [
            'Investir 800-1 500€ dans un contrat type rédigé par un avocat spécialisé — c\'est l\'achat le plus rentable de votre carrière',
            'Envoyer un compte-rendu écrit après chaque réunion avec le client (même par mail) — « suite à notre échange, voici ce qui a été décidé… »',
            'Déposer vos concepts sur e-Soleau (INPI, 15€) pour les projets importants — c\'est la preuve d\'antériorité la plus solide'
          ],
          tags: ['contrat', 'responsabilité', 'propriété intellectuelle', 'litiges', 'facture', 'impayés', 'juridique']
        }
      ]
    },

    // ====================================
    // 7. TENDANCES & VEILLE
    // ====================================
    {
      id: 'tendances',
      name: 'Tendances & Veille',
      icon: '◉',
      color: '#9E8B6B',
      description: 'Salons, designers influents, tendances émergentes, lieux à visiter et culture architecturale contemporaine.',
      fiches: [
        {
          id: 'salons-incontournables',
          category: 'Tendances',
          title: 'Salons Incontournables',
          subtitle: 'Le calendrier du design — quand, où, pourquoi',
          summary: 'Les salons internationaux sont les lieux où naissent les tendances, où se font les contacts et où s\'enrichit la culture du design. Les connaître est indispensable.',
          sections: [
            {
              title: 'Maison & Objet — Paris',
              content: 'Janvier et septembre au Parc des Expositions de Villepinte. LE salon français de la décoration et du design. 3 000 exposants, 80 000 visiteurs. Découverte des tendances, nouvelles marques et matériaux. Le « Designer of the Year » et les « Rising Talents » sont des indicateurs de tendance majeurs. Le hall 7 (Scènes d\'Intérieur) est le plus pertinent pour les architectes d\'intérieur.'
            },
            {
              title: 'Salone del Mobile — Milan',
              content: 'Avril, à la Fiera Milano Rho. Le plus grand et le plus prestigieux salon de design au monde. 2 000 exposants, 350 000 visiteurs. La Design Week s\'étend dans tout Milan (Fuorisalone) avec des installations dans les cours des palais. C\'est ici que les grandes marques (B&B Italia, Molteni, Cassina) dévoilent leurs nouveautés. Le Fuorisalone (off) dans les quartiers Brera, Tortona, Isola est souvent plus inspirant que le salon lui-même.'
            },
            {
              title: 'Autres salons majeurs',
              content: 'Stockholm Furniture Fair (février) : design scandinave, la source du « soft minimalism ». IMM Cologne (janvier) : mobilier allemand et international, très orienté industrie. London Design Festival (septembre) : design britannique et international, installations dans toute la ville. Cersaie Bologne (septembre) : LE salon mondial du carrelage et de la céramique — incontournable pour les matériaux. Architect@Work : format speed-meeting architectes/fournisseurs, efficace et ciblé. BATIMAT Paris (biennal) : construction et rénovation, plus technique que design.'
            }
          ],
          keyPoints: [
            'Milan en avril = le rendez-vous annuel n°1 du design mondial (salon + Fuorisalone dans toute la ville)',
            'Maison & Objet Paris = l\'écosystème français/européen — 2 sessions par an (janvier + septembre)',
            'Cersaie Bologne = le salon matériaux le plus important (carrelage, céramique)',
            'Les salons sont des lieux de networking autant que d\'inspiration — préparer ses rendez-vous',
            'Le Fuorisalone de Milan (off) est souvent plus inspirant que le salon officiel'
          ],
          tips: [
            'Prévoir 3 jours minimum pour Milan — 1 jour ne suffit pas. Quartiers clés : Brera (luxe), Tortona (émergent), Isola (expérimental)',
            'Photographier systématiquement les finitions et matériaux, pas seulement les meubles — c\'est le détail qui fait la différence en projet',
            'Créer un système de classement des inspirations (Pinterest boards par projet/thème) dès maintenant'
          ],
          tags: ['salons', 'Milan', 'Paris', 'Cersaie', 'Maison&Objet', 'Salone', 'networking']
        },
        {
          id: 'tendances-2025-2026',
          category: 'Tendances',
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
        },
        {
          id: 'hospitalite-residentielle',
          category: 'Tendances',
          title: 'Hospitalité Résidentielle',
          subtitle: 'L\'hôtel à la maison',
          summary: 'La tendance « hospitalité résidentielle » transpose les codes de l\'hôtellerie de luxe dans l\'habitat privé : literie premium, salle de bain d\'hôtel, minibar intégré, éclairage d\'ambiance, textiles haut de gamme. Le client veut vivre chez lui comme dans un boutique-hôtel.',
          sections: [
            {
              title: 'Les codes hôteliers transposables',
              content: 'Le lit comme pièce maîtresse : tête de lit architecturale (rembourrée, boisée ou en pierre), linge de lit premium (percale 200 fils minimum, Lin Lavé), surmatelas, oreillers multiples. L\'éclairage en couches : liseuses encastrées, variateurs partout, lumière indirecte. La salle de bain « spa » : douche pluie encastrée, double vasque, serviettes épaisses, produits en distributeurs intégrés. Le minibar / bar : niche intégrée avec éclairage LED, verres à portée de main, réfrigérateur à vin encastré.'
            },
            {
              title: 'La chambre parentale type « suite »',
              content: 'Composition idéale : lit king (180x200 minimum) — tête de lit pleine largeur (mur à mur) — liseuses encastrées — tables de nuit intégrées — dressing attenant (walk-in) — salle de bain ouverte ou communicante. Le fil conducteur : tout est pensé, intégré, sans câble apparent, sans objet posé. L\'impression de flotter dans un espace conçu pour soi. Matériaux : bois chaud (noyer, chêne fumé), pierre douce (travertin), textiles (bouclette, lin, velours).'
            },
            {
              title: 'Les détails qui font la différence',
              content: 'Prises USB intégrées dans les tables de nuit. Interrupteur centralisé (scénario « bonne nuit » : tout s\'éteint d\'un geste). Store occultant motorisé (Somfy) — le noir total comme à l\'hôtel. Chauffage au sol en salle de bain (confort pieds nus). Porte-serviettes chauffant. Miroir anti-buée. Musique intégrée (Sonos encastré). Prise rasoir dans le miroir. Patères et crochets en nombre suffisant.'
            },
            {
              title: 'Budget et positionnement',
              content: 'C\'est une tendance portée par une clientèle qui voyage beaucoup et compare son intérieur aux hôtels qu\'elle fréquente. Budget chambre + SDB « suite hôtelière » : 15 000-50 000 € selon les finitions. Les marques-références : Caravane (linge de lit), Maison Sarah Lavoine (tête de lit), Axor/Dornbracht (robinetterie), Diptyque/Aesop (accessoires SDB). C\'est un argument commercial puissant : « Vivre chez vous comme dans un 5 étoiles ».'
            }
          ],
          keyPoints: [
            'Le client compare son intérieur aux hôtels qu\'il fréquente — c\'est la nouvelle référence',
            'Tête de lit architecturale + liseuses + éclairage indirect = le triptyque de base',
            'Salle de bain « spa » : douche pluie + chauffage au sol + serviettes-éponge + produits beaux',
            'Tout intégré, rien de visible — câbles, prises, interrupteurs pensés en amont',
            'Argument commercial : « Vivre comme au boutique-hôtel »'
          ],
          tips: [
            'Proposer un « scénario lumière » avec domotique basique (3 ambiances : jour, soir, nuit) — coût modeste, effet spectaculaire',
            'Le linge de lit en lin lavé (Merci, Caravane, Harmony) est LE textile le plus photographié en chambre',
            'Un porte-serviettes chauffant en salle de bain coûte 200-500 € mais transforme le quotidien'
          ],
          tags: ['hospitalité', 'hôtel', 'chambre', 'suite', 'luxe', 'tendance']
        },
        {
          id: 'reemploi-seconde-vie',
          category: 'Tendances',
          title: 'Réemploi & Seconde Vie',
          subtitle: 'Quand la durabilité devient un style',
          summary: 'Le réemploi n\'est plus un compromis esthétique — c\'est devenu un parti pris de projet, une démarche valorisée par les magazines et les clients les plus exigeants. Utiliser un matériau de récupération, c\'est raconter une histoire.',
          sections: [
            {
              title: 'Le réemploi en architecture d\'intérieur',
              content: 'Réemploi = réutiliser des matériaux ou éléments de construction issus de la déconstruction d\'autres bâtiments. En pratique : parquet ancien de récupération, carreaux de ciment anciens, portes, ferronneries, radiateurs en fonte, poutres apparentes, briques anciennes, sanitaires vintage, luminaires d\'époque. L\'intérêt : patine irremplaçable, qualité de matériaux anciens (chêne massif, fonte, laiton), empreinte carbone quasi nulle, unicité.'
            },
            {
              title: 'Les filières de sourcing',
              content: 'Plateformes en ligne : Cycle Up, Backacia, Minéka — marketplaces de matériaux de réemploi issus de chantiers. Ressourceries et recycleries : matériaux et mobilier à prix cassés. Emmaüs, Le Bon Coin : chasse au trésor pour pièces vintage. Antiquaires et brocanteurs spécialisés : radiateurs fonte (Le Marchand de Sable), sanitaires anciens (Maison Empereur), quincaillerie (Loquets & Ferrures). Entreprises de déconstruction sélective : récupération sur mesure de matériaux dans des bâtiments voués à la démolition.'
            },
            {
              title: 'Applications concrètes',
              content: 'Parquet ancien posé dans un appartement neuf : noblesse immédiate. Carreaux de ciment récupérés en patchwork dans une salle de bain. Porte cochère transformée en tête de lit monumentale. Briques anciennes en parement de mur d\'accent. Poutres de récupération (vieux chêne) comme étagères ou structure de mezzanine. Radiateurs fonte restaurés (décapés, repeints, remis en service). Luminaires industriels récupérés (lampes d\'atelier, appliques d\'usine).'
            },
            {
              title: 'Cadre et certification',
              content: 'Le diagnostic PEMD (Produits, Équipements, Matériaux, Déchets) est obligatoire depuis 2023 pour les chantiers > 1 000 m². Label Cradle to Cradle et certification Biosourcé valorisent la démarche. RE2020 encourage le réemploi (bilan carbone favorable). Argument commercial : le réemploi est un « plus » qui séduit les clients sensibilisés — et un facteur de différenciation pour l\'architecte d\'intérieur.'
            }
          ],
          keyPoints: [
            'Le réemploi = matériaux nobles avec patine + empreinte carbone quasi nulle',
            'Plateformes Cycle Up, Backacia, Minéka = les « Le Bon Coin » du BTP',
            'Un parquet ancien de récupération a plus de caractère que n\'importe quel parquet neuf',
            'Le réemploi est un argument commercial auprès des clients sensibilisés',
            'La RE2020 et le diagnostic PEMD poussent la filière — c\'est l\'avenir'
          ],
          tips: [
            'Constituer un carnet d\'adresses de fournisseurs réemploi locaux — c\'est un avantage concurrentiel réel',
            'Photographier et archiver les trouvailles : un lot de carreaux anciens trouvé en brocante peut devenir la pièce maîtresse d\'un projet',
            'Anticiper : le réemploi nécessite du temps de sourcing — intégrer cette phase dès le planning projet'
          ],
          tags: ['réemploi', 'récupération', 'durable', 'vintage', 'matériau', 'seconde vie']
        },
        {
          id: 'architectes-francais',
          category: 'Références & Inspirations',
          title: 'Architectes d\'Intérieur Français de Référence',
          subtitle: '16 noms incontournables de la scène française contemporaine',
          summary: 'La France est probablement le pays le plus influent au monde en architecture d\'intérieur. De Joseph Dirand à Hugo Toro, la scène française couvre tous les registres — du minimalisme monumental au maximalisme joyeux. Connaître ces noms, savoir décrypter leur signature, c\'est affûter son propre regard et se nourrir des meilleurs.',
          sections: [
            {
              title: 'Les figures majeures',
              content: '<ul><li><a href="https://www.josephdirand.com" target="_blank">Joseph Dirand</a> — Le minimaliste luxueux. Pierre massive, symétrie monumentale, lumière ciselée. Intérieurs comme des temples. Ses boutiques (Balmain, Chloé, Rick Owens) et ses résidences privées sont des manifestes d\'architecture pure. Le plus influent de sa génération.</li><li><a href="https://www.pierreyovanovitch.com" target="_blank">Pierre Yovanovitch</a> — Formes organiques et couleurs audacieuses. Son mobilier (ours, oiseaux) est devenu culte. Des intérieurs joyeux, sculpturaux, profondément originaux. Designer de l\'Année Maison&Objet 2024.</li><li><a href="https://www.deniot.com" target="_blank">Jean-Louis Deniot</a> — Le classique parisien réinventé. Hôtels particuliers, appartements du Marais, résidences à New Delhi. Un sens du détail obsessionnel — moulures, dorures, art contemporain. Le « grand décorateur » au sens noble.</li><li><a href="https://india-mahdavi.com" target="_blank">India Mahdavi</a> — La couleur comme philosophie. Formes rondes, esprit pop, une joie communicative. Ses restaurants (Sketch à Londres — le pink room !) et son mobilier (Bishop stool) sont iconiques. Le contraire du minimalisme et c\'est magnifique.</li></ul>'
            },
            {
              title: 'La scène parisienne',
              content: '<ul><li><a href="https://www.maisonsarahlavoine.com" target="_blank">Sarah Lavoine</a> — Le style parisien accessible. Le « bleu Sarah » (ce bleu profond devenu sa signature) a défini l\'appartement parisien contemporain pour toute une génération. Ses boutiques font office de showroom grandeur nature.</li><li><a href="https://www.chzon.com" target="_blank">Dorothée Meilichzon</a> (Studio CHZON) — La reine des hôtels et restaurants parisiens. Mama Shelter, Hôtel Providence, Grand Pigalle, Hôtel des Grands Boulevards. Elle raconte une histoire par le décor — chaque projet est un univers narratif complet.</li><li><a href="https://www.lauragonzalez.fr" target="_blank">Laura Gonzalez</a> — L\'exubérance maîtrisée. Motifs, couleurs, Art déco revisité avec une touche d\'Orient. Décorateur de l\'Année AD 2019. La relève du « grand décor » français.</li><li><a href="https://www.charleszana.com" target="_blank">Charles Zana</a> — L\'art contemporain intégré dans l\'architecture classique. Ses intérieurs dialoguent avec des œuvres majeures — il conçoit l\'espace POUR l\'art. Des appartements-galeries spectaculaires.</li><li><a href="https://www.tristanauer.com" target="_blank">Tristan Auer</a> — Le luxe parisien dans l\'hôtellerie. Hôtel de Crillon, Les Bains. Un raffinement extrême dans les matières et les détails. Le « sur-mesure absolu ».</li></ul>'
            },
            {
              title: 'La nouvelle génération et les signatures fortes',
              content: '<ul><li><a href="https://www.hugotoro.com" target="_blank">Hugo Toro</a> — La nouvelle garde. Brutalisme doux, matières brutes (béton, acier, terre crue), formes sculpturales. À 35 ans, il bouscule les codes du luxe avec une approche radicale et sensuelle. À suivre de très près.</li><li><a href="https://www.raphaelnavot.com" target="_blank">Raphaël Navot</a> — Les matières primitives. Ses intérieurs évoquent des cavernes organiques — roche, bois brut, lumière tamisée. Le bar du Silencio à Paris est son manifeste. Une approche quasi chamanique du design.</li><li><a href="https://www.studioko.fr" target="_blank">Studio KO</a> (Karl Fournier & Olivier Marty) — Le contextualisme radical. Chaque projet est une réponse au lieu — le Musée Yves Saint Laurent à Marrakech est un chef-d\'œuvre d\'intégration. Architecture + intérieur indissociables.</li><li><a href="https://www.gillesetboissier.com" target="_blank">Gilles & Boissier</a> (Dorothée Boissier & Patrick Gilles) — Le décor théâtral. Un sens du détail poussé à l\'extrême — chaque poignée de porte, chaque joint de carrelage est pensé. Le Baccarat à New York est leur signature.</li></ul>'
            },
            {
              title: 'Les visionnaires',
              content: '<ul><li><a href="https://www.francoischampsaur.com" target="_blank">François Champsaur</a> — Le Méditerranéen contemporain. Lumière du sud, matériaux naturels (pierre, terre cuite, lin), un minimalisme solaire. Ses projets entre Marseille et Saint-Tropez définissent le luxe balnéaire français.</li><li><a href="https://www.chahanminassian.com" target="_blank">Chahan Minassian</a> — Le galeriste-décorateur. Il intègre des pièces de design rare (Prouvé, Royère, Perriand) dans des intérieurs sur-mesure. Ses clients collectionnent l\'art AVEC l\'architecture. L\'ultra haut de gamme.</li><li><a href="https://www.festenarchitecture.com" target="_blank">Festen Architecture</a> — La rénovation parisienne radicale. Béton brut + bois + lumière zénithale. Des appartements « bruts chics » qui ont défini un style copié partout. Leur Instagram est un cours d\'architecture d\'intérieur à lui seul.</li></ul>'
            }
          ],
          keyPoints: [
            'Joseph Dirand = minimalisme monumental. Pierre Yovanovitch = formes organiques joyeuses. Les deux pôles de la scène française',
            'Dorothée Meilichzon (CHZON) a réinventé l\'hôtellerie parisienne — chaque projet est un univers narratif',
            'Hugo Toro et Raphaël Navot = la nouvelle génération qui bouscule avec des matières brutes et primitives',
            'Studio KO (Musée YSL Marrakech) = la preuve qu\'architecture et architecture d\'intérieur sont indissociables',
            'Tous ces noms ont un point commun : une SIGNATURE identifiable. C\'est ce qui fait la différence entre un architecte et un grand architecte'
          ],
          tips: [
            'Suivre ces 16 comptes Instagram = un cours de design quotidien gratuit. Analyser leurs choix de matériaux, de lumière, de proportions',
            'Visiter leurs projets ouverts au public (hôtels, restaurants, boutiques) = la meilleure formation possible. Un café au Grand Pigalle de Meilichzon vaut 100 heures de Pinterest',
            'Constituer un « mood board de références » par projet en citant ces architectes — ça structure l\'intention et crédibilise le discours face au client'
          ],
          tags: ['architecte', 'Dirand', 'Yovanovitch', 'Deniot', 'Mahdavi', 'Lavoine', 'Meilichzon', 'français']
        },
        {
          id: 'architectes-internationaux',
          category: 'Références & Inspirations',
          title: 'Références Internationales',
          subtitle: '13 noms qui définissent l\'architecture d\'intérieur dans le monde',
          summary: 'Au-delà de la scène française, le monde regorge de talents qui redéfinissent l\'espace intérieur. Du wabi-sabi belge au maximalisme californien, du soft minimalism danois au luxe asiatique — chaque culture apporte sa vision. Connaître ces références, c\'est élargir son vocabulaire et enrichir sa pratique.',
          sections: [
            {
              title: 'Belgique & Pays-Bas : le berceau du minimalisme émotionnel',
              content: '<ul><li><a href="https://www.axelvervoordt.com" target="_blank">Axel Vervoordt</a> 🇧🇪 — Le maître du wabi-sabi occidental. Il a introduit l\'esthétique japonaise de l\'imperfection dans le design européen. Ses intérieurs dépouillés, patinés, quasi spirituels ont inspiré une génération entière — y compris la maison de Kim Kardashian (avec Kanye West). Antiquaire, galeriste, décorateur — un visionnaire total.</li><li><a href="https://www.vincentvanduysen.com" target="_blank">Vincent Van Duysen</a> 🇧🇪 — Le minimalisme belge dans toute sa rigueur. Matériaux nobles (pierre bleue, chêne, lin), lignes pures, lumière naturelle. Directeur artistique de Molteni&C. Ses intérieurs ont la sérénité d\'un monastère et l\'élégance d\'un palazzo. L\'architecte-designer le plus complet de sa génération.</li></ul>'
            },
            {
              title: 'Royaume-Uni : du minimalisme radical au design humaniste',
              content: '<ul><li><a href="https://www.johnpawson.com" target="_blank">John Pawson</a> 🇬🇧 — Le minimalisme absolu. Ses intérieurs (et son monastère de Nový Dvůr en Tchéquie) sont réduits à l\'essentiel — lumière, proportion, matière. Rien de plus, rien de moins. Un ascétisme qui devient somptueux.</li><li><a href="https://www.studioilse.com" target="_blank">Ilse Crawford</a> (Studio Ilse) 🇬🇧 — Le design humaniste. Elle conçoit pour le BIEN-ÊTRE des gens, pas pour les photos. Sa collaboration avec IKEA (collection SINNERLIG) a démocratisé le beau design. Son documentaire Netflix « Abstract » est un must-see.</li><li><a href="https://www.fayetoogood.com" target="_blank">Faye Toogood</a> 🇬🇧 — L\'artiste-designer. Ses meubles sont des sculptures (la chaise Roly Poly !), ses intérieurs des installations artistiques. Elle brouille la frontière entre art et design. Radicalement originale.</li></ul>'
            },
            {
              title: 'États-Unis, Italie, Espagne : les autres pôles',
              content: '<ul><li><a href="https://www.kellywearstler.com" target="_blank">Kelly Wearstler</a> 🇺🇸 — Le maximalisme californien. Textures explosives, mélanges audacieux (marbre + laiton + velours + néon), une énergie spectaculaire. Ses hôtels (Proper Hotels) et ses résidences sont des feux d\'artifice visuels. L\'anti-minimaliste par excellence — et c\'est fascinant.</li><li><a href="https://www.patriciaurquiola.com" target="_blank">Patricia Urquiola</a> 🇪🇸/🇮🇹 — Designer produit ET architecte d\'intérieur. Directrice artistique de Cassina. Elle conçoit des meubles (Bend, Fat) ET les espaces qui les accueillent. Son travail pour les hôtels (Mandarin Oriental Barcelone, Il Sereno Lac de Côme) est une masterclass de design total.</li><li><a href="https://www.lissoniassociati.com" target="_blank">Piero Lissoni</a> 🇮🇹 — L\'élégance italienne pure. Minimalisme chaleureux, proportions parfaites, matières nobles. Directeur artistique de B&B Italia, Living Divani, Boffi. Ses intérieurs ont une grâce naturelle — tout semble évident et facile (ce qui est le plus dur à atteindre).</li><li><a href="https://www.cristinacelestino.com" target="_blank">Cristina Celestino</a> 🇮🇹 — La couleur italienne joyeuse. Céramique artisanale, motifs géométriques, un héritage du design radical italien revisité avec fraîcheur. La relève féminine du design italien.</li></ul>'
            },
            {
              title: 'Scandinavie & Asie : les autres visions',
              content: '<ul><li><a href="https://normarchitects.com" target="_blank">Norm Architects</a> 🇩🇰 — Le « soft minimalism » danois. Matériaux naturels (bois clair, pierre, lin), formes douces, atmosphères enveloppantes. La version chaleureuse du minimalisme. Leur restaurant Audo (ex-Menu Space) à Copenhague est un lieu de pèlerinage design.</li><li><a href="https://www.neriandhu.com" target="_blank">Neri & Hu</a> 🇨🇳 — Le dialogue East meets West. Basés à Shanghai, ils réhabilitent des bâtiments industriels chinois avec une sensibilité occidentale — ou l\'inverse. Leur Design Republic à Shanghai est un manifeste. Parmi les architectes les plus influents d\'Asie.</li><li><a href="https://www.afso.net" target="_blank">André Fu</a> (AFSO) 🇭🇰 — Le luxe asiatique contemporain. Ses hôtels (Upper House Hong Kong, St. Regis Kuala Lumpur) redéfinissent l\'hospitalité haut de gamme avec une grâce orientale et une rigueur occidentale. L\'architecte le plus demandé d\'Asie.</li><li><a href="https://www.yabupushelberg.com" target="_blank">Yabu Pushelberg</a> 🇨🇦 — Le duo canadien de l\'hôtellerie de luxe mondiale. Four Seasons, Park Hyatt, Edition Hotels. Ils ont inventé le « lobby comme living room ». Leur capacité à s\'adapter à chaque culture tout en gardant une signature est remarquable.</li></ul>'
            }
          ],
          keyPoints: [
            'Axel Vervoordt a introduit le wabi-sabi en Occident — l\'imperfection comme beauté suprême',
            'Vincent Van Duysen + Piero Lissoni = les deux faces du minimalisme européen (belge austère vs italien chaleureux)',
            'Kelly Wearstler est la preuve que le maximalisme peut être aussi rigoureux que le minimalisme',
            'Norm Architects (Danemark) = le « soft minimalism » — la version habitable et douce du minimalisme radical',
            'Tous dirigent aussi des marques de mobilier (DA de Cassina, Molteni, B&B Italia) — architecture + design = indissociables'
          ],
          tips: [
            'Voyager pour voir ces intérieurs en vrai : un séjour au Upper House (André Fu) ou au Il Sereno (Urquiola) est un investissement professionnel — pas une dépense de vacances',
            'Analyser les lobbies d\'hôtels design dans chaque ville visitée (Park Hyatt, Edition, Ace Hotels) — c\'est un showroom gratuit d\'idées de matériaux, d\'éclairage et de mobilier',
            'Regarder le documentaire Netflix « Abstract » épisode Ilse Crawford — la meilleure introduction au design humaniste en 45 minutes'
          ],
          tags: ['international', 'Vervoordt', 'Van Duysen', 'Wearstler', 'Pawson', 'Urquiola', 'Neri&Hu', 'minimalisme']
        },
        {
          id: 'ressources-veille-design',
          category: 'Références & Inspirations',
          title: 'Ressources & Veille : Magazines, Prix, Médias',
          subtitle: 'Où s\'informer, que lire, qui suivre — la boîte à outils du veilleur',
          summary: 'Un architecte d\'intérieur qui ne fait pas de veille est un architecte d\'intérieur qui répète les mêmes recettes. Les tendances évoluent, les matériaux se renouvellent, les talents émergent. Voici les sources essentielles pour rester affûté — magazines papier, sites web, prix professionnels, podcasts et comptes Instagram.',
          sections: [
            {
              title: 'Magazines et médias de référence',
              content: '<a href="https://www.admagazine.fr" target="_blank">AD Magazine France</a> — LE magazine de référence en décoration et architecture d\'intérieur. Les reportages chez les architectes cités dans les fiches précédentes, les tendances du moment, les adresses. La version US (<a href="https://www.architecturaldigest.com" target="_blank">Architectural Digest US</a>) est plus orientée célébrités mais les projets sont spectaculaires. <a href="https://www.elledecoration.fr" target="_blank">Elle Décoration</a> — Plus accessible qu\'AD, excellent pour les tendances couleurs et mobilier grand public éclairé. <a href="https://www.theworldofinteriors.com" target="_blank">The World of Interiors</a> (UK) — Le magazine le plus exigeant. Pas de tendances éphémères, que du deep design. Les intérieurs les plus extraordinaires de la planète. La bible des connaisseurs. <a href="https://www.dezeen.com" target="_blank">Dezeen</a> — Le site web n°1 mondial de l\'architecture et du design. Gratuit, quotidien, couvre tout : projets, produits, événements, concours. À lire chaque matin avec le café. <a href="https://www.yellowtrace.com.au" target="_blank">Yellowtrace</a> — Blog australien de référence. Sélection pointue, excellent goût, articles de fond. La curatrice Dana Tomic Hughes a un œil infaillible.'
            },
            {
              title: 'Sites, blogs et newsletters',
              content: '<a href="https://www.yatzer.com" target="_blank">Yatzer</a> — Magazine en ligne gréco-international, photographies somptueuses, focus sur le croisement art/design/architecture. <a href="https://www.ignant.com" target="_blank">Ignant</a> — Magazine berlinois en ligne, esthétique minimaliste, photographie + design + voyage. Un feed Instagram devenu un média de référence. <a href="https://www.trendland.com" target="_blank">Trendland</a> — Veille tendances mode + design + art. Les croisements entre disciplines sont toujours les plus inspirants. <a href="https://www.wallpaper.com" target="_blank">Wallpaper*</a> — Le magazine UK du design global (architecture, mode, art, voyage, technologie). Leur numéro « Handmade » annuel est un événement. <a href="https://www.frameweb.com" target="_blank">Frame Magazine</a> — Néerlandais, spécialisé dans les INTÉRIEURS commerciaux (hôtels, restaurants, bureaux, retail). La référence absolue pour le design d\'espaces publics. <a href="https://www.platforme-magazine.com" target="_blank">Platforme</a> — Magazine français en ligne émergent, focus architecture d\'intérieur et jeune scène française. Newsletter : Dezeen Daily (gratuite, quotidienne) = le minimum vital. The Modern House Journal (UK, immobilier + architecture) = inspirer le client.'
            },
            {
              title: 'Prix et événements professionnels',
              content: '<a href="https://www.maison-objet.com" target="_blank">Maison&Objet</a> — LE salon professionnel français (Paris, janvier + septembre). Designer de l\'Année, Talents à la Carte, What\'s New. C\'est là que se font les tendances et que se nouent les contacts professionnels. Incontournable. <a href="https://www.salonemilano.it" target="_blank">Salone del Mobile</a> (Milan, avril) — Le plus grand salon de mobilier au monde. Le Fuorisalone (off) dans toute la ville est encore plus inspirant que le salon lui-même. Le pèlerinage annuel de tout designer. INSIDE World Festival of Interiors (dans le cadre du WAF - World Architecture Festival) — Le prix mondial d\'architecture d\'intérieur. Les projets primés = la crème mondiale. <a href="https://www.archidesignclub.com" target="_blank">ArchiDesignClub</a> — Prix français qui récompense les meilleurs projets d\'architecture et de design d\'intérieur en France. Excellent panorama de la production nationale. Dezeen Awards — Catégorie interiors. Les projets shortlistés = un panorama mondial annuel de l\'excellence. <a href="https://www.restaurantandbardesignawards.com" target="_blank">Restaurant & Bar Design Awards</a> — Le prix mondial du design de restaurants et bars. Inspiration pure pour tout ce qui touche à l\'hôtellerie-restauration.'
            },
            {
              title: 'Comptes Instagram & podcasts essentiels',
              content: 'Instagram est devenu la première source d\'inspiration visuelle pour les architectes d\'intérieur. Les comptes à suivre absolument : @josephdirand (projets et process), @pierre.yovanovitch (mobilier sculptural), @indiamahdavi (couleur pure), @studio_ko (contextualisme), @hugotoro.studio (brutalisme doux), @festenarchitecture (rénovation parisienne), @normarchitects (soft minimalism). Comptes de curation : @yellowtrace, @dezeen, @ignant, @themodernhouse (immobilier design UK), @ad_france, @frame_magazine. Comptes matériaux/détails : @detailsofarchitecture (détails constructifs), @materialdriven (innovation matériaux), @surfacemag (surfaces et textures). Podcasts : « Design Matters » de Debbie Millman (anglais — interviews de designers), « Entre nous » par Sarah Poniatowski (français — conversations décoration), « Dezeen In Depth » (anglais — enjeux du design contemporain). Livres essentiels : « The Kinfolk Home » (Nathan Williams), « Axel Vervoordt: Wabi Inspirations », « Joseph Dirand: Interior » (Rizzoli), « Living In » collection Phaidon (par pays), « Atmosphères » de Pierre Yovanovitch.'
            }
          ],
          keyPoints: [
            'Dezeen.com = lecture quotidienne obligatoire — le site web n°1 mondial du design et de l\'architecture',
            'Maison&Objet (Paris) + Salone del Mobile (Milan) = les 2 événements pro incontournables de l\'année',
            'The World of Interiors (UK) = le magazine le plus exigeant — pas de tendances, que de l\'excellence intemporelle',
            'Instagram est la première source d\'inspiration — suivre les 15 comptes essentiels vaut tous les magazines',
            'Les prix (INSIDE, ArchiDesignClub, Dezeen Awards) = un panorama annuel sélectionné des meilleurs projets'
          ],
          tips: [
            'Créer un compte Instagram « veille pro » séparé du perso — suivre UNIQUEMENT les comptes design. Le feed devient un mood board permanent et gratuit',
            'S\'abonner à la newsletter Dezeen Daily = 5 minutes par jour pour être au courant de TOUT ce qui se passe dans le monde du design. C\'est gratuit et c\'est le minimum vital',
            'Aller au Fuorisalone de Milan au moins une fois dans sa carrière — ce n\'est pas un salon, c\'est une immersion totale dans le design pendant une semaine. La ville entière devient un showroom'
          ],
          tags: ['veille', 'magazine', 'AD', 'Dezeen', 'Instagram', 'Maison&Objet', 'Salone', 'podcast', 'inspiration']
        },
        {
          id: 'lieux-a-visiter',
          category: 'Références & Inspirations',
          title: 'Lieux d\'Architecture d\'Intérieur à Visiter',
          subtitle: 'Hôtels, restaurants, boutiques, musées — classés par ville avec liens Maps',
          summary: 'Rien ne remplace l\'expérience physique d\'un espace conçu par un grand architecte d\'intérieur. Voici une sélection de lieux ouverts au public — hôtels, restaurants, boutiques, musées — classés par ville. Chaque lieu est une leçon vivante de matériaux, de lumière, de proportions et de détails. Prenez un café, observez, photographiez, analysez.',
          sections: [
            {
              title: '🇫🇷 Paris',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Restaurant+Girafe+Paris" target="_blank">Restaurant Girafe</a> — Joseph Dirand. Face à la Tour Eiffel, intérieur Art déco monumental, marbre, laiton, miroirs fumés. Le grand style Dirand.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Hotel+des+Grands+Boulevards+Paris" target="_blank">Hôtel des Grands Boulevards</a> — Dorothée Meilichzon (CHZON). Décor XVIIIe revisité, terrasse sur les toits, chaque chambre raconte une histoire.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Grand+Pigalle+Hotel+Paris" target="_blank">Grand Pigalle Hôtel</a> — Dorothée Meilichzon. Le boutique-hôtel parisien par excellence — bar à cocktails, vinyles, ambiance Pigalle chic.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Le+Silencio+Paris" target="_blank">Le Silencio</a> — Raphaël Navot (rénovation) / David Lynch (original). Club privé ouvert au public certains soirs. Caverne organique, matières primitives.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Hotel+National+des+Arts+et+Metiers+Paris" target="_blank">Hôtel National des Arts et Métiers</a> — Raphaël Navot. Lobby spectaculaire — pierre brute, bois massif, lumière tamisée.</li><li><a href="https://www.google.com/maps/search/?api=1&query=The+Hoxton+Paris" target="_blank">The Hoxton Paris</a> — Humbert & Poyet. Cour intérieure, restaurant, lobby comme un salon. Le cool parisien incarné.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Hotel+Brach+Paris" target="_blank">Hôtel Brach</a> — Philippe Starck. Brutalisme luxueux dans le 16e — piscine sur le toit, rooftop avec vue Tour Eiffel.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Boutique+Celine+Avenue+Montaigne+Paris" target="_blank">Boutique Celine Montaigne</a> — Hedi Slimane. Minimalisme radical, marbre, bois clair, proportions parfaites.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Aesop+Le+Marais+Paris" target="_blank">Boutique Aesop Le Marais</a> — Studio KO. Chaque boutique Aesop est conçue par un architecte différent — celle du Marais est signée Studio KO.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Galerie+Chahan+Minassian+Paris" target="_blank">Galerie Chahan Minassian</a> — Chahan Minassian. Galerie + showroom — mobilier Prouvé, Royère, Perriand dans un écrin architectural.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Boutique+Sarah+Lavoine+Saint-Germain+Paris" target="_blank">Boutique Sarah Lavoine Saint-Germain</a> — Sarah Lavoine. Son showroom grandeur nature — le « bleu Sarah », les mélanges de matières.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Fondation+Louis+Vuitton+Paris" target="_blank">Fondation Louis Vuitton</a> — Frank Gehry (architecture) + scénographie intérieure remarquable. Le bâtiment lui-même est un chef-d\'œuvre.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Musee+des+Arts+Decoratifs+Paris" target="_blank">Musée des Arts Décoratifs</a> — Collections permanentes d\'arts décoratifs du Moyen Âge à nos jours. Le temple de la discipline.</li></ul>'
            },
            {
              title: '🇫🇷 Sud de la France & Lyon',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Hotel+Les+Roches+Rouges+Saint-Raphael" target="_blank">Hôtel Les Roches Rouges, Saint-Raphaël</a> — Festen Architecture. Brutalisme méditerranéen face à la mer — béton, pierre rouge, pins parasols. Un manifeste architectural.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Hotel+C2+Marseille" target="_blank">Hôtel C2, Marseille</a> — Hôtel design dans un hôtel particulier du XIXe. Intérieurs contemporains radicaux dans un écrin classique.</li><li><a href="https://www.google.com/maps/search/?api=1&query=InterContinental+Lyon+Hotel-Dieu" target="_blank">InterContinental Lyon — Hôtel-Dieu</a> — Jean-Philippe Nuel. Réhabilitation spectaculaire d\'un monument du XVIIe. Grand dôme, verrières, mélange historique/contemporain.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Villa+Noailles+Hyeres" target="_blank">Villa Noailles, Hyères</a> — Robert Mallet-Stevens (1923). Villa moderniste visitable — expositions de design, mode, architecture. Le berceau du modernisme français.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Cite+Radieuse+Le+Corbusier+Marseille" target="_blank">Le Corbusier — Cité Radieuse, Marseille</a> — Unité d\'habitation + hôtel (Hôtel Le Corbusier) + MAMO rooftop. Visiter un appartement témoin = comprendre le Modulor.</li></ul>'
            },
            {
              title: '🇮🇹 Milan & Italie',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Fondazione+Prada+Milan" target="_blank">Fondazione Prada, Milan</a> — OMA / Rem Koolhaas. Complexe art contemporain dans une ancienne distillerie. Architecture + scénographie d\'exposition magistrale. Le bar Luce (conçu par Wes Anderson) est un bijou.</li><li><a href="https://www.google.com/maps/search/?api=1&query=10+Corso+Como+Milan" target="_blank">10 Corso Como, Milan</a> — Kris Ruhs / Carla Sozzani. Concept store mythique — galerie, librairie, café, boutique. L\'invention du concept store.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Room+Mate+Giulia+Milan" target="_blank">Roommate Hotel Giulia, Milan</a> — Patricia Urquiola. Couleurs, motifs, carrelages artisanaux. L\'Italie joyeuse et design à prix accessible.</li><li><a href="https://www.google.com/maps/search/?api=1&query=B%26B+Italia+Showroom+Milan" target="_blank">Showroom B&B Italia, Milan</a> — Antonio Citterio. Le temple du mobilier italien. Entrée libre — toucher les canapés, s\'asseoir, comprendre les finitions.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Il+Sereno+Lago+di+Como" target="_blank">Il Sereno, Lac de Côme</a> — Patricia Urquiola. Le plus bel hôtel du lac de Côme. Chaque détail est dessiné — du mobilier aux poignées de porte. Masterclass de design total.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Triennale+di+Milano" target="_blank">Triennale di Milano</a> — Musée du design italien. Expositions temporaires exceptionnelles. Pendant le Salone, c\'est un passage obligé.</li></ul>'
            },
            {
              title: '🇬🇧 Londres',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Sketch+London+Conduit+Street" target="_blank">Sketch — The Gallery, Londres</a> — India Mahdavi. La Pink Room iconique — 200 couverts dans un écrin rose millénial. L\'espace le plus Instagrammé au monde.</li><li><a href="https://www.google.com/maps/search/?api=1&query=The+Ned+London" target="_blank">The Ned, Londres</a> — Soho House & Membership Collective. Ancienne banque Midland transformée en hôtel — colonnes monumentales, plafonds peints, piscine dans le vault.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Design+Museum+London+Kensington" target="_blank">Design Museum, Londres</a> — John Pawson (rénovation intérieure). Le musée du design par excellence. Expositions temporaires de niveau mondial.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Victoria+and+Albert+Museum+London" target="_blank">V&A Museum, Londres</a> — Galeries d\'arts décoratifs, mobilier, textile, céramique. Les British Galleries = une leçon d\'histoire du design sur 5 siècles.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Ace+Hotel+Shoreditch+London" target="_blank">Ace Hotel Shoreditch, Londres</a> — Universal Design Studio. Le lobby comme co-working — le concept qui a défini l\'hôtellerie milléniale.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Serpentine+Pavilion+Hyde+Park+London" target="_blank">Serpentine Pavilion, Hyde Park</a> — Chaque été, un architecte différent (Gehry, Koolhaas, Hadid, Diébédo Francis Kéré). Structure temporaire à visiter gratuitement.</li></ul>'
            },
            {
              title: '🇧🇪 Belgique & 🇩🇰 Copenhague',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Kanaal+Axel+Vervoordt+Wijnegem+Antwerp" target="_blank">Kanaal, Anvers</a> — Axel Vervoordt. Son QG — ancienne malterie reconvertie en galeries, showrooms et appartements. Le wabi-sabi à l\'échelle d\'un quartier. Visite indispensable.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Vincent+Van+Duysen+Showroom+Antwerp" target="_blank">Showroom Vincent Van Duysen, Anvers</a> — Son studio et showroom dans un bâtiment historique. Le minimalisme belge dans son essence.</li><li><a href="https://www.google.com/maps/search/?api=1&query=The+Audo+Copenhagen" target="_blank">Audo, Copenhague</a> — Norm Architects / Menu. Hôtel + restaurant + showroom + co-working dans un ancien entrepôt. Le « soft minimalism » danois incarné. LE lieu de pèlerinage design à Copenhague.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Noma+Restaurant+Copenhagen" target="_blank">Noma, Copenhague</a> — BIG / Bjarke Ingels (architecture). Le meilleur restaurant du monde dans un ancien entrepôt militaire. L\'espace intérieur est aussi radical que la cuisine.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Louisiana+Museum+of+Modern+Art+Humlebaek" target="_blank">Louisiana Museum, Humlebæk (Copenhague)</a> — Musée d\'art moderne intégré dans un paysage côtier. Architecture + nature + art = l\'un des plus beaux musées du monde.</li></ul>'
            },
            {
              title: '🇺🇸 New York & 🇯🇵 Tokyo',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=Baccarat+Hotel+New+York" target="_blank">Baccarat Hotel, New York</a> — Gilles & Boissier. Cristal, velours, or — le luxe français exporté à Manhattan. Le bar est ouvert au public.</li><li><a href="https://www.google.com/maps/search/?api=1&query=The+Noguchi+Museum+New+York" target="_blank">The Noguchi Museum, New York</a> — Isamu Noguchi. Atelier-musée du sculpteur-designer. Jardin de sculptures + intérieurs bruts. La poésie des matières.</li><li><a href="https://www.google.com/maps/search/?api=1&query=1+Hotel+Brooklyn+Bridge+New+York" target="_blank">1 Hotel Brooklyn Bridge, New York</a> — Design biophilique poussé à l\'extrême — bois de récupération, plantes, matériaux bruts. La référence du green luxury.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Ace+Hotel+New+York+NoMad" target="_blank">Ace Hotel New York (NoMad)</a> — Roman and Williams. Le lobby-bibliothèque qui a lancé la tendance « lobby comme salon ». Ouvert à tous.</li><li><a href="https://www.google.com/maps/search/?api=1&query=21_21+Design+Sight+Tokyo" target="_blank">21_21 Design Sight, Tokyo</a> — Tadao Ando. Musée du design par Issey Miyake + Tadao Ando. Architecture souterraine en béton brut + expositions de design japonais.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Aman+Tokyo+Otemachi" target="_blank">Aman Tokyo</a> — Kerry Hill Architects. Le wabi-sabi ultime — papier washi, bois sombre, proportions zen. Le plus bel hôtel de Tokyo.</li><li><a href="https://www.google.com/maps/search/?api=1&query=teamLab+Borderless+Tokyo" target="_blank">teamLab Borderless, Tokyo</a> — teamLab. Art numérique immersif — les murs, sols et plafonds disparaissent dans la lumière. L\'expérience spatiale la plus radicale qui existe.</li></ul>'
            },
            {
              title: '🇵🇹 Lisbonne & 🇲🇦 Marrakech & autres',
              content: '<ul><li><a href="https://www.google.com/maps/search/?api=1&query=MAAT+Museu+Arte+Arquitetura+Tecnologia+Lisbon" target="_blank">MAAT, Lisbonne</a> — Amanda Levete (AL_A). Musée d\'art et de technologie au bord du Tage. Toiture praticable en céramique blanche. Architecture spectaculaire + expositions.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Santiago+de+Alfama+Hotel+Lisbon" target="_blank">Hôtel Santiago de Alfama, Lisbonne</a> — Dans le quartier historique d\'Alfama. Réhabilitation d\'un palais — pierre, azulejos, minimalisme portugais.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Musee+Yves+Saint+Laurent+Marrakech" target="_blank">Musée Yves Saint Laurent, Marrakech</a> — Studio KO. Chef-d\'œuvre d\'intégration — briques de terre, dentelle de béton, lumière marocaine. Le projet signature de Studio KO.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Royal+Mansour+Marrakech" target="_blank">Royal Mansour, Marrakech</a> — Artisanat marocain d\'exception (zellige, tadelakt, bois sculpté) dans une architecture palatiale. Le summum du savoir-faire artisanal.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Vitra+Campus+Weil+am+Rhein" target="_blank">Vitra Campus, Weil am Rhein 🇩🇪</a> — Gehry, Zaha Hadid, Tadao Ando, Herzog & de Meuron, SANAA — tous sur un seul site. Le musée du design Vitra + showroom + pavillons d\'architectes. LE pèlerinage architectural européen.</li><li><a href="https://www.google.com/maps/search/?api=1&query=Therme+Vals+Peter+Zumthor+Switzerland" target="_blank">Therme Vals, Suisse 🇨🇭</a> — Peter Zumthor. Pierre locale, lumière filtrée, eau. L\'architecture sensorielle la plus pure qui existe. Réserver longtemps à l\'avance.</li></ul>'
            }
          ],
          keyPoints: [
            'Visiter un lieu conçu par un grand architecte = la meilleure formation qui existe — mieux que 100h de Pinterest',
            'Les hôtels design sont les meilleurs showrooms — le lobby est ouvert à tous, même sans y séjourner',
            'Paris concentre une densité exceptionnelle de lieux visitables — Meilichzon, Navot, Dirand, Starck en quelques stations de métro',
            'Le Fuorisalone de Milan + Fondazione Prada + Triennale = 3 jours qui valent un semestre de formation',
            'Kanaal (Vervoordt, Anvers) et Audo (Norm, Copenhague) sont deux pèlerinages design incontournables'
          ],
          tips: [
            'Prendre un café au bar d\'un grand hôtel design (Brach, The Hoxton, Baccarat) = accéder à l\'intérieur pour le prix d\'un espresso. TOUJOURS entrer, JAMAIS être intimidé',
            'Photographier les DÉTAILS : poignées, plinthes, joints de carrelage, luminaires encastrés, switch plates. C\'est là que se cache la vraie excellence — pas dans la vue d\'ensemble',
            'Créer un carnet de voyage design (Notion, Google Keep, carnet papier) avec photos + notes + croquis de chaque lieu visité. Ce carnet deviendra votre bibliothèque de références personnelle'
          ],
          tags: ['visite', 'hôtel', 'musée', 'restaurant', 'Paris', 'Milan', 'Londres', 'Tokyo', 'New York', 'Maps']
        }
      ]
    },

    // ====================================
    // 8. VOCABULAIRE PRO
    // ====================================
    {
      id: 'vocabulaire',
      name: 'Vocabulaire Pro',
      icon: '✎',
      color: '#7B8E6E',
      description: 'Les termes essentiels pour parler comme un pro — en présentation client et en réunion technique avec les entreprises.',
      fiches: [
        // --- PRÉSENTATION CLIENT ---
        {
          id: 'vocab-ambiance-style',
          category: 'Présentation Client',
          title: 'Vocabulaire d\'Ambiance & Style',
          subtitle: 'Les mots pour décrire un univers',
          summary: 'Le vocabulaire qui vous permet de nommer une ambiance, de qualifier un style et de communiquer votre vision au client de façon précise et séduisante.',
          sections: [
            {
              title: 'Qualifier une ambiance',
              content: '<ul><li>Épuré / Dépouillé : minimum d\'éléments, tout est essentiel.</li><li>Chaleureux : qui dégage une sensation d\'accueil (matériaux naturels, lumière dorée).</li><li>Feutré : doux, intime, absorbant (velours, moquette, lumière tamisée).</li><li>Aérien : impression de légèreté, de transparence.</li><li>Cosy : confortable et enveloppant, à petite échelle.</li><li>Brut : matériaux laissés dans leur état naturel (béton, bois non traité).</li><li>Minéral : dominante pierre, béton, teintes grises.</li><li>Organique : formes et matériaux inspirés de la nature.</li><li>Monacal : simplicité extrême, presque austère, d\'inspiration monastique.</li><li>Bohème : éclectique, coloré, accumulateur, voyageur.</li></ul>'
            },
            {
              title: 'Décrire les proportions et l\'espace',
              content: '<ul><li>Généreux : grand volume, espaces amples.</li><li>Intimiste : petit espace traité comme un cocon.</li><li>Fluide : circulation naturelle entre les espaces, sans obstacle.</li><li>Cloisonné : espaces bien séparés, chaque pièce a sa fonction.</li><li>Décloisonné / Open space : suppression des séparations pour ouvrir l\'espace.</li><li>Double hauteur : espace sur deux niveaux sans plancher intermédiaire.</li><li>Cathédrale (plafond) : très haute hauteur sous plafond.</li><li>Mansardé : sous les toits, avec rampants.</li><li>En enfilade : pièces alignées qui se traversent.</li><li>Traversant : logement qui donne sur deux façades opposées.</li></ul>'
            },
            {
              title: 'Parler des couleurs au client',
              content: '<ul><li>Teinte sourde : couleur atténuée, voilée, élégante (vs. vive).</li><li>Ton sur ton : camaïeu de nuances proches (ex. beige + sable + crème).</li><li>Accent de couleur : touche de couleur forte dans un ensemble neutre (un coussin jaune dans un salon gris).</li><li>Palette chromatique : l\'ensemble des couleurs choisies pour le projet.</li><li>Neutre chaud : blanc cassé, beige, grège, sable.</li><li>Neutre froid : gris, blanc bleuté, taupe.</li><li>Terreux : couleurs de la terre (terracotta, ocre, brun).</li><li>Poudrée : couleur douce, comme passée au filtre (rose poudré, bleu poudré).</li></ul>'
            },
            {
              title: 'Exprimer une intention de design',
              content: '<ul><li>Signature : l\'élément distinctif d\'un espace (« la cuisine est la signature de ce projet »).</li><li>Pièce maîtresse / Statement piece : le meuble ou l\'objet qui ancre tout l\'espace.</li><li>Point focal : l\'endroit où le regard est attiré en premier (cheminée, œuvre d\'art, vue).</li><li>Dialogue (entre matériaux) : quand deux matériaux se répondent harmonieusement (bois + métal).</li><li>Respiration : espace vide volontaire qui donne de l\'air à la composition.</li><li>Rythme : répétition d\'un élément (les arches, les niches, les luminaires alignés).</li><li>Contraste : opposition volontaire (lisse/rugueux, clair/foncé, ancien/moderne).</li></ul>'
            }
          ],
          keyPoints: [
            '« Épuré » est plus séduisant que « vide » — le choix des mots change la perception',
            'Un client ne comprend pas « zénithale » — dites « lumière qui vient du toit »',
            'Toujours associer un mot technique à une image ou un exemple concret',
            'Le vocabulaire d\'ambiance est votre outil de vente n°1',
            'Adapter son vocabulaire au client : luxe (« feutré, raffiné ») vs. jeune (« clean, cozy »)'
          ],
          tips: [
            'Préparer 3-4 mots clés qui définissent l\'ambiance du projet avant chaque présentation',
            'Créer un « mood lexique » par projet : les 10 mots qui le résument',
            'S\'entraîner à décrire des images d\'espaces à voix haute — ça se travaille'
          ],
          tags: ['vocabulaire', 'client', 'ambiance', 'style', 'présentation', 'communication']
        },
        {
          id: 'vocab-materiaux-client',
          category: 'Présentation Client',
          title: 'Parler Matériaux au Client',
          subtitle: 'Traduire la technique en émotion',
          summary: 'Le client ne veut pas un cours de géologie. Il veut savoir ce qu\'il va RESSENTIR. Voici comment parler des matériaux de façon accessible et désirable.',
          sections: [
            {
              title: 'Pierre naturelle — le vocabulaire client',
              content: '<ul><li>Veiné : la pierre a des lignes naturelles (comme le marbre de Carrare).</li><li>Moucheté : petits points dans la masse (comme le granit).</li><li>Flammé / Brossé / Adouci / Poli : les finitions, du plus rugueux au plus brillant.</li><li>Pour le client : « un toucher satiné »</li><li>(adouci) ou « un effet miroir »</li><li>(poli).</li><li>Patiné : qui a vieilli naturellement et en est plus beau.</li><li>Monolithique : en un seul bloc, impression de solidité.</li></ul>'
            },
            {
              title: 'Bois — le vocabulaire client',
              content: '<ul><li>Veinage : le dessin naturel du bois (serré = chêne, spectaculaire = noyer).</li><li>Essence : le type de bois (pas « espèce » ni « sorte »).</li><li>Massif : bois plein, pas reconstitué.</li><li>Contrecollé : couche noble sur support — PAS du faux (c\'est ce qui se pose le plus en parquet).</li><li>Brut / Huilé / Vernis / Ciré : les finitions, du plus naturel au plus protégé.</li><li>Chaleureux, vivant, noble : les mots que le client veut entendre pour le bois.</li></ul>'
            },
            {
              title: 'Métal — le vocabulaire client',
              content: '<ul><li>Patiné : le métal qui a pris une teinte avec le temps (le laiton qui verdit).</li><li>Brossé : rayures fines qui adoucissent le reflet.</li><li>Satiné : entre mat et brillant.</li><li>Forgé : travaillé à la main par un artisan.</li><li>Thermolaqué : peint au four (pour l\'acier, les cadres).</li><li>Doré à chaud / à froid : finition dorée sur un autre métal — préciser si c\'est du vrai laiton ou un traitement de surface.</li></ul>'
            },
            {
              title: 'Textiles & revêtements — le vocabulaire client',
              content: '<ul><li>Tombé : la façon dont un tissu retombe (un rideau avec « un beau tombé »).</li><li>Main : le toucher du tissu quand on le prend en main.</li><li>Drapé : quand le tissu forme des plis souples et élégants.</li><li>Texturé : qui a du relief au toucher.</li><li>Nubuck / Daim : cuir poncé doux (jamais « du faux cuir » → dire « similicuir » ou « cuir végan »).</li><li>Mat / Satiné / Brillant : les trois niveaux de reflet pour les peintures et enduits.</li></ul>'
            }
          ],
          keyPoints: [
            'Le client retient les sensations (toucher, chaleur) plus que les termes techniques',
            'Toujours apporter un échantillon — un mot + un toucher = conviction',
            '« Contrecollé » n\'est PAS du faux bois — expliquer que c\'est le standard pro actuel',
            'Éviter le jargon brut : pas « ragréage » mais « on reprend le sol pour qu\'il soit parfaitement plan »',
            'Le mot « naturel » est le plus puissant en présentation client'
          ],
          tips: [
            'Créer une « matériauthèque de poche » avec 10-15 échantillons à apporter en RDV client',
            'Raconter l\'histoire du matériau : « ce marbre vient de Carrare, les mêmes carrières que Michel-Ange »',
            'Utiliser des comparaisons : « un toucher aussi doux que du cachemire » pour le velours'
          ],
          tags: ['vocabulaire', 'matériaux', 'client', 'présentation', 'communication', 'sensations']
        },
        {
          id: 'vocab-presenter-projet',
          category: 'Présentation Client',
          title: 'Pitcher son Projet',
          subtitle: 'Les formules qui convainquent',
          summary: 'Un projet bien présenté se vend deux fois mieux. Voici les structures de phrase, les tournures et le vocabulaire qui transforment une présentation en expérience.',
          sections: [
            {
              title: 'Ouvrir la présentation',
              content: '<ul><li>« L\'idée directrice de ce projet, c\'est… » — toujours commencer par le concept.</li><li>« On a voulu créer un espace qui raconte votre histoire / qui vous ressemble. »</li><li>« L\'intention, c\'est de… »</li><li>(pas « on a fait », mais « l\'intention c\'est de » — ça élève le propos).</li><li>« Imaginez que vous rentrez chez vous le soir… » — embarquer le client dans une narration.</li><li>Ne JAMAIS commencer par « alors là on a mis du parquet et là on a mis de la peinture grise ».</li></ul>'
            },
            {
              title: 'Décrire les choix',
              content: '<ul><li>« On a choisi le [matériau] pour sa [qualité] et parce qu\'il dialogue avec [autre élément]. »</li><li>« Cette teinte apporte de la [sérénité/chaleur/profondeur] sans alourdir l\'espace. »</li><li>« Le contraste entre le [X brut] et le [Y doux] crée une tension élégante. »</li><li>« C\'est un clin d\'œil à [référence architecturale/votre goût pour...]. »</li><li>« On a volontairement laissé cet espace respirer pour que le regard se pose sur [point focal]. »</li></ul>'
            },
            {
              title: 'Répondre aux objections',
              content: '<ul><li>« Je comprends votre inquiétude, et c\'est justement pour ça que… »</li><li>(valider puis redirectionner).</li><li>« Le budget est optimisé parce que… »</li><li>(pas « c\'est pas cher » mais « le budget est maîtrisé »).</li><li>« C\'est un investissement dans la durée — ce matériau vieillit bien et prend de la valeur. »</li><li>« On peut ajuster ce point sans compromettre l\'ensemble — voici une alternative… »</li><li>« D\'expérience, les clients qui ont fait ce choix ne le regrettent jamais. »</li></ul>'
            },
            {
              title: 'Conclure avec impact',
              content: '<ul><li>« En résumé, ce projet c\'est [3 mots clés]. »</li><li>« On vous propose un espace [adjectif], [adjectif], qui [bénéfice émotionnel]. »</li><li>« La prochaine étape, c\'est… » — toujours finir par l\'action suivante.</li><li>« Qu\'est-ce qui vous parle le plus dans ce qu\'on vient de voir ? » — ouvrir le dialogue, ne pas attendre un oui/non.</li><li>Ne jamais finir par « voilà… donc… euh… vous en pensez quoi ? »</li></ul>'
            }
          ],
          keyPoints: [
            'Un projet se pitch en 3 mots clés maximum (« minéral, lumineux, enveloppant »)',
            'Raconter une HISTOIRE, pas une liste de matériaux',
            'Valider les objections avant de répondre — le client se sent écouté',
            '« Investissement » > « dépense ». « Maîtrisé » > « pas cher ». « Ajuster » > « changer ».',
            'Toujours finir par la prochaine étape concrète'
          ],
          tips: [
            'Répéter sa présentation à voix haute avant le RDV — même 5 minutes dans la voiture',
            'Préparer 3 formules d\'objection type et les avoir en tête',
            'Filmer ses présentations (avec accord) pour progresser'
          ],
          tags: ['vocabulaire', 'pitch', 'présentation', 'client', 'communication', 'vente']
        },
        // --- TECHNIQUE CHANTIER ---
        {
          id: 'vocab-gros-oeuvre',
          category: 'Technique Chantier',
          title: 'Vocabulaire Gros Œuvre',
          subtitle: 'Parler structure avec les entreprises',
          summary: 'Les termes que maçons, charpentiers et entrepreneurs généraux utilisent. Les comprendre évite les malentendus et vous crédibilise sur le chantier.',
          sections: [
            {
              title: 'Structure & murs',
              content: '<ul><li>Mur porteur : mur qui soutient la structure — on ne le touche PAS sans ingénieur structure.</li><li>Mur de refend : mur porteur intérieur.</li><li>Cloison : paroi non porteuse, peut être déplacée/supprimée.</li><li>Cloison alvéolaire : cloison légère creuse (pas de charge, pas d\'accroche lourde).</li><li>Placo / BA13 : plaques de plâtre de 13mm, la cloison standard.</li><li>Ossature métallique : les rails et montants qui supportent le placo.</li><li>Doublage : isolation + placo posé contre un mur existant.</li><li>IPN / HEA / HEB : poutrelles métalliques pour remplacer un mur porteur (l\'ingénieur calcule la section).</li></ul>'
            },
            {
              title: 'Sols & niveaux',
              content: '<ul><li>Dalle : la structure porteuse du sol (béton).</li><li>Chape : couche de mortier coulée sur la dalle pour la mettre de niveau.</li><li>Ragréage : enduit autolissant fin (3-10mm) pour rattraper les petites imperfections avant la pose du sol.</li><li>Réservation : trou ou espace laissé dans la dalle/chape pour un passage technique (canalisation, gaine).</li><li>Seuil : barre de transition entre deux sols ou sous une porte.</li><li>Arase / Arasement : mettre à niveau, aplanir.</li><li>Sous-couche : matériau posé entre la chape et le revêtement final (isolation phonique, film pare-vapeur).</li></ul>'
            },
            {
              title: 'Ouvertures & menuiserie structure',
              content: '<ul><li>Linteau : poutre au-dessus d\'une ouverture (porte, fenêtre) qui reporte les charges.</li><li>Tableau : les faces latérales d\'une ouverture dans un mur.</li><li>Appui de fenêtre : la partie basse extérieure d\'une fenêtre (pente pour l\'eau).</li><li>Embrasure : l\'épaisseur du mur visible au niveau de l\'ouverture.</li><li>Dormant : le cadre fixe d\'une fenêtre ou porte scellé dans le mur.</li><li>Ouvrant : la partie mobile (le vantail).</li><li>Huisserie / Bâti : le cadre métallique ou bois scellé dans le mur pour recevoir une porte.</li><li>Feuillure : l\'entaille dans le bâti où vient se loger la porte.</li></ul>'
            },
            {
              title: 'Termes de chantier courants',
              content: '<ul><li>Démolition sélective : ne casser que ce qui doit l\'être (vs.</li><li>« tout péter »).</li><li>Étaiement : soutien temporaire d\'une structure pendant les travaux.</li><li>Échafaudage : structure temporaire pour travailler en hauteur.</li><li>Benne : conteneur pour évacuer les gravats.</li><li>Gravats : déchets de démolition.</li><li>Curage : enlever tout ce qui est non structurel (cloisons, sols, plafonds).</li><li>Reprise en sous-œuvre : renforcer des fondations existantes (travail lourd et cher).</li></ul>'
            }
          ],
          keyPoints: [
            'MUR PORTEUR = danger — toujours faire vérifier par un ingénieur structure avant toute ouverture',
            'BA13 ≠ mur solide — ne supporte pas plus de 30kg/point d\'accroche (avec chevilles spéciales)',
            'Ragréage et chape sont DIFFÉRENTS — le ragréage est une finition, la chape une structure',
            'Le linteau est vital — pas de linteau = le mur s\'effondre au-dessus de l\'ouverture',
            'Connaître ces termes vous crédibilise face aux entrepreneurs'
          ],
          tips: [
            'Demander le rapport de l\'ingénieur structure AVANT de signer les devis si vous ouvrez des murs porteurs',
            'Prendre une photo de chaque mur porteur identifié et le marquer sur les plans en rouge',
            'Le curage complet coûte 30-60€/m² — le budgeter correctement'
          ],
          tags: ['vocabulaire', 'technique', 'gros œuvre', 'structure', 'chantier', 'maçonnerie']
        },
        {
          id: 'vocab-second-oeuvre',
          category: 'Technique Chantier',
          title: 'Vocabulaire Second Œuvre',
          subtitle: 'Plomberie, électricité, finitions',
          summary: 'Les termes techniques de la plomberie, de l\'électricité et des finitions que vous entendrez quotidiennement sur un chantier.',
          sections: [
            {
              title: 'Plomberie & sanitaire',
              content: '<ul><li>Alimentation : les tuyaux qui AMÈNENT l\'eau (pression).</li><li>Évacuation : les tuyaux qui ÉVACUENT l\'eau (gravité).</li><li>PER : tuyau flexible en polyéthylène (standard actuel pour l\'alimentation).</li><li>Cuivre : tuyau rigide, plus cher mais plus durable (ancien standard).</li><li>Siphon : le coude en S/P sous l\'évier qui empêche les odeurs de remonter.</li><li>Nourrice / Collecteur : le point de distribution où arrivent toutes les alimentations (comme un tableau électrique pour l\'eau).</li><li>Chute : la canalisation verticale d\'évacuation de l\'immeuble.</li><li>Colonne montante : l\'alimentation verticale de l\'immeuble.</li><li>Vanne d\'arrêt : le robinet qui coupe l\'eau.</li><li>Mitigeur : robinet avec une seule manette (chaud/froid).</li><li>Mélangeur : robinet avec deux manettes séparées (chaud et froid).</li></ul>'
            },
            {
              title: 'Électricité',
              content: '<ul><li>Tableau électrique : le « cerveau » de l\'installation, avec les disjoncteurs.</li><li>Disjoncteur : l\'interrupteur de sécurité qui coupe le courant en cas de surcharge.</li><li>Différentiel : le disjoncteur qui détecte les fuites de courant (protection des personnes).</li><li>Circuit : une ligne électrique dédiée (ex: un circuit pour les prises cuisine, un pour l\'éclairage).</li><li>Phase / Neutre / Terre : les 3 fils (marron ou rouge / bleu / vert-jaune).</li><li>Gaine ICTA : le tube flexible qui protège les fils dans les murs.</li><li>Encastré : les fils passent DANS le mur (standard en rénovation).</li><li>Apparent : les fils passent dans des goulottes visibles (moins cher, moins esthétique).</li><li>Appareillage : l\'ensemble prises + interrupteurs + sorties de câbles (Legrand, Schneider, Meljac pour le luxe).</li></ul>'
            },
            {
              title: 'Menuiserie intérieure',
              content: '<ul><li>Bâti / Huisserie : le cadre de la porte scellé dans le mur.</li><li>Bloc-porte : ensemble prêt à poser (bâti + ouvrant + quincaillerie).</li><li>Vantail : le panneau mobile de la porte.</li><li>Paumelle : la charnière de porte (invisible = plus esthétique).</li><li>Serrure à encastrer : intégrée dans l\'épaisseur de la porte.</li><li>Galandage : porte coulissante qui rentre DANS le mur (nécessite une épaisseur de cloison doublée).</li><li>Coulissant en applique : porte coulissante devant le mur (type grange).</li><li>Doucine / Moulure : profil décoratif (plafond, cadre de porte).</li><li>Gorge lumineuse : moulure creuse qui cache un éclairage LED indirect.</li></ul>'
            },
            {
              title: 'Revêtements & finitions',
              content: '<ul><li>Calepinage : le dessin de la pose (comment les carreaux sont disposés, les joints, les coupes).</li><li>Joints de dilatation : espaces prévus pour que le matériau travaille (bois, carrelage grande surface).</li><li>Pose collée : le revêtement est collé directement sur le support.</li><li>Pose flottante : le revêtement est posé libre, sans colle (parquet clipsé).</li><li>Pose scellée : le carrelage est posé dans un lit de mortier (ancien, plus solide).</li><li>Barbotine : la colle à carrelage liquide.</li><li>Primaire d\'accrochage : produit appliqué avant la colle/l\'enduit pour assurer l\'adhérence.</li><li>Sous-couche : la première couche de peinture (fixe le support).</li><li>Lasure : protection transparente pour le bois (laisse voir le veinage).</li><li>Vitrificateur : vernis de protection pour le parquet.</li></ul>'
            }
          ],
          keyPoints: [
            'PER = standard actuel pour la plomberie (flexible, pas cher, facile à poser)',
            'Toujours demander un plan du tableau électrique à jour après les travaux',
            'Galandage = esthétique mais nécessite de doubler l\'épaisseur de cloison — à prévoir en amont',
            'Le calepinage est le secret d\'un beau carrelage — ne pas le laisser au carreleur seul',
            'Gorge lumineuse = le détail qui élève un espace — budget faible, effet maximal'
          ],
          tips: [
            'Demander l\'appareillage électrique (Legrand Céliane, Schneider Odace) — c\'est un détail que le client voit tous les jours',
            'Toujours vérifier le calepinage sur plan AVANT la pose — les coupes disgracieuses se prévoient',
            'La gorge lumineuse se prévoit au moment du placo, pas après — anticiper'
          ],
          tags: ['vocabulaire', 'technique', 'plomberie', 'électricité', 'menuiserie', 'finitions']
        },
        {
          id: 'vocab-devis-dce',
          category: 'Technique Chantier',
          title: 'Lire un Devis & un DCE',
          subtitle: 'Décrypter les documents techniques',
          summary: 'Un devis d\'entreprise ou un DCE (Dossier de Consultation des Entreprises) contient un jargon spécifique. Savoir le lire, c\'est savoir négocier et contrôler.',
          sections: [
            {
              title: 'Structure d\'un devis travaux',
              content: '<ul><li>Lot : une catégorie de travaux (Lot 1 = démolition, Lot 2 = maçonnerie, etc.).</li><li>Poste : un élément à l\'intérieur d\'un lot (« Poste 2.3 : ouverture mur porteur avec IPN »).</li><li>Unité : comment c\'est chiffré — ml (mètre linéaire), m² (mètre carré), U (unité/pièce), Ens.</li><li>(ensemble forfaitaire).</li><li>Fourniture et pose (F&P) : le prix inclut le matériau ET la main d\'œuvre.</li><li>Fourniture seule (FS) : juste le matériau sans la pose.</li><li>Plus-value (PV) : surcoût par rapport à la prestation de base.</li><li>Moins-value (MV) : économie si on retire quelque chose.</li><li>Provision : somme estimée pour un poste qu\'on ne peut pas encore chiffrer exactement.</li></ul>'
            },
            {
              title: 'Termes financiers des devis',
              content: '<ul><li>HT / TTC : hors taxes / toutes taxes comprises.</li><li>TVA 10% : taux réduit pour la rénovation de logements de plus de 2 ans.</li><li>TVA 20% : taux plein (neuf, ou si le logement a moins de 2 ans).</li><li>Acompte : premier paiement à la commande.</li><li>Situation : facture intermédiaire correspondant à l\'avancement des travaux.</li><li>Retenue de garantie : 5% du montant retenu pendant 1 an après réception (protection contre les malfaçons).</li><li>Avenant : modification du contrat initial (travaux supplémentaires ou changements).</li></ul>'
            },
            {
              title: 'Le CCTP (Cahier des Clauses Techniques Particulières)',
              content: '<ul><li>Le document roi du DCE.</li><li>Il décrit EXACTEMENT ce qui doit être fait, matériau par matériau, technique par technique.</li><li>« Ou équivalent » : la mention qui permet au prestataire de proposer un matériau similaire — ATTENTION, toujours valider l\'équivalent.</li><li>« NF » / « CE » : les normes que le matériau doit respecter.</li><li>« DTU »</li><li>(Document Technique Unifié) : les règles de l\'art de mise en œuvre — la référence en cas de litige.</li></ul>'
            },
            {
              title: 'Analyser et comparer les devis',
              content: '<ul><li>Vérifier que les devis sont comparables (mêmes prestations, mêmes matériaux).</li><li>Attention au « Ensemble forfaitaire » qui cache souvent un manque de détail.</li><li>Demander le détail main d\'œuvre vs fourniture.</li><li>Vérifier les conditions de paiement et le planning.</li><li>Regarder les exclusions (ce qui N\'EST PAS inclus).</li><li>Le devis le moins cher n\'est pas toujours le meilleur — méfiance si l\'écart est > 30% avec les autres.</li></ul>'
            }
          ],
          keyPoints: [
            'TVA 10% en rénovation = économie importante — toujours vérifier l\'éligibilité',
            '« Ensemble forfaitaire » = demander le détail systématiquement',
            'La retenue de garantie de 5% est votre levier en cas de malfaçon',
            'Le CCTP est le document qui vous protège — le rédiger avec soin',
            'Comparer des devis = comparer des prestations identiques, pas des prix'
          ],
          tips: [
            'Créer un tableau comparatif poste par poste quand vous analysez 3 devis',
            'Surligner en jaune tout ce qui dit « ensemble forfaitaire » et demander le détail',
            'Le « ou équivalent » DOIT être validé par vous avant pose'
          ],
          tags: ['vocabulaire', 'devis', 'DCE', 'CCTP', 'technique', 'budget', 'chantier']
        },
        // --- MATÉRIAUX TECHNIQUE ---
        {
          id: 'vocab-finitions-surfaces',
          category: 'Matériaux & Finitions',
          title: 'Les Finitions de Surface',
          subtitle: 'Poli, brossé, mat, satiné…',
          summary: 'Les finitions changent radicalement l\'aspect et le toucher d\'un même matériau. Connaître le vocabulaire exact permet de spécifier précisément ce que vous voulez.',
          sections: [
            {
              title: 'Finitions de la pierre',
              content: '<ul><li>Poli : surface lisse et brillante, effet miroir (marbre classique).</li><li>Adouci : lisse mais sans brillance, toucher soyeux (le plus courant en intérieur).</li><li>Brossé : surface légèrement rugueuse, griffée, toucher texturé.</li><li>Flammé : surface éclatée par flamme puis brossée — très antidérapant (sol extérieur).</li><li>Bouchardé : surface piquetée au marteau — aspect rustique.</li><li>Clivé / Éclaté : cassure naturelle de la pierre, surface irrégulière (parement).</li><li>Sablé : surface mate et douce obtenue par projection de sable.</li><li>Vieilli : traitement qui simule l\'usure du temps — bords émoussés, surface patinée.</li></ul>'
            },
            {
              title: 'Finitions du bois',
              content: '<ul><li>Brut : aucun traitement, le bois nu (doit être traité avant usage).</li><li>Huilé : imprégnation d\'huile qui nourrit le bois et le protège — aspect naturel, toucher doux.</li><li>Ciré : protection par cire naturelle — aspect satiné, entretien régulier.</li><li>Vernis / Vitrifié : couche de protection filmogène — résistant mais aspect « plastique » si mal fait.</li><li>Lasuré : teinte + protection en une couche, laisse voir le veinage.</li><li>Teinté : la couleur est modifiée mais le veinage reste visible.</li><li>Cérusé : les veines du bois sont blanchies — effet blanchi/vieilli.</li><li>Brossé : les fibres tendres sont retirées, les veines dures ressortent — effet texturé.</li></ul>'
            },
            {
              title: 'Finitions du métal',
              content: '<ul><li>Poli miroir : réflexion totale, comme un miroir (laiton, inox).</li><li>Brossé : rayures parallèles fines, reflet atténué (inox brossé = le plus courant).</li><li>Satiné : entre poli et mat, reflet doux.</li><li>Mat : aucun reflet (acier noir mat, thermolaqué mat).</li><li>Patiné : oxydation naturelle ou accélérée (le vert-de-gris du cuivre).</li><li>Bruni : traitement chimique qui noircit le métal (acier bruni).</li><li>Thermolaqué : peinture cuite au four — résistante et disponible en toutes couleurs RAL.</li><li>Micro-billes : sablage fin qui donne un aspect granuleux uniforme.</li></ul>'
            },
            {
              title: 'Finitions peinture & enduit',
              content: '<ul><li>Mat : aucun reflet, cache les défauts, ambiance feutrée.</li><li>Velours : très légèrement satiné, toucher doux (le meilleur compromis intérieur).</li><li>Satiné : léger reflet, lessivable, idéal pièces humides (cuisine, SDB).</li><li>Brillant / Laqué : reflet fort, effet profond, amplifie les défauts (réservé aux surfaces parfaites).</li><li>Effet nuagé : application volontairement irrégulière (stuc, tadelakt).</li><li>Badigeon : peinture à la chaux traditionnelle, aspect vivant et mat profond.</li><li>Stuqué : enduit poli qui imite le marbre (stuc vénitien).</li><li>Taloché : finition à la taloche — texture fine et régulière.</li></ul>'
            }
          ],
          keyPoints: [
            'Adouci = le meilleur compromis pour la pierre en intérieur (pas glissant, pas brillant)',
            'Huilé = la finition la plus naturelle pour le bois (mais entretien annuel)',
            'Brossé = la finition la plus safe pour le métal (cache les traces de doigts)',
            'Velours = la peinture idéale pour les murs intérieurs (mat + lessivable)',
            'Toujours spécifier la finition dans le CCTP — « marbre poli » ≠ « marbre adouci »'
          ],
          tips: [
            'Demander des échantillons de CHAQUE finition avant de choisir — la même pierre en poli et en brossé est méconnaissable',
            'Attention au thermolaquage : demander la teinte RAL exacte et un échantillon sur métal',
            'Le mat est magnifique mais se salit vite — préférer le velours pour les zones de passage'
          ],
          tags: ['vocabulaire', 'finitions', 'matériaux', 'technique', 'spécification', 'CCTP']
        },
        {
          id: 'vocab-mise-en-oeuvre',
          category: 'Matériaux & Finitions',
          title: 'Termes de Mise en Œuvre',
          subtitle: 'Comment c\'est posé / fabriqué',
          summary: 'Comprendre les techniques de pose et de fabrication pour spécifier correctement et contrôler la qualité sur chantier.',
          sections: [
            {
              title: 'Pose de sol',
              content: '<ul><li>Pose droite : carreaux alignés en lignes droites (classique).</li><li>Pose en diagonale : carreaux à 45° — donne une impression de grandeur.</li><li>Pose décalée / À joints décalés : chaque rangée est décalée d\'un demi-carreau (type parquet).</li><li>Pose en chevron (à la française) : lames en V — le motif le plus élégant pour le parquet.</li><li>Pose en point de Hongrie : similaire au chevron mais lames coupées à 45° (les deux bouts sont parallèles).</li><li>Pose bâton rompu : lames à angle droit alternées.</li><li>Pose en cabochon : petits carrés posés en diagonale aux intersections des grands carreaux.</li><li>Joint mince (2mm) : aspect moderne.</li><li>Joint large (5-10mm) : aspect traditionnel ou terrasse.</li></ul>'
            },
            {
              title: 'Pose murale & plafond',
              content: '<ul><li>Parement : revêtement mural décoratif fin (pierre, brique).</li><li>Soubassement : revêtement sur la partie basse du mur (80-120cm).</li><li>Lambris : revêtement en lames de bois (horizontal ou vertical).</li><li>Tasseaux : lattes de bois rapportées (déco tendance en claustra intérieur).</li><li>Claustra : paroi ajourée qui sépare sans cloisonner.</li><li>Faux-plafond : plafond rapporté sous le vrai plafond (cache les gaines, intègre les spots).</li><li>Plenum : l\'espace entre le vrai plafond et le faux-plafond.</li><li>Staff : plâtre renforcé de fibres pour les moulures et corniches.</li></ul>'
            },
            {
              title: 'Menuiserie & agencement',
              content: '<ul><li>Affleurant : deux surfaces au même niveau (porte affleurante au mur = porte invisible).</li><li>Filant : qui court sur toute la longueur sans interruption (un plan de travail filant).</li><li>À fleur : même niveau exact (une prise à fleur du mur).</li><li>Sur-mesure : fabriqué aux dimensions exactes du lieu.</li><li>Standard : dimensions industrielles (60cm, 90cm pour les meubles de cuisine).</li><li>Placage : fine couche de bois noble collée sur un panneau (pas du « faux bois »).</li><li>MDF : panneau de fibres de bois reconstitué (support courant pour la laque).</li><li>Stratifié : surface plastique imitant le bois/la pierre (Formica, Egger).</li><li>HPL : stratifié haute pression, très résistant (plan de travail, crédence).</li></ul>'
            },
            {
              title: 'Éclairage — termes techniques',
              content: '<ul><li>Encastré : le luminaire est intégré dans le plafond/mur (spot encastré).</li><li>Saillie : le luminaire dépasse de la surface.</li><li>Indirect : la lumière est dirigée vers le plafond/mur et se réfléchit (gorge lumineuse).</li><li>Direct : la lumière est dirigée vers la zone à éclairer (spot, downlight).</li><li>Température de couleur : 2700K = blanc chaud (intime), 3000K = blanc neutre chaud (le plus courant), 4000K = blanc froid (bureau, cuisine).</li><li>IRC (Indice de Rendu des Couleurs) : >90 = excellent, les couleurs sont fidèles.</li><li>Variateur / Dimmer : permet de régler l\'intensité — INDISPENSABLE pour créer des ambiances.</li></ul>'
            }
          ],
          keyPoints: [
            'Chevron ≠ Point de Hongrie — la coupe des lames est différente (90° vs 45°)',
            '2700K = la température de lumière pour les espaces de vie (plus chaud = plus intime)',
            'Affleurant / à fleur = le détail invisible qui fait un projet haut de gamme',
            'HPL > stratifié standard pour les plans de travail (résiste à la chaleur et aux rayures)',
            'Toujours spécifier le sens de pose (horizontal/vertical) pour le lambris et le carrelage'
          ],
          tips: [
            'Faire un plan de calepinage pour tout carrelage >30x30 — le montrer au carreleur AVANT',
            'Prévoir des variateurs partout (même si le client ne les demande pas) — coût +5%, impact +100%',
            'IRC > 90 obligatoire dans les dressings et salles de bain — sinon les couleurs sont fausses'
          ],
          tags: ['vocabulaire', 'pose', 'mise en œuvre', 'technique', 'éclairage', 'menuiserie']
        },
        // --- ADMINISTRATIF & NORMES ---
        {
          id: 'vocab-normes-reglementation',
          category: 'Références & Outils',
          title: 'Vocabulaire Réglementaire',
          subtitle: 'PLU, ERP, DTU, PMR…',
          summary: 'Les acronymes et termes réglementaires que vous devez connaître pour être en conformité et comprendre ce que les administrations vous demandent.',
          sections: [
            {
              title: 'Urbanisme & autorisations',
              content: '<ul><li>PLU (Plan Local d\'Urbanisme) : les règles de construction de la commune (hauteurs, matériaux, couleurs).</li><li>DP (Déclaration Préalable) : autorisation légère pour travaux extérieurs mineurs (fenêtre, ravalement).</li><li>PC (Permis de Construire) : autorisation pour modifications importantes de structure ou extension >20m².</li><li>ABF (Architecte des Bâtiments de France) : doit valider les travaux en zone protégée/classée.</li><li>MH (Monument Historique) : bâtiment classé — contraintes extrêmes de rénovation.</li><li>SHON/SHAB (Surface Habitable) : la surface réglementaire (exclut les murs, cloisons, cages d\'escalier).</li></ul>'
            },
            {
              title: 'Sécurité & ERP',
              content: '<ul><li>ERP (Établissement Recevant du Public) : restaurant, boutique, hôtel — normes spécifiques.</li><li>Classement feu M0-M4 : M0 = incombustible, M4 = facilement inflammable.</li><li>Euroclasses A1 à F : le nouveau classement feu européen (A1 = incombustible).</li><li>Porte coupe-feu : porte résistante au feu pendant 30, 60 ou 120 minutes (CF30, CF60).</li><li>Désenfumage : système d\'évacuation des fumées (obligatoire en ERP).</li><li>Balisage de sécurité : éclairage de secours + signalétique de sortie.</li><li>BAES : Bloc Autonome d\'Éclairage de Sécurité (le petit bloc vert « SORTIE »).</li></ul>'
            },
            {
              title: 'Accessibilité PMR',
              content: '<ul><li>PMR (Personne à Mobilité Réduite) : pas seulement les fauteuils roulants — aussi les personnes âgées, poussettes, béquilles.</li><li>Largeur de passage : 80cm minimum pour une porte, 90cm recommandé, 120cm pour un couloir PMR.</li><li>Aire de rotation : cercle de 150cm de diamètre pour un fauteuil roulant.</li><li>Barre d\'appui : dans les WC et douches PMR, à 70-80cm du sol.</li><li>Douche à l\'italienne : douche de plain-pied, sans ressaut (obligatoire dans les logements neufs depuis 2021).</li><li>Contraste visuel : les obstacles et changements de niveau doivent être visibles (personnes malvoyantes).</li></ul>'
            },
            {
              title: 'Normes techniques courantes',
              content: '<ul><li>DTU (Document Technique Unifié) : les « règles de l\'art » — si un artisan ne respecte pas le DTU, il est en faute.</li><li>NF (Norme Française) : certification de conformité.</li><li>CE (Conformité Européenne) : marquage obligatoire pour commercialiser en Europe.</li><li>RT 2012 / RE 2020 : réglementation thermique/environnementale des bâtiments neufs.</li><li>DPE (Diagnostic de Performance Énergétique) : le classement A-G de la consommation énergétique.</li><li>Amiante : matériau dangereux présent dans les bâtiments avant 1997 — diagnostic OBLIGATOIRE avant travaux.</li></ul>'
            }
          ],
          keyPoints: [
            'En zone ABF, le moindre changement extérieur (fenêtre, couleur) doit être validé',
            'ERP = normes feu + accessibilité + sécurité — le triptyque obligatoire',
            'Le DTU est la référence en cas de litige technique — le citer dans les CCTP',
            'Amiante avant 1997 = diagnostic OBLIGATOIRE avant le moindre coup de masse',
            'PMR : obligatoire dans les ERP et les logements neufs, recommandé partout'
          ],
          tips: [
            'Vérifier le PLU de la commune AVANT de promettre quoi que ce soit au client',
            'En ERP, se faire accompagner par un bureau de contrôle (Apave, Bureau Veritas)',
            'Garder un aide-mémoire des normes PMR (dimensions clés) dans son carnet'
          ],
          tags: ['vocabulaire', 'normes', 'réglementation', 'PLU', 'ERP', 'PMR', 'DTU']
        },
        // --- LEXIQUE RAPIDE ---
        {
          id: 'vocab-lexique-express',
          category: 'Références & Outils',
          title: 'Lexique Express A→Z',
          subtitle: '100+ termes en un coup d\'œil',
          summary: 'Le glossaire de poche de l\'architecte d\'intérieur. Les termes les plus fréquents classés alphabétiquement, avec leur définition en une phrase.',
          sections: [
            {
              title: 'A → D',
              content: '<ul><li>Adouci : finition pierre — lisse sans brillance.</li><li>Affleurant : au même niveau que la surface adjacente.</li><li>Allège : partie du mur sous la fenêtre.</li><li>Aplomb : verticalité parfaite.</li><li>Arête : angle vif entre deux surfaces.</li><li>Badigeon : peinture à la chaux traditionnelle.</li><li>Baguette de finition : profilé qui cache un joint ou une coupe.</li><li>Banquette : assise intégrée, souvent maçonnée.</li><li>Calepinage : plan de pose des carreaux/lames.</li><li>Claustra : paroi ajourée.</li><li>Corniche : moulure en saillie en haut du mur.</li><li>Credence : revêtement mural entre plan de travail et meubles hauts.</li><li>Cimaise : moulure à mi-hauteur de mur OU rail d\'accrochage pour tableaux.</li><li>Dais : structure au-dessus d\'un lit (baldaquin).</li><li>Desserte : petite table ou plan de service.</li></ul>'
            },
            {
              title: 'E → M',
              content: '<ul><li>Embrasure : épaisseur du mur visible à l\'ouverture.</li><li>En applique : fixé SUR la surface (vs. encastré).</li><li>Entrevous : espace entre deux solives de plancher.</li><li>Faïence : carreau de céramique émaillé pour les murs.</li><li>Feuillure : entaille dans un cadre pour recevoir une vitre/porte.</li><li>Filant : continu sur toute la longueur.</li><li>Galandage : porte qui rentre dans le mur.</li><li>Gorge (lumineuse) : creux qui cache un éclairage indirect.</li><li>Habillage : revêtement qui couvre une structure technique.</li><li>Imposte : partie vitrée au-dessus d\'une porte.</li><li>Joue : face latérale d\'un meuble.</li><li>Lambourde : support en bois pour un plancher ou une terrasse.</li><li>Lé : bande de papier peint ou de tissu.</li><li>Linteau : poutre au-dessus d\'une ouverture.</li><li>Main courante : barre d\'appui le long d\'un escalier.</li><li>Moulure : profil décoratif en relief.</li></ul>'
            },
            {
              title: 'N → S',
              content: '<ul><li>Niche : renfoncement dans un mur (décoratif ou fonctionnel).</li><li>Nez de marche : bord avant de la marche d\'escalier.</li><li>Ossature : structure portante (bois ou métal).</li><li>Parclose : petite baguette qui maintient un vitrage.</li><li>Plinthe : bande en bas du mur qui protège la jonction mur/sol.</li><li>Quart de rond : moulure convexe d\'angle.</li><li>Ragréage : enduit autolissant pour aplanir un sol.</li><li>Refend : mur porteur intérieur.</li><li>Retour : partie perpendiculaire d\'un aménagement (le retour d\'un plan de travail).</li><li>Revêtement : tout matériau qui couvre une surface.</li><li>Rive : bord d\'un élément.</li><li>Seuil : barre de transition entre deux sols.</li><li>Soubassement : partie basse d\'un mur, traitée différemment.</li><li>Sous-face : surface visible du dessous (d\'un escalier, d\'un balcon).</li><li>Staff : plâtre renforcé de fibres.</li></ul>'
            },
            {
              title: 'T → Z',
              content: '<ul><li>Tablette : plan horizontal fixé au mur (sous une fenêtre, dans une niche).</li><li>Tasseau : latte de bois (structure ou décor).</li><li>Traverse : élément horizontal d\'un cadre ou d\'une structure.</li><li>Trémie : ouverture dans un plancher (pour un escalier, un ascenseur).</li><li>Vantail : panneau mobile d\'une porte ou fenêtre.</li><li>Vasistas : petite fenêtre ouvrante dans un toit ou un mur.</li><li>Veinage : dessin naturel du bois.</li><li>Vitrage : panneau de verre.</li><li>Volige : planche fine (support de toiture ou de parement).</li><li>Voûte : arc de maçonnerie formant plafond.</li><li>Zénithale (lumière) : lumière qui vient du plafond/toit (puits de lumière, verrière).</li><li>Zellige : carreau de céramique artisanal marocain émaillé.</li></ul>'
            }
          ],
          keyPoints: [
            'Ce lexique est un aide-mémoire rapide — chaque terme est développé dans les autres fiches',
            'Imprimer ce glossaire et l\'avoir dans son sac pour les chantiers',
            'Un architecte d\'intérieur qui utilise le bon terme inspire confiance',
            'Attention aux faux-amis : crédence ≠ desserte, imposte ≠ linteau',
            'Le vocabulaire s\'apprend en contexte — sur le chantier, pas dans un livre'
          ],
          tips: [
            'Annoter ce lexique avec vos propres notes et exemples rencontrés en projet',
            'Quand un artisan utilise un terme inconnu, le noter et le chercher immédiatement',
            'Créer des flashcards (Anki) avec les 50 termes les plus utiles'
          ],
          tags: ['vocabulaire', 'lexique', 'glossaire', 'termes', 'définitions', 'mémo']
        },
        // --- ÉCRITURE & STORYTELLING ---
        {
          id: 'vocab-phrases-espace-lumiere',
          category: 'Écriture & Storytelling',
          title: 'Décrire un Projet — Espace, Lumière & Matière',
          subtitle: 'Le phrasier du journaliste design (vol. 1)',
          summary: 'Des phrases prêtes à l\'emploi, à la manière d\'AD, Elle Décoration ou Dezeen, pour raconter un projet d\'architecture d\'intérieur dans un portfolio, un post Instagram, un dossier de presse ou une présentation client.',
          sections: [
            {
              title: 'Décrire les volumes et l\'espace',
              content: '<ul><li>L\'espace se déploie avec une générosité mesurée, chaque mètre carré ayant été pensé comme une respiration.</li><li>Les volumes s\'enchaînent dans une fluidité presque chorégraphique, du séjour à la cuisine, sans rupture mais sans monotonie.</li><li>La double hauteur confère à l\'ensemble une verticalité presque sacrée — on lève les yeux, on respire.</li><li>En supprimant les cloisons, le projet a libéré un volume inattendu : la lumière circule, le regard file jusqu\'au fond de l\'appartement.</li><li>L\'enfilade classique a été conservée mais réinterprétée : les portes affleurantes disparaissent dans les murs, les seuils s\'effacent.</li><li>Ici, le petit espace n\'est pas subi mais sublimé — chaque recoin devient niche, chaque angle mort devient rangement invisible.</li><li>Le plan en L organise la vie en deux séquences : l\'espace social, ouvert et lumineux, et le cocon intime des chambres, en retrait.</li><li>La circulation n\'est jamais un couloir — c\'est une promenade architecturale jalonnée de cadrages et de découvertes.</li><li>Le plafond mansardé, loin d\'être une contrainte, est devenu la signature du lieu : ses pentes habillées de bois dessinent une géométrie chaleureuse.</li><li>L\'espace dialogue avec la ville : les grandes ouvertures encadrent le paysage urbain comme autant de tableaux vivants.</li></ul>'
            },
            {
              title: 'Raconter la lumière',
              content: '<ul><li>La lumière naturelle est le premier matériau de ce projet — elle entre par le sud, ricoche sur le béton ciré et baigne l\'espace d\'une clarté douce toute la journée.</li><li>Le jeu d\'ombre et de lumière, orchestré par les persiennes en lames de chêne, dessine sur les murs un motif mouvant qui change d\'heure en heure.</li><li>À la tombée du jour, l\'éclairage indirect prend le relais : les gorges lumineuses découpent les volumes, les appliques créent des halos intimes.</li><li>La verrière zénithale inonde le cœur de l\'appartement — cette lumière venue du ciel transforme un ancien couloir sombre en patio intérieur.</li><li>Les stores en lin filtrent la lumière crue et la transforment en une nappe laiteuse, presque nordique — le bruit de la ville s\'efface avec elle.</li><li>Le choix du 2700K pour l\'ensemble des luminaires enveloppe chaque pièce d\'un halo doré, comme un coucher de soleil permanent.</li><li>L\'architecte a traité la lumière comme un matériau liquide : elle coule le long des murs enduits à la chaux, se réfléchit sur le terrazzo, s\'absorbe dans le velours des assises.</li><li>Pas un seul spot en plein feux : ici, la lumière est toujours indirecte, réfléchie, apprivoisée — on la devine plus qu\'on ne la voit.</li><li>Le miroir en laiton brossé, posé face à la fenêtre, ne décore pas — il double la lumière et agrandit le salon d\'une profondeur fictive.</li><li>La transition jour/nuit est pensée comme une mise en scène : variateurs sur chaque circuit, trois ambiances préprogrammées, du matin énergisant au soir cocooning.</li></ul>'
            },
            {
              title: 'Parler des matériaux et textures',
              content: '<ul><li>Le dialogue entre le chêne massif et l\'acier bruni donne le ton : chaleur et rigueur, nature et industrie, douceur et caractère.</li><li>Le terrazzo granito, coulé sur place avec des éclats de marbre rose, transforme le sol en œuvre d\'art — chaque pièce a son propre dessin.</li><li>La pierre de Bourgogne, posée en opus incertum, apporte au sol une noblesse tranquille que le temps ne fera qu\'embellir.</li><li>Les murs enduits au tadelakt capturent la lumière dans leur surface satinée et imperceptiblement ondulée — comme une peau vivante.</li><li>Le laiton vieilli des poignées et des appliques ponctue l\'espace de reflets dorés, créant un fil conducteur discret à travers tout l\'appartement.</li><li>Le béton ciré au sol se fait oublier par sa discrétion, mais c\'est lui qui unifie les espaces et leur donne cette continuité fluide.</li><li>Ici, les matériaux ne se juxtaposent pas — ils conversent : le lin brut des rideaux répond à la rugosité de la brique, le cuir pleine fleur fait écho au noyer.</li><li>Le zellige posé à la main dans la salle de bains, avec ses irrégularités assumées, rappelle que le luxe n\'est pas dans la perfection mais dans l\'authenticité.</li><li>Le marbre Calacatta, réservé à la seule crédence de cuisine, crée un moment de luxe inattendu dans un projet par ailleurs volontairement sobre.</li><li>Le bois a été laissé brut, simplement huilé — on voit les nœuds, on sent le grain sous les doigts, on accepte que la matière vive et vieillisse.</li></ul>'
            },
            {
              title: 'Évoquer les détails et la finition',
              content: '<ul><li>Chaque détail trahit l\'exigence : les plinthes affleurantes au mur, les interrupteurs Meljac en laiton, les joints de carrelage teintés dans la masse.</li><li>Les portes toute hauteur, sans huisserie visible, disparaissent dans les murs — quand elles sont fermées, on ne soupçonne pas leur existence.</li><li>Le meuble-vasque, dessiné sur mesure, flotte au-dessus du sol en terrazzo : pas un tuyau visible, pas un câble apparent.</li><li>La cuisine est un exercice de précision millimétrique : plan de travail filant, façades sans poignée, électroménager totalement intégré.</li><li>Le soin apporté aux jonctions est remarquable — chaque rencontre bois/métal, chaque angle, chaque retour est traité comme un détail d\'orfèvrerie.</li><li>L\'escalier en acier plié, sans limon apparent, semble léviter dans l\'espace — ses marches en chêne massif réchauffent ce geste structurel.</li><li>Les rangements ne se voient pas, et c\'est précisément le projet : tout disparaît derrière des façades lisses, le désordre n\'a aucune place où se montrer.</li><li>La niche creusée dans l\'épaisseur du mur, éclairée par un ruban LED en retrait, transforme un simple recoin en écrin pour une pièce de collection.</li></ul>'
            }
          ],
          keyPoints: [
            'Un bon texte de projet ne DÉCRIT pas — il RACONTE une expérience spatiale',
            'Toujours commencer par l\'émotion ou l\'intention, jamais par les matériaux',
            'Les verbes d\'action enrichissent : « la lumière ricoche », « l\'espace se déploie », « le regard file »',
            'Les oppositions créent du rythme : chaleur/rigueur, brut/raffiné, visible/invisible',
            'Un paragraphe = une idée. Jamais plus de 3 phrases pour décrire un choix'
          ],
          tips: [
            'Lire les descriptions de projets dans AD France, Elle Décoration, Architectural Digest — noter les tournures qui vous marquent',
            'Écrire le texte AVANT de choisir les photos — ça oblige à penser le récit du projet',
            'Tester vos textes à voix haute : si ça sonne faux à l\'oreille, c\'est que c\'est trop forcé'
          ],
          tags: ['écriture', 'storytelling', 'portfolio', 'description', 'lumière', 'matériaux', 'espace']
        },
        {
          id: 'vocab-phrases-ambiance-style',
          category: 'Écriture & Storytelling',
          title: 'Décrire un Projet — Ambiance, Style & Parti Pris',
          subtitle: 'Le phrasier du journaliste design (vol. 2)',
          summary: 'La suite du phrasier : les formules pour décrire l\'atmosphère d\'un lieu, raconter un parti pris stylistique, évoquer le dialogue ancien/contemporain, et conclure un texte de projet avec impact.',
          sections: [
            {
              title: 'Décrire l\'ambiance et l\'atmosphère',
              content: '<ul><li>On pousse la porte et le temps ralentit : les teintes sourdes, le lin froissé, la lumière tamisée composent un silence visuel apaisant.</li><li>L\'atmosphère oscille entre hôtel particulier et loft new-yorkais — cette tension assumée entre classicisme et décontraction fait toute la personnalité du lieu.</li><li>Le projet cultive un minimalisme chaleureux, loin de l\'austérité : chaque surface est douce, chaque matériau est tactile, chaque lumière est enveloppante.</li><li>Ici, le luxe ne se montre pas — il se ressent. C\'est dans le silence des portes qui se ferment, dans le toucher du cuir, dans l\'odeur du bois huilé.</li><li>L\'ambiance est résolument japonisante sans jamais tomber dans la citation : on retrouve l\'esprit wabi-sabi dans les matériaux bruts et les imperfections assumées.</li><li>Le lieu respire une élégance désinvolte, comme un costume parfaitement coupé porté avec des baskets — rien n\'est forcé, tout est juste.</li><li>La palette chromatique — blanc cassé, grège, bois blond — installe une sérénité nordique que viennent ponctuer des accents de terracotta.</li><li>C\'est un intérieur qui se vit pieds nus : le parquet chêne huilé, les tapis en laine bouclée, les coussins de sol en lin — tout invite au contact.</li><li>L\'espace a la mémoire des lieux qu\'on aime sans pouvoir les nommer : un café à Kyoto, une maison de vacances en Grèce, un atelier d\'artiste à Marrakech.</li><li>Le projet fait le pari du temps long : des matériaux qui patinent, des meubles qui se transmettent, un design qui refuse la tendance pour embrasser la permanence.</li></ul>'
            },
            {
              title: 'Raconter un parti pris stylistique',
              content: '<ul><li>Le parti pris est radical et assumé : tout en noir, du sol au plafond, avec pour seule respiration la lumière naturelle et le grain du bois.</li><li>L\'architecte a fait le choix du monochrome — un camaïeu de blancs qui, loin d\'être monotone, révèle une infinité de textures et de nuances.</li><li>Le projet joue la carte du contraste maximal : béton brut au sol, velours sur les assises, laiton aux murs — chaque matériau s\'affirme et dialogue.</li><li>Pas de concession au décoratif : ici, chaque objet a une fonction, chaque meuble est dessiné sur mesure, rien n\'est là par hasard.</li><li>Le style se cherche du côté du brutalisme adouci : les structures sont laissées apparentes mais réchauffées par le bois, le cuir et la laine.</li><li>C\'est un intérieur de collectionneur : les pièces vintage chinées — fauteuil Prouvé, lampe Serge Mouille, céramique Jouve — racontent une passion plus qu\'un style.</li><li>Le maximalisme est assumé jusqu\'au bout : papier peint panoramique, lustre monumental, couleurs saturées — on entre dans un décor, presque un théâtre.</li><li>L\'approche est celle du « less but better » de Dieter Rams : peu d\'objets, mais chacun est irréprochable en proportion, en matériau, en finition.</li><li>Le projet revendique une esthétique de chantier sublimée : murs en enduit brut, tuyauterie apparente en cuivre, sol en béton lissé — la beauté de l\'inachevé.</li><li>La signature de ce projet tient en un mot : contraste. Ancien et moderne, brut et précieux, sombre et lumineux — chaque pièce est une tension résolue.</li></ul>'
            },
            {
              title: 'Le dialogue ancien / contemporain',
              content: '<ul><li>Les moulures XVIIIe ont été conservées et repeintes dans un gris anthracite qui les réveille — elles ne sont plus décoratives, elles sont graphiques.</li><li>Le parquet Versailles d\'origine, poncé et huilé mat, accueille sans conflit un îlot de cuisine en inox brossé et béton — deux siècles cohabitent au centimètre près.</li><li>La cheminée en marbre, intacte, est encadrée par deux bibliothèques en acier noir : l\'ancien encadré par le contemporain, un dialogue respectueux mais sans nostalgie.</li><li>Le projet refuse la restauration muséale : les éléments d\'époque sont conservés mais intégrés dans un langage résolument actuel — on habite le présent dans un écrin du passé.</li><li>Le faux-plafond a été retiré pour révéler les poutres apparentes et la hauteur d\'origine — 3,40 m retrouvés qui transforment un deux-pièces en cathédrale.</li><li>L\'intervention contemporaine ne se cache pas, elle s\'affirme : la verrière acier, la cuisine monobloc, l\'escalier suspendu — chaque ajout est lisible comme un geste d\'aujourd\'hui.</li><li>Les tomettes en terre cuite, usées par deux siècles de pas, n\'ont pas été remplacées — elles racontent l\'histoire du lieu mieux que n\'importe quel matériau neuf.</li><li>Le choix de la couleur sur les boiseries — un bleu profond, presque noir — transforme un salon haussmannien en un espace résolument contemporain sans toucher à un seul ornement.</li></ul>'
            },
            {
              title: 'Conclure un texte de projet',
              content: '<ul><li>Au final, ce projet est une leçon de justesse : chaque choix est motivé, chaque renoncement est un gain, chaque détail est une intention.</li><li>L\'espace ne ressemble à aucun autre — et c\'est précisément parce qu\'il ne ressemble qu\'à ceux qui l\'habitent.</li><li>Ce n\'est pas un intérieur qu\'on visite — c\'est un intérieur qu\'on habite dès le premier regard.</li><li>Le projet prouve qu\'on peut faire beaucoup avec peu : un budget maîtrisé, des matériaux honnêtes, et un dessin qui ne laisse rien au hasard.</li><li>Ici, l\'architecture d\'intérieur fait ce qu\'elle fait de mieux : elle transforme des mètres carrés en mètres cubes de bien-être.</li><li>Le résultat est à la hauteur de l\'ambition : un lieu qui vieillit bien, qui se bonifie avec le temps, qui accueille la vie sans la contraindre.</li><li>C\'est un projet qui ne se photographie pas entièrement — il faut le traverser, le toucher, y passer une heure pour en saisir toute la subtilité.</li><li>En quelques semaines de chantier et un budget raisonné, l\'architecte a réussi l\'essentiel : rendre un lieu aimable au sens premier du terme — un lieu qu\'on aime.</li></ul>'
            },
            {
              title: 'Phrases pour les réseaux sociaux et légendes courtes',
              content: '<ul><li>Quand la lumière dessine l\'espace mieux que n\'importe quel plan.</li><li>Le luxe du silence visuel — quand tout est à sa place et que rien ne crie.</li><li>Matière brute, geste précis.</li><li>Ce n\'est pas du minimalisme — c\'est de la précision.</li><li>Là où l\'ancien et le contemporain se tutoient.</li><li>Un intérieur qui se vit pieds nus.</li><li>Le détail qu\'on ne voit pas, mais qu\'on ressent.</li><li>La beauté des choses qui patinent.</li><li>Trois matériaux, une lumière, une intention — le projet en une phrase.</li><li>On entre et on comprend tout — c\'est le signe d\'un bon projet.</li><li>Pas de tendance. Du sens.</li><li>L\'élégance de ce qui ne se montre pas.</li><li>La lumière du matin a toujours le dernier mot.</li><li>Less is more, mais more is more aussi — tout dépend du projet.</li><li>Un lieu qui ressemble à ceux qui l\'habitent, pas à ceux qui l\'ont dessiné.</li></ul>'
            }
          ],
          keyPoints: [
            'Les meilleures descriptions de projet tiennent en 3-4 phrases — pas besoin d\'un roman',
            'Sur Instagram, la légende courte et percutante bat toujours le pavé de texte',
            'Les oppositions (ancien/moderne, brut/raffiné) sont le ressort narratif le plus efficace',
            'Écrire à la première personne (« on entre ») immerge le lecteur dans l\'espace',
            'Finir par une émotion, jamais par une liste de matériaux'
          ],
          tips: [
            'Se constituer un carnet de phrases — noter celles qui vous marquent dans les magazines',
            'Adapter le registre au support : poétique pour Instagram, factuel pour un dossier de presse, séduisant pour une présentation client',
            'Lire les légendes de Vincent Van Duysen, Joseph Dirand et Pierre Yovanovitch — les maîtres du texte de projet'
          ],
          tags: ['écriture', 'storytelling', 'ambiance', 'style', 'portfolio', 'Instagram', 'ancien-contemporain']
        }
      ]
    },

    // ====================================
    // 9. RÉNOVATION & SOLUTIONS TECHNIQUES
    // ====================================
    {
      id: 'renovation',
      name: 'Rénovation & Solutions Techniques',
      icon: '⚒',
      color: '#C17F59',
      description: 'Les problèmes concrets rencontrés en rénovation et leurs solutions : isolation, humidité, ventilation, chauffage, acoustique, électricité, plomberie. Le vrai terrain.',
      fiches: [
        // --- ISOLATION & CONFORT THERMIQUE ---
        {
          id: 'isolation-sous-toiture',
          category: 'Isolation & Confort Thermique',
          title: 'Isolation sous Toiture & Combles',
          subtitle: 'Trop chaud l\'été, trop froid l\'hiver — la solution',
          summary: 'C\'est LE problème n°1 en rénovation de combles aménagés : un client qui dort sous les toits souffre de la chaleur en été (le zinc ou les tuiles montent à 60-70°C) et du froid en hiver (la chaleur s\'échappe par le toit). La toiture représente 30% des déperditions thermiques d\'un logement.',
          sections: [
            {
              title: 'Diagnostic : pourquoi ça chauffe / refroidit',
              content: 'La couverture (tuiles, ardoises, zinc) est la paroi la plus exposée au soleil et au froid. Sans isolation performante, la chaleur entre directement en été et sort en hiver. Les combles d\'avant 2000 ont souvent une isolation insuffisante (4-6 cm de laine de verre tassée, voire rien). Les ponts thermiques aux jonctions mur/toiture et aux fenêtres de toit (Velux) aggravent le problème. Un simple toucher du plafond mansardé révèle tout : s\'il est chaud en été ou froid en hiver, l\'isolation est défaillante.'
            },
            {
              title: 'Les solutions d\'isolation',
              content: 'SOLUTION 1 — Isolation par l\'intérieur (ITI, la plus courante) : pose de panneaux isolants entre et sous les chevrons. Épaisseur recommandée : 20-30 cm pour atteindre R ≥ 6 m².K/W (exigence RE2020). Matériaux : laine de bois (excellent confort d\'été — déphasage 10-12h), laine de verre/roche (économique), ouate de cellulose (soufflée ou en panneaux). Coût : 40-80 €/m². SOLUTION 2 — Isolation par l\'extérieur (sarking) : panneaux rigides posés sur les chevrons, sous la couverture. Le plus performant (supprime tous les ponts thermiques) mais nécessite de refaire la couverture. Coût : 100-200 €/m². SOLUTION 3 — Isolation soufflée (combles perdus) : ouate de cellulose ou laine soufflée sur le plancher des combles. Rapide, efficace, économique (15-30 €/m²).'
            },
            {
              title: 'Le déphasage thermique : clé du confort d\'été',
              content: 'Le DÉPHASAGE est le temps que met la chaleur à traverser l\'isolant. C\'est LE critère pour le confort d\'été sous les toits. Laine de verre : déphasage ~4h → la chaleur de 14h arrive à 18h (insuffisant). Laine de bois : déphasage 10-12h → la chaleur de 14h arrive à 2h du matin quand il fait frais dehors (idéal). Ouate de cellulose : déphasage 8-10h (très bon). RÈGLE : sous les toits, toujours privilégier un isolant à fort déphasage (fibre de bois = référence). C\'est plus cher que la laine de verre mais le confort d\'été est incomparable.'
            },
            {
              title: 'Les fenêtres de toit (Velux)',
              content: 'Les Velux sont souvent le maillon faible de l\'isolation en combles. Solutions : remplacer les anciens Velux par des modèles récents (double vitrage à isolation renforcée, Uw ≤ 1,1 W/m².K). Ajouter un store occultant extérieur (pare-soleil — réduit l\'apport solaire de 70%). Vérifier l\'étanchéité du raccord Velux/toiture (fuite d\'air = pont thermique majeur). Poser un volet roulant extérieur solaire Velux (isole + occultation + pas de câblage).'
            },
            {
              title: 'La ventilation : indissociable de l\'isolation',
              content: 'Isoler sans ventiler = catastrophe (condensation, moisissures). Toujours prévoir une VMC (Ventilation Mécanique Contrôlée), idéalement double flux en combles aménagés (récupère 80-90% de la chaleur de l\'air extrait). La lame d\'air ventilée entre la couverture et l\'isolant est OBLIGATOIRE (évacuation de l\'humidité). Le pare-vapeur (côté intérieur chaud) empêche la vapeur d\'eau de pénétrer dans l\'isolant. Le pare-pluie (côté extérieur froid) protège l\'isolant de l\'eau tout en laissant respirer.'
            }
          ],
          keyPoints: [
            'La toiture = 30% des déperditions thermiques — c\'est la priorité n°1',
            'Sous les toits : LAINE DE BOIS (déphasage 10-12h) et non laine de verre (4h)',
            'Épaisseur minimum 20-30 cm pour R ≥ 6 m².K/W (RE2020)',
            'Les Velux anciens sont des passoires thermiques — les remplacer ou ajouter volet extérieur',
            'Isoler SANS ventiler = moisissures garanties — VMC obligatoire'
          ],
          tips: [
            'Premier réflexe pour un client qui a chaud sous les toits : vérifier le type d\'isolant. Si c\'est de la laine de verre fine, le problème est là',
            'Le volet roulant solaire Velux (SSL) se pose sans câblage et réduit la chaleur de 94% — c\'est la solution la plus rapide et efficace',
            'En rénovation de combles, prévoir un surcoût de 10-15% pour une laine de bois vs laine de verre — le client ne regrettera jamais'
          ],
          tags: ['isolation', 'toiture', 'combles', 'thermique', 'laine de bois', 'Velux', 'chaleur']
        },
        {
          id: 'humidite-condensation',
          category: 'Isolation & Confort Thermique',
          title: 'Humidité, Condensation & Moisissures',
          subtitle: 'Le fléau silencieux des intérieurs',
          summary: 'L\'humidité est le problème le plus fréquent en rénovation — et le plus mal diagnostiqué. Condensation sur les fenêtres, moisissures dans les angles, papier peint qui se décolle, odeur de renfermé. Avant tout projet esthétique, il faut traiter la cause.',
          sections: [
            {
              title: 'Les 3 sources d\'humidité',
              content: 'SOURCE 1 — La condensation (la plus fréquente) : l\'air chaud intérieur contient de la vapeur d\'eau qui se condense sur les parois froides (fenêtres, murs mal isolés, ponts thermiques). C\'est la buée sur les vitres, les moisissures dans les angles. Cause : manque de ventilation + isolation insuffisante. SOURCE 2 — Les infiltrations : l\'eau de pluie entre par la toiture, les murs, les menuiseries, les fissures. Cause : défaut d\'étanchéité. SOURCE 3 — Les remontées capillaires : l\'eau du sol remonte dans les murs par capillarité (bâtiments anciens sans barrière étanche). Signe : taches humides en pied de mur, salpêtre (efflorescences blanches).'
            },
            {
              title: 'Diagnostic : identifier la source',
              content: 'Test du papier aluminium : coller un carré d\'alu sur le mur humide pendant 48h. Si l\'humidité est côté mur → infiltration ou remontée. Si côté pièce → condensation. Mesure avec un hygromètre : taux d\'humidité relative idéal = 40-60%. Au-dessus de 70% = problème. Observation : humidité en haut du mur = infiltration toiture. En bas du mur = remontées capillaires. Sur les fenêtres et angles de plafond = condensation. Odeur de moisi sans trace visible = problème caché (derrière un doublage, sous un plancher).'
            },
            {
              title: 'Solutions pour la condensation',
              content: 'Ventilation : installer ou rénover la VMC (simple flux hygroréglable B minimum, double flux idéal). Aérer 10 min/jour fenêtres ouvertes. Isolation : traiter les ponts thermiques (angles mur/plafond, contours de fenêtres, coffres de volets roulants). Isoler les murs par l\'intérieur (ITE ou ITI). Remplacer les fenêtres simple vitrage par du double vitrage. Chauffage : maintenir une température constante (18-20°C) — l\'intermittence crée de la condensation. Ne pas obstruer les radiateurs avec des meubles.'
            },
            {
              title: 'Solutions pour les infiltrations',
              content: 'Toiture : vérifier tuiles/ardoises cassées, noues, faîtage, raccords cheminée. Faire intervenir un couvreur. Murs extérieurs : ravalement + imperméabilisation (hydrofuge de façade). Reboucher fissures avec un mastic élastique. Menuiseries : remplacer les joints périphériques. Vérifier le calfeutrement (mousse expansive + joint silicone). Gouttières : nettoyage, réparation, vérifier la descente (l\'eau qui déborde ruisselle sur le mur).'
            },
            {
              title: 'Solutions pour les remontées capillaires',
              content: 'Injection de résine : perçage en pied de mur tous les 15 cm, injection d\'une résine hydrophobe qui crée une barrière étanche. Coût : 50-100 €/ml. Le plus courant. Drainage périphérique : tranchée autour des fondations + drain + membrane. Lourd mais efficace. Cuvelage : dans les sous-sols, application d\'un enduit étanche (type Sika) sur les murs et le sol. Ventilation basse : créer des grilles de ventilation en pied de mur pour laisser le mur respirer (bâtiments anciens en pierre). ATTENTION : ne JAMAIS enduire un mur humide avec un revêtement étanche (ciment, peinture vinylique) — ça emprisonne l\'eau et aggrave le problème.'
            }
          ],
          keyPoints: [
            'Toujours diagnostiquer la SOURCE avant de traiter (condensation ≠ infiltration ≠ remontée)',
            'Condensation = 80% des cas → la solution est ventilation + isolation',
            'Hygromètre : taux d\'humidité idéal 40-60%, au-dessus de 70% = problème',
            'Ne JAMAIS enduire un mur humide avec un revêtement étanche',
            'Isoler sans ventiler = déplacer le problème → VMC obligatoire'
          ],
          tips: [
            'Le test du papier alu est le premier geste à faire face à un mur humide — ça prend 2 jours et ça oriente tout le diagnostic',
            'Un déshumidificateur électrique est un pansement, pas un traitement — il masque le symptôme sans traiter la cause',
            'En bâtiment ancien (pierre), les murs DOIVENT respirer — utiliser des enduits à la chaux, jamais du ciment'
          ],
          tags: ['humidité', 'condensation', 'moisissure', 'ventilation', 'infiltration', 'capillaire']
        },
        {
          id: 'ventilation-vmc',
          category: 'Isolation & Confort Thermique',
          title: 'Ventilation & VMC',
          subtitle: 'L\'air qu\'on ne voit pas mais qu\'on subit',
          summary: 'Un logement sans ventilation correcte, c\'est des moisissures, des odeurs, un air vicié et des allergies. La VMC est le poumon de l\'habitat — c\'est souvent la grande oubliée des rénovations esthétiques.',
          sections: [
            {
              title: 'Pourquoi ventiler',
              content: 'Un adulte produit 1 à 2 litres d\'eau par jour (respiration, douche, cuisine, linge). Sans évacuation, cette humidité se condense sur les parois froides → moisissures, odeurs, acariens. La ventilation évacue aussi les polluants intérieurs (COV des meubles, des peintures, du ménage) et le CO2. Un logement rénové avec fenêtres neuves (étanches) et sans VMC = boîte hermétique → les problèmes arrivent en quelques mois.'
            },
            {
              title: 'VMC Simple Flux',
              content: 'Principe : extraction de l\'air vicié dans les pièces humides (cuisine, SDB, WC) par des bouches d\'extraction reliées à un caisson ventilateur (dans les combles ou un placard). L\'air neuf entre par des entrées d\'air dans les fenêtres des pièces sèches (salon, chambres). HYGRORÉGLABLE B (la référence) : les bouches s\'ouvrent et se ferment en fonction du taux d\'humidité → ventilation intelligente, économe en énergie. Coût installation : 500-1 500 €. Consommation : 15-30 W (très faible). Entretien : nettoyer les bouches 2x/an, changer le caisson tous les 10-15 ans.'
            },
            {
              title: 'VMC Double Flux',
              content: 'Principe : comme la simple flux MAIS l\'air entrant est préchauffé par un échangeur thermique qui récupère 80-90% de la chaleur de l\'air sortant. Résultat : air neuf, filtré, tempéré — fini les entrées d\'air froid en hiver. Avantages : confort supérieur, économies de chauffage (15-25%), filtration de l\'air (pollens, particules fines). Inconvénients : plus cher (3 000-7 000 € installée), gaines plus volumineuses (Ø 125-160 mm), entretien des filtres (tous les 3-6 mois). Idéal pour : combles aménagés, logements très isolés (passif/BBC), personnes allergiques.'
            },
            {
              title: 'Intégration architecturale',
              content: 'Le défi en rénovation : passer les gaines. Solutions : faux plafond (perte de 15-25 cm de hauteur — acceptable si HsP > 2,70 m). Coffrage en angle mur/plafond (discret). Passage dans les placards et dressings. Pour la double flux : prévoir un local technique (caisson + échangeur = 60x60x40 cm environ). Le bruit : choisir un caisson silencieux (< 30 dB en vitesse 1). Les bouches d\'extraction design existent : Aldes, Atlantic, Zehnder proposent des modèles esthétiques.'
            }
          ],
          keyPoints: [
            'Fenêtres neuves SANS VMC = boîte hermétique → moisissures garanties sous 6 mois',
            'VMC Simple Flux Hygroréglable B = le standard de la rénovation',
            'VMC Double Flux = confort supérieur mais gaines volumineuses — à anticiper',
            'Le passage des gaines est LA contrainte en rénovation — y penser dès le plan',
            'Entretien minimal mais indispensable : nettoyer les bouches 2x/an'
          ],
          tips: [
            'Toujours vérifier la VMC existante AVANT de commencer les travaux : aspirer une feuille de papier devant la bouche — si elle ne colle pas, la VMC est HS',
            'En rénovation d\'appartement ancien sans VMC : la simple flux hygro B est souvent suffisante et bien plus facile à installer que la double flux',
            'Prévoir les bouches d\'extraction DANS les faux plafonds de SDB — invisible et efficace'
          ],
          tags: ['ventilation', 'VMC', 'air', 'humidité', 'double flux', 'hygroréglable']
        },
        // --- ACOUSTIQUE ---
        {
          id: 'isolation-phonique',
          category: 'Acoustique',
          title: 'Isolation Phonique',
          subtitle: 'Le confort qu\'on ne voit pas mais qu\'on entend',
          summary: 'Le bruit est la nuisance n°1 citée par les habitants en ville. Bruits de voisins, de rue, de pas à l\'étage — l\'isolation phonique est un enjeu majeur de la rénovation et un vrai argument de vente pour l\'architecte d\'intérieur.',
          sections: [
            {
              title: 'Comprendre le bruit',
              content: 'Bruits AÉRIENS : conversations, TV, musique, trafic routier. Se propagent par l\'air et traversent les parois (murs, planchers, fenêtres). Bruits d\'IMPACT (ou solidiens) : pas, chocs, chutes d\'objets, machines à laver. Se propagent par la structure du bâtiment (plancher → mur → plafond). Bruits d\'ÉQUIPEMENTS : chaudière, VMC, ascenseur, canalisations. Transmis par les gaines et la structure. Indice d\'affaiblissement acoustique Rw : plus il est élevé, mieux le mur isole. Un mur en béton de 18 cm = Rw ~55 dB. Une cloison placo BA13 simple = Rw ~28 dB.'
            },
            {
              title: 'Solutions contre les bruits aériens',
              content: 'Murs mitoyens : doublage acoustique (ossature métallique désolidarisée + laine minérale 45 mm + plaque de plâtre acoustique type Placo Phonique). Gain : 10-20 dB. Épaisseur totale : 5-8 cm. Fenêtres : remplacement par du double vitrage asymétrique (ex: 4/16/10 au lieu de 4/16/4 — l\'asymétrie casse les résonances). Ou triple vitrage. Gain : 5-15 dB. Portes : portes pleines (isoplane) avec joint isophonique périphérique + seuil à joint automatique (type Schlegel). Gain : 5-10 dB. Coffres de volets roulants : les isoler (mousse acoustique intérieure) — c\'est souvent un point faible majeur.'
            },
            {
              title: 'Solutions contre les bruits d\'impact',
              content: 'Par le SOL (à l\'étage du dessus = la meilleure solution) : sous-couche résiliente sous le revêtement de sol. Liège : 2-5 mm, ΔLw 15-20 dB. Mousse PE : 3-5 mm, ΔLw 18-22 dB. Fibre de bois : 5-22 mm, ΔLw 20-30 dB. Chape flottante sur isolant (la plus performante) : chape béton de 5 cm sur mousse résiliente → ΔLw 25-35 dB. Par le PLAFOND (chez le voisin du dessous) : faux plafond suspendu sur suspentes anti-vibratiles + laine minérale + plaque de plâtre. Gain : 10-15 dB. Moins efficace que par le sol mais la seule solution quand on ne maîtrise pas l\'étage du dessus.'
            },
            {
              title: 'Piéger le son : l\'absorption acoustique',
              content: 'L\'isolation bloque le son, l\'absorption le piège à l\'intérieur de la pièce (réduit la réverbération). Solutions : rideaux épais (velours, 3 couches). Tapis et moquette épaisse. Panneaux acoustiques muraux (tissu tendu sur laine minérale — design et efficace). Mobilier rembourré (canapé, fauteuils). Bibliothèques remplies de livres. Plafonds acoustiques (dalles absorbantes ou placo perforé). Astuce : plus les surfaces sont dures et lisses (béton, verre, carrelage), plus ça résonne. Le style « loft industriel » est beau mais bruyant — compenser avec des textiles.'
            }
          ],
          keyPoints: [
            'Bruits aériens → isoler les parois (doublage, fenêtres, portes)',
            'Bruits d\'impact → traiter PAR LE SOL à la source (sous-couche ou chape flottante)',
            'Le faux plafond sur suspentes anti-vibratiles = solution quand on ne maîtrise pas l\'étage du dessus',
            'Les coffres de volets roulants sont souvent le maillon faible acoustique — à isoler systématiquement',
            'Les matériaux durs (béton, verre) + grandes surfaces = résonance — compenser avec des textiles'
          ],
          tips: [
            'Un client qui se plaint du bruit des voisins : d\'abord identifier si c\'est aérien (voix, TV) ou solidien (pas, chocs) — la solution est radicalement différente',
            'Le Placo Phonique (plaque bleue) coûte ~2 €/m² de plus que le standard — le surcoût est ridicule pour le gain',
            'Toujours prévoir une sous-couche acoustique sous le parquet en rénovation — même sans problème apparent, c\'est de la prévention'
          ],
          tags: ['acoustique', 'phonique', 'bruit', 'isolation', 'plancher', 'voisin']
        },
        // --- CHAUFFAGE & ÉNERGIE ---
        {
          id: 'plancher-chauffant-renovation',
          category: 'Chauffage & Énergie',
          title: 'Plancher Chauffant en Rénovation',
          subtitle: 'Le confort invisible — et possible même en rénovation',
          summary: 'Le plancher chauffant offre le confort thermique le plus homogène et libère les murs (plus de radiateurs). En rénovation, c\'est devenu possible grâce aux systèmes à faible épaisseur (18-30 mm). Le surcoût est vite oublié, le confort jamais.',
          sections: [
            {
              title: 'Plancher chauffant hydraulique vs électrique',
              content: 'HYDRAULIQUE (eau chaude) : tubes PER ou multicouche noyés dans une chape, alimentés par une chaudière ou PAC. Le plus confortable et économique à l\'usage. Inertie : la chape stocke la chaleur et la diffuse lentement (confort). Réservé aux projets avec accès à un système de chauffage central. ÉLECTRIQUE (trames ou câbles chauffants) : plus fin (< 5 mm), plus facile à poser, mais plus coûteux à l\'usage. Idéal en appoint (salle de bain) ou si pas de système hydraulique. En rénovation : le système hydraulique à faible épaisseur (18-30 mm tout compris) est le meilleur compromis.'
            },
            {
              title: 'Les systèmes à faible épaisseur',
              content: 'Le problème en rénovation : une chape classique fait 6-8 cm → impossible à ajouter sans rehausser portes, prises, etc. Solutions : plaques à plots (Rehau, Uponor) : tube PER clipsé dans des plots, chape fluide de 3 cm dessus → épaisseur totale 5 cm. Plancher sec (Fermacell) : tube inséré dans des plaques isolantes rainurées + plaque sèche dessus → épaisseur 3-4 cm, pas de temps de séchage. Trame électrique ultra-fine (Warmup, Deleage) : 3-5 mm sous carrelage → parfait pour salle de bain seule. Attention : toujours vérifier la hauteur disponible (sol fini actuel → sous-face porte/fenêtre).'
            },
            {
              title: 'Revêtements de sol compatibles',
              content: 'IDÉAL : carrelage, pierre naturelle, béton ciré → conductivité thermique maximale, le sol chauffe vite et bien. BON : parquet contrecollé (épaisseur ≤ 15 mm, conductivité compatible — vérifier fiche technique). Le chêne et le noyer conviennent. ATTENTION : parquet massif épais (> 15 mm) = mauvaise conductivité, risque de retrait/gonflement. Moquette épaisse = isolant → annule l\'effet du plancher chauffant. Vinyle/LVT : compatible si mention « compatible plancher chauffant » sur la fiche.'
            },
            {
              title: 'Mise en œuvre et budget',
              content: 'Hydraulique classique (chape) : 50-80 €/m² fourni posé. Hydraulique faible épaisseur : 70-120 €/m². Plancher sec : 80-130 €/m². Électrique trame (SDB) : 30-50 €/m² fourni posé. Régulation : thermostat par zone (programmable ou connecté) = 100-300 € par zone. Délai chape humide : 21 jours de séchage avant pose du revêtement. Chape sèche : pose du revêtement immédiate. Un bon chauffagiste + un bon carreleur = le duo indispensable.'
            }
          ],
          keyPoints: [
            'Le plancher chauffant libère les murs (plus de radiateurs) → liberté d\'aménagement totale',
            'En rénovation : systèmes à faible épaisseur (3-5 cm) — vérifier la hauteur disponible',
            'Carrelage / pierre = le meilleur revêtement sur plancher chauffant',
            'Trame électrique en SDB = confort pieds nus pour un surcoût modeste (30-50 €/m²)',
            'Toujours prévoir une régulation par zone (thermostat par pièce)'
          ],
          tips: [
            'En salle de bain, proposer systématiquement une trame électrique — le client qui sort de la douche pieds nus sur un carrelage chaud ne revient jamais en arrière',
            'Le plancher sec (Fermacell) est la solution idéale en appartement ancien : pas d\'eau, pas de temps de séchage, faible épaisseur',
            'Toujours faire un calepinage des tubes AVANT la pose — éviter de passer sous les meubles fixes (cuisine, placard)'
          ],
          tags: ['plancher chauffant', 'chauffage', 'rénovation', 'sol', 'confort', 'basse température']
        },
        {
          id: 'chauffage-solutions',
          category: 'Chauffage & Énergie',
          title: 'Solutions de Chauffage en Rénovation',
          subtitle: 'Chaudière, PAC, radiateurs — le bon choix',
          summary: 'Le chauffage représente 60-70% de la facture énergétique d\'un logement. En rénovation, choisir la bonne solution est un enjeu technique, économique et réglementaire. L\'architecte d\'intérieur doit comprendre les options pour dialoguer avec le chauffagiste et le client.',
          sections: [
            {
              title: 'Les systèmes de production',
              content: 'Chaudière gaz à condensation : le standard actuel en collectif. Rendement 95-110%. Mais : interdite dans le neuf depuis 2022, fin annoncée du gaz. Pompe à chaleur (PAC) air-eau : capte les calories de l\'air extérieur pour chauffer un circuit d\'eau. COP 3-4 (1 kWh consommé = 3-4 kWh produits). Le système dominant en 2025. Fonctionne aussi en climatisation (réversible). PAC air-air (climatisation réversible) : unités intérieures type split ou gainable. Chauffe et refroidit. Idéal en complément ou sans réseau d\'eau. Poêle à granulés : appoint ou chauffage principal en petit logement. Esthétique, économique (granulés ~6 ct/kWh). Radiateurs électriques à inertie : appoint ou logement très isolé. Pas de tuyauterie.'
            },
            {
              title: 'Les émetteurs de chaleur',
              content: 'Radiateurs en fonte anciens : beaux (patrimoine), bonne inertie, mais lourds et lents à chauffer. Compatibles avec PAC si basse température (surdimensionner). Radiateurs acier/alu design : légers, réactifs, large choix esthétique (Acova, Zehnder, Runtal, Tubes — modèles architecturaux). Plancher chauffant : voir fiche dédiée — le plus confortable. Sèche-serviettes : indispensable en SDB. Mixte eau chaude + électrique = le meilleur combo. Convecteurs / radiateurs électriques à inertie (fonte, pierre, céramique) : appoint ou logement très isolé. Les modèles sèche-serviettes design (Acova, Cinier) sont de vrais objets déco.'
            },
            {
              title: 'Dimensionnement',
              content: 'Règle simplifiée : 70-100 W/m² pour un logement moyennement isolé (avant 2000). 40-60 W/m² pour un logement bien isolé (BBC/RE2020). Exemple : chambre de 12 m² mal isolée → 12 × 100 = 1 200 W → radiateur de 1 200 W minimum. Toujours faire une étude thermique (bilan DPE ou étude BET) pour un dimensionnement précis. Sous-dimensionner = inconfort. Surdimensionner = surcoût et cycles courts (usure).'
            },
            {
              title: 'Aides financières',
              content: 'MaPrimeRénov\' : aide de l\'État pour les travaux d\'économie d\'énergie. PAC air-eau : jusqu\'à 5 000 € d\'aide. Chaudière biomasse : jusqu\'à 7 000 €. Isolation : aide au m² selon l\'isolant et la zone. CEE (Certificats d\'Économie d\'Énergie) : primes des fournisseurs d\'énergie, cumulables avec MaPrimeRénov\'. Éco-PTZ : prêt à taux zéro jusqu\'à 50 000 € pour des bouquets de travaux. TVA réduite 5,5% sur les travaux d\'amélioration énergétique (logement > 2 ans). Toujours vérifier les aides AVANT de signer les devis — certaines sont conditionnées à un artisan RGE.'
            }
          ],
          keyPoints: [
            'La PAC air-eau est le système dominant en 2025 — elle remplace la chaudière gaz',
            '70-100 W/m² en logement ancien, 40-60 W/m² en logement bien isolé',
            'Les radiateurs design (Acova, Tubes, Runtal) sont de vrais objets architecturaux',
            'Artisan RGE = obligatoire pour les aides financières (MaPrimeRénov\', CEE)',
            'Toujours coupler rénovation énergétique + rénovation esthétique = un seul chantier'
          ],
          tips: [
            'Garder les radiateurs fonte anciens si possible — les décaper, les repeindre, les brancher sur la PAC : ils sont beaux et efficaces',
            'Le sèche-serviettes mixte (eau + électrique) permet de chauffer la SDB en mi-saison sans allumer la chaudière/PAC',
            'Présenter les aides financières au client dès la phase conception — ça débloque souvent le budget pour une meilleure solution'
          ],
          tags: ['chauffage', 'PAC', 'radiateur', 'énergie', 'rénovation', 'aide financière']
        },
        // --- RÉSEAUX & MISE AUX NORMES ---
        {
          id: 'renovation-electrique',
          category: 'Réseaux & Mise aux Normes',
          title: 'Rénovation Électrique',
          subtitle: 'Sécurité, diagnostic & plan électrique',
          summary: 'L\'électricité est le réseau le plus dangereux et le plus réglementé. En rénovation, la mise aux normes est souvent obligatoire et toujours recommandée. L\'architecte d\'intérieur conçoit le plan électrique — il doit connaître les exigences.',
          sections: [
            {
              title: 'Quand refaire l\'électricité',
              content: 'Obligation de mise aux normes : installation avant 1991 (pas de disjoncteur différentiel), fils en tissu, prises sans terre, tableau avec fusibles porcelaine. Recommandé : installation de plus de 25 ans. Signaux d\'alerte : prises qui chauffent, disjoncteur qui saute, fils non gainés visibles, pas de prise de terre, pas de différentiel 30 mA. En copropriété : la rénovation concerne la partie privative (du tableau au logement aux prises). La colonne montante est à la charge de la copropriété.'
            },
            {
              title: 'NF C 15-100 en rénovation : l\'essentiel',
              content: 'La norme NF C 15-100 fixe les minimums par pièce (nombre de prises, points lumineux, circuits spécialisés). Voir la fiche « Normes Électriques NF C 15-100 » pour le détail complet pièce par pièce. En rénovation, les points critiques à vérifier en priorité : les volumes de sécurité en salle de bain (zones 0, 1, 2, hors volume), les circuits spécialisés cuisine (four, plaques, lave-vaisselle), et le différentiel 30 mA au tableau. La mise en conformité totale n\'est exigée qu\'en cas de rénovation lourde — en rénovation partielle, les travaux réalisés doivent respecter la norme en vigueur.'
            },
            {
              title: 'Le tableau électrique',
              content: 'Le tableau doit comporter : 1 disjoncteur général (AGCP) calibré par Enedis. Des interrupteurs différentiels 30 mA (1 type A pour plaques/lave-linge + type AC pour le reste). Des disjoncteurs divisionnaires par circuit (10A éclairage, 16A prises, 20A spécialisés, 32A plaques). Un parafoudre (obligatoire en zone à risque foudre). La GTL (Gaine Technique Logement) : espace dédié au tableau + arrivée courant + communication. Prévoir un tableau surdimensionné (30% de réserve pour évolutions futures).'
            },
            {
              title: 'Plan électrique : le rôle de l\'architecte d\'intérieur',
              content: 'L\'archi d\'intérieur dessine le plan d\'implantation électrique : position de chaque prise, interrupteur, point lumineux, sortie de câble. Penser aux usages : prises au sol (îlot cuisine), prises plan de travail (cuisine, bureau), prises USB intégrées (chambre), sorties de câble pour appliques (1,80-2 m du sol), variateurs (salon, chambre), commandes centralisées (entrée). Ce plan est transmis à l\'électricien qui fait le schéma technique et le dimensionnement. TOUJOURS faire valider le plan par l\'électricien AVANT le passage des gaines.'
            }
          ],
          keyPoints: [
            'Installation > 25 ans = rénovation recommandée, > 35 ans = quasi obligatoire',
            'Norme NF C 15-100 = le minimum légal par pièce (nombre de prises, éclairage, circuits)',
            'Le plan d\'implantation électrique est LE livrable clé de l\'archi d\'intérieur sur ce sujet',
            'Tableau surdimensionné (30% de réserve) = indispensable pour l\'avenir',
            'Volumes de sécurité en salle de bain = non négociable'
          ],
          tips: [
            'Imprimer le récapitulatif NF C 15-100 et le garder dans son dossier projet — ça évite les oublis',
            'Prévoir systématiquement des prises USB-C intégrées dans les chambres et le bureau — en 2025 c\'est un basique',
            'Toujours demander le Consuel (certificat de conformité) à l\'électricien en fin de chantier'
          ],
          tags: ['électricité', 'norme', 'NF C 15-100', 'tableau', 'prise', 'rénovation']
        },
        {
          id: 'plomberie-renovation',
          category: 'Réseaux & Mise aux Normes',
          title: 'Plomberie en Rénovation',
          subtitle: 'Eau chaude, évacuations, pentes et contraintes',
          summary: 'La plomberie est la contrainte la plus dure en rénovation : on ne déplace pas un WC ou une douche aussi facilement qu\'une cloison. Comprendre les règles (pentes, diamètres, ventilation) évite les mauvaises surprises et les projets irréalisables.',
          sections: [
            {
              title: 'Les contraintes d\'évacuation',
              content: 'RÈGLE N°1 : l\'eau usée s\'écoule par gravité. Pente minimale : 1 cm/m pour les eaux usées (lavabo, douche), 1 à 3 cm/m pour les eaux vannes (WC). Diamètre : WC = 100 mm, douche/baignoire = 40-50 mm, lavabo = 32-40 mm, cuisine = 40 mm. La colonne de chute (verticale) est FIXE — on ne la déplace pas. Plus on s\'éloigne de la colonne, plus le sol doit être épais (pour la pente). Exemple : déplacer un WC de 3 m = 3-9 cm de rehausse de sol. La douche italienne nécessite un receveur extra-plat ou un décaissage de la dalle pour loger le siphon + la pente.'
            },
            {
              title: 'Alimentations en eau',
              content: 'Les tuyaux d\'alimentation (eau froide + eau chaude) sont plus faciles à déplacer que les évacuations (pas de pente nécessaire). Matériaux actuels : PER (polyéthylène réticulé) = le standard. Souple, facile à poser, raccords à sertir. Multicouche (PER + alu) = plus rigide, moins de dilatation, raccords à visser ou à sertir. Cuivre : noble, durable, mais plus cher et nécessite soudure ou brasure. Diamètres : 12-16 mm pour lavabo/bidet, 14-16 mm pour douche/baignoire, 16-20 mm pour alimentation générale.'
            },
            {
              title: 'Production d\'eau chaude',
              content: 'Chauffe-eau électrique (cumulus) : simple, économique à l\'achat (200-600 €). Volume : 50L (1 personne), 100L (2), 150L (3), 200L (4+). Encombrement important — le cacher dans un placard technique. Chauffe-eau thermodynamique : pompe à chaleur intégrée. Consomme 3x moins qu\'un cumulus classique. Éligible aux aides (MaPrimeRénov\'). Nécessite un local ventilé (volume d\'air > 20 m³). Chaudière / PAC : production d\'ECS intégrée (ballon ou micro-accumulation). Chauffe-eau instantané gaz : eau chaude illimitée, compact, mais gaz voué à disparaître.'
            },
            {
              title: 'Ce que l\'archi d\'intérieur doit vérifier',
              content: 'AVANT de dessiner un plan avec des pièces d\'eau déplacées : repérer la colonne de chute et mesurer la distance (plus on s\'éloigne, plus c\'est contraignant). Vérifier la hauteur disponible dans le sol pour la pente d\'évacuation. Vérifier la faisabilité d\'une douche italienne (épaisseur de chape, décaissage possible ?). Vérifier la pression d\'eau (un manomètre sur le robinet : 2-3 bars minimum). Repérer le compteur d\'eau et le parcours des canalisations existantes. En cas de doute : faire venir le plombier AVANT de finaliser le plan.'
            }
          ],
          keyPoints: [
            'L\'évacuation (par gravité) est LA contrainte — l\'alimentation est facile à déplacer',
            'Pente minimum 1 cm/m pour eaux usées, 1-3 cm/m pour WC',
            'Plus on s\'éloigne de la colonne de chute, plus on rehausse le sol',
            'Douche italienne = vérifier l\'épaisseur de chape disponible AVANT de promettre',
            'Toujours faire venir le plombier AVANT de valider un plan avec déplacement de pièces d\'eau'
          ],
          tips: [
            'La question magique avant tout projet de SDB : « Où est la colonne de chute ? » — ça détermine 80% de la faisabilité',
            'Un WC suspendu avec bâti-support (Geberit) permet de passer l\'évacuation dans l\'épaisseur du bâti — gain de flexibilité',
            'Le chauffe-eau thermodynamique dans un placard technique = économie + silence + aides financières'
          ],
          tags: ['plomberie', 'évacuation', 'eau chaude', 'pente', 'colonne de chute', 'rénovation']
        },
        // --- STRUCTURE & GROS ŒUVRE ---
        {
          id: 'murs-porteurs-ouvertures',
          category: 'Structure & Gros Œuvre',
          title: 'Murs Porteurs & Ouvertures',
          subtitle: 'Ouvrir sans que ça tombe',
          summary: 'Créer une ouverture dans un mur porteur est l\'intervention la plus spectaculaire en rénovation — et la plus encadrée. C\'est ce qui transforme un appartement cloisonné en loft lumineux. Mais ça ne s\'improvise pas.',
          sections: [
            {
              title: 'Identifier un mur porteur',
              content: 'Les indices : épaisseur > 15 cm (un mur porteur en pierre fait 20-60 cm, en béton 15-20 cm, en brique 20-30 cm). Les murs de façade sont TOUJOURS porteurs. Les murs de refend (perpendiculaires aux façades) sont généralement porteurs. Les cloisons de distribution (placo, carreaux de plâtre, briques de 5-7 cm) ne sont PAS porteuses. En cas de doute : frapper le mur (porteur = son plein/sourd, cloison = son creux). Ou percer un petit trou pour voir l\'épaisseur et le matériau. Ou consulter les plans de l\'immeuble (architecte de la copropriété, syndic).'
            },
            {
              title: 'La procédure pour ouvrir un mur porteur',
              content: 'ÉTAPE 1 : Étude structure par un BET (Bureau d\'Études Techniques). Obligatoire. Coût : 500-2 000 €. Le BET dimensionne la poutre (IPN/HEA/HEB) qui va reprendre les charges au-dessus de l\'ouverture. ÉTAPE 2 : Accord de la copropriété (assemblée générale) si immeuble collectif. Obligatoire même si le mur est « chez vous ». Fournir l\'étude BET + plans. ÉTAPE 3 : Assurance dommages-ouvrage (obligatoire légalement, souvent oubliée). ÉTAPE 4 : Travaux par une entreprise qualifiée. Étaiement provisoire → découpe → pose de la poutre → scellement → dépose de l\'étaiement. ÉTAPE 5 : Constat de conformité après travaux.'
            },
            {
              title: 'Les types d\'ouvertures',
              content: 'Ouverture complète (mur supprimé) : la plus spectaculaire. Poutre IPN/HEA/HEB + poteaux aux extrémités si nécessaire. La poutre peut être apparente (style industriel) ou noyée dans un coffrage (faux plafond). Ouverture partielle (porte, passe-plat) : linteau acier au-dessus de l\'ouverture. Plus simple et moins cher. Ouverture avec allège conservée : mur coupé à 90-110 cm de hauteur → crée un comptoir/bar. La partie basse reste porteuse → plus simple structurellement. Arche : ouverture cintrée — esthétique dans l\'ancien, reprend les codes architecturaux existants.'
            },
            {
              title: 'Budget et délais',
              content: 'Étude BET : 500-2 000 €. Ouverture simple (porte dans mur porteur) : 2 000-5 000 €. Ouverture large (3-4 m, cuisine/salon) : 5 000-15 000 €. Suppression complète d\'un mur porteur (5-6 m) : 8 000-20 000 €. Délai travaux : 2-5 jours pour l\'ouverture elle-même. Délai administratif (copropriété) : 2-6 mois (attente AG). C\'est souvent le délai le plus long du projet. Attention : les travaux génèrent beaucoup de poussière et de bruit — prévenir les voisins et protéger le chantier.'
            }
          ],
          keyPoints: [
            'Un BET est OBLIGATOIRE pour toute ouverture dans un mur porteur — non négociable',
            'En copropriété : accord en AG obligatoire, même pour un mur « chez soi »',
            'L\'IPN (poutre acier) reprend les charges — elle peut être apparente (indus) ou cachée',
            'Le délai d\'AG de copropriété (2-6 mois) est souvent le plus long du projet',
            'Budget : 5 000-15 000 € pour une ouverture cuisine/salon classique'
          ],
          tips: [
            'Anticiper : demander les plans de l\'immeuble au syndic DÈS la première visite — ça accélère tout',
            'L\'IPN apparente peinte en noir mat est devenue un élément déco à part entière — la montrer fièrement plutôt que la cacher',
            'Prévoir un budget « copropriété » dans le devis (honoraires BET + huissier pour constat avant/après travaux)'
          ],
          tags: ['mur porteur', 'ouverture', 'IPN', 'structure', 'BET', 'copropriété']
        },
        {
          id: 'fenetres-menuiseries',
          category: 'Structure & Gros Œuvre',
          title: 'Fenêtres & Menuiseries Extérieures',
          subtitle: 'Le maillon thermique et esthétique de la façade',
          summary: 'Les fenêtres représentent 10-15% des déperditions thermiques d\'un logement. Les remplacer améliore le confort thermique, acoustique, et transforme l\'esthétique de l\'intérieur. En copropriété, c\'est souvent le seul élément de façade que le propriétaire peut changer.',
          sections: [
            {
              title: 'Simple, double ou triple vitrage',
              content: 'Simple vitrage (verre 4 mm) : Ug ~5,8 W/m².K. Ne devrait plus exister. Remplacer d\'urgence. Double vitrage standard (4/16/4) : Ug ~1,1 W/m².K. Le standard actuel. Double vitrage à isolation renforcée (ITR, avec couche basse émissivité + gaz argon) : Ug ~0,7-1,0 W/m².K. Le meilleur rapport qualité/prix. Triple vitrage (4/12/4/12/4 argon) : Ug ~0,5-0,7 W/m².K. Surtout utile en orientation nord ou en construction passive. Plus lourd, plus épais, plus cher. En rénovation standard : le double vitrage ITR argon est le choix optimal.'
            },
            {
              title: 'Les matériaux de menuiserie',
              content: 'PVC : le moins cher (300-600 €/fenêtre standard), bon isolant, entretien zéro. Limite : esthétique basique, jaunissement possible, non recyclable facilement. Aluminium : fin (plus de lumière), design contemporain, large palette de couleurs (RAL). Moins isolant que le PVC (pont thermique — choisir à rupture de pont thermique). 500-1 000 €/fenêtre. Bois : le plus noble, excellent isolant naturel, aspect traditionnel (patrimoine haussmannien). Nécessite entretien (lasure/peinture tous les 5-10 ans). 600-1 200 €/fenêtre. Mixte bois-alu : bois intérieur (chaleur) + alu extérieur (protection, zéro entretien). Le haut de gamme. 800-1 500 €/fenêtre.'
            },
            {
              title: 'Pose en rénovation vs dépose totale',
              content: 'Pose en rénovation (la plus courante) : la nouvelle fenêtre est posée sur le dormant existant (le cadre ancien reste en place). Rapide (1-2h par fenêtre), propre, pas de maçonnerie. Limite : perte de surface vitrée (le nouveau cadre + l\'ancien = plus épais). Dépose totale : le dormant ancien est arraché, la nouvelle fenêtre est posée dans la maçonnerie. Plus de lumière (cadre optimisé), meilleure isolation (joint neuf). Plus long (demi-journée), plus cher, nécessite des reprises de maçonnerie et de finition intérieure (enduit, peinture). Conseil : en rénovation lourde (tout est refait), opter pour la dépose totale. En remplacement simple, la pose en rénovation suffit.'
            },
            {
              title: 'Réglementation et copropriété',
              content: 'En copropriété : les fenêtres font partie de la façade = parties communes. Remplacement soumis à accord de l\'AG ou du règlement de copropriété. Souvent : obligation de respecter le modèle, la couleur, et les proportions existantes. Urbanisme : en secteur ABF (Architectes des Bâtiments de France), les menuiseries doivent respecter des prescriptions strictes (bois obligatoire, couleur imposée, petits carreaux). Aides : MaPrimeRénov\' pour le remplacement de fenêtres (simple → double/triple vitrage), CEE, TVA 5,5%. Artisan RGE obligatoire.'
            }
          ],
          keyPoints: [
            'Double vitrage ITR argon = le standard optimal en rénovation (Ug ~1,0)',
            'Aluminium à rupture de pont thermique = le choix design contemporain',
            'Bois = le choix patrimonial (haussmannien, ABF) et le meilleur isolant naturel',
            'Dépose totale > pose en rénovation en termes de performance — à privilégier si rénovation lourde',
            'En copropriété : respect du modèle de fenêtre imposé — vérifier AVANT de commander'
          ],
          tips: [
            'En immeuble haussmannien avec ABF : menuiseries bois peintes en blanc ou gris (RAL imposé) — anticiper le délai de validation (2-4 mois)',
            'Remplacer les fenêtres en même temps que l\'isolation = le duo gagnant — et les aides sont plus élevées en « bouquet de travaux »',
            'Le survitrage (verre ajouté sur fenêtre existante) est une solution provisoire acceptable si le budget ne permet pas le remplacement'
          ],
          tags: ['fenêtre', 'vitrage', 'menuiserie', 'isolation', 'thermique', 'acoustique']
        },
        // --- PATHOLOGIES DU BÂTI ANCIEN ---
        {
          id: 'murs-anciens-pierre',
          category: 'Pathologies',
          title: 'Murs Anciens, Pierre & Enduits',
          subtitle: 'Respecter le bâti pour mieux le rénover',
          summary: 'Les murs anciens (pierre, brique, terre, pan de bois) ont leur propre logique constructive. Les traiter comme des murs modernes est la pire erreur en rénovation : ciment sur pierre = catastrophe. Comprendre le bâti ancien est indispensable.',
          sections: [
            {
              title: 'Le principe du mur ancien : il respire',
              content: 'Un mur ancien en pierre, brique ou terre est « perspirant » : l\'humidité du sol remonte par capillarité ET s\'évapore à travers le mur (intérieur + extérieur). C\'est son mode de régulation naturel. Si on bloque cette respiration (enduit ciment, peinture étanche, isolation non perspirante), l\'eau reste piégée dans le mur → dégradations, salpêtre, moisissures, gel/dégel qui fait éclater la pierre. RÈGLE D\'OR : sur un mur ancien, tout doit être perspirant (enduit à la chaux, isolation fibre de bois, peinture minérale).'
            },
            {
              title: 'Les enduits',
              content: 'CHAUX AÉRIENNE (CL) : la plus fine, la plus noble. Finitions lisses ou brossées. Pour l\'intérieur et les finitions extérieures. CHAUX HYDRAULIQUE (NHL) : plus résistante, pour les zones exposées (soubassements, extérieur). NHL 2 (la plus souple) à NHL 5 (la plus dure). TADELAKT : enduit de chaux marocain, poli et savonné, étanche et lisse. Pour salle de bain, douche, crédence. Magnifique. BADIGEON DE CHAUX : peinture à la chaux (chaux + eau + pigments). Texture vibrante, matière vivante. INTERDIT : enduit ciment sur mur ancien. Le ciment est trop dur, imperméable, et incompatible avec le mouvement du mur. Il piège l\'humidité et fait éclater la pierre autour.'
            },
            {
              title: 'Isolation des murs anciens',
              content: 'INTERDIT : polystyrène, polyuréthane (non perspirants). RECOMMANDÉ : fibre de bois (perspirant, bon déphasage), liège (perspirant, imputrescible), laine de chanvre/lin (biosourcé, perspirant). Technique : isolation par l\'intérieur avec panneau fibre de bois (6-10 cm) + enduit de finition à la chaux. Ou projection d\'un enduit chaux-chanvre (isolation + finition en un seul produit, épaisseur 6-12 cm). Isolation par l\'extérieur : possible mais attention au patrimoine (modification de l\'aspect de la façade, interdite en secteur ABF). Le mieux : faire appel à un artisan spécialisé « bâti ancien » — c\'est un savoir-faire spécifique.'
            },
            {
              title: 'Pierre apparente : révéler ou enduire',
              content: 'Mur en pierre apparente : magnifique SI la pierre est de qualité (calcaire, granit, meulière taillée). Déjointoyer au mortier de chaux (NHL 2 ou NHL 3,5). Ne JAMAIS rejointoyer au ciment. Pierre apparente + joints à la chaux = esthétique authentique et performance. Mur en pierre à enduire : quand la pierre est hétérogène ou laide (moellon tout-venant), un enduit à la chaux est préférable. L\'enduit à la chaux est lui-même très beau (texture, teinte naturelle, jeux de lumière). Le choix pierre apparente vs enduit est un choix esthétique ET technique — certains murs ne supportent pas d\'être mis à nu (gel, pluie).'
            }
          ],
          keyPoints: [
            'RÈGLE D\'OR : sur mur ancien, tout doit être perspirant (chaux, fibre de bois, liège)',
            'JAMAIS de ciment sur pierre/brique ancienne — c\'est la cause n°1 de dégradation',
            'Fibre de bois ou chaux-chanvre = les isolants de référence pour le bâti ancien',
            'Le tadelakt et le badigeon de chaux sont des finitions magnifiques ET techniques',
            'Pierre apparente → rejointoyer à la chaux NHL, jamais au ciment'
          ],
          tips: [
            'Si un artisan propose du ciment sur un mur en pierre : refuser et changer d\'artisan. C\'est un signal d\'incompétence sur le bâti ancien.',
            'L\'enduit chaux-chanvre projeté est une solution tout-en-un (isolation + finition) parfaite pour les murs irréguliers — pas besoin d\'ossature',
            'La formation « Maisons Paysannes de France » ou « Fondation du Patrimoine » forme au bâti ancien — excellent pour se spécialiser'
          ],
          tags: ['pierre', 'chaux', 'enduit', 'bâti ancien', 'tadelakt', 'perspirant']
        },
        // --- PATHOLOGIES ---
        {
          id: 'merule-champignons-bois',
          category: 'Pathologies',
          title: 'Mérule & Champignons du Bois',
          subtitle: 'Identifier et traiter la pourriture',
          summary: 'La mérule (Serpula lacrymans) est le champignon le plus destructeur du bâti en France. Capable de traverser les murs et de détruire une charpente en quelques mois, sa présence est une obligation légale de déclaration en mairie. Tout architecte d\'intérieur intervenant en rénovation DOIT savoir la reconnaître.',
          sections: [
            {
              title: 'La mérule pleureuse (Serpula lacrymans)',
              content: 'Le « cancer du bâtiment ». Champignon lignivore qui se nourrit de la cellulose du bois et le transforme en matière friable. Conditions d\'apparition : humidité >20% dans le bois + obscurité + température 20-26°C + confinement (pas de ventilation). Signes visuels : mycélium blanc cotonneux, filaments gris (syrrotes) capables de traverser la maçonnerie, fructification brune en forme de galette avec bord blanc. Le bois attaqué se casse en cubes (pourriture cubique). Odeur de champignon forte et caractéristique. Déclaration obligatoire en mairie (loi Alur, art. L133-7 du CCH). Zones les plus touchées : Bretagne, Nord, Normandie, Île-de-France.'
            },
            {
              title: 'Autres champignons lignivores',
              content: 'Coniophore des caves (Coniophora puteana) : très fréquent, bois en contact avec la maçonnerie humide. Pourriture brune cubique, moins destructeur que la mérule mais courant. Lenzite des poutres (Gloeophyllum sepiarium) : attaque les bois extérieurs et les bois de charpente mal ventilés. Fibroporia vaillantii : filaments blancs ressemblant à la mérule mais moins agressif. Chaetomium globosum : champignon de surface (moisissure noire) sur bois très humide — signe avant-coureur. Polypores : champignons en « étagère » sur les poutres — signe de pourriture avancée. TOUS se développent uniquement si le bois est humide >20%. La solution est TOUJOURS de traiter la CAUSE de l\'humidité avant de traiter le champignon.'
            },
            {
              title: 'Diagnostic et détection',
              content: 'Signes d\'alerte : bois qui sonne creux au toucher, parquet qui s\'enfonce, plinthes qui se décollent, odeur de moisi/champignon, taches brunes sur les murs, mycélium visible (blanc, gris). Outils : hygromètre à pointes pour mesurer le taux d\'humidité du bois (>20% = risque). Inspection visuelle : caves, vides sanitaires, derrière les doublages, sous les baignoires, autour des fuites. Diagnostic professionnel obligatoire avant vente dans certaines communes (zones à risque définies par arrêté préfectoral). Le diagnostic coûte 200-500€. En cas de doute, ne JAMAIS recouvrir — ouvrir et vérifier.'
            },
            {
              title: 'Traitement et prévention',
              content: 'Traitement curatif mérule : supprimer la source d\'humidité + enlever tous les bois atteints + brûler les bois contaminés + décroûter les enduits sur 1m autour du foyer + traitement fongicide par injection dans la maçonnerie + ventilation renforcée. Coût : 5 000 à 50 000€ selon l\'étendue. Traitement curatif autres champignons : supprimer la cause d\'humidité + remplacer les bois atteints + traitement fongicide préventif. Prévention : ventilation correcte (VMC), pas de bois en contact direct avec la maçonnerie humide (cales, membrane), traitement préventif des bois de classe 1-2, entretien des toitures et évacuations. JAMAIS isoler un mur par l\'intérieur sans vérifier l\'état du bois derrière.'
            }
          ],
          keyPoints: [
            'La mérule est une OBLIGATION DE DÉCLARATION en mairie — ne pas la signaler est un délit',
            'Humidité >20% dans le bois = danger. Supprimer la CAUSE de l\'humidité AVANT de traiter',
            'Le mycélium de la mérule traverse les murs — elle se propage d\'un logement à l\'autre',
            'Coût de traitement : 5 000 à 50 000€ — c\'est le risque le plus cher en rénovation',
            'En visite d\'état des lieux : vérifier caves, derrière les doublages, sous les baignoires'
          ],
          tips: [
            'Acheter un hygromètre à pointes (30€) et mesurer systématiquement le taux d\'humidité des bois lors du relevé d\'existant',
            'En zone à risque mérule (Bretagne, Nord) : exiger un diagnostic avant tout projet de rénovation',
            'Quand un client dit « ça sent le moisi dans la cave » — TOUJOURS aller vérifier, c\'est votre responsabilité professionnelle'
          ],
          tags: ['mérule', 'champignon', 'bois', 'pathologie', 'humidité', 'diagnostic']
        },
        {
          id: 'insectes-xylophages',
          category: 'Pathologies',
          title: 'Insectes Xylophages',
          subtitle: 'Termites, vrillettes, capricornes',
          summary: 'Les insectes xylophages (« mangeurs de bois ») sont présents dans toute la France. Termites au sud, vrillettes et capricornes partout. Un diagnostic est obligatoire à la vente dans les zones classées. Savoir reconnaître les dégâts évite des catastrophes structurelles.',
          sections: [
            {
              title: 'Termites',
              content: 'Les plus destructeurs. Vivent en colonies souterraines (des centaines de milliers d\'individus). Remontent dans le bâti par les fondations. Mangent le bois de l\'intérieur sans trace extérieure visible — quand on voit les dégâts, c\'est souvent trop tard. Le bois sonne creux, les galeries sont parallèles au fil du bois, remplies de concrétions (terre + excréments). Zones les plus touchées : Sud-Ouest, façade atlantique, pourtour méditerranéen, Île-de-France. Diagnostic termites obligatoire à la vente dans les communes classées par arrêté préfectoral. Déclaration en mairie obligatoire si infestation détectée. Traitement : barrière chimique dans le sol + pièges/appâts + remplacement des bois. Coût : 2 000-10 000€.'
            },
            {
              title: 'Vrillettes (petites et grosses)',
              content: 'Petite vrillette (Anobium punctatum) : l\'insecte le plus courant en France. Trous de sortie ronds de 1-3mm (les petits trous dans les vieux meubles). Larves dans le bois pendant 2-4 ans. Attaque les bois résineux ET feuillus. Sciure fine en petites billes. Grosse vrillette (Xestobium rufovillosum) : trous de 3-4mm, sciure en petites lentilles. Préfère les bois déjà attaqués par un champignon. Plus destructrice. Signe spécifique : bruit de « horloge de la mort » (le mâle tape sa tête contre le bois pour attirer la femelle — audible la nuit dans les charpentes). La vermoulure (sciure) fraîche = infestation active. Sciure grise et sèche = ancienne infestation potentiellement inactive.'
            },
            {
              title: 'Capricornes et lyctus',
              content: 'Capricorne des maisons (Hylotrupes bajulus) : le plus gros dégât après les termites. Attaque uniquement les résineux (charpentes, solives en sapin/pin). Larves de 20mm qui creusent des galeries ovales pendant 3-10 ANS. Trous de sortie ovales 6-10mm. Sciure en petits tonneaux. On entend les larves grignoter dans la nuit (bruit de grattement). Peut réduire une poutre à une coquille vide en quelques années. Lyctus : attaque uniquement les feuillus (parquet chêne, meubles). Trous ronds 1-2mm, sciure très fine comme de la farine. Détectable au tas de sciure fraîche sous le meuble/parquet.'
            },
            {
              title: 'Traitement et prévention',
              content: 'Traitement curatif bois : injection sous pression de produit insecticide + fongicide dans les bois (par un professionnel certifié CTB-A+). Bûchage : retirer les parties trop endommagées et remplacer (consolidation par résine + armatures si poutre porteuse). Traitement préventif : tous les bois de construction doivent être traités classe 2 minimum. En rénovation, traiter préventivement toutes les boiseries lors du chantier. Garantie décennale obligatoire sur le traitement. Coût traitement charpente complète : 1 500-5 000€. Le CTB-A+ est le seul label qui garantit la qualité du traitement. Attention aux « diagnostiqueurs-traiteurs » : conflit d\'intérêts possible — faire diagnostiquer par un indépendant.'
            }
          ],
          keyPoints: [
            'Diagnostic termites obligatoire à la vente dans toutes les zones classées par arrêté préfectoral',
            'Vermoulure (sciure) FRAÎCHE = infestation active. Sciure grise et ancienne ≠ danger immédiat',
            'Les termites mangent le bois de l\'intérieur — quand c\'est visible, c\'est souvent grave',
            'Le capricorne attaque les résineux (charpentes), le lyctus attaque les feuillus (parquets chêne)',
            'Toujours exiger un traitement CTB-A+ avec garantie décennale'
          ],
          tips: [
            'Lors du relevé d\'existant : sonder les bois au poinçon (outil simple) — s\'il s\'enfonce anormalement, il y a un problème',
            'Vermoulure fraîche sur le parquet chêne du client = lyctus actif. Ne pas paniquer, c\'est traitable, mais ne pas poser un nouveau sol dessus sans traitement',
            'En zone termites : exiger le diagnostic à chaque projet, même si le client ne le mentionne pas'
          ],
          tags: ['insectes', 'termites', 'vrillettes', 'capricorne', 'bois', 'pathologie', 'diagnostic']
        },
        {
          id: 'pathologies-pierre',
          category: 'Pathologies',
          title: 'Pathologies de la Pierre',
          subtitle: 'Gel, sels, crypto, érosion',
          summary: 'La pierre naturelle — calcaire, grès, granit — est sujette à des pathologies spécifiques qui doivent être identifiées AVANT toute intervention. Un mauvais diagnostic mène à un mauvais traitement, qui aggrave souvent le problème.',
          sections: [
            {
              title: 'Altérations dues à l\'eau',
              content: 'Remontées capillaires : l\'eau du sol remonte dans les murs par capillarité. Crée des auréoles à la base des murs (0-1,5m), des efflorescences blanches (sels), et un environnement propice aux champignons. Traitement : drainage extérieur + injection de résine hydrophobe en pied de mur + enduit de cuvelage perspirant. JAMAIS d\'enduit ciment qui bloque l\'eau et aggrave la situation. Infiltrations : pénétration d\'eau par la toiture, les joints, les fissures. Créent des taches, des dépôts calcaires, des décollements d\'enduit. Gel/dégel : l\'eau dans la pierre gèle en hiver, augmente de volume de 9%, fait éclater la pierre. Cause des desquamations (écailles), des épaufrures (éclats), des délitements.'
            },
            {
              title: 'Altérations par les sels',
              content: 'Efflorescences : dépôts blancs cristallins en surface — les sels solubles contenus dans la pierre ou amenés par l\'eau se déposent en séchant. Souvent inoffensives en surface, mais signe d\'un problème d\'humidité sous-jacent. Cryptoflorescences : les sels cristallisent DANS la pierre (sous la surface) — beaucoup plus dangereux car ils font éclater la pierre de l\'intérieur. Causes : sels du sol (remontées capillaires), ciment (incompatible avec la pierre ancienne — le ciment est riche en sels), sels de déverglaçage, pollution atmosphérique. Traitement : identifier et supprimer la source de sels + compresses de dessalement (cataplasme de papier + eau distillée qui attire les sels).'
            },
            {
              title: 'Altérations biologiques',
              content: 'Algues et mousses : colonisation verte en surface dans les zones humides et ombragées. Retiennent l\'humidité et accélèrent la dégradation. Traitement : brossage + biocide (attention à la concentration pour ne pas tacher). Lichens : croûtes grises/jaunes adhérentes — parfois protectrices (avis divisé). Plantes supérieures : racines qui s\'infiltrent dans les joints et font éclater la maçonnerie. Lierre : la tige principale peut faire 10cm de diamètre et désorganiser un mur entier. Croûtes noires (sulfatation) : en milieu urbain, le SO₂ de la pollution réagit avec le calcaire et forme du gypse noir. Irréversible — il faut remplacer la pierre ou laser-nettoyer.'
            },
            {
              title: 'Diagnostic et intervention',
              content: 'Avant toute intervention sur de la pierre : identifier la nature exacte de la pierre (calcaire tendre, calcaire dur, grès, granit). Chaque pierre a ses pathologies spécifiques. Cartographie des désordres : dresser un relevé précis des pathologies sur un plan/photo. Mesurer l\'humidité (hygromètre), la profondeur des altérations, l\'état des joints. Principe fondamental : la pierre doit RESPIRER. Tout traitement imperméabilisant en surface est une erreur qui piège l\'humidité et accélère la dégradation. Nettoyage : JAMAIS de nettoyeur haute pression sur de la pierre tendre (détruit la calcin, la couche protectrice). Méthodes douces : nébulisation, gommage, laser, micro-sablage. Consolidation : injection de chaux dans les fissures, ragréage en pierre reconstituée (mortier pierre), remplacement des pierres éclatées à l\'identique.'
            }
          ],
          keyPoints: [
            'JAMAIS de ciment sur pierre ancienne — le ciment apporte des sels et empêche la pierre de respirer',
            'JAMAIS de nettoyeur haute pression sur pierre tendre — il détruit la calcin protectrice',
            'L\'eau est l\'ennemi n°1 : supprimer la source d\'humidité AVANT de traiter la pathologie',
            'Efflorescences blanches = signe d\'humidité sous-jacente, pas juste un problème esthétique',
            'Toujours identifier la nature exacte de la pierre avant intervention'
          ],
          tips: [
            'Prendre un échantillon de pierre et le montrer à un tailleur de pierre ou au LRMH (Laboratoire de Recherche des Monuments Historiques) pour identification',
            'Les remontées capillaires créent une « ligne de marée » visible à 0,5-1,5m du sol — la repérer systématiquement lors du relevé',
            'En copropriété haussmannienne, les pierres de façade sont souvent du calcaire lutétien — fragile au gel, sensible à la pollution'
          ],
          tags: ['pierre', 'pathologie', 'humidité', 'sels', 'diagnostic', 'restauration']
        },
        {
          id: 'etancheite-pieces-humides',
          category: 'Sols & Finitions',
          title: 'Étanchéité Pièces Humides (SPEC)',
          subtitle: 'Le système qui évite les dégâts des eaux',
          summary: 'Le SPEC (Système de Protection à l\'Eau sous Carrelage) est OBLIGATOIRE dans les pièces humides selon le DTU 65.10. C\'est la membrane d\'étanchéité appliquée SOUS le carrelage qui empêche l\'eau de pénétrer dans la structure. Son absence est la cause n°1 des dégâts des eaux en salle de bain.',
          sections: [
            {
              title: 'Pourquoi le SPEC est obligatoire',
              content: 'Le carrelage et ses joints ne sont PAS étanches. L\'eau finit toujours par passer au travers (micro-fissures, joints poreux, jonctions). Sans membrane d\'étanchéité sous le carrelage, l\'eau pénètre dans la chape, le plancher, et ruine la structure ou le plafond du voisin du dessous. Le DTU 65.10 (pose de carrelage) et le classement UPEC imposent une protection à l\'eau dans toutes les pièces humides : salle de bain, salle d\'eau, WC avec lave-mains, buanderie, cuisine professionnelle. En copropriété, l\'absence de SPEC engage votre responsabilité civile et décennale en cas de sinistre.'
            },
            {
              title: 'Zones de classement (EB+p et EC)',
              content: 'EB+privatif : salle de bain et douche en logement. Nécessite un SPEC sur TOUTE la surface du sol + remontées en plinthe (minimum 10cm, 200cm en zone douche). EB+collectif : douche collective, vestiaire. SPEC renforcé. EC : cuisine pro, local technique. SPEC + siphon de sol + pentes d\'écoulement. Les murs en zone de projection d\'eau (zone douche sur 200cm de haut, zone baignoire sur 60cm au-dessus du rebord) doivent AUSSI recevoir un SPEC. Zone sèche (zone 0 des murs) : pas de SPEC obligatoire mais recommandé en sol.'
            },
            {
              title: 'Types de SPEC',
              content: 'SEL (Système d\'Étanchéité Liquide) : résine liquide appliquée au rouleau en 2 couches avec bande de pontage aux angles et jonctions. Le plus courant en rénovation. Marques : Mapei Mapelastic, Weber.tec Superflex, Sika. Séchage : 4-24h entre couches. SPEC en feuille : membrane préfabriquée (natte de découplage type Schlüter DITRA ou Wedi) collée sur le support. Plus épaisse mais plus fiable. Panneaux prêts à carreler : Wedi, Lazer, Jackoboard. Support + isolant + étanchéité en un seul produit. Idéal pour les douches à l\'italienne (receveur intégré). Bande d\'étanchéité : OBLIGATOIRE à chaque angle rentrant, jonction sol/mur, passage de canalisation. C\'est le point faible n°1 — ne JAMAIS l\'oublier.'
            },
            {
              title: 'Mise en œuvre et erreurs courantes',
              content: 'Ordre : support propre et sec → primaire d\'accrochage → 1ère couche SEL → bandes de pontage aux angles → 2ème couche SEL (perpendiculaire à la 1ère) → séchage complet → pose du carrelage. Épaisseur minimale : 1mm sec (vérifier avec les fiches techniques). Erreurs fatales : oublier les bandes aux angles, appliquer en une seule couche, ne pas remonter sur les murs (10cm minimum, 200cm en zone douche), ne pas traiter les traversées de canalisations (manchons d\'étanchéité), carreler avant séchage complet. Pente : 1-2% vers le siphon pour les douches à l\'italienne. La pente se fait DANS la chape, pas avec le carrelage. Coût : matériaux SEL 15-30€/m², pose 20-40€/m² en plus du carrelage.'
            }
          ],
          keyPoints: [
            'Le SPEC est OBLIGATOIRE dans toute pièce humide — son absence est un défaut de construction',
            'Le carrelage et ses joints NE SONT PAS étanches — seule la membrane protège',
            'Les angles et jonctions sont les points faibles — TOUJOURS poser des bandes de pontage',
            'Remonter le SPEC de 200cm en zone douche, pas juste 10cm',
            'En copropriété, votre responsabilité est engagée si dégât des eaux par défaut d\'étanchéité'
          ],
          tips: [
            'Demander au carreleur une PHOTO de chaque étape d\'étanchéité (SEL + bandes) AVANT qu\'il pose le carrelage — c\'est votre preuve en cas de sinistre',
            'Les panneaux Wedi/Lazer sont plus chers mais éliminent le risque humain — à recommander pour les douches à l\'italienne',
            'Prévoir le SPEC dans le budget dès le chiffrage initial — les clients le considèrent comme « invisible » mais c\'est indispensable'
          ],
          tags: ['étanchéité', 'SPEC', 'salle de bain', 'douche', 'DTU', 'carrelage']
        },
        {
          id: 'preparation-supports-sol',
          category: 'Sols & Finitions',
          title: 'Préparation des Supports de Sol',
          subtitle: 'Ragréage, chapes, sous-couches',
          summary: 'Un beau sol commence par un support parfait. Ragréage, chape, primaire, sous-couche acoustique — chaque couche a un rôle précis. Les confondre ou les oublier, c\'est garantir des problèmes dans les mois qui suivent la livraison.',
          sections: [
            {
              title: 'La chape',
              content: 'Couche de mortier (ciment + sable + eau) coulée sur la dalle brute pour la mettre de niveau et enrober les réseaux (chauffage au sol, gaines électriques). Épaisseur : 5-10cm. Types : chape traditionnelle (manuelle, séchage 3 semaines), chape fluide autonivelante (pompée, séchage 1-2 semaines, planéité parfaite ±3mm). La chape fluide est le standard actuel en rénovation. Séchage : CRITIQUE. Taux d\'humidité résiduelle <2% pour un carrelage, <0,5% pour un parquet. Mesurer avec un hygromètre à carbure (pas un hygromètre de surface qui est imprécis). Poser un sol sur une chape humide = décollement, cloquage, moisissures garantis.'
            },
            {
              title: 'Le ragréage',
              content: 'Enduit autolissant fin (3-10mm) appliqué sur la chape ou l\'ancien sol pour rattraper les petites imperfections. Ce n\'est PAS une chape — il ne peut pas combler plus de 10mm. Primaire d\'accrochage OBLIGATOIRE avant ragréage (sinon il se décolle). Types : ragréage P3 (usage courant, séchage 24-48h), ragréage fibré (pour supports fragiles ou fissurés), ragréage extérieur (terrasses). Coût : matériau 5-15€/m² + pose 10-20€/m². Avant ragréage : reboucher les trous/saignées au mortier de réparation, retirer les anciens colles et ragréages non adhérents, aspirer toute la poussière. Sur plancher bois : utiliser un ragréage FIBRÉ et poser un treillis anti-fissures.'
            },
            {
              title: 'Sous-couches et interpositions',
              content: 'Sous-couche acoustique : obligatoire en copropriété pour les sols flottants (parquet, LVT). Réduit les bruits d\'impact (ΔLw 15-20dB). Matériaux : mousse PE (basique), liège (excellent), fibre de bois (premium), caoutchouc recyclé. Épaisseur 2-5mm. Film pare-vapeur (polyane) : obligatoire sous tout sol flottant sur chape béton. Empêche l\'humidité résiduelle de remonter. Bande de désolidarisation périphérique : mousse compressible en tour de pièce qui permet au sol flottant de se dilater. Sans elle : le parquet gondole. Natte de découplage (type Schlüter DITRA) : membrane interposée entre le support et le carrelage. Absorbe les micro-mouvements du support et protège le carrelage des fissures. Indispensable sur plancher chauffant et supports fissurés.'
            },
            {
              title: 'Compatibilités et erreurs fréquentes',
              content: 'Parquet massif collé : chape + ragréage P3 + colle MS polymère. Taux d\'humidité chape <2%. JAMAIS sur plancher chauffant >28°C en surface. Parquet contrecollé flottant : chape + ragréage + pare-vapeur + sous-couche acoustique. Carrelage : chape + ragréage si nécessaire + SPEC en pièce humide + mortier-colle. LVT clipsé : chape + ragréage P3 (planéité parfaite requise — la moindre bosse se voit). Moquette : chape + ragréage + colle. Béton ciré : chape + primaire + 2 couches béton ciré + vernis. Erreurs fatales : poser sur une chape humide, oublier le primaire avant ragréage, oublier le pare-vapeur sous sol flottant, ne pas laisser de jeu périphérique pour le parquet, poser du parquet massif sur plancher chauffant haute température.'
            }
          ],
          keyPoints: [
            'Chape ≠ ragréage : la chape nivelle (5-10cm), le ragréage lisse (3-10mm)',
            'TOUJOURS mesurer l\'humidité de la chape avant pose : <2% carrelage, <0,5% parquet',
            'Le primaire d\'accrochage n\'est pas optionnel — sans lui le ragréage se décolle',
            'En copropriété, la sous-couche acoustique est OBLIGATOIRE sous tout sol flottant',
            'Film pare-vapeur OBLIGATOIRE sous sol flottant sur chape béton'
          ],
          tips: [
            'Prévoir 2-3 semaines de séchage de chape dans le planning — c\'est la cause n°1 de retard de chantier',
            'Demander un test d\'humidité au carbure le jour de la pose du sol — le carreleur/parqueteur doit refuser de poser si c\'est trop humide',
            'Sur ancien carrelage : poser par-dessus avec ragréage fibré plutôt que déposer (moins de bruit, moins de poussière, moins cher)'
          ],
          tags: ['sol', 'ragréage', 'chape', 'sous-couche', 'acoustique', 'préparation']
        },
        {
          id: 'isolation-murs-iti-ite',
          category: 'Isolation & Confort Thermique',
          title: 'Isolation des Murs (ITI / ITE)',
          subtitle: 'Par l\'intérieur ou par l\'extérieur',
          summary: 'L\'isolation des murs représente jusqu\'à 25% des déperditions thermiques d\'un bâtiment. Le choix entre ITI (Isolation Thermique par l\'Intérieur) et ITE (par l\'Extérieur) impacte directement la surface habitable, l\'esthétique, le budget et le confort.',
          sections: [
            {
              title: 'ITI — Isolation Thermique par l\'Intérieur',
              content: 'Principe : poser l\'isolant côté intérieur du mur, derrière un parement (placo). Techniques : doublage collé (polystyrène + placo, le plus fin, 4-10cm), doublage sur ossature métallique (laine de verre/roche entre montants, 7-15cm, plus performant), contre-cloison maçonnée (brique + isolant, ancien système). Avantages : coût modéré (30-80€/m² posé), pas besoin d\'autorisation d\'urbanisme, réalisable pièce par pièce, compatible copropriété (chaque lot peut isoler indépendamment). Inconvénients : PERTE DE SURFACE HABITABLE (5-15cm d\'épaisseur sur chaque mur extérieur), ponts thermiques non traités (planchers, refends), suppression de l\'inertie thermique du mur, risque de condensation si pare-vapeur mal posé.'
            },
            {
              title: 'ITE — Isolation Thermique par l\'Extérieur',
              content: 'Principe : envelopper le bâtiment d\'un manteau isolant à l\'extérieur. Techniques : enduit sur isolant (ETICS — polystyrène ou fibre de bois collé + enduit), bardage ventilé (isolant + lame d\'air + parement bois/métal/composite), vêture (panneaux isolants préfabriqués avec finition intégrée). Avantages : traitement des ponts thermiques (le manteau est continu), conservation de l\'inertie thermique intérieure, AUCUNE perte de surface habitable, pas de travaux intérieurs. Inconvénients : coût élevé (120-250€/m² posé), modification de la façade (autorisation d\'urbanisme nécessaire, PLU, ABF en zone protégée), compliqué en copropriété (vote AG), traitement délicat des ouvertures (fenêtres).'
            },
            {
              title: 'Choix de l\'isolant',
              content: 'Laine de verre (λ=0.032) : la plus utilisée, bon rapport performance/prix, 5-15€/m². Laine de roche (λ=0.035) : meilleure résistance au feu, bon affaiblissement acoustique. Polystyrène expansé PSE (λ=0.032) : léger, résistant à l\'humidité, le plus utilisé en ITE, mais non perspirant. Polystyrène extrudé XPS (λ=0.029) : très performant, résistant à la compression (sols), imperméable. Fibre de bois (λ=0.038) : excellent déphasage thermique (confort d\'été ++), perspirant, biosourcé — l\'isolant le plus adapté au bâti ancien et à la RE2020. Ouate de cellulose (λ=0.039) : insufflée dans les cloisons, bon rapport écologique, très bon déphasage. Liège (λ=0.040) : le premium — isolant + acoustique + étanche + imputrescible + esthétique. PIR/PUR (λ=0.022) : les plus performants au cm (épaisseur minimale), cher.'
            },
            {
              title: 'Ponts thermiques et précautions',
              content: 'Un pont thermique est une zone de l\'enveloppe où l\'isolation est interrompue : jonction mur/plancher (le plus critique — le plancher traverse le mur isolé), pourtour des fenêtres (tableaux, appuis), jonction mur/toiture, balcons (dalles en porte-à-faux). L\'ITI ne traite PAS les ponts thermiques linéaires (mur/plancher) — ils restent des voies de déperdition. L\'ITE les traite naturellement (le manteau est continu). Solutions en ITI : retours d\'isolation sur les planchers (bande isolante de 60cm), rupteurs de ponts thermiques (Schöck Rutherma en neuf). Pare-vapeur : côté chaud (intérieur) OBLIGATOIRE avec l\'ITI en climat froid. Frein-vapeur hygrovariable (Intello Plus) : s\'adapte aux saisons — la solution la plus sûre.'
            }
          ],
          keyPoints: [
            'ITI = perte de surface mais faisable en copropriété. ITE = performance optimale mais lourde à mettre en place',
            'L\'ITI ne traite PAS les ponts thermiques mur/plancher — prévoir des retours d\'isolation',
            'Fibre de bois = l\'isolant le plus polyvalent (thermique + acoustique + déphasage + perspirant + RE2020)',
            'Le pare-vapeur côté chaud est VITAL en ITI — sans lui, condensation dans le mur = moisissures',
            'Sur mur ancien en pierre : ITI en fibre de bois ou chaux-chanvre (perspirant). JAMAIS de polystyrène'
          ],
          tips: [
            'En rénovation d\'appartement : toujours informer le client de la perte de surface liée à l\'ITI — 10cm sur chaque mur = 1-2m² perdus dans un studio parisien',
            'Proposer un doublage en liège expansé dans les pièces où l\'espace est compté — 4cm de liège = R de 1.0 + acoustique + esthétique brut',
            'Vérifier le PLU et la zone ABF avant de proposer une ITE — en centre-ville ancien c\'est souvent interdit'
          ],
          tags: ['isolation', 'ITI', 'ITE', 'thermique', 'ponts thermiques', 'RE2020']
        },
        {
          id: 'acoustique-correction',
          category: 'Acoustique',
          title: 'Acoustique Intérieure & Correction',
          subtitle: 'RT60, absorption, confort sonore',
          summary: 'L\'isolation phonique bloque le son entre deux espaces. La correction acoustique améliore le confort sonore À L\'INTÉRIEUR d\'un espace : réverbération, écho, intelligibilité de la parole. C\'est ce qui fait qu\'un restaurant est agréable ou insupportable, qu\'un open-space fonctionne ou pas.',
          sections: [
            {
              title: 'Comprendre la réverbération',
              content: 'Le son se propage dans une pièce en se réfléchissant sur les surfaces dures (murs, plafond, sol, vitrage). Chaque réflexion perd un peu d\'énergie. Le temps de réverbération (RT60) mesure le temps que met un son pour décroître de 60dB après l\'arrêt de la source. RT60 trop long = écho, brouhaha, fatigue auditive (restaurant bruyant, open-space invivable). RT60 trop court = son mat, étouffé, impression de « boîte ouatée ». Valeurs cibles : salon/chambre 0,4-0,6s, bureau/salle de réunion 0,5-0,8s, restaurant 0,6-0,9s, salle de classe 0,4-0,6s. Un loft tout béton/verre/métal peut avoir un RT60 >2s — c\'est invivable pour une conversation.'
            },
            {
              title: 'Coefficient d\'absorption (αw)',
              content: 'Chaque matériau absorbe plus ou moins le son. αw = 0 : réfléchit tout (béton, verre, carrelage). αw = 1 : absorbe tout (laine minérale épaisse). Surfaces réfléchissantes (αw <0.15) : béton, plâtre lisse, verre, carrelage, marbre, métal. Surfaces moyennement absorbantes (αw 0.15-0.5) : bois, moquette fine, rideau léger, enduit texturé. Surfaces très absorbantes (αw >0.5) : laine minérale apparente, mousse acoustique, panneaux perforés + absorbant, rideau lourd, moquette épaisse, feutre acoustique. Le bois est un DIFFUSEUR (renvoie le son de manière homogène) — idéal pour une bonne acoustique.'
            },
            {
              title: 'Solutions de correction acoustique',
              content: 'Plafond : le levier n°1. Faux-plafond acoustique (dalles minérales perforées : Ecophon, Armstrong, OWA). Îlots acoustiques suspendus (design + performance). Baffles suspendus (lames verticales, très tendance). Panneaux de feutre acoustique découpés (BuzziSpace, De Vorm). Murs : panneaux acoustiques muraux (tissu tendu sur absorbant — Akustar, Offecct). Tasseaux bois espacés sur absorbant (le combo acoustique + déco le plus populaire). Claustra en feutre. Bibliothèques remplies (les livres sont d\'excellents absorbants). Sol : moquette (le meilleur absorbant de sol, αw 0.3-0.5). LVT acoustique (sous-couche intégrée). Tapis grand format. Mobilier : canapés en tissu, rideaux épais, coussins — chaque élément textile absorbe du son.'
            },
            {
              title: 'Applications par type d\'espace',
              content: 'Restaurant : LE cas le plus fréquent. Sol dur (hygiène) + plafond haut + murs durs = catastrophe. Solutions : faux-plafond acoustique ou baffles + banquettes en tissu + rideaux séparateurs + traitement mural partiel. Budget : 30-80€/m² de plafond acoustique. Open-space / coworking : cloisonnettes acoustiques (phone booths), baffles plafond, moquette, mobilier absorbant. Salon/séjour avec double hauteur : le son monte et revient — traiter le plafond (panneaux suspendus) et les murs hauts (panneau textile). Home cinéma : traitement de 50-70% des surfaces en absorbant + diffuseurs aux points de réflexion latérale. Escalier béton : cage très réverbérante — moquette sur marches + panneau absorbant mural.'
            }
          ],
          keyPoints: [
            'RT60 = le chiffre clé. Salon : 0,4-0,6s. Restaurant : 0,6-0,9s. Au-dessus = brouhaha',
            'Le plafond est le levier acoustique n°1 — c\'est la plus grande surface réfléchissante',
            'Les surfaces dures RÉFLÉCHISSENT le son, les surfaces molles/poreuses l\'ABSORBENT',
            'Le bois est un DIFFUSEUR, pas un absorbant — il homogénéise le son sans l\'étouffer',
            'La moquette reste le meilleur traitement de sol acoustique — ne pas la dénigrer systématiquement'
          ],
          tips: [
            'Test du claquement de mains : dans une pièce vide, claquer des mains. Si le son résonne longtemps et de manière métallique = problème de réverbération',
            'Proposer des tasseaux bois sur feutre acoustique noir en fond de mur — le client voit du design, vous apportez de la correction acoustique',
            'En restaurant, convaincre le client d\'investir 30-50€/m² en plafond acoustique — c\'est ce qui fait la différence entre un lieu « ambiance » et un lieu « trop bruyant »'
          ],
          tags: ['acoustique', 'réverbération', 'absorption', 'RT60', 'confort', 'restaurant']
        },
        {
          id: 'cloisons-placo',
          category: 'Cloisons & Distribution',
          title: 'Cloisons Placo (Plaques de Plâtre)',
          subtitle: 'BA13, BA15, hydro, feu — le standard du second œuvre',
          summary: 'La cloison en plaques de plâtre sur ossature métallique est la technique n°1 de distribution intérieure. Simple, rapide, performante — mais encore faut-il savoir prescrire le bon système pour le bon usage.',
          sections: [
            {
              title: 'Types de plaques',
              content: 'BA13 standard : plaque de plâtre de 12,5mm d\'épaisseur. Le classique universel. Bords amincis (BA) pour faciliter le jointement. BA15 : 15mm d\'épaisseur — meilleure performance acoustique et mécanique. Peu utilisée en résidentiel. Plaque hydrofuge (H1) : cartonnage vert. Résistante à l\'humidité. OBLIGATOIRE en salle de bain, cuisine, WC, buanderie. NE PAS utiliser de BA13 standard en pièce humide. Plaque coupe-feu (PPF) : rose. Résistante au feu (EI30 à EI120 selon le système). Obligatoire autour des gaines techniques, en ERP, et dans les parois séparatives. Plaque acoustique (Placo Phonique) : âme renforcée haute densité — gain de 3 dB par rapport à une BA13 standard. Plaque 4PRO (Placo) : combine hydro + phonique + solidité + haute dureté. Le haut de gamme résidentiel. Fabricants : Placo (Saint-Gobain) domine le marché français. Siniat (Etex), Knauf.'
            },
            {
              title: 'Ossature métallique',
              content: 'Rails (au sol et au plafond) : R48, R70, R90 (largeur en mm). Le rail se fixe au sol et au plafond pour guider les montants. Montants (verticaux) : M48, M70, M90. Insérés dans les rails, espacés de 60cm (entre-axe). La largeur du montant détermine l\'épaisseur de la cloison ET la possibilité d\'isolation. M48 = cloison fine (72mm finie avec 1 BA13 de chaque côté). Isolation limitée à 45mm. M70 = le standard (98mm finie). Isolant de 70mm. Le plus courant en résidentiel. M90 = pour forte isolation acoustique ou thermique (120mm finie). Isolant de 80-90mm. Système à double ossature : deux ossatures M48 séparées par un vide → meilleure performance acoustique (désolidarisation totale). Épaisseur ~170mm. Utilisé entre logements ou pour les exigences acoustiques élevées.'
            },
            {
              title: 'Performance acoustique',
              content: 'L\'affaiblissement acoustique (Rw en dB) dépend du système complet : Simple peau (1 BA13 / montant M70 + laine 70mm / 1 BA13) = Rw ~42 dB. Le MINIMUM acceptable entre deux pièces. Double peau (2 BA13 / montant M70 + laine 70mm / 2 BA13) = Rw ~50 dB. Le standard de qualité en résidentiel. Double ossature désolidarisée + double peau = Rw ~58-62 dB. Le niveau « mur mitoyen ». Pour atteindre un bon confort : séjour/chambre = Rw 45 dB minimum, chambre/chambre = Rw 50 dB, logement/logement = Rw 53 dB (NRA). La laine minérale dans l\'ossature est ESSENTIELLE — sans elle on perd 8-10 dB. TOUJOURS prescrire de la laine dans les cloisons, même si le client pense que « c\'est juste une cloison ».'
            },
            {
              title: 'Mise en œuvre et pièges',
              content: 'Les rails sont fixés au sol et au plafond avec une bande résiliente dessous (désolidarisation phonique — souvent oubliée par les plaquistes → pont phonique garanti). Les montants sont coupés 1cm plus courts que la hauteur et insérés dans les rails. Les plaques sont vissées aux montants (vis autoperceuses 25mm, tous les 30cm max). Les joints sont traités avec bande à joint + enduit (calicot). L\'enduit de finition (lissage) dépend de la finition voulue : Q1 = enduit de base (pas de finition visible — derrière un carrelage). Q2 = standard (revêtement épais — papier peint, enduit texturé). Q3 = soigné (peinture mate). Q4 = très soigné (peinture satinée/brillante, laque). Q5 = exceptionnel (laque tendue sous éclairage rasant). Demander du Q3 minimum pour de la peinture — le Q2 se voit systématiquement sous éclairage rasant. Le finisseur (plâtrier-enduiseur) est aussi important que le plaquiste — ne pas négliger ce poste.'
            }
          ],
          keyPoints: [
            'BA13 hydrofuge (H1) OBLIGATOIRE en pièce humide — jamais de BA13 standard en salle de bain',
            'Montant M70 + laine 70mm + double peau = le standard de qualité (Rw ~50 dB)',
            'La bande résiliente sous les rails est essentielle pour l\'acoustique — vérifier sur chantier',
            'Qualité de finition Q3 minimum pour de la peinture — préciser dans le CCTP',
            'TOUJOURS mettre de la laine minérale dans les cloisons — même les simples séparations'
          ],
          tips: [
            'Pour une salle de bain : plaque H1 + bande d\'étanchéité périphérique + SPEC derrière le carrelage = le trio gagnant',
            'La Placo Phonique (ou Siniat Prégyplac dB) coûte 2-3€/m² de plus que la BA13 standard — un surcoût ridicule pour un gain réel de confort',
            'Intégrer des renforts bois ou métal (Prégymétal) dans l\'ossature à l\'emplacement des meubles suspendus — sinon le client ne pourra rien accrocher'
          ],
          tags: ['cloison', 'placo', 'BA13', 'ossature', 'acoustique', 'plâtre', 'distribution']
        },
        {
          id: 'cloisons-carreaux-platre',
          category: 'Cloisons & Distribution',
          title: 'Carreaux de Plâtre & Briques',
          subtitle: 'Les cloisons maçonnées traditionnelles',
          summary: 'Avant le placo, il y avait les carreaux de plâtre et les briques plâtrières. Ces cloisons maçonnées restent pertinentes dans certains contextes — solidité, inertie, sensation de « vrai mur ». Mais elles sont plus lourdes, plus longues à poser et moins performantes acoustiquement.',
          sections: [
            {
              title: 'Carreaux de plâtre',
              content: 'Blocs de plâtre moulé de 66x50cm, épaisseur 5, 7 ou 10cm. Assemblage par emboîtement (rainure-languette) et colle-plâtre. Pleins : lourds (environ 80kg/m² en 7cm), bonne inertie, sensation de mur massif. Alvéolés : allégés (~50kg/m²), moins bonne acoustique. Hydrofuges : teintés en bleu, pour les pièces humides. Avantages : pas de finition joints (surface lisse — directement enduisible ou peignable), solidité mécanique (on peut visser directement dedans sans chevilles), bonne résistance au feu. Inconvénients : lourds (vérifier la charge sur le plancher — surtout dans l\'ancien), pose lente (maçonnerie traditionnelle), performance acoustique médiocre en faible épaisseur (Rw ~34 dB en 5cm, ~40 dB en 7cm, ~46 dB en 10cm). Prix : 8-15€/m² matière + pose 25-40€/m². Marques : Placoplatre (Caroplatre), Siniat (Prégy).'
            },
            {
              title: 'Briques plâtrières',
              content: 'Briques creuses en terre cuite de 3,5 à 7cm d\'épaisseur, montées au plâtre ou à la colle. C\'est la cloison traditionnelle des immeubles haussmanniens et des constructions pré-1970. Avantages : bonne inertie thermique, solidité, « son » de vrai mur (pas creux comme le placo), se découpe et se reprend facilement en rénovation. Inconvénients : très lourdes (~100kg/m² en 7cm), performance acoustique moyenne, nécessitent un enduit plâtre de finition (10-15mm — ajoute du poids et du temps). En rénovation d\'appartement ancien : les cloisons existantes sont souvent en briques plâtrières. NE PAS systématiquement les remplacer par du placo — elles sont souvent plus performantes acoustiquement que prévu (masse + enduit épais). Les conserver et les reprendre quand possible.'
            },
            {
              title: 'Béton cellulaire',
              content: 'Blocs de béton cellulaire autoclavé (Ytong, Siporex). Très léger (~17kg/bloc de 62,5x25x7cm), excellent isolant thermique (λ ~0,10-0,16 W/m.K), résistant au feu, hydrofuge dans la masse. Collé à la colle-ciment. Épaisseurs : 7, 10, 15, 20cm. Avantages : le plus léger des matériaux de cloison maçonnée, bon isolant thermique, se coupe facilement à la scie égoïne. Inconvénients : friable (difficile de fixer des objets lourds — chevilles spéciales), acoustique médiocre (trop léger), aspect poreux (nécessite un enduit ou un primaire épais avant peinture). Usage : cloisons dans les combles (plancher à faible portance), contre-cloisons isolantes, construction neuve. Moins pertinent en rénovation résidentielle que le placo ou les carreaux de plâtre.'
            },
            {
              title: 'Comparatif et choix',
              content: 'Budget serré + rapidité → placo BA13 M70. Meilleure acoustique → placo double peau + laine. Solidité + « vrai mur » → carreaux de plâtre 10cm. Légèreté (plancher fragile) → placo ou béton cellulaire. Pièce humide → placo H1 ou carreaux de plâtre hydrofuges. Rénovation haussmannien → conserver les briques existantes quand possible. ERP / coupe-feu → placo PPF (plaques coupe-feu) sur ossature. Le placo est supérieur en acoustique (grâce au système masse-ressort-masse) et en rapidité. Les carreaux de plâtre sont supérieurs en solidité et en « sensation de vrai mur ». Le choix dépend du contexte — aucune solution n\'est universellement meilleure.'
            }
          ],
          keyPoints: [
            'Carreaux de plâtre = solidité + finition directe, mais lourds et acoustique limitée',
            'Briques plâtrières haussmanniennes : les conserver quand possible — souvent meilleures que prévu',
            'Béton cellulaire = très léger et isolant, mais friable et mauvais en acoustique',
            'Le placo est supérieur en acoustique grâce au principe masse-ressort-masse',
            'TOUJOURS vérifier la charge sur le plancher avant de monter une cloison maçonnée dans l\'ancien'
          ],
          tips: [
            'En rénovation haussmannien : conserver les briques existantes + doublage Placo Phonique côté chambre = la meilleure solution acoustique sans tout casser',
            'Les carreaux de plâtre 10cm pleins sont parfaits pour les cloisons de dressing — on peut visser les étagères directement dedans sans chevilles',
            'Le béton cellulaire 7cm dans un comble aménagé = le seul choix quand le plancher ne supporte pas plus de 50kg/m²'
          ],
          tags: ['cloison', 'carreaux de plâtre', 'brique', 'béton cellulaire', 'maçonnerie', 'distribution']
        },
        {
          id: 'cloisons-vitrees',
          category: 'Cloisons & Distribution',
          title: 'Cloisons Vitrées & Verrières Atelier',
          subtitle: 'La lumière traverse, l\'espace respire',
          summary: 'La verrière d\'atelier type « Crittall » est devenue l\'élément architectural le plus demandé en rénovation d\'appartement. Mais au-delà de la tendance, les cloisons vitrées sont un vrai outil de conception — séparation sans cloisonnement, lumière sans compromis.',
          sections: [
            {
              title: 'Verrière atelier (style Crittall)',
              content: 'La verrière d\'atelier est une structure en acier ou aluminium à profils fins, avec des vitrages divisés en carreaux rectangulaires par des petits-bois. Le style vient des ateliers d\'artistes du XIXe siècle et des usines Crittall (Angleterre, 1889). Structure acier thermolaqué noir (RAL 9005) : le classique. Profils fins (~30-40mm de face), très graphique. L\'acier est le plus noble mais le plus cher et le plus lourd. Structure aluminium : plus léger, moins cher, profils un peu plus épais (~40-50mm). Le compromis le plus courant. Existe en kit (Lapeyre, Leroy Merlin) ou sur-mesure (artisan serrurier). Verre : simple vitrage 6mm (suffisant pour une cloison intérieure sans exigence acoustique), double vitrage 4/16/4 (si séparation acoustique nécessaire — cuisine ouverte bruyante), verre feuilleté (sécurité — si verrière basse ou accessible aux enfants). Dimensions : hauteur standard 1,05m à 2,50m (allège + verrière), largeur jusqu\'à 4-5m en multi-vantaux. Avec porte intégrée (tirant ou coulissante).'
            },
            {
              title: 'Cloisons vitrées toute hauteur',
              content: 'Les cloisons vitrées sol-plafond (toute hauteur) sont le niveau au-dessus de la verrière d\'atelier. Elles séparent complètement l\'espace tout en laissant passer la lumière. Profilés aluminium : les plus courants en tertiaire (bureaux). Systèmes démontables et reconfigurables. Marques : Hoyez, Clestra, Nantaise des Cloisons. Profilés acier : plus fin, plus élégant. Pour le résidentiel haut de gamme et l\'hôtellerie. Artisans serruriers. Vitrage : clair (transparent), sablé/dépoli (intimité), Switchable / Smart Glass (verre électrochrome — transparent ou opaque à la demande, 500-1000€/m²). Film occultant partiel : bande sablée à hauteur d\'yeux pour l\'intimité. Le système coulissant (porte galandage vitrée) est spectaculaire — la cloison disparaît dans le mur. Applications : séparation cuisine/séjour, bureau dans le salon, chambre parentale/dressing, salle de réunion.'
            },
            {
              title: 'Conception et mise en œuvre',
              content: 'La verrière d\'atelier standard (sur allège 1,05m, acier, simple vitrage) coûte 400-800€/ml sur-mesure posée par un serrurier. Les kits (aluminium, dimensions standard) : 200-500€ le module de 1m, pose DIY possible. Une verrière en acier sur-mesure de 3m de large avec porte = 3 000-6 000€ posée. C\'est un investissement mais la plus-value immobilière est IMMÉDIATE. Fixation : la verrière se fixe sur une allège (muret en placo, carreaux de plâtre, ou brique). L\'allège doit être suffisamment solide pour supporter le poids de la verrière (~30-50kg/ml pour de l\'acier). Renforcer l\'ossature si placo (montants renforcés, traverse intermédiaire). Acoustique : un simple vitrage 6mm offre un affaiblissement de ~28 dB. C\'est INSUFFISANT pour une vraie séparation acoustique (cuisine/chambre). Pour de l\'acoustique : double vitrage 10/12/6 = Rw ~38 dB. Le film occultant ou le store intégré peut compléter pour l\'intimité visuelle.'
            },
            {
              title: 'Erreurs fréquentes',
              content: 'Erreur n°1 : verrière avec porte battante qui s\'ouvre du mauvais côté → toujours vérifier le sens d\'ouverture par rapport à la circulation. Erreur n°2 : oublier le passage des câbles électriques dans l\'allège → prévoir les gaines AVANT le montage. Erreur n°3 : sous-estimer l\'acoustique → si la cuisine est ouverte via verrière sur le séjour et que le client cuisine beaucoup, le bruit passe. Prévenir. Erreur n°4 : profils trop épais (aluminium entrée de gamme) → l\'élégance d\'une verrière tient dans la finesse des profils. Viser 30-40mm maximum de face. Erreur n°5 : oublier le nettoyage → des deux côtés ! Prévoir un accès. Erreur n°6 : kit standard mal adapté → les kits font des dimensions standard. Si le mur n\'est pas d\'équerre ou la hauteur n\'est pas standard, le sur-mesure est obligatoire.'
            }
          ],
          keyPoints: [
            'Verrière acier profils fins (30-40mm) = le rendu le plus élégant. L\'aluminium est le compromis',
            'Simple vitrage 6mm = suffisant en intérieur SAUF si besoin d\'isolation acoustique',
            'Budget : 400-800€/ml sur-mesure acier. 200-500€/module en kit aluminium',
            'L\'allège doit être renforcée en placo (montants doublés) pour supporter la verrière',
            'La plus-value immobilière d\'une verrière est IMMÉDIATE — c\'est un investissement rentable'
          ],
          tips: [
            'Verrière acier noir mat + allège carreaux de métro blanc = le combo parisien iconique qui ne se démode pas',
            'Pour les petits budgets : verrière en kit aluminium IKEA ou Lapeyre + peinture noir mat = 80% de l\'effet pour 30% du prix',
            'Prévoir une imposte vitrée au-dessus de la porte d\'entrée de l\'appartement (si copro autorise) — apporte de la lumière naturelle dans l\'entrée sombre'
          ],
          tags: ['verrière', 'cloison vitrée', 'atelier', 'Crittall', 'acier', 'lumière', 'séparation']
        },
        {
          id: 'cloisons-amovibles',
          category: 'Cloisons & Distribution',
          title: 'Cloisons Amovibles & Modulaires',
          subtitle: 'Flexibilité, réversibilité, reconfiguration',
          summary: 'Les cloisons amovibles permettent de reconfigurer l\'espace sans travaux lourds. Essentielles en tertiaire (bureaux), elles gagnent du terrain en résidentiel — surtout dans les petits espaces où la flexibilité est reine.',
          sections: [
            {
              title: 'Cloisons amovibles de bureau',
              content: 'Les cloisons amovibles sont des systèmes industrialisés, démontables et reconfigurables, montés sur ossature indépendante (pas de fixation destructive au sol/plafond). Types : pleine (panneaux mélaminé, stratifié, tissu acoustique), vitrée (simple ou double vitrage), mixte (partie basse pleine + partie haute vitrée). L\'avantage fiscal : en tertiaire, les cloisons amovibles sont classées en MOBILIER (pas en immobilier) — amortissement sur 7 ans au lieu de 20-30 ans. C\'est un argument décisif pour les entreprises. Fabricants leaders : Hoyez (français, n°1), Clestra (français, haut de gamme), Lindner, Faram. Acoustique : Rw 35-50 dB selon le système (comparable au placo). Prix : 150-400€/m² posé (hors vitrage). Mobilité : démontage en 1 jour, remontage dans une nouvelle configuration. Pas de déchet de démolition.'
            },
            {
              title: 'Solutions résidentielles',
              content: 'En résidentiel, la « cloison amovible » prend des formes plus créatives : Claustras et claustra-étagères : structures ajourées (bois, métal, MDF) qui séparent visuellement sans cloisonner acoustiquement. Le claustra à tasseaux verticaux est très tendance. Portes coulissantes en galandage : la cloison disparaît dans le mur. Ouverte = espace ouvert. Fermée = pièce séparée. Le meilleur compromis flexibilité/acoustique. Rideaux architecturaux : tissu épais (velours, lin lourd) sur rail au plafond. Séparation douce et théâtrale. Bibliothèques traversantes : meuble double face séparant deux espaces — rangement + séparation. Panneaux coulissants : panneaux sur rails supérieurs (type shoji japonais). Très élégants, acoustique limitée. Cloison pivotante : panneau qui pivote à 180° — ouvert ou fermé. Spectaculaire mais nécessite de la place.'
            },
            {
              title: 'Conception d\'espaces flexibles',
              content: 'La flexibilité spatiale est l\'avenir du logement — surtout dans les petites surfaces (studios, T2). Principes de conception : 1) Identifier les usages qui varient dans la journée (jour/nuit, travail/repos, invités/intime). 2) Choisir le niveau de séparation : visuel seul (claustra), visuel + acoustique partiel (porte coulissante), total (cloison amovible). 3) Penser les rangements comme des séparations (dressing traversant = mur + rangement). 4) Utiliser le plafond (rails encastrés, rideaux, panneaux suspendus). Le studio parisien idéal : lit escamotable + porte coulissante galandage + claustra = 3 configurations dans 25m². L\'espace de coworking idéal : cloisons vitrées amovibles + rideaux acoustiques + mobilier sur roulettes = 5 configurations dans 100m².'
            }
          ],
          keyPoints: [
            'En tertiaire : les cloisons amovibles = mobilier (amortissement 7 ans vs 20-30 ans)',
            'La porte coulissante galandage = le meilleur compromis flexibilité/acoustique en résidentiel',
            'Le claustra à tasseaux sépare visuellement sans cloisonner — idéal pour les petits espaces',
            'Penser les meubles comme des cloisons (bibliothèque traversante, dressing séparatif)',
            'Un rail au plafond pour rideau = la séparation la plus simple et la moins chère'
          ],
          tips: [
            'Dans un studio : porte coulissante galandage entre le coin nuit et le séjour = le geste qui transforme 25m² en vrai T1bis',
            'Le claustra en tasseaux chêne espacés de 3cm, du sol au plafond, entre entrée et séjour = le premier geste à proposer dans TOUT appartement sans entrée',
            'En bureau open space : un rideau acoustique Kvadrat sur rail motorisé = séparation instantanée pour les réunions confidentielles'
          ],
          tags: ['cloison amovible', 'modulaire', 'claustra', 'galandage', 'flexible', 'bureau', 'tertiaire']
        },
        {
          id: 'faux-plafonds',
          category: 'Cloisons & Distribution',
          title: 'Faux-Plafonds : BA13, Tendu, Acoustique',
          subtitle: 'Tout ce qui se passe au-dessus de nos têtes',
          summary: 'Le plafond est la « cinquième paroi » — trop souvent négligée. Le faux-plafond est un outil technique (passage de gaines, acoustique, éclairage) ET un outil de design (volumes, matières, jeux de hauteur).',
          sections: [
            {
              title: 'Faux-plafond BA13 suspendu',
              content: 'Le classique : plaques de plâtre BA13 vissées sur une ossature métallique suspendue au plafond structurel par des suspentes. Ossature : fourrures F47 (profilés en oméga) fixées sur des suspentes à tiges filetées ou à ressort. Entre-axe des fourrures : 50cm (norme DTU 25.41). Permet de passer : câbles électriques, gaines VMC, spots encastrés, sprinklers, conduits de climatisation. Hauteur de plénum : 5cm minimum (juste les câbles) à 30-50cm (gaines VMC/clim). ATTENTION : chaque cm de faux-plafond est un cm de hauteur perdue. En appartement ancien avec 2,50m de hauteur, le faux-plafond partiel (uniquement dans la salle de bain/cuisine/couloir) est préférable au faux-plafond total. Finition : identique aux cloisons (Q1 à Q5). Spots encastrés : prévoir les emplacements AVANT la pose — déplacer un spot dans du BA13 = refaire le plafond. Prix : 35-55€/m² posé (finition Q3).'
            },
            {
              title: 'Plafond tendu',
              content: 'Toile en PVC ou polyester tendue à chaud sur des profilés périphériques (harpons fixés dans des lisses en aluminium). Très fin : seulement 3-5cm de plénum nécessaire — idéal quand on ne peut pas perdre de hauteur. Finitions : mat (le plus demandé — ressemble à un plafond peint parfait), satiné (léger reflet), laqué/miroir (effet réflexion — agrandit visuellement la pièce mais visible en éclairage direct), imprimé (photo, motif, sur-mesure). Avantages : pose rapide (1 jour pour un appartement), surface PARFAITE (cache toutes les imperfections sans enduit), étanche (retient jusqu\'à 100L/m² en cas de fuite d\'eau du dessus — le plafond fait « poche » et l\'eau ne coule pas). Spots encastrés : renforts thermiques obligatoires autour de chaque spot (anneau de renfort). Inconvénients : son légèrement « creux » quand on tapote, non peignable (si le client veut changer de couleur → changer la toile), odeur de PVC à la pose (disparaît en 24-48h). Prix : 40-80€/m² posé. Le tendu mat blanc est INDISCERNABLE d\'un BA13 peint — et beaucoup plus rapide. Fabricants : Barrisol (français, leader mondial), Newmat, Clipso (polyester sans PVC — plus écologique).'
            },
            {
              title: 'Plafond acoustique',
              content: 'Les plafonds acoustiques absorbent le son et réduisent la réverbération. Essentiels en bureau, restaurant, hôtel, crèche — et de plus en plus en résidentiel (open-plan). Dalles acoustiques sur ossature apparente : le système « grille » classique des bureaux. Ossature en T inversé visible (blanche ou noire). Dalles 60x60cm en laine minérale, fibre ou plâtre perforé. αw 0,70-0,95 (très absorbant). Prix : 25-45€/m² posé. Pas glamour mais ultra-performant. Plafond acoustique en BA13 perforé : plaques Knauf Cleaneo ou Placo Absoline — perforées de micro-trous qui absorbent le son. Esthétique « plafond lisse » avec performance acoustique. Idéal en résidentiel. Baffles et îlots suspendus : panneaux acoustiques suspendus horizontalement ou verticalement sous le plafond structurel. TRÈS design (feutre, bois, tissu). Parfaits pour les espaces type loft avec hauteur sous plafond. Marques : Rockfon, Armstrong, Ecophon (leader haut de gamme), Baux.'
            },
            {
              title: 'Staff, moulures et plafonds décoratifs',
              content: 'Le staff est un plâtre renforcé de fibres (filasse ou fibre de verre) utilisé pour les moulures, corniches, rosaces et caissons de plafond. Corniches : jonction mur-plafond. Du simple quart-de-rond à la corniche à denticules haussmannienne. Tailles : 5cm (discrète) à 30cm (monumentale). Rosaces : médaillon décoratif central (autour du lustre). Diamètre 30-80cm. Caissons : structure en creux ou en relief créant un quadrillage au plafond. Effet architectural puissant — anoblit une pièce instantanément. Fabricants : Orac Decor (polyuréthane léger — le plus accessible, 5-30€/ml), NMC (polystyrène HD), Gypsum Art (staff véritable artisanal, 30-100€/ml). Le retour du caisson de plafond : un caisson simple en baguettes de MDF peintes, collées au plafond, crée un effet architectural spectaculaire pour 20-40€/m². C\'est le « hack » déco le plus rentable sur un plafond. Gorge lumineuse (corniche éclairée) : corniche creuse avec ruban LED intégré — éclairage indirect chaud qui fait « flotter » le plafond. 15-30€/ml. L\'éclairage indirect par gorge est le geste lumineux le plus élégant qui existe.'
            }
          ],
          keyPoints: [
            'Le plafond tendu ne prend que 3-5cm de hauteur — idéal quand la hauteur est limitée',
            'Le tendu mat blanc est INDISCERNABLE d\'un BA13 peint, et beaucoup plus rapide à poser',
            'Le BA13 perforé acoustique offre un aspect lisse avec performance acoustique — idéal en résidentiel',
            'La gorge lumineuse LED dans une corniche = l\'éclairage indirect le plus élégant',
            'Prévoir les spots AVANT la pose du faux-plafond BA13 — impossible à déplacer après'
          ],
          tips: [
            'En rénovation d\'appartement ancien (moulures existantes) : NE PAS mettre de faux-plafond dans le séjour si les moulures sont belles. Faux-plafond seulement dans les pièces techniques (SDB, cuisine, couloir)',
            'Le caisson en baguettes MDF peintes (20€/m²) sur un plafond blanc = l\'astuce qui transforme un salon basique en pièce architecturale',
            'Plafond tendu Barrisol laqué noir dans une salle de bain = effet miroir + étoiles (spots) spectaculaire. Le geste audacieux qui marque les esprits'
          ],
          tags: ['plafond', 'faux-plafond', 'BA13', 'tendu', 'acoustique', 'moulures', 'éclairage']
        },
        {
          id: 'menuiseries-interieures',
          category: 'Menuiseries',
          title: 'Menuiseries Intérieures : Portes & Quincaillerie',
          subtitle: 'Portes, huisseries, poignées — le détail qui fait la différence',
          summary: 'La porte est l\'élément qu\'on touche le plus dans une maison — et pourtant c\'est souvent le poste le plus négligé. Le choix du type de porte, de l\'âme, de l\'huisserie et de la quincaillerie fait la différence entre un intérieur « standard » et un intérieur « conçu ».',
          sections: [
            {
              title: 'Types de portes',
              content: 'Porte battante (à la française) : le classique — pivote sur des paumelles. Simple, fiable, bonne acoustique. Nécessite un débattement (l\'espace que la porte occupe en s\'ouvrant). Porte coulissante en applique : la porte glisse sur un rail visible fixé au-dessus du mur. Style industriel/loft. Rail apparent noir mat très tendance. Inconvénient : acoustique médiocre (jours entre porte et mur), le rail prend de la place en saillie. Porte coulissante à galandage : la porte disparaît DANS le mur (châssis escamotable — Eclisse, Scrigno). Le top en gain de place. Nécessite un mur creux de l\'épaisseur de la porte + ossature (minimum 10cm). À PRÉVOIR dès la conception — impossible à rajouter après. Porte pivotante : pivot central ou déporté — la porte tourne sur elle-même. Spectaculaire pour les grandes portes (2,50m+). Pivot FritsJurgens (invisible, fermeture amortie) = le top absolu. Porte à galandage double : deux vantaux qui disparaissent de chaque côté. Ouvre une baie de 1,80-2,40m. L\'espace ouvert/fermé le plus élégant.'
            },
            {
              title: 'Âmes et fabrication',
              content: 'Porte âme alvéolaire : carton nid d\'abeille entre deux panneaux. La moins chère (50-100€), la plus légère, la moins acoustique. Reconnaissable au son creux quand on frappe dessus. Isoplane basique. Porte âme pleine (aggloméré ou MDF) : panneau massif ou particules compressées. Meilleure acoustique (Rw 25-30 dB), plus lourde, sensation de qualité. 150-300€. Porte postformée : MDF usiné avec moulures rapportées (3-5 panneaux). Le classique « porte à panneaux ». 100-250€. Porte plane affleurante : la surface de la porte est DANS le même plan que le mur — pas de cadre visible. L\'esthétique la plus épurée et contemporaine. Nécessite un bloc-porte spécial (Xinnix, Eclisse Syntesis). 400-800€. Le « must » du design intérieur contemporain. Porte vitrée : vitrage partiel ou total. Apporte de la lumière. Verre clair, dépoli, texturé. Porte miroir : miroir intégré (face intérieure de dressing, SDB). Double fonction. Porte acoustique : Rw 35-42 dB. Joints périphériques + seuil automatique (la plinthe descend quand la porte se ferme). Pour studios de musique, bureaux, chambres d\'hôtel.'
            },
            {
              title: 'Huisseries et cadres',
              content: 'L\'huisserie (dormant + ouvrant) est aussi importante que la porte elle-même. Bloc-porte (huisserie + porte assemblés en usine) : le plus courant. Dimensions standard : 73, 83, 93cm de passage (attention : la cote de passage est inférieure à la largeur de la porte). Huisserie bois (sapin, MDF, chêne) : la plus courante en résidentiel. En rénovation, l\'huisserie existante peut être conservée et la porte remplacée seule. Huisserie métallique : acier laqué ou alu. Plus fine, plus contemporaine. Obligatoire en ERP (coupe-feu). Huisserie invisible (Xinnix, Eclisse Syntesis, Portapivot) : aucun cadre visible — la porte semble découpée dans le mur. Le fin du fin en design contemporain. 300-600€ pour l\'huisserie seule. Dimensions non-standard : les portes sur-mesure en hauteur 2,50m (toute hauteur, alignées avec le faux-plafond) donnent un effet monumental et élèvent le standing de l\'appartement. Surcoût : 30-50% par rapport au standard.'
            },
            {
              title: 'Quincaillerie',
              content: 'La quincaillerie est le « bijou » de la menuiserie — ce que le client touche et voit tous les jours. Poignées (béquilles) : rosace (la plus épurée — disque autour de la béquille) ou plaque (rectangulaire, classique). Finitions : inox brossé (le standard), noir mat (très tendance), laiton brossé (luxe chaleureux), chrome (classique, froid), cuir (Turnstyle — ultra-luxe). Marques : Olivari (design italien), FSB (design allemand — Franz Schneider Brakel), Turnstyle (anglais, poignées cuir et métal), Valli & Valli, Colombo. Paumelles (charnières) : invisibles (Simonswerk TECTUS — la référence, 80-150€/paire) = le choix contemporain. Les paumelles apparentes classiques sont acceptables si elles sont assorties à la poignée. Ferme-porte : obligatoire en ERP. En résidentiel, le frein de porte (amortisseur intégré dans la paumelle) est le luxe silencieux ultime. Serrure : à condamnation (SDB, WC — bouton poussoir/tournant), à clé (chambre, bureau), magnétique (Bonaiti B-One — ultra-silencieuse, pas de pêne visible). La poignée + paumelles + serrure forment un trio — les 3 doivent être dans la MÊME finition.'
            }
          ],
          keyPoints: [
            'La porte à galandage = le meilleur gain de place — à prévoir DÈS la conception (pas ajoutée après)',
            'La porte affleurante (plane dans le mur) = l\'esthétique contemporaine ultime',
            'Les portes toute hauteur (2,50m) élèvent instantanément le standing d\'un intérieur',
            'Poignée + paumelles + serrure = MÊME finition obligatoirement (cohérence)',
            'Les paumelles invisibles Simonswerk TECTUS = le standard du haut de gamme'
          ],
          tips: [
            'Remplacer toutes les portes isoplane d\'un appartement par des portes à panneaux MDF peintes + poignées Olivari noir mat = transformation spectaculaire pour 200-300€/porte',
            'La porte pivotante FritsJurgens de 2,50m en chêne = le geste WOW d\'un projet haut de gamme. 2 000-4 000€ la porte complète mais c\'est une sculpture',
            'En rénovation budget : conserver les portes existantes, les poncer, les peindre en noir mat ou en couleur vive, changer les poignées. 80€/porte pour un résultat pro'
          ],
          tags: ['porte', 'menuiserie', 'galandage', 'quincaillerie', 'huisserie', 'poignée', 'Simonswerk']
        },
        {
          id: 'menuiseries-exterieures',
          category: 'Menuiseries',
          title: 'Menuiseries Extérieures : Fenêtres & Vitrages',
          subtitle: 'Uw, facteur solaire, PVC, alu, bois — le guide complet',
          summary: 'Les fenêtres sont le poste le plus stratégique d\'une rénovation énergétique — et le plus technique à prescrire. Type de châssis, performance thermique (Uw), facteur solaire (Sw), classement AEV, type de vitrage : chaque paramètre impacte le confort, la facture d\'énergie et l\'esthétique.',
          sections: [
            {
              title: 'Types de châssis',
              content: 'PVC : le plus isolant (Uf ~1,3 W/m².K), le moins cher, le plus vendu (60% du marché). Entretien quasi nul. Inconvénient : profils épais (~70mm de face visible), choix de couleurs limité (blanc, gris, faux bois), aspect « plastique ». Ne convient pas au bâti patrimonial (ABF refusera). Prix : 200-500€/fenêtre standard. Aluminium : profils fins (~55mm de face — le plus élégant), choix de couleurs illimité (laquage RAL), très résistant et durable. Inconvénient : moins isolant (Uf ~3-4 W/m².K, compensé par la rupture de pont thermique RPT — Uf ~1,8-2,5 avec RPT). Plus cher. Prix : 400-900€/fenêtre. Bois : le plus noble, le plus isolant naturellement (Uf ~1,4-1,6), régulation hygrométrique. Le classique du bâti ancien et du haut de gamme contemporain. Inconvénient : entretien (peinture/lasure tous les 5-10 ans). Prix : 500-1200€/fenêtre. Mixte bois-alu : bois à l\'intérieur (esthétique et confort), aluminium à l\'extérieur (protection et couleur). Le meilleur des deux mondes mais le plus cher. Prix : 600-1500€/fenêtre. Marques pro : K-Line (alu français, design), Internorm (bois-alu autrichien), Tryba (PVC), Velux (toiture).'
            },
            {
              title: 'Vitrages',
              content: 'Double vitrage standard : 4/16/4 (verre 4mm / lame d\'air ou argon 16mm / verre 4mm). Ug ~1,1 W/m².K avec argon. Le minimum actuel. Double vitrage ITR (Isolation Thermique Renforcée) : couche basse émissivité (Low-E) sur une face interne. Ug ~1,0-1,1 avec argon. Le standard de la RE2020. Triple vitrage : 4/12/4/12/4. Ug ~0,5-0,7. Pertinent dans le Nord, en altitude, ou en façade nord exposée. Ajoute du poids et du coût (~30-50% de plus que le double). Peu pertinent dans le Sud. Facteur solaire (Sw) : capacité du vitrage à laisser passer l\'énergie solaire. Sw élevé (0,5-0,65) = apport solaire maximal — souhaitable en façade sud en hiver. Sw faible (0,25-0,35) = protection solaire — nécessaire en façade ouest/sud en climat chaud. Vitrage de contrôle solaire (Sw faible, Tl élevé) : laisse passer la lumière mais bloque la chaleur. Guardian Sun, Saint-Gobain Cool-Lite. Vitrage acoustique : asymétrique (10/12/6 ou 44.2/12/4) — les épaisseurs différentes bloquent des fréquences différentes. Rw ~38-42 dB. Indispensable en ville.'
            },
            {
              title: 'Performance et classement',
              content: 'Uw (coefficient thermique de la fenêtre complète) : intègre le vitrage (Ug) + le châssis (Uf) + les intercalaires. Exigences RE2020 : Uw ≤ 1,3 W/m².K pour les fenêtres. Plus Uw est bas, plus la fenêtre est isolante. AEV (classement Air-Eau-Vent) : A*1-A*4 (perméabilité à l\'air, 4 = le plus étanche), E*1A-E*9A (étanchéité à l\'eau, 9A = le plus résistant), V*A1-V*A4 (résistance au vent, A4 = le plus résistant). En bord de mer exposé : exiger A*4 E*7A V*A3 minimum. TLw (Transmission Lumineuse) : pourcentage de lumière visible qui traverse. TLw 70% = standard. TLw > 75% = très lumineux. Choisir un vitrage à TLw élevé pour les pièces de vie. Retrait thermique (Ψ — psi) des intercalaires : les « warm edge » (Swisspacer, TGI) réduisent le pont thermique au bord du vitrage. Exiger des warm edge dans le CCTP.'
            },
            {
              title: 'Volets et protections solaires',
              content: 'Volets roulants : le plus courant. Coffre intégré (invisible) ou extérieur (rénovation). Aluminium (le plus courant), PVC (économique). Motorisation Somfy = la référence. Isolant (mousse PU injectée dans les lames). Volets battants : le classique du bâti patrimonial. Bois, aluminium ou PVC. Obligatoires en zone ABF si les façades sont protégées. Brise-soleil orientable (BSO) : lames horizontales orientables qui bloquent le soleil direct tout en laissant passer la lumière diffuse. Le MEILLEUR système de protection solaire pour les bureaux et le résidentiel contemporain. Warema, Griesser. Store banne : protection solaire de terrasse/balcon. Ne protège pas les vitrages eux-mêmes. Film solaire : film collé sur le vitrage existant. Solution économique en rénovation si le remplacement des fenêtres n\'est pas possible. 3M, Solar Screen. Pergola bioclimatique : lames orientables alu. Le top pour les terrasses. Biossun, Renson, Solisystème.'
            }
          ],
          keyPoints: [
            'Uw ≤ 1,3 W/m².K = exigence RE2020 pour les fenêtres',
            'L\'aluminium à rupture de pont thermique (RPT) = profils fins + bonne isolation',
            'Le double vitrage argon ITR (4/16/4 Low-E) est le standard minimum actuel',
            'Le triple vitrage n\'est pertinent que dans le Nord, en altitude ou en façade nord exposée',
            'Le BSO (brise-soleil orientable) est la meilleure protection solaire pour l\'architecture contemporaine'
          ],
          tips: [
            'En rénovation d\'appartement haussmannien : alu fin noir (K-Line) à l\'intérieur + habillage bois côté rue (si ABF) = le compromis performance/patrimoine',
            'Fenêtre Uw 1.3 + volet roulant = Ujn (nuit) de 0.7-0.8 W/m².K — le volet roulant est le MEILLEUR isolant supplémentaire et le moins cher',
            'Pour le confort d\'été sans climatisation : BSO côté sud/ouest + vitrage contrôle solaire + ventilation nocturne = la trilogie anti-surchauffe'
          ],
          tags: ['fenêtre', 'vitrage', 'Uw', 'aluminium', 'PVC', 'bois', 'volet', 'isolation', 'RE2020']
        },
        {
          id: 'vmc-ventilation',
          category: 'CVC & Ventilation',
          title: 'VMC : Ventilation Mécanique Contrôlée',
          subtitle: 'Simple flux, double flux, hygro A/B — l\'air qu\'on respire',
          summary: 'La VMC est OBLIGATOIRE dans tout logement depuis 1982. C\'est le poumon de la maison — elle évacue l\'air vicié (humidité, CO2, polluants) et assure le renouvellement d\'air. Une VMC absente ou défaillante = condensation, moisissures, problèmes de santé. L\'architecte d\'intérieur qui déplace une cuisine ou une salle de bain DOIT repenser la ventilation.',
          sections: [
            {
              title: 'VMC simple flux',
              content: 'Principe : l\'air neuf entre par des entrées d\'air (EA) situées dans les pièces de vie (séjour, chambres) — généralement dans les coffres de volets roulants ou les menuiseries. L\'air vicié est extrait par des bouches d\'extraction dans les pièces humides (cuisine, SDB, WC) et évacué par un groupe d\'extraction (caisson motorisé) via des gaines en toiture ou en façade. Le flux d\'air circule des pièces sèches vers les pièces humides en passant sous les portes (détalonnage de 1cm obligatoire sous chaque porte). VMC autoréglable : débit constant quelle que soit l\'occupation. Simple, peu chère. 150-300€ le caisson. VMC hygroréglable type B (hygro B) : les bouches d\'extraction ET les entrées d\'air sont à débit variable en fonction de l\'hygrométrie (humidité relative). Plus l\'air est humide, plus le débit augmente. ÉCONOMISE 15-25% de chauffage par rapport à l\'autoréglable. C\'est le STANDARD actuel en résidentiel. Caisson : 300-600€. VMC hygroréglable type A (hygro A) : seules les bouches d\'extraction sont hygroréglables, les entrées d\'air sont autoréglables. Moins performante que l\'hygro B. Débits réglementaires : cuisine 75 m³/h (135 en boost), SDB 30 m³/h, WC 15 m³/h.'
            },
            {
              title: 'VMC double flux (DF)',
              content: 'Principe : un échangeur thermique récupère la chaleur de l\'air extrait pour préchauffer l\'air neuf entrant. Rendement : 70-95% de récupération de chaleur selon le modèle. L\'air neuf est filtré (pollen, particules fines — essentiel en ville polluée et pour les allergiques). PAS d\'entrées d\'air dans les fenêtres — l\'air neuf arrive par un réseau de gaines depuis le caisson central. Avantages : économies de chauffage (30-50% sur le poste ventilation), air filtré et préchauffé, confort acoustique (pas d\'ouverture en façade). Inconvénients : installation COMPLEXE (réseau de gaines insufflation + extraction = double réseau), encombrement du caisson (60x60x100cm en moyenne), faux-plafonds nécessaires pour passer les gaines (Ø125-160mm), coût (3 000-8 000€ installé), entretien obligatoire (filtres tous les 3-6 mois, échangeur 1x/an). Pertinente en : construction neuve (RE2020 — quasi obligatoire pour atteindre les seuils), rénovation lourde si la hauteur sous plafond le permet, bâtiments passifs. Fabricants : Zehnder (suisse, le top), Aldes (français), Atlantic, Helios, Brink.'
            },
            {
              title: 'Impact en rénovation',
              content: 'Quand l\'architecte d\'intérieur déplace une cuisine ou une SDB, il DOIT prolonger ou créer des gaines de ventilation vers la nouvelle pièce humide. Les gaines VMC sont en Ø80mm (WC), Ø125mm (SDB), Ø150mm (cuisine). Elles doivent avoir une pente de 1% vers l\'extérieur (évacuation des condensats). NE JAMAIS écraser, cintrer ou réduire une gaine VMC — le débit chute drastiquement. En appartement : la VMC est collective (un caisson en toiture pour tout l\'immeuble). Le déplacement d\'une bouche d\'extraction nécessite l\'accord de la copropriété si la gaine principale est touchée. En pratique : prolonger une gaine secondaire est souvent possible sans toucher à la colonne principale. Problème fréquent en rénovation : les fenêtres sont remplacées par du double vitrage étanche, les entrées d\'air sont supprimées (esthétique !) → plus d\'air neuf → condensation → moisissures. TOUJOURS maintenir les entrées d\'air dans les menuiseries neuves.'
            },
            {
              title: 'Choix et prescription',
              content: 'Rénovation d\'appartement (copro) : VMC simple flux hygro B. Vérifier que le caisson collectif fonctionne (syndicat de copro). Ajouter des bouches hygro sur les pièces humides déplacées. S\'assurer que les entrées d\'air sont présentes dans TOUTES les pièces de vie. Maison individuelle rénovation : VMC hygro B si budget limité, VMC double flux si rénovation lourde + isolation performante. Construction neuve (RE2020) : VMC double flux quasi obligatoire pour atteindre les seuils de consommation. Prévoir les réservations de gaines dès la conception. Budget : caisson simple flux hygro B = 300-600€. Installation complète maison = 1 500-3 000€. VMC DF complète installée = 5 000-10 000€. Entretien : nettoyer les bouches d\'extraction 2x/an (graisse cuisine !), remplacer les filtres DF tous les 3-6 mois, vérifier le débit avec un anémomètre (10-15€).'
            }
          ],
          keyPoints: [
            'La VMC hygro B est le STANDARD actuel — entrées d\'air ET extraction hygroréglables',
            'TOUJOURS maintenir les entrées d\'air dans les fenêtres neuves — les supprimer = moisissures garanties',
            'Déplacer une cuisine/SDB = prolonger les gaines VMC vers la nouvelle pièce humide',
            'La VMC double flux récupère 70-95% de la chaleur mais nécessite un réseau de gaines encombrant',
            'Détalonnage de 1cm sous chaque porte intérieure = obligatoire pour la circulation de l\'air'
          ],
          tips: [
            'Premier réflexe en visite d\'un appartement à rénover : mettre la main devant les bouches d\'extraction SDB et cuisine. Si rien n\'aspire → VMC en panne ou bouchée. Signaler au client',
            'Les bouches d\'extraction cuisine se bouchent de graisse en 6 mois — intégrer le nettoyage dans les recommandations d\'entretien au client',
            'En loft ou grande pièce ouverte : une bouche d\'extraction cuisine de 135 m³/h boost est indispensable pour éviter que les odeurs de cuisson envahissent tout l\'espace'
          ],
          tags: ['VMC', 'ventilation', 'double flux', 'hygro', 'air', 'humidité', 'RE2020']
        },
        {
          id: 'chauffage-radiateurs',
          category: 'CVC & Ventilation',
          title: 'Chauffage & Radiateurs',
          subtitle: 'Eau chaude, électrique, plancher chauffant, sèche-serviettes',
          summary: 'Le choix du système de chauffage impacte le confort, le budget, l\'esthétique et l\'intégration architecturale. L\'architecte d\'intérieur doit savoir ce qui est possible, ce qui est performant et ce qui est beau — les trois à la fois, idéalement.',
          sections: [
            {
              title: 'Radiateurs à eau chaude',
              content: 'Connectés à une chaudière (gaz, fioul) ou une pompe à chaleur (PAC) via un réseau de tuyaux. Le système le plus confortable et le plus économique à l\'usage. Types : radiateur en fonte (le classique haussmannien — inertie exceptionnelle, chauffe longtemps après extinction, très lourd 40-80kg, cher 300-800€/unité. Les radiateurs fonte anciens se conservent et se rénovent — NE PAS les jeter !). Radiateur acier (panneaux — le plus courant actuellement, léger, montée en température rapide, design épuré ou décoratif, 100-400€/unité. Marques : Acova, Zehnder, Purmo, Finimetal). Radiateur aluminium (montée en température très rapide, léger, bon rendement, mais corrosion possible si l\'eau du circuit n\'est pas traitée, 80-250€/unité). Radiateur design (Tubes, Caleido, Runtal — véritables sculptures murales, 500-3000€). Dimensionnement : en moyenne 100W/m² en logement bien isolé, 130W/m² en ancien mal isolé. Un séjour de 30m² dans un appartement ancien = ~3 900W = 2-3 radiateurs.'
            },
            {
              title: 'Radiateurs électriques',
              content: 'Convecteur (« grille-pain ») : résistance qui chauffe l\'air directement. Pas cher (30-80€), sèche l\'air, crée des mouvements de poussière, inconfortable. À PROSCRIRE dans tout projet de qualité. Panneau rayonnant : résistance derrière une façade qui rayonne la chaleur. Meilleur confort que le convecteur. 80-200€. Acceptable en budget très serré. Radiateur à inertie : le haut de gamme électrique. Cœur de chauffe en fonte, céramique, pierre de lave ou fluide caloporteur. Accumule la chaleur et la restitue progressivement. Confort proche du chauffage central. 200-800€/unité. Marques : Campa (français, haut de gamme), Noirot, Thermor, Acova. Radiateur à inertie sèche pierre naturelle : façade en marbre, granit ou pierre de lave. Le PLUS beau radiateur électrique. Campa Naturay (marbre blanc de Carrare) = l\'icône. 600-1500€. Sèche-serviettes : OBLIGATOIRE dans chaque salle de bain. Mixte (eau + résistance électrique) = le plus polyvalent. Soufflant intégré pour un boost rapide. Dimensions : prévoir 50cm de large minimum, hauteur 120-180cm. Marques : Acova, Zehnder, Cinier (design sculptural).'
            },
            {
              title: 'Plancher chauffant',
              content: 'Le plancher chauffant basse température (PCBT) est le système de chauffage le plus confortable qui existe — chaleur douce et uniforme, pas de radiateurs visibles, pieds au chaud. Types : hydraulique (tubes PER/PB noyés dans la chape, alimentés par chaudière ou PAC — le standard), électrique (trame chauffante ou câble sous carrelage — rénovation uniquement, pièces isolées). Le PCBT hydraulique fonctionne à 28-30°C de surface maximum (réglementation) — c\'est une chaleur DOUCE, pas un sol brûlant. Avantages : confort inégalé, libère les murs (pas de radiateurs), compatible tous revêtements (carrelage, pierre, bois si Rth ≤ 0,15 m².K/W — éviter les parquets épais et les moquettes). Inconvénients : surélévation de 8-12cm (isolant + tubes + chape + revêtement) — problème n°1 en rénovation, réactivité lente (ne pas l\'utiliser en appoint), coût (50-100€/m² fourni-posé hydraulique). Plancher chauffant/rafraîchissant (PCR) : le même système peut rafraîchir en été (eau à 18-20°C). Apporte 3-5°C de fraîcheur. Pas de courant d\'air (contrairement à la clim). Le top du confort été/hiver.'
            },
            {
              title: 'Intégration et choix',
              content: 'Rénovation appartement ancien (chauffage central existant) : conserver les radiateurs fonte (patrimoine + performance), ou remplacer par des radiateurs acier design (Zehnder Charleston = le remake contemporain du radiateur fonte). NE PAS passer en tout électrique dans un appartement avec chauffage central — c\'est une régression énergétique. Rénovation avec plancher accessible : plancher chauffant électrique sous carrelage en SDB (confort pieds nus), sinon radiateurs. Construction neuve : PAC + plancher chauffant hydraulique = le combo RE2020 idéal. Esthétique : le radiateur est un objet de design. Tubes Radiatori (colonnes verticales colorées), Caleido (formes sculpturales), Scirocco H (minimaliste). Un radiateur design à 800€ est moins cher qu\'un meuble et décore le mur H24. Sèche-serviettes : prévoir 750W minimum par SDB (500W corps + 250W soufflant). L\'oublier est l\'erreur de confort n°1 en salle de bain.'
            }
          ],
          keyPoints: [
            'Le radiateur à inertie est le seul électrique acceptable dans un projet de qualité',
            'Le plancher chauffant basse température = le système le plus confortable (28-30°C max en surface)',
            'CONSERVER les radiateurs fonte anciens — patrimoine + inertie exceptionnelle',
            'Sèche-serviettes OBLIGATOIRE dans chaque SDB — 750W minimum (corps + soufflant)',
            'NE JAMAIS passer en tout électrique quand un chauffage central eau chaude existe'
          ],
          tips: [
            'Les anciens radiateurs fonte nettoyés et repeints en noir mat ou en couleur vive = un objet de décoration spectaculaire. Décapage 200-400€/radiateur, mais résultat incomparable',
            'Radiateur Zehnder Charleston vertical en couleur (RAL sur-mesure) = le radiateur design le plus élégant pour les petits espaces — prend 20cm de mur au lieu de 100cm',
            'Plancher chauffant en SDB sous carrelage grand format = le luxe absolu des pieds nus le matin. Trame électrique 100-150€ pour 4m² — investissement ridicule pour un confort royal'
          ],
          tags: ['chauffage', 'radiateur', 'plancher chauffant', 'fonte', 'inertie', 'sèche-serviettes', 'PAC']
        },
        {
          id: 'plomberie-sanitaire',
          category: 'Réseaux Techniques',
          title: 'Plomberie & Réseaux Sanitaires',
          subtitle: 'Alimentation, évacuation, production d\'eau chaude',
          summary: 'La plomberie est le réseau sanguin de l\'habitat. L\'architecte d\'intérieur qui déplace une cuisine, une salle de bain ou un WC doit comprendre les contraintes d\'alimentation ET d\'évacuation — ce sont elles qui dictent ce qui est possible ou non.',
          sections: [
            {
              title: 'Alimentation en eau',
              content: 'L\'eau arrive sous pression (2-5 bars) depuis le compteur et doit être distribuée à chaque point d\'eau (robinet, WC, lave-linge, lave-vaisselle). Matériaux : PER (polyéthylène réticulé) : le standard actuel. Tuyau flexible rouge (chaud) et bleu (froid). Raccords à sertir ou à compression. Ne se corrode pas, pas d\'entartrage, pose facile. Diamètres : Ø12 (lavabo), Ø16 (douche, baignoire, cuisine), Ø20 (colonne principale). Cuivre : le classique noble. Soudure ou raccords à compression. Résistant, durable (50+ ans), bactériostatique. Plus cher et plus long à poser. Ø10-12 (lavabo), Ø14-16 (douche), Ø18-22 (colonne). Multicouche (PER-Alu-PER) : combine la flexibilité du PER et la rigidité du cuivre. Se cintre et garde sa forme. Raccords à sertir. Le meilleur compromis en rénovation. Distribution : en pieuvre (depuis un collecteur/nourrice centrale — chaque point a son circuit dédié, facile à couper individuellement) ou en repiquage (en série — plus ancien, moins flexible). La pieuvre depuis un collecteur est le standard moderne.'
            },
            {
              title: 'Évacuation des eaux usées',
              content: 'L\'évacuation fonctionne par GRAVITÉ — c\'est LA contrainte n°1 en rénovation. Les tuyaux doivent avoir une pente de 1-3% (1 à 3cm par mètre) vers la descente d\'eaux usées (colonne de chute). Matériaux : PVC (le standard), diamètres Ø32 (lavabo), Ø40 (douche, baignoire, évier cuisine), Ø50 (machine à laver), Ø100 (WC — non négociable). Le WC nécessite un Ø100mm — c\'est le tuyau le plus gros et le plus contraignant à passer. Déplacer un WC loin de la colonne de chute = surélever le sol (pour la pente) ou installer un sanibroyeur (pompe de relevage — bruit, entretien, pannes). Les eaux usées de la cuisine (graisses) doivent être séparées des eaux vannes (WC) si possible. Siphon : OBLIGATOIRE sur chaque appareil — empêche les remontées d\'odeurs. Le siphon de sol (douche à l\'italienne) a un débit limité : choisir un caniveau ou un siphon de Ø90mm minimum pour un confort d\'écoulement correct.'
            },
            {
              title: 'Production d\'eau chaude sanitaire (ECS)',
              content: 'Chauffe-eau électrique (cumulus) : ballon de 100-300L, résistance électrique. Simple, fiable, pas cher (200-500€). Fonctionne en heures creuses (tarif réduit). Encombrant (prévoir un placard technique). Durée de vie : 10-15 ans. Chauffe-eau thermodynamique (CET) : ballon + mini pompe à chaleur qui capte les calories de l\'air ambiant. COP 2,5-3,5 (produit 2,5-3,5 kWh de chaleur pour 1 kWh d\'électricité). Économise 50-70% par rapport au cumulus électrique. Bruit (~45 dB — ne pas l\'installer dans une chambre). Prix : 1 500-3 000€ installé. Aides financières (MaPrimeRénov\'). Le choix RE2020. Chaudière gaz instantanée ou accumulation : production d\'ECS intégrée à la chaudière. Le plus confortable (eau chaude illimitée en instantané). En copro parisienne : souvent un ballon collectif — vérifier le débit disponible avant de rajouter une douche. Dimensionnement : 50L/personne/jour en moyenne. Couple sans enfant = 100-150L. Famille 4 personnes = 200-250L.'
            },
            {
              title: 'Contraintes en rénovation',
              content: 'Le déplacement d\'une salle de bain est le projet le plus complexe en plomberie : il faut amener l\'alimentation (facile — petits tuyaux flexibles) ET créer l\'évacuation (difficile — gros tuyaux en pente vers la colonne). Plus on s\'éloigne de la colonne, plus il faut surélever le sol. Règle : distance max de 3-4m de la colonne sans surélévation majeure. Au-delà : pompe de relevage ou surélévation de 8-12cm. Le WC est l\'élément le plus contraignant à déplacer (Ø100mm + pente). Solutions : WC suspendu avec bâti-support (Geberit Duofix) — la chasse et l\'évacuation sont dans le bâti mural. Le TOP en design ET en praticité (sol dégagé, nettoyage facile). L\'alimentation d\'un îlot de cuisine = passage dans le sol (sous chape ou dans une gorge technique). Prévoir AVANT le ragréage. Ne pas oublier l\'alimentation en eau froide pour le réfrigérateur américain et le lave-vaisselle. Collecteur/nourrice : le placer dans un placard technique accessible — il permet de couper individuellement chaque circuit.'
            }
          ],
          keyPoints: [
            'L\'évacuation fonctionne par GRAVITÉ — pente de 1-3% obligatoire. C\'est la contrainte n°1',
            'Le WC nécessite un Ø100mm — le plus gros tuyau et le plus dur à déplacer',
            'Le PER en distribution pieuvre (depuis collecteur) = le standard moderne d\'alimentation',
            'Le chauffe-eau thermodynamique = 50-70% d\'économie vs cumulus électrique — choix RE2020',
            'Distance max ~3-4m de la colonne de chute sans surélévation — au-delà, pompe ou rehausse'
          ],
          tips: [
            'En visite de chantier : repérer la colonne de chute (tuyau Ø100 vertical dans un angle ou une gaine). TOUT le plan de la SDB et des WC en dépend',
            'Le WC suspendu Geberit Duofix = le standard pro. Le bâti fait 12cm d\'épaisseur — prévoir un doublage de mur qui crée un rebord pratique (niche, étagère)',
            'Toujours prévoir une vanne d\'arrêt accessible sous chaque lavabo et WC — en cas de fuite, le client peut couper l\'eau sans couper tout l\'appartement'
          ],
          tags: ['plomberie', 'évacuation', 'alimentation', 'PER', 'eau chaude', 'WC suspendu', 'Geberit']
        },
        {
          id: 'electricite-nfc15100',
          category: 'Réseaux Techniques',
          title: 'Électricité : NF C 15-100 & Installation',
          subtitle: 'Circuits, prises, tableau, éclairage — la norme qui régit tout',
          summary: 'La norme NF C 15-100 fixe TOUTES les règles d\'installation électrique en logement. Nombre de prises par pièce, circuits dédiés, protection des circuits, volumes de sécurité en SDB — l\'architecte d\'intérieur doit connaître ces règles pour concevoir des plans cohérents avec l\'installation électrique.',
          sections: [
            {
              title: 'Tableau et protection',
              content: 'Le tableau électrique (TGBT) est le cœur de l\'installation. Il est dans la GTL (Gaine Technique de Logement) qui regroupe aussi le compteur et le tableau de communication. Protection : disjoncteur de branchement (500mA, 15-45A — fourni par Enedis), interrupteurs différentiels 30mA (protection des personnes — obligatoire sur TOUS les circuits, type AC pour l\'éclairage et les prises, type A pour les circuits spécialisés : plaque de cuisson, lave-linge, etc.), disjoncteurs divisionnaires (protection des circuits : 10A éclairage, 16A prises, 20A circuits spécialisés, 32A plaque de cuisson). Un tableau standard T3 : 2 rangées de 13 modules. T4-T5 : 3-4 rangées. Toujours prévoir 20% de réserve pour les ajouts futurs. Marques : Legrand (n°1 France), Schneider (Resi9), Hager, ABB.'
            },
            {
              title: 'Nombre minimum de prises (NF C 15-100)',
              content: 'Séjour (>28m²) : 7 prises 16A minimum (dont 1 prise à côté de chaque prise TV). Séjour (<28m²) : 5 prises. Chambre : 3 prises minimum (dont 1 à proximité de l\'interrupteur d\'entrée). Cuisine : 6 prises 16A minimum (dont 4 au-dessus du plan de travail en crédence), + circuits spécialisés : 1 circuit 32A pour la plaque/cuisinière, 1 circuit 20A pour le four, 1 circuit 20A pour le lave-vaisselle, 1 circuit 20A pour le lave-linge (si en cuisine). SDB : dépend des volumes (voir ci-dessous). WC : 1 prise minimum. Couloir/entrée : 1 prise par 4m² (1 minimum). Chaque prise TV doit être accompagnée de 2 prises 16A + 1 prise RJ45 (réseau). Prises plan de travail cuisine : à 8cm minimum au-dessus du plan de travail, hors volume d\'eau (pas au-dessus de l\'évier).'
            },
            {
              title: 'Volumes de sécurité en salle de bain',
              content: 'La SDB est divisée en 3 volumes de sécurité (+ hors volume) qui déterminent ce qu\'on peut installer à chaque endroit. Volume 0 (intérieur de la baignoire/douche) : RIEN sauf alimentation 12V TBTS. Volume 1 (au-dessus de la baignoire/douche, jusqu\'à 2,25m de hauteur) : chauffe-eau (si pas d\'autre emplacement), luminaire 12V IPX4 minimum. PAS de prise, PAS d\'interrupteur. Volume 2 (60cm autour de la baignoire/douche, même hauteur) : luminaire classe II IPX4, sèche-serviettes classe I si protégé par un DDR 30mA, rasoir 20/44V (transformateur de séparation). PAS de prise classique. Hors volume (au-delà de 60cm) : tout est autorisé sous protection DDR 30mA. Les prises classiques, les interrupteurs, le sèche-cheveux. La douche à l\'italienne sans paroi fixe : le volume 1 s\'étend à 1,20m autour de la pomme de douche. Impact DIRECT sur le plan électrique — toujours dessiner les volumes sur le plan avant de placer les prises et les luminaires.'
            },
            {
              title: 'Éclairage et commandes',
              content: 'Chaque pièce doit avoir un point d\'éclairage commandé depuis l\'entrée. Le point lumineux au plafond (DCL — Dispositif de Connexion Luminaire) est la référence — mais un point lumineux mural ou en applique est accepté. Va-et-vient : OBLIGATOIRE si la pièce a 2 accès (2 interrupteurs commandent la même lumière). Télérupteur : pour 3 accès ou plus (couloir, grand séjour). Variateur : non obligatoire mais fortement recommandé pour le confort — en séjour et chambre au minimum. Circuits d\'éclairage : 8 points lumineux maximum par circuit (protection 10A). Circuits prises : 8 prises maximum par circuit (protection 16A). Circuits spécialisés : 1 circuit dédié par gros appareil (four, plaque, lave-linge, sèche-linge, lave-vaisselle, chauffe-eau, VMC, PAC, volets roulants). La domotique (KNX, Legrand Céliane with Netatmo, Schneider Wiser) se prévoit DÈS la conception — les câblages supplémentaires (bus, neutre aux interrupteurs) doivent être tirés avant les finitions.'
            }
          ],
          keyPoints: [
            'NF C 15-100 : 6 prises minimum en cuisine dont 4 en crédence + circuits spécialisés pour chaque gros appareil',
            'Les volumes de sécurité en SDB dictent TOUT le plan électrique — les dessiner AVANT de placer prises et luminaires',
            'Interrupteur différentiel 30mA OBLIGATOIRE sur tous les circuits — type A pour les circuits spécialisés',
            'Toujours prévoir 20% de réserve dans le tableau électrique pour les évolutions futures',
            'La domotique se prévoit à la conception — impossible à rajouter proprement après les finitions'
          ],
          tips: [
            'Dessiner les 3 volumes de sécurité SDB sur le plan d\'implantation AVANT de choisir les emplacements de prises et spots. Donner ce plan à l\'électricien — ça évite 90% des erreurs',
            'En rénovation d\'appartement ancien : le tableau électrique est souvent sous-dimensionné (4-6 disjoncteurs pour un T3). Prévoir un remplacement complet du tableau = 800-1 500€ mais indispensable',
            'Toujours tirer un neutre aux interrupteurs (même si pas de domotique aujourd\'hui) — les interrupteurs connectés en auront besoin demain. Coût supplémentaire : quasi nul si fait à la construction'
          ],
          tags: ['électricité', 'NF C 15-100', 'prise', 'tableau', 'volumes SDB', 'éclairage', 'norme']
        },
        {
          id: 'climatisation',
          category: 'CVC & Ventilation',
          title: 'Climatisation & Pompes à Chaleur Air-Air',
          subtitle: 'Split, gainable, réversible — rafraîchir sans enlaidir',
          summary: 'Avec le changement climatique, la climatisation n\'est plus un luxe mais une nécessité dans une grande partie de la France. L\'architecte d\'intérieur doit savoir l\'intégrer sans compromettre l\'esthétique — car l\'unité intérieure mal placée est le cauchemar visuel n°1 des beaux intérieurs.',
          sections: [
            {
              title: 'Types de systèmes',
              content: 'Split mural : unité intérieure murale + unité extérieure. Le plus courant, le moins cher (800-2 500€ posé). Inconvénient : l\'unité intérieure est VISIBLE — boîtier blanc de ~80x30cm sur le mur. Difficile à intégrer esthétiquement. Multisplit : 1 unité extérieure alimente 2-5 unités intérieures (différentes pièces). Économise l\'espace extérieur (1 seul groupe au lieu de 3-4). Gainable (ducted) : l\'unité intérieure est cachée dans un faux-plafond et l\'air climatisé est distribué par des gaines vers des grilles ou diffuseurs encastrés au plafond. TOTALEMENT INVISIBLE depuis la pièce. Le top en intégration. Prix : 5 000-15 000€ installé pour un T3-T4. Nécessite un faux-plafond de 25-35cm dans au moins une zone (couloir, SDB, dressing). Console : unité intérieure posée au sol (comme un radiateur). Discret, bonne distribution de l\'air. Cassette : encastrée dans le faux-plafond (carré 60x60). Pour les bureaux et commerces. Toutes ces unités peuvent être RÉVERSIBLES = chauffage en hiver + clim en été. C\'est une pompe à chaleur air-air (PAC air-air).'
            },
            {
              title: 'Performance et dimensionnement',
              content: 'COP (Coefficient de Performance) : en mode chaud, une PAC avec un COP de 4 produit 4 kWh de chaleur pour 1 kWh d\'électricité. Plus le COP est élevé, plus c\'est économique. EER (Energy Efficiency Ratio) : même chose en mode froid. SEER/SCOP : versions saisonnières (moyennes annuelles). Un bon split : SEER ≥ 6, SCOP ≥ 4. Dimensionnement : en moyenne 100W/m² de puissance froid en logement bien isolé, 130-150W/m² en ancien mal isolé. Un séjour de 30m² = ~3 000-4 500W. ATTENTION au surdimensionnement : un split trop puissant fait du « court-cyclage » (démarre/arrête en permanence) = inconfort + usure prématurée + surconsommation. Le dimensionnement doit être fait par un professionnel (bilan thermique). Niveau sonore : l\'unité intérieure doit être ≤ 25 dB(A) en vitesse basse pour une chambre. Les splits premium (Daikin Stylish, Mitsubishi Zen) descendent à 19-21 dB(A). L\'unité extérieure fait 45-55 dB(A) — attention aux voisins et à la réglementation (émergence limitée à +5dB le jour, +3dB la nuit).'
            },
            {
              title: 'Intégration architecturale',
              content: 'Le gainable est LA solution pour les intérieurs design — aucune unité visible. L\'air sort par des grilles linéaires encastrées dans le faux-plafond (type « slot diffuser »). Grilles linéaires : les plus élégantes, quasi invisibles (Madel, Trox, fournisseurs CVC). 2-3cm de large, peintes de la couleur du plafond. Le gainable peut passer dans : un faux-plafond de couloir (le plus courant — le couloir est toujours faux-plafonné), un faux-plafond de SDB ou de dressing, au-dessus des placards de cuisine. Si le gainable est impossible (pas assez de hauteur) : le split mural peut être intégré dans une niche de placard avec une grille de reprise et de soufflage — l\'air est canalisé, le split est invisible. Certains fabricants proposent des splits « design » : Daikin Stylish (profil ultra-fin, noir ou argent), Samsung Wind-Free (pas de flux d\'air direct — micro-perforations), LG Artcool Gallery (façade interchangeable comme un tableau). L\'unité extérieure : toujours sur balcon, terrasse ou façade arrière. Cache-clim en aluminium ou bois (Deco-clim, Amazon) pour l\'esthétique et la protection.'
            },
            {
              title: 'Réglementation et copropriété',
              content: 'En copropriété : l\'installation d\'une unité extérieure en façade nécessite l\'AUTORISATION de l\'assemblée générale des copropriétaires (vote à la majorité absolue article 25). Certaines copros l\'interdisent totalement (façade classée, ABF). Solution si copro refuse : PAC air-eau (avec unité intérieure uniquement — pas d\'unité extérieure visible, mais groupe sur balcon ou en toiture). Ou clim réversible sans unité extérieure (type Unico, Innova — tout-en-un mural avec double flux par le mur — performance limitée mais pas de groupe extérieur). Réglementation bruit : l\'unité extérieure doit respecter le code de la santé publique (émergence maximale : +5 dB jour, +3 dB nuit par rapport au bruit ambiant). Faire un constat d\'huissier du niveau sonore ambiant AVANT installation en cas de voisinage sensible. Fluide frigorigène : les installateurs doivent être certifiés pour la manipulation des fluides (attestation de capacité). R32 = le fluide standard actuel (GWP 675, meilleur que l\'ancien R410A).'
            }
          ],
          keyPoints: [
            'Le gainable = climatisation INVISIBLE — la seule solution qui respecte l\'esthétique d\'un bel intérieur',
            'En copropriété : l\'unité extérieure nécessite un VOTE en AG — anticiper dès le projet',
            'Dimensionner correctement (100-130W/m²) — le surdimensionnement est pire que le sous-dimensionnement',
            'Niveau sonore ≤ 25 dB(A) pour une chambre — exiger les splits premium',
            'PAC réversible = chauffage + clim — le système 2 en 1 le plus économique'
          ],
          tips: [
            'Le gainable dans le faux-plafond du couloir avec grilles linéaires Madel = la solution invisible parfaite. Le couloir est toujours faux-plafonné de toute façon (passage de VMC, spots)',
            'Si le client refuse le gainable pour raisons de budget : le Daikin Stylish noir en applique haute dans le séjour est le split le plus discret du marché (15cm de profondeur)',
            'Prévoir la réservation de la liaison frigorifique (2 tubes cuivre + câble + gaine de condensats) dans les plans AVANT les finitions — percer un mur fini pour passer les tubes = catastrophe'
          ],
          tags: ['climatisation', 'PAC', 'gainable', 'split', 'réversible', 'confort', 'été']
        },
        {
          id: 'escaliers-types-calcul',
          category: 'Escaliers & Ouvrages',
          title: 'Escaliers : Types, Calcul & Matériaux',
          subtitle: 'Droit, quart tournant, hélicoïdal — la loi de Blondel et l\'art de monter',
          summary: 'L\'escalier est l\'ouvrage le plus complexe de l\'architecture d\'intérieur — il combine structure, ergonomie, sécurité et esthétique en un seul objet. Un escalier mal calculé est inconfortable (on trébuche), dangereux (on tombe) et laid (proportions disgracieuses). La formule de Blondel est le premier réflexe de tout architecte d\'intérieur.',
          sections: [
            {
              title: 'Formule de Blondel et dimensions',
              content: 'La formule de Blondel (1675) : 2h + g = 60 à 64 cm, où h = hauteur de marche et g = giron (profondeur de marche). C\'est LA règle d\'or — un escalier qui la respecte est naturellement confortable. Valeurs idéales : hauteur de marche h = 17-18 cm (max 21 cm en ERP, recommandé 17 cm pour un confort optimal), giron g = 25-28 cm (min 24 cm pour un pied complet). Exemple de calcul : hauteur d\'étage 2,70 m ÷ 17 cm = 15,88 → 16 marches de 16,9 cm. Giron : 64 - (2 × 16,9) = 30,2 cm. Vérification Blondel : 2 × 16,9 + 30,2 = 64 cm ✓. Emmarchement (largeur utile) : 80 cm minimum (passage d\'une personne), 90-100 cm pour un confort standard, 120 cm si passage de meubles fréquent. Échappée (hauteur libre sous le plafond au-dessus) : 2,00 m MINIMUM — la tête ne doit jamais toucher. En pratique, prévoir 2,10 m pour le confort. La trémie (ouverture dans le plancher) doit être dimensionnée pour respecter cette échappée — c\'est souvent LA contrainte n°1 en rénovation.'
            },
            {
              title: 'Types d\'escaliers',
              content: 'Escalier droit : le plus simple, le plus confortable, le plus encombrant. Emprise au sol : 4-5 m de long pour un étage standard. Parfait si la place est disponible. Quart tournant (1/4 tournant) : 1 virage à 90°. Le plus courant en maison individuelle. L\'angle peut être en bas, en haut ou au milieu (avec palier de repos). Avec marches rayonnantes dans l\'angle (les marches sont plus étroites à l\'intérieur — attention au confort). Deux quarts tournants (2/4 ou demi-tournant) : 2 virages de 90° ou un demi-tour à 180°. Compact — idéal quand l\'emprise est limitée. Avec palier intermédiaire = plus confortable. Hélicoïdal (colimaçon) : escalier en spirale autour d\'un noyau central. L\'emprise la plus faible (trémie circulaire Ø140-180 cm). Inconvénient : les marches sont très étroites côté noyau — inconfortable pour descendre, impossible pour monter des meubles. Spectaculaire visuellement (escalier sculptural). Escalier suspendu (autoportant) : les marches sont encastrées dans le mur porteur ou suspendues par des tiges au plafond. Pas de limon visible, pas de contremarche — l\'escalier semble flotter. Le top du design contemporain. Coût : 8 000-25 000€ selon matériaux et complexité.'
            },
            {
              title: 'Matériaux',
              content: 'Bois massif : le classique — chêne (le n°1), hêtre (bon rapport qualité/prix), frêne (design scandinave). Un escalier sur-mesure en chêne massif : 5 000-12 000€. Le bois peut être lasuré, verni, peint, ou laissé brut huilé. Les escaliers peints en blanc ou en noir mat avec marches en chêne naturel = le combo déco le plus populaire. Métal (acier) : structure en acier (limon, crémaillère ou tube) + marches en bois, verre ou métal. Le style industriel/loft. Acier thermolaqué noir mat = le standard design. Un escalier métal + bois sur-mesure : 6 000-15 000€. Chez des artisans serruriers. Béton : coulé en place ou préfabriqué. Le plus solide, le plus silencieux (masse = pas de vibration). Revêtement : béton ciré, carrelage, bois collé, moquette. En neuf : l\'escalier béton est souvent le choix le plus économique (structure brute 2 000-4 000€, puis habillage). Verre : marches en verre feuilleté trempé (44.4 minimum). Spectaculaire, laisse passer la lumière. Coût élevé : 800-1 500€ la marche. Combinaison : la plupart des escaliers design combinent 2 matériaux — limon acier + marches chêne, structure béton + nez de marche bois, garde-corps verre + main courante inox.'
            },
            {
              title: 'Escaliers préfabriqués et sur-mesure',
              content: 'Préfabriqué (kit) : escaliers standards vendus par des fabricants spécialisés. Dimensions modulables mais limitées. Qualité correcte à bonne. Prix : 1 500-5 000€. Marques : Lapeyre (le classique français), Fontanot (italien, hélicoïdaux design), Mobirolo (compact). Sur-mesure artisanal : dessiné par l\'architecte, fabriqué par un menuisier ou un serrurier. Liberté totale de formes, matériaux, dimensions. Délai : 4-8 semaines de fabrication. C\'est le seul choix quand les dimensions sont atypiques (hauteur non standard, trémie contrainte). Sur-mesure industriel : entreprises spécialisées qui font du sur-mesure à prix contenu grâce à la production numérique (CNC). Escaliers Décors, Art Escaliers. Limon crémaillère = le limon est découpé en dents de scie, les marches reposent dessus. L\'esthétique la plus légère. Limon à l\'anglaise = les marches sont encastrées dans le limon. Plus massif, plus classique. Limon central = un seul limon au milieu, les marches en porte-à-faux de chaque côté. Le plus sculptural.'
            }
          ],
          keyPoints: [
            'Formule de Blondel : 2h + g = 60-64 cm — la règle d\'or incontournable pour un escalier confortable',
            'Hauteur de marche idéale : 17 cm. Giron idéal : 27 cm. Échappée minimum : 2,00 m',
            'Le quart tournant = le plus courant en maison. L\'hélicoïdal = l\'emprise minimale mais le confort minimal aussi',
            'L\'escalier suspendu (marches flottantes) = le summum du design contemporain (8 000-25 000€)',
            'La trémie (trou dans le plancher) est LA contrainte n°1 — elle dicte le type d\'escalier possible'
          ],
          tips: [
            'TOUJOURS vérifier l\'échappée en premier — un bel escalier sous lequel on se cogne la tête est un échec total. Dessiner une coupe longitudinale avec le plafond au-dessus',
            'Le combo limon acier thermolaqué noir + marches chêne huilé = le best-seller en rénovation contemporaine. Budget : 6 000-10 000€ sur-mesure chez un artisan serrurier local',
            'Peindre les contremarches en blanc et huiler les marches en chêne naturel = le relooking le plus impactant d\'un escalier existant. Budget : 200€ de peinture + huile + un week-end'
          ],
          tags: ['escalier', 'Blondel', 'marche', 'giron', 'quart tournant', 'hélicoïdal', 'limon']
        },
        {
          id: 'garde-corps-balustrades',
          category: 'Escaliers & Ouvrages',
          title: 'Garde-corps & Balustrades',
          subtitle: 'NF P01-012, hauteurs, matériaux — la sécurité qui se voit',
          summary: 'Le garde-corps est un élément de SÉCURITÉ réglementé par la norme NF P01-012. Hauteur minimale, résistance aux charges, espacement des barreaux — tout est normé. Mais c\'est aussi un élément de design majeur qui caractérise un intérieur. Le défi : respecter la norme tout en créant quelque chose de beau.',
          sections: [
            {
              title: 'Norme NF P01-012 : les règles',
              content: 'Hauteur minimale du garde-corps : 1,00 m si la hauteur de chute est > 1 m (le cas général — escaliers, mezzanines, balcons). 0,90 m si l\'épaisseur du garde-corps est ≥ 50 cm (allège de fenêtre, muret large). 0,80 m si l\'épaisseur est ≥ 60 cm. ATTENTION : la hauteur se mesure depuis le NEZ DE MARCHE (pas depuis la marche elle-même) pour les escaliers, et depuis le sol fini pour les paliers et balcons. Zone de sécurité : dans les 45 premiers cm au-dessus du sol, le garde-corps ne doit pas comporter d\'élément horizontal permettant l\'escalade par un enfant (pas de barreaux horizontaux dans cette zone !). Les barreaux verticaux doivent avoir un espacement maximum de 11 cm (la tête d\'un enfant ne doit pas pouvoir passer). Si remplissage panneau (verre, tôle, etc.) : pas d\'ouverture > 11 cm. Résistance : le garde-corps doit résister à une charge horizontale de 60 daN/ml (logement) appliquée en tête. En ERP : 100 daN/ml. Le garde-corps est OBLIGATOIRE dès que la hauteur de chute dépasse 1 m.'
            },
            {
              title: 'Types et matériaux',
              content: 'Barreaudage vertical en métal : le classique universel. Barreaux en acier rond (Ø12-16mm) ou carré (12x12, 16x16mm). Espacement : ≤ 11 cm entre axes. Finition : thermolaqué noir (le standard), acier brut ciré (industriel), laiton (luxe). Fabrication par un serrurier ou achat en kit. Câbles tendus horizontaux (inox) : fils en inox Ø3-4mm tendus horizontalement entre deux montants. Très léger visuellement, quasi transparent. MAIS : les câbles horizontaux créent une « échelle » pour les enfants — interdit dans certaines interprétations strictes de la norme (zone d\'escalade dans les 45 premiers cm). Vérifier avec le contrôleur technique. Verre : feuilleté trempé (44.2 ou 55.2 minimum pour un garde-corps). Fixation par profil U au sol (le plus propre), par pinces/rotules, ou par fixation latérale. Le garde-corps tout verre = la transparence maximale, parfait pour les mezzanines (vue dégagée) et les escaliers design. Coût : 300-600€/ml posé. Main courante seule : si un mur borde l\'escalier, une main courante murale suffit (Ø40-50mm, à 90-100 cm du nez de marche). Bois (chêne, hêtre) ou métal (inox, acier thermolaqué).'
            },
            {
              title: 'Garde-corps de balcon et terrasse',
              content: 'Le garde-corps extérieur doit résister aux intempéries EN PLUS des charges. Matériaux extérieurs : acier galvanisé à chaud + thermolaquage (le standard — le galva protège de la corrosion, le thermolaquage donne la couleur), aluminium (ne rouille pas, léger, mais plus cher), inox 316L (marine — le top pour le bord de mer mais budget ×3), fer forgé (patrimoine, restauration de l\'ancien — artisanal, 200-500€/ml). Verre extérieur : feuilleté trempé avec fixation inox. Attention au vent (calcul des charges de vent selon l\'exposition et la hauteur du bâtiment — norme NF EN 1991-1-4). En copropriété : le garde-corps de balcon est une partie commune — toute modification (remplacement, ajout de verre) nécessite un vote en AG. Attention : les garde-corps anciens en fonte ou fer forgé sont souvent patrimoniaux — ne pas les remplacer sans vérifier le PLU et les prescriptions ABF si secteur protégé. Solution : doubler le garde-corps existant par un verre feuilleté fixé à l\'intérieur (sécurité + préservation du patrimoine).'
            },
            {
              title: 'Design et tendances',
              content: 'Minimaliste : verre feuilleté sans montant visible (fixation par profil U encastré dans le sol ou la dalle). L\'escalier semble ne pas avoir de garde-corps — effet spectaculaire. Les marques Sadev (fixations ponctuelles), Q-railing (systèmes complets), CRL offrent des systèmes de fixation très discrets. Industriel : barreaudage acier carré 20x20mm thermolaqué noir, main courante tube rond Ø42mm. Le standard des lofts et des rénovations contemporaines. Classique revisité : barreaux verticaux en métal noir avec main courante en chêne massif. Le mariage parfait entre tradition et modernité. C\'est le garde-corps le plus polyvalent — il fonctionne en haussmannien comme en contemporain. Art déco : motifs géométriques en acier ou laiton (cercles, chevrons, arcs). Le comeback de l\'Art déco en 2024-2026 rend ce style très demandé. Fabrication par un serrurier d\'art — 300-800€/ml mais c\'est de la haute couture. Filin inox + montants bois : le style « bord de mer » ou « montagne contemporaine ». Léger, transparent, chaleureux.'
            }
          ],
          keyPoints: [
            'NF P01-012 : hauteur 1,00 m minimum, barreaux espacés de ≤ 11 cm, pas d\'élément escaladable dans les 45 premiers cm',
            'Verre obligatoirement FEUILLETÉ (pas juste trempé) pour les garde-corps — les morceaux doivent rester collés',
            'Les câbles horizontaux = attention zone d\'escalade — vérifier avec le contrôleur technique si enfants',
            'Acier galvanisé + thermolaqué = le standard extérieur. Inox 316L pour le bord de mer',
            'La hauteur se mesure depuis le NEZ DE MARCHE en escalier — pas depuis la marche'
          ],
          tips: [
            'Barreaux carrés 16x16mm acier thermolaqué noir + main courante chêne = le garde-corps d\'escalier le plus élégant et le plus polyvalent. Budget : 150-250€/ml chez un serrurier local',
            'En mezzanine : privilégier le verre feuilleté pour conserver la vue et la lumière. Un garde-corps opaque en mezzanine = la mezzanine semble être une cage',
            'Garde-corps haussmannien en fonte à restaurer : un bon ferronnier peut le sabler, traiter antirouille et repeindre pour 100-150€/ml. Le patrimoine vaut toujours mieux que le neuf'
          ],
          tags: ['garde-corps', 'balustrade', 'NF P01-012', 'sécurité', 'verre', 'barreaudage', 'main courante']
        },
        {
          id: 'serrurerie-metallerie',
          category: 'Escaliers & Ouvrages',
          title: 'Serrurerie & Métallerie Décorative',
          subtitle: 'Acier, fer forgé, laiton, inox — les ouvrages sur-mesure qui signent un intérieur',
          summary: 'La serrurerie-métallerie, c\'est l\'art de transformer le métal en architecture. Verrières, escaliers, garde-corps, étagères murales, consoles, crédences — ces ouvrages sur-mesure signent un intérieur et le distinguent du tout-venant. L\'architecte d\'intérieur travaille AVEC un serrurier artisan — c\'est un partenariat essentiel.',
          sections: [
            {
              title: 'Matériaux métalliques',
              content: 'Acier (fer) : le métal de base de la serrurerie. Solide, économique, soudable. DOIT être protégé contre la corrosion (peinture, thermolaquage, galvanisation, ou cirage pour un aspect brut). Acier thermolaqué : poudre époxy cuite au four à 180°C — finition lisse, durable, disponible en toutes couleurs RAL. Le NOIR MAT (RAL 9005 mat) est le standard absolu en design d\'intérieur contemporain. Acier brut ciré : l\'acier est laissé tel quel (gris bleuté avec des traces de meulage) et protégé par une cire ou un vernis mat. Le look industriel authentique. ATTENTION : l\'acier brut non protégé ROUILLE — la cire est un entretien, pas une protection définitive. Acier Corten : acier auto-patinable qui développe une couche de rouille protectrice stable. L\'aspect rouille est volontaire et esthétique. En extérieur (bardage, jardinières) ou en accent intérieur (cheminée habillage, claustra). Ne rouille pas indéfiniment — la patine se stabilise en 6-24 mois.'
            },
            {
              title: 'Inox, laiton, cuivre',
              content: 'Inox (acier inoxydable) : ne rouille pas (chrome > 10,5%). Inox 304 = intérieur standard. Inox 316L = extérieur, piscine, bord de mer (résiste au sel). Finitions : brossé (le plus courant — effet satiné directionnel), poli miroir (très brillant — luxe/hôtellerie), microbillé (mat uniforme). L\'inox est froid et « hospitalier » — il faut le doser. Laiton : alliage cuivre-zinc. LA tendance 2020-2026 en architecture d\'intérieur. Couleur dorée chaude qui patine naturellement (le laiton non verni se couvre d\'une patine brunâtre avec le temps — c\'est le charme). Laiton brossé = le finish le plus élégant. Laiton poli = le look « bijou ». Usages : poignées, crédences, étagères, luminaires, miroirs encadrés, nez de marche, plinthes. Fabricants : Dauby (poignées artisanales), Buster+Punch (London, design brut), Tom Dixon (luminaires). Cuivre : cousin du laiton, plus rouge/rosé. Patine vert-de-gris avec le temps (comme la Statue de la Liberté). Magnifique en crédence de cuisine (cuivre brut brossé). Plus difficile à entretenir (traces de doigts) — vernir ou accepter la patine.'
            },
            {
              title: 'Ouvrages courants en architecture d\'intérieur',
              content: 'Verrière d\'atelier : LA star de la serrurerie d\'intérieur. Structure acier (profils 30x30 ou 40x40mm) + vitrage simple ou feuilleté. Finition thermolaquée noir mat. Prix artisan : 600-1 200€/m² posé. Alternatives industrielles moins chères : Lapeyre, Leroy Merlin (300-500€/m²) — qualité correcte mais pas la finesse artisanale. Claustra / séparation ajourée : panneaux en tôle découpée au laser — motifs géométriques, végétaux, abstraits. En acier thermolaqué, laiton ou Corten. Spectaculaire en séparation d\'espace sans cloisonner. Étagères murales : équerres en acier plat (30x6mm) soudées + tablettes bois. Le meuble « sur-mesure » le plus simple et le plus impactant. Budget : 50-100€ l\'équerre chez un serrurier + le bois. Console / table : piètement acier (tube carré 40x40 ou 50x50mm, ou plat 60x8mm) + plateau bois ou marbre. Le meuble signature d\'un intérieur sur-mesure. Encadrement de miroir : cadre en acier plat ou en laiton, soudé et fini à la main. Le miroir passe d\'objet banal à objet d\'art.'
            },
            {
              title: 'Travailler avec un serrurier',
              content: 'Le serrurier-métallier artisan est LE partenaire clé de l\'architecte d\'intérieur — il fabrique ce qu\'aucun catalogue ne propose. Le processus : 1) Plan de l\'architecte (cotes précises, matériaux, finition). 2) Le serrurier fait un plan d\'atelier et un devis. 3) Fabrication en atelier (2-4 semaines). 4) Pose sur chantier (1-2 jours par ouvrage). Trouver un bon serrurier : les Compagnons du Devoir (formation d\'excellence), les artisans locaux recommandés par d\'autres architectes, les plateformes comme Architectes-France ou Houzz. Budget : un serrurier artisan facture 50-80€/h. Un ouvrage sur-mesure (verrière, garde-corps, escalier) représente 40-60% de main d\'œuvre et 40-60% de matière. Le délai est LE facteur critique — les bons serruriers sont bookés 2-3 mois à l\'avance. COMMANDER DÈS la validation du projet. Erreur classique : attendre la fin du chantier pour commander la verrière → 2 mois de retard. Astuce : demander des échantillons de finition (thermolaqué, acier brut ciré, laiton brossé) pour validation client AVANT la fabrication.'
            }
          ],
          keyPoints: [
            'Acier thermolaqué noir mat (RAL 9005) = LE standard absolu de la métallerie d\'intérieur contemporaine',
            'Le laiton brossé patiné = LA tendance 2020-2026 — chaleur, luxe discret, vieillissement noble',
            'La verrière artisan (600-1 200€/m²) vs industrielle (300-500€/m²) : la finesse des profils fait la différence',
            'Commander les ouvrages métalliques DÈS la validation — les bons serruriers sont bookés 2-3 mois',
            'Acier Corten = la rouille volontaire et esthétique — se stabilise en 6-24 mois'
          ],
          tips: [
            'Équerres en acier plat 30x6mm + tablette chêne 30mm = l\'étagère murale la plus élégante qui soit. Un serrurier local en fabrique 6 pour 300-400€. Aucun catalogue ne propose ce ratio beauté/prix',
            'Pour les petits budgets : les profilés acier bruts de chez un négoce métaux (Descours & Cabaud, Arcelor Profil) coûtent 5-10€/ml. Un bon bricoleur avec une meuleuse et une bombe de peinture noire mate peut faire des miracles',
            'Demander au serrurier de faire les soudures VISIBLES et meulées proprement (sans les cacher) = l\'esthétique industrielle authentique. Les soudures cachées font "usine", les soudures assumées font "atelier d\'artiste"'
          ],
          tags: ['serrurerie', 'métallerie', 'acier', 'laiton', 'inox', 'verrière', 'thermolaquage', 'fer forgé']
        }
      ]
    }
  ]
};
