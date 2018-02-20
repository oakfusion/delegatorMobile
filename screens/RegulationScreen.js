import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default class RegulationScreen extends React.Component {
  static navigationOptions = {
    title: 'Regulamin'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{padding: 10}}>
          <Text>Regulamin</Text>

          <View>
              <View style={styles.listItem}>
                  <Text>Definicje</Text>
                  <View style={styles.listItemInner}>
                      <Text>Regulamin - niniejszy Regulamin świadczenia usług drogą elektroniczną w ramach działania Serwisu “Delegator”.</Text>
                      <Text>Administrator - podmiot świadczący usługi za pośrednictwem serwisu na zasadach określonych w niniejszym Regulaminie - Właściciel Serwisu:
                          OakFusion Sp z o.o. z siedzibą we Wrocławiu przy ul. Żmigrodzkiej 93B, wpisanej do Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Wrocławia - Fabrycznej, VI Wydział Gospodarczy, pod numerem KRS 0000499761. Spółka posiada kapitał własny w wysokości 66 350 PLN w całości opłacony. Zarejestrowana pod numer identyfikacji podatkowej NIP: 895-202-67-49 oraz REGON: 022325104.
                          Kontakt za pośrednictwem poczty elektronicznej: office@oakfusion.pl</Text>
                      <Text>Użytkownik - osoba korzystająca z Serwisu - osoba fizyczna, osoba prawna lub jednostka organizacyjna.</Text>
                      <Text>Serwis - aplikacja internetowa służąca do rozliczania delegacji krajowych i zagranicznych, zgodnie z obowiązującymi przepisami prawa polskiego.</Text>
                      <Text>Usługa - usługa świadczona drogą elektroniczną przez Administratora za pomocą Serwisu w oparciu o Regulamin.</Text>
                      <Text>Umowa - umowa w rozumieniu ustawy Kodeks cywilny, zawierana pomiędzy Usługodawcą a Usługobiorcą z wykorzystaniem środków porozumiewania się na odległość, której przedmiotem jest Usługa</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Postanowienia ogólne</Text>
                  <View style={styles.listItemInner}>
                      <Text>Niniejszy Regulamin określa zasady korzystania z Serwisu “Delegator” dostępnego pod adresem: www.delegator.pl</Text>
                      <Text>Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8 Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. Nr 144, poz. 1204 ze zm.)</Text>
                      <Text>Dostęp do ogólnodostępnej części Serwisu posiadają wszyscy korzystający z sieci Internet zarówno poprzez komputer, jak i telefon komórkowy czy tablet.</Text>
                      <Text>Korzystanie z Serwisu jest możliwe pod warunkiem spełnienia przez system teleinformatyczny Użytkownika następujących, minimalnych wymagań technicznych:</Text>
                      
                      <View style={styles.listItemInner}>
                          <Text>posiadać dostęp do urządzenia zapewniające dostęp do sieci Internet i prawidłowe wyświetlanie stron www,</Text>
                          <Text>posiadać zainstalowaną aktualną przeglądarkę internetową,</Text>
                          <Text>posiadać zainstalowany program Adobe Reader lub program o podobnej funkcjonalności.</Text>
                      </View>
                     
                      <Text>Usługa - usługa świadczona drogą elektroniczną przez Administratora za pomocą Serwisu w oparciu o Regulamin.</Text>
                      <Text>Umowa - umowa w rozumieniu ustawy Kodeks cywilny, zawierana pomiędzy Usługodawcą a Usługobiorcą z wykorzystaniem środków porozumiewania się na odległość, której przedmiotem jest Usługa</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Określenie warunków korzystania z usługi</Text>
                  <View style={styles.listItemInner}>
                      <Text>Administrator na rzecz Użytkowników udostępnia poprzez Serwis aplikację internetową, dzięki której Użytkownik Serwisu ma możliwość rozliczenia oraz wystawiania dokumentu z rozliczeniem delegacji.</Text>
                      <Text>Rozliczenie następuje poprzez wypełnienie formularza udostępnianego za pośrednictwem Serwisu.</Text>
                      <Text>Rozliczenie delegacji jest zapisywane w pliku PDF na prywatnym urządzeniu Użytkownika.</Text>
                      <Text>Dostęp do Serwisu obywa się przez całą dobę jedynie w formie on-line.</Text>
                      <Text>Aby korzystać z Serwisu nie trzeba się rejestrować.</Text>
                      <Text>Jednakże do pobrania pliku z rozliczoną delegacją konieczna jest akceptacja Regulaminu oraz wypełnienie pól oznaczonych jako obowiązkowe.</Text>
                      <Text>Korzystanie z Serwisu jest bezpłatne do odwołania.</Text>
                      <Text>Korzystanie z Serwisu nie wymaga zawierania umowy pomiędzy Użytkownikiem a Administratorem.</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Zakres odpowiedzialności Administratora</Text>
                  <View style={styles.listItemInner}>
                      <Text>Administrator zobowiązany jest do podjęcia wszystkich czynności, które zapewniają prawidłowe funkcjonowanie Serwisu.</Text>
                      <Text>Serwis działa w oparciu o Rozporządzenie Ministra Pracy i Polityki Społecznej z dnia 29.01.2013 r. w sprawie należności przysługujących pracownikowi zatrudnionemu w państwowej lub samorządowej jednostce sfery budżetowej z tytułu podróży służbowej.</Text>
                      <Text>Administrator nie ponosi odpowiedzialności za szkody wynikające z użycia, niemożliwości użycia lub nieprawidłowego działania Serwisu, chyba że szkody te wynikają z umyślnego działania Administratora.</Text>
                      <Text>Administrator nie ponosi odpowiedzialności za jakiekolwiek niezgodne z prawem czynności wykonywane przez Użytkownika, bądź inną osobę odwiedzającą Serwis w sposób sprzeczny z postanowieniami prawa, w tym także w sposób sprzeczny z postanowieniami Regulaminu.</Text>
                      <Text>Administrator zastrzega sobie prawo do czasowego zaprzestania świadczenia usług w przypadku awarii Serwisu bądź jego modernizacji.</Text>
                      <Text>Odpowiedzialność za poprawne wystawienie dokumentu rozliczenia delegacji oraz sprawdzenie prawidłowości danych na wystawianym dokumencie leży wyłącznie po stronie Użytkownika.</Text>
                      <Text>Administrator nie ponosi odpowiedzialności za ewentualne szkody wynikłe z niewłaściwego działania sprzętu lub oprogramowania Użytkownika.</Text>
                      <Text>Serwis jedynie wspiera prowadzenie przez Użytkownika działalności gospodarczej i tym samym Administrator nie ponosi jakiejkolwiek odpowiedzialności związanej z tak prowadzoną przez Użytkownika działalnością gospodarczą.</Text>
                      <Text>Serwis jest monitorowany poprzez statystyki Google Analytics.</Text>
                      <Text>Wszelkie uwagi, reklamacje oraz propozycje mogą być zgłaszane za pomocą adresu e-mail: delegator@oakfusion.pl. lub poprzez formularz kontaktowy znajdujący się na stronie delegator.pl. Administrator Serwisu zobowiązuje się do odpowiedzi w najkrótszym możliwym czasie.</Text>
                      <Text>Użytkownik korzystając z możliwości skontaktowania się z Administratorem poprzez formularz kontaktowy umieszczony na stronie Serwisu podaje swoje imię i nazwisko, adres e-mail oraz treść wiadomości.</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Zasady zawierania, zmiany oraz rozwiązywania umowy</Text>
                  <View style={styles.listItemInner}>
                      <Text>Umowa o świadczenie Usług polegających na umożliwieniu Użytkownikowi nieodpłatnego dostępu do treści znajdujących się w Serwisie niewymagająca odpłatności lub rejestracji, zostaje zawarta w momencie nawiązania połączenia przez urządzenie informatyczne Użytkownika z serwerami Administratora w momencie dokonania jakiejkolwiek czynności w Serwisie przez Użytkownika (np. kliknięcie w celu odczytania jakiejkolwiek informacji zamieszczonej w Serwisie, wysłanie do Administratora pytania związanego z określoną tematyką Serwisu). W tym czasie Użytkownik zobowiązany jest przestrzegać postanowień niniejszego Regulaminu.</Text>
                      <Text>Umowa o świadczenie Usług bezpłatnych, które nie wymagają rejestracji w Serwisie wygasa ze skutkiem natychmiastowym w momencie zaprzestania korzystania przez Użytkownika z Serwisu.</Text>
                      <Text>Administrator nie ponosi odpowiedzialności za blokowanie przez administratorów serwerów pocztowych przesyłania wiadomości na adres e-mail wskazany przez Użytkownika oraz za usuwanie i blokowanie wiadomości e-mail przez oprogramowanie zainstalowane na komputerze używanym przez Usługobiorcę.</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Polityka prywatności</Text>
                  <View style={styles.listItemInner}>
                      <Text>Administratorem Danych Osobowych Użytkowników Serwisu jest Właściciel Serwisu zgodnie z ustawą z dnia 29 sierpnia 1997 r. o ochronie danych osobowych (Dz. U. z 2002 r., Nr 101, poz. 926 ze zmianami).</Text>
                      <Text>… /*coś o bezpieczeństwie danych/</Text>
                      <Text>Serwis nie zbiera informacji zawartych w plikach cookies oraz nie wyświetla reklam.</Text>
                      <Text>W czasie korzystania z Serwisu i stron Użytkownik może zostać poproszony o podanie niektórych swoich danych osobowych poprzez wypełnienie formularza (imię i nazwisko, adres e-mail).</Text>
                      <Text>Użytkownik podaje swoje dane osobowe dobrowolnie w celu realizacji Usługi.</Text>
                      <Text>Administrator przetwarza dane osobowe Użytkownika w celu realizacji Usług (wystawianie dokumentu rozliczenia delegacji, pomoc techniczna, informowanie o aktualizacjach).</Text>
                      <Text>Administrator może udostępnić dane osobowe Użytkowników osobom trzecim (takim jak na przykład operatorzy płatności etc.), jeżeli jest to niezbędne do realizacji świadczonych Usług.</Text>
                      <Text>Niepodanie wymaganych danych zablokuje możliwość skorzystania z funkcji Serwisu i stron, jeśli są one wymagane do ich prawidłowego funkcjonowania.</Text>
                      <Text>Administrator na adres e-mail przesyła jedynie informacje ściśle związane z serwisem. Nie przesyła żadnych informacji handlowych, reklamowych.</Text>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text>Postanowienia końcowe</Text>
                  <View style={styles.listItemInner}>
                      <Text>W sprawach nieuregulowanych niniejszym Regulaminem, zastosowanie mają przepisy Kodeksu Cywilnego</Text>
                      <Text>Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu. O każdorazowych zmianach w Regulaminie, Użytkownicy na stronie www.delegator.pl zostaną o tym fakcie poinformowani.</Text>
                      <Text>Treść niniejszego Regulaminu może zostać utrwalona poprzez wydrukowanie, zapisanie na nośniku lub pobranie w każdej chwili ze stron Serwisu Internetowego.</Text>
                      <Text>Akceptując Regulamin Użytkownik oświadcza, iż zapoznał się w całości z wszystkimi jego postanowieniami i nie zgłasza żadnych zastrzeżeń w związku z ich treścią i formą i godzi się przestrzegać całości zapisów Regulaminu.</Text>
                      <Text>Regulamin wchodzi w życie z dniem ...2016 r.</Text>
                  </View>
              </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    paddingBottom: 20
  },
  listItemInner: {
    paddingLeft: 10
  }
});

