# Drug Search App

## Kuvaus
Drug Search App on Angular 19 -pohjainen lääkehaku-sovellus, joka hakee lääketietoja OpenFDA:n julkisesta rajapinnasta. Sovellus näyttää haetun lääkkeen tiedot, kuten nimen, kuvauksen ja haittavaikutukset, sekä tallentaa käyttäjän hakusanat Firebase Firestore -tietokantaan.

### Sovelluksen alkunäkymä
![Sovelluksen alkunäkymä](https://github.com/VirkkunenJohanna/drugsearch/blob/main/start_screen.PNG)

### Hakutulos, jossa näkyy kuvaus ja haittavaikutukset
![Hakutulosnäkymä](https://github.com/VirkkunenJohanna/drugsearch/blob/main/search_results_example_1.PNG)

### Hakutulos, jossa ei kaikkia tietoja saatavilla
![Hakutulosnäkymä](https://github.com/VirkkunenJohanna/drugsearch/blob/main/search_results_example_2.PNG)

### Firestore Databaseen tallentunut hakusana ja timestamp 
![Hakutulosnäkymä](https://github.com/VirkkunenJohanna/drugsearch/blob/main/cloud_firestore.PNG)
---

## Ominaisuudet

- Lääkkeiden hakeminen OpenFDA API:sta
- Haun tulosten näyttäminen (nimi, kuvaus, haittavaikutukset)
- Hakujen tallennus Firebase Firestoreen
- Selkeä käyttöliittymä SCSS-muotoilulla
- Moderni Angular 19 -arkkitehtuuri ja standalone-komponentit

---

## Teknologiat

- Angular 19
- Firebase (Firestore)
- OpenFDA API
- SCSS