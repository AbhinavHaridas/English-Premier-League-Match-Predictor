import brighton from '../Images/brighton-and-hove-albion.jpg';
import arsenal from '../Images/arsenal.jpg';
import bournemouth from '../Images/bournemouth.jpg';
import astonVilla from '../Images/aston-villa.jpg';
import burnley from '../Images/burnley.jpg';
import chelsea from '../Images/chelsea.jpg';
import crystalPalace from '../Images/crystal-palace.jpg';
import everton from '../Images/everton.jpg';
import fulham from '../Images/fulham.jpg';
import leedsUnited from '../Images/leeds-united.jpg';
import leicesterCity from '../Images/leicester-city.jpg';
import liverpool from '../Images/liverpool.jpg';
import manCity from '../Images/manchester-city.jpg';
import manUnited from '../Images/manchester-united.jpg';
import newcastle from '../Images/newcastle-united.jpg';

interface ImageMap {
  [key: string]: string;
}

export const Images:ImageMap = {
    "Brighton and Hove Albion": brighton,
    "Arsenal": arsenal,
    "AFC Bournemouth": bournemouth,
    "Aston Villa": astonVilla,
    "Burnley": burnley,
    "Chelsea": chelsea,
    "Crystal Palace": crystalPalace,
    "Everton": everton,
    "Fulham": fulham,
    "Leeds United": leedsUnited,
    "Leicester City": leicesterCity,
    "Liverpool": liverpool,
    "Manchester City": manCity,
    "Manchester United": manUnited,
    "Newcastle United": newcastle,
};
