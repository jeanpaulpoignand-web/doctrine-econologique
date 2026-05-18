import React, { useState } from 'react';
import { ChevronRight, Download, Folder, ExternalLink } from 'lucide-react';

export default function DoctrineEconologique() {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedPillar, setExpandedPillar] = useState(null);

  const pillars = [
    {
      id: 'energie',
      title: 'Énergie',
      subtitle: 'Atout souverain français : nucléaire + hydro',
      icon: '⚡',
      color: 'from-blue-600 to-blue-800',
      tagline: 'Fondation de l\'indépendance technologique',
      keyStats: [
        { label: 'Mix bas-carbone', value: '70% nucléaire' },
        { label: 'Intensité carbone', value: '19,6 gCO₂e/kWh' },
        { label: 'Avantage UE', value: 'Unique & stable' },
        { label: 'Enjeu IA/Data', value: '+115 TWh/an 2030' },
      ],
      description: 'La France dispose d\'un mix électrique unique en Europe : 70% nucléaire + 25% hydro ancien = 95% bas-carbone et stable. C\'est l\'atout fondamental pour la souveraineté énergétique, la compétitivité industrielle, et l\'attraction des hyperscalers IA.',
      impact: 'Protège le pouvoir d\'achat électrique français, positionne la France comme hub IA européen, garantit indépendance stratégique face aux marchés carbonés.',
      driveLink: 'https://drive.google.com/drive/folders/1OdYykoz0h6pcVSLiwoPgjtRCt4Xf2kAw',
      driveName: 'Pilier 1 — Énergie',
    },
    {
      id: 'garantie',
      title: 'Garantie Légale de Durabilité',
      subtitle: '10 ans obligatoires sur tous les biens',
      icon: '🛡️',
      color: 'from-green-600 to-green-800',
      tagline: 'Reprise du contrôle consommateurs + création d\'emplois',
      keyStats: [
        { label: 'Marché global', value: '~4,500 Md€/an' },
        { label: 'Emplois créés', value: '+5–7M net' },
        { label: 'Pouvoir d\'achat', value: '+1,000 Md€/an' },
        { label: 'CO₂ évité', value: '300–400 Mt/an' },
      ],
      description: 'Obligation de garantie décennale transmissible sur tous les biens électroniques. Fin de l\'obsolescence programmée. Réparation avant remplacement. Impact massif : restauration du pouvoir d\'achat ménages, création de 5–7 millions d\'emplois locaux réparation/reconditionnement, réduction carbone structurelle.',
      impact: 'Économie circulaire réelle. Réindustrialisation locale. Hausse du pouvoir d\'achat familial jusqu\'à 245 €/mois selon périmètre. Réduction émissions de 300–400 Mt CO₂/an.',
      driveLink: 'https://drive.google.com/drive/folders/12VRVnUjQ2EwRp7LhG7JpKdmikooh8E-t',
      driveName: 'Pilier 2 — Garantie Décennale',
    },
    {
      id: 'vieillissement',
      title: 'Vieillissement, Dépendance & Robotique',
      subtitle: 'Souveraineté technologique gériatrique',
      icon: '🤖',
      color: 'from-amber-600 to-amber-800',
      tagline: 'Démographie 2050 + robotisation souveraine',
      keyStats: [
        { label: 'Seniors perte autonomie 2050', value: '2,8M' },
        { label: 'FTEs additionnels requis', value: '156–202K' },
        { label: 'Cumul embauches 2050', value: '~800K' },
        { label: 'Enjeu: championnats industri', value: 'vs Toyota/Cyberdyne' },
      ],
      description: 'DREES 2026 : 2,8 millions de seniors en perte d\'autonomie d\'ici 2050. Shortage caregiver structurellement insoluble par RH classique. Solution : robotisation gériatrique souveraine. Europe n\'a pas de champion (vs Toyota, Honda, Cyberdyne Japon; Tesla/Figure États-Unis). Doctrine : construire capacité souveraine dès 2026.',
      impact: 'Crée marché de 156–202K FTEs supplémentaires + 800K cumuls d\'ici 2050. Force l\'Europe à développer robot humanoides et exoskeletons domestiques. Dignité des seniors + emplois + souveraineté technologique.',
      driveLink: 'https://drive.google.com/drive/folders/1PZI6_h6qPxwElrGvsxzPyUD1JkqiK7xb',
      driveName: 'Pilier 5 — EHPAD & Vieillissement',
    },
    {
      id: 'capital',
      title: 'Capital Humain & Souveraineté Compétences',
      subtitle: 'Reclassement + formation + emploi local',
      icon: '👥',
      color: 'from-slate-700 to-slate-900',
      tagline: 'Colonne vertébrale sociale de la transition',
      keyStats: [
        { label: 'Population active', value: '26M FR' },
        { label: 'Transition secteurs', value: 'Tous piliers' },
        { label: 'Gap à combler', value: 'Admin → production' },
        { label: 'Enjeu: reclassement', value: 'Dignité + employabilité' },
      ],
      description: 'Chaque pilier (énergie, durabilité, robotique, etc.) crée destructions et créations d\'emplois. Capital humain = le connective tissue. Formation continue, reclassement des staff administratif vers production, apprentissage technologique, densité compétences locales. Gap identifié : aucun plan structuré pour staff reclassé (ex: municipalités, agences d\'État).',
      impact: 'Assure que transition n\'abandonne personne. Crée "empowerment" local : communities reskilled, capables de participer transformation. Réduit risque de polarisation territoire.',
      driveLink: 'https://drive.google.com/drive/folders/1eGxc6AfZ5yB_lNPMnEv0E91LpdL-Iq2O',
      driveName: 'Pilier 8 — Capital Humain',
    },
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_25%,rgba(255,255,255,.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.1)_75%,rgba(255,255,255,.1))] bg-[length:40px_40px]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="mb-4 font-serif text-5xl md:text-7xl font-bold text-white leading-tight">Doctrine<br />Éconologique</h1>
          <p className="mb-8 max-w-2xl font-serif text-xl md:text-2xl text-slate-300 italic">Souveraineté française, production locale, reprise de contrôle économique.</p>
          <p className="max-w-3xl text-slate-400 leading-relaxed text-lg">Un cadre institutionnel complet construit autour de quatre piliers : énergie souveraine, durabilité obligatoire, robotique gériatrique, capital humain reclassé. Qualifié [FAIT]/[HYPOTHÈSE]/[ANALYSE]. Prêt à la diffusion législative.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-8">
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Problème</h3>
          <p className="text-slate-700 leading-relaxed">Économie française : dépendance énergétique croissante, désindustrialisation, obsolescence programmée, perte de compétences, vieillissement sans anticipation robotique. Chaque pilier adresse une couche structurelle.</p>
        </div>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-8">
          <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Solution</h3>
          <p className="text-slate-700 leading-relaxed">Doctrine Éconologique : quatre piliers interdépendants. Énergie stable → industrie souveraine. Durabilité → emplois locaux. Robotique gériatrique → anticipation démo. Capital humain → transition sans abandon.</p>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-3xl md:text-4xl font-serif font-bold text-slate-900">Les 4 Piliers Flagship</h2>
        <div className="space-y-4">
          {pillars.map((pillar) => (
            <button key={pillar.id} onClick={() => { setActiveSection('pillar'); setExpandedPillar(pillar.id); }} className="w-full text-left rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:bg-slate-50 transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{pillar.icon}</span>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">{pillar.title}</h3>
                      <p className="text-sm text-slate-600">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 italic mt-2">{pillar.tagline}</p>
                </div>
                <ChevronRight className="text-slate-400 flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg p-12 text-center">
        <h3 className="font-serif text-2xl font-bold text-white mb-4">Accéder à la documentation complète</h3>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Chaque pilier dispose d\'une documentation exhaustive, modèles législatifs, chiffres d\'impact, et analyses multi-IA sur Google Drive.</p>
        <button className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors">
          <Folder size={20} />
          Accéder au Drive principal
        </button>
      </div>
    </div>
  );

  const renderPillar = () => {
    const pillar = pillars.find((p) => p.id === expandedPillar);
    if (!pillar) return null;
    return (
      <div className="space-y-8">
        <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6 font-medium">
          <ChevronRight className="rotate-180" size={20} />
          Retour aux piliers
        </button>
        <div className={`rounded-xl bg-gradient-to-br ${pillar.color} p-12 text-white`}>
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">{pillar.icon}</span>
            <div className="flex-1">
              <h1 className="font-serif text-4xl font-bold mb-2">{pillar.title}</h1>
              <p className="text-xl opacity-90 mb-4">{pillar.subtitle}</p>
              <p className="text-lg italic opacity-80">{pillar.tagline}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-8">
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">Description</h3>
            <p className="text-slate-700 leading-relaxed">{pillar.description}</p>
          </div>
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-8">
            <h3 className="font-serif text-lg font-bold text-blue-900 mb-4">Impact</h3>
            <p className="text-blue-800 leading-relaxed">{pillar.impact}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Indicateurs Clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillar.keyStats.map((stat, i) => (
              <div key={i} className="rounded-lg bg-slate-50 border border-slate-200 p-6 hover:border-slate-400 transition-colors">
                <p className="text-xs font-medium text-slate-600 mb-2 uppercase tracking-wide">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-8">
          <h3 className="font-serif text-lg font-bold text-amber-900 mb-4">Qualification Analytique [FAIT]/[HYPOTHÈSE]/[ANALYSE]</h3>
          <div className="space-y-3 text-sm text-amber-900">
            <p><strong className="text-amber-900">[FAIT]</strong> Données officielles : RTE, INSEE, DREES, sources publiques documentées.</p>
            <p><strong className="text-amber-900">[HYPOTHÈSE]</strong> Scénarios de transition : adoption rates, timelines, conditions macro-économiques.</p>
            <p><strong className="text-amber-900">[ANALYSE]</strong> Modélisation impact : emplois nets, budgétaire, carbone, après ajustements comportementaux.</p>
          </div>
        </div>
        <div className="rounded-lg border border-slate-300 p-8 bg-gradient-to-r from-slate-50 to-slate-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Accéder à la documentation complète</h3>
              <p className="text-slate-600">{pillar.driveName}</p>
            </div>
            <Folder className="text-slate-400 flex-shrink-0" size={24} />
          </div>
          <p className="text-slate-700 mb-6">Tous les documents, modèles législatifs, tableaux comparatifs, et analyses détaillées sont disponibles sur Google Drive.</p>
          <a href={pillar.driveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
            <ExternalLink size={18} />
            Ouvrir sur Google Drive
          </a>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">Autres Piliers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.filter((p) => p.id !== expandedPillar).map((otherPillar) => (
              <button key={otherPillar.id} onClick={() => setExpandedPillar(otherPillar.id)} className="text-left rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition-colors group">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{otherPillar.icon}</span>
                      <h4 className="font-serif font-bold text-slate-900">{otherPillar.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{otherPillar.subtitle}</p>
                  </div>
                  <ChevronRight className="text-slate-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => { setActiveSection('home'); setExpandedPillar(null); }} className="flex items-center gap-3 hover:opacity-70 transition-opacity group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white font-serif font-bold text-lg group-hover:from-slate-700 group-hover:to-slate-500 transition-colors">D</div>
            <div className="hidden md:block">
              <p className="font-serif font-bold text-slate-900">Doctrine</p>
              <p className="text-xs text-slate-600">Éconologique</p>
            </div>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveSection('home')} className={`font-medium transition-colors ${activeSection === 'home' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Accueil</button>
            <button onClick={() => { setActiveSection('pillar'); setExpandedPillar('energie'); }} className={`font-medium transition-colors ${activeSection === 'pillar' ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>Les Piliers</button>
            <a href="https://drive.google.com/drive/folders/1QN-Evu8Bo1g1A5DcjGR7NaL8bLfm6Bbx" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1">Ressources Drive <ExternalLink size={16} /></a>
          </nav>
          <a href="https://drive.google.com/drive/folders/1QN-Evu8Bo1g1A5DcjGR7NaL8bLfm6Bbx" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-2">
            <Download size={16} />
            Accès Drive
          </a>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {activeSection === 'home' ? renderHome() : renderPillar()}
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-serif font-bold text-slate-900 mb-4">Doctrine Éconologique</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Cadre institutionnel français pour souveraineté énergétique, production locale, reprise de contrôle économique. Construite sur quatre piliers : énergie, durabilité, robotique gériatrique, capital humain.</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">Les Piliers</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {pillars.map((pillar) => (
                  <li key={pillar.id}>
                    <button onClick={() => { setActiveSection('pillar'); setExpandedPillar(pillar.id); window.scrollTo(0, 0); }} className="hover:text-slate-900 transition-colors text-left">{pillar.icon} {pillar.title}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-slate-900 mb-4">Ressources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://drive.google.com/drive/folders/1QN-Evu8Bo1g1A5DcjGR7NaL8bLfm6Bbx" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1">Google Drive Principal <ExternalLink size={14} /></a>
                </li>
                <li className="text-slate-600">Jean Paul Poignand<br />Côte d\'Azur & Besançon, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8">
            <p className="text-xs text-slate-600">© 2026 Doctrine Éconologique. Tous les énoncés qualifiés [FAIT]/[HYPOTHÈSE]/[ANALYSE]. Sources : officielles françaises & UE, médias indépendants (Investigate Europe, etc.), triangulation multi-IA (Claude, Perplexity, Gemini, Grok, ChatGPT).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
