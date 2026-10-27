export const activityCategories = ['Competiție', 'Outdoor', 'Colaborare', 'Fun'] as const;
export type ActivityCategory = (typeof activityCategories)[number];
export type Activity = {
  slug: string; minutes: number; title: string; category: ActivityCategory; duration: string;
  people: string; setting: string; summary: string; image: string;
  description: string; includes: string[];
};
export type DayItem = { kind: 'activity' | 'break'; title: string; minutes: number; slug?: string };
export type Package = {
  slug: string; name: string; price: number; unit: string; duration: string;
  people: string; summary: string; featured?: boolean; includes: string[];
  idealFor: { title: string; text: string }[];
  sampleStart: string; sampleDay: DayItem[];
};
export const activities: Activity[] = [
  { slug: 'provocarea-echipei', minutes: 150, title: 'Provocarea echipei', category: 'Competiție', duration: '2–3 ore', people: '10–60 persoane', setting: 'Exterior / interior', summary: 'Probe dinamice în care strategia contează la fel de mult ca viteza.', image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85', description: 'Echipele trec prin provocări scurte, își împart rolurile și descoperă cât de departe pot ajunge împreună. Programul se adaptează grupului și locației.', includes: ['Facilitator dedicat', 'Materiale pentru probe', 'Briefing și concluzii'] },
  { slug: 'misiune-in-aer-liber', minutes: 210, title: 'Misiune în aer liber', category: 'Outdoor', duration: '3–4 ore', people: '12–100 persoane', setting: 'Exterior', summary: 'Orientare, misiuni și decizii de echipă într-un cadru natural.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85', description: 'O experiență outdoor cu misiuni colaborative, elemente de orientare și obiective comune. Ritmul poate fi ajustat pentru echipe cu niveluri diferite de energie.', includes: ['Scenariu și misiuni', 'Echipamente de activitate', 'Coordonare pe durata programului'] },
  { slug: 'atelier-de-colaborare', minutes: 105, title: 'Atelier de colaborare', category: 'Colaborare', duration: '90–120 min', people: '8–35 persoane', setting: 'Interior', summary: 'Exerciții practice pentru comunicare, încredere și rezolvarea problemelor.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85', description: 'Un format facilitat pentru echipe care vor să comunice mai bine și să lucreze mai eficient împreună, fără prezentări interminabile.', includes: ['Facilitare', 'Exerciții ghidate', 'Discuție de încheiere'] },
  { slug: 'jocuri-si-energie', minutes: 90, title: 'Jocuri & energie', category: 'Fun', duration: '60–120 min', people: '10–80 persoane', setting: 'Interior / exterior', summary: 'Jocuri ușor de urmărit, multă energie și un motiv bun să lași laptopul deoparte.', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85', description: 'O selecție de jocuri de grup cu reguli simple, ritm bun și participare pentru toată lumea. Potrivit pentru zile de companie și întâlniri informale.', includes: ['Selecție de jocuri', 'Prezentator / facilitator', 'Materiale de bază'] },
  { slug: 'constructia-comuna', minutes: 150, title: 'Construcția comună', category: 'Colaborare', duration: '2–3 ore', people: '12–60 persoane', setting: 'Interior / exterior', summary: 'Planificare, resurse limitate și un rezultat construit împreună.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85', description: 'Participanții planifică, negociază și construiesc în echipe. Activitatea scoate la iveală stilurile de colaborare într-un mod practic și relaxat.', includes: ['Materiale de construcție', 'Instrucțiuni și obiective', 'Debrief la final'] },
  { slug: 'olimpiada-de-echipa', minutes: 180, title: 'Olimpiada de echipă', category: 'Competiție', duration: '2–4 ore', people: '20–150 persoane', setting: 'Exterior', summary: 'Probe pe echipe, punctaj comun și o finală care adună tot grupul.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=85', description: 'Un eveniment cu mai multe stații de joc, punctaj transparent și o finală comună. Bun pentru grupuri mari care vor să participe activ.', includes: ['Stații de activitate', 'Scor și clasament', 'Coordonare logistică'] },
  { slug: 'provocarea-culinara', minutes: 120, title: 'Provocarea culinară', category: 'Competiție', duration: '2 ore', people: '10–40 persoane', setting: 'Interior', summary: 'Echipele gătesc împreună, cu roluri clare, timp limitat și o probă finală.', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85', description: 'Fiecare echipă primește ingrediente și o provocare. Împart rolurile, negociază meniul și prezintă rezultatul. O activitate caldă, în care colaborarea se vede direct în farfurie.', includes: ['Ingrediente și echipament de bază', 'Facilitator și juriu', 'Prezentare și degustare finală'] },
  { slug: 'cina-de-echipa', minutes: 90, title: 'Cină de echipă în aer liber', category: 'Fun', duration: '90–120 min', people: '10–100 persoane', setting: 'Exterior', summary: 'O seară așezată la aceeași masă, cu povești, muzică și un cadru memorabil.', image: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=85', description: 'Un moment de încheiere relaxat, după o zi de activități. Organizăm locul la masă, ritmul serii și câteva momente scurte care aduc echipa aproape.', includes: ['Aranjarea mesei și a spațiului', 'Moderare și momente de grup', 'Coordonarea serii'] },
  { slug: 'quiz-de-echipa', minutes: 60, title: 'Quiz de echipă', category: 'Fun', duration: '60–90 min', people: '10–80 persoane', setting: 'Interior', summary: 'Runde tematice, întrebări despre voi și o echipă câștigătoare, dar nu cea așteptată.', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85', description: 'Un quiz cu mai multe runde: cultură generală, întrebări despre companie și probe scurte de logică. Rezultatele se schimbă până la ultima rundă, ca toată lumea să rămână în joc.', includes: ['Prezentator și scenariu', 'Sistem de punctaj', 'Premii simbolice'] },
  { slug: 'atelier-de-idei', minutes: 90, title: 'Atelier de idei', category: 'Colaborare', duration: '90–120 min', people: '8–40 persoane', setting: 'Interior', summary: 'Brainstorming ghidat, în care ideile echipei devin pași concreți.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85', description: 'Un format facilitat pentru echipe care vor să găsească soluții împreună. Pornim de la o provocare reală din companie, adunăm idei și alegem cele care merită urmate.', includes: ['Facilitare și structură', 'Materiale de lucru', 'Rezumat cu pașii următori'] },
  { slug: 'seara-jocurilor', minutes: 120, title: 'Seara jocurilor în aer liber', category: 'Outdoor', duration: '2 ore', people: '20–100 persoane', setting: 'Exterior', summary: 'Jocuri de grup la apus, sub lumini, cu multă mișcare și voie bună.', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85', description: 'O seară în aer liber cu jocuri de grup ușor de înțeles, în cerc și pe echipe. Ritmul crește treptat, iar toată lumea găsește un loc în joc, de la cei mai energici până la cei mai retrași.', includes: ['Selecție de jocuri și prezentator', 'Aranjarea spațiului și a luminilor', 'Echipament de joc'] },
  { slug: 'harta-obiectivelor', minutes: 90, title: 'Harta obiectivelor echipei', category: 'Colaborare', duration: '90–120 min', people: '8–50 persoane', setting: 'Interior', summary: 'Echipa construiește pe un perete planul vizual pentru următoarele luni.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85', description: 'Pe notițe adezive, echipa stabilește împreună obiective, priorități și responsabilități. La final, ziua se încheie cu o hartă comună pe care o puteți păstra la birou.', includes: ['Facilitare și structura atelierului', 'Notițe, markere și panouri', 'Fotografia hărții finale'] }
];
export const packages: Package[] = [
  { slug: 'start', name: 'Start', price: 10000, unit: 'per grup', duration: '4 ore', people: 'până la 25 persoane', summary: 'Două activități bine organizate pentru o echipă care vrea să iasă din rutină.', includes: ['Două activități la alegere din formatul Start', 'Facilitator', 'Materiale de bază', 'Coordonare înainte de eveniment'],
    idealFor: [
      { title: 'Echipe mici', text: 'Grupuri de până la 25 de persoane care vor o pauză reușită, fără o zi întreagă de program.' },
      { title: 'Prima experiență', text: 'Un format simplu pentru echipele care nu au mai făcut team building împreună.' },
      { title: 'Buget clar', text: 'O singură activitate bine organizată, cu logistică redusă și ușor de planificat.' }
    ],
    sampleStart: '10:00',
    sampleDay: [
      { kind: 'activity', title: 'Primire și briefing', minutes: 15 },
      { kind: 'activity', title: 'Provocarea echipei', minutes: 120, slug: 'provocarea-echipei' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Jocuri & energie', minutes: 70, slug: 'jocuri-si-energie' },
      { kind: 'activity', title: 'Debrief și încheiere', minutes: 15 }
    ] },
  { slug: 'team', name: 'Team', price: 15000, unit: 'per grup', duration: '6 ore', people: 'până la 50 persoane', summary: 'Un program echilibrat cu mai multe provocări și ritm variat.', featured: true, includes: ['Program cu mai multe probe', 'Facilitator și materiale', 'Adaptarea activităților la grup', 'Încheiere ghidată'],
    idealFor: [
      { title: 'Echipe în creștere', text: 'Grupuri de până la 50 de persoane care vor să lege colegii din departamente diferite.' },
      { title: 'Ritm variat', text: 'Probe competitive, colaborare și o pauză, ca fiecare tip de personalitate să-și găsească locul.' },
      { title: 'Cel mai ales', text: 'Echilibrul dintre durată, program și preț, motiv pentru care este pachetul preferat.' }
    ],
    sampleStart: '10:00',
    sampleDay: [
      { kind: 'activity', title: 'Primire și briefing', minutes: 20 },
      { kind: 'activity', title: 'Provocarea echipei', minutes: 90, slug: 'provocarea-echipei' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Atelier de colaborare', minutes: 90, slug: 'atelier-de-colaborare' },
      { kind: 'break', title: 'Prânz', minutes: 60 },
      { kind: 'activity', title: 'Jocuri & energie', minutes: 60, slug: 'jocuri-si-energie' },
      { kind: 'activity', title: 'Debrief și încheiere', minutes: 20 }
    ] },
  { slug: 'impact', name: 'Impact', price: 20000, unit: 'per grup', duration: '8 ore', people: 'până la 75 persoane', summary: 'Experiență extinsă pentru echipe care vor un eveniment cu mai multe momente.', includes: ['Program personalizat', 'Mai multe module de activitate', 'Echipă de facilitare în funcție de grup', 'Planificare și coordonare extinsă'],
    idealFor: [
      { title: 'Grupuri mari', text: 'Echipe de până la 75 de persoane, cu mai multe departamente sau locații.' },
      { title: 'Evenimente de companie', text: 'Zile dedicate, lansări interne sau aniversări, cu un program gândit pe obiective.' },
      { title: 'Program la comandă', text: 'Activitățile, ritmul și locația se aleg împreună, în funcție de ce vrea echipa să obțină.' }
    ],
    sampleStart: '10:00',
    sampleDay: [
      { kind: 'activity', title: 'Primire și briefing', minutes: 20 },
      { kind: 'activity', title: 'Misiune în aer liber', minutes: 120, slug: 'misiune-in-aer-liber' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Provocarea echipei', minutes: 60, slug: 'provocarea-echipei' },
      { kind: 'break', title: 'Prânz', minutes: 60 },
      { kind: 'activity', title: 'Construcția comună', minutes: 90, slug: 'constructia-comuna' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Olimpiada de echipă', minutes: 70, slug: 'olimpiada-de-echipa' },
      { kind: 'activity', title: 'Debrief și încheiere', minutes: 20 }
    ] },
  { slug: 'signature', name: 'Signature', price: 30000, unit: 'per grup', duration: '12 ore', people: 'până la 100 persoane', summary: 'Ziua completă de team building, de dimineață până seara, cu un program construit pe obiectivele echipei.', includes: ['Program complet pe parcursul zilei', 'Mai multe activități din bibliotecă', 'Echipă dedicată de facilitare', 'Coordonare înainte și în ziua evenimentului'],
    idealFor: [
      { title: 'Companii mari', text: 'Echipe de până la 100 de persoane, adunate pentru o zi dedicată împreună.' },
      { title: 'Evenimente anuale', text: 'Retreat-uri, aniversări de companie sau momente importante pentru echipă.' },
      { title: 'Experiență completă', text: 'Un program de la primire la încheiere, cu pauze și ritm gândit pe tot parcursul zilei.' }
    ],
    sampleStart: '09:00',
    sampleDay: [
      { kind: 'activity', title: 'Primire și briefing', minutes: 30 },
      { kind: 'activity', title: 'Misiune în aer liber', minutes: 120, slug: 'misiune-in-aer-liber' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Provocarea echipei', minutes: 90, slug: 'provocarea-echipei' },
      { kind: 'break', title: 'Prânz', minutes: 60 },
      { kind: 'activity', title: 'Atelier de colaborare', minutes: 90, slug: 'atelier-de-colaborare' },
      { kind: 'break', title: 'Pauză de cafea', minutes: 20 },
      { kind: 'activity', title: 'Construcția comună', minutes: 90, slug: 'constructia-comuna' },
      { kind: 'activity', title: 'Olimpiada de echipă', minutes: 120, slug: 'olimpiada-de-echipa' },
      { kind: 'break', title: 'Cină', minutes: 60 },
      { kind: 'activity', title: 'Debrief și încheiere', minutes: 20 }
    ] }
];
export const benefits = [
  { number: '01', title: 'Participă toată lumea', text: 'Activități adaptate grupului, nu doar celor mai vocali din echipă.' },
  { number: '02', title: 'Un scop comun', text: 'Provocări care cer comunicare, planificare și decizii împreună.' },
  { number: '03', title: 'Organizare clară', text: 'Stabilim obiectivul, formatul, durata și detaliile înainte de ziua evenimentului.' }
];