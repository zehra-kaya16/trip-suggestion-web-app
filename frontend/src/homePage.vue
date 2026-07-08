<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToSignIn() {
  router.push('/signin');
}
function logOut() {
  localStorage.removeItem('userId')
  userId.value = undefined
}
function goToRegister() {
  router.push('/register');
}
function goToAskForaSuggestion() {
  router.push('/askForaSuggestion');
}

const userId = ref(localStorage.getItem('userId'))
   



const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]);
const places1Data = [
  {
    image: 'https://cdn.agentis.com.tr/geziekspresi.com.tr/files/actv/13/270_b-f.jpg',
    title: 'Fethiye Ölüdeniz/ Antalya',
    price: 50.34,
    currency: '$',
    star: 4.5,
    description: "Ölüdeniz, is an amazing natural lagoon known for its turquoise water, beach and surrounding mountains. "
  },
  {
    image: 'https://www.kulturportali.gov.tr/contents/images/Yukarı%20Düden_Servet%20Uygun%20logolu.jpg',
    title: 'Düden Şelalesi/ Antalya',
    price: 10.8,
    currency: '$',
    star: 3,
    description: 'Düden Waterfall in Antalya is famous for its crystal-clear waters, lush green surroundings and soothing sound.'
  },
  {
    image: 'https://www.kulturportali.gov.tr/contents/images/logl.jpg',
    title: 'Aspendos Antik Tiyatrosu/ Antalya',
    price: 25.73,
    currency: '$',
    star: 2.5,
    description: 'Aspendos Ancient Theater is one of the best-preserved Roman theaters in the world.'
  },
];
const places2Data = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fe2zU7_1SZQ6QaV2C9XlZ3NUhx2ZYvXL5g&s',
    title: 'Kız Kulesi/ İstanbul',
    price: 20.98,
    currency: '$',
    star: 4,
    description: "The Maiden's Tower is a historic structure located in the Bosphorus Strait and is one of Istanbul's iconic landmarks."
  },
  {
    image: 'https://istanbeautiful.com/tr/wp-content/uploads/camlica-sosyal-tesisleri2.jpg',
    title: 'Çamlıca Tepesi/ İstanbul',
    price: 26.73,
    currency: '$',
    star: 2.5,
    description: 'Çamlıca Hill is one of the highest points in Istanbul, offering a popular vantage point with panoramic views of the city.'
  },
  {
    image: 'https://assets.enuygun.com/media/lib/500x300/uploads/image/ayasofya-camii-ne-nasil-gidilir-52817.webp',
    title: 'Ayasofya Cami/ İstanbul',
    price: 'free',
    currency: '$',
    star: 5,
    description: 'Hagia Sophia Mosque is a historically significant and architecturally stunning place of worship in Istanbul, renowned worldwide.'
  },
];
const places3Data = [
  {
    image: 'https://www.gotobursa.com.tr/uploads/2021/01/dji_0034_large_1_large.jpg',
    title: 'Ulu Cami/ Bursa',
    price: 'free',
    currency: '$',
    star: 2.5,
    description: 'Ulu Mosque in Bursa is a historically and religiously significant mosque from the Ottoman era.'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzz633ddw16y-Gp6ifNnZm-Cv0aqHC1wzxg&s',
    title: 'Uludağ/ Bursa',
    price: 89.53,
    currency: '$',
    star: 4,
    description: "Uludağ is a popular mountain in Bursa, known for winter sports, nature hikes, camping, and as one of Turkey's most important ski resorts."
  },
  {
    image: 'https://www.kucukoteller.com.tr/storage/images/2021/05/10/1620633384560764.webp',
    title: 'Mudanya/ Bursa',
    price: 37.67,
    currency: '$',
    star: 3,
    description: 'Mudanya is a historic district on the coast of the Sea of Marmara in Bursa. Known for its cultural heritage and beautiful beaches, Mudanya offers relaxation at its seaside restaurants.'
  },
];
const places4Data = [
  {
    image: 'https://www.oggusto.com/_next/image?url=https%3A%2F%2Fwp.oggusto.com%2Fwp-content%2Fuploads%2F2022%2F11%2Fpamukkale.webp&w=3840&q=75',
    title: 'Pamukkale Travertenleri/ Pamukkale',
    price: 47.23,
    currency: '$',
    star: 2.5,
    description: "Pamukkale Travertines, known for their white limestone terraces and thermal waters, are a UNESCO World Heritage Site."
  },
  {
    image: 'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/karahayit-kaplicalari-1-41311.webp',
    title: 'Karahayit Kaplıcası/ Pamukkale',
    price: 35.56,
    currency: '$',
    star: 3.5,
    description: 'Karahayıt Hot Springs, located in Pamukkale, is a significant health tourism spot known for its thermal waters, healing mud, and mineral-rich springs.'
  },
  {
    image: 'https://assets.enuygun.com/media/lib/825x620/uploads/image/laodikeia-25716.webp',
    title: 'Laodikeia Antik Kenti/ Pamukkale',
    price: 38.19,
    currency: '$',
    star: 2.5,
    description: "The Ancient City of Laodikeia is a place where white travertines and ancient ruins intertwine, blending history and nature."
  },
];
const places5Data = [
  {
    image: 'https://cdn2.enuygun.com/media/lib/825x620/uploads/image/uchisar-38672.webp',
    title: 'Uçhisar Kalesi/ Nevşehir',
    price: 200.34,
    currency: '$',
    star: 3,
    description: "Uçhisar Castle in Nevşehir is one of the highest points in Cappadocia, offering stunning views where history and nature converge."
  },
  {
    image: 'https://www.kulturportali.gov.tr/repoKulturPortali/small/PetekIcon/KapadokyaIcon_20180123224346130.jpg',
    title: 'Göreme Milli Park/ Nevşehir',
    price: 150.56,
    currency: '$',
    star: 5,
    description: 'Göreme National Park in Nevşehir is a stunning natural wonder filled with unique fairy chimneys and historical settlements.'
  },
  {
    image: 'https://cdn2.enuygun.com/media/lib/500x300/uploads/image/guvercinlik-vadisi-38660.webp',
    title: 'Güvercinlik Vadisi/ Nevşehir',
    price: 185.77,
    currency: '$',
    star: 3.5,
    description: 'Pigeon Valley is a serene area in Nevşehir, known for its historic rock formations. This region offers breathtaking views and scenic hiking trails, making it an ideal spot for nature lovers.'
  },
];
const places6Data = [
  {
    image: 'https://cdn.ytur.net/fit-in/252x168/filters:quality(100)/filters:format(webp)/post/changuu-adasi-220403-113425-6110.jpg',
    title: 'Jambiani Village/ Tanzania',
    price: 240.57,
    currency: '$',
    star: 4.5,
    description: "Jambiani Village is a peaceful coastal village on Tanzania's Zanzibar Island, known for its tranquil beaches and rich local culture."
  },
  {
    image: 'https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-zanzibar.jpg',
    title: 'Zanzibar/ Tanzania',
    price: 310.20,
    currency: '$',
    star: 4,
    description: 'Zanzibar is a captivating archipelago off the eastern coast of Tanzania, known for its white sandy beaches and rich culture.'
  },
  {
    image: 'https://image.milimaj.com/i/milliyet/75/869x477/5f6fc20c55428408b83ad5bb.jpg',
    title: 'Kilimanjaro/ Tanzania',
    price: 235.18,
    currency: '$',
    star: 4.5,
    description: 'Kilimanjaro, located in Tanzania, is the highest peak in Africa and captivates adventure enthusiasts with its unique natural beauty and challenging climbing routes.'
  },
];
const places7Data = [
  {
    image: 'https://blog.yurtdisitatilim.com/wp-content/uploads/2023/08/Fransa-H3_Lyon.jpg',
    title: 'Lyon/ France',
    price: 310.20,
    currency: '$',
    star: 4,
    description: "Lyon is known as the gastronomic capital of France. It is famous for its rich cultural heritage, historic architecture, and vibrant arts scene, offering visitors diverse experiences."
  },
  {
    image: 'https://blog.yurtdisitatilim.com/wp-content/uploads/2023/08/Fransa-H3_Strasbourg.jpg',
    title: 'Strasbourg/ France',
    price: 250.20,
    currency: '$',
    star: 4,
    description: 'Strasbourg is a historic city located in eastern France, known for hosting the European Parliament and famous for its medieval architecture, beautiful canals, and cultural diversity.'
  },
  {
    image: 'https://assets.enuygun.com/media/lib/500x300/uploads/image/eyfel-kulesi-paris-2180.webp',
    title: 'Eiffel Tower/ France',
    price: 235.18,
    currency: '$',
    star: 4.5,
    description: 'The Eiffel Tower, located in Paris, is one of the worlds most recognizable landmarks, constructed in 1889 with its iconic iron structure.'
  },
];

const places8Data = [
  {
    image: 'https://image.posta.com.tr/i/posta/75/0x410/6177876145d2a0b2541c9bc9.jpg',
    title: 'Bristoll/ England',
    price: 255.16,
    currency: '$',
    star: 4,
    description: "Bristol is a city in England known for its historic harbor, vibrant cultural scene, rich artistic heritage, and dynamic student population, offering a blend of modern and historical charm."
  },
  {
    image: 'https://blog.yurtdisitatilim.com/wp-content/uploads/2023/08/Ingiltere-H2_Cambridge.jpg',
    title: 'Cambridge/ England',
    price: 190.20,
    currency: '$',
    star: 3,
    description: 'Cambridge is a historic city in eastern England, known for Cambridge University, founded in 1209. The city is famous for its beautiful architecture, historic buildings, and peaceful riverside parks.'
  },
  {
    image: 'https://blog.yurtdisitatilim.com/wp-content/uploads/2023/08/Ingiltere-H2_Liverpool.jpg',
    title: 'Liverpool / England',
    price: 185.18,
    currency: '$',
    star: 2.5,
    description: 'Liverpool is a historic port city in northwest England, known as the home of the world-famous music group The Beatles. The city is also recognized for its rich cultural heritage, vibrant arts scene, and football teams.'
  },
];
const places9Data = [
  {
    image: 'https://st3.depositphotos.com/1000633/31917/i/450/depositphotos_319177858-stock-photo-the-grand-place-in-brussels.jpg',
    title: 'Brussels / Belgium',
    price: 214.11,
    currency: '$',
    star: 3.5,
    description: "Brussels is the capital of Belgium and recognized as a historical city that serves as the official center of the European Union."
  },
  {
    image: 'https://cdn.getyourguide.com/img/tour/8cf7b09a8251dffe.jpeg/132.webp',
    title: 'Dinant/ Belgium',
    price: 170.20,
    currency: '$',
    star: 3,
    description: 'Dinant is a charming city on the banks of the Meuse River in Belgium, renowned for its historic landmarks, colorful houses, and stunning views.'
  },
  {
    image: 'https://www.mngturizm.com/upload/blog/09-05-belcika-gezilecek-yerler-15/5.jpg',
    title: 'Ghent Gravensteen Castle/ Belgium',
    price: 150.13,
    currency: '$',
    star: 2.5,
    description: 'Gravensteen Castle in Ghent, Belgium, is a historic structure from the 12th century that offers visitors captivating views.'
  },
];

const places10Data = [
  {
    image: 'http://assets.enuygun.com/media/lib/825x620/uploads/image/roma-kolezyum-1967.webp',
    title: 'Flavian Amphitheater/ İtaly',
    price: 166.71,
    currency: '$',
    star: 2.5,
    description: "The Flavian Amphitheater, commonly known as the Colosseum, is an ancient Roman structure in the heart of Rome, recognized for its association with gladiatorial contests."
  },
  {
    image: 'http://assets.enuygun.com/media/lib/825x620/uploads/image/venedik-49738.webp',
    title: 'Venice/Italy',
    price: 220.31,
    currency: '$',
    star: 3,
    description: "Venice, Italy, is a unique city built on a network of canals, renowned for its stunning architecture, rich cultural heritage, and iconic landmarks such as St. Mark's Basilica and the Grand Canal."
  },
  {
    image: 'http://assets.enuygun.com/media/lib/825x620/uploads/image/vatikan-muzeleri-24433.webp',
    title: 'Vatican Museums / Italy',
    price: 155.19,
    currency: '$',
    star: 2.5,
    description: 'The Vatican Museums, located in Vatican City, Italy, are a vast art collection known for their stunning galleries, including the Sistine Chapel, and masterpieces by artists like Michelangelo and Raphael.'
  },
];
const places11Data = [
  {
    image: 'https://bujuyollarda.com/wp-content/uploads/2022/05/Teotihuacan-Piramitleri.jpg',
    title: 'Teotihuacan Pyramids/ Mexico',
    price: 75.12,
    currency: '$',
    star: 2,
    description: "The Teotihuacan Pyramids in Mexico are a remarkable archaeological site known for their massive structures, including the Pyramid of the Sun and the Pyramid of the Moon."
  },
  {
    image: 'https://bujuyollarda.com/wp-content/uploads/2022/05/Los-Coloradas.jpg',
    title: 'Los Coloradas/ Mexico',
    price: 220.31,
    currency: '$',
    star: 3,
    description: "Los Coloradas is a region in Mexico's Yucatán Peninsula, known for its pink salt lagoons. The unique colors, caused by microorganisms in the salt, offer visitors stunning views."
  },
  {
    image: 'https://bujuyollarda.com/wp-content/uploads/2022/05/cozumel.jpg',
    title: 'Cozumel/ Mexico',
    price: 316.13,
    currency: '$',
    star: 4.5,
    description: "Cozumel is an island in the Caribbean Sea off Mexico's coast, known for its stunning beaches and rich marine life, offering diving opportunities and historical ruins to explore."
  },
];




</script>

<template>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet">

  <v-app>
    <div v-if="$route.path === '/'">
      <div class="header">
        <span class="title">TripSuggestion.com</span>
      </div>
      <div class="main-banner">
        <h1>FIND YOUR PERFECT TRIP!</h1>
        <div class="buttons">


          <v-btn v-if="!userId" variant="outlined" @click="goToSignIn"><v-icon left dark>mdi-account</v-icon>
            Sign In
            
          </v-btn>
          <v-btn v-else variant="outlined" @click="logOut"><v-icon left dark>mdi-account</v-icon>
            Log Out
            
          </v-btn>

          <v-btn v-if="!userId" variant="outlined" @click="goToRegister"><v-icon left dark>mdi-account</v-icon>
            Register
          </v-btn>

          <v-btn v-if="userId" variant="outlined" @click="goToAskForaSuggestion">
            Ask For A Suggestion
          </v-btn>

        </div>
      </div>
      <section id="section-a">
        <div class="content">
          <h2 class="places">Places</h2>
          <p>
            Which cities would you like to visit? Find the best travel and tour routes.
          </p>
        </div>
      </section>

      <section id="section-b">
        <ul>
          <li v-for="place in places1Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-c">
        <ul>
          <li v-for="place in places2Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-d">
        <ul>
          <li v-for="place in places3Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-e">
        <ul>
          <li v-for="place in places4Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-f">
        <ul>
          <li v-for="place in places5Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-g">
        <ul>
          <li v-for="place in places6Data">
            <div class="col">

              <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
              <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
                color="yellow-darken-2"></v-rating>
              <div class="col-content">
                <h3 class="col-title">{{ place.title }}</h3>
                <p>{{ place.currency }} {{ place.price }}
                <p>{{ place.description }}</p>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="section-7">
      <ul>
        <li v-for="place in places7Data">
          <div class="col">

            <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
            <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
              color="yellow-darken-2"></v-rating>
            <div class="col-content">
              <h3 class="col-title">{{ place.title }}</h3>
              <p>{{ place.currency }} {{ place.price }}
              <p>{{ place.description }}</p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="section-8">
      <ul>
        <li v-for="place in places8Data">
          <div class="col">

            <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
            <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
              color="yellow-darken-2"></v-rating>
            <div class="col-content">
              <h3 class="col-title">{{ place.title }}</h3>
              <p>{{ place.currency }} {{ place.price }}
              <p>{{ place.description }}</p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="section-9">
      <ul>
        <li v-for="place in places9Data">
          <div class="col">

            <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
            <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
              color="yellow-darken-2"></v-rating>
            <div class="col-content">
              <h3 class="col-title">{{ place.title }}</h3>
              <p>{{ place.currency }} {{ place.price }}
              <p>{{ place.description }}</p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="section-10">
      <ul>
        <li v-for="place in places10Data">
          <div class="col">

            <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
            <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
              color="yellow-darken-2"></v-rating>
            <div class="col-content">
              <h3 class="col-title">{{ place.title }}</h3>
              <p>{{ place.currency }} {{ place.price }}
              <p>{{ place.description }}</p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section id="section-11">
      <ul>
        <li v-for="place in places11Data">
          <div class="col">

            <v-img :width="400" aspect-ratio="16/9" cover :src="place.image"></v-img>
            <v-rating v-model="place.star" half-increments hover active-color="#ffd700"
              color="yellow-darken-2"></v-rating>
            <div class="col-content">
              <h3 class="col-title">{{ place.title }}</h3>
              <p>{{ place.currency }} {{ place.price }}
              <p>{{ place.description }}</p>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>


      <v-footer class="custom-footer-bg text-center d-flex flex-column">
        <div>
          <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
          ut
          risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
          Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices,
          cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius
          natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div>
          {{ new Date().getFullYear() }} — <strong>TripSuggestion</strong>
        </div>
      </v-footer>
    </div>
  </v-app>
</template>



<style scoped>
.header {
  background-color: rgb(37, 123, 235);
  padding: 10px;
}

.title {
  margin-left: 130px;
  background-color: rgb(3, 87, 197);
  padding: 13px;
  font-size: larger;
  color: white;
}

.main-banner {
  text-align: center;
  background: url('public/p1.jpeg') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 250px;

}


.buttons {
  margin-top: 20px;
}

.buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: white;
  color: rgb(3, 87, 197);
  border: none;
  cursor: pointer;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 7px;
}

a {
  text-decoration: none;
}

p {
  padding: 1.6rem 0;
  font-size: 1.2rem;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

header {
  height: 46rem;
}

header .bg-image {
  background-image: url(imagess/picture1.jpg);
  background-size: cover;
  background-position: center;
  height: 46rem;
  width: 100%;
  opacity: 0.4;
  position: absolute;
  z-index: -1;
}

header h1 {
  padding: 12rem;
  padding-bottom: 0;

}


img {
  width: 100%;
  height: auto;
}

#section-b,#section-c,#section-d,#section-e,#section-f,#section-g,#section-7,#section-8,#section-9,#section-10,#section-11 {
  margin-top: 0px;
  margin-bottom: 80px;
}

#section-b ul,#section-c ul,#section-d ul,#section-e ul,#section-f ul,#section-g ul,#section-7 ul,#section-8 ul,#section-9 ul,#section-10 ul,#section-11 {
  list-style: none;
  background-color: #383f46;
  padding: 0 150px;
}

#section-b li,#section-c li,#section-d li,#section-e li,#section-f li,#section-g li,#section-7 li,#section-8 li,#section-9 li,#section-10 li,#section-11 li {
  background: #fff;
  color: #383f46;
  margin-bottom: 1.5rem;
  margin: 30px;

}

.col-content {
  padding: 1.5rem;
}

@media screen and (min-width:800px) {
  html {
    font-size: 9px;
  }

}

@media screen and (min-width:1200px) {
  html {
    font-size: 11px;
  }

  #section-b li,#section-c li,#section-d li,#section-e li, #section-f li,#section-g li,#section-7 li,#section-8 li,#section-9 li,#section-10 li,#section-11 li {
    width: 23%;
    margin: 5%;
    display: inline-block;

  }

  .box {
    width: 50%;
    float: left;
  }


}

#c2 {
  margin-left: 130px;
  background-color: rgb(3, 87, 197);
  padding: 23px;
  font-size: larger;
  color: white;
}

.v-icon {
  color: black;
}


.stars {
  color: #ffd700;
  /* Yıldızların rengi */
  font-size: 1.5rem;
}

.heart-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 2rem;
  color: rgb(236, 106, 106);
}


.custom-footer-bg {
  background-color: rgb(37, 123, 235);
  /* İstediğiniz arka plan rengi */
  padding-top: 50px;
}

.places {

  font-weight: bolder;
  /* Kalın yazı tipi */
  font-style: italic;
  font-family: "Roboto", sans-serif;
  font-size: 2.3rem;
  line-height: 1.5;
  text-align: center;
}

#section-b li,#section-c li,#section-d li,#section-e li,#section-f li,#section-g li,#section-7 li,#section-8 li,#section-9 li,#section-10 li,#section-11 li,#section-a {
  font-weight: normal;
  /* Kalın yazı tipi */
  font-style: normal;
  /* İtalik yazı tipi */
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  text-align: center;
}

#section-a {
  background-color: #eaeaea;
  color: #333;
  padding: 3.2rem 0;
}
</style>

