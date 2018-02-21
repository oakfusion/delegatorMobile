import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, PixelRatio } from 'react-native';

import { moderateScale } from '../helpers/scaling';

export default class RegulationScreen extends React.Component {
  static navigationOptions = {
    title: 'Regulamin'
  };

  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{padding: 15}}>
              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Definicje</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}><Text style={styles.bold}>Regulamin</Text> - niniejszy Regulamin świadczenia usług drogą elektroniczną w ramach działania Serwisu “Delegator”.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}><Text style={styles.bold}>Administrator</Text> - podmiot świadczący usługi za pośrednictwem serwisu na zasadach określonych w niniejszym Regulaminie - Właściciel Serwisu:
                          OakFusion Sp z o.o. z siedzibą we Wrocławiu przy ul. Żmigrodzkiej 93B, wpisanej do Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Wrocławia - Fabrycznej, VI Wydział Gospodarczy, pod numerem KRS 0000499761. Spółka posiada kapitał własny w wysokości 66 350 PLN w całości opłacony. Zarejestrowana pod numer identyfikacji podatkowej NIP: 895-202-67-49 oraz REGON: 022325104.
                          Kontakt za pośrednictwem poczty elektronicznej: office@oakfusion.pl</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}><Text style={styles.bold}>Użytkownik</Text> - osoba korzystająca z Serwisu - osoba fizyczna, osoba prawna lub jednostka organizacyjna.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}><Text style={styles.bold}>Serwis</Text> - aplikacja internetowa służąca do rozliczania delegacji krajowych i zagranicznych, zgodnie z obowiązującymi przepisami prawa polskiego.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}><Text style={styles.bold}>Usługa</Text> - usługa świadczona drogą elektroniczną przez Administratora za pomocą Serwisu w oparciu o Regulamin.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>6.</Text><Text style={styles.text}><Text style={styles.bold}>Umowa</Text> - umowa w rozumieniu ustawy Kodeks cywilny, zawierana pomiędzy Usługodawcą a Usługobiorcą z wykorzystaniem środków porozumiewania się na odległość, której przedmiotem jest Usługa</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Postanowienia ogólne</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>Niniejszy Regulamin określa zasady korzystania z Serwisu “Delegator” dostępnego pod adresem: www.delegator.pl</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>Niniejszy Regulamin jest regulaminem, o którym mowa w art. 8 Ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. Nr 144, poz. 1204 ze zm.)</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Dostęp do ogólnodostępnej części Serwisu posiadają wszyscy korzystający z sieci Internet zarówno poprzez komputer, jak i telefon komórkowy czy tablet.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}>Korzystanie z Serwisu jest możliwe pod warunkiem spełnienia przez system teleinformatyczny Użytkownika następujących, minimalnych wymagań technicznych:</Text></View>
                      
                      <View style={styles.listItemInner}>
                        <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>posiadać dostęp do urządzenia zapewniające dostęp do sieci Internet i prawidłowe wyświetlanie stron www,</Text></View>
                        <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>posiadać zainstalowaną aktualną przeglądarkę internetową,</Text></View>
                        <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>posiadać zainstalowany program Adobe Reader lub program o podobnej funkcjonalności.</Text></View>
                      </View>
                     
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}>Usługa - usługa świadczona drogą elektroniczną przez Administratora za pomocą Serwisu w oparciu o Regulamin.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>6.</Text><Text style={styles.text}>Umowa - umowa w rozumieniu ustawy Kodeks cywilny, zawierana pomiędzy Usługodawcą a Usługobiorcą z wykorzystaniem środków porozumiewania się na odległość, której przedmiotem jest Usługa</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Określenie warunków korzystania z usługi</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>Administrator na rzecz Użytkowników udostępnia poprzez Serwis aplikację internetową, dzięki której Użytkownik Serwisu ma możliwość rozliczenia oraz wystawiania dokumentu z rozliczeniem delegacji.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>Rozliczenie następuje poprzez wypełnienie formularza udostępnianego za pośrednictwem Serwisu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Rozliczenie delegacji jest zapisywane w pliku PDF na prywatnym urządzeniu Użytkownika.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}>Dostęp do Serwisu obywa się przez całą dobę jedynie w formie on-line.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}>Aby korzystać z Serwisu nie trzeba się rejestrować.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>6.</Text><Text style={styles.text}>Jednakże do pobrania pliku z rozliczoną delegacją konieczna jest akceptacja Regulaminu oraz wypełnienie pól oznaczonych jako obowiązkowe.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>7.</Text><Text style={styles.text}>Korzystanie z Serwisu jest bezpłatne do odwołania.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>8.</Text><Text style={styles.text}>Korzystanie z Serwisu nie wymaga zawierania umowy pomiędzy Użytkownikiem a Administratorem.</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Zakres odpowiedzialności Administratora</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>Administrator zobowiązany jest do podjęcia wszystkich czynności, które zapewniają prawidłowe funkcjonowanie Serwisu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>Serwis działa w oparciu o Rozporządzenie Ministra Pracy i Polityki Społecznej z dnia 29.01.2013 r. w sprawie należności przysługujących pracownikowi zatrudnionemu w państwowej lub samorządowej jednostce sfery budżetowej z tytułu podróży służbowej.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Administrator nie ponosi odpowiedzialności za szkody wynikające z użycia, niemożliwości użycia lub nieprawidłowego działania Serwisu, chyba że szkody te wynikają z umyślnego działania Administratora.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}>Administrator nie ponosi odpowiedzialności za jakiekolwiek niezgodne z prawem czynności wykonywane przez Użytkownika, bądź inną osobę odwiedzającą Serwis w sposób sprzeczny z postanowieniami prawa, w tym także w sposób sprzeczny z postanowieniami Regulaminu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}>Administrator zastrzega sobie prawo do czasowego zaprzestania świadczenia usług w przypadku awarii Serwisu bądź jego modernizacji.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>6.</Text><Text style={styles.text}>Odpowiedzialność za poprawne wystawienie dokumentu rozliczenia delegacji oraz sprawdzenie prawidłowości danych na wystawianym dokumencie leży wyłącznie po stronie Użytkownika.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>7.</Text><Text style={styles.text}>Administrator nie ponosi odpowiedzialności za ewentualne szkody wynikłe z niewłaściwego działania sprzętu lub oprogramowania Użytkownika.</Text></View>
                    <View style={styles.orderedListItem}><Text style={[styles.text, styles.listItemNumber]}>8.</Text><Text style={styles.text}>Serwis jedynie wspiera prowadzenie przez Użytkownika działalności gospodarczej i tym samym Administrator nie ponosi jakiejkolwiek odpowiedzialności związanej z tak prowadzoną przez Użytkownika działalnością gospodarczą.</Text></View>
                    <View style={styles.orderedListItem}><Text style={[styles.text, styles.listItemNumber]}>9.</Text><Text style={styles.text}>Serwis jest monitorowany poprzez statystyki Google Analytics.</Text></View>
                    <View style={styles.orderedListItem}><Text style={[styles.text, styles.listItemNumber]}>10.</Text><Text style={styles.text}>Wszelkie uwagi, reklamacje oraz propozycje mogą być zgłaszane za pomocą adresu e-mail: delegator@oakfusion.pl. lub poprzez formularz kontaktowy znajdujący się na stronie delegator.pl. Administrator Serwisu zobowiązuje się do odpowiedzi w najkrótszym możliwym czasie.</Text></View>
                    <View style={styles.orderedListItem}><Text style={[styles.text, styles.listItemNumber]}>11.</Text><Text style={styles.text}>Użytkownik korzystając z możliwości skontaktowania się z Administratorem poprzez formularz kontaktowy umieszczony na stronie Serwisu podaje swoje imię i nazwisko, adres e-mail oraz treść wiadomości.</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Zasady zawierania, zmiany oraz rozwiązywania umowy</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>Umowa o świadczenie Usług polegających na umożliwieniu Użytkownikowi nieodpłatnego dostępu do treści znajdujących się w Serwisie niewymagająca odpłatności lub rejestracji, zostaje zawarta w momencie nawiązania połączenia przez urządzenie informatyczne Użytkownika z serwerami Administratora w momencie dokonania jakiejkolwiek czynności w Serwisie przez Użytkownika (np. kliknięcie w celu odczytania jakiejkolwiek informacji zamieszczonej w Serwisie, wysłanie do Administratora pytania związanego z określoną tematyką Serwisu). W tym czasie Użytkownik zobowiązany jest przestrzegać postanowień niniejszego Regulaminu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>Umowa o świadczenie Usług bezpłatnych, które nie wymagają rejestracji w Serwisie wygasa ze skutkiem natychmiastowym w momencie zaprzestania korzystania przez Użytkownika z Serwisu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Administrator nie ponosi odpowiedzialności za blokowanie przez administratorów serwerów pocztowych przesyłania wiadomości na adres e-mail wskazany przez Użytkownika oraz za usuwanie i blokowanie wiadomości e-mail przez oprogramowanie zainstalowane na komputerze używanym przez Usługobiorcę.</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Polityka prywatności</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>Administratorem Danych Osobowych Użytkowników Serwisu jest Właściciel Serwisu zgodnie z ustawą z dnia 29 sierpnia 1997 r. o ochronie danych osobowych (Dz. U. z 2002 r., Nr 101, poz. 926 ze zmianami).</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>… /*coś o bezpieczeństwie danych/</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Serwis nie zbiera informacji zawartych w plikach cookies oraz nie wyświetla reklam.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}>W czasie korzystania z Serwisu i stron Użytkownik może zostać poproszony o podanie niektórych swoich danych osobowych poprzez wypełnienie formularza (imię i nazwisko, adres e-mail).</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}>Użytkownik podaje swoje dane osobowe dobrowolnie w celu realizacji Usługi.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>6.</Text><Text style={styles.text}>Administrator przetwarza dane osobowe Użytkownika w celu realizacji Usług (wystawianie dokumentu rozliczenia delegacji, pomoc techniczna, informowanie o aktualizacjach).</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>7.</Text><Text style={styles.text}>Administrator może udostępnić dane osobowe Użytkowników osobom trzecim (takim jak na przykład operatorzy płatności etc.), jeżeli jest to niezbędne do realizacji świadczonych Usług.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>8.</Text><Text style={styles.text}>Niepodanie wymaganych danych zablokuje możliwość skorzystania z funkcji Serwisu i stron, jeśli są one wymagane do ich prawidłowego funkcjonowania.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>9.</Text><Text style={styles.text}>Administrator na adres e-mail przesyła jedynie informacje ściśle związane z serwisem. Nie przesyła żadnych informacji handlowych, reklamowych.</Text></View>
                  </View>
              </View>

              <View style={styles.listItem}>
                  <Text style={[styles.text, styles.subtitle]}>Postanowienia końcowe</Text>
                  <View style={styles.listItemInner}>
                    <View style={styles.orderedListItem}><Text style={styles.text}>1.</Text><Text style={styles.text}>W sprawach nieuregulowanych niniejszym Regulaminem, zastosowanie mają przepisy Kodeksu Cywilnego</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>2.</Text><Text style={styles.text}>Administrator zastrzega sobie prawo do zmiany niniejszego Regulaminu. O każdorazowych zmianach w Regulaminie, Użytkownicy na stronie www.delegator.pl zostaną o tym fakcie poinformowani.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>3.</Text><Text style={styles.text}>Treść niniejszego Regulaminu może zostać utrwalona poprzez wydrukowanie, zapisanie na nośniku lub pobranie w każdej chwili ze stron Serwisu Internetowego.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>4.</Text><Text style={styles.text}>Akceptując Regulamin Użytkownik oświadcza, iż zapoznał się w całości z wszystkimi jego postanowieniami i nie zgłasza żadnych zastrzeżeń w związku z ich treścią i formą i godzi się przestrzegać całości zapisów Regulaminu.</Text></View>
                    <View style={styles.orderedListItem}><Text style={styles.text}>5.</Text><Text style={styles.text}>Regulamin wchodzi w życie z dniem ...2016 r.</Text></View>
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
    backgroundColor: '#737075',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
      fontSize: moderateScale(20)
  },
  text: {
    color: '#fff'
  },
  listItemNumber: {
      width: PixelRatio.getPixelSizeForLayoutSize(10),
      textAlign: 'right',
      paddingRight: 5
  },
  bold: {
      fontWeight: 'bold'
  },
  orderedListItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
      paddingRight: 10
  },
  listItem: {
    paddingBottom: 20
  },
  listItemInner: {
    paddingLeft: 0
  }
});
