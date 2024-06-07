import { useState } from "react";
import Button from "../../Component/Button/Button"
import VeloCard from "../../Component/VeloCard/VeloCard"

import Cervélo from "../../assets/Three/Cervélo CALEDONIA-5.png"
import Cervélo2 from "../../assets/Three/Cervélo S5 Disc.png"
import Cinelli from "../../assets/Three/Cinelli HOBOOTLEG GEO.png"
import CUBE from "../../assets/Three/CUBE NUROAD Pro FE.png"
import FOCUS from "../../assets/Three/FOCUS ATLAS 8-9.png"
// import CUBE2 from "../../assets/Three/CUBE NUROAD WS.png"

import Cervélo3 from "../../assets/Three/Cervélo SOLOIST.png"
import Cinelli2 from "../../assets/Three/Cinelli ZYDECO.png"
import Cinelli3 from "../../assets/Three/Cinelli ZYDECO LALA.png"
import Cinelli4 from "../../assets/Three/Cinelli HOBOOTLEG.png"
import FOCUS2 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike.png"
import CUBE3 from "../../assets/Three/CUBE NUROAD C-62 SLT.png"
import FOCUS3 from "../../assets/Three/FOCUS ATLAS 6-7 EQP GRX Gravel Bike.png"
import FOCUS4 from "../../assets/Three/FOCUS ATLAS 6-8.png"
import "./Sort.css"

import Cervélo_1 from "../../assets/Three/Cervélo CALEDONIA-5/Cervélo_1.jpg"
import Cervélo2_1 from "../../assets/Three/Cervélo S5 Disc/Cervélo S5 Disc_1.jpg"
import Cinelli_1 from "../../assets/Three/Cinelli HOBOOTLEG GEO/Cinelli HOBOOTLEG GEO_1.jpg"
import Cinelli_2 from "../../assets/Three/Cinelli HOBOOTLEG GEO/Cinelli HOBOOTLEG GEO_2.jpg"
import Cinelli_3 from "../../assets/Three/Cinelli HOBOOTLEG GEO/Cinelli HOBOOTLEG GEO_3.jpg"
import Cinelli_4 from "../../assets/Three/Cinelli HOBOOTLEG GEO/Cinelli HOBOOTLEG GEO_4.jpg"
import CUBE_1 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_1.jpg"
import CUBE_2 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_2.jpg"
import CUBE_3 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_3.jpg"
import CUBE_4 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_4.jpg"
import FOCUS_1 from "../../assets/Three/FOCUS ATLAS 8-9/FOCUS ATLAS 8-9_1.jpg"
import FOCUS_2 from "../../assets/Three/FOCUS ATLAS 8-9/FOCUS ATLAS 8-9_2.jpg"
import FOCUS_3 from "../../assets/Three/FOCUS ATLAS 8-9/FOCUS ATLAS 8-9_3.jpg"
import Cervélo3_1 from "../../assets/Three/Cervélo SOLOIST/Cervélo SOLOIST_1.jpg"
import Cinelli2_1 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_1.jpg"
import Cinelli2_2 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_2.jpg"
import Cinelli2_3 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_3.jpg"
import Cinelli2_4 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_4.jpg"
import Cinelli3_1 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_1.jpg"
import Cinelli3_2 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_2.jpg"
import Cinelli3_3 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_3.jpg"
import Cinelli3_4 from "../../assets/Three/CUBE NUROAD Pro FE/CUBE NUROAD Pro FE_4.jpg"
import Cinelli4_1 from "../../assets/Three/Cinelli HOBOOTLEG/Cinelli4_1.jpg"
import Cinelli4_2 from "../../assets/Three/Cinelli HOBOOTLEG/Cinelli4_2.jpg"
import Cinelli4_3 from "../../assets/Three/Cinelli HOBOOTLEG/Cinelli4_3.jpg"
import FOCUS2_1 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike/FOCUS2_1.jpg"
import CUBE3_1 from "../../assets/Three/CUBE NUROAD C-62 SLT/CUBE3_1.jpg"
import CUBE3_2 from "../../assets/Three/CUBE NUROAD C-62 SLT/CUBE3_2.jpg"
import CUBE3_3 from "../../assets/Three/CUBE NUROAD C-62 SLT/CUBE3_3.jpg"
import CUBE3_4 from "../../assets/Three/CUBE NUROAD C-62 SLT/CUBE3_4.jpg"
import FOCUS3_1 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike/FOCUS2_1.jpg"
import FOCUS4_1 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike/FOCUS2_1.jpg"
import FOCUS4_2 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike/FOCUS2_1.jpg"

interface SortProps {
  id?: string;
}

const Sort: React.FC<SortProps> = () => {

  const bikes = [
    {
      id: 1,
      Text: "Cervélo CALEDONIA-5 - Rival eTap AXS - Carbon Rennrad - 2024 five black",
      Img: Cervélo,
      Price: "4.699,00",
      Description: `Dein Bike für klassische Ausfahrten.\n
Das Caledonia-5 ist das Bike, zu dem Cervélo immer wieder greifen, wenn sie wissen, dass der Computer weit über die dreistellige km Marke anzeigen wird. Lange Fahrten haben immer etwas glatten Asphalt, Schlaglöcher auf Nebenstraßen, eine knackige Abkürzung zwischen offiziellen Wegen und vielleicht sogar einen eigenen lokalen Strade Bianche-Sektor. Also haben Cervélo ein Rad gebaut, das alle diese Anforderungen erfüllt und zusätzlich mit Schutzblechen ausgestattet werden kann, falls sich diese komischen Wolken nach 130 km in einen Regenguss verwandeln sollten.\n
Der Rahmen, die Gabel, der Lenker und die dazugehörigen Komponenten von Cervélo sind so konzipiert, dass die Brems- und Schaltzüge (mechanisch, elektrisch und hydraulisch) vor dem Wind geschützt sind, um die Aerodynamik zu verbessern, ohne dass die Benutzerfreundlichkeit oder die Leistung beeinträchtigt wird.\n
Eigenschaften von Cervélo CALEDONIA-5:\n
Leichter Carbon Rahmen und Gabel
Aerodynamische Form
Integrierte Zubehörhalterungen
Abschraubbare Umwerferbefestigung
34 mm Reifenfreiheit
Interne Zugführung`,
      Photo1: Cervélo_1,
    },
    {
      id: 2,
      Text: "Cervélo S5 Disc - Ultegra DI2 Carbon Rennrad - 2022 - iron oxide",
      Img: Cervélo2,
      Price: "8.999,00",
      Photo1: Cervélo2_1,
      Description: `Überleben des Schnellsten.\n
Das Cervélo S5 legt den Schwerpunkt auf aerodynamische Leistung und Steifheit, was es zu einer bevorzugten Basis für die schnellsten Sprinter der Welt macht. Glauben sie aber nicht, dass das alles ist – trotz der seitlichen Steife bietet der S5 ein unglaublich komfortables Fahrgefühl. Zweifellos haben Sie den jetzt legendären V-Schaft bemerkt. Cervélo haben diese Form optimiert, um die bestmögliche Leistung im Wind zu liefern, die Kabel im Inneren zu verstecken und genügend Lenker/Vorbau-Optionen zu ermöglichen, damit sie für so ziemlich jeden passen.\n
Wenn Sie auf ein Cervélo S5 steigen, werden Sie nicht nur schnell fahren, sondern sich auch schnell fühlen. Die Steifheit des Rahmens, die Geometrie, der Aufbau und die Rohrformen ergeben zusammen ein Rennrad, das bequem genug ist, um den ganzen Tag auf der Straße zu verbringen, aber auf eine Beschleunigung in letzter Sekunde besser reagiert als alles andere. Es eignet sich für 28mm-Reifen, damit Sie die neueren, breiteren Felgen/Reifen-Kombinationen montieren können, die Ihnen helfen, einen noch größeren Aero-Vorteil zu er \n
Eigenschaften von Cervélo S5 Disc:\n
Steifes & aerodynamisches Rahmendesign
BBright
Interne Kabelführung
Sattelstütze mit Zusatzausschnitt
Spezieller Lenker und Vorbau`,
    },
    {
      id: 3,
      Text: "Cinelli HOBOOTLEG GEO - Shimano Tiagra Gravel Bike - 2023 - orange",
      Img: Cinelli,
      Price: "2.299,99",
      Photo1: Cinelli_1,
      Photo2: Cinelli_2,
      Photo3: Cinelli_3,
      Photo4: Cinelli_4,
      Description: `Reisen und erkunden! \n
Das Cinelli Hobootleg GEO ist das ausgereifteste und abenteuerlustigste Bike aller Zeiten. Drei Jahre Tests mit den erfahrensten und anspruchsvollsten Off-Road-Bikern führten zu einer überarbeiteten Geometrie und fügten die notwendigen Eigenschaften hinzu, damit dieses Bike ein Pionier im explosiven Sektor der Selbstversorgungsreisen wird.\n
Merkmale des Cinelli Hobootleg GEO
Colombus Stahlrahmen
Colombus Futura Adventure Carbongabel
Shimano Tiagra / Deore 2x10-fach Schaltung
WTB Ranger Reifen
diverse Ösen für Zubehör`
    },
    {
      id: 4,
      Text: "CUBE NUROAD Pro FE - Gravel Bike - 2023 - metalblack / grey",
      Img: CUBE,
      Price: "1.289,00",
      Photo1: CUBE_1,
      Photo2: CUBE_2,
      Photo3: CUBE_3,
      Photo4: CUBE_4,
      Description: `Alles in einem Paket – was will man mehr? \n
Das CUBE Nuroad Pro FE bietet dieselben Vorzüge wie das Nuroad Pro: stabiles Handling, robuste Konstruktion, dazu geniale Onroad- und Offroad-Qualitäten. Als Draufgabe gibt es hier aber noch ein Komplettset an praktischem Zubehör, bestehend aus einem super belastbaren Gepäckträger, extralangen Schutzblechen und einem kompletten Beleuchtungssystem, damit das Bike auch auf längeren Touren oder dem Weg zur Arbeit Top funktioniert.

40 mm breite Reifen und eine Vollcarbongabel machen selbst ruppigere Strecken zum locker-leichten Bike-Genuss. Apropos locker-leicht: Um den effizienten Vortrieb kümmert sich die zuverlässige Shimano 2x10-Gang Schaltung. Und für sichere Bremsmanöver (sogar bei Nässe) sind die kraftvoll zupackenden Scheibenbremsen verantwortlich.

Eigenschaften von CUBE NUROAD Pro FE:
Aluminium Superlite Rahmen
Gravel Comfort Geometry
Vollcarbongabel
Interne Zugführung
Flat Mount Disc
Vollausstattung
45mm Reifenfreiheit (ohne Schutzblech)`
    },
    {
      id: 5,
      Text: "FOCUS ATLAS 8.9 - Carbon Gravel Bike - 2023 - Gold Brown",
      Img: FOCUS,
      Price: "3.399,00",
      Photo1: FOCUS_1,
      Photo2: FOCUS_2,
      Photo3: FOCUS_3,
      Description:`Kennt keine Grenze\n
Die FOCUS ATLAS 8. Serie bietet bis zu 45 mm Reifenfreiheit und alle Montagemöglichkeiten für Bikepacking-Abenteuer. Ob schlechtes Wetter, fordernder Untergrund, steile Anstiege oder lange Distanzen – das schnelle und komfortable Gravelbike bietet volle Kontrolle und maximale Variabilität. Ein breiter Lenker mit Flare sowie Scheibenbremsen bieten viel Sicherheit und Komfort für das leichte und agile Carbon-Bike mit integrierter C.I.S. Kabelführung.

Das Gravelbike kommt mit einer Oberrohrtasche (Top Tube Bag), auf die schnell und einfach zugegriffen werden kann. Was auch immer du vorhast, das ATLAS bringt dich dorthin – auch bis ans Ende der Welt.

Hauptmerkmale des FOCUS ATLAS 8.9 Carbon 
Leichter Carbon-Rahmen und -Gabel mit komplett integrierter C.I.S. Kabelführung durch den Vorbau sowie Oberrohrtasche
SRAM Rival ETAP AXS XPLR: Kabelloses, elektronisches Schalten mit Gravel-spezifischer 1x12 (40/10–44) Übersetzungsbandbreite
Leichter und super stabiler High-End Gravel-Laufradsatz: DT Swiss GR1600 Road Boost Laufräder mit doppelt gedichteten Lagern`
    },
    // {
    //   id: 6,
    //   Text: "CUBE NUROAD WS - Damen Gravel Bike - 2023 - lightgrey / rose",
    //   Img: CUBE2,
    //   Price: "4.699,00",
    //   Description:``
    // },

    /////////////////////////////////////////////////////////////////////////////////

    {
      id: 6,
      Text: "Cervélo SOLOIST - Rival eTap AXS - Carbon Rennrad - 2024 - gold dust",
      Img: Cervélo3,
      Price: "4.799,00",
      Photo1: Cervélo3_1,
      Description:`Genau das richtige Rennrad.\n
Das Soloist. Ein Name, der tief in der Historie von Cervélo verankert ist und der sofort jedem ein Begriff ist, der sich an die Rennen der frühen 2000er erinnert. Das Soloist war die Waffe der Wahl der top World Tour Fahrer von CSC und dem Cervélo Test Team - jetzt ist es an der Zeit es für eine neue Generation zurückzubringen.

Das neue Soloist ist für die Fahrer gebaut, die tagein, tagaus trainieren, Rennen fahren und die unterschiedlichsten Anforderungen mit einem Bike meistern möchten. Es schafft die Balance zwischen Leichtgewicht und aerodynamischen Vorteilen und ist daher einfach "genau das richtige" Rad.

Das Soloist ist einen Hauch leichter als das Cervélo S5 aber deutlich aerodynamischer als das R5, dazu leiht es sich noch den Gewinde-Tretlagerstandard (BBright-47) vom R5-CX. Es ist ein Wettkampfrad, an dem sowohl mechanische als auch elektronische Gruppen verbaut werden können und das unzählige Kilometer im Training bei allen Witterungsverhältnissen locker wegsteckt. Die Summe dieser Details sichern dir im entscheidenden Moment die wichtigen Millimeter am Zielstrich. Das ist das Soloist. 

Eigenschaften von Cervélo SOLOIST:\n
Leichter Carbon Rahmen und Gabel
Aerodynamische Form
34 mm Reifenfreiheit
Interne Zugführung`
    },
    {
      id: 7,
      Text: "Cinelli ZYDECO - Shimano GRX Gravel Bike - 2023 - muddy dry",
      Img: Cinelli2,
      Price: "2.099,00",
      Photo1: Cinelli2_1,
      Photo2: Cinelli2_2,
      Photo3: Cinelli2_3,
      Photo4: Cinelli2_4,
      Description:`Das Cinelli Zydeco bietet das Beste für Schotter und stellt eine einzigartige Verbindung von Straßen-, Touren- und Gravel Bike dar. Sag' Zydeco und sag' Gravel. Und Zydeco hält seine Versprechen, entwickelt sich ständig weiter und bleibt dabei seiner Seele treu. In diesem treuen Anspruch auf Neuheit verbinden sich die verbesserte Bremseffizienz der Steckachse und das hydraulische Bremssystem mit der Gravel-spezifischen Shimano GRX-Gruppe, die mit ihrem Shadow RD+ System und der ergonomischsten Hebelwirkung mit geschwungener Form und Anti-Rutsch-Beschichtung für ideale Kontrolle im Gelände eine erhöhte Zuverlässigkeit in Bezug auf die Getriebeeffizienz bietet.\n

Highlights des Cinelli Zydeco Gravel Bike\n
leichter Rahmen aus Aluminium
großer Radstand ermöglicht die Montage von Schutzblechen
2 zusätzlichen Ösen am Oberrohr ermöglichen eine optimale und sichere Montage von Taschen
Columbus Futura Gravel Monocoque Gabel mit interner Kabelführung und Flat Mount Disc Aufnahme
Reifenbreite bis 40mm`
    },
    {
      id: 8,
      Text: "Cinelli ZYDECO LALA - Gravel Bike - 2023 - mr blue sky",
      Img: Cinelli3,
      Price: "1.489,00",
      Photo1: Cinelli3_1,
      Photo2: Cinelli3_2,
      Photo3: Cinelli3_3,
      Photo4: Cinelli3_4,
      Description:`Entwickelt für Abenteuer!\n
Das Cinelli Zydeco LaLa ist ein Mitglied der Zydeco Gravel-Familie. Es ist aus konifizierten Columbus Zonal Aluminiumrohren gefertigt und mit bewährten Komponenten ausgestattet.

Hauptmerkmale des Cinelli Zydeco LaLa\n
Columbus Rahmen aus Aluminium
Columbus Futura Gravel Gabel aus Carbon
geeignet für die Montage Schutzblechen & Gepäckträger
Shimano Sora 2x9-fach Schaltung
mechanische Tektro Scheibenbremsen`
    },
    {
      id: 9,
      Text: "Cinelli HOBOOTLEG - Adventure Bike - 2023 - red right hand",
      Img: Cinelli4,
      Price: "1.549,99",
      Photo1: Cinelli4_1,
      Photo2: Cinelli4_2,
      Photo3: Cinelli4_3,
      Description:`Das Flaggschiff der Adventure Bikes!\n
Seit seiner ursprünglichen Konzeption und der Feinabstimmung bei zwei aufeinanderfolgenden Ausgaben der legendären Tour d'Afrique in den Jahren 2012 und 2013 hat das Hobo Bootleg den Guinness-Weltrekord für die Weltumrundung mit dem Fahrrad gebrochen, alle sieben höchsten Bergpässe der Welt bezwungen und mehr als eine Million Kilometer an Abenteuerfahrten absolviert.\n

Hauptmerkmale des Cinelli HOBOOTLEG
Robuster Columbus-Rahmen aus CrMo
Shimano 3x9-fach Schaltung
Tektro Felgenbremsen
Ergo-Lenkanschlag
Oberrohr-Zugverlegung
WTB Riddler-Reifen
Tubus Gepäckträger vorne und hinten
Schutzbleche vorne und hinten`
    },
    {
      id: 10,
      Text: "FOCUS ATLAS 6.7 GRX Gravel Bike - 2023 - Rustorange",
      Img: FOCUS2,
      Price: "1.499,00",
      Photo1: FOCUS2_1,
      Description:`Schnelles Gravelbike für Schotterabenteuer und Bikepacking\n
Kennt keine Grenzen: Das ATLAS bietet bis zu 47 mm Reifenfreiheit und alle Montagemöglichkeiten für Bikepacking. Ob schlechtes Wetter, fordernder Untergrund, steile Anstiege oder lange Distanzen – das schnelle und komfortable Gravelbike bietet volle Kontrolle und maximale Variabilität. Breite Lenker mit Flare sowie Scheibenbremsen bieten viel Sicherheit und Komfort für das leichte und robuste Alu-Bike mit Carbon-Gabel. Was auch immer du vorhast, das ATLAS bringt dich dorthin – auch bis ans Ende der Welt.

Das aufgeräumte Cockpit mit Kabelführung durch den Steuersatz sorgt auch dafür, dass eine Lenkertasche problemlos befestigt werden kann. Dank Montagepunkten können Carrier mit jeweils 3 kg Zuladung an der Gabel installiert werden. In der Oberrohrtasche hat alles Nötige griffbereit Platz.

Merkmale des ATLAS 6.7 GRX Gravelbikes\n
Leichter, robuster Aluminium-Rahmen & Carbon-Gabel mit integrierter C.I.S. Kabelführung, sowie Montagemöglichkeiten für Schutzbleche, Gepäckträger und Ständer
Shimano GRX400 2x10 Gruppe von Shimano für stabiles und zuverlässiges Schalten in jedem Gelände
Verlässliche Stabilität und langlebige Qualität: Doppelt gedichtete Novatec Road Boost Naben und 23 mm breite WTB Felgen`
    },
    {
      id: 11,
      Text: "CUBE NUROAD C:62 SLT - Carbon Gravel Bike - 2023 - liquidred / red",
      Img: CUBE3,
      Price: "3.969,00",
      Photo1: CUBE3_1,
      Photo2: CUBE3_2,
      Photo3: CUBE3_3,
      Photo4: CUBE3_4,
      Description:`Das nächste Abenteuer wartet bereits!\n
Das SLT im Produktnamen müssen sich CUBE Bikes erst verdienen – nur die allerbesten tragen dieses Gütesiegel. Im Fall des Nuroad C:62 SLT verweist es auf einen außergewöhnlich schnellen, leichten und vielseitigen Allrounder mit Vollcarbonrahmen und Vollcarbongabel in Kombination mit hoch technologischen Komponenten. Dazu zählt der XX1 Eagle AXS 12-Gang Antrieb von SRAM für geschmeidige Gangwechsel mit hoher Übersetzungsbandbreite.

Die Offroad-spezifischen Newmen Advanced Carbonlaufräder mit Schwalbe Reifen haben ihre Qualität bereits im Mountainbike-Einsatz unter Beweis gestellt, soll heißen: Sie sind extrem griffig und robust. On Top gibt's leistungsstarke hydraulische Scheibenbremsen, die in jeder Situation und bei allen Bedingungen volle Kontrolle und Sicherheit vermitteln. Voll beladen auf langer Tour oder clean und ohne alles für schnelle Runden – du hast die Wahl!

Eigenschaften von CUBE NUROAD C:62 SLT:\n
C:62 Advanced Twin Mold Carbon Rahmen
Interne Zugführung
Flat Mount Disc
Aufnahmen für Schutzbleche, Gepäckträger und Seitenständer
45mm Reifenfreiheit (ohne Schutzblech)
Vollcarbongabel`
    },
    {
      id: 12,
      Text: "FOCUS ATLAS 6.7 EQP GRX Gravel Bike - 2023 - Rustorange",
      Img: FOCUS3,
      Price: "1.699,00",
      Photo1: FOCUS3_1,
      Description:`Schnelles Gravelbike für Schotterabenteuer und Bikepacking\n
Kennt keine Grenzen: Das ATLAS bietet bis zu 47 mm Reifenfreiheit und alle Montagemöglichkeiten für Bikepacking. Ob schlechtes Wetter, fordernder Untergrund, steile Anstiege oder lange Distanzen – das schnelle und komfortable Gravelbike bietet volle Kontrolle und maximale Variabilität. Breite Lenker mit Flare sowie Scheibenbremsen bieten viel Sicherheit und Komfort für das leichte und robuste Alu-Bike mit Carbon-Gabel. Das ATLAS EQP Modell ist bereits vollausgestattet mit Gepäckträger, Schutzblechen, Ständer und einer Lichtanlage. Was auch immer du vorhast, das ATLAS bringt dich dorthin - auch bis ans Ende der Welt.

Das aufgeräumte Cockpit mit Kabelführung durch den Steuersatz sorgt auch dafür, dass eine Lenkertasche problemlos befestigt werden kann. Dank der Montagepunkte können Carrier mit jeweils 3 kg Zuladung an der Gabel installiert werden. In der Oberrohrtasche hat alles Nötige griffbereit Platz.

Eigenschaften des ATLAS 6.7 EQP GRX Gravelbikes
Leichter, robuster Aluminium-Rahmen & Carbon-Gabel mit integrierter C.I.S. Kabelführung, sowie eigens entwickeltem Gepäckträger & Schutzblechen
Shimano GRX400 2x10 Gruppe von Shimano für stabiles und zuverlässiges Schalten in jedem Gelände
Verlässliche Stabilität und langlebige Qualität: Doppelt gedichtete Novatec Road Boost Naben und 23 mm breite WTB Felgen, sowie solide Beleuchtung für Pendler und Reisende`
    },
    {
      id: 13,
      Text: "FOCUS ATLAS 6.8 - Gravel Bike - 2024 - Heritageblue / Stoneblue glossy",
      Img: FOCUS4,
      Price: "2.299,00",
      Photo1: FOCUS4_1,
      Photo2: FOCUS4_2,
      Description:`ATLAS 6.8: Schnelles Gravelbike für Schotterabenteuer & Bikepacking\n
Kennt keine Grenzen: Das ATLAS bietet bis zu 47mm Reifenfreiheit und alle Montagemöglichkeiten für Bikepacking. Ob schlechtes Wetter, fordernder Untergrund, steile Anstiege oder lange Distanzen – das schnelle und komfortable Gravelbike bietet volle Kontrolle und maximale Variabilität. Breite Lenker mit Flare sowie Scheibenbremsen bieten viel Sicherheit und Komfort für das leichte und robuste Alu-Bike mit Carbon-Gabel.  Was auch immer du vorhast, das ATLAS bringt dich dorthin – auch bis ans Ende der Welt.

Das aufgeräumte Cockpit mit Kabelführung durch den Steuersatz sorgt auch dafür, dass eine Lenkertasche problemlos befestigt werden kann. Dank der Montagepunkte können Carrier mit jeweils 3kg Zuladung an der Gabel installiert werden. Und mit jedem ATLAS 6.8 wird eine Oberrohrtasche mitgeliefert, in der alles Nötige griffbereit Platz hat. 

Merkmale des FOCUS ATLAS 6.8 Gravel Bikes
Leichter, robuster Aluminium-Rahmen & Carbon-Gabel mit integrierter C.I.S. Kabelführung, sowie Montagemöglichkeiten für Schutzbleche, Gepäckträger und Ständer
Shimano GRX600 2x11 Gruppe für verlässliche Schaltvorgänge und sicheres Bremsen auch bei grobem Untergrund
Maximale Stabilität und hohe Qualität: Road Boost Systemlaufräder von DT Swiss`
    },
  ];
  
  const [showMore, setShowMore] = useState(false);

  const [veloType, setVeloType] = useState<number>(0);

  return (
    <div className="Sort" id="#sort-section">
        <h1>Sortiment</h1>
        <div className="Sort-wrapper">
          {bikes.slice(0, 6).map((bike) => (
            <VeloCard key={bike.Text} {...bike} setVeloType={setVeloType} veloType={veloType} />
          ))}
          {showMore && bikes.slice(6).map((bike) => (
            <VeloCard key={bike.Text} {...bike} setVeloType={setVeloType} veloType={veloType} />
          ))}
        </div>
        <div className="Sort-btn">
        {!showMore && 
          <Button Text="MORE" onClick={() => {setShowMore(true)}}/>
        }
        </div>
    </div>
  )
}

export default Sort
